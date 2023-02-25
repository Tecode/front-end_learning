const fs = require("fs");
const { pinyin } = require("pinyin");

const list = [
  // {
  //   "city": "",
  //   "value": "全部"
  // },
  {
    city: "0101",
    value: "北京",
  },
  {
    city: "0201",
    value: "上海",
  },
  {
    city: "0301",
    value: "天津",
  },
  {
    city: "0401",
    value: "重庆",
  },
  {
    city: "0402",
    value: "万州",
  },
  {
    city: "0403",
    value: "丰都",
  },
  {
    city: "0501",
    value: "石家庄",
  },
  {
    city: "0502",
    value: "承德",
  },
  {
    city: "0503",
    value: "秦皇岛",
  },
  {
    city: "0504",
    value: "南戴河",
  },
  {
    city: "0505",
    value: "邢台",
  },
  {
    city: "0506",
    value: "唐山",
  },
  {
    city: "0508",
    value: "北戴河",
  },
  {
    city: "0511",
    value: "廊坊",
  },
  {
    city: "0512",
    value: "保定",
  },
  {
    city: "0513",
    value: "张家口",
  },
  {
    city: "0514",
    value: "衡水",
  },
  {
    city: "0515",
    value: "邯郸",
  },
  {
    city: "0516",
    value: "沧州",
  },
  {
    city: "0525",
    value: "丰宁",
  },
  {
    city: "0526",
    value: "迁安",
  },
  {
    city: "0601",
    value: "太原",
  },
  {
    city: "0602",
    value: "大同",
  },
  {
    city: "0603",
    value: "临汾",
  },
  {
    city: "0604",
    value: "五台山",
  },
  {
    city: "0605",
    value: "运城",
  },
  {
    city: "0607",
    value: "晋中",
  },
  {
    city: "0608",
    value: "平遥",
  },
  {
    city: "0609",
    value: "晋城",
  },
  {
    city: "0701",
    value: "呼和浩特",
  },
  {
    city: "0702",
    value: "包头",
  },
  {
    city: "0705",
    value: "鄂尔多斯",
  },
  {
    city: "0707",
    value: "赤峰",
  },
  {
    city: "0709",
    value: "满洲里",
  },
  {
    city: "0710",
    value: "巴彦淖尔",
  },
  {
    city: "0801",
    value: "大连",
  },
  {
    city: "0802",
    value: "沈阳",
  },
  {
    city: "0805",
    value: "本溪",
  },
  {
    city: "0806",
    value: "丹东",
  },
  {
    city: "0809",
    value: "盘锦",
  },
  {
    city: "0810",
    value: "锦州",
  },
  {
    city: "0815",
    value: "营口",
  },
  {
    city: "0819",
    value: "朝阳",
  },
  {
    city: "0901",
    value: "长春",
  },
  {
    city: "0902",
    value: "吉林",
  },
  {
    city: "0905",
    value: "延边/延吉",
  },
  {
    city: "1001",
    value: "哈尔滨",
  },
  {
    city: "1002",
    value: "牡丹江",
  },
  {
    city: "1004",
    value: "大庆",
  },
  {
    city: "1009",
    value: "鹤岗",
  },
  {
    city: "1010",
    value: "绥化",
  },
  {
    city: "1012",
    value: "佳木斯",
  },
  {
    city: "1101",
    value: "南京",
  },
  {
    city: "1102",
    value: "苏州",
  },
  {
    city: "1103",
    value: "常州",
  },
  {
    city: "1104",
    value: "扬州",
  },
  {
    city: "1105",
    value: "无锡",
  },
  {
    city: "1106",
    value: "徐州",
  },
  {
    city: "1107",
    value: "南通",
  },
  {
    city: "1108",
    value: "镇江",
  },
  {
    city: "1109",
    value: "宜兴",
  },
  {
    city: "1110",
    value: "连云港",
  },
  {
    city: "1111",
    value: "张家港",
  },
  {
    city: "1112",
    value: "扬中",
  },
  {
    city: "1113",
    value: "江阴",
  },
  {
    city: "1114",
    value: "苏州吴江",
  },
  {
    city: "1115",
    value: "泰州",
  },
  {
    city: "1116",
    value: "盐城",
  },
  {
    city: "1117",
    value: "常熟",
  },
  {
    city: "1118",
    value: "江都",
  },
  {
    city: "1119",
    value: "仪征",
  },
  {
    city: "1120",
    value: "太仓",
  },
  {
    city: "1121",
    value: "苏州同里",
  },
  {
    city: "1122",
    value: "常州溧阳",
  },
  {
    city: "1123",
    value: "淮安",
  },
  {
    city: "1125",
    value: "启东",
  },
  {
    city: "1126",
    value: "苏州周庄",
  },
  {
    city: "1127",
    value: "昆山",
  },
  {
    city: "1128",
    value: "如东",
  },
  {
    city: "1130",
    value: "常州金坛",
  },
  {
    city: "1131",
    value: "宿迁",
  },
  {
    city: "1136",
    value: "东台",
  },
  {
    city: "1137",
    value: "泰州靖江",
  },
  {
    city: "1138",
    value: "泗阳",
  },
  {
    city: "1139",
    value: "南通海安",
  },
  {
    city: "1201",
    value: "杭州",
  },
  {
    city: "1202",
    value: "宁波",
  },
  {
    city: "1203",
    value: "温州",
  },
  {
    city: "1204",
    value: "金华",
  },
  {
    city: "1205",
    value: "绍兴",
  },
  {
    city: "1206",
    value: "金华永康",
  },
  {
    city: "1207",
    value: "金华义乌",
  },
  {
    city: "1209",
    value: "嘉兴",
  },
  {
    city: "1211",
    value: "杭州余杭",
  },
  {
    city: "1212",
    value: "绍兴诸暨",
  },
  {
    city: "1213",
    value: "杭州临安",
  },
  {
    city: "1214",
    value: "金华兰溪",
  },
  {
    city: "1215",
    value: "宁波奉化",
  },
  {
    city: "1224",
    value: "台州",
  },
  {
    city: "1225",
    value: "台州黄岩",
  },
  {
    city: "1226",
    value: "台州临海",
  },
  {
    city: "1227",
    value: "台州天台",
  },
  {
    city: "1230",
    value: "丽水",
  },
  {
    city: "1231",
    value: "宁波慈溪",
  },
  {
    city: "1233",
    value: "杭州千岛湖",
  },
  {
    city: "1234",
    value: "嘉兴海宁",
  },
  {
    city: "1235",
    value: "衢州",
  },
  {
    city: "1236",
    value: "绍兴嵊州",
  },
  {
    city: "1237",
    value: "温州瑞安",
  },
  {
    city: "1238",
    value: "台州温岭",
  },
  {
    city: "1239",
    value: "湖州",
  },
  {
    city: "1240",
    value: "湖州安吉",
  },
  {
    city: "1241",
    value: "嘉兴海盐",
  },
  {
    city: "1242",
    value: "湖州德清",
  },
  {
    city: "1243",
    value: "金华东阳",
  },
  {
    city: "1245",
    value: "舟山",
  },
  {
    city: "1246",
    value: "绍兴上虞",
  },
  {
    city: "1247",
    value: "杭州桐庐",
  },
  {
    city: "1248",
    value: "杭州富阳",
  },
  {
    city: "1250",
    value: "台州仙居",
  },
  {
    city: "1251",
    value: "绍兴新昌",
  },
  {
    city: "1252",
    value: "宁波宁海",
  },
  {
    city: "1253",
    value: "宁波象山",
  },
  {
    city: "1259",
    value: "温州乐清",
  },
  {
    city: "1263",
    value: "嘉兴桐乡",
  },
  {
    city: "1264",
    value: "金华武义",
  },
  {
    city: "1266",
    value: "温州雁荡山",
  },
  {
    city: "1267",
    value: "丽水缙云",
  },
  {
    city: "1268",
    value: "嘉兴平湖",
  },
  {
    city: "1270",
    value: "嘉兴西塘",
  },
  {
    city: "1271",
    value: "杭州建德",
  },
  {
    city: "1272",
    value: "丽水遂昌",
  },
  {
    city: "1274",
    value: "金华浦江",
  },
  {
    city: "1275",
    value: "宁波余姚",
  },
  {
    city: "1277",
    value: "嘉善",
  },
  {
    city: "1279",
    value: "衢州常山",
  },
  {
    city: "1280",
    value: "衢州龙游",
  },
  {
    city: "1301",
    value: "合肥",
  },
  {
    city: "1302",
    value: "黄山",
  },
  {
    city: "1303",
    value: "安庆",
  },
  {
    city: "1304",
    value: "芜湖",
  },
  {
    city: "1305",
    value: "蚌埠",
  },
  {
    city: "1306",
    value: "淮南",
  },
  {
    city: "1307",
    value: "阜阳",
  },
  {
    city: "1308",
    value: "巢湖",
  },
  {
    city: "1309",
    value: "九华山",
  },
  {
    city: "1311",
    value: "马鞍山",
  },
  {
    city: "1312",
    value: "亳州",
  },
  {
    city: "1313",
    value: "天柱山",
  },
  {
    city: "1314",
    value: "宿州",
  },
  {
    city: "1315",
    value: "铜陵",
  },
  {
    city: "1318",
    value: "滁州",
  },
  {
    city: "1319",
    value: "六安",
  },
  {
    city: "1320",
    value: "池州",
  },
  {
    city: "1401",
    value: "厦门",
  },
  {
    city: "1402",
    value: "福州",
  },
  {
    city: "1403",
    value: "泉州",
  },
  {
    city: "1404",
    value: "南平（武夷山）",
  },
  {
    city: "1405",
    value: "泉州石狮",
  },
  {
    city: "1406",
    value: "莆田",
  },
  {
    city: "1408",
    value: "漳州",
  },
  {
    city: "1409",
    value: "龙岩",
  },
  {
    city: "1412",
    value: "福鼎",
  },
  {
    city: "1413",
    value: "泉州晋江",
  },
  {
    city: "1414",
    value: "宁德",
  },
  {
    city: "1415",
    value: "龙岩连城",
  },
  {
    city: "1417",
    value: "漳州龙海",
  },
  {
    city: "1418",
    value: "漳州东山",
  },
  {
    city: "1419",
    value: "泉州安溪",
  },
  {
    city: "1420",
    value: "福州长乐",
  },
  {
    city: "1501",
    value: "南昌",
  },
  {
    city: "1502",
    value: "九江",
  },
  {
    city: "1503",
    value: "吉安",
  },
  {
    city: "1506",
    value: "庐山",
  },
  {
    city: "1507",
    value: "景德镇",
  },
  {
    city: "1508",
    value: "上饶",
  },
  {
    city: "1511",
    value: "井冈山",
  },
  {
    city: "1512",
    value: "萍乡",
  },
  {
    city: "1514",
    value: "新余",
  },
  {
    city: "1516",
    value: "赣州",
  },
  {
    city: "1517",
    value: "鹰潭",
  },
  {
    city: "1601",
    value: "青岛",
  },
  {
    city: "1602",
    value: "济南",
  },
  {
    city: "1603",
    value: "潍坊",
  },
  {
    city: "1604",
    value: "烟台",
  },
  {
    city: "1605",
    value: "威海",
  },
  {
    city: "1606",
    value: "淄博",
  },
  {
    city: "1607",
    value: "东营",
  },
  {
    city: "1608",
    value: "枣庄",
  },
  {
    city: "1610",
    value: "曲阜",
  },
  {
    city: "1611",
    value: "临沂",
  },
  {
    city: "1612",
    value: "德州",
  },
  {
    city: "1613",
    value: "蓬莱",
  },
  {
    city: "1614",
    value: "泰安",
  },
  {
    city: "1615",
    value: "日照",
  },
  {
    city: "1616",
    value: "菏泽",
  },
  {
    city: "1618",
    value: "滨州",
  },
  {
    city: "1619",
    value: "济宁",
  },
  {
    city: "1620",
    value: "寿光",
  },
  {
    city: "1627",
    value: "章丘",
  },
  {
    city: "1629",
    value: "文登",
  },
  {
    city: "1701",
    value: "郑州",
  },
  {
    city: "1702",
    value: "洛阳",
  },
  {
    city: "1703",
    value: "开封",
  },
  {
    city: "1704",
    value: "新乡",
  },
  {
    city: "1705",
    value: "平顶山",
  },
  {
    city: "1706",
    value: "濮阳",
  },
  {
    city: "1707",
    value: "南阳",
  },
  {
    city: "1708",
    value: "三门峡",
  },
  {
    city: "1709",
    value: "济源",
  },
  {
    city: "1710",
    value: "焦作",
  },
  {
    city: "1712",
    value: "鹤壁",
  },
  {
    city: "1713",
    value: "许昌",
  },
  {
    city: "1716",
    value: "安阳",
  },
  {
    city: "1717",
    value: "漯河",
  },
  {
    city: "1718",
    value: "驻马店",
  },
  {
    city: "1801",
    value: "武汉",
  },
  {
    city: "1802",
    value: "荆州",
  },
  {
    city: "1803",
    value: "宜昌",
  },
  {
    city: "1804",
    value: "襄樊",
  },
  {
    city: "1807",
    value: "十堰",
  },
  {
    city: "1810",
    value: "荆门",
  },
  {
    city: "1811",
    value: "恩施",
  },
  {
    city: "1814",
    value: "黄石",
  },
  {
    city: "1818",
    value: "鄂州",
  },
  {
    city: "1901",
    value: "长沙",
  },
  {
    city: "1902",
    value: "株洲",
  },
  {
    city: "1903",
    value: "张家界",
  },
  {
    city: "1904",
    value: "岳阳",
  },
  {
    city: "1906",
    value: "湘潭",
  },
  {
    city: "1907",
    value: "郴州",
  },
  {
    city: "1910",
    value: "常德",
  },
  {
    city: "1915",
    value: "凤凰",
  },
  {
    city: "1916",
    value: "韶山",
  },
  {
    city: "1918",
    value: "衡阳",
  },
  {
    city: "1919",
    value: "浏阳",
  },
  {
    city: "1920",
    value: "益阳",
  },
  {
    city: "2001",
    value: "广州",
  },
  {
    city: "2002",
    value: "汕头",
  },
  {
    city: "2003",
    value: "深圳",
  },
  {
    city: "2004",
    value: "珠海",
  },
  {
    city: "2005",
    value: "佛山",
  },
  {
    city: "2006",
    value: "揭阳",
  },
  {
    city: "2007",
    value: "东莞",
  },
  {
    city: "2009",
    value: "茂名",
  },
  {
    city: "2010",
    value: "惠州",
  },
  {
    city: "2011",
    value: "中山",
  },
  {
    city: "2013",
    value: "肇庆",
  },
  {
    city: "2014",
    value: "湛江",
  },
  {
    city: "2016",
    value: "潮州",
  },
  {
    city: "2020",
    value: "阳江",
  },
  {
    city: "2021",
    value: "江门",
  },
  {
    city: "2026",
    value: "河源",
  },
  {
    city: "2027",
    value: "清远",
  },
  {
    city: "2028",
    value: "梅州",
  },
  {
    city: "2030",
    value: "韶关",
  },
  {
    city: "2101",
    value: "桂林",
  },
  {
    city: "2102",
    value: "南宁",
  },
  {
    city: "2103",
    value: "北海",
  },
  {
    city: "2104",
    value: "玉林",
  },
  {
    city: "2105",
    value: "柳州",
  },
  {
    city: "2108",
    value: "梧州",
  },
  {
    city: "2109",
    value: "钦州",
  },
  {
    city: "2201",
    value: "三亚",
  },
  {
    city: "2202",
    value: "海口",
  },
  {
    city: "2203",
    value: "万宁(兴隆)",
  },
  {
    city: "2206",
    value: "琼海（博鳌）",
  },
  {
    city: "2207",
    value: "陵水",
  },
  {
    city: "2301",
    value: "成都",
  },
  {
    city: "2302",
    value: "绵阳",
  },
  {
    city: "2303",
    value: "乐山",
  },
  {
    city: "2305",
    value: "自贡",
  },
  {
    city: "2306",
    value: "雅安",
  },
  {
    city: "2307",
    value: "都江堰",
  },
  {
    city: "2308",
    value: "宜宾",
  },
  {
    city: "2309",
    value: "南充",
  },
  {
    city: "2310",
    value: "峨眉山",
  },
  {
    city: "2311",
    value: "九寨沟",
  },
  {
    city: "2312",
    value: "德阳",
  },
  {
    city: "2313",
    value: "广安",
  },
  {
    city: "2314",
    value: "泸州",
  },
  {
    city: "2315",
    value: "遂宁",
  },
  {
    city: "2316",
    value: "松潘",
  },
  {
    city: "2317",
    value: "阆中",
  },
  {
    city: "2318",
    value: "西昌",
  },
  {
    city: "2319",
    value: "内江",
  },
  {
    city: "2320",
    value: "广元",
  },
  {
    city: "2321",
    value: "攀枝花",
  },
  {
    city: "2323",
    value: "卧龙",
  },
  {
    city: "2328",
    value: "海螺沟",
  },
  {
    city: "2329",
    value: "江油",
  },
  {
    city: "2401",
    value: "贵阳",
  },
  {
    city: "2402",
    value: "遵义",
  },
  {
    city: "2404",
    value: "凯里",
  },
  {
    city: "2406",
    value: "比节市",
  },
  {
    city: "2407",
    value: "仁怀市",
  },
  {
    city: "2501",
    value: "昆明",
  },
  {
    city: "2503",
    value: "丽江",
  },
  {
    city: "2505",
    value: "大理",
  },
  {
    city: "2506",
    value: "香格里拉",
  },
  {
    city: "2507",
    value: "景洪（西双版纳）",
  },
  {
    city: "2511",
    value: "临沧",
  },
  {
    city: "2512",
    value: "腾冲",
  },
  {
    city: "2513",
    value: "文山",
  },
  {
    city: "2516",
    value: "芒市",
  },
  {
    city: "2517",
    value: "红河州",
  },
  {
    city: "2601",
    value: "拉萨",
  },
  {
    city: "2604",
    value: "日喀则",
  },
  {
    city: "2606",
    value: "昌都",
  },
  {
    city: "2607",
    value: "山南",
  },
  {
    city: "2701",
    value: "西安",
  },
  {
    city: "2702",
    value: "宝鸡",
  },
  {
    city: "2703",
    value: "咸阳",
  },
  {
    city: "2705",
    value: "延安",
  },
  {
    city: "2707",
    value: "汉中",
  },
  {
    city: "2801",
    value: "兰州",
  },
  {
    city: "2802",
    value: "嘉峪关",
  },
  {
    city: "2803",
    value: "敦煌",
  },
  {
    city: "2804",
    value: "张掖",
  },
  {
    city: "2805",
    value: "天水",
  },
  {
    city: "2806",
    value: "酒泉",
  },
  {
    city: "2901",
    value: "银川",
  },
  {
    city: "3001",
    value: "西宁",
  },
  {
    city: "3101",
    value: "乌鲁木齐",
  },
  {
    city: "3102",
    value: "克拉玛依",
  },
  {
    city: "3104",
    value: "库尔勒",
  },
  {
    city: "3109",
    value: "阿克苏",
  },
  {
    city: "3110",
    value: "喀纳斯",
  },
  {
    city: "3111",
    value: "喀什",
  },
  {
    city: "3112",
    value: "奎屯",
  },
  {
    city: "3113",
    value: "哈密",
  },
  {
    city: "3201",
    value: "香港",
  },
  {
    city: "3301",
    value: "澳门",
  },
  {
    city: "3500",
    value: "昆山",
  },
  {
    city: "3800",
    value: "卢森堡",
  },
  {
    city: "3900",
    value: "马尔代夫",
  },
  {
    city: "4000",
    value: "斯里兰卡",
  },
  {
    city: "4100",
    value: "泰国",
  },
  {
    city: "4200",
    value: "越南",
  },
  {
    city: "4300",
    value: "马来西亚",
  },
  {
    city: "4400",
    value: "缅甸",
  },
  {
    city: "4500",
    value: "新加坡",
  },
  {
    city: "4600",
    value: "菲律宾",
  },
  {
    city: "4700",
    value: "韩国",
  },
  {
    city: "4800",
    value: "朝鲜",
  },
  {
    city: "4900",
    value: "日本",
  },
  {
    city: "5000",
    value: "美国",
  },
  {
    city: "5100",
    value: "俄罗斯",
  },
  {
    city: "5200",
    value: "澳大利亚",
  },
  {
    city: "5300",
    value: "新西兰",
  },
  {
    city: "5400",
    value: "以色列",
  },
  {
    city: "5500",
    value: "印度尼西亚",
  },
  {
    city: "5600",
    value: "芬兰",
  },
  {
    city: "5700",
    value: "塞班",
  },
  {
    city: "5800",
    value: "柬埔寨",
  },
  {
    city: "5900",
    value: "埃及",
  },
  {
    city: "6000",
    value: "法国",
  },
  {
    city: "6100",
    value: "英国",
  },
  {
    city: "6200",
    value: "意大利",
  },
  {
    city: "6300",
    value: "德国",
  },
  {
    city: "6400",
    value: "希腊",
  },
  {
    city: "6500",
    value: "荷兰",
  },
  {
    city: "6600",
    value: "比利时",
  },
  {
    city: "6700",
    value: "卢森堡",
  },
  {
    city: "6800",
    value: "西班牙",
  },
  {
    city: "6900",
    value: "奥地利",
  },
  {
    city: "7000",
    value: "瑞士",
  },
  {
    city: "7100",
    value: "丹麦",
  },
  {
    city: "7200",
    value: "芬兰",
  },
  {
    city: "7300",
    value: "摩纳哥",
  },
  {
    city: "7400",
    value: "葡萄牙",
  },
  {
    city: "7500",
    value: "挪威",
  },
  {
    city: "7600",
    value: "瑞典",
  },
  {
    city: "7700",
    value: "丹麦",
  },
  {
    city: "7800",
    value: "加拿大",
  },
  {
    city: "7900",
    value: "印度",
  },
  {
    city: "8000",
    value: "阿拉伯联合酋长国",
  },
  {
    city: "8100",
    value: "汶莱",
  },
  {
    city: "8200",
    value: "波兰",
  },
  {
    city: "8300",
    value: "马耳他",
  },
  {
    city: "8400",
    value: "老挝",
  },
  {
    city: "8500",
    value: "约旦",
  },
  {
    city: "8600",
    value: "保加利亚",
  },
  {
    city: "8700",
    value: "巴西",
  },
  {
    city: "8800",
    value: "爱尔兰",
  },
  {
    city: "8900",
    value: "土耳其",
  },
  {
    city: "9100",
    value: "卡塔尔",
  },
];
const cityList = {};

list.forEach((data) => {
  const spell = pinyin(data.value, {
    style: pinyin.STYLE_NORMAL,
  })[0][0][0].toUpperCase();
  console.log(spell);
  if (cityList[spell]) {
    cityList[spell].push({ city: data.value, value: data.city, spell: spell });
  } else {
    cityList[spell] = [{ city: data.value, value: data.city, spell: spell }];
  }
});

const sellText = (text) => {
  return pinyin(text, { style: pinyin.STYLE_NORMAL })[0][0];
};

Object.keys(cityList).forEach((key) => {
  cityList[key].sort((value1, value2) => {
    console.log(sellText(value1.city) > sellText(value2.city));
    return sellText(value1.city) > sellText(value2.city);
  });
  console.log(cityList[key]);
});

// fs.writeFile('./city.json', JSON.stringify(cityList), 'utf-8', (err) => {
//   console.log('cityList 生成成功了')
// })
// console.log(cityList);
