const airports = [
  { id: "ALL", name: "全拠点", code: "ALL", lat: 36.2, lon: 137.9, zoom: 5 },
  { id: "RJTF", name: "調布", code: "RJTF", lat: 35.6717, lon: 139.5272, zoom: 10 },
  { id: "RJSS", name: "仙台", code: "RJSS", lat: 38.1397, lon: 140.9169, zoom: 9 },
  { id: "RJNA", name: "名古屋", code: "RJNA", lat: 35.255, lon: 136.924, zoom: 9 },
  { id: "RJOY", name: "八尾", code: "RJOY", lat: 34.5963, lon: 135.6029, zoom: 10 },
  { id: "RJFR", name: "北九州", code: "RJFR", lat: 33.8459, lon: 131.0347, zoom: 9 },
];

const sampleNotams = [
  {
    id: "D001",
    airport: "RJTF",
    severity: "critical",
    title: "RWY運用制限の可能性",
    period: "TODAY 0900-1700 JST",
    body: "滑走路または周辺作業に関するNOTAMを想定したサンプル。離着陸可否、使用滑走路、時間帯を確認。",
    lat: 35.6717,
    lon: 139.5272,
    checked: false,
    comment: ""
  },
  {
    id: "D002",
    airport: "RJSS",
    severity: "warning",
    title: "RAIM予測情報 要確認",
    period: "TODAY",
    body: "GPS/RAIM関連情報のサンプル。計器進入・航法要件が関係する場合は詳細確認。",
    lat: 38.1397,
    lon: 140.9169,
    checked: false,
    comment: ""
  },
  {
    id: "D003",
    airport: "RJNA",
    severity: "info",
    title: "誘導路作業情報",
    period: "NEXT 24H",
    body: "誘導路またはエプロン周辺作業のサンプル。地上移動経路への影響を確認。",
    lat: 35.255,
    lon: 136.924,
    checked: true,
    comment: "朝確認済み"
  },
  {
    id: "D004",
    airport: "RJOY",
    severity: "warning",
    title: "障害物件情報",
    period: "UNTIL 1800 JST",
    body: "クレーン等の障害物件サンプル。高度、位置、撮影コースとの関係を確認。",
    lat: 34.5963,
    lon: 135.6029,
    checked: false,
    comment: ""
  },
  {
    id: "D005",
    airport: "RJFR",
    severity: "critical",
    title: "公示空域使用",
    period: "TODAY 1200-1600 JST",
    body: "公示空域使用のサンプル。予定経路・撮影区域との重なりを確認。",
    lat: 33.8459,
    lon: 131.0347,
    checked: false,
    comment: ""
  }
];

let state = {
  selectedAirport: "ALL",
  severity: new Set(["critical", "warning", "info"]),
  search: "",
  todayOnly: false,
  notams: loadState()
};

function loadState() {
  const saved = localStorage.getItem("skyops-notams-v01");
  if (!saved) return sampleNotams;
  try {
    return JSON.parse(saved);
  } catch {
    return sampleNotams;
  }
}

function saveState() {
  localStorage.setItem("skyops-notams-v01", JSON.stringify(state.notams));
}

const map = L.map("map", { zoomControl: true }).setView([36.2, 137.9], 5);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: "© OpenStreetMap contributors"
}).addTo(map);

let markerLayer = L.layerGroup().addTo(map);

function severityLabel(severity) {
  return severity === "critical" ? "重要" : severity === "warning" ? "要確認" : "情報";
}

function severityColor(severity) {
  return severity === "critical" ? "#fb7185" : severity === "warning" ? "#fbbf24" : "#34d399";
}

function classifyText(text) {
  const t = text.toUpperCase();
  if (t.includes("CLOSED") || t.includes("CLS") || t.includes("RWY") || t.includes("公示空域")) return "critical";
  if (t.includes("RAIM") || t.includes("OBST") || t.includes("CRANE") || t.includes("障害")) return "warning";
  return "info";
}

