// 知识闯关题库
const QUIZ_DATA = [
  {
    "id": 1,
    "category": "数学思维",
    "question": "8 × 3 = ?",
    "options": [
      "24",
      "25",
      "26",
      "23"
    ],
    "answer": 0
  },
  {
    "id": 2,
    "category": "地理知识",
    "question": "黄河流经几个省？",
    "options": [
      "7个",
      "9个",
      "11个",
      "13个"
    ],
    "answer": 1
  },
  {
    "id": 3,
    "category": "天文宇宙",
    "question": "离地球最近的恒星是？",
    "options": [
      "月球",
      "太阳",
      "金星",
      "火星"
    ],
    "answer": 1
  },
  {
    "id": 4,
    "category": "植物王国",
    "question": "藻类植物有没有根茎叶的分化？",
    "options": [
      "有",
      "没有",
      "有的有",
      "不确定"
    ],
    "answer": 1
  },
  {
    "id": 5,
    "category": "动物世界",
    "question": "蝴蝶用什么来吸花蜜？",
    "options": [
      "舌头",
      "吸管状的口器",
      "爪子",
      "翅膀"
    ],
    "answer": 1
  },
  {
    "id": 6,
    "category": "综合知识",
    "question": "酒精的化学名称是？",
    "options": [
      "甲醇",
      "乙醇",
      "丙醇",
      "丁醇"
    ],
    "answer": 1
  },
  {
    "id": 7,
    "category": "自然科学",
    "question": "植物通过什么过程制造食物？",
    "options": [
      "呼吸作用",
      "光合作用",
      "消化作用",
      "蒸腾作用"
    ],
    "answer": 1
  },
  {
    "id": 8,
    "category": "自然科学",
    "question": "地球绕太阳转一圈需要多长时间？",
    "options": [
      "一个月",
      "半年",
      "一年",
      "一天"
    ],
    "answer": 2
  },
  {
    "id": 9,
    "category": "安全教育",
    "question": "在外面如果迷路了应该？",
    "options": [
      "到处走",
      "找警察或打电话给家长",
      "跟陌生人走",
      "哭"
    ],
    "answer": 1
  },
  {
    "id": 10,
    "category": "数学思维",
    "question": "84 + 2 = ?",
    "options": [
      "86",
      "85",
      "88",
      "87"
    ],
    "answer": 0
  },
  {
    "id": 11,
    "category": "数学思维",
    "question": "42 + 2 = ?",
    "options": [
      "46",
      "45",
      "43",
      "44"
    ],
    "answer": 3
  },
  {
    "id": 12,
    "category": "历史人文",
    "question": "《红楼梦》的作者是？",
    "options": [
      "罗贯中",
      "施耐庵",
      "曹雪芹",
      "吴承恩"
    ],
    "answer": 2
  },
  {
    "id": 13,
    "category": "综合知识",
    "question": "奥运会几年举办一次？",
    "options": [
      "2年",
      "3年",
      "4年",
      "5年"
    ],
    "answer": 2
  },
  {
    "id": 14,
    "category": "综合知识",
    "question": "300+400等于多少？",
    "options": [
      "500",
      "600",
      "700",
      "800"
    ],
    "answer": 2
  },
  {
    "id": 15,
    "category": "综合知识",
    "question": "企鹅为什么不怕冷？",
    "options": [
      "有厚厚的皮毛",
      "有厚厚的脂肪和羽毛",
      "每天运动",
      "喝热水"
    ],
    "answer": 1
  },
  {
    "id": 16,
    "category": "综合知识",
    "question": "中国的书法有几种主要字体？",
    "options": [
      "2种",
      "3种",
      "5种(篆隶楷行草)",
      "8种"
    ],
    "answer": 2
  },
  {
    "id": 17,
    "category": "数学思维",
    "question": "7 × 2 = ?",
    "options": [
      "13",
      "15",
      "14",
      "16"
    ],
    "answer": 2
  },
  {
    "id": 18,
    "category": "综合知识",
    "question": "一年中大月有多少天？",
    "options": [
      "28天",
      "29天",
      "30天",
      "31天"
    ],
    "answer": 3
  },
  {
    "id": 19,
    "category": "天文宇宙",
    "question": "日全食时能看到什么？",
    "options": [
      "月亮",
      "太阳的日冕",
      "星星",
      "云层"
    ],
    "answer": 1
  },
  {
    "id": 20,
    "category": "数学思维",
    "question": "能被2整除的数叫做？",
    "options": [
      "奇数",
      "偶数",
      "质数",
      "合数"
    ],
    "answer": 1
  },
  {
    "id": 21,
    "category": "数学思维",
    "question": "2 × 8 = ?",
    "options": [
      "15",
      "16",
      "18",
      "17"
    ],
    "answer": 1
  },
  {
    "id": 22,
    "category": "生活常识",
    "question": "早上起床后应该先做什么？",
    "options": [
      "看电视",
      "刷牙洗脸",
      "吃零食",
      "玩游戏"
    ],
    "answer": 1
  },
  {
    "id": 23,
    "category": "天文宇宙",
    "question": "北斗七星属于什么星座？",
    "options": [
      "猎户座",
      "大熊座",
      "小熊座",
      "仙后座"
    ],
    "answer": 1
  },
  {
    "id": 24,
    "category": "数学思维",
    "question": "51 + 5 = ?",
    "options": [
      "58",
      "57",
      "55",
      "56"
    ],
    "answer": 3
  },
  {
    "id": 25,
    "category": "综合知识",
    "question": "刺猬的刺有什么作用？",
    "options": [
      "好看",
      "防御敌人",
      "储存食物",
      "保暖"
    ],
    "answer": 1
  },
  {
    "id": 26,
    "category": "历史人文",
    "question": "中国古代四大发明不包括？",
    "options": [
      "造纸术",
      "指南针",
      "火药",
      "地动仪"
    ],
    "answer": 3
  },
  {
    "id": 27,
    "category": "数学思维",
    "question": "3 × 6 = ?",
    "options": [
      "20",
      "19",
      "18",
      "17"
    ],
    "answer": 2
  },
  {
    "id": 28,
    "category": "自然科学",
    "question": "章鱼有几颗心脏？",
    "options": [
      "1颗",
      "2颗",
      "3颗",
      "4颗"
    ],
    "answer": 2
  },
  {
    "id": 29,
    "category": "植物王国",
    "question": "松树是裸子植物还是被子植物？",
    "options": [
      "裸子植物",
      "被子植物",
      "都不是",
      "都是"
    ],
    "answer": 0
  },
  {
    "id": 30,
    "category": "天文宇宙",
    "question": "彗星的尾巴是怎么形成的？",
    "options": [
      "冰融化",
      "太阳风吹出气体和尘埃",
      "火箭推进",
      "旋转甩出"
    ],
    "answer": 1
  },
  {
    "id": 31,
    "category": "数学思维",
    "question": "100的一半的一半是多少？",
    "options": [
      "25",
      "50",
      "75",
      "20"
    ],
    "answer": 0
  },
  {
    "id": 32,
    "category": "综合知识",
    "question": "澳门回归中国是哪一年？",
    "options": [
      "1995年",
      "1997年",
      "1999年",
      "2001年"
    ],
    "answer": 2
  },
  {
    "id": 33,
    "category": "地理知识",
    "question": "京杭大运河连接哪两个城市？",
    "options": [
      "北京-南京",
      "北京-杭州",
      "北京-上海",
      "天津-杭州"
    ],
    "answer": 1
  },
  {
    "id": 34,
    "category": "数学思维",
    "question": "97 + 1 = ?",
    "options": [
      "100",
      "98",
      "97",
      "99"
    ],
    "answer": 1
  },
  {
    "id": 35,
    "category": "综合知识",
    "question": "5个十是多少？",
    "options": [
      "5",
      "10",
      "15",
      "50"
    ],
    "answer": 3
  },
  {
    "id": 36,
    "category": "综合知识",
    "question": "导致龋齿的主要原因是？",
    "options": [
      "吃糖后不刷牙",
      "喝水少",
      "不运动",
      "晒太阳"
    ],
    "answer": 0
  },
  {
    "id": 37,
    "category": "数学思维",
    "question": "2 × 9 = ?",
    "options": [
      "20",
      "17",
      "18",
      "19"
    ],
    "answer": 2
  },
  {
    "id": 38,
    "category": "数学思维",
    "question": "20 + 4 = ?",
    "options": [
      "25",
      "24",
      "23",
      "26"
    ],
    "answer": 1
  },
  {
    "id": 39,
    "category": "数学思维",
    "question": "66 + 5 = ?",
    "options": [
      "70",
      "71",
      "73",
      "72"
    ],
    "answer": 1
  },
  {
    "id": 40,
    "category": "数学思维",
    "question": "鸡兔同笼，8个头26条腿，几只兔？",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "answer": 2
  },
  {
    "id": 41,
    "category": "综合知识",
    "question": "鸭子走路为什么摇摇摆摆？",
    "options": [
      "为了好看",
      "腿短脚蹼大",
      "故意这样",
      "平衡能力差"
    ],
    "answer": 1
  },
  {
    "id": 42,
    "category": "植物王国",
    "question": "哪种植物会捕食昆虫？",
    "options": [
      "仙人掌",
      "猪笼草",
      "向日葵",
      "蒲公英"
    ],
    "answer": 1
  },
  {
    "id": 43,
    "category": "地理知识",
    "question": "中国有几个自治区？",
    "options": [
      "3个",
      "4个",
      "5个",
      "6个"
    ],
    "answer": 2
  },
  {
    "id": 44,
    "category": "数学思维",
    "question": "7 × 2 = ?",
    "options": [
      "14",
      "15",
      "13",
      "16"
    ],
    "answer": 0
  },
  {
    "id": 45,
    "category": "数学思维",
    "question": "7 + 7 = ?",
    "options": [
      "13",
      "14",
      "15",
      "16"
    ],
    "answer": 1
  },
  {
    "id": 46,
    "category": "天气气象",
    "question": "世界气象日是哪一天？",
    "options": [
      "3月23日",
      "4月22日",
      "5月12日",
      "6月5日"
    ],
    "answer": 0
  },
  {
    "id": 47,
    "category": "综合知识",
    "question": "猴子最喜欢吃什么？",
    "options": [
      "鱼",
      "香蕉和水果",
      "树叶",
      "肉"
    ],
    "answer": 1
  },
  {
    "id": 48,
    "category": "综合知识",
    "question": "电池的正极通常用什么材料？",
    "options": [
      "锌",
      "碳棒或金属氧化物",
      "塑料",
      "玻璃"
    ],
    "answer": 1
  },
  {
    "id": 49,
    "category": "综合知识",
    "question": "世界上最大的动物是什么？",
    "options": [
      "大象",
      "长颈鹿",
      "蓝鲸",
      "恐龙"
    ],
    "answer": 2
  },
  {
    "id": 50,
    "category": "地理知识",
    "question": "世界上最大的海洋是？",
    "options": [
      "大西洋",
      "印度洋",
      "太平洋",
      "北冰洋"
    ],
    "answer": 2
  },
  {
    "id": 51,
    "category": "生活常识",
    "question": "被烫伤后第一时间应该怎么做？",
    "options": [
      "涂牙膏",
      "用冷水冲洗",
      "抹酱油",
      "包起来"
    ],
    "answer": 1
  },
  {
    "id": 52,
    "category": "天文宇宙",
    "question": "地球自转一周约多长时间？",
    "options": [
      "12小时",
      "24小时",
      "30天",
      "365天"
    ],
    "answer": 1
  },
  {
    "id": 53,
    "category": "综合知识",
    "question": "《水浒传》中有多少位好汉？",
    "options": [
      "36位",
      "72位",
      "108位",
      "120位"
    ],
    "answer": 2
  },
  {
    "id": 54,
    "category": "历史人文",
    "question": "《论语》记录了谁的言行？",
    "options": [
      "老子",
      "孟子",
      "孔子",
      "庄子"
    ],
    "answer": 2
  },
  {
    "id": 55,
    "category": "综合知识",
    "question": "核电站利用什么发电？",
    "options": [
      "燃烧煤",
      "核裂变",
      "风力",
      "水力"
    ],
    "answer": 1
  },
  {
    "id": 56,
    "category": "动物世界",
    "question": "老鹰的眼睛有什么特点？",
    "options": [
      "近视",
      "远视",
      "散光",
      "色盲"
    ],
    "answer": 1
  },
  {
    "id": 57,
    "category": "生活常识",
    "question": "看电视多久应该休息一下？",
    "options": [
      "30-40分钟",
      "1-2小时",
      "3-4小时",
      "不用休息"
    ],
    "answer": 0
  },
  {
    "id": 58,
    "category": "植物王国",
    "question": "土豆是植物的哪个部分？",
    "options": [
      "根",
      "茎(块茎)",
      "果实",
      "种子"
    ],
    "answer": 1
  },
  {
    "id": 59,
    "category": "自然科学",
    "question": "蚂蚁是靠什么来认路的？",
    "options": [
      "眼睛",
      "触角",
      "气味",
      "声音"
    ],
    "answer": 2
  },
  {
    "id": 60,
    "category": "数学思维",
    "question": "44 + 8 = ?",
    "options": [
      "51",
      "54",
      "52",
      "53"
    ],
    "answer": 2
  },
  {
    "id": 61,
    "category": "地理知识",
    "question": "三江源是指哪三条江的源头？",
    "options": [
      "长江黄河珠江",
      "长江黄河澜沧江",
      "长江黄河淮河",
      "黄河淮河珠江"
    ],
    "answer": 1
  },
  {
    "id": 62,
    "category": "数学思维",
    "question": "7 × 7 = ?",
    "options": [
      "51",
      "48",
      "50",
      "49"
    ],
    "answer": 3
  },
  {
    "id": 63,
    "category": "综合知识",
    "question": "中秋节的习俗是什么？",
    "options": [
      "放鞭炮",
      "吃月饼赏月",
      "赛龙舟",
      "贴春联"
    ],
    "answer": 1
  },
  {
    "id": 64,
    "category": "数学思维",
    "question": "80 + 7 = ?",
    "options": [
      "87",
      "86",
      "89",
      "88"
    ],
    "answer": 0
  },
  {
    "id": 65,
    "category": "综合知识",
    "question": "磁铁能吸引什么？",
    "options": [
      "所有金属",
      "铁、镍、钴",
      "所有东西",
      "只有铁"
    ],
    "answer": 1
  },
  {
    "id": 66,
    "category": "数学思维",
    "question": "45 + 9 = ?",
    "options": [
      "54",
      "55",
      "53",
      "56"
    ],
    "answer": 0
  },
  {
    "id": 67,
    "category": "安全教育",
    "question": "游泳时小腿抽筋怎么办？",
    "options": [
      "继续游",
      "大声呼救并保持仰浮",
      "用力蹬腿",
      "潜入水中"
    ],
    "answer": 1
  },
  {
    "id": 68,
    "category": "综合知识",
    "question": "平角是多少度？",
    "options": [
      "90度",
      "120度",
      "180度",
      "360度"
    ],
    "answer": 2
  },
  {
    "id": 69,
    "category": "自然科学",
    "question": "彩虹有几种颜色？",
    "options": [
      "5种",
      "6种",
      "7种",
      "8种"
    ],
    "answer": 2
  },
  {
    "id": 70,
    "category": "数学思维",
    "question": "48 + 4 = ?",
    "options": [
      "52",
      "51",
      "54",
      "53"
    ],
    "answer": 0
  },
  {
    "id": 71,
    "category": "数学思维",
    "question": "38 + 2 = ?",
    "options": [
      "42",
      "40",
      "39",
      "41"
    ],
    "answer": 1
  },
  {
    "id": 72,
    "category": "数学思维",
    "question": "比25多15的数是？",
    "options": [
      "30",
      "35",
      "40",
      "45"
    ],
    "answer": 2
  },
  {
    "id": 73,
    "category": "自然科学",
    "question": "蚊子有几对翅膀？",
    "options": [
      "1对",
      "2对",
      "3对",
      "没有翅膀"
    ],
    "answer": 0
  },
  {
    "id": 74,
    "category": "数学思维",
    "question": "92 + 9 = ?",
    "options": [
      "100",
      "102",
      "103",
      "101"
    ],
    "answer": 3
  },
  {
    "id": 75,
    "category": "数学思维",
    "question": "5+5×5等于？",
    "options": [
      "25",
      "30",
      "50",
      "75"
    ],
    "answer": 1
  },
  {
    "id": 76,
    "category": "数学思维",
    "question": "4 × 4 = ?",
    "options": [
      "17",
      "16",
      "18",
      "15"
    ],
    "answer": 1
  },
  {
    "id": 77,
    "category": "自然科学",
    "question": "萤火虫为什么会发光？",
    "options": [
      "身体有电",
      "体内有荧光素",
      "吃的东西发光",
      "反射月光"
    ],
    "answer": 1
  },
  {
    "id": 78,
    "category": "数学思维",
    "question": "用3根小棒能摆出什么图形？",
    "options": [
      "正方形",
      "三角形",
      "长方形",
      "圆"
    ],
    "answer": 1
  },
  {
    "id": 79,
    "category": "天气气象",
    "question": "为什么海拔越高气温越低？",
    "options": [
      "离太阳近",
      "空气稀薄保温差",
      "风大气温低",
      "山上水多"
    ],
    "answer": 1
  },
  {
    "id": 80,
    "category": "生活常识",
    "question": "为什么要天天刷牙？",
    "options": [
      "好看",
      "预防蛀牙",
      "老师要求",
      "妈妈说的"
    ],
    "answer": 1
  },
  {
    "id": 81,
    "category": "综合知识",
    "question": "1/2和2/4比较大小？",
    "options": [
      "1/2大",
      "2/4大",
      "一样大",
      "无法比较"
    ],
    "answer": 2
  },
  {
    "id": 82,
    "category": "综合知识",
    "question": "9的6倍是多少？",
    "options": [
      "15",
      "45",
      "54",
      "63"
    ],
    "answer": 2
  },
  {
    "id": 83,
    "category": "数学思维",
    "question": "3 × 2 = ?",
    "options": [
      "7",
      "8",
      "5",
      "6"
    ],
    "answer": 3
  },
  {
    "id": 84,
    "category": "综合知识",
    "question": "塑料瓶扔进大海需要多久分解？",
    "options": [
      "10年",
      "50年",
      "200年以上",
      "永远不会"
    ],
    "answer": 2
  },
  {
    "id": 85,
    "category": "生活常识",
    "question": "为什么不能用手揉眼睛？",
    "options": [
      "眼睛会变小",
      "容易感染细菌",
      "眼睛会变红",
      "会近视"
    ],
    "answer": 1
  },
  {
    "id": 86,
    "category": "历史人文",
    "question": "圆明园是在哪场战争中遭到焚毁的？",
    "options": [
      "鸦片战争",
      "第二次鸦片战争",
      "甲午战争",
      "八国联军侵华"
    ],
    "answer": 1
  },
  {
    "id": 87,
    "category": "数学思维",
    "question": "3 × 2 = ?",
    "options": [
      "7",
      "5",
      "8",
      "6"
    ],
    "answer": 3
  },
  {
    "id": 88,
    "category": "数学思维",
    "question": "最大的两位数是？",
    "options": [
      "90",
      "95",
      "99",
      "100"
    ],
    "answer": 2
  },
  {
    "id": 89,
    "category": "动物世界",
    "question": "哪种动物被称为沙漠之舟？",
    "options": [
      "马",
      "骆驼",
      "驴",
      "牛"
    ],
    "answer": 1
  },
  {
    "id": 90,
    "category": "动物世界",
    "question": "海豚是用什么呼吸的？",
    "options": [
      "鳃",
      "肺",
      "皮肤",
      "喷水孔"
    ],
    "answer": 1
  },
  {
    "id": 91,
    "category": "综合知识",
    "question": "无人机可以用于？",
    "options": [
      "航拍",
      "送快递",
      "农业喷洒",
      "以上都可以"
    ],
    "answer": 3
  },
  {
    "id": 92,
    "category": "综合知识",
    "question": "最小的三位数是？",
    "options": [
      "0",
      "1",
      "10",
      "100"
    ],
    "answer": 3
  },
  {
    "id": 93,
    "category": "植物王国",
    "question": "香蕉是树吗？",
    "options": [
      "是树",
      "是草",
      "是灌木",
      "是藤本"
    ],
    "answer": 1
  },
  {
    "id": 94,
    "category": "自然科学",
    "question": "猫的胡子有什么作用？",
    "options": [
      "装饰",
      "测量宽度",
      "保持平衡",
      "吓唬敌人"
    ],
    "answer": 1
  },
  {
    "id": 95,
    "category": "数学思维",
    "question": "一个三角形的内角和是？",
    "options": [
      "90度",
      "180度",
      "270度",
      "360度"
    ],
    "answer": 1
  },
  {
    "id": 96,
    "category": "数学思维",
    "question": "99 + 4 = ?",
    "options": [
      "103",
      "105",
      "102",
      "104"
    ],
    "answer": 0
  },
  {
    "id": 97,
    "category": "天气气象",
    "question": "沙尘暴主要发生在哪个季节？",
    "options": [
      "春季",
      "夏季",
      "秋季",
      "冬季"
    ],
    "answer": 0
  },
  {
    "id": 98,
    "category": "安全教育",
    "question": "电器着火应该用什么灭火？",
    "options": [
      "水",
      "干粉灭火器",
      "纸",
      "衣服"
    ],
    "answer": 1
  },
  {
    "id": 99,
    "category": "数学思维",
    "question": "4 × 6 = ?",
    "options": [
      "25",
      "23",
      "24",
      "26"
    ],
    "answer": 2
  },
  {
    "id": 100,
    "category": "生活常识",
    "question": "吃胡萝卜对身体有什么好处？",
    "options": [
      "长高",
      "对眼睛好",
      "变聪明",
      "皮肤变白"
    ],
    "answer": 1
  },
  {
    "id": 101,
    "category": "地理知识",
    "question": "太阳系中最大的行星是？",
    "options": [
      "地球",
      "火星",
      "木星",
      "土星"
    ],
    "answer": 2
  },
  {
    "id": 102,
    "category": "综合知识",
    "question": "红十字会的标志是？",
    "options": [
      "红新月",
      "红十字",
      "红水晶",
      "以上都是"
    ],
    "answer": 3
  },
  {
    "id": 103,
    "category": "安全教育",
    "question": "遇到陌生人给你糖果，你应该怎么做？",
    "options": [
      "接受",
      "拒绝并告诉家长",
      "先吃再说",
      "带回家"
    ],
    "answer": 1
  },
  {
    "id": 104,
    "category": "植物王国",
    "question": "种子发芽需要什么条件？",
    "options": [
      "只需要水",
      "水、空气和适宜温度",
      "只需要阳光",
      "只需要土"
    ],
    "answer": 1
  },
  {
    "id": 105,
    "category": "数学思维",
    "question": "84 + 5 = ?",
    "options": [
      "91",
      "89",
      "88",
      "90"
    ],
    "answer": 1
  },
  {
    "id": 106,
    "category": "生活常识",
    "question": "哪种食物含钙最多？",
    "options": [
      "肉类",
      "蔬菜",
      "牛奶",
      "米饭"
    ],
    "answer": 2
  },
  {
    "id": 107,
    "category": "综合知识",
    "question": "国徽上有哪些图案？",
    "options": [
      "天安门",
      "齿轮和麦稻穗",
      "五星",
      "以上都是"
    ],
    "answer": 3
  },
  {
    "id": 108,
    "category": "数学思维",
    "question": "72 + 5 = ?",
    "options": [
      "77",
      "76",
      "79",
      "78"
    ],
    "answer": 0
  },
  {
    "id": 109,
    "category": "地理知识",
    "question": "长江发源于？",
    "options": [
      "青海省唐古拉山",
      "西藏",
      "云南",
      "四川"
    ],
    "answer": 0
  },
  {
    "id": 110,
    "category": "自然科学",
    "question": "蝙蝠是怎样辨别方向的？",
    "options": [
      "用眼睛看",
      "靠嗅觉",
      "用超声波",
      "靠触觉"
    ],
    "answer": 2
  },
  {
    "id": 111,
    "category": "自然科学",
    "question": "太阳是什么星？",
    "options": [
      "行星",
      "恒星",
      "卫星",
      "彗星"
    ],
    "answer": 1
  },
  {
    "id": 112,
    "category": "生活常识",
    "question": "火警电话是多少？",
    "options": [
      "110",
      "119",
      "120",
      "122"
    ],
    "answer": 1
  },
  {
    "id": 113,
    "category": "综合知识",
    "question": "用4根同样长的小棒能摆成？",
    "options": [
      "三角形",
      "正方形",
      "五边形",
      "圆"
    ],
    "answer": 1
  },
  {
    "id": 114,
    "category": "综合知识",
    "question": "1周有多少小时？",
    "options": [
      "120小时",
      "144小时",
      "168小时",
      "200小时"
    ],
    "answer": 2
  },
  {
    "id": 115,
    "category": "数学思维",
    "question": "5的3倍是多少？",
    "options": [
      "8",
      "10",
      "15",
      "20"
    ],
    "answer": 2
  },
  {
    "id": 116,
    "category": "自然科学",
    "question": "青蛙用什么呼吸？",
    "options": [
      "只用肺",
      "只用皮肤",
      "肺和皮肤",
      "鳃"
    ],
    "answer": 2
  },
  {
    "id": 117,
    "category": "自然科学",
    "question": "蝴蝶的寿命一般有多长？",
    "options": [
      "一天",
      "一周到几个月",
      "一年",
      "十年"
    ],
    "answer": 1
  },
  {
    "id": 118,
    "category": "综合知识",
    "question": "二维码是谁发明的？",
    "options": [
      "中国人",
      "日本人",
      "美国人",
      "韩国人"
    ],
    "answer": 1
  },
  {
    "id": 119,
    "category": "综合知识",
    "question": "为什么先看到电焊光后听到声音？",
    "options": [
      "眼睛敏感",
      "光速比音速快得多",
      "声音慢",
      "耳朵迟钝"
    ],
    "answer": 1
  },
  {
    "id": 120,
    "category": "生活常识",
    "question": "看书应该保持多远的距离？",
    "options": [
      "10厘米",
      "30厘米左右",
      "50厘米",
      "100厘米"
    ],
    "answer": 1
  },
  {
    "id": 121,
    "category": "自然科学",
    "question": "为什么流泪时鼻涕也会流？",
    "options": [
      "泪液通过鼻泪管流入鼻腔",
      "感冒了",
      "鼻涕也是泪",
      "心理作用"
    ],
    "answer": 0
  },
  {
    "id": 122,
    "category": "综合知识",
    "question": "最大的两位数是？",
    "options": [
      "10",
      "50",
      "99",
      "100"
    ],
    "answer": 2
  },
  {
    "id": 123,
    "category": "动物世界",
    "question": "海龟在哪里下蛋？",
    "options": [
      "海里",
      "沙滩上",
      "岩石上",
      "船上"
    ],
    "answer": 1
  },
  {
    "id": 124,
    "category": "综合知识",
    "question": "酸奶是由什么发酵而成的？",
    "options": [
      "牛奶",
      "果汁",
      "豆浆",
      "米汤"
    ],
    "answer": 0
  },
  {
    "id": 125,
    "category": "地理知识",
    "question": "五岳中的东岳是？",
    "options": [
      "华山",
      "泰山",
      "恒山",
      "嵩山"
    ],
    "answer": 1
  },
  {
    "id": 126,
    "category": "植物王国",
    "question": "莲藕是荷花的什么部分？",
    "options": [
      "根",
      "茎",
      "叶",
      "花"
    ],
    "answer": 1
  },
  {
    "id": 127,
    "category": "数学思维",
    "question": "50 + 7 = ?",
    "options": [
      "58",
      "57",
      "56",
      "59"
    ],
    "answer": 1
  },
  {
    "id": 128,
    "category": "数学思维",
    "question": "68 + 6 = ?",
    "options": [
      "73",
      "76",
      "75",
      "74"
    ],
    "answer": 3
  },
  {
    "id": 129,
    "category": "综合知识",
    "question": "五环旗代表什么？",
    "options": [
      "五大洲",
      "五个国家",
      "五种运动",
      "五种颜色"
    ],
    "answer": 0
  },
  {
    "id": 130,
    "category": "天文宇宙",
    "question": "月球引力是地球的几分之一？",
    "options": [
      "二分之一",
      "三分之一",
      "六分之一",
      "十分之一"
    ],
    "answer": 2
  },
  {
    "id": 131,
    "category": "数学思维",
    "question": "98 + 8 = ?",
    "options": [
      "108",
      "105",
      "106",
      "107"
    ],
    "answer": 2
  },
  {
    "id": 132,
    "category": "数学思维",
    "question": "83 + 8 = ?",
    "options": [
      "93",
      "92",
      "90",
      "91"
    ],
    "answer": 3
  },
  {
    "id": 133,
    "category": "数学思维",
    "question": "36除以4等于多少？",
    "options": [
      "6",
      "8",
      "9",
      "12"
    ],
    "answer": 2
  },
  {
    "id": 134,
    "category": "自然科学",
    "question": "骆驼的驼峰里储存的是什么？",
    "options": [
      "水",
      "食物",
      "脂肪",
      "空气"
    ],
    "answer": 2
  },
  {
    "id": 135,
    "category": "自然科学",
    "question": "水在多少摄氏度时结冰？",
    "options": [
      "100°C",
      "0°C",
      "-10°C",
      "50°C"
    ],
    "answer": 1
  },
  {
    "id": 136,
    "category": "安全教育",
    "question": "如果有人溺水，小学生应该怎么做？",
    "options": [
      "跳下去救人",
      "大声呼救并找大人",
      "用棍子去拉",
      "观望"
    ],
    "answer": 1
  },
  {
    "id": 137,
    "category": "数学思维",
    "question": "75 + 5 = ?",
    "options": [
      "80",
      "82",
      "79",
      "81"
    ],
    "answer": 0
  },
  {
    "id": 138,
    "category": "地理知识",
    "question": "世界上面积最大的国家是？",
    "options": [
      "中国",
      "美国",
      "加拿大",
      "俄罗斯"
    ],
    "answer": 3
  },
  {
    "id": 139,
    "category": "地理知识",
    "question": "世界上最大的沙漠是？",
    "options": [
      "撒哈拉沙漠",
      "戈壁沙漠",
      "塔克拉玛干沙漠",
      "阿拉伯沙漠"
    ],
    "answer": 0
  },
  {
    "id": 140,
    "category": "综合知识",
    "question": "1小时等于多少秒？",
    "options": [
      "60秒",
      "600秒",
      "3600秒",
      "36000秒"
    ],
    "answer": 2
  },
  {
    "id": 141,
    "category": "数学思维",
    "question": "45 + 6 = ?",
    "options": [
      "51",
      "52",
      "50",
      "53"
    ],
    "answer": 0
  },
  {
    "id": 142,
    "category": "综合知识",
    "question": "平行四边形对边什么关系？",
    "options": [
      "相交",
      "平行且相等",
      "垂直",
      "不平行"
    ],
    "answer": 1
  },
  {
    "id": 143,
    "category": "数学思维",
    "question": "4 × 3 = ?",
    "options": [
      "12",
      "14",
      "13",
      "11"
    ],
    "answer": 0
  },
  {
    "id": 144,
    "category": "数学思维",
    "question": "6 × 9 = ?",
    "options": [
      "53",
      "55",
      "56",
      "54"
    ],
    "answer": 3
  },
  {
    "id": 145,
    "category": "天文宇宙",
    "question": "地球绕太阳的轨道是什么形状？",
    "options": [
      "圆形",
      "椭圆形",
      "方形",
      "三角形"
    ],
    "answer": 1
  },
  {
    "id": 146,
    "category": "天文宇宙",
    "question": "银河系是什么形状？",
    "options": [
      "球状",
      "旋涡状",
      "立方体",
      "不规则"
    ],
    "answer": 1
  },
  {
    "id": 147,
    "category": "地理知识",
    "question": "中国的首都是？",
    "options": [
      "上海",
      "南京",
      "北京",
      "西安"
    ],
    "answer": 2
  },
  {
    "id": 148,
    "category": "数学思维",
    "question": "1000克等于多少千克？",
    "options": [
      "0.1千克",
      "1千克",
      "10千克",
      "100千克"
    ],
    "answer": 1
  },
  {
    "id": 149,
    "category": "数学思维",
    "question": "41 + 5 = ?",
    "options": [
      "48",
      "45",
      "46",
      "47"
    ],
    "answer": 2
  },
  {
    "id": 150,
    "category": "综合知识",
    "question": "老虎属于什么科？",
    "options": [
      "犬科",
      "猫科",
      "熊科",
      "马科"
    ],
    "answer": 1
  },
  {
    "id": 151,
    "category": "地理知识",
    "question": "世界上人口最多的国家是？",
    "options": [
      "中国",
      "印度",
      "美国",
      "印度尼西亚"
    ],
    "answer": 1
  },
  {
    "id": 152,
    "category": "数学思维",
    "question": "一个正方形有几条对称轴？",
    "options": [
      "2条",
      "3条",
      "4条",
      "6条"
    ],
    "answer": 2
  },
  {
    "id": 153,
    "category": "数学思维",
    "question": "6 × 4 = ?",
    "options": [
      "26",
      "25",
      "24",
      "23"
    ],
    "answer": 2
  },
  {
    "id": 154,
    "category": "综合知识",
    "question": "把一个整体平均分成4份取3份用分数表示是？",
    "options": [
      "1/4",
      "2/4",
      "3/4",
      "4/4"
    ],
    "answer": 2
  },
  {
    "id": 155,
    "category": "综合知识",
    "question": "世界上第一台计算机叫什么？",
    "options": [
      "Apple",
      "IBM",
      "ENIAC",
      "Windows"
    ],
    "answer": 2
  },
  {
    "id": 156,
    "category": "安全教育",
    "question": "发生火灾时应该走哪里？",
    "options": [
      "电梯",
      "安全通道/楼梯",
      "窗户",
      "原地等待"
    ],
    "answer": 1
  },
  {
    "id": 157,
    "category": "综合知识",
    "question": "中国加入WTO是哪一年？",
    "options": [
      "1999年",
      "2000年",
      "2001年",
      "2002年"
    ],
    "answer": 2
  },
  {
    "id": 158,
    "category": "天气气象",
    "question": "霜是怎么形成的？",
    "options": [
      "下雨结冰",
      "露水结冰",
      "雪融化",
      "云层落下"
    ],
    "answer": 1
  },
  {
    "id": 159,
    "category": "数学思维",
    "question": "21 + 6 = ?",
    "options": [
      "27",
      "29",
      "26",
      "28"
    ],
    "answer": 0
  },
  {
    "id": 160,
    "category": "安全教育",
    "question": "发现煤气泄漏应当先做什么？",
    "options": [
      "打开电灯",
      "关闭阀门并开窗通风",
      "打电话",
      "点火检查"
    ],
    "answer": 1
  },
  {
    "id": 161,
    "category": "自然科学",
    "question": "下列哪种不是哺乳动物？",
    "options": [
      "鲸鱼",
      "蝙蝠",
      "鸡",
      "海豚"
    ],
    "answer": 2
  },
  {
    "id": 162,
    "category": "动物世界",
    "question": "世界上最小的鸟是？",
    "options": [
      "麻雀",
      "蜂鸟",
      "翠鸟",
      "黄鹂"
    ],
    "answer": 1
  },
  {
    "id": 163,
    "category": "天气气象",
    "question": "\"朝霞不出门\"下一句是？",
    "options": [
      "晚霞行千里",
      "晚霞不出门",
      "出行看天色",
      "早霞行千里"
    ],
    "answer": 0
  },
  {
    "id": 164,
    "category": "综合知识",
    "question": "为什么轮胎上要有花纹？",
    "options": [
      "为了好看",
      "增大摩擦力防滑",
      "减轻重量",
      "跑得更快"
    ],
    "answer": 1
  },
  {
    "id": 165,
    "category": "综合知识",
    "question": "光的速度约为每秒多少公里？",
    "options": [
      "3万公里",
      "30万公里",
      "300万公里",
      "3000万公里"
    ],
    "answer": 1
  },
  {
    "id": 166,
    "category": "生活常识",
    "question": "急救电话是多少？",
    "options": [
      "110",
      "119",
      "120",
      "122"
    ],
    "answer": 2
  },
  {
    "id": 167,
    "category": "动物世界",
    "question": "哪种动物冬眠时间最长？",
    "options": [
      "熊",
      "蛇",
      "睡鼠",
      "青蛙"
    ],
    "answer": 2
  },
  {
    "id": 168,
    "category": "综合知识",
    "question": "为什么铁会生锈？",
    "options": [
      "因为老了",
      "铁与水和氧气反应",
      "因为太冷",
      "因为有灰尘"
    ],
    "answer": 1
  },
  {
    "id": 169,
    "category": "历史人文",
    "question": "火药最早是哪个国家发明的？",
    "options": [
      "印度",
      "中国",
      "埃及",
      "希腊"
    ],
    "answer": 1
  },
  {
    "id": 170,
    "category": "天气气象",
    "question": "梅雨季节一般出现在什么时候？",
    "options": [
      "春季",
      "初夏",
      "盛夏",
      "秋季"
    ],
    "answer": 1
  },
  {
    "id": 171,
    "category": "历史人文",
    "question": "中华人民共和国成立于哪一年？",
    "options": [
      "1945年",
      "1949年",
      "1950年",
      "1954年"
    ],
    "answer": 1
  },
  {
    "id": 172,
    "category": "数学思维",
    "question": "5 + 3 = ?",
    "options": [
      "8",
      "9",
      "10",
      "7"
    ],
    "answer": 0
  },
  {
    "id": 173,
    "category": "数学思维",
    "question": "23 + 7 = ?",
    "options": [
      "29",
      "32",
      "31",
      "30"
    ],
    "answer": 3
  },
  {
    "id": 174,
    "category": "地理知识",
    "question": "中国最长的河流是什么？",
    "options": [
      "黄河",
      "长江",
      "珠江",
      "淮河"
    ],
    "answer": 1
  },
  {
    "id": 175,
    "category": "生活常识",
    "question": "夏天为什么容易中暑？",
    "options": [
      "太阳太大",
      "体温调节失调",
      "喝水太多",
      "吃太多"
    ],
    "answer": 1
  },
  {
    "id": 176,
    "category": "数学思维",
    "question": "8 × 9 = ?",
    "options": [
      "74",
      "72",
      "73",
      "71"
    ],
    "answer": 1
  },
  {
    "id": 177,
    "category": "综合知识",
    "question": "15-9等于多少？",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "answer": 1
  },
  {
    "id": 178,
    "category": "天文宇宙",
    "question": "宇航员在太空中为什么会漂浮？",
    "options": [
      "没有空气",
      "失重状态",
      "风很大",
      "穿了特殊衣服"
    ],
    "answer": 1
  },
  {
    "id": 179,
    "category": "数学思维",
    "question": "9 × 9 = ?",
    "options": [
      "80",
      "81",
      "83",
      "82"
    ],
    "answer": 1
  },
  {
    "id": 180,
    "category": "地理知识",
    "question": "亚马逊河位于哪个洲？",
    "options": [
      "非洲",
      "亚洲",
      "南美洲",
      "欧洲"
    ],
    "answer": 2
  },
  {
    "id": 181,
    "category": "安全教育",
    "question": "不能湿手触碰什么？",
    "options": [
      "毛巾",
      "电器开关",
      "书本",
      "铅笔"
    ],
    "answer": 1
  },
  {
    "id": 182,
    "category": "自然科学",
    "question": "蜘蛛丝比同粗细的钢丝更结实",
    "options": [
      "真",
      "假"
    ],
    "answer": 0
  },
  {
    "id": 183,
    "category": "地理知识",
    "question": "珠穆朗玛峰位于哪个国家？",
    "options": [
      "中国",
      "尼泊尔",
      "中国和尼泊尔边界",
      "印度"
    ],
    "answer": 2
  },
  {
    "id": 184,
    "category": "综合知识",
    "question": "《西游记》中孙悟空用什么武器？",
    "options": [
      "剑",
      "枪",
      "金箍棒",
      "刀"
    ],
    "answer": 2
  },
  {
    "id": 185,
    "category": "数学思维",
    "question": "32 + 2 = ?",
    "options": [
      "34",
      "33",
      "35",
      "36"
    ],
    "answer": 0
  },
  {
    "id": 186,
    "category": "综合知识",
    "question": "蚕的一生要经历几个阶段？",
    "options": [
      "2个",
      "3个",
      "4个",
      "5个"
    ],
    "answer": 2
  },
  {
    "id": 187,
    "category": "综合知识",
    "question": "上海世博会主题是？",
    "options": [
      "城市让生活更美好",
      "人与自然",
      "科技进步",
      "和平发展"
    ],
    "answer": 0
  },
  {
    "id": 188,
    "category": "综合知识",
    "question": "儿童节是哪一天？",
    "options": [
      "5月1日",
      "5月4日",
      "6月1日",
      "10月1日"
    ],
    "answer": 2
  },
  {
    "id": 189,
    "category": "数学思维",
    "question": "7 + 9 = ?",
    "options": [
      "17",
      "18",
      "15",
      "16"
    ],
    "answer": 3
  },
  {
    "id": 190,
    "category": "数学思维",
    "question": "6 × 3 = ?",
    "options": [
      "18",
      "19",
      "17",
      "20"
    ],
    "answer": 0
  },
  {
    "id": 191,
    "category": "天文宇宙",
    "question": "北斗七星位于什么星座？",
    "options": [
      "大熊座",
      "小熊座",
      "猎户座",
      "天琴座"
    ],
    "answer": 0
  },
  {
    "id": 192,
    "category": "自然科学",
    "question": "河流为什么不容易结冰？",
    "options": [
      "水太深",
      "水在流动",
      "水温太高",
      "有鱼在游"
    ],
    "answer": 1
  },
  {
    "id": 193,
    "category": "天气气象",
    "question": "台风的\"风眼\"里天气怎样？",
    "options": [
      "狂风暴雨",
      "风平浪静",
      "和外围一样",
      "无法确定"
    ],
    "answer": 1
  },
  {
    "id": 194,
    "category": "数学思维",
    "question": "16 + 5 = ?",
    "options": [
      "23",
      "22",
      "21",
      "20"
    ],
    "answer": 2
  },
  {
    "id": 195,
    "category": "动物世界",
    "question": "蜻蜓有几只翅膀？",
    "options": [
      "2只",
      "4只",
      "6只",
      "8只"
    ],
    "answer": 1
  },
  {
    "id": 196,
    "category": "综合知识",
    "question": "1小时有多少分钟？",
    "options": [
      "30分钟",
      "45分钟",
      "60分钟",
      "90分钟"
    ],
    "answer": 2
  },
  {
    "id": 197,
    "category": "综合知识",
    "question": "42除以6等于多少？",
    "options": [
      "6",
      "7",
      "8",
      "9"
    ],
    "answer": 1
  },
  {
    "id": 198,
    "category": "自然科学",
    "question": "蛇没有脚怎么走路？",
    "options": [
      "靠肌肉收缩",
      "靠跳跃",
      "靠滚动",
      "靠风吹"
    ],
    "answer": 0
  },
  {
    "id": 199,
    "category": "综合知识",
    "question": "\"谁知盘中餐\"的下一句是？",
    "options": [
      "处处闻啼鸟",
      "粒粒皆辛苦",
      "低头思故乡",
      "红掌拨清波"
    ],
    "answer": 1
  },
  {
    "id": 200,
    "category": "自然科学",
    "question": "人有多少颗乳牙？",
    "options": [
      "20颗",
      "28颗",
      "32颗",
      "24颗"
    ],
    "answer": 0
  },
  {
    "id": 201,
    "category": "数学思维",
    "question": "60 + 1 = ?",
    "options": [
      "61",
      "62",
      "63",
      "60"
    ],
    "answer": 0
  },
  {
    "id": 202,
    "category": "数学思维",
    "question": "3 × 8 = ?",
    "options": [
      "24",
      "23",
      "26",
      "25"
    ],
    "answer": 0
  },
  {
    "id": 203,
    "category": "自然科学",
    "question": "蜜蜂采蜜一次能采多少花？",
    "options": [
      "约10朵",
      "约50朵",
      "约100朵",
      "约1000朵"
    ],
    "answer": 2
  },
  {
    "id": 204,
    "category": "综合知识",
    "question": "WiFi是什么？",
    "options": [
      "蓝牙",
      "无线网络连接技术",
      "卫星定位",
      "电视信号"
    ],
    "answer": 1
  },
  {
    "id": 205,
    "category": "自然科学",
    "question": "影子在一天中什么时候最短？",
    "options": [
      "早晨",
      "中午",
      "傍晚",
      "夜里"
    ],
    "answer": 1
  },
  {
    "id": 206,
    "category": "安全教育",
    "question": "网络交友需要注意什么？",
    "options": [
      "可以见面",
      "不要透露个人信息",
      "可以随便加",
      "可以视频"
    ],
    "answer": 1
  },
  {
    "id": 207,
    "category": "自然科学",
    "question": "含羞草受刺激会合拢叶子",
    "options": [
      "真",
      "假"
    ],
    "answer": 0
  },
  {
    "id": 208,
    "category": "数学思维",
    "question": "5 × 2 = ?",
    "options": [
      "9",
      "12",
      "11",
      "10"
    ],
    "answer": 3
  },
  {
    "id": 209,
    "category": "数学思维",
    "question": "2 × 3 = ?",
    "options": [
      "8",
      "7",
      "5",
      "6"
    ],
    "answer": 3
  },
  {
    "id": 210,
    "category": "综合知识",
    "question": "剪纸是中国的什么？",
    "options": [
      "传统手工艺",
      "现代艺术",
      "西方艺术",
      "儿童游戏"
    ],
    "answer": 0
  },
  {
    "id": 211,
    "category": "综合知识",
    "question": "什么是可再生能源？",
    "options": [
      "煤炭",
      "石油",
      "太阳能",
      "天然气"
    ],
    "answer": 2
  },
  {
    "id": 212,
    "category": "综合知识",
    "question": "中国海岸线总长度约？",
    "options": [
      "1000公里",
      "5000公里",
      "1.8万公里",
      "5万公里"
    ],
    "answer": 2
  },
  {
    "id": 213,
    "category": "综合知识",
    "question": "煮沸的水为什么会有气泡？",
    "options": [
      "有鱼在呼吸",
      "水变成水蒸气",
      "空气在溶解",
      "杂质分解"
    ],
    "answer": 1
  },
  {
    "id": 214,
    "category": "数学思维",
    "question": "12 + 6 = ?",
    "options": [
      "17",
      "19",
      "20",
      "18"
    ],
    "answer": 3
  },
  {
    "id": 215,
    "category": "数学思维",
    "question": "小明有3个苹果，小红有4个苹果，共有多少个？",
    "options": [
      "6个",
      "7个",
      "8个",
      "9个"
    ],
    "answer": 1
  },
  {
    "id": 216,
    "category": "天气气象",
    "question": "天气预报中\"多云\"指的是云量占天空的？",
    "options": [
      "1-2成",
      "3-5成",
      "6-9成",
      "10成"
    ],
    "answer": 2
  },
  {
    "id": 217,
    "category": "数学思维",
    "question": "小明有12块糖，吃了三分之一，还剩多少？",
    "options": [
      "3块",
      "4块",
      "8块",
      "9块"
    ],
    "answer": 2
  },
  {
    "id": 218,
    "category": "地理知识",
    "question": "世界上最长的城墙是？",
    "options": [
      "长城",
      "柏林墙",
      "哈德良长城",
      "耶路撒冷城墙"
    ],
    "answer": 0
  },
  {
    "id": 219,
    "category": "数学思维",
    "question": "61 + 1 = ?",
    "options": [
      "62",
      "61",
      "63",
      "64"
    ],
    "answer": 0
  },
  {
    "id": 220,
    "category": "数学思维",
    "question": "71 + 3 = ?",
    "options": [
      "76",
      "73",
      "74",
      "75"
    ],
    "answer": 2
  },
  {
    "id": 221,
    "category": "地理知识",
    "question": "世界上最大的珊瑚礁是？",
    "options": [
      "大堡礁",
      "红海珊瑚礁",
      "马尔代夫",
      "海南珊瑚礁"
    ],
    "answer": 0
  },
  {
    "id": 222,
    "category": "综合知识",
    "question": "春节时人们喜欢贴什么？",
    "options": [
      "窗花",
      "圣诞树",
      "南瓜",
      "彩蛋"
    ],
    "answer": 0
  },
  {
    "id": 223,
    "category": "综合知识",
    "question": "人民币的货币符号是？",
    "options": [
      "$",
      "€",
      "¥",
      "£"
    ],
    "answer": 2
  },
  {
    "id": 224,
    "category": "安全教育",
    "question": "发生地震时正确的做法是？",
    "options": [
      "坐电梯下楼",
      "躲在坚固的桌子下",
      "站在窗边",
      "跑到楼顶"
    ],
    "answer": 1
  },
  {
    "id": 225,
    "category": "综合知识",
    "question": "微博是哪个国家的社交平台？",
    "options": [
      "美国",
      "中国",
      "日本",
      "韩国"
    ],
    "answer": 1
  },
  {
    "id": 226,
    "category": "综合知识",
    "question": "中国国旗上有几颗星？",
    "options": [
      "3颗",
      "4颗",
      "5颗",
      "6颗"
    ],
    "answer": 2
  },
  {
    "id": 227,
    "category": "天气气象",
    "question": "暴风雨来临前气压会怎样变化？",
    "options": [
      "升高",
      "降低",
      "不变",
      "无法预测"
    ],
    "answer": 1
  },
  {
    "id": 228,
    "category": "综合知识",
    "question": "维生素C的主要来源是？",
    "options": [
      "肉类",
      "新鲜水果和蔬菜",
      "米饭",
      "牛奶"
    ],
    "answer": 1
  },
  {
    "id": 229,
    "category": "数学思维",
    "question": "5 + 9 = ?",
    "options": [
      "13",
      "14",
      "15",
      "16"
    ],
    "answer": 1
  },
  {
    "id": 230,
    "category": "生活常识",
    "question": "饭前便后要做什么？",
    "options": [
      "喝水",
      "洗手",
      "看书",
      "跑步"
    ],
    "answer": 1
  },
  {
    "id": 231,
    "category": "综合知识",
    "question": "中国工农红军长征开始于哪一年？",
    "options": [
      "1931年",
      "1934年",
      "1937年",
      "1945年"
    ],
    "answer": 1
  },
  {
    "id": 232,
    "category": "动物世界",
    "question": "鸟类中谁不会飞？",
    "options": [
      "企鹅和鸵鸟",
      "所有鸟都会飞",
      "只有企鹅",
      "只有鸡"
    ],
    "answer": 0
  },
  {
    "id": 233,
    "category": "数学思维",
    "question": "37 + 7 = ?",
    "options": [
      "46",
      "44",
      "45",
      "43"
    ],
    "answer": 1
  },
  {
    "id": 234,
    "category": "生活常识",
    "question": "为什么运动后会出汗？",
    "options": [
      "因为太累",
      "身体在散热",
      "在排水",
      "在排毒"
    ],
    "answer": 1
  },
  {
    "id": 235,
    "category": "数学思维",
    "question": "5 × 3 = ?",
    "options": [
      "16",
      "17",
      "14",
      "15"
    ],
    "answer": 3
  },
  {
    "id": 236,
    "category": "综合知识",
    "question": "预防近视最重要的是？",
    "options": [
      "多看电视",
      "注意用眼卫生和户外活动",
      "多玩手机",
      "熬夜看书"
    ],
    "answer": 1
  },
  {
    "id": 237,
    "category": "数学思维",
    "question": "一根绳子对折3次后，每段是原来的？",
    "options": [
      "1/3",
      "1/6",
      "1/8",
      "1/12"
    ],
    "answer": 2
  },
  {
    "id": 238,
    "category": "数学思维",
    "question": "6 × 4 = ?",
    "options": [
      "25",
      "24",
      "23",
      "26"
    ],
    "answer": 1
  },
  {
    "id": 239,
    "category": "自然科学",
    "question": "企鹅生活在哪个极？",
    "options": [
      "北极",
      "南极",
      "赤道",
      "温带"
    ],
    "answer": 1
  },
  {
    "id": 240,
    "category": "自然科学",
    "question": "人体最大的内脏器官是？",
    "options": [
      "心脏",
      "肝脏",
      "肺",
      "胃"
    ],
    "answer": 1
  },
  {
    "id": 241,
    "category": "综合知识",
    "question": "人类的血液是什么颜色的？",
    "options": [
      "红色",
      "蓝色",
      "绿色",
      "黄色"
    ],
    "answer": 0
  },
  {
    "id": 242,
    "category": "生活常识",
    "question": "油锅起火，应该如何灭火？",
    "options": [
      "用水浇",
      "盖上锅盖",
      "用嘴吹",
      "倒油进去"
    ],
    "answer": 1
  },
  {
    "id": 243,
    "category": "综合知识",
    "question": "\"白日依山尽\"的下一句是？",
    "options": [
      "更上一层楼",
      "黄河入海流",
      "欲穷千里目",
      "春风吹又生"
    ],
    "answer": 1
  },
  {
    "id": 244,
    "category": "综合知识",
    "question": "北京奥运会是哪一年？",
    "options": [
      "2004年",
      "2006年",
      "2008年",
      "2010年"
    ],
    "answer": 2
  },
  {
    "id": 245,
    "category": "综合知识",
    "question": "1米等于多少分米？",
    "options": [
      "10分米",
      "100分米",
      "1000分米",
      "5分米"
    ],
    "answer": 0
  },
  {
    "id": 246,
    "category": "历史人文",
    "question": "中国历史上唯一的女皇帝是？",
    "options": [
      "慈禧",
      "武则天",
      "吕后",
      "萧太后"
    ],
    "answer": 1
  },
  {
    "id": 247,
    "category": "综合知识",
    "question": "青蛙的舌头有什么特点？",
    "options": [
      "很长",
      "有粘性，弹射捕食",
      "分叉",
      "有毒"
    ],
    "answer": 1
  },
  {
    "id": 248,
    "category": "综合知识",
    "question": "大象的鼻子有几万块肌肉？",
    "options": [
      "约1万块",
      "约4万块",
      "约10万块",
      "约50万块"
    ],
    "answer": 1
  },
  {
    "id": 249,
    "category": "综合知识",
    "question": "人体正常体温约是多少？",
    "options": [
      "36°C",
      "37°C",
      "38°C",
      "39°C"
    ],
    "answer": 1
  },
  {
    "id": 250,
    "category": "数学思维",
    "question": "长方形的周长公式是什么？",
    "options": [
      "长+宽",
      "长×宽",
      "(长+宽)×2",
      "长×宽÷2"
    ],
    "answer": 2
  },
  {
    "id": 251,
    "category": "综合知识",
    "question": "香港回归中国是哪一年？",
    "options": [
      "1995年",
      "1997年",
      "1999年",
      "2001年"
    ],
    "answer": 1
  },
  {
    "id": 252,
    "category": "历史人文",
    "question": "端午节是为了纪念谁？",
    "options": [
      "李白",
      "孔子",
      "屈原",
      "岳飞"
    ],
    "answer": 2
  },
  {
    "id": 253,
    "category": "天气气象",
    "question": "彩虹通常出现在什么时候？",
    "options": [
      "暴雨前",
      "雨后天晴",
      "阴天",
      "沙尘暴后"
    ],
    "answer": 1
  },
  {
    "id": 254,
    "category": "综合知识",
    "question": "中国国庆节是哪一天？",
    "options": [
      "9月10日",
      "10月1日",
      "8月1日",
      "7月1日"
    ],
    "answer": 1
  },
  {
    "id": 255,
    "category": "历史人文",
    "question": "中国第一个统一的封建王朝是？",
    "options": [
      "夏朝",
      "商朝",
      "秦朝",
      "汉朝"
    ],
    "answer": 2
  },
  {
    "id": 256,
    "category": "数学思维",
    "question": "62 + 9 = ?",
    "options": [
      "72",
      "70",
      "73",
      "71"
    ],
    "answer": 3
  },
  {
    "id": 257,
    "category": "综合知识",
    "question": "保暖瓶能保温的原理是？",
    "options": [
      "有电热丝",
      "真空隔热",
      "有魔法",
      "很厚"
    ],
    "answer": 1
  },
  {
    "id": 258,
    "category": "综合知识",
    "question": "盐是从哪里来的？",
    "options": [
      "天上掉下来的",
      "海水蒸发或矿盐开采",
      "地里长的",
      "人工合成"
    ],
    "answer": 1
  },
  {
    "id": 259,
    "category": "自然科学",
    "question": "为什么热水会冒气？",
    "options": [
      "水沸腾蒸发",
      "水在燃烧",
      "有魔法",
      "水变干净了"
    ],
    "answer": 0
  },
  {
    "id": 260,
    "category": "数学思维",
    "question": "22 + 1 = ?",
    "options": [
      "24",
      "22",
      "25",
      "23"
    ],
    "answer": 3
  },
  {
    "id": 261,
    "category": "动物世界",
    "question": "蜜蜂是怎么告诉同伴哪里有花蜜的？",
    "options": [
      "叫喊",
      "跳舞",
      "释放气味",
      "画路线图"
    ],
    "answer": 1
  },
  {
    "id": 262,
    "category": "动物世界",
    "question": "哪种鱼可以放电？",
    "options": [
      "金鱼",
      "电鳗",
      "鲨鱼",
      "鲤鱼"
    ],
    "answer": 1
  },
  {
    "id": 263,
    "category": "自然科学",
    "question": "蜗牛是动物中什么最多的？",
    "options": [
      "腿最多",
      "牙齿最多",
      "眼睛最多",
      "触角最多"
    ],
    "answer": 1
  },
  {
    "id": 264,
    "category": "数学思维",
    "question": "2 × 4 = ?",
    "options": [
      "7",
      "10",
      "9",
      "8"
    ],
    "answer": 3
  },
  {
    "id": 265,
    "category": "数学思维",
    "question": "13 + 1 = ?",
    "options": [
      "16",
      "14",
      "13",
      "15"
    ],
    "answer": 1
  },
  {
    "id": 266,
    "category": "数学思维",
    "question": "54 + 3 = ?",
    "options": [
      "57",
      "56",
      "59",
      "58"
    ],
    "answer": 0
  },
  {
    "id": 267,
    "category": "数学思维",
    "question": "9 × 6 = ?",
    "options": [
      "54",
      "56",
      "55",
      "53"
    ],
    "answer": 0
  },
  {
    "id": 268,
    "category": "数学思维",
    "question": "人民币最大的面额是？",
    "options": [
      "50元",
      "100元",
      "500元",
      "1000元"
    ],
    "answer": 1
  },
  {
    "id": 269,
    "category": "生活常识",
    "question": "报警电话是多少？",
    "options": [
      "110",
      "119",
      "120",
      "122"
    ],
    "answer": 0
  },
  {
    "id": 270,
    "category": "安全教育",
    "question": "哪种食物吃了可能中毒？",
    "options": [
      "新鲜的苹果",
      "发芽的土豆",
      "新鲜的白菜",
      "煮熟的米饭"
    ],
    "answer": 1
  },
  {
    "id": 271,
    "category": "综合知识",
    "question": "声音在什么介质中最快？",
    "options": [
      "空气",
      "水",
      "固体(如钢铁)",
      "真空"
    ],
    "answer": 2
  },
  {
    "id": 272,
    "category": "生活常识",
    "question": "哪种维生素能促进钙吸收？",
    "options": [
      "维生素A",
      "维生素B",
      "维生素C",
      "维生素D"
    ],
    "answer": 3
  },
  {
    "id": 273,
    "category": "自然科学",
    "question": "苍蝇有几只眼睛？",
    "options": [
      "2只",
      "5只(2只大的+3只小的)",
      "8只",
      "100只"
    ],
    "answer": 1
  },
  {
    "id": 274,
    "category": "数学思维",
    "question": "52 + 3 = ?",
    "options": [
      "56",
      "54",
      "55",
      "57"
    ],
    "answer": 2
  },
  {
    "id": 275,
    "category": "数学思维",
    "question": "23 + 7 = ?",
    "options": [
      "29",
      "31",
      "30",
      "32"
    ],
    "answer": 2
  },
  {
    "id": 276,
    "category": "数学思维",
    "question": "77 + 1 = ?",
    "options": [
      "78",
      "80",
      "79",
      "77"
    ],
    "answer": 0
  },
  {
    "id": 277,
    "category": "综合知识",
    "question": "100分等于多少元？",
    "options": [
      "10元",
      "1元",
      "0.1元",
      "100元"
    ],
    "answer": 1
  },
  {
    "id": 278,
    "category": "自然科学",
    "question": "人体有多少块骨头？",
    "options": [
      "106块",
      "206块",
      "306块",
      "406块"
    ],
    "answer": 1
  },
  {
    "id": 279,
    "category": "综合知识",
    "question": "公历闰年2月有多少天？",
    "options": [
      "28天",
      "29天",
      "30天",
      "31天"
    ],
    "answer": 1
  },
  {
    "id": 280,
    "category": "天文宇宙",
    "question": "火星为什么是红色的？",
    "options": [
      "有火在烧",
      "含氧化铁(铁锈)",
      "被太阳晒红",
      "表面是红土"
    ],
    "answer": 1
  },
  {
    "id": 281,
    "category": "天文宇宙",
    "question": "太阳的寿命大约还有多少亿年？",
    "options": [
      "10亿年",
      "50亿年",
      "100亿年",
      "500亿年"
    ],
    "answer": 1
  },
  {
    "id": 282,
    "category": "综合知识",
    "question": "世界环境日是？",
    "options": [
      "3月12日",
      "4月22日",
      "6月5日",
      "9月10日"
    ],
    "answer": 2
  },
  {
    "id": 283,
    "category": "自然科学",
    "question": "鸵鸟蛋有多大？",
    "options": [
      "鸡蛋大小",
      "鸭蛋大小",
      "约1.5公斤",
      "约5公斤"
    ],
    "answer": 2
  },
  {
    "id": 284,
    "category": "生活常识",
    "question": "吃哪些食物可以预防坏血病？",
    "options": [
      "肉类",
      "蔬菜水果",
      "米饭",
      "豆制品"
    ],
    "answer": 1
  },
  {
    "id": 285,
    "category": "综合知识",
    "question": "为什么太阳从东边升西边落？",
    "options": [
      "太阳在移动",
      "地球自转",
      "地球公转",
      "云在移动"
    ],
    "answer": 1
  },
  {
    "id": 286,
    "category": "动物世界",
    "question": "什么鸟不会飞？",
    "options": [
      "麻雀",
      "老鹰",
      "鸵鸟",
      "燕子"
    ],
    "answer": 2
  },
  {
    "id": 287,
    "category": "数学思维",
    "question": "8 × 9 = ?",
    "options": [
      "73",
      "72",
      "74",
      "71"
    ],
    "answer": 1
  },
  {
    "id": 288,
    "category": "数学思维",
    "question": "50 + 1 = ?",
    "options": [
      "51",
      "53",
      "52",
      "50"
    ],
    "answer": 0
  },
  {
    "id": 289,
    "category": "数学思维",
    "question": "7 × 9 = ?",
    "options": [
      "62",
      "63",
      "64",
      "65"
    ],
    "answer": 1
  },
  {
    "id": 290,
    "category": "数学思维",
    "question": "长方体的面都是什么形状？",
    "options": [
      "三角形",
      "正方形",
      "长方形",
      "圆形"
    ],
    "answer": 2
  },
  {
    "id": 291,
    "category": "数学思维",
    "question": "77 + 5 = ?",
    "options": [
      "82",
      "81",
      "83",
      "84"
    ],
    "answer": 0
  },
  {
    "id": 292,
    "category": "历史人文",
    "question": "丝绸之路起点在中国的哪个城市？",
    "options": [
      "北京",
      "洛阳",
      "西安",
      "南京"
    ],
    "answer": 2
  },
  {
    "id": 293,
    "category": "数学思维",
    "question": "9 × 5 = ?",
    "options": [
      "46",
      "47",
      "45",
      "44"
    ],
    "answer": 2
  },
  {
    "id": 294,
    "category": "天气气象",
    "question": "24节气中表示降雪的是？",
    "options": [
      "霜降",
      "小雪和大雪",
      "寒露",
      "白露"
    ],
    "answer": 1
  },
  {
    "id": 295,
    "category": "综合知识",
    "question": "1元等于多少角？",
    "options": [
      "5角",
      "10角",
      "100角",
      "20角"
    ],
    "answer": 1
  },
  {
    "id": 296,
    "category": "数学思维",
    "question": "61 + 6 = ?",
    "options": [
      "68",
      "66",
      "69",
      "67"
    ],
    "answer": 3
  },
  {
    "id": 297,
    "category": "数学思维",
    "question": "最小的质数是？",
    "options": [
      "1",
      "2",
      "3",
      "0"
    ],
    "answer": 1
  },
  {
    "id": 298,
    "category": "动物世界",
    "question": "海豚是怎样睡觉的？",
    "options": [
      "潜入深海",
      "一半大脑睡觉另一半清醒",
      "躺在海底",
      "浮在水面"
    ],
    "answer": 1
  },
  {
    "id": 299,
    "category": "数学思维",
    "question": "37 + 4 = ?",
    "options": [
      "42",
      "43",
      "40",
      "41"
    ],
    "answer": 3
  },
  {
    "id": 300,
    "category": "数学思维",
    "question": "7 × 3 = ?",
    "options": [
      "22",
      "20",
      "23",
      "21"
    ],
    "answer": 3
  },
  {
    "id": 301,
    "category": "综合知识",
    "question": "电脑的\"大脑\"是什么？",
    "options": [
      "显示器",
      "键盘",
      "CPU(中央处理器)",
      "鼠标"
    ],
    "answer": 2
  },
  {
    "id": 302,
    "category": "综合知识",
    "question": "0除以任何非零的数等于？",
    "options": [
      "那个数本身",
      "0",
      "1",
      "无限大"
    ],
    "answer": 1
  },
  {
    "id": 303,
    "category": "数学思维",
    "question": "4 × 3 = ?",
    "options": [
      "11",
      "14",
      "12",
      "13"
    ],
    "answer": 2
  },
  {
    "id": 304,
    "category": "地理知识",
    "question": "中国最长的运河是？",
    "options": [
      "灵渠",
      "京杭大运河",
      "都江堰",
      "郑国渠"
    ],
    "answer": 1
  },
  {
    "id": 305,
    "category": "数学思维",
    "question": "三角形的内角和是多少度？",
    "options": [
      "90",
      "180",
      "270",
      "360"
    ],
    "answer": 1
  },
  {
    "id": 306,
    "category": "自然科学",
    "question": "一滴水中有多少微生物？",
    "options": [
      "几乎没有",
      "可能有数百万",
      "只有几个",
      "没有"
    ],
    "answer": 1
  },
  {
    "id": 307,
    "category": "地理知识",
    "question": "世界上海拔最低的湖泊是？",
    "options": [
      "贝加尔湖",
      "死海",
      "里海",
      "青海湖"
    ],
    "answer": 1
  },
  {
    "id": 308,
    "category": "植物王国",
    "question": "黄瓜是水果还是蔬菜？",
    "options": [
      "水果",
      "蔬菜",
      "既是水果也是蔬菜",
      "都不是"
    ],
    "answer": 1
  },
  {
    "id": 309,
    "category": "数学思维",
    "question": "60 + 9 = ?",
    "options": [
      "71",
      "68",
      "70",
      "69"
    ],
    "answer": 3
  },
  {
    "id": 310,
    "category": "综合知识",
    "question": "素数的定义是？",
    "options": [
      "大于1且只有1和自己两个因数的自然数",
      "可以被2整除的数",
      "奇数",
      "质因数"
    ],
    "answer": 0
  },
  {
    "id": 311,
    "category": "数学思维",
    "question": "9 × 7 = ?",
    "options": [
      "63",
      "65",
      "64",
      "62"
    ],
    "answer": 0
  },
  {
    "id": 312,
    "category": "自然科学",
    "question": "为什么叶子是绿色的？",
    "options": [
      "含有叶绿素",
      "含有叶黄素",
      "反射绿光",
      "吸收了绿色"
    ],
    "answer": 0
  },
  {
    "id": 313,
    "category": "综合知识",
    "question": "玻璃是用什么做的？",
    "options": [
      "沙子",
      "塑料",
      "木头",
      "金属"
    ],
    "answer": 0
  },
  {
    "id": 314,
    "category": "历史人文",
    "question": "中国古代四大美女不包括？",
    "options": [
      "西施",
      "王昭君",
      "貂蝉",
      "赵飞燕"
    ],
    "answer": 3
  },
  {
    "id": 315,
    "category": "地理知识",
    "question": "四大洋中面积最小的是？",
    "options": [
      "北冰洋",
      "印度洋",
      "大西洋",
      "太平洋"
    ],
    "answer": 0
  },
  {
    "id": 316,
    "category": "数学思维",
    "question": "一年有多少个季度？",
    "options": [
      "2个",
      "3个",
      "4个",
      "5个"
    ],
    "answer": 2
  },
  {
    "id": 317,
    "category": "数学思维",
    "question": "33 + 4 = ?",
    "options": [
      "36",
      "38",
      "37",
      "39"
    ],
    "answer": 2
  },
  {
    "id": 318,
    "category": "植物王国",
    "question": "荷花出淤泥而不染是因为？",
    "options": [
      "表面有蜡质",
      "水冲干净了",
      "花瓣特殊",
      "经常清洗"
    ],
    "answer": 0
  },
  {
    "id": 319,
    "category": "综合知识",
    "question": "中国的国球是什么？",
    "options": [
      "足球",
      "篮球",
      "乒乓球",
      "羽毛球"
    ],
    "answer": 2
  },
  {
    "id": 320,
    "category": "数学思维",
    "question": "1 + 5 = ?",
    "options": [
      "7",
      "8",
      "5",
      "6"
    ],
    "answer": 3
  },
  {
    "id": 321,
    "category": "数学思维",
    "question": "整数中最小的数是？",
    "options": [
      "-1",
      "0",
      "没有最小的",
      "1"
    ],
    "answer": 2
  },
  {
    "id": 322,
    "category": "数学思维",
    "question": "25 + 4 = ?",
    "options": [
      "31",
      "29",
      "30",
      "28"
    ],
    "answer": 1
  },
  {
    "id": 323,
    "category": "天气气象",
    "question": "为什么冬天下雪不冷化雪冷？",
    "options": [
      "雪在融化时吸热",
      "太阳被遮住了",
      "刮风了",
      "心理作用"
    ],
    "answer": 0
  },
  {
    "id": 324,
    "category": "自然科学",
    "question": "含羞草的叶子为什么一碰就合拢？",
    "options": [
      "因为怕人",
      "因为缺水",
      "细胞失水",
      "因为害羞"
    ],
    "answer": 2
  },
  {
    "id": 325,
    "category": "动物世界",
    "question": "蚊子叮人是为了什么？",
    "options": [
      "好玩",
      "吸血产卵",
      "报仇",
      "传递信息"
    ],
    "answer": 1
  },
  {
    "id": 326,
    "category": "自然科学",
    "question": "北极熊的皮肤是什么颜色的？",
    "options": [
      "白色",
      "黑色",
      "粉色",
      "灰色"
    ],
    "answer": 1
  },
  {
    "id": 327,
    "category": "数学思维",
    "question": "26 + 8 = ?",
    "options": [
      "35",
      "33",
      "34",
      "36"
    ],
    "answer": 2
  },
  {
    "id": 328,
    "category": "地理知识",
    "question": "中国最大的淡水湖是？",
    "options": [
      "洞庭湖",
      "鄱阳湖",
      "太湖",
      "青海湖"
    ],
    "answer": 1
  },
  {
    "id": 329,
    "category": "综合知识",
    "question": "算盘是中国古代的计算工具",
    "options": [
      "正确",
      "错误"
    ],
    "answer": 0
  },
  {
    "id": 330,
    "category": "自然科学",
    "question": "向日葵白天随太阳转动，晚上呢？",
    "options": [
      "不动",
      "慢慢转回东方",
      "转向月亮",
      "随机转"
    ],
    "answer": 1
  },
  {
    "id": 331,
    "category": "数学思维",
    "question": "92 + 1 = ?",
    "options": [
      "93",
      "92",
      "95",
      "94"
    ],
    "answer": 0
  },
  {
    "id": 332,
    "category": "天文宇宙",
    "question": "国际空间站在哪个轨道上？",
    "options": [
      "地球同步轨道",
      "近地轨道",
      "月球轨道",
      "太阳轨道"
    ],
    "answer": 1
  },
  {
    "id": 333,
    "category": "综合知识",
    "question": "3的4倍是多少？",
    "options": [
      "7",
      "12",
      "15",
      "10"
    ],
    "answer": 1
  },
  {
    "id": 334,
    "category": "生活常识",
    "question": "什么样的坐姿是正确的？",
    "options": [
      "弯腰驼背",
      "端正挺直",
      "翘二郎腿",
      "趴着"
    ],
    "answer": 1
  },
  {
    "id": 335,
    "category": "数学思维",
    "question": "4 × 9 = ?",
    "options": [
      "38",
      "37",
      "36",
      "35"
    ],
    "answer": 2
  },
  {
    "id": 336,
    "category": "数学思维",
    "question": "88 + 1 = ?",
    "options": [
      "88",
      "90",
      "91",
      "89"
    ],
    "answer": 3
  },
  {
    "id": 337,
    "category": "综合知识",
    "question": "《弟子规》的核心思想来源是？",
    "options": [
      "道家",
      "儒家",
      "法家",
      "墨家"
    ],
    "answer": 1
  },
  {
    "id": 338,
    "category": "综合知识",
    "question": "纸是用什么做的？",
    "options": [
      "塑料",
      "木材等植物纤维",
      "石头",
      "沙子"
    ],
    "answer": 1
  },
  {
    "id": 339,
    "category": "数学思维",
    "question": "35 + 2 = ?",
    "options": [
      "39",
      "37",
      "38",
      "36"
    ],
    "answer": 1
  },
  {
    "id": 340,
    "category": "地理知识",
    "question": "中国最大的岛屿是？",
    "options": [
      "海南岛",
      "台湾岛",
      "崇明岛",
      "舟山群岛"
    ],
    "answer": 1
  },
  {
    "id": 341,
    "category": "数学思维",
    "question": "闰年一年有多少天？",
    "options": [
      "364天",
      "365天",
      "366天",
      "367天"
    ],
    "answer": 2
  },
  {
    "id": 342,
    "category": "地理知识",
    "question": "地中海位于哪些大洲之间？",
    "options": [
      "亚洲和非洲",
      "欧洲和非洲",
      "欧洲和亚洲",
      "非洲和美洲"
    ],
    "answer": 1
  },
  {
    "id": 343,
    "category": "数学思维",
    "question": "84 + 5 = ?",
    "options": [
      "88",
      "90",
      "89",
      "91"
    ],
    "answer": 2
  },
  {
    "id": 344,
    "category": "数学思维",
    "question": "一只鸡有2条腿，5只鸡有多少条腿？",
    "options": [
      "5条",
      "10条",
      "15条",
      "20条"
    ],
    "answer": 1
  },
  {
    "id": 345,
    "category": "天文宇宙",
    "question": "太阳系中离太阳最近的行星是？",
    "options": [
      "金星",
      "水星",
      "地球",
      "火星"
    ],
    "answer": 1
  },
  {
    "id": 346,
    "category": "综合知识",
    "question": "2的10次方等于？",
    "options": [
      "256",
      "512",
      "1024",
      "2048"
    ],
    "answer": 2
  },
  {
    "id": 347,
    "category": "自然科学",
    "question": "最大的哺乳动物是什么？",
    "options": [
      "大象",
      "蓝鲸",
      "长颈鹿",
      "犀牛"
    ],
    "answer": 1
  },
  {
    "id": 348,
    "category": "动物世界",
    "question": "章鱼有几只脚？",
    "options": [
      "6只",
      "8只",
      "10只",
      "12只"
    ],
    "answer": 1
  },
  {
    "id": 349,
    "category": "数学思维",
    "question": "7 × 5 = ?",
    "options": [
      "34",
      "36",
      "37",
      "35"
    ],
    "answer": 3
  },
  {
    "id": 350,
    "category": "生活常识",
    "question": "哪种行为是不安全的？",
    "options": [
      "靠右行走",
      "在马路上玩耍",
      "走斑马线",
      "看红绿灯"
    ],
    "answer": 1
  },
  {
    "id": 351,
    "category": "综合知识",
    "question": "个位和十位相同的两位数有几个？",
    "options": [
      "8个",
      "9个",
      "10个",
      "11个"
    ],
    "answer": 1
  },
  {
    "id": 352,
    "category": "综合知识",
    "question": "奥运会的发源地是？",
    "options": [
      "中国",
      "美国",
      "希腊",
      "英国"
    ],
    "answer": 2
  },
  {
    "id": 353,
    "category": "历史人文",
    "question": "造纸术是中国古代四大发明之一，它的发明者是？",
    "options": [
      "张衡",
      "蔡伦",
      "毕昇",
      "沈括"
    ],
    "answer": 1
  },
  {
    "id": 354,
    "category": "数学思维",
    "question": "57 + 1 = ?",
    "options": [
      "60",
      "57",
      "58",
      "59"
    ],
    "answer": 2
  },
  {
    "id": 355,
    "category": "数学思维",
    "question": "31 + 9 = ?",
    "options": [
      "40",
      "42",
      "39",
      "41"
    ],
    "answer": 0
  },
  {
    "id": 356,
    "category": "数学思维",
    "question": "69 + 7 = ?",
    "options": [
      "78",
      "75",
      "77",
      "76"
    ],
    "answer": 3
  },
  {
    "id": 357,
    "category": "综合知识",
    "question": "1公里等于多少米？",
    "options": [
      "100米",
      "500米",
      "1000米",
      "2000米"
    ],
    "answer": 2
  },
  {
    "id": 358,
    "category": "动物世界",
    "question": "螃蟹是横着走还是直着走？",
    "options": [
      "横着走",
      "直着走",
      "有时横有时直",
      "向后走"
    ],
    "answer": 0
  },
  {
    "id": 359,
    "category": "历史人文",
    "question": "《孙子兵法》的作者是？",
    "options": [
      "孙膑",
      "孙权",
      "孙武",
      "孙策"
    ],
    "answer": 2
  },
  {
    "id": 360,
    "category": "数学思维",
    "question": "3 × 8 = ?",
    "options": [
      "26",
      "25",
      "23",
      "24"
    ],
    "answer": 3
  },
  {
    "id": 361,
    "category": "综合知识",
    "question": "π(圆周率)约等于？",
    "options": [
      "2.14",
      "3.14",
      "4.14",
      "1.14"
    ],
    "answer": 1
  },
  {
    "id": 362,
    "category": "安全教育",
    "question": "乘坐电梯时，电梯突然停止应该？",
    "options": [
      "扒开电梯门",
      "按求救按钮等待救援",
      "跳起来",
      "用力撞门"
    ],
    "answer": 1
  },
  {
    "id": 363,
    "category": "天文宇宙",
    "question": "中国第一个进入太空的航天员是？",
    "options": [
      "翟志刚",
      "杨利伟",
      "刘洋",
      "景海鹏"
    ],
    "answer": 1
  },
  {
    "id": 364,
    "category": "历史人文",
    "question": "活字印刷术是谁发明的？",
    "options": [
      "蔡伦",
      "毕昇",
      "张衡",
      "沈括"
    ],
    "answer": 1
  },
  {
    "id": 365,
    "category": "数学思维",
    "question": "40 + 4 = ?",
    "options": [
      "46",
      "44",
      "43",
      "45"
    ],
    "answer": 1
  },
  {
    "id": 366,
    "category": "综合知识",
    "question": "黄瓜的原产地是？",
    "options": [
      "中国",
      "印度",
      "埃及",
      "美洲"
    ],
    "answer": 1
  },
  {
    "id": 367,
    "category": "综合知识",
    "question": "一个因数是8另一个因数是7积是多少？",
    "options": [
      "15",
      "49",
      "56",
      "64"
    ],
    "answer": 2
  },
  {
    "id": 368,
    "category": "数学思维",
    "question": "19 + 8 = ?",
    "options": [
      "27",
      "28",
      "26",
      "29"
    ],
    "answer": 0
  },
  {
    "id": 369,
    "category": "地理知识",
    "question": "中国最北的城市是？",
    "options": [
      "哈尔滨",
      "漠河",
      "黑河",
      "齐齐哈尔"
    ],
    "answer": 1
  },
  {
    "id": 370,
    "category": "数学思维",
    "question": "11 + 1 = ?",
    "options": [
      "14",
      "11",
      "13",
      "12"
    ],
    "answer": 3
  },
  {
    "id": 371,
    "category": "天气气象",
    "question": "雾是怎样形成的？",
    "options": [
      "水蒸气凝结",
      "烟尘聚集",
      "风吹尘土",
      "花粉扩散"
    ],
    "answer": 0
  },
  {
    "id": 372,
    "category": "植物王国",
    "question": "花生是结在地下的果实吗？",
    "options": [
      "是的",
      "不是",
      "有时是",
      "不确定"
    ],
    "answer": 0
  },
  {
    "id": 373,
    "category": "综合知识",
    "question": "松鼠的尾巴有什么作用？",
    "options": [
      "装饰",
      "保持平衡和保暖",
      "吓唬敌人",
      "没用"
    ],
    "answer": 1
  },
  {
    "id": 374,
    "category": "综合知识",
    "question": "流感流行期间应该？",
    "options": [
      "不洗手",
      "戴口罩勤洗手",
      "去人多地方",
      "不通风"
    ],
    "answer": 1
  },
  {
    "id": 375,
    "category": "综合知识",
    "question": "羽毛球是用什么做的？",
    "options": [
      "塑料",
      "羽毛和软木",
      "金属",
      "橡胶"
    ],
    "answer": 1
  },
  {
    "id": 376,
    "category": "综合知识",
    "question": "一带一路\"一带\"指的是？",
    "options": [
      "海上丝绸之路",
      "丝绸之路经济带",
      "长江经济带",
      "沿海经济带"
    ],
    "answer": 1
  },
  {
    "id": 377,
    "category": "综合知识",
    "question": "世界卫生组织的简称是？",
    "options": [
      "WTO",
      "WHO",
      "UNESCO",
      "NASA"
    ],
    "answer": 1
  },
  {
    "id": 378,
    "category": "综合知识",
    "question": "乌贼怎么防御敌人？",
    "options": [
      "用刺扎",
      "喷墨汁",
      "装死",
      "咬人"
    ],
    "answer": 1
  },
  {
    "id": 379,
    "category": "综合知识",
    "question": "5G的G是什么意思？",
    "options": [
      "重力",
      "代(Generation)",
      "游戏",
      "高铁"
    ],
    "answer": 1
  },
  {
    "id": 380,
    "category": "数学思维",
    "question": "一个两位数，十位是1，个位是最大的一位数，这个数是？",
    "options": [
      "10",
      "19",
      "91",
      "99"
    ],
    "answer": 1
  },
  {
    "id": 381,
    "category": "综合知识",
    "question": "一周有几天？",
    "options": [
      "5天",
      "6天",
      "7天",
      "8天"
    ],
    "answer": 2
  },
  {
    "id": 382,
    "category": "植物王国",
    "question": "为什么秋天的树叶会变黄？",
    "options": [
      "缺水",
      "叶绿素分解",
      "霜打",
      "风太大"
    ],
    "answer": 1
  },
  {
    "id": 383,
    "category": "天气气象",
    "question": "寒潮一般发生在什么季节？",
    "options": [
      "春季",
      "夏季",
      "秋冬",
      "四季皆可"
    ],
    "answer": 2
  },
  {
    "id": 384,
    "category": "植物王国",
    "question": "树木的年轮可以告诉我们什么？",
    "options": [
      "树有多高",
      "树的年龄",
      "树的种类",
      "树有多少叶子"
    ],
    "answer": 1
  },
  {
    "id": 385,
    "category": "生活常识",
    "question": "酸奶应该在什么温度下保存？",
    "options": [
      "常温",
      "冷藏(2-6°C)",
      "冷冻",
      "加热"
    ],
    "answer": 1
  },
  {
    "id": 386,
    "category": "自然科学",
    "question": "蜘蛛是昆虫吗？",
    "options": [
      "是",
      "不是",
      "有些是",
      "不确定"
    ],
    "answer": 1
  },
  {
    "id": 387,
    "category": "数学思维",
    "question": "4 × 5 = ?",
    "options": [
      "19",
      "22",
      "20",
      "21"
    ],
    "answer": 2
  },
  {
    "id": 388,
    "category": "数学思维",
    "question": "7 × 6 = ?",
    "options": [
      "42",
      "43",
      "44",
      "41"
    ],
    "answer": 0
  },
  {
    "id": 389,
    "category": "数学思维",
    "question": "19 + 3 = ?",
    "options": [
      "24",
      "22",
      "21",
      "23"
    ],
    "answer": 1
  },
  {
    "id": 390,
    "category": "数学思维",
    "question": "6 × 9 = ?",
    "options": [
      "56",
      "53",
      "54",
      "55"
    ],
    "answer": 2
  },
  {
    "id": 391,
    "category": "数学思维",
    "question": "61 + 3 = ?",
    "options": [
      "63",
      "66",
      "64",
      "65"
    ],
    "answer": 2
  },
  {
    "id": 392,
    "category": "数学思维",
    "question": "8 × 6 = ?",
    "options": [
      "48",
      "49",
      "47",
      "50"
    ],
    "answer": 0
  },
  {
    "id": 393,
    "category": "综合知识",
    "question": "长颈鹿的脖子有几根骨头？",
    "options": [
      "5根",
      "7根",
      "10根",
      "15根"
    ],
    "answer": 1
  },
  {
    "id": 394,
    "category": "历史人文",
    "question": "中国古代科举制度开始于哪个朝代？",
    "options": [
      "汉朝",
      "隋朝",
      "唐朝",
      "宋朝"
    ],
    "answer": 1
  },
  {
    "id": 395,
    "category": "综合知识",
    "question": "第一届现代奥运会是哪一年？",
    "options": [
      "1896年",
      "1900年",
      "1904年",
      "1908年"
    ],
    "answer": 0
  },
  {
    "id": 396,
    "category": "综合知识",
    "question": "U盘是用来干什么的？",
    "options": [
      "玩游戏",
      "存储数据",
      "打电话",
      "看电视"
    ],
    "answer": 1
  },
  {
    "id": 397,
    "category": "综合知识",
    "question": "银杏树被称为？",
    "options": [
      "不老树",
      "活化石",
      "千年松",
      "万年柏"
    ],
    "answer": 1
  },
  {
    "id": 398,
    "category": "数学思维",
    "question": "30 + 7 = ?",
    "options": [
      "38",
      "37",
      "36",
      "39"
    ],
    "answer": 1
  },
  {
    "id": 399,
    "category": "天文宇宙",
    "question": "太阳占太阳系总质量的多少？",
    "options": [
      "约50%",
      "约70%",
      "约90%",
      "约99.8%"
    ],
    "answer": 3
  },
  {
    "id": 400,
    "category": "数学思维",
    "question": "6 × 2 = ?",
    "options": [
      "13",
      "14",
      "12",
      "11"
    ],
    "answer": 2
  },
  {
    "id": 401,
    "category": "综合知识",
    "question": "光年是什么的单位？",
    "options": [
      "时间",
      "距离/长度",
      "速度",
      "质量"
    ],
    "answer": 1
  },
  {
    "id": 402,
    "category": "数学思维",
    "question": "1+2+3+...+10等于多少？",
    "options": [
      "45",
      "55",
      "65",
      "75"
    ],
    "answer": 1
  },
  {
    "id": 403,
    "category": "自然科学",
    "question": "人为什么会打哈欠？",
    "options": [
      "困了或大脑缺氧",
      "饿了",
      "渴了",
      "无聊"
    ],
    "answer": 0
  },
  {
    "id": 404,
    "category": "自然科学",
    "question": "闪电和打雷是同时发生的吗？",
    "options": [
      "是先打雷后闪电",
      "是先闪电后打雷",
      "同时发生",
      "不一定"
    ],
    "answer": 2
  },
  {
    "id": 405,
    "category": "综合知识",
    "question": "珊瑚是动物还是植物？",
    "options": [
      "动物",
      "植物",
      "既是动物也是植物",
      "石头"
    ],
    "answer": 0
  },
  {
    "id": 406,
    "category": "综合知识",
    "question": "饺子是哪个国家的传统食品？",
    "options": [
      "日本",
      "中国",
      "韩国",
      "越南"
    ],
    "answer": 1
  },
  {
    "id": 407,
    "category": "综合知识",
    "question": "1千克等于多少克？",
    "options": [
      "10克",
      "100克",
      "1000克",
      "10000克"
    ],
    "answer": 2
  },
  {
    "id": 408,
    "category": "数学思维",
    "question": "5 + 9 = ?",
    "options": [
      "14",
      "15",
      "16",
      "13"
    ],
    "answer": 0
  },
  {
    "id": 409,
    "category": "综合知识",
    "question": "马拉松全程约多少公里？",
    "options": [
      "21公里",
      "42.195公里",
      "50公里",
      "100公里"
    ],
    "answer": 1
  },
  {
    "id": 410,
    "category": "综合知识",
    "question": "鲸鱼是鱼吗？",
    "options": [
      "是",
      "不是，是哺乳动物",
      "有时候是",
      "小时候是"
    ],
    "answer": 1
  },
  {
    "id": 411,
    "category": "数学思维",
    "question": "69 + 2 = ?",
    "options": [
      "73",
      "72",
      "71",
      "70"
    ],
    "answer": 2
  },
  {
    "id": 412,
    "category": "历史人文",
    "question": "万里长城主要是哪个朝代修建的？",
    "options": [
      "秦朝",
      "汉朝",
      "明朝",
      "唐朝"
    ],
    "answer": 0
  },
  {
    "id": 413,
    "category": "动物世界",
    "question": "熊猫最喜欢吃什么？",
    "options": [
      "肉",
      "竹子",
      "鱼",
      "水果"
    ],
    "answer": 1
  },
  {
    "id": 414,
    "category": "数学思维",
    "question": "5元可以换几张1元？",
    "options": [
      "3张",
      "4张",
      "5张",
      "6张"
    ],
    "answer": 2
  },
  {
    "id": 415,
    "category": "综合知识",
    "question": "1000-300等于多少？",
    "options": [
      "500",
      "600",
      "700",
      "800"
    ],
    "answer": 2
  },
  {
    "id": 416,
    "category": "植物王国",
    "question": "苹果是长在树上的吗？",
    "options": [
      "是的",
      "不是，长在地上",
      "长在藤上",
      "长在水里"
    ],
    "answer": 0
  },
  {
    "id": 417,
    "category": "自然科学",
    "question": "为什么天空是蓝色的？",
    "options": [
      "海水反射",
      "大气散射阳光",
      "臭氧层颜色",
      "植被反射"
    ],
    "answer": 1
  },
  {
    "id": 418,
    "category": "数学思维",
    "question": "11 + 8 = ?",
    "options": [
      "21",
      "19",
      "20",
      "18"
    ],
    "answer": 1
  },
  {
    "id": 419,
    "category": "天气气象",
    "question": "能见度低于多少米叫大雾？",
    "options": [
      "500米",
      "200米",
      "50米",
      "1000米"
    ],
    "answer": 1
  },
  {
    "id": 420,
    "category": "植物王国",
    "question": "松树的叶子为什么是针形的？",
    "options": [
      "为了好看",
      "减少水分蒸发",
      "便于结果",
      "保护自己"
    ],
    "answer": 1
  },
  {
    "id": 421,
    "category": "天文宇宙",
    "question": "中国第一颗人造卫星叫什么？",
    "options": [
      "神舟一号",
      "东方红一号",
      "嫦娥一号",
      "天宫一号"
    ],
    "answer": 1
  },
  {
    "id": 422,
    "category": "综合知识",
    "question": "世界上使用人数最多的语言是？",
    "options": [
      "英语",
      "汉语",
      "西班牙语",
      "阿拉伯语"
    ],
    "answer": 1
  },
  {
    "id": 423,
    "category": "数学思维",
    "question": "17 + 8 = ?",
    "options": [
      "27",
      "26",
      "25",
      "24"
    ],
    "answer": 2
  },
  {
    "id": 424,
    "category": "数学思维",
    "question": "6 × 2 = ?",
    "options": [
      "11",
      "13",
      "14",
      "12"
    ],
    "answer": 3
  },
  {
    "id": 425,
    "category": "生活常识",
    "question": "红灯亮时应该？",
    "options": [
      "快速通过",
      "停下来",
      "左右看通过",
      "慢慢走"
    ],
    "answer": 1
  },
  {
    "id": 426,
    "category": "动物世界",
    "question": "哪种动物是澳大利亚的国宝？",
    "options": [
      "熊猫",
      "考拉",
      "北极熊",
      "企鹅"
    ],
    "answer": 1
  },
  {
    "id": 427,
    "category": "天文宇宙",
    "question": "人类发射的第一个空间站是？",
    "options": [
      "国际空间站",
      "礼炮1号",
      "天宫一号",
      "和平号"
    ],
    "answer": 1
  },
  {
    "id": 428,
    "category": "天气气象",
    "question": "天气预报中红色预警表示什么？",
    "options": [
      "一般",
      "较重",
      "严重",
      "特别严重"
    ],
    "answer": 3
  },
  {
    "id": 429,
    "category": "植物王国",
    "question": "蒲公英的种子靠什么传播？",
    "options": [
      "水流",
      "风力",
      "动物",
      "人工"
    ],
    "answer": 1
  },
  {
    "id": 430,
    "category": "数学思维",
    "question": "94 + 6 = ?",
    "options": [
      "101",
      "99",
      "100",
      "102"
    ],
    "answer": 2
  },
  {
    "id": 431,
    "category": "综合知识",
    "question": "火车是哪个国家发明的？",
    "options": [
      "中国",
      "美国",
      "英国",
      "日本"
    ],
    "answer": 2
  },
  {
    "id": 432,
    "category": "数学思维",
    "question": "7 × 3 = ?",
    "options": [
      "21",
      "22",
      "23",
      "20"
    ],
    "answer": 0
  },
  {
    "id": 433,
    "category": "自然科学",
    "question": "仙人掌的刺是它的什么？",
    "options": [
      "根",
      "茎",
      "叶",
      "花"
    ],
    "answer": 2
  },
  {
    "id": 434,
    "category": "自然科学",
    "question": "鱼睡觉时眼睛是怎样的？",
    "options": [
      "闭着的",
      "睁着的",
      "半闭半睁",
      "一会儿睁一会儿闭"
    ],
    "answer": 1
  },
  {
    "id": 435,
    "category": "动物世界",
    "question": "鸵鸟能飞吗？",
    "options": [
      "能",
      "不能",
      "有时能",
      "夜里能"
    ],
    "answer": 1
  },
  {
    "id": 436,
    "category": "自然科学",
    "question": "人体最坚硬的部分是什么？",
    "options": [
      "骨头",
      "牙齿的牙釉质",
      "指甲",
      "头发"
    ],
    "answer": 1
  },
  {
    "id": 437,
    "category": "生活常识",
    "question": "哪种食物不能空腹吃？",
    "options": [
      "面包",
      "香蕉",
      "米饭",
      "馒头"
    ],
    "answer": 1
  },
  {
    "id": 438,
    "category": "天气气象",
    "question": "哪种云会带来雷阵雨？",
    "options": [
      "卷云",
      "层云",
      "积雨云",
      "高积云"
    ],
    "answer": 2
  },
  {
    "id": 439,
    "category": "植物王国",
    "question": "柑橘类水果含有丰富的什么？",
    "options": [
      "蛋白质",
      "维生素C",
      "脂肪",
      "淀粉"
    ],
    "answer": 1
  },
  {
    "id": 440,
    "category": "自然科学",
    "question": "猫为什么喜欢吃鱼？",
    "options": [
      "鱼有牛磺酸对猫眼睛好",
      "鱼好吃",
      "猫天生喜欢水",
      "鱼便宜"
    ],
    "answer": 0
  },
  {
    "id": 441,
    "category": "安全教育",
    "question": "在下水道井盖松动的地方，应该怎么做？",
    "options": [
      "跳过去",
      "绕行",
      "踩上去",
      "不管"
    ],
    "answer": 1
  },
  {
    "id": 442,
    "category": "数学思维",
    "question": "12 + 6 = ?",
    "options": [
      "18",
      "19",
      "20",
      "17"
    ],
    "answer": 0
  },
  {
    "id": 443,
    "category": "数学思维",
    "question": "64 + 5 = ?",
    "options": [
      "71",
      "69",
      "68",
      "70"
    ],
    "answer": 1
  },
  {
    "id": 444,
    "category": "数学思维",
    "question": "90-45+15的结果是多少？",
    "options": [
      "30",
      "45",
      "60",
      "75"
    ],
    "answer": 2
  },
  {
    "id": 445,
    "category": "综合知识",
    "question": "风车的故乡是哪个国家？",
    "options": [
      "中国",
      "美国",
      "荷兰",
      "英国"
    ],
    "answer": 2
  },
  {
    "id": 446,
    "category": "天文宇宙",
    "question": "月球上的\"海\"是什么？",
    "options": [
      "真正的水",
      "低洼平原",
      "巨大的坑",
      "冰层"
    ],
    "answer": 1
  },
  {
    "id": 447,
    "category": "数学思维",
    "question": "7 × 5 = ?",
    "options": [
      "35",
      "34",
      "37",
      "36"
    ],
    "answer": 0
  },
  {
    "id": 448,
    "category": "植物王国",
    "question": "棉花是什么的颜色？",
    "options": [
      "只有白色",
      "白色为主也有彩色",
      "只有黄色",
      "只有红色"
    ],
    "answer": 1
  },
  {
    "id": 449,
    "category": "地理知识",
    "question": "赤道穿过哪个大洲？",
    "options": [
      "欧洲",
      "南极洲",
      "非洲",
      "北美洲"
    ],
    "answer": 2
  },
  {
    "id": 450,
    "category": "数学思维",
    "question": "2 × 4 = ?",
    "options": [
      "8",
      "9",
      "10",
      "7"
    ],
    "answer": 0
  },
  {
    "id": 451,
    "category": "综合知识",
    "question": "3D打印是什么技术？",
    "options": [
      "平面打印",
      "立体打印/增材制造",
      "彩色打印",
      "激光打印"
    ],
    "answer": 1
  },
  {
    "id": 452,
    "category": "综合知识",
    "question": "一箱牛奶24盒，喝了一半，还剩几盒？",
    "options": [
      "6盒",
      "12盒",
      "18盒",
      "8盒"
    ],
    "answer": 1
  },
  {
    "id": 453,
    "category": "数学思维",
    "question": "5 × 5 = ?",
    "options": [
      "27",
      "26",
      "24",
      "25"
    ],
    "answer": 3
  },
  {
    "id": 454,
    "category": "动物世界",
    "question": "鳄鱼是冷血动物还是温血动物？",
    "options": [
      "冷血动物",
      "温血动物",
      "两者都是",
      "都不是"
    ],
    "answer": 0
  },
  {
    "id": 455,
    "category": "生活常识",
    "question": "长期不吃早饭会怎样？",
    "options": [
      "变聪明",
      "容易得胃病",
      "变强壮",
      "没有影响"
    ],
    "answer": 1
  },
  {
    "id": 456,
    "category": "综合知识",
    "question": "我们呼吸时吸入什么气体？",
    "options": [
      "二氧化碳",
      "氮气",
      "氧气",
      "氢气"
    ],
    "answer": 2
  },
  {
    "id": 457,
    "category": "动物世界",
    "question": "大象的鼻子主要用来做什么？",
    "options": [
      "呼吸",
      "抓东西和喝水",
      "打架",
      "求偶"
    ],
    "answer": 1
  },
  {
    "id": 458,
    "category": "自然科学",
    "question": "狗能看到颜色吗？",
    "options": [
      "能看见所有颜色",
      "只能看到黑白",
      "能看到蓝黄色",
      "完全色盲"
    ],
    "answer": 2
  },
  {
    "id": 459,
    "category": "综合知识",
    "question": "梯形的平行边叫做？",
    "options": [
      "腰",
      "上底和下底",
      "高",
      "中线"
    ],
    "answer": 1
  },
  {
    "id": 460,
    "category": "数学思维",
    "question": "边长1米的正方形面积是多少？",
    "options": [
      "1平方米",
      "2平方米",
      "4平方米",
      "10平方米"
    ],
    "answer": 0
  },
  {
    "id": 461,
    "category": "数学思维",
    "question": "3 × 7 = ?",
    "options": [
      "22",
      "23",
      "21",
      "20"
    ],
    "answer": 2
  },
  {
    "id": 462,
    "category": "安全教育",
    "question": "运动中扭伤脚踝应该？",
    "options": [
      "热敷",
      "冷敷",
      "继续运动",
      "不管"
    ],
    "answer": 1
  },
  {
    "id": 463,
    "category": "综合知识",
    "question": "0.5等于几分之几？",
    "options": [
      "二分之一",
      "四分之一",
      "五分之一",
      "三分之一"
    ],
    "answer": 0
  },
  {
    "id": 464,
    "category": "综合知识",
    "question": "端午节人们吃什么？",
    "options": [
      "月饼",
      "饺子",
      "粽子",
      "汤圆"
    ],
    "answer": 2
  },
  {
    "id": 465,
    "category": "综合知识",
    "question": "在太空中能看见的唯一人造建筑是？",
    "options": [
      "金字塔",
      "长城(实际不能)",
      "埃菲尔铁塔",
      "自由女神像"
    ],
    "answer": 1
  },
  {
    "id": 466,
    "category": "综合知识",
    "question": "电子邮件的英文是什么？",
    "options": [
      "Email",
      "SMS",
      "APP",
      "URL"
    ],
    "answer": 0
  },
  {
    "id": 467,
    "category": "综合知识",
    "question": "24个苹果每6个装一袋，可以装几袋？",
    "options": [
      "3袋",
      "4袋",
      "5袋",
      "6袋"
    ],
    "answer": 1
  },
  {
    "id": 468,
    "category": "自然科学",
    "question": "眼镜蛇的毒液属于什么类型？",
    "options": [
      "神经毒素",
      "血液毒素",
      "细胞毒素",
      "混合毒素"
    ],
    "answer": 0
  },
  {
    "id": 469,
    "category": "数学思维",
    "question": "67 + 3 = ?",
    "options": [
      "69",
      "71",
      "70",
      "72"
    ],
    "answer": 2
  },
  {
    "id": 470,
    "category": "地理知识",
    "question": "中国有多少个省级行政区？",
    "options": [
      "30个",
      "32个",
      "34个",
      "36个"
    ],
    "answer": 2
  },
  {
    "id": 471,
    "category": "天气气象",
    "question": "打雷时为什么先看见闪电后听见雷声？",
    "options": [
      "雷声慢",
      "光比声音速度快",
      "闪电更亮",
      "耳朵反应慢"
    ],
    "answer": 1
  },
  {
    "id": 472,
    "category": "数学思维",
    "question": "圆的周长和直径的比值叫做？",
    "options": [
      "半径",
      "圆周率",
      "面积",
      "体积"
    ],
    "answer": 1
  },
  {
    "id": 473,
    "category": "综合知识",
    "question": "AI的中文意思是？",
    "options": [
      "人工智能",
      "自动控制",
      "高级计算",
      "电子技术"
    ],
    "answer": 0
  },
  {
    "id": 474,
    "category": "生活常识",
    "question": "鸡蛋中哪部分蛋白质含量最高？",
    "options": [
      "蛋壳",
      "蛋黄",
      "蛋白",
      "蛋膜"
    ],
    "answer": 2
  },
  {
    "id": 475,
    "category": "生活常识",
    "question": "每天应该睡多少小时？",
    "options": [
      "4-5小时",
      "5-6小时",
      "8-10小时",
      "12小时以上"
    ],
    "answer": 2
  },
  {
    "id": 476,
    "category": "自然科学",
    "question": "壁虎的尾巴断了会怎样？",
    "options": [
      "会死",
      "会再生",
      "无法再生",
      "流血而死"
    ],
    "answer": 1
  },
  {
    "id": 477,
    "category": "天气气象",
    "question": "天空为什么会出现晚霞？",
    "options": [
      "空气污染",
      "光线散射",
      "云层反射",
      "水汽蒸发"
    ],
    "answer": 1
  },
  {
    "id": 478,
    "category": "天气气象",
    "question": "龙卷风的形状通常是？",
    "options": [
      "球形",
      "漏斗形",
      "方形",
      "柱形"
    ],
    "answer": 1
  },
  {
    "id": 479,
    "category": "自然科学",
    "question": "人体内什么元素最多？",
    "options": [
      "碳",
      "氢",
      "氧",
      "氮"
    ],
    "answer": 2
  },
  {
    "id": 480,
    "category": "综合知识",
    "question": "蚂蚁能搬动比自身重多少倍的东西？",
    "options": [
      "10倍",
      "50倍",
      "100倍",
      "500倍"
    ],
    "answer": 1
  },
  {
    "id": 481,
    "category": "综合知识",
    "question": "中华人民共和国的国歌是？",
    "options": [
      "东方红",
      "义勇军进行曲",
      "黄河大合唱",
      "歌唱祖国"
    ],
    "answer": 1
  },
  {
    "id": 482,
    "category": "综合知识",
    "question": "乒乓球每局多少分获胜？",
    "options": [
      "7分",
      "11分",
      "21分",
      "15分"
    ],
    "answer": 1
  },
  {
    "id": 483,
    "category": "植物王国",
    "question": "沙漠中的植物有什么特点？",
    "options": [
      "叶子大",
      "根系深且叶小或成刺",
      "需要大量水",
      "开花多"
    ],
    "answer": 1
  },
  {
    "id": 484,
    "category": "历史人文",
    "question": "唐朝的首都是？",
    "options": [
      "洛阳",
      "长安",
      "开封",
      "南京"
    ],
    "answer": 1
  },
  {
    "id": 485,
    "category": "数学思维",
    "question": "84 + 6 = ?",
    "options": [
      "92",
      "89",
      "91",
      "90"
    ],
    "answer": 3
  },
  {
    "id": 486,
    "category": "数学思维",
    "question": "84 + 2 = ?",
    "options": [
      "86",
      "88",
      "85",
      "87"
    ],
    "answer": 0
  },
  {
    "id": 487,
    "category": "数学思维",
    "question": "6 × 5 = ?",
    "options": [
      "31",
      "30",
      "32",
      "29"
    ],
    "answer": 1
  },
  {
    "id": 488,
    "category": "综合知识",
    "question": "中国高铁的最高运营速度约为？",
    "options": [
      "200km/h",
      "250km/h",
      "350km/h",
      "500km/h"
    ],
    "answer": 2
  },
  {
    "id": 489,
    "category": "历史人文",
    "question": "以下哪个不是生肖？",
    "options": [
      "鼠",
      "猫",
      "牛",
      "虎"
    ],
    "answer": 1
  },
  {
    "id": 490,
    "category": "数学思维",
    "question": "3 × 3 = ?",
    "options": [
      "11",
      "9",
      "10",
      "8"
    ],
    "answer": 1
  },
  {
    "id": 491,
    "category": "数学思维",
    "question": "68 + 4 = ?",
    "options": [
      "74",
      "72",
      "71",
      "73"
    ],
    "answer": 1
  },
  {
    "id": 492,
    "category": "自然科学",
    "question": "蝴蝶的翅膀上有什么？",
    "options": [
      "花粉",
      "鳞片",
      "羽毛",
      "绒毛"
    ],
    "answer": 1
  },
  {
    "id": 493,
    "category": "综合知识",
    "question": "54里面有几个9？",
    "options": [
      "4个",
      "5个",
      "6个",
      "7个"
    ],
    "answer": 2
  },
  {
    "id": 494,
    "category": "自然科学",
    "question": "竹子是树还是草？",
    "options": [
      "树",
      "草",
      "灌木",
      "藤本"
    ],
    "answer": 1
  },
  {
    "id": 495,
    "category": "动物世界",
    "question": "兔子有几条腿？",
    "options": [
      "2条",
      "4条",
      "6条",
      "8条"
    ],
    "answer": 1
  },
  {
    "id": 496,
    "category": "数学思维",
    "question": "5 × 4 = ?",
    "options": [
      "22",
      "21",
      "20",
      "19"
    ],
    "answer": 2
  },
  {
    "id": 497,
    "category": "历史人文",
    "question": "秦始皇统一六国是在哪一年？",
    "options": [
      "公元前230年",
      "公元前221年",
      "公元前210年",
      "公元前206年"
    ],
    "answer": 1
  },
  {
    "id": 498,
    "category": "生活常识",
    "question": "牛奶中含有丰富的什么营养？",
    "options": [
      "脂肪",
      "蛋白质和钙",
      "维生素C",
      "糖分"
    ],
    "answer": 1
  },
  {
    "id": 499,
    "category": "综合知识",
    "question": "智能手机的\"智能\"主要体现在？",
    "options": [
      "可以打电话",
      "像电脑一样运行各种应用",
      "屏幕大",
      "电量足"
    ],
    "answer": 1
  },
  {
    "id": 500,
    "category": "自然科学",
    "question": "金鱼会睡觉吗？",
    "options": [
      "不会",
      "会，睁着眼睛",
      "会，闭着眼睛",
      "会，但很难察觉"
    ],
    "answer": 1
  },
  {
    "id": 501,
    "category": "综合知识",
    "question": "用\"把\"字可以组成什么词？",
    "options": [
      "把门",
      "把持",
      "把柄",
      "以上都可以"
    ],
    "answer": 3
  },
  {
    "id": 502,
    "category": "植物王国",
    "question": "玉米的须是什么？",
    "options": [
      "根",
      "茎",
      "雌花的花柱",
      "叶子"
    ],
    "answer": 2
  },
  {
    "id": 503,
    "category": "自然科学",
    "question": "月球上能听到声音吗？",
    "options": [
      "能",
      "不能",
      "看情况",
      "有时能"
    ],
    "answer": 1
  },
  {
    "id": 504,
    "category": "综合知识",
    "question": "激光是什么的简称？",
    "options": [
      "激波放大",
      "受激辐射光放大",
      "光波振动",
      "电磁辐射"
    ],
    "answer": 1
  },
  {
    "id": 505,
    "category": "数学思维",
    "question": "90 + 8 = ?",
    "options": [
      "98",
      "100",
      "97",
      "99"
    ],
    "answer": 0
  },
  {
    "id": 506,
    "category": "综合知识",
    "question": "中国改革开放开始于哪一年？",
    "options": [
      "1976年",
      "1978年",
      "1980年",
      "1985年"
    ],
    "answer": 1
  },
  {
    "id": 507,
    "category": "数学思维",
    "question": "10 + 8 = ?",
    "options": [
      "18",
      "17",
      "20",
      "19"
    ],
    "answer": 0
  },
  {
    "id": 508,
    "category": "综合知识",
    "question": "健康的成年人每分钟心跳约？",
    "options": [
      "30-50次",
      "60-100次",
      "120-150次",
      "150-200次"
    ],
    "answer": 1
  },
  {
    "id": 509,
    "category": "动物世界",
    "question": "变色龙为什么会变色？",
    "options": [
      "为了好看",
      "为了伪装",
      "随心情",
      "为了求偶"
    ],
    "answer": 1
  },
  {
    "id": 510,
    "category": "地理知识",
    "question": "撒哈拉沙漠位于哪个大洲？",
    "options": [
      "亚洲",
      "非洲",
      "南美洲",
      "大洋洲"
    ],
    "answer": 1
  },
  {
    "id": 511,
    "category": "综合知识",
    "question": "云计算的\"云\"指的是？",
    "options": [
      "天上的云",
      "互联网和远程服务器网络",
      "数据线",
      "无线信号"
    ],
    "answer": 1
  },
  {
    "id": 512,
    "category": "生活常识",
    "question": "交通报警电话是多少？",
    "options": [
      "110",
      "119",
      "120",
      "122"
    ],
    "answer": 3
  },
  {
    "id": 513,
    "category": "自然科学",
    "question": "为什么向日葵会跟着太阳转？",
    "options": [
      "因为喜欢太阳",
      "生长素分布不均",
      "风吹的",
      "动物的本能"
    ],
    "answer": 1
  },
  {
    "id": 514,
    "category": "数学思维",
    "question": "一个班级有40人，男生占五分之三，女生有多少人？",
    "options": [
      "24人",
      "16人",
      "20人",
      "30人"
    ],
    "answer": 1
  },
  {
    "id": 515,
    "category": "数学思维",
    "question": "22 + 6 = ?",
    "options": [
      "29",
      "27",
      "28",
      "30"
    ],
    "answer": 2
  },
  {
    "id": 516,
    "category": "综合知识",
    "question": "轮船在海上为什么不会沉？",
    "options": [
      "有发动机",
      "水有浮力",
      "风在吹",
      "船很轻"
    ],
    "answer": 1
  },
  {
    "id": 517,
    "category": "综合知识",
    "question": "一个苹果约重？",
    "options": [
      "1克",
      "10克",
      "200克",
      "5千克"
    ],
    "answer": 2
  },
  {
    "id": 518,
    "category": "历史人文",
    "question": "中国最古老的文字是？",
    "options": [
      "金文",
      "甲骨文",
      "小篆",
      "隶书"
    ],
    "answer": 1
  },
  {
    "id": 519,
    "category": "综合知识",
    "question": "温度计是谁发明的？",
    "options": [
      "牛顿",
      "伽利略",
      "爱因斯坦",
      "爱迪生"
    ],
    "answer": 1
  },
  {
    "id": 520,
    "category": "综合知识",
    "question": "中国有多少个民族？",
    "options": [
      "46个",
      "56个",
      "66个",
      "76个"
    ],
    "answer": 1
  },
  {
    "id": 521,
    "category": "天气气象",
    "question": "风的等级最高是几级？",
    "options": [
      "10级",
      "12级",
      "17级",
      "20级"
    ],
    "answer": 1
  },
  {
    "id": 522,
    "category": "综合知识",
    "question": "《三国演义》的作者是？",
    "options": [
      "施耐庵",
      "吴承恩",
      "罗贯中",
      "曹雪芹"
    ],
    "answer": 2
  },
  {
    "id": 523,
    "category": "综合知识",
    "question": "为什么铁会生锈？",
    "options": [
      "氧化反应",
      "被水溶解",
      "被风吹",
      "太阳晒"
    ],
    "answer": 0
  },
  {
    "id": 524,
    "category": "综合知识",
    "question": "教师节是哪一天？",
    "options": [
      "9月1日",
      "9月10日",
      "10月1日",
      "10月10日"
    ],
    "answer": 1
  },
  {
    "id": 525,
    "category": "生活常识",
    "question": "香蕉含有什么丰富的营养？",
    "options": [
      "维生素C",
      "钾元素",
      "蛋白质",
      "脂肪"
    ],
    "answer": 1
  },
  {
    "id": 526,
    "category": "综合知识",
    "question": "哪个月有28天？",
    "options": [
      "2月",
      "4月",
      "每个月都有",
      "只有闰年2月"
    ],
    "answer": 2
  },
  {
    "id": 527,
    "category": "数学思维",
    "question": "60 + 6 = ?",
    "options": [
      "68",
      "66",
      "67",
      "65"
    ],
    "answer": 1
  },
  {
    "id": 528,
    "category": "数学思维",
    "question": "40 + 8 = ?",
    "options": [
      "48",
      "47",
      "50",
      "49"
    ],
    "answer": 0
  },
  {
    "id": 529,
    "category": "综合知识",
    "question": "植树节是哪一天？",
    "options": [
      "3月5日",
      "3月12日",
      "4月5日",
      "4月22日"
    ],
    "answer": 1
  },
  {
    "id": 530,
    "category": "自然科学",
    "question": "蛇为什么要蜕皮？",
    "options": [
      "为了长个",
      "因为皮破了",
      "为了好看",
      "因为太冷了"
    ],
    "answer": 0
  },
  {
    "id": 531,
    "category": "地理知识",
    "question": "中国四大高原不包括？",
    "options": [
      "青藏高原",
      "内蒙古高原",
      "黄土高原",
      "云贵高原"
    ],
    "answer": 0
  },
  {
    "id": 532,
    "category": "天文宇宙",
    "question": "第一个登上月球的人是？",
    "options": [
      "杨利伟",
      "加加林",
      "阿姆斯特朗",
      "奥尔德林"
    ],
    "answer": 2
  },
  {
    "id": 533,
    "category": "数学思维",
    "question": "钟面上有多少个大格？",
    "options": [
      "10个",
      "12个",
      "24个",
      "60个"
    ],
    "answer": 1
  },
  {
    "id": 534,
    "category": "综合知识",
    "question": "北京故宫又叫什么？",
    "options": [
      "颐和园",
      "紫禁城",
      "天坛",
      "圆明园"
    ],
    "answer": 1
  },
  {
    "id": 535,
    "category": "植物王国",
    "question": "苔藓植物生活在什么环境？",
    "options": [
      "干燥",
      "潮湿",
      "炎热",
      "寒冷"
    ],
    "answer": 1
  },
  {
    "id": 536,
    "category": "自然科学",
    "question": "昙花一般在什么时候开放？",
    "options": [
      "早晨",
      "中午",
      "傍晚",
      "夜晚"
    ],
    "answer": 3
  },
  {
    "id": 537,
    "category": "综合知识",
    "question": "指南针指向什么方向？",
    "options": [
      "东方",
      "南方",
      "西方",
      "北方"
    ],
    "answer": 3
  },
  {
    "id": 538,
    "category": "综合知识",
    "question": "影子形成的条件不包括？",
    "options": [
      "光",
      "不透明物体",
      "屏幕/地面",
      "声音"
    ],
    "answer": 3
  },
  {
    "id": 539,
    "category": "综合知识",
    "question": "发电的方式不包括？",
    "options": [
      "火力发电",
      "水力发电",
      "风力发电",
      "人力跑步发电(商业)"
    ],
    "answer": 3
  },
  {
    "id": 540,
    "category": "自然科学",
    "question": "人体最大的器官是什么？",
    "options": [
      "心脏",
      "肝脏",
      "皮肤",
      "大脑"
    ],
    "answer": 2
  },
  {
    "id": 541,
    "category": "数学思维",
    "question": "1米等于多少厘米？",
    "options": [
      "10厘米",
      "100厘米",
      "1000厘米",
      "10000厘米"
    ],
    "answer": 1
  },
  {
    "id": 542,
    "category": "自然科学",
    "question": "人类DNA有多少对染色体？",
    "options": [
      "20对",
      "22对",
      "23对",
      "24对"
    ],
    "answer": 2
  },
  {
    "id": 543,
    "category": "动物世界",
    "question": "蝴蝶小时候叫做什么？",
    "options": [
      "蛹",
      "幼虫/毛毛虫",
      "蚕",
      "蝌蚪"
    ],
    "answer": 1
  },
  {
    "id": 544,
    "category": "数学思维",
    "question": "50 + 7 = ?",
    "options": [
      "59",
      "57",
      "56",
      "58"
    ],
    "answer": 1
  },
  {
    "id": 545,
    "category": "综合知识",
    "question": "艾滋病传播途径不包括？",
    "options": [
      "血液传播",
      "母婴传播",
      "性传播",
      "握手传播"
    ],
    "answer": 3
  },
  {
    "id": 546,
    "category": "数学思维",
    "question": "11 + 2 = ?",
    "options": [
      "14",
      "12",
      "15",
      "13"
    ],
    "answer": 3
  },
  {
    "id": 547,
    "category": "综合知识",
    "question": "1.2里面有几个0.1？",
    "options": [
      "10个",
      "12个",
      "1个",
      "2个"
    ],
    "answer": 1
  },
  {
    "id": 548,
    "category": "综合知识",
    "question": "老鹰在哪一年孵蛋？",
    "options": [
      "春天",
      "夏天",
      "秋天",
      "冬天"
    ],
    "answer": 0
  },
  {
    "id": 549,
    "category": "自然科学",
    "question": "蛋白质由什么组成？",
    "options": [
      "糖",
      "氨基酸",
      "脂肪",
      "矿物质"
    ],
    "answer": 1
  },
  {
    "id": 550,
    "category": "数学思维",
    "question": "8 × 2 = ?",
    "options": [
      "18",
      "17",
      "15",
      "16"
    ],
    "answer": 3
  },
  {
    "id": 551,
    "category": "综合知识",
    "question": "氧气占空气的多少？",
    "options": [
      "约78%",
      "约21%",
      "约1%",
      "约50%"
    ],
    "answer": 1
  },
  {
    "id": 552,
    "category": "动物世界",
    "question": "哪种鸟会模仿人说话？",
    "options": [
      "麻雀",
      "鹦鹉",
      "乌鸦",
      "老鹰"
    ],
    "answer": 1
  },
  {
    "id": 553,
    "category": "综合知识",
    "question": "两条直线相交形成什么角？",
    "options": [
      "直角",
      "对顶角",
      "内角",
      "补角"
    ],
    "answer": 1
  },
  {
    "id": 554,
    "category": "数学思维",
    "question": "86 + 4 = ?",
    "options": [
      "89",
      "91",
      "90",
      "92"
    ],
    "answer": 2
  },
  {
    "id": 555,
    "category": "综合知识",
    "question": "电磁波谱中波长最长的是？",
    "options": [
      "伽马射线",
      "X射线",
      "可见光",
      "无线电波"
    ],
    "answer": 3
  },
  {
    "id": 556,
    "category": "天气气象",
    "question": "冰雹一般发生在什么季节？",
    "options": [
      "春天",
      "夏天",
      "秋天",
      "冬天"
    ],
    "answer": 1
  },
  {
    "id": 557,
    "category": "数学思维",
    "question": "3 × 2 = ?",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "answer": 1
  },
  {
    "id": 558,
    "category": "数学思维",
    "question": "9 × 6 = ?",
    "options": [
      "54",
      "55",
      "53",
      "56"
    ],
    "answer": 0
  },
  {
    "id": 559,
    "category": "安全教育",
    "question": "雷雨天不应该做什么？",
    "options": [
      "待在室内",
      "在树下避雨",
      "关好门窗",
      "拔掉电器插头"
    ],
    "answer": 1
  },
  {
    "id": 560,
    "category": "综合知识",
    "question": "跳水比赛的满分是？",
    "options": [
      "5分",
      "8分",
      "10分",
      "12分"
    ],
    "answer": 2
  },
  {
    "id": 561,
    "category": "地理知识",
    "question": "中国哪个省份面积最大？",
    "options": [
      "西藏",
      "新疆",
      "内蒙古",
      "青海"
    ],
    "answer": 1
  },
  {
    "id": 562,
    "category": "自然科学",
    "question": "为什么切洋葱会流泪？",
    "options": [
      "有刺激性气体",
      "洋葱有毒",
      "眼睛敏感",
      "太辣了"
    ],
    "answer": 0
  },
  {
    "id": 563,
    "category": "动物世界",
    "question": "狗为什么经常伸舌头？",
    "options": [
      "口渴",
      "散热",
      "饿了",
      "表示友好"
    ],
    "answer": 1
  },
  {
    "id": 564,
    "category": "地理知识",
    "question": "被称为世界屋脊的是？",
    "options": [
      "内蒙古高原",
      "青藏高原",
      "云贵高原",
      "黄土高原"
    ],
    "answer": 1
  },
  {
    "id": 565,
    "category": "安全教育",
    "question": "在公共场所与家长走散应该？",
    "options": [
      "到处乱跑",
      "站在原地或找工作人员",
      "跟陌生人走",
      "自己回家"
    ],
    "answer": 1
  },
  {
    "id": 566,
    "category": "数学思维",
    "question": "35 + 5 = ?",
    "options": [
      "39",
      "40",
      "42",
      "41"
    ],
    "answer": 1
  },
  {
    "id": 567,
    "category": "天文宇宙",
    "question": "日食发生在什么时候？",
    "options": [
      "初一",
      "十五",
      "任何时候",
      "满月时"
    ],
    "answer": 0
  },
  {
    "id": 568,
    "category": "动物世界",
    "question": "哪一种动物跑得最快？",
    "options": [
      "狮子",
      "猎豹",
      "老虎",
      "羚羊"
    ],
    "answer": 1
  },
  {
    "id": 569,
    "category": "植物王国",
    "question": "玫瑰是什么科的植物？",
    "options": [
      "菊科",
      "蔷薇科",
      "百合科",
      "兰科"
    ],
    "answer": 1
  },
  {
    "id": 570,
    "category": "综合知识",
    "question": "三角形按角度分类不包括？",
    "options": [
      "锐角三角形",
      "直角三角形",
      "钝角三角形",
      "平行三角形"
    ],
    "answer": 3
  },
  {
    "id": 571,
    "category": "综合知识",
    "question": "5.0末尾的0去掉会怎样？",
    "options": [
      "数值变大",
      "数值变小",
      "数值不变",
      "不确定"
    ],
    "answer": 2
  },
  {
    "id": 572,
    "category": "综合知识",
    "question": "蜻蜓的复眼有多少个小眼？",
    "options": [
      "约100个",
      "约1000个",
      "约1万个",
      "约2.8万个"
    ],
    "answer": 3
  },
  {
    "id": 573,
    "category": "生活常识",
    "question": "过马路应该走哪里？",
    "options": [
      "快车道",
      "斑马线",
      "任何地方",
      "马路中间"
    ],
    "answer": 1
  },
  {
    "id": 574,
    "category": "数学思维",
    "question": "2 × 4 = ?",
    "options": [
      "9",
      "8",
      "7",
      "10"
    ],
    "answer": 1
  },
  {
    "id": 575,
    "category": "植物王国",
    "question": "世界上最大的花是什么？",
    "options": [
      "荷花",
      "向日葵",
      "大王花",
      "菊花"
    ],
    "answer": 2
  },
  {
    "id": 576,
    "category": "自然科学",
    "question": "为什么鸡蛋煮熟后蛋白变白？",
    "options": [
      "有漂白剂",
      "蛋白质变性",
      "被染色了",
      "蒸发了"
    ],
    "answer": 1
  },
  {
    "id": 577,
    "category": "历史人文",
    "question": "茶叶的原产地是？",
    "options": [
      "印度",
      "中国",
      "日本",
      "斯里兰卡"
    ],
    "answer": 1
  },
  {
    "id": 578,
    "category": "自然科学",
    "question": "细菌都是有害的吗？",
    "options": [
      "是",
      "不是，有些有益",
      "大部分有害",
      "完全无害"
    ],
    "answer": 1
  },
  {
    "id": 579,
    "category": "综合知识",
    "question": "为什么先看到闪电后听到雷声？",
    "options": [
      "因为眼睛在前",
      "光速比音速快",
      "闪电真的很亮",
      "耳朵反应慢"
    ],
    "answer": 1
  },
  {
    "id": 580,
    "category": "数学思维",
    "question": "20减去8再加上5等于？",
    "options": [
      "7",
      "12",
      "17",
      "13"
    ],
    "answer": 2
  },
  {
    "id": 581,
    "category": "数学思维",
    "question": "26 + 4 = ?",
    "options": [
      "29",
      "32",
      "30",
      "31"
    ],
    "answer": 2
  },
  {
    "id": 582,
    "category": "数学思维",
    "question": "12 + 2 = ?",
    "options": [
      "16",
      "14",
      "15",
      "13"
    ],
    "answer": 1
  },
  {
    "id": 583,
    "category": "综合知识",
    "question": "直角是多少度？",
    "options": [
      "45度",
      "60度",
      "90度",
      "180度"
    ],
    "answer": 2
  },
  {
    "id": 584,
    "category": "数学思维",
    "question": "3 + 3 = ?",
    "options": [
      "7",
      "6",
      "5",
      "8"
    ],
    "answer": 1
  },
  {
    "id": 585,
    "category": "自然科学",
    "question": "蜗牛有多少颗牙齿？",
    "options": [
      "没有牙齿",
      "约100颗",
      "约1000颗",
      "约1万颗"
    ],
    "answer": 3
  },
  {
    "id": 586,
    "category": "综合知识",
    "question": "圆的半径扩大2倍周长扩大几倍？",
    "options": [
      "2倍",
      "4倍",
      "不变",
      "8倍"
    ],
    "answer": 0
  },
  {
    "id": 587,
    "category": "天气气象",
    "question": "雪花是什么形状的？",
    "options": [
      "六角形",
      "五角形",
      "圆形",
      "方形"
    ],
    "answer": 0
  },
  {
    "id": 588,
    "category": "综合知识",
    "question": "水的化学式是什么？",
    "options": [
      "CO2",
      "H2O",
      "O2",
      "NaCl"
    ],
    "answer": 1
  },
  {
    "id": 589,
    "category": "数学思维",
    "question": "5 × 8 = ?",
    "options": [
      "42",
      "41",
      "40",
      "39"
    ],
    "answer": 2
  },
  {
    "id": 590,
    "category": "数学思维",
    "question": "8 × 9 = ?",
    "options": [
      "71",
      "73",
      "74",
      "72"
    ],
    "answer": 3
  },
  {
    "id": 591,
    "category": "数学思维",
    "question": "3 × 8 = ?",
    "options": [
      "26",
      "23",
      "24",
      "25"
    ],
    "answer": 2
  },
  {
    "id": 592,
    "category": "安全教育",
    "question": "被狗追赶时应该怎么做？",
    "options": [
      "赶快跑",
      "站在原地不动",
      "大声尖叫",
      "用石头打狗"
    ],
    "answer": 1
  },
  {
    "id": 593,
    "category": "自然科学",
    "question": "下列哪种气体在空气中最多？",
    "options": [
      "氧气",
      "二氧化碳",
      "氮气",
      "氢气"
    ],
    "answer": 2
  },
  {
    "id": 594,
    "category": "综合知识",
    "question": "5角用小数表示是？",
    "options": [
      "0.05元",
      "0.5元",
      "5元",
      "0.005元"
    ],
    "answer": 1
  },
  {
    "id": 595,
    "category": "自然科学",
    "question": "为什么夏天穿黑色衣服热？",
    "options": [
      "黑色吸热",
      "黑色反光",
      "黑色透风",
      "黑色材料厚"
    ],
    "answer": 0
  },
  {
    "id": 596,
    "category": "数学思维",
    "question": "8 × 9 = ?",
    "options": [
      "71",
      "73",
      "72",
      "74"
    ],
    "answer": 2
  },
  {
    "id": 597,
    "category": "数学思维",
    "question": "7 × 8 = ?",
    "options": [
      "58",
      "56",
      "55",
      "57"
    ],
    "answer": 1
  },
  {
    "id": 598,
    "category": "数学思维",
    "question": "3 × 9 = ?",
    "options": [
      "27",
      "29",
      "28",
      "26"
    ],
    "answer": 0
  },
  {
    "id": 599,
    "category": "地理知识",
    "question": "地球的天然卫星是？",
    "options": [
      "太阳",
      "月球",
      "火星",
      "金星"
    ],
    "answer": 1
  },
  {
    "id": 600,
    "category": "综合知识",
    "question": "世界杯足球赛几年举办一次？",
    "options": [
      "2年",
      "3年",
      "4年",
      "5年"
    ],
    "answer": 2
  },
  {
    "id": 601,
    "category": "天文宇宙",
    "question": "黑洞是真实存在的吗？",
    "options": [
      "是",
      "不是",
      "只在科幻小说里",
      "不确定"
    ],
    "answer": 0
  },
  {
    "id": 602,
    "category": "数学思维",
    "question": "10 + 4 = ?",
    "options": [
      "13",
      "14",
      "15",
      "16"
    ],
    "answer": 1
  },
  {
    "id": 603,
    "category": "数学思维",
    "question": "51 + 6 = ?",
    "options": [
      "57",
      "58",
      "56",
      "59"
    ],
    "answer": 0
  },
  {
    "id": 604,
    "category": "数学思维",
    "question": "89 + 2 = ?",
    "options": [
      "92",
      "91",
      "90",
      "93"
    ],
    "answer": 1
  },
  {
    "id": 605,
    "category": "综合知识",
    "question": "李清照是哪个朝代的词人？",
    "options": [
      "唐代",
      "宋代",
      "明代",
      "清代"
    ],
    "answer": 1
  },
  {
    "id": 606,
    "category": "天文宇宙",
    "question": "为什么星星会闪烁？",
    "options": [
      "星星在眨眼",
      "大气扰动",
      "星星发光不均匀",
      "人眼花"
    ],
    "answer": 1
  },
  {
    "id": 607,
    "category": "历史人文",
    "question": "三国时期不包括哪个国家？",
    "options": [
      "魏",
      "蜀",
      "吴",
      "晋"
    ],
    "answer": 3
  },
  {
    "id": 608,
    "category": "数学思维",
    "question": "17 + 3 = ?",
    "options": [
      "19",
      "22",
      "21",
      "20"
    ],
    "answer": 3
  },
  {
    "id": 609,
    "category": "综合知识",
    "question": "月球上有什么？",
    "options": [
      "空气和水",
      "环形山",
      "森林",
      "海洋"
    ],
    "answer": 1
  },
  {
    "id": 610,
    "category": "数学思维",
    "question": "9x9等于多少？",
    "options": [
      "18",
      "72",
      "81",
      "99"
    ],
    "answer": 2
  },
  {
    "id": 611,
    "category": "数学思维",
    "question": "98 + 1 = ?",
    "options": [
      "101",
      "99",
      "100",
      "98"
    ],
    "answer": 1
  },
  {
    "id": 612,
    "category": "数学思维",
    "question": "34 + 1 = ?",
    "options": [
      "35",
      "34",
      "37",
      "36"
    ],
    "answer": 0
  },
  {
    "id": 613,
    "category": "数学思维",
    "question": "44 + 3 = ?",
    "options": [
      "48",
      "46",
      "47",
      "49"
    ],
    "answer": 2
  },
  {
    "id": 614,
    "category": "数学思维",
    "question": "2 + 4 = ?",
    "options": [
      "7",
      "8",
      "6",
      "5"
    ],
    "answer": 2
  },
  {
    "id": 615,
    "category": "天文宇宙",
    "question": "太阳系有几大行星？",
    "options": [
      "7颗",
      "8颗",
      "9颗",
      "10颗"
    ],
    "answer": 1
  },
  {
    "id": 616,
    "category": "数学思维",
    "question": "89 + 3 = ?",
    "options": [
      "93",
      "94",
      "92",
      "91"
    ],
    "answer": 2
  },
  {
    "id": 617,
    "category": "数学思维",
    "question": "93 + 4 = ?",
    "options": [
      "97",
      "99",
      "98",
      "96"
    ],
    "answer": 0
  },
  {
    "id": 618,
    "category": "数学思维",
    "question": "把12颗糖果平均分给4个小朋友，每人几颗？",
    "options": [
      "2颗",
      "3颗",
      "4颗",
      "6颗"
    ],
    "answer": 1
  },
  {
    "id": 619,
    "category": "数学思维",
    "question": "下列哪个是素数？",
    "options": [
      "4",
      "9",
      "11",
      "15"
    ],
    "answer": 2
  },
  {
    "id": 620,
    "category": "历史人文",
    "question": "二十四节气中第一个是？",
    "options": [
      "春分",
      "立春",
      "雨水",
      "惊蛰"
    ],
    "answer": 1
  },
  {
    "id": 621,
    "category": "数学思维",
    "question": "48是8的几倍？",
    "options": [
      "5倍",
      "6倍",
      "7倍",
      "8倍"
    ],
    "answer": 1
  },
  {
    "id": 622,
    "category": "综合知识",
    "question": "1年有多少个月？",
    "options": [
      "10个月",
      "11个月",
      "12个月",
      "13个月"
    ],
    "answer": 2
  },
  {
    "id": 623,
    "category": "综合知识",
    "question": "钟面上分针走一圈是多少分钟？",
    "options": [
      "12分钟",
      "30分钟",
      "60分钟",
      "24分钟"
    ],
    "answer": 2
  },
  {
    "id": 624,
    "category": "数学思维",
    "question": "时钟上3点整，时针和分针成什么角？",
    "options": [
      "锐角",
      "直角",
      "钝角",
      "平角"
    ],
    "answer": 1
  },
  {
    "id": 625,
    "category": "数学思维",
    "question": "比60少15的数是多少？",
    "options": [
      "35",
      "45",
      "55",
      "25"
    ],
    "answer": 1
  },
  {
    "id": 626,
    "category": "综合知识",
    "question": "萤火虫发光是为了什么？",
    "options": [
      "照明",
      "求偶和交流",
      "捕食",
      "取暖"
    ],
    "answer": 1
  },
  {
    "id": 627,
    "category": "综合知识",
    "question": "1天有多少小时？",
    "options": [
      "12小时",
      "18小时",
      "24小时",
      "36小时"
    ],
    "answer": 2
  },
  {
    "id": 628,
    "category": "综合知识",
    "question": "下列哪种不是可再生能源？",
    "options": [
      "风能",
      "太阳能",
      "煤炭",
      "水能"
    ],
    "answer": 2
  },
  {
    "id": 629,
    "category": "植物王国",
    "question": "食虫植物为什么要吃虫子？",
    "options": [
      "补充氮元素",
      "好玩",
      "没有原因",
      "为了繁殖"
    ],
    "answer": 0
  },
  {
    "id": 630,
    "category": "天气气象",
    "question": "台风一般发生在什么季节？",
    "options": [
      "春季",
      "夏季",
      "秋季",
      "冬季"
    ],
    "answer": 1
  },
  {
    "id": 631,
    "category": "数学思维",
    "question": "乘法口诀中\"六六\"等于？",
    "options": [
      "十二",
      "二十四",
      "三十",
      "三十六"
    ],
    "answer": 3
  },
  {
    "id": 632,
    "category": "数学思维",
    "question": "17 + 9 = ?",
    "options": [
      "27",
      "28",
      "26",
      "25"
    ],
    "answer": 2
  },
  {
    "id": 633,
    "category": "历史人文",
    "question": "指南针最初叫什么？",
    "options": [
      "指北针",
      "司南",
      "罗盘",
      "磁针"
    ],
    "answer": 1
  },
  {
    "id": 634,
    "category": "综合知识",
    "question": "\"床前明月光\"的下一句是？",
    "options": [
      "低头思故乡",
      "疑是地上霜",
      "举头望明月",
      "花落知多少"
    ],
    "answer": 1
  },
  {
    "id": 635,
    "category": "自然科学",
    "question": "蚯蚓是益虫还是害虫？",
    "options": [
      "益虫",
      "害虫",
      "既是益虫也是害虫",
      "都不是"
    ],
    "answer": 0
  },
  {
    "id": 636,
    "category": "生活常识",
    "question": "哪种天气容易感冒？",
    "options": [
      "炎热的夏天",
      "天气忽冷忽热",
      "温暖的春天",
      "干燥的秋天"
    ],
    "answer": 1
  },
  {
    "id": 637,
    "category": "数学思维",
    "question": "8 × 2 = ?",
    "options": [
      "15",
      "18",
      "17",
      "16"
    ],
    "answer": 3
  },
  {
    "id": 638,
    "category": "数学思维",
    "question": "正方形的周长等于什么？",
    "options": [
      "边长×边长",
      "边长×2",
      "边长×4",
      "边长÷2"
    ],
    "answer": 2
  },
  {
    "id": 639,
    "category": "综合知识",
    "question": "可可西里位于？",
    "options": [
      "新疆",
      "青海和西藏交界",
      "四川",
      "云南"
    ],
    "answer": 1
  },
  {
    "id": 640,
    "category": "天文宇宙",
    "question": "流星是怎么形成的？",
    "options": [
      "星星掉下来",
      "流星体进入大气层燃烧",
      "飞机尾气",
      "云层碰撞"
    ],
    "answer": 1
  },
  {
    "id": 641,
    "category": "数学思维",
    "question": "86 + 6 = ?",
    "options": [
      "91",
      "94",
      "93",
      "92"
    ],
    "answer": 3
  },
  {
    "id": 642,
    "category": "地理知识",
    "question": "亚洲和欧洲的分界线是？",
    "options": [
      "阿尔卑斯山",
      "乌拉尔山脉",
      "喜马拉雅山",
      "安第斯山"
    ],
    "answer": 1
  },
  {
    "id": 643,
    "category": "数学思维",
    "question": "6 × 9 = ?",
    "options": [
      "53",
      "55",
      "54",
      "56"
    ],
    "answer": 2
  },
  {
    "id": 644,
    "category": "综合知识",
    "question": "7+8等于多少？",
    "options": [
      "13",
      "14",
      "15",
      "16"
    ],
    "answer": 2
  },
  {
    "id": 645,
    "category": "数学思维",
    "question": "43 + 7 = ?",
    "options": [
      "52",
      "51",
      "50",
      "49"
    ],
    "answer": 2
  },
  {
    "id": 646,
    "category": "数学思维",
    "question": "7 × 7 = ?",
    "options": [
      "50",
      "49",
      "48",
      "51"
    ],
    "answer": 1
  },
  {
    "id": 647,
    "category": "综合知识",
    "question": "区块链技术最初用于？",
    "options": [
      "社交",
      "比特币数字货币",
      "存储",
      "游戏"
    ],
    "answer": 1
  },
  {
    "id": 648,
    "category": "综合知识",
    "question": "等腰三角形有几条边相等？",
    "options": [
      "0条",
      "1条",
      "2条",
      "3条"
    ],
    "answer": 2
  },
  {
    "id": 649,
    "category": "动物世界",
    "question": "世界上最大的陆地动物是？",
    "options": [
      "大象",
      "长颈鹿",
      "犀牛",
      "河马"
    ],
    "answer": 0
  }
];
