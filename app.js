'use strict';

const QUESTIONS = [
  {
    "id": "q001",
    "subject": "math",
    "unit": "かけ算",
    "level": 1,
    "question": "6 × 7 = ？",
    "choices": [
      "35",
      "42",
      "43",
      "48"
    ],
    "answer": "42",
    "explanation": "6が7こ分あるので、6×7=42です。",
    "hint": "九九を思い出そう。"
  },
  {
    "id": "q002",
    "subject": "math",
    "unit": "かけ算",
    "level": 1,
    "question": "8 × 7 = ？",
    "choices": [
      "64",
      "63",
      "49",
      "56"
    ],
    "answer": "56",
    "explanation": "8が7こ分あるので、8×7=56です。",
    "hint": "九九を思い出そう。"
  },
  {
    "id": "q003",
    "subject": "math",
    "unit": "かけ算",
    "level": 1,
    "question": "9 × 6 = ？",
    "choices": [
      "63",
      "54",
      "60",
      "48"
    ],
    "answer": "54",
    "explanation": "9が6こ分あるので、9×6=54です。",
    "hint": "九九を思い出そう。"
  },
  {
    "id": "q004",
    "subject": "math",
    "unit": "かけ算",
    "level": 1,
    "question": "7 × 4 = ？",
    "choices": [
      "32",
      "24",
      "28",
      "35"
    ],
    "answer": "28",
    "explanation": "7が4こ分あるので、7×4=28です。",
    "hint": "九九を思い出そう。"
  },
  {
    "id": "q005",
    "subject": "math",
    "unit": "かけ算",
    "level": 1,
    "question": "8 × 9 = ？",
    "choices": [
      "80",
      "63",
      "72",
      "74"
    ],
    "answer": "72",
    "explanation": "8が9こ分あるので、8×9=72です。",
    "hint": "九九を思い出そう。"
  },
  {
    "id": "q006",
    "subject": "math",
    "unit": "かけ算",
    "level": 1,
    "question": "5 × 7 = ？",
    "choices": [
      "40",
      "28",
      "35",
      "30"
    ],
    "answer": "35",
    "explanation": "5が7こ分あるので、5×7=35です。",
    "hint": "九九を思い出そう。"
  },
  {
    "id": "q007",
    "subject": "math",
    "unit": "かけ算",
    "level": 1,
    "question": "9 × 8 = ？",
    "choices": [
      "80",
      "72",
      "64",
      "81"
    ],
    "answer": "72",
    "explanation": "9が8こ分あるので、9×8=72です。",
    "hint": "九九を思い出そう。"
  },
  {
    "id": "q008",
    "subject": "math",
    "unit": "かけ算",
    "level": 1,
    "question": "6 × 8 = ？",
    "choices": [
      "54",
      "40",
      "48",
      "58"
    ],
    "answer": "48",
    "explanation": "6が8こ分あるので、6×8=48です。",
    "hint": "九九を思い出そう。"
  },
  {
    "id": "q009",
    "subject": "math",
    "unit": "かけ算",
    "level": 1,
    "question": "7 × 7 = ？",
    "choices": [
      "49",
      "42",
      "39",
      "56"
    ],
    "answer": "49",
    "explanation": "7が7こ分あるので、7×7=49です。",
    "hint": "九九を思い出そう。"
  },
  {
    "id": "q010",
    "subject": "math",
    "unit": "かけ算",
    "level": 1,
    "question": "9 × 9 = ？",
    "choices": [
      "78",
      "90",
      "72",
      "81"
    ],
    "answer": "81",
    "explanation": "9が9こ分あるので、9×9=81です。",
    "hint": "九九を思い出そう。"
  },
  {
    "id": "q011",
    "subject": "math",
    "unit": "かけ算",
    "level": 1,
    "question": "4 × 8 = ？",
    "choices": [
      "37",
      "24",
      "32",
      "36"
    ],
    "answer": "32",
    "explanation": "4が8こ分あるので、4×8=32です。",
    "hint": "九九を思い出そう。"
  },
  {
    "id": "q012",
    "subject": "math",
    "unit": "かけ算",
    "level": 1,
    "question": "3 × 9 = ？",
    "choices": [
      "30",
      "28",
      "18",
      "27"
    ],
    "answer": "27",
    "explanation": "3が9こ分あるので、3×9=27です。",
    "hint": "九九を思い出そう。"
  },
  {
    "id": "q013",
    "subject": "math",
    "unit": "わり算",
    "level": 1,
    "question": "18 ÷ 3 = ？",
    "choices": [
      "7",
      "9",
      "5",
      "6"
    ],
    "answer": "6",
    "explanation": "3×6=18なので、答えは6です。",
    "hint": "わり算は「何個ずつ分けるか」を考えるとわかりやすいよ。"
  },
  {
    "id": "q014",
    "subject": "math",
    "unit": "わり算",
    "level": 1,
    "question": "24 ÷ 6 = ？",
    "choices": [
      "4",
      "5",
      "3",
      "10"
    ],
    "answer": "4",
    "explanation": "6×4=24なので、答えは4です。",
    "hint": "わり算は「何個ずつ分けるか」を考えるとわかりやすいよ。"
  },
  {
    "id": "q015",
    "subject": "math",
    "unit": "わり算",
    "level": 1,
    "question": "35 ÷ 5 = ？",
    "choices": [
      "7",
      "12",
      "8",
      "6"
    ],
    "answer": "7",
    "explanation": "5×7=35なので、答えは7です。",
    "hint": "わり算は「何個ずつ分けるか」を考えるとわかりやすいよ。"
  },
  {
    "id": "q016",
    "subject": "math",
    "unit": "わり算",
    "level": 1,
    "question": "42 ÷ 7 = ？",
    "choices": [
      "13",
      "6",
      "7",
      "5"
    ],
    "answer": "6",
    "explanation": "7×6=42なので、答えは6です。",
    "hint": "わり算は「何個ずつ分けるか」を考えるとわかりやすいよ。"
  },
  {
    "id": "q017",
    "subject": "math",
    "unit": "わり算",
    "level": 1,
    "question": "56 ÷ 8 = ？",
    "choices": [
      "15",
      "7",
      "6",
      "8"
    ],
    "answer": "7",
    "explanation": "8×7=56なので、答えは7です。",
    "hint": "わり算は「何個ずつ分けるか」を考えるとわかりやすいよ。"
  },
  {
    "id": "q018",
    "subject": "math",
    "unit": "わり算",
    "level": 1,
    "question": "63 ÷ 9 = ？",
    "choices": [
      "16",
      "8",
      "6",
      "7"
    ],
    "answer": "7",
    "explanation": "9×7=63なので、答えは7です。",
    "hint": "わり算は「何個ずつ分けるか」を考えるとわかりやすいよ。"
  },
  {
    "id": "q019",
    "subject": "math",
    "unit": "わり算",
    "level": 1,
    "question": "36 ÷ 4 = ？",
    "choices": [
      "9",
      "8",
      "10",
      "13"
    ],
    "answer": "9",
    "explanation": "4×9=36なので、答えは9です。",
    "hint": "わり算は「何個ずつ分けるか」を考えるとわかりやすいよ。"
  },
  {
    "id": "q020",
    "subject": "math",
    "unit": "わり算",
    "level": 1,
    "question": "45 ÷ 5 = ？",
    "choices": [
      "10",
      "9",
      "14",
      "8"
    ],
    "answer": "9",
    "explanation": "5×9=45なので、答えは9です。",
    "hint": "わり算は「何個ずつ分けるか」を考えるとわかりやすいよ。"
  },
  {
    "id": "q021",
    "subject": "math",
    "unit": "わり算",
    "level": 1,
    "question": "72 ÷ 8 = ？",
    "choices": [
      "17",
      "10",
      "8",
      "9"
    ],
    "answer": "9",
    "explanation": "8×9=72なので、答えは9です。",
    "hint": "わり算は「何個ずつ分けるか」を考えるとわかりやすいよ。"
  },
  {
    "id": "q022",
    "subject": "math",
    "unit": "わり算",
    "level": 1,
    "question": "81 ÷ 9 = ？",
    "choices": [
      "8",
      "9",
      "18",
      "10"
    ],
    "answer": "9",
    "explanation": "9×9=81なので、答えは9です。",
    "hint": "わり算は「何個ずつ分けるか」を考えるとわかりやすいよ。"
  },
  {
    "id": "q023",
    "subject": "math",
    "unit": "わり算",
    "level": 1,
    "question": "28 ÷ 4 = ？",
    "choices": [
      "6",
      "7",
      "8",
      "11"
    ],
    "answer": "7",
    "explanation": "4×7=28なので、答えは7です。",
    "hint": "わり算は「何個ずつ分けるか」を考えるとわかりやすいよ。"
  },
  {
    "id": "q024",
    "subject": "math",
    "unit": "わり算",
    "level": 1,
    "question": "54 ÷ 6 = ？",
    "choices": [
      "15",
      "10",
      "8",
      "9"
    ],
    "answer": "9",
    "explanation": "6×9=54なので、答えは9です。",
    "hint": "わり算は「何個ずつ分けるか」を考えるとわかりやすいよ。"
  },
  {
    "id": "q025",
    "subject": "math",
    "unit": "たし算・ひき算の筆算",
    "level": 1,
    "question": "1248 + 2365 = ？",
    "choices": [
      "3613",
      "3623",
      "3713",
      "3513"
    ],
    "answer": "3613",
    "explanation": "一の位から順番に計算します。くり上がりに気をつけると、3613になります。",
    "hint": "位をそろえて計算しよう。"
  },
  {
    "id": "q026",
    "subject": "math",
    "unit": "たし算・ひき算の筆算",
    "level": 1,
    "question": "3078 + 1964 = ？",
    "choices": [
      "5042",
      "5052",
      "4942",
      "5142"
    ],
    "answer": "5042",
    "explanation": "一の位から順番に計算します。くり上がりに気をつけると、5042になります。",
    "hint": "位をそろえて計算しよう。"
  },
  {
    "id": "q027",
    "subject": "math",
    "unit": "たし算・ひき算の筆算",
    "level": 1,
    "question": "4500 + 278 = ？",
    "choices": [
      "4678",
      "4788",
      "4878",
      "4778"
    ],
    "answer": "4778",
    "explanation": "一の位から順番に計算します。くり上がりに気をつけると、4778になります。",
    "hint": "位をそろえて計算しよう。"
  },
  {
    "id": "q028",
    "subject": "math",
    "unit": "たし算・ひき算の筆算",
    "level": 1,
    "question": "999 + 1001 = ？",
    "choices": [
      "2010",
      "2000",
      "1900",
      "2100"
    ],
    "answer": "2000",
    "explanation": "一の位から順番に計算します。くり上がりに気をつけると、2000になります。",
    "hint": "位をそろえて計算しよう。"
  },
  {
    "id": "q029",
    "subject": "math",
    "unit": "たし算・ひき算の筆算",
    "level": 1,
    "question": "5820 + 317 = ？",
    "choices": [
      "6237",
      "6147",
      "6037",
      "6137"
    ],
    "answer": "6137",
    "explanation": "一の位から順番に計算します。くり上がりに気をつけると、6137になります。",
    "hint": "位をそろえて計算しよう。"
  },
  {
    "id": "q030",
    "subject": "math",
    "unit": "たし算・ひき算の筆算",
    "level": 1,
    "question": "7024 + 890 = ？",
    "choices": [
      "7914",
      "7814",
      "7924",
      "8014"
    ],
    "answer": "7914",
    "explanation": "一の位から順番に計算します。くり上がりに気をつけると、7914になります。",
    "hint": "位をそろえて計算しよう。"
  },
  {
    "id": "q031",
    "subject": "math",
    "unit": "たし算・ひき算の筆算",
    "level": 1,
    "question": "5000 - 1378 = ？",
    "choices": [
      "3722",
      "3632",
      "3622",
      "3522"
    ],
    "answer": "3622",
    "explanation": "一の位から順番に引きます。くり下がりに気をつけると、3622です。",
    "hint": "引けない位は、ひとつ上の位から借りよう。"
  },
  {
    "id": "q032",
    "subject": "math",
    "unit": "たし算・ひき算の筆算",
    "level": 1,
    "question": "7234 - 1987 = ？",
    "choices": [
      "5257",
      "5347",
      "5247",
      "5147"
    ],
    "answer": "5247",
    "explanation": "一の位から順番に引きます。くり下がりに気をつけると、5247です。",
    "hint": "引けない位は、ひとつ上の位から借りよう。"
  },
  {
    "id": "q033",
    "subject": "math",
    "unit": "たし算・ひき算の筆算",
    "level": 1,
    "question": "6040 - 388 = ？",
    "choices": [
      "5662",
      "5552",
      "5652",
      "5752"
    ],
    "answer": "5652",
    "explanation": "一の位から順番に引きます。くり下がりに気をつけると、5652です。",
    "hint": "引けない位は、ひとつ上の位から借りよう。"
  },
  {
    "id": "q034",
    "subject": "math",
    "unit": "たし算・ひき算の筆算",
    "level": 1,
    "question": "9000 - 4567 = ？",
    "choices": [
      "4443",
      "4533",
      "4433",
      "4333"
    ],
    "answer": "4433",
    "explanation": "一の位から順番に引きます。くり下がりに気をつけると、4433です。",
    "hint": "引けない位は、ひとつ上の位から借りよう。"
  },
  {
    "id": "q035",
    "subject": "math",
    "unit": "たし算・ひき算の筆算",
    "level": 1,
    "question": "8102 - 275 = ？",
    "choices": [
      "7827",
      "7727",
      "7837",
      "7927"
    ],
    "answer": "7827",
    "explanation": "一の位から順番に引きます。くり下がりに気をつけると、7827です。",
    "hint": "引けない位は、ひとつ上の位から借りよう。"
  },
  {
    "id": "q036",
    "subject": "math",
    "unit": "たし算・ひき算の筆算",
    "level": 1,
    "question": "4321 - 1234 = ？",
    "choices": [
      "2987",
      "3097",
      "3187",
      "3087"
    ],
    "answer": "3087",
    "explanation": "一の位から順番に引きます。くり下がりに気をつけると、3087です。",
    "hint": "引けない位は、ひとつ上の位から借りよう。"
  },
  {
    "id": "q037",
    "subject": "math",
    "unit": "大きな数",
    "level": 1,
    "question": "10000は1000が何こ分？",
    "choices": [
      "1こ",
      "10こ",
      "100こ",
      "1000こ"
    ],
    "answer": "10こ",
    "explanation": "1000が10こ集まると10000です。",
    "hint": "「一・十・百・千・万」の位を見よう。"
  },
  {
    "id": "q038",
    "subject": "math",
    "unit": "大きな数",
    "level": 1,
    "question": "三万五千二百を数字で書くと？",
    "choices": [
      "30520",
      "35200",
      "35020",
      "35002"
    ],
    "answer": "35200",
    "explanation": "三万=30000、五千=5000、二百=200なので35200です。",
    "hint": "「一・十・百・千・万」の位を見よう。"
  },
  {
    "id": "q039",
    "subject": "math",
    "unit": "大きな数",
    "level": 1,
    "question": "48000は「万」を使うとどう表せる？",
    "choices": [
      "4万8000",
      "48万",
      "4万80",
      "480万"
    ],
    "answer": "4万8000",
    "explanation": "10000が4こで4万、残りが8000です。",
    "hint": "「一・十・百・千・万」の位を見よう。"
  },
  {
    "id": "q040",
    "subject": "math",
    "unit": "大きな数",
    "level": 1,
    "question": "9999の次の数は？",
    "choices": [
      "1000",
      "10000",
      "9990",
      "10001"
    ],
    "answer": "10000",
    "explanation": "9999に1を足すと10000です。",
    "hint": "「一・十・百・千・万」の位を見よう。"
  },
  {
    "id": "q041",
    "subject": "math",
    "unit": "大きな数",
    "level": 1,
    "question": "70000より1000小さい数は？",
    "choices": [
      "69000",
      "69900",
      "60000",
      "71000"
    ],
    "answer": "69000",
    "explanation": "70000から1000を引くと69000です。",
    "hint": "「一・十・百・千・万」の位を見よう。"
  },
  {
    "id": "q042",
    "subject": "math",
    "unit": "時こくと時間",
    "level": 1,
    "question": "3時20分から45分後は？",
    "choices": [
      "3時55分",
      "4時5分",
      "4時15分",
      "3時45分"
    ],
    "answer": "4時5分",
    "explanation": "20分+45分=65分。60分で1時間なので、4時5分です。",
    "hint": "60分で1時間になるよ。"
  },
  {
    "id": "q043",
    "subject": "math",
    "unit": "時こくと時間",
    "level": 1,
    "question": "午前9時15分から午前10時までの時間は？",
    "choices": [
      "35分",
      "45分",
      "55分",
      "1時間15分"
    ],
    "answer": "45分",
    "explanation": "9時15分から9時60分までなので45分です。",
    "hint": "60分で1時間になるよ。"
  },
  {
    "id": "q044",
    "subject": "math",
    "unit": "時こくと時間",
    "level": 1,
    "question": "1時間30分は何分？",
    "choices": [
      "60分",
      "90分",
      "100分",
      "130分"
    ],
    "answer": "90分",
    "explanation": "1時間は60分。60分+30分=90分です。",
    "hint": "60分で1時間になるよ。"
  },
  {
    "id": "q045",
    "subject": "math",
    "unit": "時こくと時間",
    "level": 1,
    "question": "午後2時は24時間で表すと？",
    "choices": [
      "12時",
      "14時",
      "16時",
      "20時"
    ],
    "answer": "14時",
    "explanation": "午後は12を足します。2+12=14です。",
    "hint": "60分で1時間になるよ。"
  },
  {
    "id": "q046",
    "subject": "math",
    "unit": "時こくと時間",
    "level": 1,
    "question": "7時50分の20分後は？",
    "choices": [
      "8時00分",
      "8時10分",
      "7時70分",
      "7時10分"
    ],
    "answer": "8時10分",
    "explanation": "50分+20分=70分。60分をこえるので8時10分です。",
    "hint": "60分で1時間になるよ。"
  },
  {
    "id": "q047",
    "subject": "math",
    "unit": "長さ・重さ・かさ",
    "level": 1,
    "question": "1mは何cm？",
    "choices": [
      "10cm",
      "100cm",
      "1000cm",
      "1cm"
    ],
    "answer": "100cm",
    "explanation": "1m=100cmです。",
    "hint": "単位のもとになる数を覚えよう。"
  },
  {
    "id": "q048",
    "subject": "math",
    "unit": "長さ・重さ・かさ",
    "level": 1,
    "question": "2kgは何g？",
    "choices": [
      "20g",
      "200g",
      "2000g",
      "20000g"
    ],
    "answer": "2000g",
    "explanation": "1kg=1000gなので、2kg=2000gです。",
    "hint": "単位のもとになる数を覚えよう。"
  },
  {
    "id": "q049",
    "subject": "math",
    "unit": "長さ・重さ・かさ",
    "level": 1,
    "question": "1Lは何dL？",
    "choices": [
      "1dL",
      "10dL",
      "100dL",
      "1000dL"
    ],
    "answer": "10dL",
    "explanation": "1L=10dLです。",
    "hint": "単位のもとになる数を覚えよう。"
  },
  {
    "id": "q050",
    "subject": "math",
    "unit": "長さ・重さ・かさ",
    "level": 1,
    "question": "150cmは何m何cm？",
    "choices": [
      "1m5cm",
      "1m50cm",
      "15m0cm",
      "150m"
    ],
    "answer": "1m50cm",
    "explanation": "100cmで1m。残り50cmです。",
    "hint": "単位のもとになる数を覚えよう。"
  },
  {
    "id": "q051",
    "subject": "math",
    "unit": "長さ・重さ・かさ",
    "level": 1,
    "question": "3L5dLは何dL？",
    "choices": [
      "8dL",
      "30dL",
      "35dL",
      "305dL"
    ],
    "answer": "35dL",
    "explanation": "3L=30dL。30dL+5dL=35dLです。",
    "hint": "単位のもとになる数を覚えよう。"
  },
  {
    "id": "q052",
    "subject": "math",
    "unit": "分数・小数",
    "level": 1,
    "question": "1を4つに同じ大きさに分けた1つ分は？",
    "choices": [
      "1/2",
      "1/3",
      "1/4",
      "4/1"
    ],
    "answer": "1/4",
    "explanation": "4等分した1つ分なので4分の1です。",
    "hint": "「同じ大きさに分ける」がポイント。"
  },
  {
    "id": "q053",
    "subject": "math",
    "unit": "分数・小数",
    "level": 1,
    "question": "0.3 + 0.4 = ？",
    "choices": [
      "0.7",
      "0.12",
      "0.34",
      "7.0"
    ],
    "answer": "0.7",
    "explanation": "0.1が3こ+4こ=7こなので0.7です。",
    "hint": "「同じ大きさに分ける」がポイント。"
  },
  {
    "id": "q054",
    "subject": "math",
    "unit": "分数・小数",
    "level": 1,
    "question": "1/3と1/3を合わせると？",
    "choices": [
      "1/6",
      "2/3",
      "3/3",
      "2/6"
    ],
    "answer": "2/3",
    "explanation": "同じ大きさの3分の1が2こで2/3です。",
    "hint": "「同じ大きさに分ける」がポイント。"
  },
  {
    "id": "q055",
    "subject": "math",
    "unit": "分数・小数",
    "level": 1,
    "question": "0.8は0.1が何こ分？",
    "choices": [
      "8こ",
      "80こ",
      "1こ",
      "18こ"
    ],
    "answer": "8こ",
    "explanation": "0.1が8こで0.8です。",
    "hint": "「同じ大きさに分ける」がポイント。"
  },
  {
    "id": "q056",
    "subject": "math",
    "unit": "分数・小数",
    "level": 1,
    "question": "1/2は、2つに分けたうちの何こ分？",
    "choices": [
      "1こ分",
      "2こ分",
      "3こ分",
      "4こ分"
    ],
    "answer": "1こ分",
    "explanation": "2つに同じ大きさに分けたうちの1つ分です。",
    "hint": "「同じ大きさに分ける」がポイント。"
  },
  {
    "id": "q057",
    "subject": "math",
    "unit": "図形",
    "level": 1,
    "question": "三角形は何本の直線で囲まれた形？",
    "choices": [
      "2本",
      "3本",
      "4本",
      "5本"
    ],
    "answer": "3本",
    "explanation": "三角形は3本の直線で囲まれた形です。",
    "hint": "図を頭の中で思いうかべよう。"
  },
  {
    "id": "q058",
    "subject": "math",
    "unit": "図形",
    "level": 1,
    "question": "円のまんなかの点を何という？",
    "choices": [
      "中心",
      "半径",
      "直径",
      "頂点"
    ],
    "answer": "中心",
    "explanation": "円のまんなかの点を中心といいます。",
    "hint": "図を頭の中で思いうかべよう。"
  },
  {
    "id": "q059",
    "subject": "math",
    "unit": "図形",
    "level": 1,
    "question": "円の中心から円のまわりまでの線を何という？",
    "choices": [
      "直径",
      "半径",
      "辺",
      "角"
    ],
    "answer": "半径",
    "explanation": "中心から円周までの長さが半径です。",
    "hint": "図を頭の中で思いうかべよう。"
  },
  {
    "id": "q060",
    "subject": "math",
    "unit": "図形",
    "level": 1,
    "question": "直角は何度？",
    "choices": [
      "45度",
      "90度",
      "100度",
      "180度"
    ],
    "answer": "90度",
    "explanation": "直角は90度です。",
    "hint": "図を頭の中で思いうかべよう。"
  },
  {
    "id": "q061",
    "subject": "math",
    "unit": "図形",
    "level": 1,
    "question": "正三角形の辺の長さは？",
    "choices": [
      "全部同じ",
      "2本だけ同じ",
      "全部ちがう",
      "辺がない"
    ],
    "answer": "全部同じ",
    "explanation": "正三角形は3つの辺の長さがすべて同じです。",
    "hint": "図を頭の中で思いうかべよう。"
  },
  {
    "id": "q062",
    "subject": "math",
    "unit": "表とグラフ",
    "level": 1,
    "question": "表で一番多い数を見つけるとき、まず見るところは？",
    "choices": [
      "題名",
      "数字の大きさ",
      "紙の色",
      "文字の形"
    ],
    "answer": "数字の大きさ",
    "explanation": "表の数を比べて、一番大きい数を探します。",
    "hint": "数の大小を比べよう。"
  },
  {
    "id": "q063",
    "subject": "math",
    "unit": "表とグラフ",
    "level": 1,
    "question": "ぼうグラフで数が多いものはどれ？",
    "choices": [
      "ぼうが短いもの",
      "ぼうが長いもの",
      "色がうすいもの",
      "左にあるもの"
    ],
    "answer": "ぼうが長いもの",
    "explanation": "ぼうが長いほど、数が多いことを表します。",
    "hint": "数の大小を比べよう。"
  },
  {
    "id": "q064",
    "subject": "math",
    "unit": "表とグラフ",
    "level": 1,
    "question": "10人、8人、15人で一番多いのは？",
    "choices": [
      "10人",
      "8人",
      "15人",
      "同じ"
    ],
    "answer": "15人",
    "explanation": "10、8、15を比べると15が一番大きいです。",
    "hint": "数の大小を比べよう。"
  },
  {
    "id": "q065",
    "subject": "japanese",
    "unit": "漢字・言葉・読解",
    "level": 1,
    "question": "「世界」の読み方は？",
    "choices": [
      "せかい",
      "せいかい",
      "せいいき",
      "よかい"
    ],
    "answer": "せかい",
    "explanation": "「世界」は、せかい と読みます。",
    "hint": "文の中でどんな役目をしているか考えよう。"
  },
  {
    "id": "q066",
    "subject": "japanese",
    "unit": "漢字・言葉・読解",
    "level": 1,
    "question": "「写真」の読み方は？",
    "choices": [
      "しゃしん",
      "さしん",
      "しゃじん",
      "しやしん"
    ],
    "answer": "しゃしん",
    "explanation": "「写」は「しゃ」、「真」は「しん」と読みます。",
    "hint": "文の中でどんな役目をしているか考えよう。"
  },
  {
    "id": "q067",
    "subject": "japanese",
    "unit": "漢字・言葉・読解",
    "level": 1,
    "question": "「登校」の意味に近いものは？",
    "choices": [
      "学校へ行く",
      "家に帰る",
      "本を読む",
      "外で遊ぶ"
    ],
    "answer": "学校へ行く",
    "explanation": "登校は、学校へ行くことです。",
    "hint": "文の中でどんな役目をしているか考えよう。"
  },
  {
    "id": "q068",
    "subject": "japanese",
    "unit": "漢字・言葉・読解",
    "level": 1,
    "question": "「反対語」の組み合わせはどれ？",
    "choices": [
      "大きいー小さい",
      "赤いー赤色",
      "走るー走った",
      "本ーノート"
    ],
    "answer": "大きいー小さい",
    "explanation": "意味が反対の言葉を反対語といいます。",
    "hint": "文の中でどんな役目をしているか考えよう。"
  },
  {
    "id": "q069",
    "subject": "japanese",
    "unit": "漢字・言葉・読解",
    "level": 1,
    "question": "主語はどれ？「犬が走る。」",
    "choices": [
      "犬が",
      "走る",
      "。",
      "犬が走る"
    ],
    "answer": "犬が",
    "explanation": "何が走るのかを表す「犬が」が主語です。",
    "hint": "文の中でどんな役目をしているか考えよう。"
  },
  {
    "id": "q070",
    "subject": "japanese",
    "unit": "漢字・言葉・読解",
    "level": 1,
    "question": "述語はどれ？「花が咲いた。」",
    "choices": [
      "花が",
      "咲いた",
      "花",
      "が"
    ],
    "answer": "咲いた",
    "explanation": "どうしたのかを表す「咲いた」が述語です。",
    "hint": "文の中でどんな役目をしているか考えよう。"
  },
  {
    "id": "q071",
    "subject": "japanese",
    "unit": "漢字・言葉・読解",
    "level": 1,
    "question": "「様子」を表す言葉はどれ？",
    "choices": [
      "ゆっくり",
      "机",
      "学校",
      "三角形"
    ],
    "answer": "ゆっくり",
    "explanation": "「ゆっくり」は動きの様子を表します。",
    "hint": "文の中でどんな役目をしているか考えよう。"
  },
  {
    "id": "q072",
    "subject": "japanese",
    "unit": "漢字・言葉・読解",
    "level": 1,
    "question": "「研究」の読み方は？",
    "choices": [
      "けんきゅう",
      "けんぎゅう",
      "げんきゅう",
      "けんきょう"
    ],
    "answer": "けんきゅう",
    "explanation": "「研究」は、けんきゅう と読みます。",
    "hint": "文の中でどんな役目をしているか考えよう。"
  },
  {
    "id": "q073",
    "subject": "japanese",
    "unit": "漢字・言葉・読解",
    "level": 1,
    "question": "「注意」の読み方は？",
    "choices": [
      "ちゅうい",
      "じゅうい",
      "ちゅうえ",
      "ちゅい"
    ],
    "answer": "ちゅうい",
    "explanation": "「注意」は、ちゅうい と読みます。",
    "hint": "文の中でどんな役目をしているか考えよう。"
  },
  {
    "id": "q074",
    "subject": "japanese",
    "unit": "漢字・言葉・読解",
    "level": 1,
    "question": "「旅」の送りがなとして正しいものは？",
    "choices": [
      "旅する",
      "旅る",
      "旅い",
      "旅す"
    ],
    "answer": "旅する",
    "explanation": "「旅する」は、旅行をするという意味です。",
    "hint": "文の中でどんな役目をしているか考えよう。"
  },
  {
    "id": "q075",
    "subject": "japanese",
    "unit": "漢字・言葉・読解",
    "level": 2,
    "question": "「悲しい」に近い気持ちは？",
    "choices": [
      "かなしい",
      "うれしい",
      "たのしい",
      "おもしろい"
    ],
    "answer": "かなしい",
    "explanation": "「悲しい」は、かなしい気持ちを表します。",
    "hint": "文の中でどんな役目をしているか考えよう。"
  },
  {
    "id": "q076",
    "subject": "japanese",
    "unit": "漢字・言葉・読解",
    "level": 2,
    "question": "「早い」と「速い」の使い方で正しいのは？",
    "choices": [
      "朝が早い",
      "朝が速い",
      "車が早い速度",
      "早いボール"
    ],
    "answer": "朝が早い",
    "explanation": "時こくがはやいときは「早い」を使います。",
    "hint": "文の中でどんな役目をしているか考えよう。"
  },
  {
    "id": "q077",
    "subject": "japanese",
    "unit": "漢字・言葉・読解",
    "level": 2,
    "question": "「速い」の使い方で正しいのは？",
    "choices": [
      "足が速い",
      "朝が速い",
      "早起きが速い",
      "日が速い"
    ],
    "answer": "足が速い",
    "explanation": "スピードがはやいときは「速い」を使います。",
    "hint": "文の中でどんな役目をしているか考えよう。"
  },
  {
    "id": "q078",
    "subject": "japanese",
    "unit": "漢字・言葉・読解",
    "level": 2,
    "question": "「読む」の過去の形は？",
    "choices": [
      "読んだ",
      "読みる",
      "読ます",
      "読むた"
    ],
    "answer": "読んだ",
    "explanation": "「読む」は、過去の形で「読んだ」になります。",
    "hint": "文の中でどんな役目をしているか考えよう。"
  },
  {
    "id": "q079",
    "subject": "japanese",
    "unit": "漢字・言葉・読解",
    "level": 2,
    "question": "「美しい」の意味に近いものは？",
    "choices": [
      "きれい",
      "こわい",
      "重い",
      "暗い"
    ],
    "answer": "きれい",
    "explanation": "美しいは、きれいという意味に近いです。",
    "hint": "文の中でどんな役目をしているか考えよう。"
  },
  {
    "id": "q080",
    "subject": "japanese",
    "unit": "漢字・言葉・読解",
    "level": 2,
    "question": "「医者」の読み方は？",
    "choices": [
      "いしゃ",
      "いもの",
      "いや",
      "いざ"
    ],
    "answer": "いしゃ",
    "explanation": "「医者」は、いしゃ と読みます。",
    "hint": "文の中でどんな役目をしているか考えよう。"
  },
  {
    "id": "q081",
    "subject": "japanese",
    "unit": "漢字・言葉・読解",
    "level": 2,
    "question": "「発明」の読み方は？",
    "choices": [
      "はつめい",
      "はじめい",
      "ばつめい",
      "はつみょう"
    ],
    "answer": "はつめい",
    "explanation": "「発明」は、はつめい と読みます。",
    "hint": "文の中でどんな役目をしているか考えよう。"
  },
  {
    "id": "q082",
    "subject": "japanese",
    "unit": "漢字・言葉・読解",
    "level": 2,
    "question": "「商店」の意味は？",
    "choices": [
      "物を売る店",
      "本を読む場所",
      "電車に乗る場所",
      "虫を育てる場所"
    ],
    "answer": "物を売る店",
    "explanation": "商店は、品物を売る店です。",
    "hint": "文の中でどんな役目をしているか考えよう。"
  },
  {
    "id": "q083",
    "subject": "japanese",
    "unit": "漢字・言葉・読解",
    "level": 2,
    "question": "「地面」の読み方は？",
    "choices": [
      "じめん",
      "ちめん",
      "じもん",
      "ちもん"
    ],
    "answer": "じめん",
    "explanation": "「地面」は、じめん と読みます。",
    "hint": "文の中でどんな役目をしているか考えよう。"
  },
  {
    "id": "q084",
    "subject": "japanese",
    "unit": "漢字・言葉・読解",
    "level": 2,
    "question": "「文章」を読むとき最初に見るとよいものは？",
    "choices": [
      "題名",
      "ページ番号だけ",
      "紙の色",
      "文字の大きさだけ"
    ],
    "answer": "題名",
    "explanation": "題名を見ると、何についての文章か予想できます。",
    "hint": "文の中でどんな役目をしているか考えよう。"
  },
  {
    "id": "q085",
    "subject": "japanese",
    "unit": "漢字・言葉・読解",
    "level": 2,
    "question": "「しかし」が入ると、次にくる内容は？",
    "choices": [
      "前と反対の内容",
      "同じ内容だけ",
      "名前だけ",
      "数字だけ"
    ],
    "answer": "前と反対の内容",
    "explanation": "「しかし」は、前の文とちがう内容につなげる言葉です。",
    "hint": "文の中でどんな役目をしているか考えよう。"
  },
  {
    "id": "q086",
    "subject": "japanese",
    "unit": "漢字・言葉・読解",
    "level": 2,
    "question": "「だから」が入ると、次にくる内容は？",
    "choices": [
      "理由から考えた結果",
      "まったく関係ない話",
      "人の名前",
      "同じ漢字"
    ],
    "answer": "理由から考えた結果",
    "explanation": "「だから」は理由と結果をつなぎます。",
    "hint": "文の中でどんな役目をしているか考えよう。"
  },
  {
    "id": "q087",
    "subject": "japanese",
    "unit": "漢字・言葉・読解",
    "level": 2,
    "question": "「花が赤い。」で、どんな様子？",
    "choices": [
      "赤い",
      "花が",
      "。",
      "花が赤い"
    ],
    "answer": "赤い",
    "explanation": "「赤い」が花の様子を表しています。",
    "hint": "文の中でどんな役目をしているか考えよう。"
  },
  {
    "id": "q088",
    "subject": "japanese",
    "unit": "漢字・言葉・読解",
    "level": 2,
    "question": "「問題」の読み方は？",
    "choices": [
      "もんだい",
      "もんたい",
      "ぶんだい",
      "もだい"
    ],
    "answer": "もんだい",
    "explanation": "「問題」は、もんだい と読みます。",
    "hint": "文の中でどんな役目をしているか考えよう。"
  },
  {
    "id": "q089",
    "subject": "japanese",
    "unit": "漢字・言葉・読解",
    "level": 2,
    "question": "「感想文」で書くことに近いのは？",
    "choices": [
      "思ったこと",
      "計算の答えだけ",
      "住所だけ",
      "名前だけ"
    ],
    "answer": "思ったこと",
    "explanation": "感想文には、読んで思ったことや考えたことを書きます。",
    "hint": "文の中でどんな役目をしているか考えよう。"
  },
  {
    "id": "q090",
    "subject": "science",
    "unit": "理科ラボ",
    "level": 1,
    "question": "昆虫の足はふつう何本？",
    "choices": [
      "4本",
      "6本",
      "8本",
      "10本"
    ],
    "answer": "6本",
    "explanation": "昆虫の成虫の足は6本です。",
    "hint": "観察したときのことを思い出そう。"
  },
  {
    "id": "q091",
    "subject": "science",
    "unit": "理科ラボ",
    "level": 1,
    "question": "昆虫の体は大きく何つに分かれる？",
    "choices": [
      "2つ",
      "3つ",
      "4つ",
      "5つ"
    ],
    "answer": "3つ",
    "explanation": "頭・むね・はらの3つに分かれます。",
    "hint": "観察したときのことを思い出そう。"
  },
  {
    "id": "q092",
    "subject": "science",
    "unit": "理科ラボ",
    "level": 1,
    "question": "植物が育つために大切なものは？",
    "choices": [
      "水と日光",
      "砂糖だけ",
      "暗い場所だけ",
      "テレビ"
    ],
    "answer": "水と日光",
    "explanation": "植物は水や日光などを使って育ちます。",
    "hint": "観察したときのことを思い出そう。"
  },
  {
    "id": "q093",
    "subject": "science",
    "unit": "理科ラボ",
    "level": 1,
    "question": "たねから最初に出やすいものは？",
    "choices": [
      "根",
      "花",
      "実",
      "葉の絵"
    ],
    "answer": "根",
    "explanation": "多くの植物は、たねからまず根が出ます。",
    "hint": "観察したときのことを思い出そう。"
  },
  {
    "id": "q094",
    "subject": "science",
    "unit": "理科ラボ",
    "level": 1,
    "question": "太陽が東から出ると、朝のかげはどちらにのびやすい？",
    "choices": [
      "西",
      "東",
      "上",
      "下"
    ],
    "answer": "西",
    "explanation": "光と反対側にかげができます。朝は太陽が東にあるので、かげは西にできます。",
    "hint": "観察したときのことを思い出そう。"
  },
  {
    "id": "q095",
    "subject": "science",
    "unit": "理科ラボ",
    "level": 1,
    "question": "かげの向きは何で変わる？",
    "choices": [
      "太陽の位置",
      "服の色だけ",
      "名前",
      "時計のメーカー"
    ],
    "answer": "太陽の位置",
    "explanation": "太陽の位置が変わると、かげの向きも変わります。",
    "hint": "観察したときのことを思い出そう。"
  },
  {
    "id": "q096",
    "subject": "science",
    "unit": "理科ラボ",
    "level": 1,
    "question": "光をよく通すものは？",
    "choices": [
      "透明なガラス",
      "木の板",
      "鉄の板",
      "黒い紙"
    ],
    "answer": "透明なガラス",
    "explanation": "透明なものは光をよく通します。",
    "hint": "観察したときのことを思い出そう。"
  },
  {
    "id": "q097",
    "subject": "science",
    "unit": "理科ラボ",
    "level": 1,
    "question": "音は何が伝わって聞こえる？",
    "choices": [
      "もののふるえ",
      "色",
      "におい",
      "重さ"
    ],
    "answer": "もののふるえ",
    "explanation": "音はものがふるえることで伝わります。",
    "hint": "観察したときのことを思い出そう。"
  },
  {
    "id": "q098",
    "subject": "science",
    "unit": "理科ラボ",
    "level": 1,
    "question": "磁石につくものは？",
    "choices": [
      "鉄のくぎ",
      "紙",
      "木のえんぴつ",
      "プラスチックの定規"
    ],
    "answer": "鉄のくぎ",
    "explanation": "磁石は鉄などにつきます。",
    "hint": "観察したときのことを思い出そう。"
  },
  {
    "id": "q099",
    "subject": "science",
    "unit": "理科ラボ",
    "level": 1,
    "question": "磁石の同じ極どうしを近づけると？",
    "choices": [
      "しりぞけ合う",
      "必ずくっつく",
      "消える",
      "色が変わる"
    ],
    "answer": "しりぞけ合う",
    "explanation": "N極どうし、S極どうしはしりぞけ合います。",
    "hint": "観察したときのことを思い出そう。"
  },
  {
    "id": "q100",
    "subject": "science",
    "unit": "理科ラボ",
    "level": 2,
    "question": "豆電球をつけるには何が必要？",
    "choices": [
      "電池と導線で回路を作る",
      "水をかける",
      "紙で包む",
      "磁石を遠ざける"
    ],
    "answer": "電池と導線で回路を作る",
    "explanation": "電気の通り道がつながると豆電球がつきます。",
    "hint": "観察したときのことを思い出そう。"
  },
  {
    "id": "q101",
    "subject": "science",
    "unit": "理科ラボ",
    "level": 2,
    "question": "電気を通しやすいものは？",
    "choices": [
      "金属",
      "紙",
      "木",
      "ガラスだけ"
    ],
    "answer": "金属",
    "explanation": "金属は電気を通しやすいものが多いです。",
    "hint": "観察したときのことを思い出そう。"
  },
  {
    "id": "q102",
    "subject": "science",
    "unit": "理科ラボ",
    "level": 2,
    "question": "チョウの育ち方で正しい順番は？",
    "choices": [
      "たまご→よう虫→さなぎ→成虫",
      "成虫→さなぎ→たまご→よう虫",
      "さなぎ→成虫→よう虫→たまご",
      "たまご→成虫→さなぎ→よう虫"
    ],
    "answer": "たまご→よう虫→さなぎ→成虫",
    "explanation": "チョウはたまご、よう虫、さなぎ、成虫の順に育ちます。",
    "hint": "観察したときのことを思い出そう。"
  },
  {
    "id": "q103",
    "subject": "science",
    "unit": "理科ラボ",
    "level": 2,
    "question": "ホウセンカの観察で記録するとよいものは？",
    "choices": [
      "高さや葉の数",
      "テレビの音量",
      "今日の給食だけ",
      "友だちの名前だけ"
    ],
    "answer": "高さや葉の数",
    "explanation": "植物の育ち方を見るには、高さや葉の数を記録するとよいです。",
    "hint": "観察したときのことを思い出そう。"
  },
  {
    "id": "q104",
    "subject": "science",
    "unit": "理科ラボ",
    "level": 2,
    "question": "日なたと日かげであたたかいのはふつうどちら？",
    "choices": [
      "日なた",
      "日かげ",
      "いつも同じ",
      "夜だけ日かげ"
    ],
    "answer": "日なた",
    "explanation": "日なたは太陽の光が当たるのであたたかくなりやすいです。",
    "hint": "観察したときのことを思い出そう。"
  },
  {
    "id": "q105",
    "subject": "science",
    "unit": "理科ラボ",
    "level": 2,
    "question": "虫めがねで太陽を見るのは？",
    "choices": [
      "してはいけない",
      "毎日やる",
      "近くで見る",
      "友達にすすめる"
    ],
    "answer": "してはいけない",
    "explanation": "目をいためる危険があるので、虫めがねで太陽を直接見てはいけません。",
    "hint": "観察したときのことを思い出そう。"
  },
  {
    "id": "q106",
    "subject": "science",
    "unit": "理科ラボ",
    "level": 2,
    "question": "音を大きくしたいとき、関係が深いのは？",
    "choices": [
      "ふるえを大きくする",
      "色を変える",
      "紙を小さくする",
      "水を凍らせる"
    ],
    "answer": "ふるえを大きくする",
    "explanation": "音はふるえから生まれるので、ふるえが大きいと音も大きくなりやすいです。",
    "hint": "観察したときのことを思い出そう。"
  },
  {
    "id": "q107",
    "subject": "science",
    "unit": "理科ラボ",
    "level": 2,
    "question": "電気の通り道が一周しているものを何という？",
    "choices": [
      "回路",
      "道路",
      "通学路",
      "地図"
    ],
    "answer": "回路",
    "explanation": "電気の通り道を回路といいます。",
    "hint": "観察したときのことを思い出そう。"
  },
  {
    "id": "q108",
    "subject": "science",
    "unit": "理科ラボ",
    "level": 2,
    "question": "風で動くものはどれ？",
    "choices": [
      "風車",
      "磁石",
      "電池だけ",
      "石の中身"
    ],
    "answer": "風車",
    "explanation": "風の力で風車は回ります。",
    "hint": "観察したときのことを思い出そう。"
  },
  {
    "id": "q109",
    "subject": "science",
    "unit": "理科ラボ",
    "level": 2,
    "question": "ゴムを強く引っぱると、ものを動かす力は？",
    "choices": [
      "大きくなりやすい",
      "必ず小さくなる",
      "なくなる",
      "色になる"
    ],
    "answer": "大きくなりやすい",
    "explanation": "ゴムを強く引っぱると、もとに戻ろうとする力が大きくなります。",
    "hint": "観察したときのことを思い出そう。"
  },
  {
    "id": "q110",
    "subject": "science",
    "unit": "理科ラボ",
    "level": 2,
    "question": "観察カードに書くとよいことは？",
    "choices": [
      "日づけ・見たこと・気づいたこと",
      "好きなゲームだけ",
      "友達の点数",
      "家のパスワード"
    ],
    "answer": "日づけ・見たこと・気づいたこと",
    "explanation": "観察カードには、いつ、何を見て、何に気づいたかを書くとよいです。",
    "hint": "観察したときのことを思い出そう。"
  },
  {
    "id": "q111",
    "subject": "science",
    "unit": "理科ラボ",
    "level": 2,
    "question": "方位磁針の針は何を調べる道具？",
    "choices": [
      "方角",
      "重さ",
      "音の大きさ",
      "水の量"
    ],
    "answer": "方角",
    "explanation": "方位磁針は方角を調べる道具です。",
    "hint": "観察したときのことを思い出そう。"
  },
  {
    "id": "q112",
    "subject": "social",
    "unit": "町たんけん",
    "level": 1,
    "question": "地図で上はふつうどの方角？",
    "choices": [
      "北",
      "南",
      "東",
      "西"
    ],
    "answer": "北",
    "explanation": "多くの地図では上が北です。",
    "hint": "自分の町で見たものを思い出そう。"
  },
  {
    "id": "q113",
    "subject": "social",
    "unit": "町たんけん",
    "level": 1,
    "question": "東西南北をまとめて何という？",
    "choices": [
      "方位",
      "温度",
      "重さ",
      "時こく"
    ],
    "answer": "方位",
    "explanation": "東西南北などの向きを方位といいます。",
    "hint": "自分の町で見たものを思い出そう。"
  },
  {
    "id": "q114",
    "subject": "social",
    "unit": "町たんけん",
    "level": 1,
    "question": "〒 の地図記号は？",
    "choices": [
      "郵便局",
      "学校",
      "病院",
      "消防署"
    ],
    "answer": "郵便局",
    "explanation": "〒は郵便局の地図記号です。",
    "hint": "自分の町で見たものを思い出そう。"
  },
  {
    "id": "q115",
    "subject": "social",
    "unit": "町たんけん",
    "level": 1,
    "question": "文 の地図記号は？",
    "choices": [
      "学校",
      "神社",
      "警察署",
      "工場"
    ],
    "answer": "学校",
    "explanation": "文の記号は学校を表します。",
    "hint": "自分の町で見たものを思い出そう。"
  },
  {
    "id": "q116",
    "subject": "social",
    "unit": "町たんけん",
    "level": 1,
    "question": "交番の地図記号に関係が深い仕事は？",
    "choices": [
      "警察",
      "農家",
      "パン屋",
      "図書館"
    ],
    "answer": "警察",
    "explanation": "交番では警察の人が地域の安全を守っています。",
    "hint": "自分の町で見たものを思い出そう。"
  },
  {
    "id": "q117",
    "subject": "social",
    "unit": "町たんけん",
    "level": 1,
    "question": "火事のときに出動するのは？",
    "choices": [
      "消防署",
      "郵便局",
      "スーパー",
      "工場"
    ],
    "answer": "消防署",
    "explanation": "消防署は火事や救急などで出動します。",
    "hint": "自分の町で見たものを思い出そう。"
  },
  {
    "id": "q118",
    "subject": "social",
    "unit": "町たんけん",
    "level": 1,
    "question": "スーパーマーケットの仕事で大切なことは？",
    "choices": [
      "品物をそろえて売る",
      "電車を運転する",
      "田んぼだけを見る",
      "手紙だけ配る"
    ],
    "answer": "品物をそろえて売る",
    "explanation": "スーパーは食べ物や生活用品などをそろえて売ります。",
    "hint": "自分の町で見たものを思い出そう。"
  },
  {
    "id": "q119",
    "subject": "social",
    "unit": "町たんけん",
    "level": 1,
    "question": "農家の仕事に近いものは？",
    "choices": [
      "野菜や米を育てる",
      "本を貸す",
      "道路標識を作る",
      "飛行機を操縦する"
    ],
    "answer": "野菜や米を育てる",
    "explanation": "農家は作物を育てて出荷します。",
    "hint": "自分の町で見たものを思い出そう。"
  },
  {
    "id": "q120",
    "subject": "social",
    "unit": "町たんけん",
    "level": 1,
    "question": "工場では何をする？",
    "choices": [
      "ものを作る",
      "魚だけを育てる",
      "手紙だけを読む",
      "地図だけを見る"
    ],
    "answer": "ものを作る",
    "explanation": "工場ではいろいろな製品を作ります。",
    "hint": "自分の町で見たものを思い出そう。"
  },
  {
    "id": "q121",
    "subject": "social",
    "unit": "町たんけん",
    "level": 1,
    "question": "昔の道具を調べると何がわかる？",
    "choices": [
      "昔のくらし",
      "明日の天気だけ",
      "計算の答えだけ",
      "ゲームの裏技"
    ],
    "answer": "昔のくらし",
    "explanation": "昔の道具から、昔の人の生活の工夫がわかります。",
    "hint": "自分の町で見たものを思い出そう。"
  },
  {
    "id": "q122",
    "subject": "social",
    "unit": "町たんけん",
    "level": 2,
    "question": "地域の安全を守るためにあるものは？",
    "choices": [
      "信号や横断歩道",
      "お菓子の袋だけ",
      "マンガ本",
      "時計の針"
    ],
    "answer": "信号や横断歩道",
    "explanation": "信号や横断歩道は交通安全に役立ちます。",
    "hint": "自分の町で見たものを思い出そう。"
  },
  {
    "id": "q123",
    "subject": "social",
    "unit": "町たんけん",
    "level": 2,
    "question": "市役所や区役所は何に関係が深い？",
    "choices": [
      "地域のくらしの手続き",
      "映画の上映だけ",
      "虫の観察だけ",
      "給食の献立だけ"
    ],
    "answer": "地域のくらしの手続き",
    "explanation": "役所は地域のくらしに関わる仕事をしています。",
    "hint": "自分の町で見たものを思い出そう。"
  },
  {
    "id": "q124",
    "subject": "social",
    "unit": "町たんけん",
    "level": 2,
    "question": "地図を見るときに使う「ものさしのような表示」は？",
    "choices": [
      "縮尺",
      "音階",
      "温度",
      "速さ"
    ],
    "answer": "縮尺",
    "explanation": "縮尺は、実際の長さを地図上でどれくらいに縮めたかを表します。",
    "hint": "自分の町で見たものを思い出そう。"
  },
  {
    "id": "q125",
    "subject": "social",
    "unit": "町たんけん",
    "level": 2,
    "question": "買い物調べで見るとよいことは？",
    "choices": [
      "どこで何を買うか",
      "好きな色だけ",
      "ゲーム時間だけ",
      "朝ごはんの味だけ"
    ],
    "answer": "どこで何を買うか",
    "explanation": "買い物調べでは、買う場所や品物を調べます。",
    "hint": "自分の町で見たものを思い出そう。"
  },
  {
    "id": "q126",
    "subject": "social",
    "unit": "町たんけん",
    "level": 2,
    "question": "地域の古い写真を見比べるとわかることは？",
    "choices": [
      "町の変化",
      "明日の宿題",
      "虫の足の数",
      "電池の向き"
    ],
    "answer": "町の変化",
    "explanation": "昔と今の写真を比べると、町がどう変わったかがわかります。",
    "hint": "自分の町で見たものを思い出そう。"
  },
  {
    "id": "q127",
    "subject": "social",
    "unit": "町たんけん",
    "level": 2,
    "question": "地図記号を使う理由は？",
    "choices": [
      "場所をわかりやすくするため",
      "紙を重くするため",
      "文字を読めなくするため",
      "色を消すため"
    ],
    "answer": "場所をわかりやすくするため",
    "explanation": "地図記号を使うと、場所の種類がすぐわかります。",
    "hint": "自分の町で見たものを思い出そう。"
  },
  {
    "id": "q128",
    "subject": "social",
    "unit": "町たんけん",
    "level": 2,
    "question": "南の反対の方角は？",
    "choices": [
      "北",
      "東",
      "西",
      "右"
    ],
    "answer": "北",
    "explanation": "南の反対は北です。",
    "hint": "自分の町で見たものを思い出そう。"
  },
  {
    "id": "q129",
    "subject": "social",
    "unit": "町たんけん",
    "level": 2,
    "question": "東の反対の方角は？",
    "choices": [
      "西",
      "南",
      "北",
      "上"
    ],
    "answer": "西",
    "explanation": "東の反対は西です。",
    "hint": "自分の町で見たものを思い出そう。"
  },
  {
    "id": "q130",
    "subject": "social",
    "unit": "町たんけん",
    "level": 2,
    "question": "地域の仕事を調べるとき、よい聞き方は？",
    "choices": [
      "どんな工夫をしていますか",
      "秘密を全部教えて",
      "何歳ですかだけ",
      "遊んでくださいだけ"
    ],
    "answer": "どんな工夫をしていますか",
    "explanation": "仕事の工夫や大切にしていることを聞くと学びが深まります。",
    "hint": "自分の町で見たものを思い出そう。"
  },
  {
    "id": "q131",
    "subject": "social",
    "unit": "町たんけん",
    "level": 2,
    "question": "災害にそなえて家で確認するとよいものは？",
    "choices": [
      "避難場所や持ち出し品",
      "ゲームのレベルだけ",
      "テレビの大きさ",
      "お菓子の味"
    ],
    "answer": "避難場所や持ち出し品",
    "explanation": "災害にそなえて避難場所や持ち出し品を確認しておくと安心です。",
    "hint": "自分の町で見たものを思い出そう。"
  },
  {
    "id": "q132",
    "subject": "social",
    "unit": "町たんけん",
    "level": 2,
    "question": "図書館は地域でどんな役目？",
    "choices": [
      "本や資料を利用できる場所",
      "火を消す場所",
      "荷物だけ運ぶ場所",
      "野菜を売る場所"
    ],
    "answer": "本や資料を利用できる場所",
    "explanation": "図書館では本や資料を読んだり借りたりできます。",
    "hint": "自分の町で見たものを思い出そう。"
  },
  {
    "id": "q133",
    "subject": "social",
    "unit": "町たんけん",
    "level": 2,
    "question": "道路標識は何のためにある？",
    "choices": [
      "交通の安全のため",
      "虫を集めるため",
      "天気を決めるため",
      "音を大きくするため"
    ],
    "answer": "交通の安全のため",
    "explanation": "道路標識は、道路を安全に使うためのきまりや注意を知らせます。",
    "hint": "自分の町で見たものを思い出そう。"
  }
];
const LESSONS = [
  {
    "id": "math-basic",
    "subject": "math",
    "unit": "かけ算・わり算",
    "title": "九九からわり算へ",
    "icon": "➗",
    "body": [
      "わり算は「同じ数ずつ分ける」計算です。",
      "18÷3なら「18こを3人で同じ数ずつ分ける」と考えます。",
      "答えをたしかめるときは、3×6=18のようにかけ算にもどすと安心です。"
    ],
    "tips": [
      "九九を声に出す",
      "図に丸を書いて分ける",
      "答えをかけ算でたしかめる"
    ]
  },
  {
    "id": "math-time",
    "subject": "math",
    "unit": "時こくと時間",
    "title": "60分で1時間",
    "icon": "⏰",
    "body": [
      "時こくは「何時何分」、時間は「どれくらい」です。",
      "60分たつと1時間になります。",
      "20分+45分=65分のように60分をこえたら、1時間と残りに分けます。"
    ],
    "tips": [
      "時計の絵を思いうかべる",
      "60分をこえたら1時間",
      "午前・午後も確認"
    ]
  },
  {
    "id": "math-unit",
    "subject": "math",
    "unit": "長さ・重さ・かさ",
    "title": "単位の変身",
    "icon": "📏",
    "body": [
      "1m=100cm、1kg=1000g、1L=10dLです。",
      "単位がちがうときは、同じ単位に直してから考えます。",
      "「何がいくつ分か」を見ると計算しやすくなります。"
    ],
    "tips": [
      "mとcmを混ぜない",
      "kgは1000g",
      "Lは10dL"
    ]
  },
  {
    "id": "japanese-read",
    "subject": "japanese",
    "unit": "漢字・言葉・読解",
    "title": "文の主役を見つけよう",
    "icon": "📚",
    "body": [
      "文を読むときは「だれが・何が」と「どうした」を見つけます。",
      "「犬が走る」なら、主語は「犬が」、述語は「走る」です。",
      "「しかし」「だから」などのつなぎ言葉は、文の意味を考えるヒントになります。"
    ],
    "tips": [
      "題名を見る",
      "主語と述語を探す",
      "つなぎ言葉に注目"
    ]
  },
  {
    "id": "science-observe",
    "subject": "science",
    "unit": "理科ラボ",
    "title": "見たことを記録しよう",
    "icon": "🔬",
    "body": [
      "理科では、実際に見る・くらべる・記録することが大切です。",
      "植物なら高さや葉の数、昆虫なら足の数や体のつくりを見ます。",
      "日づけ、見たこと、気づいたことを書くと、あとで変化がわかります。"
    ],
    "tips": [
      "日づけを書く",
      "数や長さを記録",
      "絵や写真も使う"
    ]
  },
  {
    "id": "social-map",
    "subject": "social",
    "unit": "町たんけん",
    "title": "地図で町を読む",
    "icon": "🗺️",
    "body": [
      "社会では、自分の町の仕事や場所を調べます。",
      "地図は上が北になっていることが多く、地図記号で場所の種類がわかります。",
      "交番、消防署、学校、郵便局など、町を支える場所に注目しましょう。"
    ],
    "tips": [
      "東西南北を確認",
      "地図記号を覚える",
      "町の仕事を調べる"
    ]
  }
];
const SUBJECTS = [
  {
    "id": "math",
    "name": "算数の森",
    "short": "算数",
    "icon": "🧮",
    "description": "かけ算・わり算・筆算・単位・図形をテンポよく練習。"
  },
  {
    "id": "japanese",
    "name": "漢字道場",
    "short": "国語",
    "icon": "📖",
    "description": "漢字の読み、言葉、主語と述語、短い読解を練習。"
  },
  {
    "id": "science",
    "name": "理科ラボ",
    "short": "理科",
    "icon": "🔬",
    "description": "植物・昆虫・太陽とかげ・音・磁石・電気をクイズで確認。"
  },
  {
    "id": "social",
    "name": "町たんけん",
    "short": "社会",
    "icon": "🗺️",
    "description": "地図記号、方位、地域の仕事、安全なくらしを学ぶ。"
  }
];
const BADGES = [
  {
    "id": "first",
    "name": "はじめの一歩",
    "icon": "🌱",
    "condition": "1問に答える"
  },
  {
    "id": "five",
    "name": "5問チャレンジャー",
    "icon": "⭐",
    "condition": "5問正解する"
  },
  {
    "id": "mission",
    "name": "ミッション達成",
    "icon": "🏁",
    "condition": "今日のミッションを完了"
  },
  {
    "id": "math10",
    "name": "計算マスター見習い",
    "icon": "🧮",
    "condition": "算数を10問正解"
  },
  {
    "id": "jp10",
    "name": "ことば名人見習い",
    "icon": "📚",
    "condition": "国語を10問正解"
  },
  {
    "id": "science10",
    "name": "小さな研究者",
    "icon": "🔬",
    "condition": "理科を10問正解"
  },
  {
    "id": "social10",
    "name": "町たんけん隊",
    "icon": "🗺️",
    "condition": "社会を10問正解"
  },
  {
    "id": "perfect",
    "name": "ノーミス勇者",
    "icon": "👑",
    "condition": "1回のクイズで全問正解"
  }
];