function filteredNotams() {
  return state.notams.filter(n => {
    const airportMatch = state.selectedAirport === "ALL" || n.airport === state.selectedAirport;
    const severityMatch = state.severity.has(n.severity);
    const query = state.search.trim().toLowerCase();
    const searchMatch = !query || `${n.airport} ${n.title} ${n.body} ${n.period}`.toLowerCase().includes(query);
    const todayMatch = !state.todayOnly || `${n.period} ${n.body}`.toLowerCase().includes("today") || `${n.period} ${n.body}`.includes("本日");
    return airportMatch && severityMatch && searchMatch && todayMatch;
  });
}

function renderAirports() {
  const root = document.getElementById("airportButtons");
  root.innerHTML = "";
  airports.forEach(a => {
    const count = a.id === "ALL" ? state.notams.length : state.notams.filter(n => n.airport === a.id).length;
    const btn = document.createElement("button");
    btn.className = `airport-btn ${state.selectedAirport === a.id ? "active" : ""}`;
    btn.innerHTML = `<span>${a.code} ${a.name}</span><strong>${count}</strong>`;
    btn.onclick = () => {
      state.selectedAirport = a.id;
      const target = airports.find(x => x.id === a.id);
      map.setView([target.lat, target.lon], target.zoom);
      render();
    };
    root.appendChild(btn);
  });
}

function renderMap(list) {
  markerLayer.clearLayers();

  list.forEach(n => {
    const marker = L.circleMarker([n.lat, n.lon], {
      radius: n.severity === "critical" ? 12 : 9,
      fillColor: severityColor(n.severity),
      color: "#ffffff",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.84
    }).addTo(markerLayer);

    marker.bindPopup(`
      <strong>${n.airport} / ${severityLabel(n.severity)}</strong><br>
      ${n.title}<br>
      <small>${n.period}</small>
    `);
  });
}

function renderNotams(list) {
  const root = document.getElementById("notamList");
  const template = document.getElementById("notamTemplate");
  root.innerHTML = "";

  if (list.length === 0) {
    root.innerHTML = `<div class="notice"><strong>該当なし</strong><p>条件に合うNOTAMがありません。</p></div>`;
    return;
  }

  list.forEach(n => {
    const node = template.content.cloneNode(true);
    const item = node.querySelector(".notam-item");
    const badge = node.querySelector(".badge");
    badge.className = `badge ${n.severity}`;
    badge.textContent = severityLabel(n.severity);
    node.querySelector(".airport").textContent = n.airport;
    node.querySelector(".period").textContent = n.period;
    node.querySelector("h4").textContent = n.title;
    node.querySelector(".notam-body").textContent = n.body;

    const check = node.querySelector(".checkInput");
    check.checked = n.checked;
    check.onchange = e => {
      n.checked = e.target.checked;
      saveState();
      render();
    };

    const comment = node.querySelector(".commentInput");
    comment.value = n.comment || "";
    comment.oninput = e => {
      n.comment = e.target.value;
      saveState();
    };

    root.appendChild(node);
  });
}

function renderMetrics(list) {
  document.getElementById("criticalCount").textContent = list.filter(n => n.severity === "critical").length;
  document.getElementById("warningCount").textContent = list.filter(n => n.severity === "warning").length;
  document.getElementById("checkedCount").textContent = state.notams.filter(n => n.checked).length;
  document.getElementById("airportCount").textContent = new Set(list.map(n => n.airport)).size;
}

function renderBriefing(list) {
  const groups = {};
  airports.filter(a => a.id !== "ALL").forEach(a => groups[a.id] = []);
  list.forEach(n => {
    if (!groups[n.airport]) groups[n.airport] = [];
    groups[n.airport].push(n);
  });

  let lines = [];
  lines.push("【SkyOps Board 朝ブリーフィング案】");
  lines.push(`対象：${state.selectedAirport === "ALL" ? "全拠点" : state.selectedAirport}`);
  lines.push("");
  Object.entries(groups).forEach(([airport, items]) => {
    const critical = items.filter(n => n.severity === "critical").length;
    const warning = items.filter(n => n.severity === "warning").length;
    if (items.length === 0) {
      lines.push(`・${airport}：該当なし`);
    } else {
      lines.push(`・${airport}：重要 ${critical}件 / 要確認 ${warning}件 / 合計 ${items.length}件`);
      items.slice(0, 3).forEach(n => lines.push(`　- ${severityLabel(n.severity)}：${n.title}（${n.period}）`));
    }
  });
  lines.push("");
  lines.push("※試作画面の要約です。運航判断には必ず公式情報を確認してください。");
  document.getElementById("briefingText").textContent = lines.join("\n");
}

function render() {
  renderAirports();
  const list = filteredNotams();
  document.getElementById("listTitle").textContent = state.selectedAirport === "ALL" ? "全拠点" : state.selectedAirport;
  renderMap(list);
  renderNotams(list);
  renderMetrics(list);
  renderBriefing(list);
}

document.querySelectorAll(".filters input").forEach(input => {
  input.onchange = e => {
    if (e.target.checked) state.severity.add(e.target.value);
    else state.severity.delete(e.target.value);
    render();
  };
});

document.getElementById("searchBox").oninput = e => {
  state.search = e.target.value;
  render();
};

document.getElementById("todayBtn").onclick = () => {
  state.todayOnly = true;
  render();
};

document.getElementById("resetBtn").onclick = () => {
  state.selectedAirport = "ALL";
  state.severity = new Set(["critical", "warning", "info"]);
  state.search = "";
  state.todayOnly = false;
  document.getElementById("searchBox").value = "";
  document.querySelectorAll(".filters input").forEach(i => i.checked = true);
  map.setView([36.2, 137.9], 5);
  render();
};

document.getElementById("copyBriefingBtn").onclick = async () => {
  const text = document.getElementById("briefingText").textContent;
  await navigator.clipboard.writeText(text);
  alert("ブリーフィング案をコピーしました");
};

document.getElementById("xmlUpload").onchange = async e => {
  const file = e.target.files?.[0];
  if (!file) return;
  const text = await file.text();
  const title = file.name.replace(/\.[^.]+$/, "");
  const upper = text.toUpperCase();
  const airport = airports.find(a => a.id !== "ALL" && upper.includes(a.id))?.id || "RJTF";
  const airportInfo = airports.find(a => a.id === airport);
  const severity = classifyText(text);
  const snippet = text.replace(/\s+/g, " ").trim().slice(0, 320);

  const newItem = {
    id: `UP-${Date.now()}`,
    airport,
    severity,
    title: `読込データ：${title}`,
    period: "UPLOADED",
    body: snippet || "XML/TXTファイルを読み込みました。詳細解析ロジックは今後追加予定です。",
    lat: airportInfo.lat + (Math.random() - 0.5) * 0.08,
    lon: airportInfo.lon + (Math.random() - 0.5) * 0.08,
    checked: false,
    comment: ""
  };

  state.notams.unshift(newItem);
  saveState();
  render();
  alert("ファイルを読み込みました。まずは簡易分類で一覧に追加しました。");
};

document.getElementById("exportKmlBtn").onclick = () => {
  const list = filteredNotams();
  const placemarks = list.map(n => `
    <Placemark>
      <name>${escapeXml(n.airport)} ${escapeXml(severityLabel(n.severity))}</name>
      <description>${escapeXml(n.title + " / " + n.body)}</description>
      <Point><coordinates>${n.lon},${n.lat},0</coordinates></Point>
    </Placemark>`).join("");

  const kml = `<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
<Document>
  <name>SkyOps Board NOTAM Export</name>
  ${placemarks}
</Document>
</kml>`;

  const blob = new Blob([kml], { type: "application/vnd.google-earth.kml+xml" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "skyops-notam-export.kml";
  a.click();
  URL.revokeObjectURL(url);
};

function escapeXml(str) {
  return String(str).replace(/[<>&'"]/g, ch => ({
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    "'": "&apos;",
    '"': "&quot;"
  }[ch]));
}

render();