const STORAGE_KEY = 'sho3-adventure-v1';
const todayKey = () => new Date().toLocaleDateString('sv-SE');

const defaultState = () => ({
  profile: { name: 'ぼうけん者', avatar: '🦊' },
  xp: 0,
  coins: 0,
  streak: 0,
  lastStudyDate: '',
  dailyCompleted: {},
  answers: [],
  wrong: {},
  badges: [],
  settings: { dailyCount: 10 }
});

let state = loadState();
let currentQuiz = null;

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    return { ...defaultState(), ...JSON.parse(raw) };
  } catch (e) {
    console.warn(e);
    return defaultState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function $(selector, parent = document) { return parent.querySelector(selector); }
function $all(selector, parent = document) { return Array.from(parent.querySelectorAll(selector)); }

function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

function hashString(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function seededShuffle(array, seedText) {
  const arr = [...array];
  let seed = hashString(seedText) || 1;
  function rand() {
    seed ^= seed << 13; seed ^= seed >>> 17; seed ^= seed << 5;
    return ((seed >>> 0) / 4294967296);
  }
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function subjectInfo(id) {
  return SUBJECTS.find(s => s.id === id) || SUBJECTS[0];
}

function answerStats() {
  const total = state.answers.length;
  const correct = state.answers.filter(a => a.correct).length;
  const bySubject = {};
  const byUnit = {};
  for (const s of SUBJECTS) bySubject[s.id] = { total: 0, correct: 0 };
  for (const a of state.answers) {
    bySubject[a.subject] ||= { total: 0, correct: 0 };
    bySubject[a.subject].total++;
    if (a.correct) bySubject[a.subject].correct++;
    byUnit[a.unit] ||= { total: 0, correct: 0, subject: a.subject };
    byUnit[a.unit].total++;
    if (a.correct) byUnit[a.unit].correct++;
  }
  return { total, correct, rate: total ? Math.round(correct / total * 100) : 0, bySubject, byUnit };
}

function levelFromXp() {
  return Math.floor(state.xp / 100) + 1;
}

function currentLevelProgress() {
  return state.xp % 100;
}

function isYesterday(dateText) {
  if (!dateText) return false;
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toLocaleDateString('sv-SE') === dateText;
}

function touchStudyDay() {
  const today = todayKey();
  if (state.lastStudyDate === today) return;
  state.streak = isYesterday(state.lastStudyDate) ? state.streak + 1 : 1;
  state.lastStudyDate = today;
}

function recordAnswer(question, selected, correct) {
  touchStudyDay();
  state.answers.push({
    id: question.id,
    subject: question.subject,
    unit: question.unit,
    correct,
    selected,
    answer: question.answer,
    date: new Date().toISOString()
  });
  const gainedXp = correct ? 10 + question.level * 2 : 2;
  if (correct) {
    state.xp += gainedXp;
    state.coins += 2;
    if (state.wrong[question.id]) state.wrong[question.id] = Math.max(0, state.wrong[question.id] - 1);
  } else {
    state.xp += gainedXp;
    state.wrong[question.id] = (state.wrong[question.id] || 0) + 1;
  }
  unlockBadges();
  saveState();
  return gainedXp;
}

function unlockBadges(extra = {}) {
  const stats = answerStats();
  const unlocked = new Set(state.badges);
  const correctBySubject = id => stats.bySubject[id]?.correct || 0;
  const checks = {
    first: stats.total >= 1,
    five: stats.correct >= 5,
    mission: state.dailyCompleted[todayKey()] === true,
    math10: correctBySubject('math') >= 10,
    jp10: correctBySubject('japanese') >= 10,
    science10: correctBySubject('science') >= 10,
    social10: correctBySubject('social') >= 10,
    perfect: extra.perfect === true || unlocked.has('perfect')
  };
  for (const b of BADGES) {
    if (checks[b.id] && !unlocked.has(b.id)) {
      unlocked.add(b.id);
      setTimeout(() => showToast(`${b.icon} バッジ「${b.name}」ゲット！`), 200);
    }
  }
  state.badges = [...unlocked];
  saveState();
}

function getDailyQuestions() {
  const date = todayKey();
  const target = Number(state.settings.dailyCount || 10);
  const mixes = {
    5: [['math', 2], ['japanese', 1], ['science', 1], ['social', 1]],
    8: [['math', 3], ['japanese', 2], ['science', 2], ['social', 1]],
    10: [['math', 4], ['japanese', 3], ['science', 2], ['social', 1]],
    12: [['math', 5], ['japanese', 3], ['science', 2], ['social', 2]]
  };
  const mix = mixes[target] || mixes[10];
  const picked = [];
  for (const [subject, count] of mix) {
    const subjectQuestions = QUESTIONS.filter(q => q.subject === subject);
    picked.push(...seededShuffle(subjectQuestions, `${date}-${subject}`).slice(0, count));
  }
  return seededShuffle(picked, `${date}-final`).slice(0, target);
}

function switchView(id) {
  $all('.view').forEach(v => v.classList.remove('active-view'));
  $(`#${id}`).classList.add('active-view');
  $all('[data-nav]').forEach(btn => btn.classList.toggle('active', btn.dataset.nav === id));
  $('.top-nav').classList.remove('open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (id === 'home') renderHome();
  if (id === 'mission') renderMission();
  if (id === 'subjects') renderSubjects();
  if (id === 'review') renderReview();
  if (id === 'parent') renderParent();
}

function renderHome() {
  const stats = answerStats();
  const missionDone = state.dailyCompleted[todayKey()] === true;
  const weak = weakestUnits().slice(0, 3);
  $('#home').innerHTML = `
    <div class="hero">
      <div class="panel hero-main">
        <span class="eyebrow">🎒 小学3年生向け / オフラインでも動く</span>
        <h1>今日の10分で、<br><span>ぼうけんレベル</span>を上げよう。</h1>
        <p class="lead">算数・国語・理科・社会を、1問ずつサクサク進める学習サイトです。間違えた問題は「にがてボックス」に入り、あとで復習できます。</p>
        <div class="hero-actions">
          <button class="primary-button" id="startDaily">${missionDone ? '今日のミッションをもう一回' : '今日のミッションをはじめる'} 🚀</button>
          <button class="secondary-button" data-nav="subjects">教科をえらぶ</button>
          <button class="ghost-button" data-nav="review">にがて復習</button>
        </div>
      </div>
      <aside class="panel hero-side">
        <div class="character-card">
          <div class="avatar">${state.profile.avatar}</div>
          <div>
            <strong>${escapeHtml(state.profile.name)}</strong>
            <p style="margin: 5px 0 0; color: var(--muted);">レベル ${levelFromXp()} のぼうけん者</p>
            <div class="progress-shell" style="margin-top: 10px;"><div class="progress-bar" style="width:${currentLevelProgress()}%"></div></div>
          </div>
        </div>
        <div class="stat-grid">
          <div class="stat-card"><span class="stat-label">連続</span><span class="stat-value">${state.streak}</span></div>
          <div class="stat-card"><span class="stat-label">正答率</span><span class="stat-value">${stats.rate}%</span></div>
          <div class="stat-card"><span class="stat-label">コイン</span><span class="stat-value">${state.coins}</span></div>
        </div>
        <div class="mini-card">
          <h3>今日のおすすめ</h3>
          <p>${weak.length ? `苦手そうな「${weak[0].unit}」を3問だけ復習しよう。` : 'まずは今日のミッションをクリアしよう。'}</p>
        </div>
      </aside>
    </div>

    <div class="section-title"><div><h2>メニュー</h2><p>迷ったら「今日のミッション」だけでOK。</p></div></div>
    <div class="grid grid-4">
      ${SUBJECTS.map(s => `
        <article class="subject-card">
          <div class="subject-icon">${s.icon}</div>
          <div><h3>${s.name}</h3><p>${s.description}</p></div>
          <button class="primary-button" data-subject="${s.id}">${s.short}をやる</button>
        </article>`).join('')}
    </div>

    <div class="section-title"><div><h2>バッジ</h2><p>できたことを見える化。</p></div></div>
    <div class="panel mini-card">
      <div class="badge-list">${BADGES.map(b => `<span class="badge ${state.badges.includes(b.id) ? 'unlocked' : ''}">${b.icon} ${b.name}</span>`).join('')}</div>
    </div>
  `;
  $('#startDaily').addEventListener('click', () => startQuiz(getDailyQuestions(), '今日のミッション', 'daily'));
  $all('[data-subject]', $('#home')).forEach(btn => btn.addEventListener('click', () => startSubjectQuiz(btn.dataset.subject)));
  $all('[data-nav]', $('#home')).forEach(btn => btn.addEventListener('click', () => switchView(btn.dataset.nav)));
}

function renderMission() {
  const daily = getDailyQuestions();
  const counts = daily.reduce((acc, q) => { acc[q.subject] = (acc[q.subject] || 0) + 1; return acc; }, {});
  $('#mission').innerHTML = `
    <div class="section-title">
      <div><h2>今日のミッション</h2><p>${todayKey()} のおすすめ問題。10分くらいで終わります。</p></div>
      <button class="primary-button" id="startMission">まとめてスタート</button>
    </div>
    <div class="grid grid-2">
      ${SUBJECTS.map(s => `
        <article class="mission-card">
          <div class="mission-icon">${s.icon}</div>
          <div><h3>${s.short} ${counts[s.id] || 0}問</h3><p>${s.description}</p></div>
          <button class="secondary-button" data-mission-subject="${s.id}">この教科だけ</button>
        </article>
      `).join('')}
    </div>
    <div class="section-title"><div><h2>今日出る単元</h2><p>問題の中身を先に見たいとき用。</p></div></div>
    <div class="table-wrap panel">
      <table><thead><tr><th>教科</th><th>単元</th><th>問題</th></tr></thead><tbody>
      ${daily.map(q => `<tr><td>${subjectInfo(q.subject).short}</td><td>${q.unit}</td><td>${escapeHtml(q.question)}</td></tr>`).join('')}
      </tbody></table>
    </div>
  `;
  $('#startMission').addEventListener('click', () => startQuiz(daily, '今日のミッション', 'daily'));
  $all('[data-mission-subject]').forEach(btn => btn.addEventListener('click', () => startQuiz(daily.filter(q => q.subject === btn.dataset.missionSubject), `${subjectInfo(btn.dataset.missionSubject).short}ミッション`, 'practice')));
}

function renderSubjects(activeSubject = 'math') {
  const units = [...new Set(QUESTIONS.filter(q => q.subject === activeSubject).map(q => q.unit))];
  $('#subjects').innerHTML = `
    <div class="section-title">
      <div><h2>教科をえらぶ</h2><p>5問だけ、10問だけ、単元だけ。自由に練習できます。</p></div>
    </div>
    <div class="filters">
      ${SUBJECTS.map(s => `<button class="filter-pill ${s.id === activeSubject ? 'active' : ''}" data-filter-subject="${s.id}">${s.icon} ${s.short}</button>`).join('')}
    </div>
    <div class="grid grid-2">
      <article class="panel mini-card">
        <h3>${subjectInfo(activeSubject).icon} ${subjectInfo(activeSubject).name}</h3>
        <p>${subjectInfo(activeSubject).description}</p>
        <div class="tag-row">${units.map(u => `<span class="tag">${u}</span>`).join('')}</div>
        <div class="hero-actions" style="margin-top:16px;">
          <button class="primary-button" id="start5">5問だけ</button>
          <button class="secondary-button" id="start10">10問チャレンジ</button>
          <button class="ghost-button" id="lessonBtn">ミニ授業を見る</button>
        </div>
      </article>
      <article class="panel mini-card">
        <h3>単元から選ぶ</h3>
        <p>苦手なところだけ練習できます。</p>
        <div class="grid" style="margin-top:14px;">
          ${units.map(u => `<button class="ghost-button" data-unit="${escapeAttr(u)}">${u}</button>`).join('')}
        </div>
      </article>
    </div>
    <div class="section-title"><div><h2>ミニ授業</h2><p>問題の前にポイントだけ確認。</p></div></div>
    <div class="grid grid-3">
      ${LESSONS.filter(l => l.subject === activeSubject).map(l => lessonCard(l)).join('')}
    </div>
  `;
  $all('[data-filter-subject]').forEach(btn => btn.addEventListener('click', () => renderSubjects(btn.dataset.filterSubject)));
  $('#start5').addEventListener('click', () => startSubjectQuiz(activeSubject, 5));
  $('#start10').addEventListener('click', () => startSubjectQuiz(activeSubject, 10));
  $('#lessonBtn').addEventListener('click', () => renderLesson(LESSONS.find(l => l.subject === activeSubject)?.id));
  $all('[data-unit]').forEach(btn => btn.addEventListener('click', () => {
    const qs = seededShuffle(QUESTIONS.filter(q => q.subject === activeSubject && q.unit === btn.dataset.unit), `${Date.now()}-${btn.dataset.unit}`).slice(0, 10);
    startQuiz(qs, `${subjectInfo(activeSubject).short}：${btn.dataset.unit}`, 'practice');
  }));
  $all('[data-lesson]').forEach(btn => btn.addEventListener('click', () => renderLesson(btn.dataset.lesson)));
}

function lessonCard(l) {
  return `<article class="lesson-card">
    <div class="subject-icon">${l.icon}</div>
    <h3>${l.title}</h3>
    <p>${l.body[0]}</p>
    <button class="secondary-button" data-lesson="${l.id}" style="margin-top:14px;">見る</button>
  </article>`;
}

function renderLesson(id) {
  const lesson = LESSONS.find(l => l.id === id) || LESSONS[0];
  $('#lesson').innerHTML = `
    <div class="section-title">
      <div><h2>${lesson.icon} ${lesson.title}</h2><p>${subjectInfo(lesson.subject).short} / ${lesson.unit}</p></div>
      <button class="ghost-button" data-nav="subjects">教科に戻る</button>
    </div>
    <article class="panel lesson-hero">
      <div class="lesson-body">
        ${lesson.body.map(p => `<p>${p}</p>`).join('')}
        <h3>コツ</h3>
        <ul>${lesson.tips.map(t => `<li>${t}</li>`).join('')}</ul>
      </div>
      <div class="hero-actions" style="margin-top:18px;">
        <button class="primary-button" id="lessonPractice">この内容を練習する</button>
        <button class="secondary-button" data-nav="mission">今日のミッションへ</button>
      </div>
    </article>
  `;
  switchView('lesson');
  $('#lessonPractice').addEventListener('click', () => {
    const qs = QUESTIONS.filter(q => q.subject === lesson.subject && (q.unit === lesson.unit || lesson.unit.includes(q.unit) || q.unit.includes(lesson.unit.split('・')[0])));
    startQuiz(seededShuffle(qs.length ? qs : QUESTIONS.filter(q => q.subject === lesson.subject), `${Date.now()}-${lesson.id}`).slice(0, 8), lesson.title, 'practice');
  });
  $all('[data-nav]', $('#lesson')).forEach(btn => btn.addEventListener('click', () => switchView(btn.dataset.nav)));
}

function startSubjectQuiz(subject, count = 10) {
  const qs = seededShuffle(QUESTIONS.filter(q => q.subject === subject), `${Date.now()}-${subject}`).slice(0, count);
  startQuiz(qs, `${subjectInfo(subject).name} ${count}問`, 'practice');
}

function startQuiz(questions, title, mode = 'practice') {
  if (!questions.length) {
    showToast('問題がまだありません。');
    return;
  }
  currentQuiz = {
    title,
    mode,
    questions: [...questions],
    index: 0,
    correct: 0,
    answered: false,
    selected: null,
    monsterHp: 100,
    heroHp: 100,
    earnedXp: 0
  };
  renderQuiz();
  switchView('quiz');
}

function renderQuiz() {
  const quiz = currentQuiz;
  const q = quiz.questions[quiz.index];
  const progress = Math.round((quiz.index) / quiz.questions.length * 100);
  $('#quiz').innerHTML = `
    <div class="section-title">
      <div><h2>${quiz.title}</h2><p>${quiz.index + 1} / ${quiz.questions.length} 問目</p></div>
      <button class="ghost-button" data-nav="home">やめる</button>
    </div>
    <div class="quiz-layout">
      <article class="panel quiz-card">
        <div class="quiz-meta">
          <span>${subjectInfo(q.subject).icon} ${subjectInfo(q.subject).short} / ${q.unit}</span>
          <span>正解 ${quiz.correct}問</span>
        </div>
        <div class="progress-shell" style="margin:14px 0 4px;"><div class="progress-bar" style="width:${progress}%"></div></div>
        <h3 class="question-text">${escapeHtml(q.question)}</h3>
        <div class="choice-grid">
          ${q.choices.map((c, i) => `<button class="choice-button" data-choice="${escapeAttr(c)}"><span style="color:var(--muted); margin-right:8px;">${['ア','イ','ウ','エ'][i]}</span>${escapeHtml(c)}</button>`).join('')}
        </div>
        <div class="explanation-box" id="explanationBox"></div>
        <div class="quiz-actions">
          <button class="secondary-button" id="hintBtn">ヒント</button>
          <button class="primary-button" id="nextBtn" disabled>次へ</button>
        </div>
      </article>
      <aside class="panel battle-card">
        <h3>バトル</h3>
        <p style="color:var(--muted); line-height:1.6;">正解するとモンスターにダメージ。不正解でも経験値は少し入ります。</p>
        <div class="battle-face"><span class="big-emoji">${state.profile.avatar}</span><span>VS</span><span class="big-emoji">${monsterForSubject(q.subject)}</span></div>
        <div class="hp">
          <div class="hp-row"><div class="hp-label"><span>ぼうけん者</span><span>${quiz.heroHp}</span></div><div class="hp-bar"><div class="hp-fill" style="width:${quiz.heroHp}%"></div></div></div>
          <div class="hp-row"><div class="hp-label"><span>モンスター</span><span>${quiz.monsterHp}</span></div><div class="hp-bar"><div class="hp-fill monster" style="width:${quiz.monsterHp}%"></div></div></div>
        </div>
      </aside>
    </div>
  `;
  $all('.choice-button').forEach(btn => btn.addEventListener('click', () => chooseAnswer(btn.dataset.choice)));
  $('#hintBtn').addEventListener('click', () => showHint(q));
  $('#nextBtn').addEventListener('click', nextQuestion);
  $all('[data-nav]', $('#quiz')).forEach(btn => btn.addEventListener('click', () => switchView(btn.dataset.nav)));
}

function showHint(q) {
  const box = $('#explanationBox');
  box.innerHTML = `<strong>ヒント：</strong>${escapeHtml(q.hint)}`;
  box.classList.add('show');
}

function chooseAnswer(choice) {
  const quiz = currentQuiz;
  if (!quiz || quiz.answered) return;
  const q = quiz.questions[quiz.index];
  const correct = choice === q.answer;
  quiz.answered = true;
  quiz.selected = choice;
  if (correct) {
    quiz.correct++;
    quiz.monsterHp = Math.max(0, quiz.monsterHp - Math.ceil(100 / quiz.questions.length));
  } else {
    quiz.heroHp = Math.max(0, quiz.heroHp - 12);
  }
  quiz.earnedXp += recordAnswer(q, choice, correct);
  $all('.choice-button').forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.choice === q.answer) btn.classList.add('correct');
    if (btn.dataset.choice === choice && !correct) btn.classList.add('wrong');
  });
  const box = $('#explanationBox');
  box.innerHTML = `
    <strong>${correct ? '正解！' : 'おしい！'}</strong><br>
    答え：<strong>${escapeHtml(q.answer)}</strong><br>
    ${escapeHtml(q.explanation)}
  `;
  box.classList.add('show');
  $('#nextBtn').disabled = false;
  $('#hintBtn').disabled = true;
}

function nextQuestion() {
  const quiz = currentQuiz;
  if (quiz.index < quiz.questions.length - 1) {
    quiz.index++;
    quiz.answered = false;
    quiz.selected = null;
    renderQuiz();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  const quiz = currentQuiz;
  const perfect = quiz.correct === quiz.questions.length;
  if (quiz.mode === 'daily') {
    state.dailyCompleted[todayKey()] = true;
  }
  if (perfect) unlockBadges({ perfect: true });
  unlockBadges();
  saveState();
  $('#quiz').innerHTML = `
    <div class="panel hero-main" style="text-align:center;">
      <span class="big-emoji">${perfect ? '👑' : quiz.correct >= Math.ceil(quiz.questions.length * .7) ? '🎉' : '💪'}</span>
      <h1 style="font-size:clamp(34px,5vw,56px);">${quiz.title} クリア！</h1>
      <p class="lead">${quiz.questions.length}問中 ${quiz.correct}問 正解。${perfect ? 'ノーミス！すごい！' : 'まちがえた問題は「復習」に入っています。'}</p>
      <div class="stat-grid" style="max-width:560px; margin: 0 auto 20px;">
        <div class="stat-card"><span class="stat-label">もらったXP</span><span class="stat-value">+${quiz.earnedXp}</span></div>
        <div class="stat-card"><span class="stat-label">レベル</span><span class="stat-value">${levelFromXp()}</span></div>
        <div class="stat-card"><span class="stat-label">コイン</span><span class="stat-value">${state.coins}</span></div>
      </div>
      <div class="hero-actions" style="justify-content:center;">
        <button class="primary-button" data-nav="mission">もう一回</button>
        <button class="secondary-button" data-nav="review">にがて復習</button>
        <button class="ghost-button" data-nav="home">ホーム</button>
      </div>
    </div>
  `;
  $all('[data-nav]', $('#quiz')).forEach(btn => btn.addEventListener('click', () => switchView(btn.dataset.nav)));
}

function monsterForSubject(subject) {
  return ({ math: '🐉', japanese: '👺', science: '🧪', social: '🗿' })[subject] || '👾';
}

function renderReview() {
  const wrongIds = Object.entries(state.wrong).filter(([, n]) => n > 0).sort((a,b) => b[1]-a[1]).map(([id]) => id);
  const wrongQuestions = wrongIds.map(id => QUESTIONS.find(q => q.id === id)).filter(Boolean);
  if (!wrongQuestions.length) {
    $('#review').innerHTML = `
      <div class="section-title"><div><h2>にがてボックス</h2><p>間違えた問題だけがここに入ります。</p></div></div>
      <div class="panel empty-state"><span class="big-emoji">🌈</span><h3>今は空っぽ！</h3><p>すごい。まずは今日のミッションをやってみよう。</p><button class="primary-button" data-nav="mission">ミッションへ</button></div>
    `;
    $('[data-nav="mission"]', $('#review')).addEventListener('click', () => switchView('mission'));
    return;
  }
  $('#review').innerHTML = `
    <div class="section-title">
      <div><h2>にがてボックス</h2><p>間違えた回数が多い順に復習できます。</p></div>
      <button class="primary-button" id="startReview">上から10問を復習</button>
    </div>
    <div class="table-wrap panel">
      <table>
        <thead><tr><th>教科</th><th>単元</th><th>問題</th><th>回数</th><th></th></tr></thead>
        <tbody>${wrongQuestions.map(q => `<tr><td>${subjectInfo(q.subject).short}</td><td>${q.unit}</td><td>${escapeHtml(q.question)}</td><td>${state.wrong[q.id]}</td><td><button class="ghost-button" data-one-review="${q.id}">1問</button></td></tr>`).join('')}</tbody>
      </table>
    </div>
  `;
  $('#startReview').addEventListener('click', () => startQuiz(wrongQuestions.slice(0, 10), 'にがて復習', 'review'));
  $all('[data-one-review]').forEach(btn => btn.addEventListener('click', () => startQuiz([QUESTIONS.find(q => q.id === btn.dataset.oneReview)], '1問復習', 'review')));
}

function weakestUnits() {
  const stats = answerStats();
  return Object.entries(stats.byUnit)
    .filter(([, v]) => v.total >= 2)
    .map(([unit, v]) => ({ unit, subject: v.subject, total: v.total, correct: v.correct, rate: Math.round(v.correct / v.total * 100) }))
    .sort((a, b) => a.rate - b.rate || b.total - a.total);
}

function renderParent() {
  const stats = answerStats();
  const weak = weakestUnits();
  $('#parent').innerHTML = `
    <div class="section-title"><div><h2>おうちの人ページ</h2><p>学習状況を確認して、声かけに使えます。</p></div></div>
    <div class="grid grid-3">
      <div class="stat-card"><span class="stat-label">総回答数</span><span class="stat-value">${stats.total}</span></div>
      <div class="stat-card"><span class="stat-label">正答率</span><span class="stat-value">${stats.rate}%</span></div>
      <div class="stat-card"><span class="stat-label">連続学習</span><span class="stat-value">${state.streak}日</span></div>
    </div>
    <div class="grid grid-2" style="margin-top:16px;">
      <article class="panel mini-card">
        <h3>プロフィール</h3>
        <div class="input-row"><label for="nameInput">表示名</label><input id="nameInput" value="${escapeAttr(state.profile.name)}" maxlength="12"></div>
        <div class="input-row"><label for="avatarInput">キャラクター</label><select id="avatarInput">
          ${['🦊','🐱','🐶','🐼','🦁','🐧','🐉','🚀'].map(a => `<option value="${a}" ${state.profile.avatar === a ? 'selected' : ''}>${a}</option>`).join('')}
        </select></div>
        <div class="input-row"><label for="dailyCount">今日のミッション問題数</label><select id="dailyCount">
          ${[5,8,10,12].map(n => `<option value="${n}" ${state.settings.dailyCount === n ? 'selected' : ''}>${n}問</option>`).join('')}
        </select></div>
        <button class="primary-button" id="saveProfile">保存</button>
      </article>
      <article class="panel mini-card">
        <h3>声かけメモ</h3>
        <p>${parentAdvice(stats, weak)}</p>
        <div class="hero-actions" style="margin-top:16px;">
          <button class="secondary-button" id="exportData">学習データを書き出し</button>
          <button class="danger-button" id="resetData">リセット</button>
        </div>
      </article>
    </div>

    <div class="section-title"><div><h2>教科別</h2><p>問題数が少ないうちは目安として見てください。</p></div></div>
    <div class="table-wrap panel">
      <table><thead><tr><th>教科</th><th>回答</th><th>正解</th><th>正答率</th></tr></thead><tbody>
      ${SUBJECTS.map(s => {
        const item = stats.bySubject[s.id] || { total: 0, correct: 0 };
        const rate = item.total ? Math.round(item.correct / item.total * 100) : 0;
        return `<tr><td>${s.icon} ${s.short}</td><td>${item.total}</td><td>${item.correct}</td><td>${rate}%</td></tr>`;
      }).join('')}
      </tbody></table>
    </div>

    <div class="section-title"><div><h2>苦手かもしれない単元</h2><p>正答率が低い順。</p></div></div>
    <div class="table-wrap panel">
      <table><thead><tr><th>単元</th><th>教科</th><th>回答</th><th>正答率</th></tr></thead><tbody>
      ${(weak.length ? weak : [{unit:'まだデータがありません',subject:'math',total:0,rate:0}]).slice(0,8).map(w => `<tr><td>${w.unit}</td><td>${subjectInfo(w.subject).short}</td><td>${w.total}</td><td>${w.rate}%</td></tr>`).join('')}
      </tbody></table>
    </div>

    <div class="section-title"><div><h2>今週のおすすめ計画</h2><p>印刷して貼れる簡易プラン。</p></div><button class="ghost-button" onclick="window.print()">印刷</button></div>
    <div class="panel print-plan">${weeklyPlan(weak)}</div>

    <div class="section-title"><div><h2>このサイトについて</h2><p>問題データは app.js の QUESTIONS に入っています。</p></div></div>
    <article class="panel mini-card">
      <p>文部科学省の小学校学習指導要領の教科構成を参考に、小学3年生向けの復習サイトとして作っています。正式な学校教材として使う場合は、学校や使用教科書の進度に合わせて問題を調整してください。</p>
    </article>
  `;
  $('#saveProfile').addEventListener('click', () => {
    state.profile.name = $('#nameInput').value.trim() || 'ぼうけん者';
    state.profile.avatar = $('#avatarInput').value;
    state.settings.dailyCount = Number($('#dailyCount').value);
    saveState();
    showToast('保存しました');
    renderParent();
  });
  $('#exportData').addEventListener('click', exportData);
  $('#resetData').addEventListener('click', resetData);
}

function parentAdvice(stats, weak) {
  if (stats.total === 0) return '最初は点数より「毎日開いたこと」をほめるのがおすすめです。まずは5問から始めてください。';
  if (stats.rate >= 85) return 'かなり順調です。次は説明を自分の言葉で言えるか確認すると、理解が深まります。';
  if (weak.length) return `今は「${weak[0].unit}」でつまずきが見えます。1日3問だけ復習して、できたら大きくほめるのがおすすめです。`;
  return '回答数が増えると苦手単元が見えてきます。今日は短く楽しく終わることを優先してください。';
}

function weeklyPlan(weak) {
  const target = weak[0]?.unit || '今日のミッション';
  return `月：今日のミッション 5〜10問\n火：算数を5問 + 漢字を3問\n水：にがてボックスから3問だけ\n木：理科か社会を5問\n金：${target}をもう一度\n土：親子で1問だけ説明タイム\n日：お休み、または好きな教科を5問\n\n声かけ例：\n「何点だった？」より「どの問題がむずかしかった？」\n「また間違えた」より「復習ボックスに入ったから次に強くなるね」`;
}

function exportData() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `sho3-progress-${todayKey()}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function resetData() {
  if (!confirm('学習データをすべて消します。よろしいですか？')) return;
  state = defaultState();
  saveState();
  showToast('リセットしました');
  renderParent();
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, ch => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' }[ch]));
}
function escapeAttr(value) { return escapeHtml(value); }

function init() {
  renderHome();
  renderMission();
  renderSubjects();
  renderReview();
  renderParent();
  $all('[data-nav]').forEach(btn => btn.addEventListener('click', () => switchView(btn.dataset.nav)));
  $('#menuButton').addEventListener('click', () => $('.top-nav').classList.toggle('open'));
}

document.addEventListener('DOMContentLoaded', init);
