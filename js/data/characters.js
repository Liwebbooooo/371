// ========================================
// 小学汉字数据 - 人教版官方生字表
// 数据来源：人教版小学语文教材
// 笔画数据：Unihan 数据库
// 组词数据：pypinyin 词组字典 + 智能生成
// 总字数：2488 字
// ========================================

const CHARACTERS = [
  {
    "char": "一",
    "pinyin": "yī",
    "strokes": 1,
    "words": [
      "一个",
      "一天",
      "一起"
    ],
    "sentence": "「一」这个字我会写了！",
    "grade": "一年级上册",
    "level": 1,
    "id": 1
  },
  {
    "char": "二",
    "pinyin": "èr",
    "strokes": 2,
    "words": [
      "二月",
      "第二",
      "二十"
    ],
    "sentence": "妈妈教我认「二」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 2
  },
  {
    "char": "三",
    "pinyin": "sān",
    "strokes": 3,
    "words": [
      "三角形",
      "三个",
      "再三"
    ],
    "sentence": "妈妈教我认「三」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 3
  },
  {
    "char": "十",
    "pinyin": "shí",
    "strokes": 2,
    "words": [
      "十分",
      "十个",
      "十足"
    ],
    "sentence": "妈妈教我认「十」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 4
  },
  {
    "char": "木",
    "pinyin": "mù",
    "strokes": 4,
    "words": [
      "木头",
      "树木",
      "木马"
    ],
    "sentence": "「木」这个字我会写了！",
    "grade": "一年级上册",
    "level": 1,
    "id": 5
  },
  {
    "char": "禾",
    "pinyin": "hé",
    "strokes": 5,
    "words": [
      "禾苗",
      "禾场"
    ],
    "sentence": "我学会了写「禾」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 6
  },
  {
    "char": "上",
    "pinyin": "shàng",
    "strokes": 3,
    "words": [
      "上学",
      "上面",
      "上午"
    ],
    "sentence": "妈妈教我认「上」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 7
  },
  {
    "char": "下",
    "pinyin": "xià",
    "strokes": 3,
    "words": [
      "下午",
      "下面",
      "下车"
    ],
    "sentence": "「下」这个字我会写了！",
    "grade": "一年级上册",
    "level": 1,
    "id": 8
  },
  {
    "char": "土",
    "pinyin": "tǔ",
    "strokes": 3,
    "words": [
      "土地",
      "泥土",
      "土豆"
    ],
    "sentence": "妈妈教我认「土」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 9
  },
  {
    "char": "个",
    "pinyin": "gè",
    "strokes": 3,
    "words": [
      "个人",
      "个性",
      "个别"
    ],
    "sentence": "「个」这个字我会写了！",
    "grade": "一年级上册",
    "level": 1,
    "id": 10
  },
  {
    "char": "八",
    "pinyin": "bā",
    "strokes": 2,
    "words": [
      "八月",
      "八个",
      "八方"
    ],
    "sentence": "妈妈教我认「八」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 11
  },
  {
    "char": "入",
    "pinyin": "rù",
    "strokes": 2,
    "words": [
      "入口",
      "入门",
      "进入"
    ],
    "sentence": "妈妈教我认「入」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 12
  },
  {
    "char": "大",
    "pinyin": "dà",
    "strokes": 3,
    "words": [
      "大家",
      "大小",
      "大人"
    ],
    "sentence": "我学会了写「大」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 13
  },
  {
    "char": "天",
    "pinyin": "tiān",
    "strokes": 4,
    "words": [
      "天空",
      "今天",
      "明天"
    ],
    "sentence": "妈妈教我认「天」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 14
  },
  {
    "char": "人",
    "pinyin": "rén",
    "strokes": 2,
    "words": [
      "人们",
      "大人",
      "人民"
    ],
    "sentence": "妈妈教我认「人」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 15
  },
  {
    "char": "火",
    "pinyin": "huǒ",
    "strokes": 4,
    "words": [
      "火车",
      "大火",
      "火花"
    ],
    "sentence": "「火」这个字我会写了！",
    "grade": "一年级上册",
    "level": 1,
    "id": 16
  },
  {
    "char": "文",
    "pinyin": "wén",
    "strokes": 4,
    "words": [
      "文字",
      "语文",
      "文化"
    ],
    "sentence": "妈妈教我认「文」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 17
  },
  {
    "char": "六",
    "pinyin": "liù",
    "strokes": 4,
    "words": [
      "六月",
      "六个"
    ],
    "sentence": "妈妈教我认「六」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 18
  },
  {
    "char": "七",
    "pinyin": "qī",
    "strokes": 2,
    "words": [
      "七月",
      "七个"
    ],
    "sentence": "妈妈教我认「七」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 19
  },
  {
    "char": "儿",
    "pinyin": "ér",
    "strokes": 2,
    "words": [
      "儿子",
      "儿童",
      "女儿"
    ],
    "sentence": "妈妈教我认「儿」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 20
  },
  {
    "char": "九",
    "pinyin": "jiǔ",
    "strokes": 2,
    "words": [
      "九月",
      "九个"
    ],
    "sentence": "我学会了写「九」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 21
  },
  {
    "char": "无",
    "pinyin": "wú",
    "strokes": 4,
    "words": [
      "无上",
      "无不",
      "无为"
    ],
    "sentence": "妈妈教我认「无」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 22
  },
  {
    "char": "口",
    "pinyin": "kǒu",
    "strokes": 3,
    "words": [
      "入口",
      "口水",
      "开口"
    ],
    "sentence": "我学会了写「口」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 23
  },
  {
    "char": "日",
    "pinyin": "rì",
    "strokes": 4,
    "words": [
      "日子",
      "生日",
      "日出"
    ],
    "sentence": "妈妈教我认「日」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 24
  },
  {
    "char": "中",
    "pinyin": "zhōng",
    "strokes": 4,
    "words": [
      "中国",
      "中间",
      "中午"
    ],
    "sentence": "妈妈教我认「中」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 25
  },
  {
    "char": "了",
    "pinyin": "le",
    "strokes": 2,
    "words": [
      "了了",
      "了了",
      "了事"
    ],
    "sentence": "「了」这个字我会写了！",
    "grade": "一年级上册",
    "level": 1,
    "id": 26
  },
  {
    "char": "子",
    "pinyin": "zi",
    "strokes": 3,
    "words": [
      "孩子",
      "儿子",
      "种子"
    ],
    "sentence": "「子」这个字我会写了！",
    "grade": "一年级上册",
    "level": 1,
    "id": 27
  },
  {
    "char": "门",
    "pinyin": "mén",
    "strokes": 3,
    "words": [
      "门口",
      "开门",
      "大门"
    ],
    "sentence": "「门」这个字我会写了！",
    "grade": "一年级上册",
    "level": 1,
    "id": 28
  },
  {
    "char": "月",
    "pinyin": "yuè",
    "strokes": 4,
    "words": [
      "月亮",
      "一月",
      "月光"
    ],
    "sentence": "妈妈教我认「月」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 29
  },
  {
    "char": "不",
    "pinyin": "bù",
    "strokes": 4,
    "words": [
      "不行",
      "不同",
      "不能"
    ],
    "sentence": "「不」这个字我会写了！",
    "grade": "一年级上册",
    "level": 1,
    "id": 30
  },
  {
    "char": "开",
    "pinyin": "kāi",
    "strokes": 4,
    "words": [
      "开门",
      "开心",
      "开始"
    ],
    "sentence": "我学会了写「开」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 31
  },
  {
    "char": "四",
    "pinyin": "sì",
    "strokes": 5,
    "words": [
      "四月",
      "四个"
    ],
    "sentence": "妈妈教我认「四」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 32
  },
  {
    "char": "五",
    "pinyin": "wǔ",
    "strokes": 4,
    "words": [
      "五月",
      "五个"
    ],
    "sentence": "「五」这个字我会写了！",
    "grade": "一年级上册",
    "level": 1,
    "id": 33
  },
  {
    "char": "目",
    "pinyin": "mù",
    "strokes": 5,
    "words": [
      "目光",
      "目的",
      "题目"
    ],
    "sentence": "妈妈教我认「目」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 34
  },
  {
    "char": "耳",
    "pinyin": "ěr",
    "strokes": 6,
    "words": [
      "耳朵",
      "木耳"
    ],
    "sentence": "妈妈教我认「耳」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 35
  },
  {
    "char": "头",
    "pinyin": "tóu",
    "strokes": 5,
    "words": [
      "石头",
      "头发",
      "开头"
    ],
    "sentence": "我学会了写「头」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 36
  },
  {
    "char": "米",
    "pinyin": "mǐ",
    "strokes": 6,
    "words": [
      "大米",
      "米饭",
      "玉米"
    ],
    "sentence": "「米」这个字我会写了！",
    "grade": "一年级上册",
    "level": 1,
    "id": 37
  },
  {
    "char": "见",
    "pinyin": "jiàn",
    "strokes": 4,
    "words": [
      "看见",
      "再见",
      "见面"
    ],
    "sentence": "妈妈教我认「见」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 38
  },
  {
    "char": "白",
    "pinyin": "bái",
    "strokes": 5,
    "words": [
      "白色",
      "白天",
      "白云"
    ],
    "sentence": "妈妈教我认「白」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 39
  },
  {
    "char": "田",
    "pinyin": "tián",
    "strokes": 5,
    "words": [
      "田地",
      "田野",
      "稻田"
    ],
    "sentence": "我学会了写「田」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 40
  },
  {
    "char": "电",
    "pinyin": "diàn",
    "strokes": 5,
    "words": [
      "电话",
      "电视",
      "闪电"
    ],
    "sentence": "「电」这个字我会写了！",
    "grade": "一年级上册",
    "level": 1,
    "id": 41
  },
  {
    "char": "也",
    "pinyin": "yě",
    "strokes": 3,
    "words": [
      "也许",
      "也是"
    ],
    "sentence": "「也」这个字我会写了！",
    "grade": "一年级上册",
    "level": 1,
    "id": 42
  },
  {
    "char": "长",
    "pinyin": "zhǎng",
    "strokes": 4,
    "words": [
      "长大",
      "长久",
      "长江"
    ],
    "sentence": "妈妈教我认「长」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 43
  },
  {
    "char": "山",
    "pinyin": "shān",
    "strokes": 3,
    "words": [
      "大山",
      "爬山",
      "山水"
    ],
    "sentence": "妈妈教我认「山」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 44
  },
  {
    "char": "出",
    "pinyin": "chū",
    "strokes": 5,
    "words": [
      "出去",
      "出来",
      "出发"
    ],
    "sentence": "妈妈教我认「出」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 45
  },
  {
    "char": "飞",
    "pinyin": "fēi",
    "strokes": 3,
    "words": [
      "飞机",
      "飞鸟",
      "起飞"
    ],
    "sentence": "「飞」这个字我会写了！",
    "grade": "一年级上册",
    "level": 1,
    "id": 46
  },
  {
    "char": "马",
    "pinyin": "mǎ",
    "strokes": 3,
    "words": [
      "马上",
      "小马",
      "马路"
    ],
    "sentence": "「马」这个字我会写了！",
    "grade": "一年级上册",
    "level": 1,
    "id": 47
  },
  {
    "char": "鸟",
    "pinyin": "niǎo",
    "strokes": 5,
    "words": [
      "小鸟",
      "飞鸟",
      "鸟叫"
    ],
    "sentence": "妈妈教我认「鸟」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 48
  },
  {
    "char": "云",
    "pinyin": "yún",
    "strokes": 4,
    "words": [
      "白云",
      "云朵",
      "乌云"
    ],
    "sentence": "「云」这个字我会写了！",
    "grade": "一年级上册",
    "level": 1,
    "id": 49
  },
  {
    "char": "公",
    "pinyin": "gōng",
    "strokes": 4,
    "words": [
      "公园",
      "公共",
      "公平"
    ],
    "sentence": "我学会了写「公」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 50
  },
  {
    "char": "车",
    "pinyin": "chē",
    "strokes": 4,
    "words": [
      "汽车",
      "火车",
      "车站"
    ],
    "sentence": "我学会了写「车」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 51
  },
  {
    "char": "牛",
    "pinyin": "niú",
    "strokes": 4,
    "words": [
      "牛奶",
      "小牛",
      "牛肉"
    ],
    "sentence": "我学会了写「牛」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 52
  },
  {
    "char": "羊",
    "pinyin": "yáng",
    "strokes": 6,
    "words": [
      "山羊",
      "小羊",
      "羊毛"
    ],
    "sentence": "我学会了写「羊」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 53
  },
  {
    "char": "小",
    "pinyin": "xiǎo",
    "strokes": 3,
    "words": [
      "大小",
      "小心",
      "小学"
    ],
    "sentence": "妈妈教我认「小」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 54
  },
  {
    "char": "少",
    "pinyin": "shǎo",
    "strokes": 4,
    "words": [
      "多少",
      "少数",
      "少年"
    ],
    "sentence": "我学会了写「少」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 55
  },
  {
    "char": "巾",
    "pinyin": "jīn",
    "strokes": 3,
    "words": [
      "毛巾",
      "红领巾"
    ],
    "sentence": "妈妈教我认「巾」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 56
  },
  {
    "char": "牙",
    "pinyin": "yá",
    "strokes": 4,
    "words": [
      "牙齿",
      "刷牙",
      "象牙"
    ],
    "sentence": "我学会了写「牙」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 57
  },
  {
    "char": "尺",
    "pinyin": "chǐ",
    "strokes": 4,
    "words": [
      "尺子",
      "尺寸"
    ],
    "sentence": "「尺」这个字我会写了！",
    "grade": "一年级上册",
    "level": 1,
    "id": 58
  },
  {
    "char": "毛",
    "pinyin": "máo",
    "strokes": 4,
    "words": [
      "毛巾",
      "羽毛",
      "毛笔"
    ],
    "sentence": "我学会了写「毛」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 59
  },
  {
    "char": "卜",
    "pinyin": "bo",
    "strokes": 2,
    "words": [
      "卜卦",
      "卜居",
      "卜筮"
    ],
    "sentence": "妈妈教我认「卜」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 60
  },
  {
    "char": "又",
    "pinyin": "yòu",
    "strokes": 2,
    "words": [
      "又作别论",
      "又吐又泻",
      "又吐又泻"
    ],
    "sentence": "我学会了写「又」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 61
  },
  {
    "char": "心",
    "pinyin": "xīn",
    "strokes": 4,
    "words": [
      "开心",
      "小心",
      "爱心"
    ],
    "sentence": "我学会了写「心」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 62
  },
  {
    "char": "风",
    "pinyin": "fēng",
    "strokes": 4,
    "words": [
      "刮风",
      "风筝",
      "春风"
    ],
    "sentence": "我学会了写「风」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 63
  },
  {
    "char": "力",
    "pinyin": "lì",
    "strokes": 2,
    "words": [
      "力气",
      "努力",
      "力量"
    ],
    "sentence": "「力」这个字我会写了！",
    "grade": "一年级上册",
    "level": 1,
    "id": 64
  },
  {
    "char": "手",
    "pinyin": "shǒu",
    "strokes": 4,
    "words": [
      "小手",
      "举手",
      "手机"
    ],
    "sentence": "妈妈教我认「手」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 65
  },
  {
    "char": "水",
    "pinyin": "shuǐ",
    "strokes": 4,
    "words": [
      "水果",
      "河水",
      "开水"
    ],
    "sentence": "妈妈教我认「水」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 66
  },
  {
    "char": "广",
    "pinyin": "guǎng",
    "strokes": 3,
    "words": [
      "广场",
      "广大",
      "广东"
    ],
    "sentence": "「广」这个字我会写了！",
    "grade": "一年级上册",
    "level": 1,
    "id": 67
  },
  {
    "char": "升",
    "pinyin": "shēng",
    "strokes": 4,
    "words": [
      "升任",
      "升位",
      "升势"
    ],
    "sentence": "「升」这个字我会写了！",
    "grade": "一年级上册",
    "level": 1,
    "id": 68
  },
  {
    "char": "足",
    "pinyin": "zú",
    "strokes": 7,
    "words": [
      "足底",
      "足见",
      "足跟"
    ],
    "sentence": "我学会了写「足」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 69
  },
  {
    "char": "走",
    "pinyin": "zǒu",
    "strokes": 7,
    "words": [
      "走俏",
      "走卒",
      "走台"
    ],
    "sentence": "妈妈教我认「走」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 70
  },
  {
    "char": "方",
    "pinyin": "fāng",
    "strokes": 4,
    "words": [
      "方便",
      "方凳",
      "方头"
    ],
    "sentence": "我学会了写「方」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 71
  },
  {
    "char": "半",
    "pinyin": "bàn",
    "strokes": 5,
    "words": [
      "半价",
      "半休",
      "半大"
    ],
    "sentence": "我学会了写「半」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 72
  },
  {
    "char": "巴",
    "pinyin": "bā",
    "strokes": 4,
    "words": [
      "巴结",
      "哑巴",
      "嘎巴"
    ],
    "sentence": "妈妈教我认「巴」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 73
  },
  {
    "char": "业",
    "pinyin": "yè",
    "strokes": 5,
    "words": [
      "业内",
      "业大",
      "乐业"
    ],
    "sentence": "「业」这个字我会写了！",
    "grade": "一年级上册",
    "level": 1,
    "id": 74
  },
  {
    "char": "本",
    "pinyin": "běn",
    "strokes": 5,
    "words": [
      "本体",
      "本册",
      "本分"
    ],
    "sentence": "我学会了写「本」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 75
  },
  {
    "char": "平",
    "pinyin": "píng",
    "strokes": 5,
    "words": [
      "平乐",
      "平价",
      "平信"
    ],
    "sentence": "「平」这个字我会写了！",
    "grade": "一年级上册",
    "level": 1,
    "id": 76
  },
  {
    "char": "书",
    "pinyin": "shū",
    "strokes": 4,
    "words": [
      "书价",
      "书体",
      "书信"
    ],
    "sentence": "妈妈教我认「书」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 77
  },
  {
    "char": "自",
    "pinyin": "zì",
    "strokes": 6,
    "words": [
      "自乘",
      "自产",
      "自从"
    ],
    "sentence": "妈妈教我认「自」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 78
  },
  {
    "char": "已",
    "pinyin": "yǐ",
    "strokes": 3,
    "words": [
      "已极",
      "不已",
      "已知数"
    ],
    "sentence": "「已」这个字我会写了！",
    "grade": "一年级上册",
    "level": 1,
    "id": 79
  },
  {
    "char": "东",
    "pinyin": "dōng",
    "strokes": 5,
    "words": [
      "东北",
      "东区",
      "东华"
    ],
    "sentence": "妈妈教我认「东」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 80
  },
  {
    "char": "西",
    "pinyin": "xī",
    "strokes": 6,
    "words": [
      "西乐",
      "西化",
      "西北"
    ],
    "sentence": "「西」这个字我会写了！",
    "grade": "一年级上册",
    "level": 1,
    "id": 81
  },
  {
    "char": "回",
    "pinyin": "huí",
    "strokes": 6,
    "words": [
      "回佣",
      "回信",
      "回单"
    ],
    "sentence": "我学会了写「回」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 82
  },
  {
    "char": "片",
    "pinyin": "piàn",
    "strokes": 4,
    "words": [
      "片儿",
      "片刻",
      "片剂"
    ],
    "sentence": "我学会了写「片」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 83
  },
  {
    "char": "皮",
    "pinyin": "pí",
    "strokes": 5,
    "words": [
      "皮件",
      "皮囊",
      "皮垫"
    ],
    "sentence": "妈妈教我认「皮」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 84
  },
  {
    "char": "生",
    "pinyin": "shēng",
    "strokes": 5,
    "words": [
      "生日",
      "生活",
      "学生"
    ],
    "sentence": "我学会了写「生」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 85
  },
  {
    "char": "里",
    "pinyin": "lǐ",
    "strokes": 7,
    "words": [
      "里头",
      "里子",
      "里巷"
    ],
    "sentence": "妈妈教我认「里」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 86
  },
  {
    "char": "果",
    "pinyin": "guǒ",
    "strokes": 8,
    "words": [
      "果干",
      "果料",
      "果枝"
    ],
    "sentence": "妈妈教我认「果」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 87
  },
  {
    "char": "几",
    "pinyin": "jǐ",
    "strokes": 2,
    "words": [
      "几个",
      "几乎",
      "几何"
    ],
    "sentence": "「几」这个字我会写了！",
    "grade": "一年级上册",
    "level": 1,
    "id": 88
  },
  {
    "char": "用",
    "pinyin": "yòng",
    "strokes": 5,
    "words": [
      "用做",
      "用刑",
      "用劲"
    ],
    "sentence": "我学会了写「用」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 89
  },
  {
    "char": "鱼",
    "pinyin": "yú",
    "strokes": 8,
    "words": [
      "鱼刺",
      "鱼叉",
      "鱼头"
    ],
    "sentence": "妈妈教我认「鱼」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 90
  },
  {
    "char": "今",
    "pinyin": "jīn",
    "strokes": 4,
    "words": [
      "今朝",
      "今番",
      "今儿个"
    ],
    "sentence": "妈妈教我认「今」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 91
  },
  {
    "char": "正",
    "pinyin": "zhèng",
    "strokes": 5,
    "words": [
      "正业",
      "正中",
      "正义"
    ],
    "sentence": "我学会了写「正」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 92
  },
  {
    "char": "雨",
    "pinyin": "yǔ",
    "strokes": 8,
    "words": [
      "雨丝",
      "雨云",
      "雨伞"
    ],
    "sentence": "我学会了写「雨」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 93
  },
  {
    "char": "两",
    "pinyin": "liǎng",
    "strokes": 7,
    "words": [
      "两个",
      "两侧",
      "两便"
    ],
    "sentence": "「两」这个字我会写了！",
    "grade": "一年级上册",
    "level": 1,
    "id": 94
  },
  {
    "char": "瓜",
    "pinyin": "guā",
    "strokes": 5,
    "words": [
      "瓜分",
      "瓜期",
      "瓜架"
    ],
    "sentence": "「瓜」这个字我会写了！",
    "grade": "一年级上册",
    "level": 1,
    "id": 95
  },
  {
    "char": "衣",
    "pinyin": "yī",
    "strokes": 6,
    "words": [
      "衣冠",
      "衣分",
      "衣摆"
    ],
    "sentence": "妈妈教我认「衣」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 96
  },
  {
    "char": "来",
    "pinyin": "lái",
    "strokes": 7,
    "words": [
      "来信",
      "来劲",
      "来头"
    ],
    "sentence": "妈妈教我认「来」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 97
  },
  {
    "char": "年",
    "pinyin": "nián",
    "strokes": 6,
    "words": [
      "年中",
      "年份",
      "年会"
    ],
    "sentence": "妈妈教我认「年」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 98
  },
  {
    "char": "左",
    "pinyin": "zuǒ",
    "strokes": 5,
    "words": [
      "左传",
      "左侧",
      "左券"
    ],
    "sentence": "我学会了写「左」字。",
    "grade": "一年级上册",
    "level": 1,
    "id": 99
  },
  {
    "char": "右",
    "pinyin": "yòu",
    "strokes": 5,
    "words": [
      "右侧",
      "右肋",
      "右臂"
    ],
    "sentence": "「右」这个字我会写了！",
    "grade": "一年级上册",
    "level": 1,
    "id": 100
  },
  {
    "char": "万",
    "pinyin": "wàn",
    "strokes": 3,
    "words": [
      "万一",
      "万万",
      "万万"
    ],
    "sentence": "今天又学了新字「万」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 101
  },
  {
    "char": "丁",
    "pinyin": "dīng",
    "strokes": 2,
    "words": [
      "丁丁",
      "丁丁",
      "丁丑"
    ],
    "sentence": "你能用「丁」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 102
  },
  {
    "char": "冬",
    "pinyin": "dōng",
    "strokes": 5,
    "words": [
      "冬令",
      "冬种",
      "冬练"
    ],
    "sentence": "今天又学了新字「冬」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 103
  },
  {
    "char": "百",
    "pinyin": "bǎi",
    "strokes": 6,
    "words": [
      "百万",
      "百会",
      "百分"
    ],
    "sentence": "你能用「百」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 104
  },
  {
    "char": "齐",
    "pinyin": "qí",
    "strokes": 6,
    "words": [
      "齐人",
      "齐全",
      "齐发"
    ],
    "sentence": "今天又学了新字「齐」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 105
  },
  {
    "char": "说",
    "pinyin": "shuō",
    "strokes": 9,
    "words": [
      "说书",
      "说亲",
      "说合"
    ],
    "sentence": "「说」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 106
  },
  {
    "char": "话",
    "pinyin": "huà",
    "strokes": 8,
    "words": [
      "话别",
      "话头",
      "话语"
    ],
    "sentence": "你能用「话」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 107
  },
  {
    "char": "朋",
    "pinyin": "péng",
    "strokes": 8,
    "words": [
      "亲朋",
      "女朋友"
    ],
    "sentence": "今天又学了新字「朋」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 108
  },
  {
    "char": "友",
    "pinyin": "yǒu",
    "strokes": 4,
    "words": [
      "友好",
      "友邻",
      "亡友"
    ],
    "sentence": "「友」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 109
  },
  {
    "char": "春",
    "pinyin": "chūn",
    "strokes": 9,
    "words": [
      "春上",
      "春令",
      "春假"
    ],
    "sentence": "「春」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 110
  },
  {
    "char": "高",
    "pinyin": "gāo",
    "strokes": 10,
    "words": [
      "高个",
      "高中",
      "高丽"
    ],
    "sentence": "你能用「高」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 111
  },
  {
    "char": "你",
    "pinyin": "nǐ",
    "strokes": 7,
    "words": [
      "你们",
      "你好",
      "你们俩"
    ],
    "sentence": "「你」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 112
  },
  {
    "char": "们",
    "pinyin": "men",
    "strokes": 5,
    "words": [
      "人们",
      "他们",
      "你们"
    ],
    "sentence": "「们」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 113
  },
  {
    "char": "红",
    "pinyin": "hóng",
    "strokes": 6,
    "words": [
      "红专",
      "红云",
      "红人"
    ],
    "sentence": "「红」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 114
  },
  {
    "char": "绿",
    "pinyin": "lǜ",
    "strokes": 11,
    "words": [
      "绿化",
      "绿林",
      "绿野"
    ],
    "sentence": "今天又学了新字「绿」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 115
  },
  {
    "char": "花",
    "pinyin": "huā",
    "strokes": 7,
    "words": [
      "花会",
      "花俏",
      "花冠"
    ],
    "sentence": "今天又学了新字「花」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 116
  },
  {
    "char": "草",
    "pinyin": "cǎo",
    "strokes": 9,
    "words": [
      "草体",
      "草创",
      "草地"
    ],
    "sentence": "你能用「草」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 117
  },
  {
    "char": "爷",
    "pinyin": "yé",
    "strokes": 6,
    "words": [
      "佛爷",
      "倒爷",
      "大爷"
    ],
    "sentence": "「爷」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 118
  },
  {
    "char": "节",
    "pinyin": "jié",
    "strokes": 5,
    "words": [
      "节下",
      "节令",
      "节余"
    ],
    "sentence": "今天又学了新字「节」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 119
  },
  {
    "char": "岁",
    "pinyin": "suì",
    "strokes": 6,
    "words": [
      "岁初",
      "岁尾",
      "岁差"
    ],
    "sentence": "你能用「岁」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 120
  },
  {
    "char": "亲",
    "pinyin": "qīn",
    "strokes": 9,
    "words": [
      "亲丁",
      "亲临",
      "亲为"
    ],
    "sentence": "今天又学了新字「亲」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 121
  },
  {
    "char": "的",
    "pinyin": "de",
    "strokes": 8,
    "words": [
      "的哥",
      "的士",
      "的当"
    ],
    "sentence": "你能用「的」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 122
  },
  {
    "char": "行",
    "pinyin": "xíng",
    "strokes": 6,
    "words": [
      "行业",
      "行东",
      "行为"
    ],
    "sentence": "今天又学了新字「行」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 123
  },
  {
    "char": "古",
    "pinyin": "gǔ",
    "strokes": 5,
    "words": [
      "古体",
      "古刹",
      "古奥"
    ],
    "sentence": "你能用「古」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 124
  },
  {
    "char": "声",
    "pinyin": "shēng",
    "strokes": 7,
    "words": [
      "声乐",
      "声价",
      "声压"
    ],
    "sentence": "「声」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 125
  },
  {
    "char": "多",
    "pinyin": "duō",
    "strokes": 6,
    "words": [
      "多么",
      "多发",
      "多向"
    ],
    "sentence": "「多」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 126
  },
  {
    "char": "处",
    "pinyin": "chù",
    "strokes": 5,
    "words": [
      "处世",
      "处事",
      "处于"
    ],
    "sentence": "今天又学了新字「处」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 127
  },
  {
    "char": "知",
    "pinyin": "zhī",
    "strokes": 8,
    "words": [
      "知了",
      "知事",
      "知交"
    ],
    "sentence": "今天又学了新字「知」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 128
  },
  {
    "char": "忙",
    "pinyin": "máng",
    "strokes": 6,
    "words": [
      "忙碌",
      "别忙",
      "大忙"
    ],
    "sentence": "「忙」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 129
  },
  {
    "char": "洗",
    "pinyin": "xǐ",
    "strokes": 9,
    "words": [
      "洗三",
      "洗冤",
      "洗净"
    ],
    "sentence": "「洗」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 130
  },
  {
    "char": "认",
    "pinyin": "rèn",
    "strokes": 4,
    "words": [
      "认为",
      "认亲",
      "认可"
    ],
    "sentence": "今天又学了新字「认」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 131
  },
  {
    "char": "扫",
    "pinyin": "sǎo",
    "strokes": 6,
    "words": [
      "扫兴",
      "扫地",
      "扫坟"
    ],
    "sentence": "你能用「扫」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 132
  },
  {
    "char": "真",
    "pinyin": "zhēn",
    "strokes": 10,
    "words": [
      "真个",
      "真传",
      "真倔"
    ],
    "sentence": "「真」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 133
  },
  {
    "char": "父",
    "pinyin": "fù",
    "strokes": 4,
    "words": [
      "父业",
      "父亲",
      "父兄"
    ],
    "sentence": "「父」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 134
  },
  {
    "char": "母",
    "pinyin": "mǔ",
    "strokes": 5,
    "words": [
      "母亲",
      "母体",
      "母带"
    ],
    "sentence": "「母」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 135
  },
  {
    "char": "爸",
    "pinyin": "bà",
    "strokes": 8,
    "words": [
      "干爸",
      "阿爸"
    ],
    "sentence": "你能用「爸」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 136
  },
  {
    "char": "全",
    "pinyin": "quán",
    "strokes": 6,
    "words": [
      "全价",
      "全份",
      "全休"
    ],
    "sentence": "今天又学了新字「全」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 137
  },
  {
    "char": "关",
    "pinyin": "guān",
    "strokes": 6,
    "words": [
      "关上",
      "关中",
      "关内"
    ],
    "sentence": "「关」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 138
  },
  {
    "char": "写",
    "pinyin": "xiě",
    "strokes": 5,
    "words": [
      "写信",
      "写家",
      "写景"
    ],
    "sentence": "「写」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 139
  },
  {
    "char": "完",
    "pinyin": "wán",
    "strokes": 7,
    "words": [
      "完了",
      "完好",
      "完结"
    ],
    "sentence": "你能用「完」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 140
  },
  {
    "char": "家",
    "pinyin": "jiā",
    "strokes": 10,
    "words": [
      "家丁",
      "家丑",
      "家世"
    ],
    "sentence": "今天又学了新字「家」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 141
  },
  {
    "char": "看",
    "pinyin": "kàn",
    "strokes": 9,
    "words": [
      "看上",
      "看中",
      "看书"
    ],
    "sentence": "你能用「看」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 142
  },
  {
    "char": "着",
    "pinyin": "zhe",
    "strokes": 11,
    "words": [
      "着凉",
      "着力",
      "着墨"
    ],
    "sentence": "今天又学了新字「着」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 143
  },
  {
    "char": "画",
    "pinyin": "huà",
    "strokes": 8,
    "words": [
      "画卷",
      "画夹",
      "画家"
    ],
    "sentence": "你能用「画」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 144
  },
  {
    "char": "笑",
    "pinyin": "xiào",
    "strokes": 10,
    "words": [
      "笑场",
      "笑纹",
      "笑语"
    ],
    "sentence": "今天又学了新字「笑」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 145
  },
  {
    "char": "兴",
    "pinyin": "xīng",
    "strokes": 6,
    "words": [
      "兴业",
      "兴义",
      "兴亡"
    ],
    "sentence": "「兴」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 146
  },
  {
    "char": "会",
    "pinyin": "huì",
    "strokes": 6,
    "words": [
      "会上",
      "会众",
      "会儿"
    ],
    "sentence": "你能用「会」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 147
  },
  {
    "char": "妈",
    "pinyin": "mā",
    "strokes": 6,
    "words": [
      "大妈",
      "阿妈",
      "婆婆妈妈"
    ],
    "sentence": "你能用「妈」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 148
  },
  {
    "char": "奶",
    "pinyin": "nǎi",
    "strokes": 5,
    "words": [
      "奶头",
      "奶糖",
      "奶羊"
    ],
    "sentence": "今天又学了新字「奶」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 149
  },
  {
    "char": "午",
    "pinyin": "wǔ",
    "strokes": 4,
    "words": [
      "午休",
      "午觉",
      "午间"
    ],
    "sentence": "「午」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 150
  },
  {
    "char": "合",
    "pinyin": "hé",
    "strokes": 6,
    "words": [
      "合一",
      "合乎",
      "合于"
    ],
    "sentence": "「合」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 151
  },
  {
    "char": "放",
    "pinyin": "fàng",
    "strokes": 8,
    "words": [
      "放任",
      "放倒",
      "放假"
    ],
    "sentence": "今天又学了新字「放」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 152
  },
  {
    "char": "收",
    "pinyin": "shōu",
    "strokes": 6,
    "words": [
      "收发",
      "收场",
      "收尾"
    ],
    "sentence": "「收」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 153
  },
  {
    "char": "女",
    "pinyin": "nǚ",
    "strokes": 3,
    "words": [
      "女人",
      "女仆",
      "女优"
    ],
    "sentence": "今天又学了新字「女」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 154
  },
  {
    "char": "太",
    "pinyin": "tài",
    "strokes": 4,
    "words": [
      "太冲",
      "太和",
      "太尉"
    ],
    "sentence": "「太」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 155
  },
  {
    "char": "气",
    "pinyin": "qì",
    "strokes": 4,
    "words": [
      "气体",
      "气化",
      "气压"
    ],
    "sentence": "今天又学了新字「气」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 156
  },
  {
    "char": "早",
    "pinyin": "zǎo",
    "strokes": 6,
    "words": [
      "早上",
      "早场",
      "早朝"
    ],
    "sentence": "你能用「早」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 157
  },
  {
    "char": "去",
    "pinyin": "qù",
    "strokes": 5,
    "words": [
      "去任",
      "去处",
      "去病"
    ],
    "sentence": "你能用「去」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 158
  },
  {
    "char": "亮",
    "pinyin": "liàng",
    "strokes": 9,
    "words": [
      "亮分",
      "亮底",
      "亮度"
    ],
    "sentence": "你能用「亮」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 159
  },
  {
    "char": "和",
    "pinyin": "hé",
    "strokes": 8,
    "words": [
      "和乐",
      "和了",
      "和亲"
    ],
    "sentence": "今天又学了新字「和」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 160
  },
  {
    "char": "语",
    "pinyin": "yǔ",
    "strokes": 9,
    "words": [
      "语云",
      "语体",
      "语句"
    ],
    "sentence": "你能用「语」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 161
  },
  {
    "char": "千",
    "pinyin": "qiān",
    "strokes": 3,
    "words": [
      "千万",
      "千卡",
      "千夫"
    ],
    "sentence": "你能用「千」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 162
  },
  {
    "char": "李",
    "pinyin": "lǐ",
    "strokes": 7,
    "words": [
      "李子",
      "行李",
      "李广不侯"
    ],
    "sentence": "你能用「李」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 163
  },
  {
    "char": "秀",
    "pinyin": "xiù",
    "strokes": 7,
    "words": [
      "秀丽",
      "秀发",
      "内秀"
    ],
    "sentence": "你能用「秀」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 164
  },
  {
    "char": "香",
    "pinyin": "xiāng",
    "strokes": 9,
    "words": [
      "香会",
      "香囊",
      "香干"
    ],
    "sentence": "今天又学了新字「香」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 165
  },
  {
    "char": "听",
    "pinyin": "tīng",
    "strokes": 7,
    "words": [
      "听从",
      "听任",
      "听会"
    ],
    "sentence": "今天又学了新字「听」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 166
  },
  {
    "char": "唱",
    "pinyin": "chàng",
    "strokes": 11,
    "words": [
      "唱和",
      "唱头",
      "传唱"
    ],
    "sentence": "你能用「唱」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 167
  },
  {
    "char": "连",
    "pinyin": "lián",
    "strokes": 7,
    "words": [
      "连冠",
      "连发",
      "连合"
    ],
    "sentence": "你能用「连」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 168
  },
  {
    "char": "远",
    "pinyin": "yuǎn",
    "strokes": 7,
    "words": [
      "远东",
      "远亲",
      "远别"
    ],
    "sentence": "你能用「远」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 169
  },
  {
    "char": "定",
    "pinyin": "dìng",
    "strokes": 8,
    "words": [
      "定产",
      "定亲",
      "定价"
    ],
    "sentence": "今天又学了新字「定」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 170
  },
  {
    "char": "向",
    "pinyin": "xiàng",
    "strokes": 6,
    "words": [
      "向上",
      "向着",
      "向背"
    ],
    "sentence": "「向」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 171
  },
  {
    "char": "以",
    "pinyin": "yǐ",
    "strokes": 4,
    "words": [
      "以上",
      "以为",
      "以便"
    ],
    "sentence": "今天又学了新字「以」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 172
  },
  {
    "char": "后",
    "pinyin": "hòu",
    "strokes": 6,
    "words": [
      "后仰",
      "后任",
      "后传"
    ],
    "sentence": "今天又学了新字「后」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 173
  },
  {
    "char": "更",
    "pinyin": "gèng",
    "strokes": 7,
    "words": [
      "更为",
      "更事",
      "更其"
    ],
    "sentence": "今天又学了新字「更」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 174
  },
  {
    "char": "主",
    "pinyin": "zhǔ",
    "strokes": 5,
    "words": [
      "主上",
      "主产",
      "主仆"
    ],
    "sentence": "「主」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 175
  },
  {
    "char": "意",
    "pinyin": "yì",
    "strokes": 13,
    "words": [
      "意中",
      "意会",
      "意兴"
    ],
    "sentence": "你能用「意」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 176
  },
  {
    "char": "总",
    "pinyin": "zǒng",
    "strokes": 9,
    "words": [
      "总产",
      "总价",
      "总体"
    ],
    "sentence": "今天又学了新字「总」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 177
  },
  {
    "char": "先",
    "pinyin": "xiān",
    "strokes": 6,
    "words": [
      "先令",
      "先夫",
      "先头"
    ],
    "sentence": "「先」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 178
  },
  {
    "char": "干",
    "pinyin": "gàn",
    "strokes": 3,
    "words": [
      "干么",
      "干事",
      "干亲"
    ],
    "sentence": "今天又学了新字「干」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 179
  },
  {
    "char": "赶",
    "pinyin": "gǎn",
    "strokes": 10,
    "words": [
      "赶上",
      "赶会",
      "赶写"
    ],
    "sentence": "你能用「赶」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 180
  },
  {
    "char": "起",
    "pinyin": "qǐ",
    "strokes": 10,
    "words": [
      "起价",
      "起兴",
      "起劲"
    ],
    "sentence": "你能用「起」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 181
  },
  {
    "char": "明",
    "pinyin": "míng",
    "strokes": 8,
    "words": [
      "明丽",
      "明了",
      "明令"
    ],
    "sentence": "你能用「明」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 182
  },
  {
    "char": "净",
    "pinyin": "jìng",
    "strokes": 8,
    "words": [
      "净价",
      "净余",
      "净利"
    ],
    "sentence": "今天又学了新字「净」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 183
  },
  {
    "char": "同",
    "pinyin": "tóng",
    "strokes": 6,
    "words": [
      "同一",
      "同上",
      "同业"
    ],
    "sentence": "「同」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 184
  },
  {
    "char": "工",
    "pinyin": "gōng",
    "strokes": 3,
    "words": [
      "工价",
      "工休",
      "工会"
    ],
    "sentence": "你能用「工」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 185
  },
  {
    "char": "专",
    "pinyin": "zhuān",
    "strokes": 4,
    "words": [
      "专任",
      "专供",
      "专区"
    ],
    "sentence": "今天又学了新字「专」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 186
  },
  {
    "char": "才",
    "pinyin": "cái",
    "strokes": 3,
    "words": [
      "才分",
      "才华",
      "才女"
    ],
    "sentence": "你能用「才」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 187
  },
  {
    "char": "级",
    "pinyin": "jí",
    "strokes": 6,
    "words": [
      "级任",
      "级别",
      "级差"
    ],
    "sentence": "今天又学了新字「级」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 188
  },
  {
    "char": "队",
    "pinyin": "duì",
    "strokes": 4,
    "words": [
      "队副",
      "队员",
      "队长"
    ],
    "sentence": "「队」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 189
  },
  {
    "char": "蚂",
    "pinyin": "mǎ",
    "strokes": 9,
    "words": [
      "蚂蚁",
      "蚂蚱",
      "蚂蜂"
    ],
    "sentence": "今天又学了新字「蚂」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 190
  },
  {
    "char": "蚁",
    "pinyin": "yǐ",
    "strokes": 9,
    "words": [
      "蚁后",
      "蚁王",
      "蚂蚁"
    ],
    "sentence": "今天又学了新字「蚁」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 191
  },
  {
    "char": "前",
    "pinyin": "qián",
    "strokes": 9,
    "words": [
      "前任",
      "前台"
    ],
    "sentence": "「前」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 192
  },
  {
    "char": "空",
    "pinyin": "kōng",
    "strokes": 8,
    "words": [
      "空中",
      "空乏",
      "空位"
    ],
    "sentence": "「空」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 193
  },
  {
    "char": "房",
    "pinyin": "fáng",
    "strokes": 8,
    "words": [
      "房地",
      "房契",
      "房子"
    ],
    "sentence": "今天又学了新字「房」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 194
  },
  {
    "char": "网",
    "pinyin": "wǎng",
    "strokes": 6,
    "words": [
      "网子",
      "网状",
      "网络"
    ],
    "sentence": "你能用「网」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 195
  },
  {
    "char": "诗",
    "pinyin": "shī",
    "strokes": 8,
    "words": [
      "诗会",
      "诗体",
      "诗兴"
    ],
    "sentence": "今天又学了新字「诗」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 196
  },
  {
    "char": "林",
    "pinyin": "lín",
    "strokes": 8,
    "words": [
      "林冠",
      "林区",
      "林地"
    ],
    "sentence": "今天又学了新字「林」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 197
  },
  {
    "char": "童",
    "pinyin": "tóng",
    "strokes": 12,
    "words": [
      "儿童",
      "童年",
      "童话"
    ],
    "sentence": "今天又学了新字「童」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 198
  },
  {
    "char": "黄",
    "pinyin": "huáng",
    "strokes": 11,
    "words": [
      "黄了",
      "黄叶",
      "黄埔"
    ],
    "sentence": "今天又学了新字「黄」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 199
  },
  {
    "char": "闭",
    "pinyin": "bì",
    "strokes": 6,
    "words": [
      "闭会",
      "闭卷",
      "闭合"
    ],
    "sentence": "你能用「闭」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 200
  },
  {
    "char": "立",
    "pinyin": "lì",
    "strokes": 5,
    "words": [
      "立于",
      "立传",
      "立体"
    ],
    "sentence": "今天又学了新字「立」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 201
  },
  {
    "char": "是",
    "pinyin": "shì",
    "strokes": 9,
    "words": [
      "是否",
      "不是",
      "也是"
    ],
    "sentence": "你能用「是」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 202
  },
  {
    "char": "朵",
    "pinyin": "duǒ",
    "strokes": 6,
    "words": [
      "骨朵",
      "朵颐大嚼",
      "扎耳朵"
    ],
    "sentence": "今天又学了新字「朵」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 203
  },
  {
    "char": "美",
    "pinyin": "měi",
    "strokes": 9,
    "words": [
      "美丽",
      "美化",
      "美地"
    ],
    "sentence": "「美」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 204
  },
  {
    "char": "我",
    "pinyin": "wǒ",
    "strokes": 7,
    "words": [
      "我们",
      "我家",
      "我见"
    ],
    "sentence": "「我」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 205
  },
  {
    "char": "叶",
    "pinyin": "yè",
    "strokes": 5,
    "words": [
      "叶叶",
      "叶叶",
      "叶子"
    ],
    "sentence": "今天又学了新字「叶」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 206
  },
  {
    "char": "机",
    "pinyin": "jī",
    "strokes": 6,
    "words": [
      "机会",
      "机位",
      "机体"
    ],
    "sentence": "今天又学了新字「机」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 207
  },
  {
    "char": "她",
    "pinyin": "tā",
    "strokes": 6,
    "words": [
      "她们",
      "学她",
      "大她"
    ],
    "sentence": "今天又学了新字「她」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 208
  },
  {
    "char": "他",
    "pinyin": "tā",
    "strokes": 5,
    "words": [
      "他们",
      "他处",
      "他家"
    ],
    "sentence": "今天又学了新字「他」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 209
  },
  {
    "char": "送",
    "pinyin": "sòng",
    "strokes": 9,
    "words": [
      "送丧",
      "送亲",
      "送信"
    ],
    "sentence": "今天又学了新字「送」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 210
  },
  {
    "char": "过",
    "pinyin": "guò",
    "strokes": 6,
    "words": [
      "过世",
      "过于",
      "过人"
    ],
    "sentence": "你能用「过」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 211
  },
  {
    "char": "时",
    "pinyin": "shí",
    "strokes": 7,
    "words": [
      "时令",
      "时价",
      "时会"
    ],
    "sentence": "今天又学了新字「时」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 212
  },
  {
    "char": "让",
    "pinyin": "ràng",
    "strokes": 5,
    "words": [
      "让与",
      "让价",
      "让利"
    ],
    "sentence": "今天又学了新字「让」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 213
  },
  {
    "char": "吗",
    "pinyin": "ma",
    "strokes": 6,
    "words": [
      "吗啡",
      "干吗",
      "吗玩意儿"
    ],
    "sentence": "「吗」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 214
  },
  {
    "char": "吧",
    "pinyin": "ba",
    "strokes": 7,
    "words": [
      "吧台",
      "吧唧",
      "吧嗒"
    ],
    "sentence": "「吧」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 215
  },
  {
    "char": "虫",
    "pinyin": "chóng",
    "strokes": 6,
    "words": [
      "虫卵",
      "囊虫",
      "大虫"
    ],
    "sentence": "你能用「虫」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 216
  },
  {
    "char": "往",
    "pinyin": "wǎng",
    "strokes": 8,
    "words": [
      "往还",
      "过往",
      "往渚还汀"
    ],
    "sentence": "今天又学了新字「往」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 217
  },
  {
    "char": "得",
    "pinyin": "dé",
    "strokes": 11,
    "words": [
      "得亏",
      "得体",
      "得力"
    ],
    "sentence": "你能用「得」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 218
  },
  {
    "char": "很",
    "pinyin": "hěn",
    "strokes": 9,
    "words": [
      "很累",
      "很脏"
    ],
    "sentence": "你能用「很」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 219
  },
  {
    "char": "河",
    "pinyin": "hé",
    "strokes": 8,
    "words": [
      "河内",
      "河北",
      "河南"
    ],
    "sentence": "你能用「河」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 220
  },
  {
    "char": "姐",
    "pinyin": "jiě",
    "strokes": 8,
    "words": [
      "姐夫",
      "大姐",
      "空姐"
    ],
    "sentence": "「姐」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 221
  },
  {
    "char": "借",
    "pinyin": "jiè",
    "strokes": 10,
    "words": [
      "借助",
      "借宿",
      "借据"
    ],
    "sentence": "今天又学了新字「借」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 222
  },
  {
    "char": "呢",
    "pinyin": "ne",
    "strokes": 8,
    "words": [
      "呢喃",
      "呢子",
      "呢料"
    ],
    "sentence": "你能用「呢」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 223
  },
  {
    "char": "呀",
    "pinyin": "ya",
    "strokes": 7,
    "words": [
      "呀呀",
      "呀呀",
      "咿呀"
    ],
    "sentence": "今天又学了新字「呀」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 224
  },
  {
    "char": "哪",
    "pinyin": "nǎ",
    "strokes": 9,
    "words": [
      "哪个",
      "哪些",
      "哪位"
    ],
    "sentence": "你能用「哪」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 225
  },
  {
    "char": "谁",
    "pinyin": "shuí",
    "strokes": 10,
    "words": [
      "谁个",
      "谁家",
      "谁的"
    ],
    "sentence": "今天又学了新字「谁」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 226
  },
  {
    "char": "怕",
    "pinyin": "pà",
    "strokes": 8,
    "words": [
      "不怕",
      "只怕",
      "可怕"
    ],
    "sentence": "今天又学了新字「怕」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 227
  },
  {
    "char": "跟",
    "pinyin": "gēn",
    "strokes": 13,
    "words": [
      "跟上",
      "跟从",
      "跟头"
    ],
    "sentence": "你能用「跟」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 228
  },
  {
    "char": "凉",
    "pinyin": "liáng",
    "strokes": 10,
    "words": [
      "凉亭",
      "凉台",
      "凉席"
    ],
    "sentence": "「凉」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 229
  },
  {
    "char": "量",
    "pinyin": "liàng",
    "strokes": 12,
    "words": [
      "量具",
      "量刑",
      "量力"
    ],
    "sentence": "今天又学了新字「量」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 230
  },
  {
    "char": "最",
    "pinyin": "zuì",
    "strokes": 12,
    "words": [
      "最快",
      "最低工资",
      "最后一刻"
    ],
    "sentence": "今天又学了新字「最」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 231
  },
  {
    "char": "园",
    "pinyin": "yuán",
    "strokes": 7,
    "words": [
      "公园",
      "花园",
      "家园"
    ],
    "sentence": "你能用「园」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 232
  },
  {
    "char": "因",
    "pinyin": "yīn",
    "strokes": 6,
    "words": [
      "因为",
      "因应",
      "因数"
    ],
    "sentence": "你能用「因」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 233
  },
  {
    "char": "为",
    "pinyin": "wèi",
    "strokes": 4,
    "words": [
      "为主",
      "为了",
      "为人"
    ],
    "sentence": "今天又学了新字「为」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 234
  },
  {
    "char": "脸",
    "pinyin": "liǎn",
    "strokes": 11,
    "words": [
      "脸热",
      "上脸",
      "俏脸"
    ],
    "sentence": "「脸」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 235
  },
  {
    "char": "阳",
    "pinyin": "yáng",
    "strokes": 6,
    "words": [
      "阳台",
      "阳间",
      "冲阳"
    ],
    "sentence": "「阳」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 236
  },
  {
    "char": "光",
    "pinyin": "guāng",
    "strokes": 6,
    "words": [
      "光化",
      "光华",
      "光压"
    ],
    "sentence": "你能用「光」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 237
  },
  {
    "char": "可",
    "pinyin": "kě",
    "strokes": 5,
    "words": [
      "可不",
      "可乐",
      "可乘"
    ],
    "sentence": "「可」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 238
  },
  {
    "char": "石",
    "pinyin": "shí",
    "strokes": 5,
    "words": [
      "石像",
      "石关",
      "石刀"
    ],
    "sentence": "「石」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 239
  },
  {
    "char": "办",
    "pinyin": "bàn",
    "strokes": 4,
    "words": [
      "办好",
      "办差",
      "倡办"
    ],
    "sentence": "「办」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 240
  },
  {
    "char": "法",
    "pinyin": "fǎ",
    "strokes": 8,
    "words": [
      "法令",
      "法会",
      "法号"
    ],
    "sentence": "你能用「法」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 241
  },
  {
    "char": "找",
    "pinyin": "zhǎo",
    "strokes": 7,
    "words": [
      "找头",
      "找着",
      "找碴"
    ],
    "sentence": "你能用「找」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 242
  },
  {
    "char": "许",
    "pinyin": "xǔ",
    "strokes": 6,
    "words": [
      "许下",
      "许久",
      "许亲"
    ],
    "sentence": "「许」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 243
  },
  {
    "char": "别",
    "pinyin": "bié",
    "strokes": 7,
    "words": [
      "别业",
      "别个",
      "别人"
    ],
    "sentence": "你能用「别」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 244
  },
  {
    "char": "到",
    "pinyin": "dào",
    "strokes": 8,
    "words": [
      "到了",
      "到任",
      "到会"
    ],
    "sentence": "今天又学了新字「到」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 245
  },
  {
    "char": "那",
    "pinyin": "nà",
    "strokes": 6,
    "words": [
      "那个",
      "那么",
      "那些"
    ],
    "sentence": "你能用「那」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 246
  },
  {
    "char": "都",
    "pinyin": "dōu",
    "strokes": 10,
    "words": [
      "都会",
      "都城",
      "都尉"
    ],
    "sentence": "今天又学了新字「都」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 247
  },
  {
    "char": "吓",
    "pinyin": "xià",
    "strokes": 6,
    "words": [
      "吓人",
      "吓唬",
      "威吓"
    ],
    "sentence": "「吓」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 248
  },
  {
    "char": "叫",
    "pinyin": "jiào",
    "strokes": 5,
    "words": [
      "叫价",
      "叫劲",
      "叫化"
    ],
    "sentence": "你能用「叫」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 249
  },
  {
    "char": "再",
    "pinyin": "zài",
    "strokes": 6,
    "words": [
      "再不",
      "再会",
      "再分"
    ],
    "sentence": "今天又学了新字「再」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 250
  },
  {
    "char": "象",
    "pinyin": "xiàng",
    "strokes": 11,
    "words": [
      "万象",
      "不象",
      "大象"
    ],
    "sentence": "「象」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 251
  },
  {
    "char": "像",
    "pinyin": "xiàng",
    "strokes": 13,
    "words": [
      "像片",
      "不像",
      "佛像"
    ],
    "sentence": "「像」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 252
  },
  {
    "char": "做",
    "pinyin": "zuò",
    "strokes": 11,
    "words": [
      "做亲",
      "做假",
      "做证"
    ],
    "sentence": "今天又学了新字「做」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 253
  },
  {
    "char": "点",
    "pinyin": "diǎn",
    "strokes": 9,
    "words": [
      "点化",
      "点发",
      "点号"
    ],
    "sentence": "「点」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 254
  },
  {
    "char": "照",
    "pinyin": "zhào",
    "strokes": 13,
    "words": [
      "照会",
      "照发",
      "照射"
    ],
    "sentence": "「照」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 255
  },
  {
    "char": "沙",
    "pinyin": "shā",
    "strokes": 7,
    "words": [
      "沙丘",
      "沙俄",
      "沙包"
    ],
    "sentence": "你能用「沙」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 256
  },
  {
    "char": "海",
    "pinyin": "hǎi",
    "strokes": 10,
    "words": [
      "海上",
      "海兽",
      "海内"
    ],
    "sentence": "「海」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 257
  },
  {
    "char": "桥",
    "pinyin": "qiáo",
    "strokes": 10,
    "words": [
      "大桥",
      "小桥",
      "桥梁"
    ],
    "sentence": "今天又学了新字「桥」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 258
  },
  {
    "char": "竹",
    "pinyin": "zhú",
    "strokes": 6,
    "words": [
      "竹凳",
      "竹叶",
      "竹排"
    ],
    "sentence": "「竹」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 259
  },
  {
    "char": "军",
    "pinyin": "jūn",
    "strokes": 6,
    "words": [
      "军乐",
      "军令",
      "军区"
    ],
    "sentence": "「军」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 260
  },
  {
    "char": "苗",
    "pinyin": "miáo",
    "strokes": 8,
    "words": [
      "苗头",
      "苗寨",
      "苗期"
    ],
    "sentence": "今天又学了新字「苗」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 261
  },
  {
    "char": "井",
    "pinyin": "jǐng",
    "strokes": 4,
    "words": [
      "井台",
      "井喷",
      "井场"
    ],
    "sentence": "「井」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 262
  },
  {
    "char": "乡",
    "pinyin": "xiāng",
    "strokes": 3,
    "words": [
      "乡丁",
      "乡亲",
      "乡思"
    ],
    "sentence": "「乡」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 263
  },
  {
    "char": "面",
    "pinyin": "miàn",
    "strokes": 9,
    "words": [
      "面上",
      "面告",
      "面子"
    ],
    "sentence": "今天又学了新字「面」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 264
  },
  {
    "char": "忘",
    "pinyin": "wàng",
    "strokes": 7,
    "words": [
      "难忘",
      "忘乎其形",
      "忘其所以"
    ],
    "sentence": "今天又学了新字「忘」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 265
  },
  {
    "char": "想",
    "pinyin": "xiǎng",
    "strokes": 13,
    "words": [
      "想头",
      "想着",
      "想要"
    ],
    "sentence": "今天又学了新字「想」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 266
  },
  {
    "char": "念",
    "pinyin": "niàn",
    "strokes": 8,
    "words": [
      "念佛",
      "念及",
      "念叨"
    ],
    "sentence": "「念」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 267
  },
  {
    "char": "王",
    "pinyin": "wáng",
    "strokes": 4,
    "words": [
      "王位",
      "王侯",
      "王储"
    ],
    "sentence": "你能用「王」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 268
  },
  {
    "char": "从",
    "pinyin": "cóng",
    "strokes": 4,
    "words": [
      "从不",
      "从业",
      "从中"
    ],
    "sentence": "「从」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 269
  },
  {
    "char": "边",
    "pinyin": "biān",
    "strokes": 5,
    "words": [
      "边上",
      "边区",
      "边卡"
    ],
    "sentence": "你能用「边」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 270
  },
  {
    "char": "这",
    "pinyin": "zhè",
    "strokes": 7,
    "words": [
      "这个",
      "这么",
      "这些"
    ],
    "sentence": "今天又学了新字「这」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 271
  },
  {
    "char": "进",
    "pinyin": "jìn",
    "strokes": 7,
    "words": [
      "进剿",
      "进化",
      "进发"
    ],
    "sentence": "「进」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 272
  },
  {
    "char": "道",
    "pinyin": "dào",
    "strokes": 12,
    "words": [
      "道别",
      "道号",
      "道地"
    ],
    "sentence": "你能用「道」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 273
  },
  {
    "char": "贝",
    "pinyin": "bèi",
    "strokes": 4,
    "words": [
      "贝勒",
      "贝壳",
      "分贝"
    ],
    "sentence": "「贝」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 274
  },
  {
    "char": "原",
    "pinyin": "yuán",
    "strokes": 10,
    "words": [
      "原价",
      "原任",
      "原值"
    ],
    "sentence": "你能用「原」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 275
  },
  {
    "char": "男",
    "pinyin": "nán",
    "strokes": 7,
    "words": [
      "男丁",
      "男乒",
      "男仆"
    ],
    "sentence": "「男」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 276
  },
  {
    "char": "爱",
    "pinyin": "ài",
    "strokes": 10,
    "words": [
      "爱好",
      "爱称",
      "互爱"
    ],
    "sentence": "「爱」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 277
  },
  {
    "char": "虾",
    "pinyin": "xiā",
    "strokes": 9,
    "words": [
      "虾子",
      "虾蟆",
      "炸虾"
    ],
    "sentence": "「虾」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 278
  },
  {
    "char": "跑",
    "pinyin": "pǎo",
    "strokes": 12,
    "words": [
      "跑光",
      "跑动",
      "跑反"
    ],
    "sentence": "今天又学了新字「跑」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 279
  },
  {
    "char": "吹",
    "pinyin": "chuī",
    "strokes": 7,
    "words": [
      "吹台",
      "吹嘘",
      "吹弹"
    ],
    "sentence": "「吹」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 280
  },
  {
    "char": "地",
    "pinyin": "dì",
    "strokes": 6,
    "words": [
      "地丁",
      "地上",
      "地下"
    ],
    "sentence": "今天又学了新字「地」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 281
  },
  {
    "char": "快",
    "pinyin": "kuài",
    "strokes": 7,
    "words": [
      "快乐",
      "快信",
      "快当"
    ],
    "sentence": "今天又学了新字「快」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 282
  },
  {
    "char": "乐",
    "pinyin": "lè",
    "strokes": 5,
    "words": [
      "乐业",
      "乐事",
      "乐于"
    ],
    "sentence": "你能用「乐」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 283
  },
  {
    "char": "老",
    "pinyin": "lǎo",
    "strokes": 6,
    "words": [
      "老亲",
      "老伯",
      "老几"
    ],
    "sentence": "「老」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 284
  },
  {
    "char": "师",
    "pinyin": "shī",
    "strokes": 6,
    "words": [
      "师传",
      "师伯",
      "师哥"
    ],
    "sentence": "「师」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 285
  },
  {
    "char": "短",
    "pinyin": "duǎn",
    "strokes": 12,
    "words": [
      "短传",
      "短发",
      "短句"
    ],
    "sentence": "你能用「短」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 286
  },
  {
    "char": "对",
    "pinyin": "duì",
    "strokes": 5,
    "words": [
      "对内",
      "对劲",
      "对号"
    ],
    "sentence": "「对」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 287
  },
  {
    "char": "冷",
    "pinyin": "lěng",
    "strokes": 7,
    "words": [
      "冷嘲",
      "冷场",
      "冷杉"
    ],
    "sentence": "「冷」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 288
  },
  {
    "char": "淡",
    "pinyin": "dàn",
    "strokes": 11,
    "words": [
      "淡化",
      "淡泊",
      "淡红"
    ],
    "sentence": "「淡」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 289
  },
  {
    "char": "热",
    "pinyin": "rè",
    "strokes": 10,
    "words": [
      "热中",
      "热切",
      "热化"
    ],
    "sentence": "「热」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 290
  },
  {
    "char": "情",
    "pinyin": "qíng",
    "strokes": 11,
    "words": [
      "情节",
      "情调",
      "情趣"
    ],
    "sentence": "你能用「情」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 291
  },
  {
    "char": "拉",
    "pinyin": "lā",
    "strokes": 8,
    "words": [
      "拉丁",
      "拉丝",
      "拉人"
    ],
    "sentence": "「拉」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 292
  },
  {
    "char": "把",
    "pinyin": "bǎ",
    "strokes": 7,
    "words": [
      "把住",
      "把关",
      "把势"
    ],
    "sentence": "你能用「把」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 293
  },
  {
    "char": "给",
    "pinyin": "gěi",
    "strokes": 9,
    "words": [
      "给与",
      "给予",
      "给付"
    ],
    "sentence": "「给」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 294
  },
  {
    "char": "活",
    "pinyin": "huó",
    "strokes": 9,
    "words": [
      "活似",
      "活体",
      "活佛"
    ],
    "sentence": "你能用「活」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 295
  },
  {
    "char": "种",
    "pinyin": "zhǒng",
    "strokes": 9,
    "words": [
      "种下",
      "种别",
      "种地"
    ],
    "sentence": "今天又学了新字「种」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 296
  },
  {
    "char": "吃",
    "pinyin": "chī",
    "strokes": 6,
    "words": [
      "吃儿",
      "吃劲",
      "吃喝"
    ],
    "sentence": "今天又学了新字「吃」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 297
  },
  {
    "char": "练",
    "pinyin": "liàn",
    "strokes": 8,
    "words": [
      "练漂",
      "冬练",
      "合练"
    ],
    "sentence": "「练」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 298
  },
  {
    "char": "习",
    "pinyin": "xí",
    "strokes": 3,
    "words": [
      "习好",
      "习服",
      "习见"
    ],
    "sentence": "你能用「习」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 299
  },
  {
    "char": "苦",
    "pinyin": "kǔ",
    "strokes": 8,
    "words": [
      "苦参",
      "苦处",
      "苦夏"
    ],
    "sentence": "你能用「苦」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 300
  },
  {
    "char": "学",
    "pinyin": "xué",
    "strokes": 8,
    "words": [
      "学会",
      "学分",
      "学区"
    ],
    "sentence": "今天又学了新字「学」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 301
  },
  {
    "char": "非",
    "pinyin": "fēi",
    "strokes": 8,
    "words": [
      "非分",
      "非得",
      "非难"
    ],
    "sentence": "你能用「非」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 302
  },
  {
    "char": "常",
    "pinyin": "cháng",
    "strokes": 11,
    "words": [
      "常压",
      "常服",
      "不常"
    ],
    "sentence": "今天又学了新字「常」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 303
  },
  {
    "char": "问",
    "pinyin": "wèn",
    "strokes": 6,
    "words": [
      "问卜",
      "问及",
      "问句"
    ],
    "sentence": "「问」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 304
  },
  {
    "char": "间",
    "pinyin": "jiān",
    "strokes": 7,
    "words": [
      "间作",
      "间奏",
      "间或"
    ],
    "sentence": "今天又学了新字「间」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 305
  },
  {
    "char": "伙",
    "pinyin": "huǒ",
    "strokes": 6,
    "words": [
      "伙同",
      "伙夫",
      "伙食"
    ],
    "sentence": "今天又学了新字「伙」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 306
  },
  {
    "char": "伴",
    "pinyin": "bàn",
    "strokes": 7,
    "words": [
      "伴同",
      "伴读",
      "伴郎"
    ],
    "sentence": "今天又学了新字「伴」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 307
  },
  {
    "char": "共",
    "pinyin": "gòng",
    "strokes": 6,
    "words": [
      "共事",
      "共享",
      "共价"
    ],
    "sentence": "你能用「共」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 308
  },
  {
    "char": "汽",
    "pinyin": "qì",
    "strokes": 7,
    "words": [
      "汽化",
      "汽车",
      "汽化热"
    ],
    "sentence": "今天又学了新字「汽」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 309
  },
  {
    "char": "分",
    "pinyin": "fēn",
    "strokes": 4,
    "words": [
      "分为",
      "分享",
      "分会"
    ],
    "sentence": "你能用「分」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 310
  },
  {
    "char": "要",
    "pinyin": "yào",
    "strokes": 9,
    "words": [
      "要不",
      "要么",
      "要义"
    ],
    "sentence": "「要」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 311
  },
  {
    "char": "没",
    "pinyin": "méi",
    "strokes": 7,
    "words": [
      "没世",
      "没事",
      "没人"
    ],
    "sentence": "你能用「没」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 312
  },
  {
    "char": "位",
    "pinyin": "wèi",
    "strokes": 7,
    "words": [
      "位卑",
      "位能",
      "上位"
    ],
    "sentence": "你能用「位」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 313
  },
  {
    "char": "孩",
    "pinyin": "hái",
    "strokes": 9,
    "words": [
      "孩子",
      "孩提",
      "女孩"
    ],
    "sentence": "今天又学了新字「孩」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 314
  },
  {
    "char": "选",
    "pinyin": "xuǎn",
    "strokes": 9,
    "words": [
      "选任",
      "选区",
      "选发"
    ],
    "sentence": "今天又学了新字「选」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 315
  },
  {
    "char": "北",
    "pinyin": "běi",
    "strokes": 5,
    "words": [
      "北上",
      "北京",
      "北伐"
    ],
    "sentence": "「北」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 316
  },
  {
    "char": "南",
    "pinyin": "nán",
    "strokes": 9,
    "words": [
      "南中",
      "南乐",
      "南亚"
    ],
    "sentence": "「南」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 317
  },
  {
    "char": "江",
    "pinyin": "jiāng",
    "strokes": 6,
    "words": [
      "江北",
      "江南",
      "江宁"
    ],
    "sentence": "今天又学了新字「江」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 318
  },
  {
    "char": "湖",
    "pinyin": "hú",
    "strokes": 12,
    "words": [
      "湖光",
      "湖北",
      "湖南"
    ],
    "sentence": "你能用「湖」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 319
  },
  {
    "char": "秋",
    "pinyin": "qiū",
    "strokes": 9,
    "words": [
      "秋令",
      "秋凉",
      "秋分"
    ],
    "sentence": "今天又学了新字「秋」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 320
  },
  {
    "char": "只",
    "pinyin": "zhǐ",
    "strokes": 5,
    "words": [
      "只因",
      "只好",
      "只字"
    ],
    "sentence": "你能用「只」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 321
  },
  {
    "char": "星",
    "pinyin": "xīng",
    "strokes": 9,
    "words": [
      "星体",
      "星占",
      "星号"
    ],
    "sentence": "你能用「星」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 322
  },
  {
    "char": "雪",
    "pinyin": "xuě",
    "strokes": 11,
    "words": [
      "雪地",
      "雪夜",
      "雪天"
    ],
    "sentence": "今天又学了新字「雪」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 323
  },
  {
    "char": "帮",
    "pinyin": "bāng",
    "strokes": 9,
    "words": [
      "帮会",
      "帮佣",
      "帮助"
    ],
    "sentence": "「帮」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 324
  },
  {
    "char": "请",
    "pinyin": "qǐng",
    "strokes": 10,
    "words": [
      "请便",
      "请假",
      "请帖"
    ],
    "sentence": "今天又学了新字「请」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 325
  },
  {
    "char": "就",
    "pinyin": "jiù",
    "strokes": 12,
    "words": [
      "就任",
      "就便",
      "就合"
    ],
    "sentence": "「就」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 326
  },
  {
    "char": "球",
    "pinyin": "qiú",
    "strokes": 11,
    "words": [
      "球市",
      "球操",
      "球果"
    ],
    "sentence": "「球」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 327
  },
  {
    "char": "玩",
    "pinyin": "wán",
    "strokes": 8,
    "words": [
      "玩乐",
      "玩兴",
      "玩弄"
    ],
    "sentence": "「玩」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 328
  },
  {
    "char": "跳",
    "pinyin": "tiào",
    "strokes": 13,
    "words": [
      "跳井",
      "跳伞",
      "跳出"
    ],
    "sentence": "你能用「跳」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 329
  },
  {
    "char": "桃",
    "pinyin": "táo",
    "strokes": 10,
    "words": [
      "桃核",
      "桃红",
      "桃酥"
    ],
    "sentence": "今天又学了新字「桃」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 330
  },
  {
    "char": "树",
    "pinyin": "shù",
    "strokes": 9,
    "words": [
      "树冠",
      "树叶",
      "树干"
    ],
    "sentence": "你能用「树」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 331
  },
  {
    "char": "刚",
    "pinyin": "gāng",
    "strokes": 6,
    "words": [
      "刚体",
      "刚劲",
      "刚好"
    ],
    "sentence": "「刚」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 332
  },
  {
    "char": "兰",
    "pinyin": "lán",
    "strokes": 5,
    "words": [
      "兰若",
      "兰草",
      "兰陵王"
    ],
    "sentence": "今天又学了新字「兰」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 333
  },
  {
    "char": "各",
    "pinyin": "gè",
    "strokes": 6,
    "words": [
      "各个",
      "各人",
      "各位"
    ],
    "sentence": "今天又学了新字「各」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 334
  },
  {
    "char": "坐",
    "pinyin": "zuò",
    "strokes": 7,
    "words": [
      "坐上",
      "坐化",
      "坐台"
    ],
    "sentence": "你能用「坐」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 335
  },
  {
    "char": "座",
    "pinyin": "zuò",
    "strokes": 10,
    "words": [
      "座号",
      "座落",
      "上座"
    ],
    "sentence": "你能用「座」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 336
  },
  {
    "char": "带",
    "pinyin": "dài",
    "strokes": 9,
    "words": [
      "带劲",
      "带头",
      "带状"
    ],
    "sentence": "「带」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 337
  },
  {
    "char": "急",
    "pinyin": "jí",
    "strokes": 9,
    "words": [
      "急切",
      "急要",
      "急转"
    ],
    "sentence": "今天又学了新字「急」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 338
  },
  {
    "char": "名",
    "pinyin": "míng",
    "strokes": 6,
    "words": [
      "名分",
      "名刹",
      "名单"
    ],
    "sentence": "你能用「名」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 339
  },
  {
    "char": "发",
    "pinyin": "fā",
    "strokes": 5,
    "words": [
      "发丧",
      "发乳",
      "发亮"
    ],
    "sentence": "你能用「发」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 340
  },
  {
    "char": "成",
    "pinyin": "chéng",
    "strokes": 6,
    "words": [
      "成丁",
      "成为",
      "成亲"
    ],
    "sentence": "今天又学了新字「成」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 341
  },
  {
    "char": "晚",
    "pinyin": "wǎn",
    "strokes": 11,
    "words": [
      "晚班",
      "头晚",
      "当晚"
    ],
    "sentence": "「晚」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 342
  },
  {
    "char": "动",
    "pinyin": "dòng",
    "strokes": 6,
    "words": [
      "动员",
      "动弹",
      "动窝"
    ],
    "sentence": "你能用「动」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 343
  },
  {
    "char": "新",
    "pinyin": "xīn",
    "strokes": 13,
    "words": [
      "新丁",
      "新乐",
      "新任"
    ],
    "sentence": "今天又学了新字「新」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 344
  },
  {
    "char": "有",
    "pinyin": "yǒu",
    "strokes": 6,
    "words": [
      "有为",
      "有事",
      "有些"
    ],
    "sentence": "你能用「有」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 345
  },
  {
    "char": "在",
    "pinyin": "zài",
    "strokes": 6,
    "words": [
      "在任",
      "在内",
      "在册"
    ],
    "sentence": "你能用「在」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 346
  },
  {
    "char": "什",
    "pinyin": "shén",
    "strokes": 4,
    "words": [
      "什么",
      "什物",
      "什锦"
    ],
    "sentence": "「什」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 347
  },
  {
    "char": "么",
    "pinyin": "me",
    "strokes": 3,
    "words": [
      "什么",
      "多么",
      "干么"
    ],
    "sentence": "你能用「么」组词吗？",
    "grade": "一年级下册",
    "level": 2,
    "id": 348
  },
  {
    "char": "变",
    "pinyin": "biàn",
    "strokes": 8,
    "words": [
      "变价",
      "变体",
      "变化"
    ],
    "sentence": "今天又学了新字「变」。",
    "grade": "一年级下册",
    "level": 2,
    "id": 349
  },
  {
    "char": "条",
    "pinyin": "tiáo",
    "strokes": 7,
    "words": [
      "条令",
      "条件",
      "条例"
    ],
    "sentence": "「条」字写起来很简单。",
    "grade": "一年级下册",
    "level": 2,
    "id": 350
  },
  {
    "char": "宜",
    "pinyin": "yí",
    "strokes": 8,
    "words": [
      "便宜",
      "适宜",
      "宜人"
    ],
    "sentence": "我认识了「宜」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 351
  },
  {
    "char": "实",
    "pinyin": "shí",
    "strokes": 8,
    "words": [
      "实在",
      "真实",
      "实际"
    ],
    "sentence": "我认识了「实」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 352
  },
  {
    "char": "色",
    "pinyin": "sè",
    "strokes": 6,
    "words": [
      "颜色",
      "色彩",
      "红色"
    ],
    "sentence": "把「色」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 353
  },
  {
    "char": "华",
    "pinyin": "huá",
    "strokes": 6,
    "words": [
      "中华",
      "华丽",
      "华美"
    ],
    "sentence": "把「华」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 354
  },
  {
    "char": "谷",
    "pinyin": "gǔ",
    "strokes": 7,
    "words": [
      "山谷",
      "谷物",
      "稻谷"
    ],
    "sentence": "我认识了「谷」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 355
  },
  {
    "char": "金",
    "pinyin": "jīn",
    "strokes": 8,
    "words": [
      "金色",
      "金子",
      "金牌"
    ],
    "sentence": "老师教我们认识「金」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 356
  },
  {
    "char": "尽",
    "pinyin": "jǐn",
    "strokes": 6,
    "words": [
      "尽力",
      "尽头",
      "尽管"
    ],
    "sentence": "我认识了「尽」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 357
  },
  {
    "char": "层",
    "pinyin": "céng",
    "strokes": 7,
    "words": [
      "云层",
      "层次",
      "楼层"
    ],
    "sentence": "我认识了「层」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 358
  },
  {
    "char": "丰",
    "pinyin": "fēng",
    "strokes": 4,
    "words": [
      "丰收",
      "丰富",
      "丰盛"
    ],
    "sentence": "把「丰」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 359
  },
  {
    "char": "壮",
    "pinyin": "zhuàng",
    "strokes": 6,
    "words": [
      "壮丽",
      "强壮",
      "壮观"
    ],
    "sentence": "把「壮」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 360
  },
  {
    "char": "波",
    "pinyin": "bō",
    "strokes": 8,
    "words": [
      "波浪",
      "风波",
      "波纹"
    ],
    "sentence": "老师教我们认识「波」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 361
  },
  {
    "char": "浪",
    "pinyin": "làng",
    "strokes": 10,
    "words": [
      "浪花",
      "海浪",
      "波浪"
    ],
    "sentence": "我认识了「浪」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 362
  },
  {
    "char": "灯",
    "pinyin": "dēng",
    "strokes": 6,
    "words": [
      "灯光",
      "路灯",
      "灯笼"
    ],
    "sentence": "我认识了「灯」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 363
  },
  {
    "char": "作",
    "pinyin": "zuò",
    "strokes": 7,
    "words": [
      "作业",
      "工作",
      "作文"
    ],
    "sentence": "我认识了「作」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 364
  },
  {
    "char": "字",
    "pinyin": "zì",
    "strokes": 6,
    "words": [
      "汉字",
      "文字",
      "写字"
    ],
    "sentence": "老师教我们认识「字」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 365
  },
  {
    "char": "苹",
    "pinyin": "píng",
    "strokes": 8,
    "words": [
      "苹果",
      "苹果绿",
      "剥苹果"
    ],
    "sentence": "把「苹」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 366
  },
  {
    "char": "丽",
    "pinyin": "lì",
    "strokes": 7,
    "words": [
      "美丽",
      "华丽",
      "壮丽"
    ],
    "sentence": "老师教我们认识「丽」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 367
  },
  {
    "char": "劳",
    "pinyin": "láo",
    "strokes": 7,
    "words": [
      "劳动",
      "勤劳",
      "功劳"
    ],
    "sentence": "我认识了「劳」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 368
  },
  {
    "char": "尤",
    "pinyin": "yóu",
    "strokes": 4,
    "words": [
      "尤其",
      "尤甚",
      "尤云殢雨"
    ],
    "sentence": "老师教我们认识「尤」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 369
  },
  {
    "char": "其",
    "pinyin": "qí",
    "strokes": 8,
    "words": [
      "其中",
      "其人",
      "其他"
    ],
    "sentence": "把「其」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 370
  },
  {
    "char": "区",
    "pinyin": "qū",
    "strokes": 4,
    "words": [
      "区内",
      "区分",
      "区划"
    ],
    "sentence": "把「区」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 371
  },
  {
    "char": "巨",
    "pinyin": "jù",
    "strokes": 4,
    "words": [
      "巨大",
      "巨头",
      "巨奖"
    ],
    "sentence": "把「巨」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 372
  },
  {
    "char": "它",
    "pinyin": "tā",
    "strokes": 5,
    "words": [
      "其它",
      "它山之石"
    ],
    "sentence": "我认识了「它」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 373
  },
  {
    "char": "安",
    "pinyin": "ān",
    "strokes": 6,
    "words": [
      "安上",
      "安乐",
      "安分"
    ],
    "sentence": "把「安」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 374
  },
  {
    "char": "块",
    "pinyin": "kuài",
    "strokes": 7,
    "words": [
      "块体",
      "块头",
      "地块"
    ],
    "sentence": "老师教我们认识「块」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 375
  },
  {
    "char": "站",
    "pinyin": "zhàn",
    "strokes": 10,
    "words": [
      "站台",
      "站相",
      "站票"
    ],
    "sentence": "老师教我们认识「站」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 376
  },
  {
    "char": "甲",
    "pinyin": "jiǎ",
    "strokes": 5,
    "words": [
      "甲壳",
      "甲骨",
      "六甲"
    ],
    "sentence": "我认识了「甲」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 377
  },
  {
    "char": "豆",
    "pinyin": "dòu",
    "strokes": 7,
    "words": [
      "豆沙",
      "豆泡",
      "豆浆"
    ],
    "sentence": "我认识了「豆」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 378
  },
  {
    "char": "识",
    "pinyin": "shí",
    "strokes": 7,
    "words": [
      "识别",
      "识字",
      "识才"
    ],
    "sentence": "老师教我们认识「识」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 379
  },
  {
    "char": "纷",
    "pinyin": "fēn",
    "strokes": 7,
    "words": [
      "纷繁",
      "纷红骇绿",
      "纷纭杂沓"
    ],
    "sentence": "老师教我们认识「纷」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 380
  },
  {
    "char": "经",
    "pinyin": "jīng",
    "strokes": 8,
    "words": [
      "经传",
      "经卷",
      "经幢"
    ],
    "sentence": "老师教我们认识「经」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 381
  },
  {
    "char": "如",
    "pinyin": "rú",
    "strokes": 6,
    "words": [
      "如上",
      "如何",
      "如其"
    ],
    "sentence": "把「如」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 382
  },
  {
    "char": "好",
    "pinyin": "hǎo",
    "strokes": 6,
    "words": [
      "好不",
      "好丑",
      "好久"
    ],
    "sentence": "我认识了「好」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 383
  },
  {
    "char": "娃",
    "pinyin": "wá",
    "strokes": 9,
    "words": [
      "娃娃亲",
      "娃娃亲",
      "放牛娃"
    ],
    "sentence": "我认识了「娃」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 384
  },
  {
    "char": "洼",
    "pinyin": "wā",
    "strokes": 9,
    "words": [
      "洼地",
      "凹洼"
    ],
    "sentence": "把「洼」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 385
  },
  {
    "char": "于",
    "pinyin": "yú",
    "strokes": 3,
    "words": [
      "于思",
      "乐于",
      "亚于"
    ],
    "sentence": "把「于」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 386
  },
  {
    "char": "首",
    "pinyin": "shǒu",
    "strokes": 9,
    "words": [
      "首倡",
      "首创",
      "首发"
    ],
    "sentence": "老师教我们认识「首」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 387
  },
  {
    "char": "枝",
    "pinyin": "zhī",
    "strokes": 8,
    "words": [
      "枝丫",
      "枝叶",
      "枝头"
    ],
    "sentence": "老师教我们认识「枝」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 388
  },
  {
    "char": "枫",
    "pinyin": "fēng",
    "strokes": 8,
    "words": [
      "枫叶",
      "学枫",
      "大枫"
    ],
    "sentence": "我认识了「枫」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 389
  },
  {
    "char": "记",
    "pinyin": "jì",
    "strokes": 5,
    "words": [
      "记分",
      "记号"
    ],
    "sentence": "把「记」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 390
  },
  {
    "char": "刘",
    "pinyin": "liú",
    "strokes": 6,
    "words": [
      "刘海儿",
      "刘毅答诏",
      "刘郎前度"
    ],
    "sentence": "老师教我们认识「刘」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 391
  },
  {
    "char": "胡",
    "pinyin": "hú",
    "strokes": 9,
    "words": [
      "胡同",
      "胡杨",
      "胡说"
    ],
    "sentence": "我认识了「胡」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 392
  },
  {
    "char": "戏",
    "pinyin": "xì",
    "strokes": 6,
    "words": [
      "戏侮",
      "戏剧",
      "戏单"
    ],
    "sentence": "老师教我们认识「戏」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 393
  },
  {
    "char": "棋",
    "pinyin": "qí",
    "strokes": 12,
    "words": [
      "棋类",
      "棋苑",
      "棋风"
    ],
    "sentence": "老师教我们认识「棋」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 394
  },
  {
    "char": "钢",
    "pinyin": "gāng",
    "strokes": 9,
    "words": [
      "钢丝",
      "钢刀",
      "钢包"
    ],
    "sentence": "把「钢」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 395
  },
  {
    "char": "观",
    "pinyin": "guān",
    "strokes": 6,
    "words": [
      "观众",
      "观光",
      "观察"
    ],
    "sentence": "我认识了「观」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 396
  },
  {
    "char": "弹",
    "pinyin": "dàn",
    "strokes": 11,
    "words": [
      "弹丸",
      "弹力",
      "弹劾"
    ],
    "sentence": "把「弹」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 397
  },
  {
    "char": "琴",
    "pinyin": "qín",
    "strokes": 12,
    "words": [
      "琴声",
      "琴弓",
      "琴曲"
    ],
    "sentence": "我认识了「琴」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 398
  },
  {
    "char": "养",
    "pinyin": "yǎng",
    "strokes": 9,
    "words": [
      "养分",
      "养女",
      "养家"
    ],
    "sentence": "我认识了「养」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 399
  },
  {
    "char": "休",
    "pinyin": "xiū",
    "strokes": 6,
    "words": [
      "休业",
      "休书",
      "休会"
    ],
    "sentence": "把「休」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 400
  },
  {
    "char": "伸",
    "pinyin": "shēn",
    "strokes": 7,
    "words": [
      "伸头",
      "伸曲",
      "伸缩"
    ],
    "sentence": "老师教我们认识「伸」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 401
  },
  {
    "char": "甜",
    "pinyin": "tián",
    "strokes": 11,
    "words": [
      "甜椒",
      "甜味儿",
      "甜面酱"
    ],
    "sentence": "老师教我们认识「甜」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 402
  },
  {
    "char": "歌",
    "pinyin": "gē",
    "strokes": 14,
    "words": [
      "歌会",
      "歌女",
      "歌带"
    ],
    "sentence": "我认识了「歌」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 403
  },
  {
    "char": "院",
    "pinyin": "yuàn",
    "strokes": 9,
    "words": [
      "院子",
      "院落",
      "院长"
    ],
    "sentence": "老师教我们认识「院」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 404
  },
  {
    "char": "除",
    "pinyin": "chú",
    "strokes": 9,
    "words": [
      "除丧",
      "除了",
      "除号"
    ],
    "sentence": "我认识了「除」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 405
  },
  {
    "char": "息",
    "pinyin": "xī",
    "strokes": 10,
    "words": [
      "息率",
      "不息",
      "休息"
    ],
    "sentence": "老师教我们认识「息」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 406
  },
  {
    "char": "您",
    "pinyin": "nín",
    "strokes": 11,
    "words": [
      "学您",
      "大您",
      "小您"
    ],
    "sentence": "老师教我们认识「您」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 407
  },
  {
    "char": "牵",
    "pinyin": "qiān",
    "strokes": 9,
    "words": [
      "牵头",
      "牵强",
      "牵拉"
    ],
    "sentence": "我认识了「牵」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 408
  },
  {
    "char": "困",
    "pinyin": "kùn",
    "strokes": 7,
    "words": [
      "困处",
      "困觉",
      "困难"
    ],
    "sentence": "把「困」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 409
  },
  {
    "char": "员",
    "pinyin": "yuán",
    "strokes": 7,
    "words": [
      "员司",
      "员外",
      "员工"
    ],
    "sentence": "我认识了「员」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 410
  },
  {
    "char": "青",
    "pinyin": "qīng",
    "strokes": 8,
    "words": [
      "青下",
      "青石",
      "青砖"
    ],
    "sentence": "老师教我们认识「青」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 411
  },
  {
    "char": "宁",
    "pinyin": "níng",
    "strokes": 5,
    "words": [
      "宁南",
      "宁可",
      "宁安"
    ],
    "sentence": "我认识了「宁」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 412
  },
  {
    "char": "室",
    "pinyin": "shì",
    "strokes": 9,
    "words": [
      "室内",
      "室女",
      "侧室"
    ],
    "sentence": "我认识了「室」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 413
  },
  {
    "char": "样",
    "pinyin": "yàng",
    "strokes": 10,
    "words": [
      "样带",
      "样片",
      "几样"
    ],
    "sentence": "把「样」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 414
  },
  {
    "char": "校",
    "pinyin": "xiào",
    "strokes": 10,
    "words": [
      "校准",
      "校刊",
      "校务"
    ],
    "sentence": "我认识了「校」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 415
  },
  {
    "char": "切",
    "pinyin": "qiè",
    "strokes": 4,
    "words": [
      "切不",
      "切中",
      "切入"
    ],
    "sentence": "把「切」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 416
  },
  {
    "char": "教",
    "pinyin": "jiào",
    "strokes": 11,
    "words": [
      "教书",
      "教旨",
      "教民"
    ],
    "sentence": "老师教我们认识「教」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 417
  },
  {
    "char": "响",
    "pinyin": "xiǎng",
    "strokes": 9,
    "words": [
      "响头",
      "响应",
      "响度"
    ],
    "sentence": "把「响」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 418
  },
  {
    "char": "班",
    "pinyin": "bān",
    "strokes": 10,
    "words": [
      "班期",
      "班禅",
      "班车"
    ],
    "sentence": "老师教我们认识「班」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 419
  },
  {
    "char": "欠",
    "pinyin": "qiàn",
    "strokes": 4,
    "words": [
      "欠条",
      "欠火",
      "倒欠"
    ],
    "sentence": "我认识了「欠」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 420
  },
  {
    "char": "元",
    "pinyin": "yuán",
    "strokes": 4,
    "words": [
      "元曲",
      "元朝",
      "上元"
    ],
    "sentence": "我认识了「元」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 421
  },
  {
    "char": "包",
    "pinyin": "bāo",
    "strokes": 5,
    "words": [
      "包乘",
      "包修",
      "包囊"
    ],
    "sentence": "我认识了「包」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 422
  },
  {
    "char": "钟",
    "pinyin": "zhōng",
    "strokes": 9,
    "words": [
      "钟头",
      "丧钟",
      "台钟"
    ],
    "sentence": "我认识了「钟」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 423
  },
  {
    "char": "叹",
    "pinyin": "tàn",
    "strokes": 5,
    "words": [
      "叹服",
      "兴叹",
      "可叹"
    ],
    "sentence": "老师教我们认识「叹」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 424
  },
  {
    "char": "哈",
    "pinyin": "hā",
    "strokes": 9,
    "words": [
      "哈哈",
      "哈哈",
      "哈喇"
    ],
    "sentence": "老师教我们认识「哈」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 425
  },
  {
    "char": "迟",
    "pinyin": "chí",
    "strokes": 7,
    "words": [
      "迟疑",
      "尉迟",
      "迟回观望"
    ],
    "sentence": "把「迟」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 426
  },
  {
    "char": "闹",
    "pinyin": "nào",
    "strokes": 8,
    "words": [
      "闹哄",
      "闹嚷",
      "闹场"
    ],
    "sentence": "老师教我们认识「闹」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 427
  },
  {
    "char": "及",
    "pinyin": "jí",
    "strokes": 3,
    "words": [
      "不及",
      "及时雨",
      "念及"
    ],
    "sentence": "把「及」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 428
  },
  {
    "char": "身",
    "pinyin": "shēn",
    "strokes": 7,
    "words": [
      "身上",
      "身亡",
      "身价"
    ],
    "sentence": "把「身」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 429
  },
  {
    "char": "仔",
    "pinyin": "zǎi",
    "strokes": 5,
    "words": [
      "仔密",
      "仔猪",
      "仔畜"
    ],
    "sentence": "我认识了「仔」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 430
  },
  {
    "char": "细",
    "pinyin": "xì",
    "strokes": 8,
    "words": [
      "细别",
      "细发",
      "细挑"
    ],
    "sentence": "老师教我们认识「细」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 431
  },
  {
    "char": "次",
    "pinyin": "cì",
    "strokes": 6,
    "words": [
      "次数",
      "次要",
      "次长"
    ],
    "sentence": "老师教我们认识「次」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 432
  },
  {
    "char": "外",
    "pinyin": "wài",
    "strokes": 5,
    "words": [
      "外亲",
      "外传",
      "外侧"
    ],
    "sentence": "老师教我们认识「外」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 433
  },
  {
    "char": "计",
    "pinyin": "jì",
    "strokes": 4,
    "words": [
      "计划",
      "计息",
      "计税"
    ],
    "sentence": "我认识了「计」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 434
  },
  {
    "char": "怦",
    "pinyin": "pēng",
    "strokes": 8,
    "words": [
      "学怦",
      "大怦",
      "小怦"
    ],
    "sentence": "老师教我们认识「怦」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 435
  },
  {
    "char": "礼",
    "pinyin": "lǐ",
    "strokes": 5,
    "words": [
      "礼乐",
      "礼佛",
      "礼券"
    ],
    "sentence": "把「礼」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 436
  },
  {
    "char": "加",
    "pinyin": "jiā",
    "strokes": 5,
    "words": [
      "加价",
      "加刑",
      "加劲"
    ],
    "sentence": "我认识了「加」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 437
  },
  {
    "char": "夕",
    "pinyin": "xī",
    "strokes": 3,
    "words": [
      "夕阳红",
      "朝夕",
      "夕寐宵兴"
    ],
    "sentence": "把「夕」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 438
  },
  {
    "char": "与",
    "pinyin": "yǔ",
    "strokes": 3,
    "words": [
      "与会",
      "与共",
      "与其"
    ],
    "sentence": "我认识了「与」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 439
  },
  {
    "char": "川",
    "pinyin": "chuān",
    "strokes": 3,
    "words": [
      "南川",
      "长川",
      "川壅必溃"
    ],
    "sentence": "把「川」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 440
  },
  {
    "char": "州",
    "pinyin": "zhōu",
    "strokes": 6,
    "words": [
      "州长",
      "台州",
      "并州"
    ],
    "sentence": "老师教我们认识「州」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 441
  },
  {
    "char": "台",
    "pinyin": "tái",
    "strokes": 5,
    "words": [
      "台下",
      "台中",
      "台北"
    ],
    "sentence": "我认识了「台」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 442
  },
  {
    "char": "争",
    "pinyin": "zhēng",
    "strokes": 6,
    "words": [
      "争吵",
      "争强",
      "争得"
    ],
    "sentence": "我认识了「争」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 443
  },
  {
    "char": "民",
    "pinyin": "mín",
    "strokes": 5,
    "words": [
      "民乐",
      "民夫",
      "民家"
    ],
    "sentence": "我认识了「民」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 444
  },
  {
    "char": "族",
    "pinyin": "zú",
    "strokes": 11,
    "words": [
      "亲族",
      "侗族",
      "华族"
    ],
    "sentence": "老师教我们认识「族」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 445
  },
  {
    "char": "亿",
    "pinyin": "yì",
    "strokes": 3,
    "words": [
      "亿万",
      "亿万斯年",
      "亿辛万苦"
    ],
    "sentence": "把「亿」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 446
  },
  {
    "char": "洁",
    "pinyin": "jié",
    "strokes": 9,
    "words": [
      "洁净",
      "洁肤",
      "不洁"
    ],
    "sentence": "把「洁」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 447
  },
  {
    "char": "欢",
    "pinyin": "huān",
    "strokes": 6,
    "words": [
      "欢乐",
      "欢场",
      "欢好"
    ],
    "sentence": "老师教我们认识「欢」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 448
  },
  {
    "char": "祖",
    "pinyin": "zǔ",
    "strokes": 9,
    "words": [
      "祖上",
      "祖传",
      "祖孙"
    ],
    "sentence": "老师教我们认识「祖」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 449
  },
  {
    "char": "旗",
    "pinyin": "qí",
    "strokes": 14,
    "words": [
      "红旗",
      "国旗",
      "彩旗"
    ],
    "sentence": "我认识了「旗」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 450
  },
  {
    "char": "帜",
    "pinyin": "zhì",
    "strokes": 8,
    "words": [
      "别树一帜",
      "旗帜鲜明"
    ],
    "sentence": "我认识了「帜」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 451
  },
  {
    "char": "庆",
    "pinyin": "qìng",
    "strokes": 6,
    "words": [
      "庆祝",
      "国庆",
      "欢庆"
    ],
    "sentence": "老师教我们认识「庆」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 452
  },
  {
    "char": "曲",
    "pinyin": "qū",
    "strokes": 6,
    "words": [
      "歌曲",
      "乐曲",
      "曲子"
    ],
    "sentence": "把「曲」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 453
  },
  {
    "char": "央",
    "pinyin": "yāng",
    "strokes": 5,
    "words": [
      "中央",
      "央行"
    ],
    "sentence": "老师教我们认识「央」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 454
  },
  {
    "char": "交",
    "pinyin": "jiāo",
    "strokes": 6,
    "words": [
      "交通",
      "交换",
      "学习交流"
    ],
    "sentence": "把「交」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 455
  },
  {
    "char": "市",
    "pinyin": "shì",
    "strokes": 5,
    "words": [
      "城市",
      "市场",
      "市长"
    ],
    "sentence": "老师教我们认识「市」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 456
  },
  {
    "char": "旁",
    "pinyin": "páng",
    "strokes": 10,
    "words": [
      "旁边",
      "身旁",
      "两旁"
    ],
    "sentence": "老师教我们认识「旁」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 457
  },
  {
    "char": "优",
    "pinyin": "yōu",
    "strokes": 6,
    "words": [
      "优秀",
      "优美",
      "优点"
    ],
    "sentence": "老师教我们认识「优」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 458
  },
  {
    "char": "阴",
    "pinyin": "yīn",
    "strokes": 6,
    "words": [
      "阴凉",
      "阴囊",
      "阴干"
    ],
    "sentence": "我认识了「阴」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 459
  },
  {
    "char": "坛",
    "pinyin": "tán",
    "strokes": 7,
    "words": [
      "坛场",
      "坛子",
      "乐坛"
    ],
    "sentence": "老师教我们认识「坛」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 460
  },
  {
    "char": "城",
    "pinyin": "chéng",
    "strokes": 9,
    "words": [
      "城区",
      "城垛",
      "城堡"
    ],
    "sentence": "把「城」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 461
  },
  {
    "char": "国",
    "pinyin": "guó",
    "strokes": 8,
    "words": [
      "国丧",
      "国乐"
    ],
    "sentence": "我认识了「国」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 462
  },
  {
    "char": "图",
    "pinyin": "tú",
    "strokes": 8,
    "words": [
      "图卷",
      "图景",
      "图片"
    ],
    "sentence": "老师教我们认识「图」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 463
  },
  {
    "char": "申",
    "pinyin": "shēn",
    "strokes": 5,
    "words": [
      "申令",
      "申曲",
      "申论"
    ],
    "sentence": "老师教我们认识「申」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 464
  },
  {
    "char": "匹",
    "pinyin": "pǐ",
    "strokes": 4,
    "words": [
      "匹夫",
      "一匹",
      "匹夫之勇"
    ],
    "sentence": "把「匹」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 465
  },
  {
    "char": "互",
    "pinyin": "hù",
    "strokes": 4,
    "words": [
      "互相",
      "相互",
      "互助"
    ],
    "sentence": "我认识了「互」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 466
  },
  {
    "char": "京",
    "pinyin": "jīng",
    "strokes": 8,
    "words": [
      "北京",
      "京城"
    ],
    "sentence": "把「京」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 467
  },
  {
    "char": "泪",
    "pinyin": "lèi",
    "strokes": 8,
    "words": [
      "眼泪",
      "泪水"
    ],
    "sentence": "我认识了「泪」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 468
  },
  {
    "char": "洋",
    "pinyin": "yáng",
    "strokes": 9,
    "words": [
      "海洋",
      "大洋",
      "太平洋"
    ],
    "sentence": "我认识了「洋」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 469
  },
  {
    "char": "拥",
    "pinyin": "yōng",
    "strokes": 8,
    "words": [
      "拥抱",
      "拥护",
      "拥有"
    ],
    "sentence": "老师教我们认识「拥」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 470
  },
  {
    "char": "抱",
    "pinyin": "bào",
    "strokes": 8,
    "words": [
      "拥抱",
      "抱着",
      "怀抱"
    ],
    "sentence": "把「抱」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 471
  },
  {
    "char": "相",
    "pinyin": "xiāng",
    "strokes": 9,
    "words": [
      "相与",
      "相中",
      "相乘"
    ],
    "sentence": "老师教我们认识「相」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 472
  },
  {
    "char": "扬",
    "pinyin": "yáng",
    "strokes": 6,
    "words": [
      "飞扬",
      "表扬",
      "飘扬"
    ],
    "sentence": "我认识了「扬」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 473
  },
  {
    "char": "讲",
    "pinyin": "jiǎng",
    "strokes": 6,
    "words": [
      "讲话",
      "演讲",
      "讲课"
    ],
    "sentence": "把「讲」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 474
  },
  {
    "char": "打",
    "pinyin": "dǎ",
    "strokes": 5,
    "words": [
      "打球",
      "打开",
      "打工"
    ],
    "sentence": "老师教我们认识「打」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 475
  },
  {
    "char": "指",
    "pinyin": "zhǐ",
    "strokes": 9,
    "words": [
      "手指",
      "指向",
      "指挥"
    ],
    "sentence": "我认识了「指」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 476
  },
  {
    "char": "接",
    "pinyin": "jiē",
    "strokes": 11,
    "words": [
      "接受",
      "接住",
      "连接"
    ],
    "sentence": "老师教我们认识「接」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 477
  },
  {
    "char": "惊",
    "pinyin": "jīng",
    "strokes": 11,
    "words": [
      "惊倒",
      "惊觉",
      "惊跳"
    ],
    "sentence": "把「惊」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 478
  },
  {
    "char": "故",
    "pinyin": "gù",
    "strokes": 9,
    "words": [
      "故事",
      "故乡",
      "故意"
    ],
    "sentence": "把「故」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 479
  },
  {
    "char": "侯",
    "pinyin": "hóu",
    "strokes": 9,
    "words": [
      "侯爵",
      "侯门",
      "伺侯"
    ],
    "sentence": "我认识了「侯」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 480
  },
  {
    "char": "奇",
    "pinyin": "qí",
    "strokes": 8,
    "words": [
      "奇怪",
      "好奇",
      "惊奇"
    ],
    "sentence": "我认识了「奇」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 481
  },
  {
    "char": "寸",
    "pinyin": "cùn",
    "strokes": 3,
    "words": [
      "尺寸",
      "寸步"
    ],
    "sentence": "把「寸」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 482
  },
  {
    "char": "落",
    "pinyin": "luò",
    "strokes": 12,
    "words": [
      "落下",
      "落了",
      "落价"
    ],
    "sentence": "把「落」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 483
  },
  {
    "char": "补",
    "pinyin": "bǔ",
    "strokes": 7,
    "words": [
      "补习",
      "补充",
      "弥补"
    ],
    "sentence": "我认识了「补」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 484
  },
  {
    "char": "拔",
    "pinyin": "bá",
    "strokes": 8,
    "words": [
      "拔河",
      "选拔",
      "拔草"
    ],
    "sentence": "把「拔」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 485
  },
  {
    "char": "功",
    "pinyin": "gōng",
    "strokes": 5,
    "words": [
      "功劳",
      "成功",
      "功夫"
    ],
    "sentence": "我认识了「功」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 486
  },
  {
    "char": "助",
    "pinyin": "zhù",
    "strokes": 7,
    "words": [
      "帮助",
      "助手",
      "助人"
    ],
    "sentence": "把「助」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 487
  },
  {
    "char": "取",
    "pinyin": "qǔ",
    "strokes": 8,
    "words": [
      "取得",
      "争取",
      "选取"
    ],
    "sentence": "把「取」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 488
  },
  {
    "char": "所",
    "pinyin": "suǒ",
    "strokes": 8,
    "words": [
      "所属",
      "所得",
      "所思"
    ],
    "sentence": "老师教我们认识「所」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 489
  },
  {
    "char": "信",
    "pinyin": "xìn",
    "strokes": 9,
    "words": [
      "相信",
      "写信",
      "信心"
    ],
    "sentence": "我认识了「信」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 490
  },
  {
    "char": "沿",
    "pinyin": "yán",
    "strokes": 8,
    "words": [
      "沿着",
      "沿途",
      "边沿"
    ],
    "sentence": "我认识了「沿」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 491
  },
  {
    "char": "拾",
    "pinyin": "shí",
    "strokes": 9,
    "words": [
      "拾取",
      "收拾"
    ],
    "sentence": "把「拾」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 492
  },
  {
    "char": "际",
    "pinyin": "jì",
    "strokes": 7,
    "words": [
      "国际",
      "实际",
      "交际"
    ],
    "sentence": "我认识了「际」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 493
  },
  {
    "char": "蛙",
    "pinyin": "wā",
    "strokes": 12,
    "words": [
      "雨蛙",
      "蛙蟆胜负",
      "井底之蛙"
    ],
    "sentence": "把「蛙」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 494
  },
  {
    "char": "错",
    "pinyin": "cuò",
    "strokes": 13,
    "words": [
      "错误",
      "不错",
      "错过"
    ],
    "sentence": "我认识了「错」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 495
  },
  {
    "char": "答",
    "pinyin": "dá",
    "strokes": 12,
    "words": [
      "回答",
      "答案",
      "解答"
    ],
    "sentence": "把「答」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 496
  },
  {
    "char": "还",
    "pinyin": "hái",
    "strokes": 7,
    "words": [
      "还有",
      "还是",
      "还给"
    ],
    "sentence": "把「还」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 497
  },
  {
    "char": "言",
    "pinyin": "yán",
    "strokes": 7,
    "words": [
      "语言",
      "发言",
      "名言"
    ],
    "sentence": "把「言」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 498
  },
  {
    "char": "每",
    "pinyin": "měi",
    "strokes": 7,
    "words": [
      "每天",
      "每个",
      "每年"
    ],
    "sentence": "把「每」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 499
  },
  {
    "char": "治",
    "pinyin": "zhì",
    "strokes": 8,
    "words": [
      "治理",
      "政治",
      "治疗"
    ],
    "sentence": "老师教我们认识「治」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 500
  },
  {
    "char": "棵",
    "pinyin": "kē",
    "strokes": 12,
    "words": [
      "学棵",
      "大棵",
      "小棵"
    ],
    "sentence": "我认识了「棵」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 501
  },
  {
    "char": "挂",
    "pinyin": "guà",
    "strokes": 9,
    "words": [
      "挂着",
      "牵挂",
      "挂念"
    ],
    "sentence": "我认识了「挂」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 502
  },
  {
    "char": "哇",
    "pinyin": "wa",
    "strokes": 9,
    "words": [
      "哇哇",
      "哇哇",
      "哇啦"
    ],
    "sentence": "我认识了「哇」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 503
  },
  {
    "char": "怪",
    "pinyin": "guài",
    "strokes": 8,
    "words": [
      "怪才",
      "怪相",
      "怪石"
    ],
    "sentence": "把「怪」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 504
  },
  {
    "char": "慢",
    "pinyin": "màn",
    "strokes": 14,
    "words": [
      "慢化",
      "慢坡",
      "慢待"
    ],
    "sentence": "我认识了「慢」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 505
  },
  {
    "char": "怎",
    "pinyin": "zěn",
    "strokes": 9,
    "words": [
      "怎么",
      "怎地",
      "怎的"
    ],
    "sentence": "我认识了「怎」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 506
  },
  {
    "char": "思",
    "pinyin": "sī",
    "strokes": 9,
    "words": [
      "思亲",
      "思凡",
      "思古"
    ],
    "sentence": "老师教我们认识「思」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 507
  },
  {
    "char": "穿",
    "pinyin": "chuān",
    "strokes": 9,
    "words": [
      "穿刺",
      "穿着",
      "穿行"
    ],
    "sentence": "把「穿」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 508
  },
  {
    "char": "弯",
    "pinyin": "wān",
    "strokes": 9,
    "words": [
      "弯头",
      "弯度",
      "弯曲"
    ],
    "sentence": "我认识了「弯」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 509
  },
  {
    "char": "比",
    "pinyin": "bǐ",
    "strokes": 4,
    "words": [
      "比价",
      "比兴",
      "比分"
    ],
    "sentence": "把「比」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 510
  },
  {
    "char": "服",
    "pinyin": "fú",
    "strokes": 8,
    "words": [
      "服丧",
      "服人",
      "服从"
    ],
    "sentence": "我认识了「服」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 511
  },
  {
    "char": "浅",
    "pinyin": "qiǎn",
    "strokes": 8,
    "words": [
      "浅学",
      "浅尝",
      "浅明"
    ],
    "sentence": "老师教我们认识「浅」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 512
  },
  {
    "char": "漂",
    "pinyin": "piāo",
    "strokes": 14,
    "words": [
      "漂亮",
      "漂儿",
      "漂染"
    ],
    "sentence": "把「漂」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 513
  },
  {
    "char": "啦",
    "pinyin": "la",
    "strokes": 11,
    "words": [
      "刺啦",
      "呼啦",
      "哇啦"
    ],
    "sentence": "老师教我们认识「啦」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 514
  },
  {
    "char": "啊",
    "pinyin": "a",
    "strokes": 10,
    "words": [
      "学啊",
      "大啊",
      "小啊"
    ],
    "sentence": "老师教我们认识「啊」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 515
  },
  {
    "char": "夫",
    "pinyin": "fū",
    "strokes": 4,
    "words": [
      "夫人",
      "夫君",
      "夫妇"
    ],
    "sentence": "把「夫」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 516
  },
  {
    "char": "表",
    "pinyin": "biǎo",
    "strokes": 8,
    "words": [
      "表亲",
      "表头",
      "表尺"
    ],
    "sentence": "老师教我们认识「表」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 517
  },
  {
    "char": "示",
    "pinyin": "shì",
    "strokes": 5,
    "words": [
      "示爱",
      "喻示",
      "夸示"
    ],
    "sentence": "我认识了「示」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 518
  },
  {
    "char": "号",
    "pinyin": "hào",
    "strokes": 5,
    "words": [
      "号丧",
      "号令",
      "号兵"
    ],
    "sentence": "把「号」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 519
  },
  {
    "char": "汗",
    "pinyin": "hàn",
    "strokes": 6,
    "words": [
      "汗斑",
      "汗毛",
      "汗水"
    ],
    "sentence": "把「汗」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 520
  },
  {
    "char": "伤",
    "pinyin": "shāng",
    "strokes": 6,
    "words": [
      "伤亡",
      "伤号",
      "伤员"
    ],
    "sentence": "老师教我们认识「伤」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 521
  },
  {
    "char": "吸",
    "pinyin": "xī",
    "strokes": 6,
    "words": [
      "吸着",
      "吸食"
    ],
    "sentence": "老师教我们认识「吸」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 522
  },
  {
    "char": "极",
    "pinyin": "jí",
    "strokes": 7,
    "words": [
      "极为",
      "极乐",
      "极其"
    ],
    "sentence": "我认识了「极」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 523
  },
  {
    "char": "串",
    "pinyin": "chuàn",
    "strokes": 7,
    "words": [
      "串供",
      "串戏",
      "串案"
    ],
    "sentence": "老师教我们认识「串」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 524
  },
  {
    "char": "免",
    "pinyin": "miǎn",
    "strokes": 7,
    "words": [
      "免予",
      "免冠",
      "免得"
    ],
    "sentence": "把「免」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 525
  },
  {
    "char": "告",
    "pinyin": "gào",
    "strokes": 7,
    "words": [
      "告便",
      "告倒",
      "告假"
    ],
    "sentence": "我认识了「告」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 526
  },
  {
    "char": "诉",
    "pinyin": "sù",
    "strokes": 7,
    "words": [
      "诉说",
      "上诉",
      "诉讼状"
    ],
    "sentence": "老师教我们认识「诉」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 527
  },
  {
    "char": "狐",
    "pinyin": "hú",
    "strokes": 8,
    "words": [
      "狐疑",
      "狐皮",
      "狐臊"
    ],
    "sentence": "我认识了「狐」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 528
  },
  {
    "char": "狸",
    "pinyin": "lí",
    "strokes": 10,
    "words": [
      "狸猫",
      "发屋求狸",
      "狐狸尾巴"
    ],
    "sentence": "老师教我们认识「狸」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 529
  },
  {
    "char": "猴",
    "pinyin": "hóu",
    "strokes": 12,
    "words": [
      "猴头",
      "猴子",
      "猴戏"
    ],
    "sentence": "把「猴」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 530
  },
  {
    "char": "颗",
    "pinyin": "kē",
    "strokes": 14,
    "words": [
      "魏颗结草",
      "学颗",
      "大颗"
    ],
    "sentence": "我认识了「颗」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 531
  },
  {
    "char": "斤",
    "pinyin": "jīn",
    "strokes": 4,
    "words": [
      "斤斗",
      "斤斤较量",
      "斤斤较量"
    ],
    "sentence": "我认识了「斤」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 532
  },
  {
    "char": "折",
    "pinyin": "zhé",
    "strokes": 7,
    "words": [
      "折中",
      "折价",
      "折光"
    ],
    "sentence": "把「折」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 533
  },
  {
    "char": "挑",
    "pinyin": "tiāo",
    "strokes": 9,
    "words": [
      "挑中",
      "挑刺",
      "挑剔"
    ],
    "sentence": "我认识了「挑」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 534
  },
  {
    "char": "根",
    "pinyin": "gēn",
    "strokes": 10,
    "words": [
      "根号",
      "根底",
      "根据"
    ],
    "sentence": "把「根」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 535
  },
  {
    "char": "独",
    "pinyin": "dú",
    "strokes": 9,
    "words": [
      "独个",
      "独体",
      "独创"
    ],
    "sentence": "我认识了「独」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 536
  },
  {
    "char": "满",
    "pinyin": "mǎn",
    "strokes": 13,
    "words": [
      "满分",
      "满勤",
      "满员"
    ],
    "sentence": "我认识了「满」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 537
  },
  {
    "char": "容",
    "pinyin": "róng",
    "strokes": 10,
    "words": [
      "容许",
      "容量",
      "不容"
    ],
    "sentence": "老师教我们认识「容」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 538
  },
  {
    "char": "易",
    "pinyin": "yì",
    "strokes": 8,
    "words": [
      "易位",
      "易地",
      "易损"
    ],
    "sentence": "我认识了「易」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 539
  },
  {
    "char": "采",
    "pinyin": "cǎi",
    "strokes": 8,
    "words": [
      "采买",
      "采伐",
      "采光"
    ],
    "sentence": "把「采」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 540
  },
  {
    "char": "背",
    "pinyin": "bèi",
    "strokes": 9,
    "words": [
      "背书",
      "背人",
      "背信"
    ],
    "sentence": "老师教我们认识「背」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 541
  },
  {
    "char": "板",
    "pinyin": "bǎn",
    "strokes": 8,
    "words": [
      "板刷",
      "板子",
      "板正"
    ],
    "sentence": "把「板」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 542
  },
  {
    "char": "椅",
    "pinyin": "yǐ",
    "strokes": 12,
    "words": [
      "椅垫",
      "椅子",
      "交椅"
    ],
    "sentence": "老师教我们认识「椅」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 543
  },
  {
    "char": "但",
    "pinyin": "dàn",
    "strokes": 7,
    "words": [
      "但见",
      "不但",
      "岂但"
    ],
    "sentence": "把「但」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 544
  },
  {
    "char": "傍",
    "pinyin": "bàng",
    "strokes": 12,
    "words": [
      "傍人篱落",
      "傍若无人",
      "傍观冷眼"
    ],
    "sentence": "老师教我们认识「傍」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 545
  },
  {
    "char": "清",
    "pinyin": "qīng",
    "strokes": 11,
    "words": [
      "清寒",
      "清库",
      "清挖"
    ],
    "sentence": "把「清」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 546
  },
  {
    "char": "消",
    "pinyin": "xiāo",
    "strokes": 10,
    "words": [
      "消亡",
      "消化",
      "消散"
    ],
    "sentence": "我认识了「消」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 547
  },
  {
    "char": "由",
    "pinyin": "yóu",
    "strokes": 5,
    "words": [
      "由头",
      "由得",
      "不由"
    ],
    "sentence": "我认识了「由」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 548
  },
  {
    "char": "术",
    "pinyin": "shù",
    "strokes": 5,
    "words": [
      "术业",
      "术后",
      "术士"
    ],
    "sentence": "老师教我们认识「术」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 549
  },
  {
    "char": "吐",
    "pinyin": "tǔ",
    "strokes": 6,
    "words": [
      "吐口",
      "吐字",
      "吐属"
    ],
    "sentence": "把「吐」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 550
  },
  {
    "char": "注",
    "pinyin": "zhù",
    "strokes": 8,
    "words": [
      "注射",
      "注解",
      "注重"
    ],
    "sentence": "我认识了「注」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 551
  },
  {
    "char": "课",
    "pinyin": "kè",
    "strokes": 10,
    "words": [
      "课卷",
      "课长",
      "课间"
    ],
    "sentence": "把「课」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 552
  },
  {
    "char": "铅",
    "pinyin": "qiān",
    "strokes": 10,
    "words": [
      "铅丝",
      "铅丹",
      "铅华"
    ],
    "sentence": "把「铅」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 553
  },
  {
    "char": "笔",
    "pinyin": "bǐ",
    "strokes": 10,
    "words": [
      "笔会",
      "笔体",
      "笔供"
    ],
    "sentence": "老师教我们认识「笔」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 554
  },
  {
    "char": "桌",
    "pinyin": "zhuō",
    "strokes": 10,
    "words": [
      "桌子",
      "桌椅",
      "供桌"
    ],
    "sentence": "把「桌」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 555
  },
  {
    "char": "景",
    "pinyin": "jǐng",
    "strokes": 12,
    "words": [
      "景仰",
      "景况",
      "景区"
    ],
    "sentence": "老师教我们认识「景」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 556
  },
  {
    "char": "拿",
    "pinyin": "ná",
    "strokes": 10,
    "words": [
      "拿大",
      "拿给",
      "大拿"
    ],
    "sentence": "把「拿」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 557
  },
  {
    "char": "坏",
    "pinyin": "huài",
    "strokes": 7,
    "words": [
      "坏事",
      "坏人",
      "坏处"
    ],
    "sentence": "我认识了「坏」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 558
  },
  {
    "char": "松",
    "pinyin": "sōng",
    "strokes": 8,
    "words": [
      "松劲",
      "松叶",
      "松散"
    ],
    "sentence": "把「松」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 559
  },
  {
    "char": "扎",
    "pinyin": "zhā",
    "strokes": 4,
    "words": [
      "扎堆",
      "扎实",
      "扎手"
    ],
    "sentence": "我认识了「扎」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 560
  },
  {
    "char": "抓",
    "pinyin": "zhuā",
    "strokes": 7,
    "words": [
      "抓差",
      "抓斗",
      "抓典型"
    ],
    "sentence": "我认识了「抓」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 561
  },
  {
    "char": "祝",
    "pinyin": "zhù",
    "strokes": 9,
    "words": [
      "祝酒歌",
      "祝不胜诅",
      "祝发文身"
    ],
    "sentence": "我认识了「祝」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 562
  },
  {
    "char": "福",
    "pinyin": "fú",
    "strokes": 13,
    "words": [
      "福分",
      "福地",
      "福将"
    ],
    "sentence": "老师教我们认识「福」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 563
  },
  {
    "char": "句",
    "pinyin": "jù",
    "strokes": 5,
    "words": [
      "句号",
      "句型",
      "句子"
    ],
    "sentence": "老师教我们认识「句」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 564
  },
  {
    "char": "幸",
    "pinyin": "xìng",
    "strokes": 8,
    "words": [
      "幸会",
      "幸好",
      "幸得"
    ],
    "sentence": "老师教我们认识「幸」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 565
  },
  {
    "char": "之",
    "pinyin": "zhī",
    "strokes": 3,
    "words": [
      "之极",
      "之首",
      "较之"
    ],
    "sentence": "把「之」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 566
  },
  {
    "char": "令",
    "pinyin": "lìng",
    "strokes": 5,
    "words": [
      "令亲",
      "令人",
      "令兄"
    ],
    "sentence": "我认识了「令」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 567
  },
  {
    "char": "布",
    "pinyin": "bù",
    "strokes": 5,
    "words": [
      "布丁",
      "布头",
      "布景"
    ],
    "sentence": "老师教我们认识「布」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 568
  },
  {
    "char": "直",
    "pinyin": "zhí",
    "strokes": 8,
    "words": [
      "直冲",
      "直击",
      "直射"
    ],
    "sentence": "我认识了「直」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 569
  },
  {
    "char": "当",
    "pinyin": "dāng",
    "strokes": 6,
    "words": [
      "当下",
      "当世",
      "当中"
    ],
    "sentence": "老师教我们认识「当」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 570
  },
  {
    "char": "第",
    "pinyin": "dì",
    "strokes": 11,
    "words": [
      "第一名",
      "落第",
      "第三梯队"
    ],
    "sentence": "把「第」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 571
  },
  {
    "char": "现",
    "pinyin": "xiàn",
    "strokes": 8,
    "words": [
      "现买",
      "现价",
      "现任"
    ],
    "sentence": "我认识了「现」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 572
  },
  {
    "char": "期",
    "pinyin": "qī",
    "strokes": 12,
    "words": [
      "期中",
      "期冀",
      "期刊"
    ],
    "sentence": "把「期」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 573
  },
  {
    "char": "轮",
    "pinyin": "lún",
    "strokes": 8,
    "words": [
      "轮休",
      "轮台",
      "轮圈"
    ],
    "sentence": "把「轮」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 574
  },
  {
    "char": "路",
    "pinyin": "lù",
    "strokes": 13,
    "words": [
      "路上",
      "路卡",
      "路头"
    ],
    "sentence": "老师教我们认识「路」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 575
  },
  {
    "char": "丑",
    "pinyin": "chǒu",
    "strokes": 4,
    "words": [
      "丑化",
      "丑恶",
      "丑星"
    ],
    "sentence": "我认识了「丑」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 576
  },
  {
    "char": "永",
    "pinyin": "yǒng",
    "strokes": 5,
    "words": [
      "永别",
      "永宁",
      "永远"
    ],
    "sentence": "我认识了「永」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 577
  },
  {
    "char": "饥",
    "pinyin": "jī",
    "strokes": 5,
    "words": [
      "饥荒",
      "饥饱",
      "耐饥"
    ],
    "sentence": "老师教我们认识「饥」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 578
  },
  {
    "char": "饱",
    "pinyin": "bǎo",
    "strokes": 8,
    "words": [
      "饱和",
      "饱经",
      "饱读"
    ],
    "sentence": "我认识了「饱」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 579
  },
  {
    "char": "温",
    "pinyin": "wēn",
    "strokes": 12,
    "words": [
      "温和",
      "温宿",
      "温差"
    ],
    "sentence": "我认识了「温」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 580
  },
  {
    "char": "贫",
    "pinyin": "pín",
    "strokes": 8,
    "words": [
      "贫化",
      "贫血",
      "济贫"
    ],
    "sentence": "老师教我们认识「贫」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 581
  },
  {
    "char": "富",
    "pinyin": "fù",
    "strokes": 12,
    "words": [
      "富丽",
      "富家",
      "富强"
    ],
    "sentence": "把「富」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 582
  },
  {
    "char": "户",
    "pinyin": "hù",
    "strokes": 4,
    "words": [
      "户头",
      "户调",
      "户长"
    ],
    "sentence": "我认识了「户」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 583
  },
  {
    "char": "亚",
    "pinyin": "yà",
    "strokes": 6,
    "words": [
      "亚于",
      "亚当",
      "亚非拉"
    ],
    "sentence": "老师教我们认识「亚」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 584
  },
  {
    "char": "角",
    "pinyin": "jiǎo",
    "strokes": 7,
    "words": [
      "角力",
      "角化",
      "角子"
    ],
    "sentence": "我认识了「角」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 585
  },
  {
    "char": "周",
    "pinyin": "zhōu",
    "strokes": 8,
    "words": [
      "周会",
      "周折",
      "周旋"
    ],
    "sentence": "把「周」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 586
  },
  {
    "char": "床",
    "pinyin": "chuáng",
    "strokes": 7,
    "words": [
      "床单",
      "床头",
      "床子"
    ],
    "sentence": "老师教我们认识「床」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 587
  },
  {
    "char": "病",
    "pinyin": "bìng",
    "strokes": 10,
    "words": [
      "病体",
      "病假",
      "病区"
    ],
    "sentence": "我认识了「病」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 588
  },
  {
    "char": "始",
    "pinyin": "shǐ",
    "strokes": 8,
    "words": [
      "始创",
      "创始",
      "始发站"
    ],
    "sentence": "老师教我们认识「始」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 589
  },
  {
    "char": "张",
    "pinyin": "zhāng",
    "strokes": 7,
    "words": [
      "张大",
      "张榜",
      "夸张"
    ],
    "sentence": "我认识了「张」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 590
  },
  {
    "char": "寻",
    "pinyin": "xún",
    "strokes": 6,
    "words": [
      "寻亲",
      "寻呼",
      "寻思"
    ],
    "sentence": "我认识了「寻」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 591
  },
  {
    "char": "哭",
    "pinyin": "kū",
    "strokes": 10,
    "words": [
      "哭丧",
      "哭叫",
      "号哭"
    ],
    "sentence": "我认识了「哭」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 592
  },
  {
    "char": "良",
    "pinyin": "liáng",
    "strokes": 7,
    "words": [
      "良好",
      "良家",
      "良将"
    ],
    "sentence": "把「良」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 593
  },
  {
    "char": "食",
    "pinyin": "shí",
    "strokes": 9,
    "words": [
      "食人",
      "食具",
      "食口"
    ],
    "sentence": "我认识了「食」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 594
  },
  {
    "char": "双",
    "pinyin": "shuāng",
    "strokes": 4,
    "words": [
      "双亲",
      "双打",
      "双抢"
    ],
    "sentence": "把「双」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 595
  },
  {
    "char": "体",
    "pinyin": "tǐ",
    "strokes": 7,
    "words": [
      "体会",
      "体位",
      "体例"
    ],
    "sentence": "把「体」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 596
  },
  {
    "char": "操",
    "pinyin": "cāo",
    "strokes": 16,
    "words": [
      "操刀",
      "操切",
      "操场"
    ],
    "sentence": "把「操」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 597
  },
  {
    "char": "场",
    "pinyin": "chǎng",
    "strokes": 6,
    "words": [
      "场合",
      "场地",
      "场子"
    ],
    "sentence": "我认识了「场」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 598
  },
  {
    "char": "份",
    "pinyin": "fèn",
    "strokes": 6,
    "words": [
      "份儿",
      "份地",
      "份子"
    ],
    "sentence": "我认识了「份」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 599
  },
  {
    "char": "粉",
    "pinyin": "fěn",
    "strokes": 10,
    "words": [
      "粉刷",
      "粉刺",
      "粉坊"
    ],
    "sentence": "把「粉」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 600
  },
  {
    "char": "昨",
    "pinyin": "zuó",
    "strokes": 9,
    "words": [
      "昨儿个",
      "学昨",
      "大昨"
    ],
    "sentence": "老师教我们认识「昨」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 601
  },
  {
    "char": "晴",
    "pinyin": "qíng",
    "strokes": 12,
    "words": [
      "晴和",
      "晴好",
      "晴空"
    ],
    "sentence": "老师教我们认识「晴」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 602
  },
  {
    "char": "姑",
    "pinyin": "gū",
    "strokes": 8,
    "words": [
      "姑且",
      "姑夫",
      "姑洗"
    ],
    "sentence": "我认识了「姑」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 603
  },
  {
    "char": "娘",
    "pinyin": "niáng",
    "strokes": 10,
    "words": [
      "娘亲",
      "娘子",
      "娘家"
    ],
    "sentence": "老师教我们认识「娘」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 604
  },
  {
    "char": "妹",
    "pinyin": "mèi",
    "strokes": 8,
    "words": [
      "妹夫",
      "令妹",
      "弟妹"
    ],
    "sentence": "把「妹」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 605
  },
  {
    "char": "读",
    "pinyin": "dú",
    "strokes": 10,
    "words": [
      "读书",
      "读数",
      "读本"
    ],
    "sentence": "我认识了「读」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 606
  },
  {
    "char": "舟",
    "pinyin": "zhōu",
    "strokes": 6,
    "words": [
      "舟车",
      "扁舟",
      "行舟"
    ],
    "sentence": "把「舟」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 607
  },
  {
    "char": "乘",
    "pinyin": "chéng",
    "strokes": 10,
    "words": [
      "乘乘",
      "乘乘",
      "乘便"
    ],
    "sentence": "我认识了「乘」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 608
  },
  {
    "char": "音",
    "pinyin": "yīn",
    "strokes": 9,
    "words": [
      "音乐",
      "音信",
      "音区"
    ],
    "sentence": "把「音」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 609
  },
  {
    "char": "客",
    "pinyin": "kè",
    "strokes": 9,
    "words": [
      "客体",
      "客家",
      "客票"
    ],
    "sentence": "我认识了「客」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 610
  },
  {
    "char": "何",
    "pinyin": "hé",
    "strokes": 7,
    "words": [
      "何不",
      "何事",
      "何以"
    ],
    "sentence": "把「何」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 611
  },
  {
    "char": "汪",
    "pinyin": "wāng",
    "strokes": 7,
    "words": [
      "汪洋大海",
      "汪洋大肆",
      "一片汪洋"
    ],
    "sentence": "我认识了「汪」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 612
  },
  {
    "char": "丛",
    "pinyin": "cóng",
    "strokes": 5,
    "words": [
      "苇丛",
      "丛山峻岭",
      "丛轻折轴"
    ],
    "sentence": "老师教我们认识「丛」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 613
  },
  {
    "char": "牢",
    "pinyin": "láo",
    "strokes": 7,
    "words": [
      "牢度",
      "牢笼",
      "牢骚"
    ],
    "sentence": "把「牢」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 614
  },
  {
    "char": "拍",
    "pinyin": "pāi",
    "strokes": 8,
    "words": [
      "拍发",
      "拍戏",
      "拍打"
    ],
    "sentence": "把「拍」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 615
  },
  {
    "char": "护",
    "pinyin": "hù",
    "strokes": 7,
    "words": [
      "护从",
      "护具",
      "护发"
    ],
    "sentence": "把「护」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 616
  },
  {
    "char": "保",
    "pinyin": "bǎo",
    "strokes": 9,
    "words": [
      "保价",
      "保单",
      "保底"
    ],
    "sentence": "我认识了「保」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 617
  },
  {
    "char": "物",
    "pinyin": "wù",
    "strokes": 8,
    "words": [
      "物价",
      "物体",
      "物化"
    ],
    "sentence": "把「物」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 618
  },
  {
    "char": "鸡",
    "pinyin": "jī",
    "strokes": 7,
    "words": [
      "鸡丁",
      "鸡冠",
      "鸡头"
    ],
    "sentence": "把「鸡」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 619
  },
  {
    "char": "猫",
    "pinyin": "māo",
    "strokes": 11,
    "words": [
      "公猫",
      "山猫",
      "灵猫"
    ],
    "sentence": "我认识了「猫」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 620
  },
  {
    "char": "羽",
    "pinyin": "yǔ",
    "strokes": 6,
    "words": [
      "羽冠",
      "羽化",
      "羽坛"
    ],
    "sentence": "把「羽」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 621
  },
  {
    "char": "领",
    "pinyin": "lǐng",
    "strokes": 11,
    "words": [
      "领办",
      "领地",
      "领教"
    ],
    "sentence": "我认识了「领」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 622
  },
  {
    "char": "捉",
    "pinyin": "zhuō",
    "strokes": 10,
    "words": [
      "捉弄",
      "捉迷藏",
      "捉影捕风"
    ],
    "sentence": "我认识了「捉」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 623
  },
  {
    "char": "理",
    "pinyin": "lǐ",
    "strokes": 11,
    "words": [
      "理发",
      "不理",
      "乐理"
    ],
    "sentence": "把「理」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 624
  },
  {
    "char": "跃",
    "pinyin": "yuè",
    "strokes": 11,
    "words": [
      "跳跃",
      "跃然纸上",
      "大跃进"
    ],
    "sentence": "把「跃」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 625
  },
  {
    "char": "蹦",
    "pinyin": "bèng",
    "strokes": 18,
    "words": [
      "蹦跳",
      "蹦跶",
      "蹦蹦跳跳"
    ],
    "sentence": "把「蹦」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 626
  },
  {
    "char": "灵",
    "pinyin": "líng",
    "strokes": 7,
    "words": [
      "灵便",
      "灵猫",
      "灵蛇"
    ],
    "sentence": "我认识了「灵」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 627
  },
  {
    "char": "晨",
    "pinyin": "chén",
    "strokes": 11,
    "words": [
      "晨雾",
      "晨霜",
      "晨风"
    ],
    "sentence": "我认识了「晨」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 628
  },
  {
    "char": "失",
    "pinyin": "shī",
    "strokes": 5,
    "words": [
      "失传",
      "失体",
      "失信"
    ],
    "sentence": "把「失」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 629
  },
  {
    "char": "觉",
    "pinyin": "jué",
    "strokes": 9,
    "words": [
      "觉察",
      "觉得",
      "觉悟"
    ],
    "sentence": "老师教我们认识「觉」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 630
  },
  {
    "char": "扔",
    "pinyin": "rēng",
    "strokes": 5,
    "words": [
      "学扔",
      "大扔",
      "小扔"
    ],
    "sentence": "老师教我们认识「扔」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 631
  },
  {
    "char": "掉",
    "pinyin": "diào",
    "strokes": 11,
    "words": [
      "掉价",
      "掉头",
      "掉转"
    ],
    "sentence": "老师教我们认识「掉」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 632
  },
  {
    "char": "眼",
    "pinyin": "yǎn",
    "strokes": 11,
    "words": [
      "眼晕",
      "眼见",
      "亲眼"
    ],
    "sentence": "我认识了「眼」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 633
  },
  {
    "char": "睛",
    "pinyin": "jīng",
    "strokes": 13,
    "words": [
      "张眼露睛",
      "目不转睛"
    ],
    "sentence": "我认识了「睛」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 634
  },
  {
    "char": "纸",
    "pinyin": "zhǐ",
    "strokes": 7,
    "words": [
      "纸夹",
      "纸捻",
      "纸条"
    ],
    "sentence": "老师教我们认识「纸」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 635
  },
  {
    "char": "船",
    "pinyin": "chuán",
    "strokes": 11,
    "words": [
      "船只",
      "船夫",
      "船底"
    ],
    "sentence": "老师教我们认识「船」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 636
  },
  {
    "char": "久",
    "pinyin": "jiǔ",
    "strokes": 3,
    "words": [
      "久仰",
      "久别",
      "久远"
    ],
    "sentence": "我认识了「久」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 637
  },
  {
    "char": "乎",
    "pinyin": "hū",
    "strokes": 5,
    "words": [
      "似乎",
      "凑乎",
      "几乎"
    ],
    "sentence": "老师教我们认识「乎」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 638
  },
  {
    "char": "至",
    "pinyin": "zhì",
    "strokes": 6,
    "words": [
      "至上",
      "至为",
      "至亲"
    ],
    "sentence": "老师教我们认识「至」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 639
  },
  {
    "char": "死",
    "pinyin": "sǐ",
    "strokes": 6,
    "words": [
      "学死",
      "大死",
      "死子"
    ],
    "sentence": "我认识了「死」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 640
  },
  {
    "char": "腰",
    "pinyin": "yāo",
    "strokes": 13,
    "words": [
      "腰俞",
      "腰杆",
      "腰椎"
    ],
    "sentence": "我认识了「腰」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 641
  },
  {
    "char": "捡",
    "pinyin": "jiǎn",
    "strokes": 10,
    "words": [
      "捡拾",
      "捡便宜",
      "捡起来"
    ],
    "sentence": "我认识了「捡」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 642
  },
  {
    "char": "粒",
    "pinyin": "lì",
    "strokes": 11,
    "words": [
      "粒状",
      "豆粒",
      "线粒体"
    ],
    "sentence": "把「粒」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 643
  },
  {
    "char": "被",
    "pinyin": "bèi",
    "strokes": 10,
    "words": [
      "被俘",
      "被刺",
      "被动"
    ],
    "sentence": "我认识了「被」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 644
  },
  {
    "char": "并",
    "pinyin": "bìng",
    "strokes": 6,
    "words": [
      "并且",
      "并举",
      "并入"
    ],
    "sentence": "我认识了「并」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 645
  },
  {
    "char": "夜",
    "pinyin": "yè",
    "strokes": 8,
    "words": [
      "夜分",
      "夜叉",
      "夜场"
    ],
    "sentence": "我认识了「夜」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 646
  },
  {
    "char": "喜",
    "pinyin": "xǐ",
    "strokes": 12,
    "words": [
      "喜丧",
      "喜乐",
      "喜人"
    ],
    "sentence": "把「喜」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 647
  },
  {
    "char": "重",
    "pinyin": "zhòng",
    "strokes": 9,
    "words": [
      "重九",
      "重价",
      "重任"
    ],
    "sentence": "把「重」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 648
  },
  {
    "char": "味",
    "pinyin": "wèi",
    "strokes": 8,
    "words": [
      "味觉",
      "体味",
      "兴味"
    ],
    "sentence": "我认识了「味」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 649
  },
  {
    "char": "轻",
    "pinyin": "qīng",
    "strokes": 9,
    "words": [
      "轻便",
      "轻俏",
      "轻信"
    ],
    "sentence": "把「轻」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 650
  },
  {
    "char": "刻",
    "pinyin": "kè",
    "strokes": 8,
    "words": [
      "刻划",
      "刻制",
      "刻度"
    ],
    "sentence": "我认识了「刻」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 651
  },
  {
    "char": "群",
    "pinyin": "qún",
    "strokes": 13,
    "words": [
      "群体",
      "群星",
      "群殴"
    ],
    "sentence": "把「群」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 652
  },
  {
    "char": "卫",
    "pinyin": "wèi",
    "strokes": 3,
    "words": [
      "卫戍区",
      "卫星站",
      "卫生员"
    ],
    "sentence": "把「卫」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 653
  },
  {
    "char": "运",
    "pinyin": "yùn",
    "strokes": 7,
    "words": [
      "运价",
      "运单",
      "运思"
    ],
    "sentence": "老师教我们认识「运」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 654
  },
  {
    "char": "宇",
    "pinyin": "yǔ",
    "strokes": 6,
    "words": [
      "宇内",
      "大宇",
      "宇宙观"
    ],
    "sentence": "我认识了「宇」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 655
  },
  {
    "char": "宙",
    "pinyin": "zhòu",
    "strokes": 8,
    "words": [
      "宇宙观",
      "宇宙空间",
      "宇宙速度"
    ],
    "sentence": "老师教我们认识「宙」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 656
  },
  {
    "char": "航",
    "pinyin": "háng",
    "strokes": 10,
    "words": [
      "航务",
      "航校",
      "航模"
    ],
    "sentence": "把「航」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 657
  },
  {
    "char": "舰",
    "pinyin": "jiàn",
    "strokes": 10,
    "words": [
      "舰只",
      "舰炮",
      "炮舰"
    ],
    "sentence": "把「舰」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 658
  },
  {
    "char": "冲",
    "pinyin": "chōng",
    "strokes": 6,
    "words": [
      "冲克",
      "冲冲",
      "冲冲"
    ],
    "sentence": "把「冲」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 659
  },
  {
    "char": "晒",
    "pinyin": "shài",
    "strokes": 10,
    "words": [
      "晒台",
      "晒场",
      "日晒"
    ],
    "sentence": "我认识了「晒」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 660
  },
  {
    "char": "池",
    "pinyin": "chí",
    "strokes": 6,
    "words": [
      "乐池",
      "便池",
      "华池"
    ],
    "sentence": "我认识了「池」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 661
  },
  {
    "char": "浮",
    "pinyin": "fú",
    "strokes": 10,
    "words": [
      "浮华",
      "浮夸",
      "浮浅"
    ],
    "sentence": "老师教我们认识「浮」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 662
  },
  {
    "char": "灾",
    "pinyin": "zāi",
    "strokes": 7,
    "words": [
      "灾区",
      "灾难",
      "沙灾"
    ],
    "sentence": "老师教我们认识「灾」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 663
  },
  {
    "char": "害",
    "pinyin": "hài",
    "strokes": 10,
    "words": [
      "害处",
      "害臊",
      "为害"
    ],
    "sentence": "老师教我们认识「害」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 664
  },
  {
    "char": "黑",
    "pinyin": "hēi",
    "strokes": 12,
    "words": [
      "黑体",
      "黑信",
      "黑发"
    ],
    "sentence": "老师教我们认识「黑」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 665
  },
  {
    "char": "器",
    "pinyin": "qì",
    "strokes": 16,
    "words": [
      "器乐",
      "器度",
      "器用"
    ],
    "sentence": "把「器」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 666
  },
  {
    "char": "岸",
    "pinyin": "àn",
    "strokes": 8,
    "words": [
      "上岸",
      "沙岸",
      "回头是岸"
    ],
    "sentence": "我认识了「岸」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 667
  },
  {
    "char": "纹",
    "pinyin": "wén",
    "strokes": 7,
    "words": [
      "纹样",
      "纹理",
      "纹路"
    ],
    "sentence": "我认识了「纹」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 668
  },
  {
    "char": "洞",
    "pinyin": "dòng",
    "strokes": 9,
    "words": [
      "洞见",
      "凹洞",
      "地洞"
    ],
    "sentence": "老师教我们认识「洞」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 669
  },
  {
    "char": "影",
    "pinyin": "yǐng",
    "strokes": 15,
    "words": [
      "影人",
      "影区",
      "影后"
    ],
    "sentence": "把「影」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 670
  },
  {
    "char": "倒",
    "pinyin": "dào",
    "strokes": 10,
    "words": [
      "倒下",
      "倒不",
      "倒也"
    ],
    "sentence": "我认识了「倒」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 671
  },
  {
    "char": "游",
    "pinyin": "yóu",
    "strokes": 12,
    "words": [
      "游兴",
      "游勇",
      "游医"
    ],
    "sentence": "把「游」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 672
  },
  {
    "char": "圆",
    "pinyin": "yuán",
    "strokes": 10,
    "words": [
      "圆凳",
      "圆号",
      "圆圈"
    ],
    "sentence": "老师教我们认识「圆」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 673
  },
  {
    "char": "围",
    "pinyin": "wéi",
    "strokes": 7,
    "words": [
      "围剿",
      "围场",
      "围屏"
    ],
    "sentence": "把「围」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 674
  },
  {
    "char": "杯",
    "pinyin": "bēi",
    "strokes": 8,
    "words": [
      "杯子",
      "口杯",
      "大杯"
    ],
    "sentence": "我认识了「杯」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 675
  },
  {
    "char": "件",
    "pinyin": "jiàn",
    "strokes": 6,
    "words": [
      "件头",
      "件数",
      "信件"
    ],
    "sentence": "老师教我们认识「件」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 676
  },
  {
    "char": "住",
    "pinyin": "zhù",
    "strokes": 7,
    "words": [
      "住地",
      "住处",
      "住家"
    ],
    "sentence": "老师教我们认识「住」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 677
  },
  {
    "char": "须",
    "pinyin": "xū",
    "strokes": 9,
    "words": [
      "须发",
      "须子",
      "须知"
    ],
    "sentence": "老师教我们认识「须」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 678
  },
  {
    "char": "能",
    "pinyin": "néng",
    "strokes": 10,
    "words": [
      "能事",
      "能人",
      "能力"
    ],
    "sentence": "我认识了「能」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 679
  },
  {
    "char": "飘",
    "pinyin": "piāo",
    "strokes": 15,
    "words": [
      "飘拂",
      "飘散",
      "飘泊"
    ],
    "sentence": "老师教我们认识「飘」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 680
  },
  {
    "char": "必",
    "pinyin": "bì",
    "strokes": 5,
    "words": [
      "必将",
      "必得",
      "必要"
    ],
    "sentence": "把「必」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 681
  },
  {
    "char": "事",
    "pinyin": "shì",
    "strokes": 8,
    "words": [
      "事体",
      "事假",
      "万事"
    ],
    "sentence": "把「事」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 682
  },
  {
    "char": "历",
    "pinyin": "lì",
    "strokes": 4,
    "words": [
      "历任",
      "历尽",
      "历数"
    ],
    "sentence": "老师教我们认识「历」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 683
  },
  {
    "char": "史",
    "pinyin": "shǐ",
    "strokes": 5,
    "words": [
      "史乘",
      "史家",
      "史略"
    ],
    "sentence": "老师教我们认识「史」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 684
  },
  {
    "char": "灭",
    "pinyin": "miè",
    "strokes": 5,
    "words": [
      "灭亡",
      "灭种",
      "灭菌"
    ],
    "sentence": "我认识了「灭」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 685
  },
  {
    "char": "克",
    "pinyin": "kè",
    "strokes": 7,
    "words": [
      "克拉",
      "克服",
      "克期"
    ],
    "sentence": "老师教我们认识「克」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 686
  },
  {
    "char": "化",
    "pinyin": "huà",
    "strokes": 4,
    "words": [
      "化作",
      "化冻",
      "化分"
    ],
    "sentence": "把「化」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 687
  },
  {
    "char": "代",
    "pinyin": "dài",
    "strokes": 5,
    "words": [
      "代为",
      "代价",
      "代号"
    ],
    "sentence": "老师教我们认识「代」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 688
  },
  {
    "char": "孙",
    "pinyin": "sūn",
    "strokes": 6,
    "words": [
      "孙儿",
      "孙吴",
      "孙女"
    ],
    "sentence": "我认识了「孙」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 689
  },
  {
    "char": "植",
    "pinyin": "zhí",
    "strokes": 12,
    "words": [
      "植棉",
      "假植",
      "再植"
    ],
    "sentence": "把「植」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 690
  },
  {
    "char": "厂",
    "pinyin": "chǎng",
    "strokes": 2,
    "words": [
      "厂休",
      "厂区",
      "厂史"
    ],
    "sentence": "我认识了「厂」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 691
  },
  {
    "char": "产",
    "pinyin": "chǎn",
    "strokes": 6,
    "words": [
      "产假",
      "产地",
      "产期"
    ],
    "sentence": "老师教我们认识「产」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 692
  },
  {
    "char": "介",
    "pinyin": "jiè",
    "strokes": 4,
    "words": [
      "介绍信",
      "不介意",
      "中介人"
    ],
    "sentence": "老师教我们认识「介」这个生字。",
    "grade": "二年级上册",
    "level": 3,
    "id": 693
  },
  {
    "char": "农",
    "pinyin": "nóng",
    "strokes": 6,
    "words": [
      "农会",
      "农场",
      "农夫"
    ],
    "sentence": "我认识了「农」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 694
  },
  {
    "char": "科",
    "pinyin": "kē",
    "strokes": 9,
    "words": [
      "科协",
      "科员",
      "科委"
    ],
    "sentence": "把「科」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 695
  },
  {
    "char": "技",
    "pinyin": "jì",
    "strokes": 7,
    "words": [
      "技术",
      "技能",
      "中技"
    ],
    "sentence": "把「技」字抄写三遍。",
    "grade": "二年级上册",
    "level": 3,
    "id": 696
  },
  {
    "char": "纺",
    "pinyin": "fǎng",
    "strokes": 7,
    "words": [
      "纺机",
      "纺线",
      "纺织"
    ],
    "sentence": "我认识了「纺」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 697
  },
  {
    "char": "织",
    "pinyin": "zhī",
    "strokes": 8,
    "words": [
      "织品",
      "织女",
      "织布"
    ],
    "sentence": "我认识了「织」字，真开心！",
    "grade": "二年级上册",
    "level": 3,
    "id": 698
  },
  {
    "char": "脱",
    "pinyin": "tuō",
    "strokes": 11,
    "words": [
      "脱下",
      "解脱",
      "脱离"
    ],
    "sentence": "「脱」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 699
  },
  {
    "char": "冻",
    "pinyin": "dòng",
    "strokes": 7,
    "words": [
      "冷冻",
      "冰冻",
      "解冻"
    ],
    "sentence": "「冻」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 700
  },
  {
    "char": "溪",
    "pinyin": "xī",
    "strokes": 13,
    "words": [
      "小溪",
      "溪水",
      "溪流"
    ],
    "sentence": "「溪」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 701
  },
  {
    "char": "棉",
    "pinyin": "mián",
    "strokes": 12,
    "words": [
      "棉花",
      "棉袄",
      "棉布"
    ],
    "sentence": "学会了「棉」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 702
  },
  {
    "char": "探",
    "pinyin": "tàn",
    "strokes": 11,
    "words": [
      "探险",
      "探索",
      "探望"
    ],
    "sentence": "「探」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 703
  },
  {
    "char": "摇",
    "pinyin": "yáo",
    "strokes": 13,
    "words": [
      "摇晃",
      "动摇",
      "摇篮"
    ],
    "sentence": "「摇」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 704
  },
  {
    "char": "野",
    "pinyin": "yě",
    "strokes": 11,
    "words": [
      "野外",
      "田野",
      "野花"
    ],
    "sentence": "「野」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 705
  },
  {
    "char": "躲",
    "pinyin": "duǒ",
    "strokes": 13,
    "words": [
      "躲藏",
      "躲闪",
      "躲避"
    ],
    "sentence": "「躲」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 706
  },
  {
    "char": "解",
    "pinyin": "jiě",
    "strokes": 13,
    "words": [
      "解放",
      "解释",
      "了解"
    ],
    "sentence": "「解」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 707
  },
  {
    "char": "未",
    "pinyin": "wèi",
    "strokes": 5,
    "words": [
      "未了",
      "未便",
      "未几"
    ],
    "sentence": "学会了「未」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 708
  },
  {
    "char": "追",
    "pinyin": "zhuī",
    "strokes": 9,
    "words": [
      "追赶",
      "追求",
      "追逐"
    ],
    "sentence": "「追」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 709
  },
  {
    "char": "店",
    "pinyin": "diàn",
    "strokes": 8,
    "words": [
      "店员",
      "店家",
      "店铺"
    ],
    "sentence": "学会了「店」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 710
  },
  {
    "char": "枯",
    "pinyin": "kū",
    "strokes": 9,
    "words": [
      "干枯",
      "枯萎",
      "枯黄"
    ],
    "sentence": "「枯」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 711
  },
  {
    "char": "徐",
    "pinyin": "xú",
    "strokes": 10,
    "words": [
      "不徐不疾",
      "不疾不徐",
      "城北徐公"
    ],
    "sentence": "「徐」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 712
  },
  {
    "char": "烧",
    "pinyin": "shāo",
    "strokes": 10,
    "words": [
      "烧火",
      "燃烧",
      "发烧"
    ],
    "sentence": "学会了「烧」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 713
  },
  {
    "char": "荣",
    "pinyin": "róng",
    "strokes": 9,
    "words": [
      "光荣",
      "荣誉",
      "繁荣"
    ],
    "sentence": "「荣」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 714
  },
  {
    "char": "菜",
    "pinyin": "cài",
    "strokes": 11,
    "words": [
      "白菜",
      "蔬菜",
      "种菜"
    ],
    "sentence": "「菜」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 715
  },
  {
    "char": "宿",
    "pinyin": "sù",
    "strokes": 11,
    "words": [
      "宿舍",
      "住宿",
      "归宿"
    ],
    "sentence": "「宿」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 716
  },
  {
    "char": "冈",
    "pinyin": "gāng",
    "strokes": 4,
    "words": [
      "景阳冈",
      "云冈石窟",
      "沓冈复岭"
    ],
    "sentence": "学会了「冈」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 717
  },
  {
    "char": "世",
    "pinyin": "shì",
    "strokes": 5,
    "words": [
      "世上",
      "世亲"
    ],
    "sentence": "「世」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 718
  },
  {
    "char": "界",
    "pinyin": "jiè",
    "strokes": 9,
    "words": [
      "界内",
      "界外",
      "界尺"
    ],
    "sentence": "学会了「界」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 719
  },
  {
    "char": "轰",
    "pinyin": "hōng",
    "strokes": 8,
    "words": [
      "轰炸",
      "轰隆",
      "轰炸机"
    ],
    "sentence": "学会了「轰」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 720
  },
  {
    "char": "笋",
    "pinyin": "sǔn",
    "strokes": 10,
    "words": [
      "竹笋",
      "春笋",
      "笋尖"
    ],
    "sentence": "「笋」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 721
  },
  {
    "char": "芽",
    "pinyin": "yá",
    "strokes": 7,
    "words": [
      "发芽",
      "嫩芽",
      "豆芽"
    ],
    "sentence": "「芽」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 722
  },
  {
    "char": "喊",
    "pinyin": "hǎn",
    "strokes": 12,
    "words": [
      "喊叫",
      "呼喊",
      "大喊"
    ],
    "sentence": "「喊」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 723
  },
  {
    "char": "呼",
    "pinyin": "hū",
    "strokes": 8,
    "words": [
      "呼号",
      "呼吁",
      "呼啦"
    ],
    "sentence": "学会了「呼」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 724
  },
  {
    "char": "唤",
    "pinyin": "huàn",
    "strokes": 10,
    "words": [
      "呼唤",
      "唤醒",
      "召唤"
    ],
    "sentence": "「唤」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 725
  },
  {
    "char": "弟",
    "pinyin": "dì",
    "strokes": 7,
    "words": [
      "弟兄",
      "弟妇",
      "弟妹"
    ],
    "sentence": "「弟」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 726
  },
  {
    "char": "哥",
    "pinyin": "gē",
    "strokes": 10,
    "words": [
      "哥哥",
      "大哥"
    ],
    "sentence": "「哥」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 727
  },
  {
    "char": "骨",
    "pinyin": "gǔ",
    "strokes": 10,
    "words": [
      "骨刺",
      "骨力",
      "骨化"
    ],
    "sentence": "「骨」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 728
  },
  {
    "char": "抽",
    "pinyin": "chōu",
    "strokes": 8,
    "words": [
      "抽出",
      "抽水",
      "抽象"
    ],
    "sentence": "学会了「抽」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 729
  },
  {
    "char": "拐",
    "pinyin": "guǎi",
    "strokes": 8,
    "words": [
      "拐棍",
      "拐角",
      "打拐"
    ],
    "sentence": "学会了「拐」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 730
  },
  {
    "char": "浇",
    "pinyin": "jiāo",
    "strokes": 9,
    "words": [
      "浇地",
      "浇头",
      "浇洒"
    ],
    "sentence": "学会了「浇」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 731
  },
  {
    "char": "终",
    "pinyin": "zhōng",
    "strokes": 8,
    "words": [
      "终了",
      "终场",
      "终将"
    ],
    "sentence": "「终」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 732
  },
  {
    "char": "静",
    "pinyin": "jìng",
    "strokes": 14,
    "words": [
      "静乐",
      "静场",
      "静宁"
    ],
    "sentence": "学会了「静」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 733
  },
  {
    "char": "躺",
    "pinyin": "tǎng",
    "strokes": 15,
    "words": [
      "躺倒",
      "躺柜",
      "躺椅"
    ],
    "sentence": "「躺」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 734
  },
  {
    "char": "谢",
    "pinyin": "xiè",
    "strokes": 12,
    "words": [
      "谢帖",
      "婉谢",
      "称谢"
    ],
    "sentence": "学会了「谢」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 735
  },
  {
    "char": "渐",
    "pinyin": "jiàn",
    "strokes": 11,
    "words": [
      "渐显",
      "渐染",
      "渐洳"
    ],
    "sentence": "学会了「渐」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 736
  },
  {
    "char": "微",
    "pinyin": "wēi",
    "strokes": 13,
    "words": [
      "微分",
      "微少",
      "微晕"
    ],
    "sentence": "学会了「微」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 737
  },
  {
    "char": "瓦",
    "pinyin": "wǎ",
    "strokes": 4,
    "words": [
      "瓦片",
      "砖瓦"
    ],
    "sentence": "学会了「瓦」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 738
  },
  {
    "char": "泉",
    "pinyin": "quán",
    "strokes": 9,
    "words": [
      "泉水",
      "温泉",
      "喷泉"
    ],
    "sentence": "学会了「泉」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 739
  },
  {
    "char": "然",
    "pinyin": "rán",
    "strokes": 12,
    "words": [
      "不然",
      "了然",
      "倘然"
    ],
    "sentence": "「然」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 740
  },
  {
    "char": "结",
    "pinyin": "jié",
    "strokes": 9,
    "words": [
      "结业",
      "结义",
      "结交"
    ],
    "sentence": "「结」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 741
  },
  {
    "char": "股",
    "pinyin": "gǔ",
    "strokes": 8,
    "words": [
      "股份",
      "股分",
      "股票"
    ],
    "sentence": "「股」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 742
  },
  {
    "char": "脆",
    "pinyin": "cuì",
    "strokes": 10,
    "words": [
      "干脆",
      "松脆",
      "清脆"
    ],
    "sentence": "「脆」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 743
  },
  {
    "char": "塔",
    "pinyin": "tǎ",
    "strokes": 12,
    "words": [
      "塔台",
      "塔松",
      "塔顶"
    ],
    "sentence": "「塔」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 744
  },
  {
    "char": "杜",
    "pinyin": "dù",
    "strokes": 7,
    "words": [
      "杜鹃",
      "杜绝"
    ],
    "sentence": "「杜」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 745
  },
  {
    "char": "鹃",
    "pinyin": "juān",
    "strokes": 12,
    "words": [
      "杜鹃"
    ],
    "sentence": "「鹃」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 746
  },
  {
    "char": "冒",
    "pinyin": "mào",
    "strokes": 9,
    "words": [
      "冒充",
      "冒功",
      "冒号"
    ],
    "sentence": "学会了「冒」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 747
  },
  {
    "char": "雷",
    "pinyin": "léi",
    "strokes": 13,
    "words": [
      "雷同",
      "雷场"
    ],
    "sentence": "学会了「雷」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 748
  },
  {
    "char": "需",
    "pinyin": "xū",
    "strokes": 14,
    "words": [
      "需要",
      "产需",
      "供需"
    ],
    "sentence": "「需」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 749
  },
  {
    "char": "迈",
    "pinyin": "mài",
    "strokes": 6,
    "words": [
      "迈上",
      "衰迈",
      "豪迈不群"
    ],
    "sentence": "「迈」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 750
  },
  {
    "char": "迷",
    "pinyin": "mí",
    "strokes": 9,
    "words": [
      "迷信",
      "迷糊",
      "迷蒙"
    ],
    "sentence": "「迷」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 751
  },
  {
    "char": "迹",
    "pinyin": "jì",
    "strokes": 9,
    "words": [
      "迹地",
      "发迹",
      "奇迹"
    ],
    "sentence": "「迹」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 752
  },
  {
    "char": "叔",
    "pinyin": "shū",
    "strokes": 8,
    "words": [
      "叔伯",
      "叔嫂",
      "叔父"
    ],
    "sentence": "「叔」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 753
  },
  {
    "char": "锋",
    "pinyin": "fēng",
    "strokes": 12,
    "words": [
      "中锋",
      "冲锋",
      "剑锋"
    ],
    "sentence": "学会了「锋」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 754
  },
  {
    "char": "滴",
    "pinyin": "dī",
    "strokes": 14,
    "words": [
      "滴淌",
      "滴答",
      "滴落"
    ],
    "sentence": "「滴」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 755
  },
  {
    "char": "洒",
    "pinyin": "sǎ",
    "strokes": 9,
    "words": [
      "洒家",
      "洒扫",
      "洒泪"
    ],
    "sentence": "「洒」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 756
  },
  {
    "char": "泥",
    "pinyin": "ní",
    "strokes": 8,
    "words": [
      "泥丸",
      "泥人",
      "泥古"
    ],
    "sentence": "学会了「泥」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 757
  },
  {
    "char": "泞",
    "pinyin": "nìng",
    "strokes": 8,
    "words": [
      "泥泞",
      "学泞",
      "大泞"
    ],
    "sentence": "「泞」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 758
  },
  {
    "char": "扑",
    "pinyin": "pū",
    "strokes": 5,
    "words": [
      "扑地",
      "扑扇",
      "扑打"
    ],
    "sentence": "学会了「扑」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 759
  },
  {
    "char": "托",
    "pinyin": "tuō",
    "strokes": 6,
    "words": [
      "托底",
      "托收",
      "信托"
    ],
    "sentence": "「托」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 760
  },
  {
    "char": "摸",
    "pinyin": "mō",
    "strokes": 13,
    "words": [
      "摸准",
      "摸头",
      "摸奖"
    ],
    "sentence": "「摸」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 761
  },
  {
    "char": "利",
    "pinyin": "lì",
    "strokes": 7,
    "words": [
      "利尿",
      "利得",
      "利爪"
    ],
    "sentence": "「利」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 762
  },
  {
    "char": "铃",
    "pinyin": "líng",
    "strokes": 10,
    "words": [
      "铃铛",
      "哑铃",
      "杠铃"
    ],
    "sentence": "「铃」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 763
  },
  {
    "char": "弱",
    "pinyin": "ruò",
    "strokes": 10,
    "words": [
      "弱冠",
      "弱项",
      "体弱"
    ],
    "sentence": "学会了「弱」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 764
  },
  {
    "char": "末",
    "pinyin": "mò",
    "strokes": 5,
    "words": [
      "末了",
      "末叶",
      "末尾"
    ],
    "sentence": "「末」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 765
  },
  {
    "char": "芬",
    "pinyin": "fēn",
    "strokes": 7,
    "words": [
      "学芬",
      "大芬",
      "小芬"
    ],
    "sentence": "「芬」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 766
  },
  {
    "char": "芳",
    "pinyin": "fāng",
    "strokes": 7,
    "words": [
      "芳华",
      "芳泽",
      "芳菲"
    ],
    "sentence": "「芳」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 767
  },
  {
    "char": "夏",
    "pinyin": "xià",
    "strokes": 10,
    "words": [
      "夏令",
      "夏侯",
      "夏初"
    ],
    "sentence": "「夏」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 768
  },
  {
    "char": "应",
    "pinyin": "yīng",
    "strokes": 7,
    "words": [
      "应举",
      "应从",
      "应付"
    ],
    "sentence": "学会了「应」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 769
  },
  {
    "char": "该",
    "pinyin": "gāi",
    "strokes": 8,
    "words": [
      "该当",
      "该着",
      "不该"
    ],
    "sentence": "「该」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 770
  },
  {
    "char": "岛",
    "pinyin": "dǎo",
    "strokes": 7,
    "words": [
      "广岛",
      "海南岛",
      "南沙群岛"
    ],
    "sentence": "「岛」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 771
  },
  {
    "char": "展",
    "pinyin": "zhǎn",
    "strokes": 10,
    "words": [
      "展区",
      "展卖",
      "展厅"
    ],
    "sentence": "学会了「展」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 772
  },
  {
    "char": "建",
    "pinyin": "jiàn",
    "strokes": 8,
    "words": [
      "建中",
      "建档",
      "建筑"
    ],
    "sentence": "「建」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 773
  },
  {
    "char": "纱",
    "pinyin": "shā",
    "strokes": 7,
    "words": [
      "纱厂",
      "纱笼",
      "薄纱"
    ],
    "sentence": "学会了「纱」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 774
  },
  {
    "char": "环",
    "pinyin": "huán",
    "strokes": 8,
    "words": [
      "环中",
      "环伺",
      "环合"
    ],
    "sentence": "学会了「环」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 775
  },
  {
    "char": "绕",
    "pinyin": "rào",
    "strokes": 9,
    "words": [
      "绕场",
      "绕行",
      "绕口令"
    ],
    "sentence": "学会了「绕」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 776
  },
  {
    "char": "胜",
    "pinyin": "shèng",
    "strokes": 9,
    "words": [
      "胜任",
      "胜似",
      "胜券"
    ],
    "sentence": "学会了「胜」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 777
  },
  {
    "char": "隐",
    "pinyin": "yǐn",
    "strokes": 11,
    "words": [
      "隐蔽",
      "归隐",
      "恻隐"
    ],
    "sentence": "学会了「隐」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 778
  },
  {
    "char": "约",
    "pinyin": "yuē",
    "strokes": 6,
    "words": [
      "约会",
      "约分",
      "约同"
    ],
    "sentence": "学会了「约」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 779
  },
  {
    "char": "省",
    "pinyin": "shěng",
    "strokes": 9,
    "words": [
      "省事",
      "省亲",
      "省份"
    ],
    "sentence": "「省」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 780
  },
  {
    "char": "茂",
    "pinyin": "mào",
    "strokes": 8,
    "words": [
      "茂盛",
      "茂密"
    ],
    "sentence": "「茂」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 781
  },
  {
    "char": "盛",
    "pinyin": "shèng",
    "strokes": 11,
    "words": [
      "茂盛",
      "盛开",
      "盛大"
    ],
    "sentence": "「盛」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 782
  },
  {
    "char": "吾",
    "pinyin": "wú",
    "strokes": 7,
    "words": [
      "吾人",
      "吾侪",
      "吾子"
    ],
    "sentence": "「吾」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 783
  },
  {
    "char": "季",
    "pinyin": "jì",
    "strokes": 8,
    "words": [
      "季度",
      "季父",
      "季节"
    ],
    "sentence": "「季」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 784
  },
  {
    "char": "留",
    "pinyin": "liú",
    "strokes": 10,
    "words": [
      "留任",
      "留传",
      "留利"
    ],
    "sentence": "「留」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 785
  },
  {
    "char": "杏",
    "pinyin": "xìng",
    "strokes": 7,
    "words": [
      "杏核",
      "杏红",
      "杏花"
    ],
    "sentence": "「杏」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 786
  },
  {
    "char": "密",
    "pinyin": "mì",
    "strokes": 11,
    "words": [
      "密发",
      "密级",
      "密语"
    ],
    "sentence": "「密」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 787
  },
  {
    "char": "蜜",
    "pinyin": "mì",
    "strokes": 14,
    "words": [
      "蜂蜜",
      "蜜蜂",
      "甜蜜"
    ],
    "sentence": "「蜜」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 788
  },
  {
    "char": "坡",
    "pinyin": "pō",
    "strokes": 8,
    "words": [
      "山坡",
      "上坡",
      "坡度"
    ],
    "sentence": "「坡」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 789
  },
  {
    "char": "搭",
    "pinyin": "dā",
    "strokes": 12,
    "words": [
      "搭建",
      "搭乘",
      "搭车"
    ],
    "sentence": "学会了「搭」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 790
  },
  {
    "char": "摘",
    "pinyin": "zhāi",
    "strokes": 14,
    "words": [
      "摘花",
      "摘要",
      "采摘"
    ],
    "sentence": "「摘」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 791
  },
  {
    "char": "钉",
    "pinyin": "dīng",
    "strokes": 7,
    "words": [
      "钉住",
      "钉头",
      "钉子"
    ],
    "sentence": "「钉」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 792
  },
  {
    "char": "沟",
    "pinyin": "gōu",
    "strokes": 7,
    "words": [
      "水沟",
      "沟通",
      "山沟"
    ],
    "sentence": "「沟」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 793
  },
  {
    "char": "够",
    "pinyin": "gòu",
    "strokes": 11,
    "words": [
      "足够",
      "能够",
      "不够"
    ],
    "sentence": "学会了「够」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 794
  },
  {
    "char": "龙",
    "pinyin": "lóng",
    "strokes": 5,
    "words": [
      "龙体",
      "龙华",
      "龙卷"
    ],
    "sentence": "学会了「龙」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 795
  },
  {
    "char": "恩",
    "pinyin": "ēn",
    "strokes": 10,
    "words": [
      "恩泽",
      "蒙恩"
    ],
    "sentence": "学会了「恩」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 796
  },
  {
    "char": "寿",
    "pinyin": "shòu",
    "strokes": 7,
    "words": [
      "寿屏",
      "寿数",
      "上寿"
    ],
    "sentence": "学会了「寿」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 797
  },
  {
    "char": "柏",
    "pinyin": "bǎi",
    "strokes": 9,
    "words": [
      "柏乡",
      "柏林",
      "柏油"
    ],
    "sentence": "「柏」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 798
  },
  {
    "char": "泼",
    "pinyin": "pō",
    "strokes": 8,
    "words": [
      "泼剌",
      "泼洒",
      "撒泼"
    ],
    "sentence": "「泼」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 799
  },
  {
    "char": "特",
    "pinyin": "tè",
    "strokes": 10,
    "words": [
      "特为",
      "特价",
      "特优"
    ],
    "sentence": "学会了「特」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 800
  },
  {
    "char": "敬",
    "pinyin": "jìng",
    "strokes": 12,
    "words": [
      "敬仰",
      "敬候",
      "敬服"
    ],
    "sentence": "「敬」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 801
  },
  {
    "char": "鲜",
    "pinyin": "xiān",
    "strokes": 14,
    "words": [
      "鲜丽",
      "鲜亮",
      "鲜卑"
    ],
    "sentence": "学会了「鲜」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 802
  },
  {
    "char": "脚",
    "pinyin": "jiǎo",
    "strokes": 11,
    "words": [
      "脚链",
      "合脚",
      "地脚"
    ],
    "sentence": "「脚」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 803
  },
  {
    "char": "度",
    "pinyin": "dù",
    "strokes": 9,
    "words": [
      "度假",
      "度命",
      "度外"
    ],
    "sentence": "「度」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 804
  },
  {
    "char": "凤",
    "pinyin": "fèng",
    "strokes": 4,
    "words": [
      "凤凰",
      "龙凤"
    ],
    "sentence": "学会了「凤」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 805
  },
  {
    "char": "凰",
    "pinyin": "huáng",
    "strokes": 11,
    "words": [
      "凤凰"
    ],
    "sentence": "「凰」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 806
  },
  {
    "char": "束",
    "pinyin": "shù",
    "strokes": 7,
    "words": [
      "束发",
      "拘束",
      "约束"
    ],
    "sentence": "「束」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 807
  },
  {
    "char": "勾",
    "pinyin": "gōu",
    "strokes": 4,
    "words": [
      "勾兑",
      "勾勒",
      "勾引"
    ],
    "sentence": "「勾」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 808
  },
  {
    "char": "府",
    "pinyin": "fǔ",
    "strokes": 8,
    "words": [
      "府上",
      "中府",
      "乐府"
    ],
    "sentence": "「府」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 809
  },
  {
    "char": "单",
    "pinyin": "dān",
    "strokes": 8,
    "words": [
      "单一",
      "单于",
      "单产"
    ],
    "sentence": "「单」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 810
  },
  {
    "char": "夺",
    "pinyin": "duó",
    "strokes": 6,
    "words": [
      "夺冠",
      "夺占",
      "夺得"
    ],
    "sentence": "「夺」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 811
  },
  {
    "char": "宫",
    "pinyin": "gōng",
    "strokes": 9,
    "words": [
      "宫女",
      "宫扇",
      "宫掖"
    ],
    "sentence": "「宫」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 812
  },
  {
    "char": "扮",
    "pinyin": "bàn",
    "strokes": 7,
    "words": [
      "扮作",
      "扮戏",
      "扮相"
    ],
    "sentence": "学会了「扮」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 813
  },
  {
    "char": "雄",
    "pinyin": "xióng",
    "strokes": 12,
    "words": [
      "雄劲",
      "雄大",
      "雄奇"
    ],
    "sentence": "「雄」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 814
  },
  {
    "char": "伟",
    "pinyin": "wěi",
    "strokes": 6,
    "words": [
      "伟大",
      "伟论",
      "奇伟"
    ],
    "sentence": "学会了「伟」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 815
  },
  {
    "char": "烁",
    "pinyin": "shuò",
    "strokes": 9,
    "words": [
      "烁石流金",
      "焦金烁石",
      "燋金烁石"
    ],
    "sentence": "「烁」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 816
  },
  {
    "char": "辉",
    "pinyin": "huī",
    "strokes": 12,
    "words": [
      "光辉",
      "辉煌",
      "辉映"
    ],
    "sentence": "「辉」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 817
  },
  {
    "char": "煌",
    "pinyin": "huáng",
    "strokes": 13,
    "words": [
      "辉煌"
    ],
    "sentence": "「煌」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 818
  },
  {
    "char": "另",
    "pinyin": "lìng",
    "strokes": 5,
    "words": [
      "另行",
      "单另",
      "另一面"
    ],
    "sentence": "学会了「另」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 819
  },
  {
    "char": "志",
    "pinyin": "zhì",
    "strokes": 7,
    "words": [
      "志节",
      "志趣",
      "丧志"
    ],
    "sentence": "「志」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 820
  },
  {
    "char": "题",
    "pinyin": "tí",
    "strokes": 15,
    "words": [
      "题型",
      "题解",
      "切题"
    ],
    "sentence": "学会了「题」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 821
  },
  {
    "char": "提",
    "pinyin": "tí",
    "strokes": 12,
    "words": [
      "提交",
      "提亲",
      "提价"
    ],
    "sentence": "「提」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 822
  },
  {
    "char": "漫",
    "pinyin": "màn",
    "strokes": 14,
    "words": [
      "漫卷",
      "漫流",
      "漫灌"
    ],
    "sentence": "「漫」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 823
  },
  {
    "char": "朗",
    "pinyin": "lǎng",
    "strokes": 10,
    "words": [
      "朗读",
      "开朗",
      "晴朗"
    ],
    "sentence": "「朗」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 824
  },
  {
    "char": "哄",
    "pinyin": "hǒng",
    "strokes": 9,
    "words": [
      "哄人",
      "哄传",
      "哄劝"
    ],
    "sentence": "「哄」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 825
  },
  {
    "char": "喝",
    "pinyin": "hē",
    "strokes": 12,
    "words": [
      "喝令",
      "喝彩",
      "喝斥"
    ],
    "sentence": "「喝」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 826
  },
  {
    "char": "骗",
    "pinyin": "piàn",
    "strokes": 12,
    "words": [
      "骗子",
      "骗术",
      "哄骗"
    ],
    "sentence": "「骗」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 827
  },
  {
    "char": "刀",
    "pinyin": "dāo",
    "strokes": 2,
    "words": [
      "刀削",
      "刀叉",
      "刀头"
    ],
    "sentence": "学会了「刀」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 828
  },
  {
    "char": "尔",
    "pinyin": "ěr",
    "strokes": 5,
    "words": [
      "摩尔",
      "燕尔",
      "率尔"
    ],
    "sentence": "「尔」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 829
  },
  {
    "char": "求",
    "pinyin": "qiú",
    "strokes": 7,
    "words": [
      "求亲",
      "求助",
      "求和"
    ],
    "sentence": "「求」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 830
  },
  {
    "char": "仍",
    "pinyin": "réng",
    "strokes": 4,
    "words": [
      "频仍",
      "创巨痛仍",
      "创钜痛仍"
    ],
    "sentence": "「仍」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 831
  },
  {
    "char": "使",
    "pinyin": "shǐ",
    "strokes": 8,
    "words": [
      "使令",
      "使假",
      "使劲"
    ],
    "sentence": "学会了「使」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 832
  },
  {
    "char": "便",
    "pinyin": "biàn",
    "strokes": 9,
    "words": [
      "便中",
      "便了",
      "便于"
    ],
    "sentence": "「便」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 833
  },
  {
    "char": "英",
    "pinyin": "yīng",
    "strokes": 8,
    "words": [
      "英华",
      "英尺",
      "英模"
    ],
    "sentence": "「英」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 834
  },
  {
    "char": "票",
    "pinyin": "piào",
    "strokes": 11,
    "words": [
      "票款",
      "传票",
      "保票"
    ],
    "sentence": "「票」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 835
  },
  {
    "char": "整",
    "pinyin": "zhěng",
    "strokes": 16,
    "words": [
      "整个",
      "整体",
      "整地"
    ],
    "sentence": "「整」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 836
  },
  {
    "char": "式",
    "pinyin": "shì",
    "strokes": 6,
    "words": [
      "体式",
      "分式",
      "南式"
    ],
    "sentence": "「式」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 837
  },
  {
    "char": "而",
    "pinyin": "ér",
    "strokes": 6,
    "words": [
      "而且",
      "从而",
      "甚而"
    ],
    "sentence": "学会了「而」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 838
  },
  {
    "char": "且",
    "pinyin": "qiě",
    "strokes": 5,
    "words": [
      "且慢",
      "且末",
      "且说"
    ],
    "sentence": "「且」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 839
  },
  {
    "char": "丹",
    "pinyin": "dān",
    "strokes": 4,
    "words": [
      "丹参",
      "不丹"
    ],
    "sentence": "「丹」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 840
  },
  {
    "char": "乌",
    "pinyin": "wū",
    "strokes": 4,
    "words": [
      "乌头",
      "乌拉",
      "乌有"
    ],
    "sentence": "「乌」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 841
  },
  {
    "char": "艺",
    "pinyin": "yì",
    "strokes": 4,
    "words": [
      "艺术",
      "艺能",
      "从艺"
    ],
    "sentence": "「艺」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 842
  },
  {
    "char": "显",
    "pinyin": "xiǎn",
    "strokes": 9,
    "words": [
      "显得",
      "显能",
      "显著"
    ],
    "sentence": "学会了「显」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 843
  },
  {
    "char": "忽",
    "pinyin": "hū",
    "strokes": 8,
    "words": [
      "忽地",
      "奄忽",
      "忽忽不乐"
    ],
    "sentence": "学会了「忽」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 844
  },
  {
    "char": "丝",
    "pinyin": "sī",
    "strokes": 5,
    "words": [
      "丝棉",
      "丝织",
      "丝瓜络"
    ],
    "sentence": "学会了「丝」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 845
  },
  {
    "char": "杆",
    "pinyin": "gān",
    "strokes": 7,
    "words": [
      "杆塔",
      "杆子",
      "杆秤"
    ],
    "sentence": "「杆」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 846
  },
  {
    "char": "眨",
    "pinyin": "zhǎ",
    "strokes": 9,
    "words": [
      "眨眼间",
      "学眨",
      "大眨"
    ],
    "sentence": "「眨」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 847
  },
  {
    "char": "涛",
    "pinyin": "tāo",
    "strokes": 10,
    "words": [
      "风涛",
      "惊风怒涛",
      "波涛汹涌"
    ],
    "sentence": "「涛」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 848
  },
  {
    "char": "陈",
    "pinyin": "chén",
    "strokes": 7,
    "words": [
      "陈说",
      "陈酿",
      "条陈"
    ],
    "sentence": "「陈」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 849
  },
  {
    "char": "转",
    "pinyin": "zhuǎn",
    "strokes": 8,
    "words": [
      "转世",
      "转业",
      "转为"
    ],
    "sentence": "学会了「转」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 850
  },
  {
    "char": "斜",
    "pinyin": "xié",
    "strokes": 11,
    "words": [
      "斜街",
      "乜斜",
      "打斜"
    ],
    "sentence": "「斜」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 851
  },
  {
    "char": "吴",
    "pinyin": "wú",
    "strokes": 7,
    "words": [
      "吴中",
      "吴堡",
      "吴王"
    ],
    "sentence": "「吴」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 852
  },
  {
    "char": "含",
    "pinyin": "hán",
    "strokes": 7,
    "words": [
      "含有",
      "含沙",
      "含混"
    ],
    "sentence": "学会了「含」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 853
  },
  {
    "char": "窗",
    "pinyin": "chuāng",
    "strokes": 12,
    "words": [
      "窗台",
      "窗扇",
      "窗机"
    ],
    "sentence": "「窗」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 854
  },
  {
    "char": "炉",
    "pinyin": "lú",
    "strokes": 8,
    "words": [
      "炉台",
      "炉瓦",
      "炉门"
    ],
    "sentence": "学会了「炉」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 855
  },
  {
    "char": "岭",
    "pinyin": "lǐng",
    "strokes": 8,
    "words": [
      "岭南",
      "云岭",
      "五岭"
    ],
    "sentence": "「岭」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 856
  },
  {
    "char": "鸣",
    "pinyin": "míng",
    "strokes": 8,
    "words": [
      "鸣炮",
      "共鸣",
      "和鸣"
    ],
    "sentence": "「鸣」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 857
  },
  {
    "char": "绝",
    "pinyin": "jué",
    "strokes": 9,
    "words": [
      "绝倒",
      "绝地",
      "绝收"
    ],
    "sentence": "「绝」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 858
  },
  {
    "char": "银",
    "pinyin": "yín",
    "strokes": 11,
    "words": [
      "银子",
      "银行",
      "银装"
    ],
    "sentence": "「银」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 859
  },
  {
    "char": "烟",
    "pinyin": "yān",
    "strokes": 10,
    "words": [
      "烟卷",
      "烟叶",
      "烟头"
    ],
    "sentence": "学会了「烟」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 860
  },
  {
    "char": "泊",
    "pinyin": "pō",
    "strokes": 8,
    "words": [
      "泊位",
      "泊地",
      "泊车"
    ],
    "sentence": "「泊」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 861
  },
  {
    "char": "流",
    "pinyin": "liú",
    "strokes": 10,
    "words": [
      "流丽",
      "流云",
      "流亡"
    ],
    "sentence": "学会了「流」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 862
  },
  {
    "char": "柳",
    "pinyin": "liǔ",
    "strokes": 9,
    "words": [
      "柳体",
      "柳叶",
      "柳巷"
    ],
    "sentence": "「柳」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 863
  },
  {
    "char": "垂",
    "pinyin": "chuí",
    "strokes": 8,
    "words": [
      "垂体",
      "垂吊",
      "垂头"
    ],
    "sentence": "「垂」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 864
  },
  {
    "char": "乱",
    "pinyin": "luàn",
    "strokes": 7,
    "words": [
      "乱发",
      "乱弹",
      "乱打"
    ],
    "sentence": "「乱」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 865
  },
  {
    "char": "沉",
    "pinyin": "chén",
    "strokes": 7,
    "words": [
      "沉底",
      "沉思",
      "沉毅"
    ],
    "sentence": "「沉」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 866
  },
  {
    "char": "压",
    "pinyin": "yā",
    "strokes": 6,
    "words": [
      "压产",
      "压仓",
      "压价"
    ],
    "sentence": "「压」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 867
  },
  {
    "char": "逃",
    "pinyin": "táo",
    "strokes": 9,
    "words": [
      "逃亡",
      "逃奔",
      "逃敌"
    ],
    "sentence": "「逃」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 868
  },
  {
    "char": "越",
    "pinyin": "yuè",
    "strokes": 12,
    "words": [
      "越是",
      "北越",
      "南越"
    ],
    "sentence": "「越」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 869
  },
  {
    "char": "阵",
    "pinyin": "zhèn",
    "strokes": 6,
    "words": [
      "阵亡",
      "阵发",
      "阵地"
    ],
    "sentence": "学会了「阵」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 870
  },
  {
    "char": "彩",
    "pinyin": "cǎi",
    "strokes": 11,
    "words": [
      "彩像",
      "彩排",
      "彩管"
    ],
    "sentence": "学会了「彩」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 871
  },
  {
    "char": "虹",
    "pinyin": "hóng",
    "strokes": 9,
    "words": [
      "虹鳟鱼",
      "长虹",
      "虹销雨霁"
    ],
    "sentence": "「虹」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 872
  },
  {
    "char": "蝉",
    "pinyin": "chán",
    "strokes": 14,
    "words": [
      "秋蝉",
      "蝉不知雪",
      "蝉喘雷干"
    ],
    "sentence": "「蝉」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 873
  },
  {
    "char": "蜘",
    "pinyin": "zhī",
    "strokes": 14,
    "words": [
      "红蜘蛛",
      "棉红蜘蛛"
    ],
    "sentence": "学会了「蜘」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 874
  },
  {
    "char": "蛛",
    "pinyin": "zhū",
    "strokes": 12,
    "words": [
      "红蜘蛛",
      "棉红蜘蛛"
    ],
    "sentence": "学会了「蛛」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 875
  },
  {
    "char": "册",
    "pinyin": "cè",
    "strokes": 5,
    "words": [
      "册子",
      "分册",
      "在册"
    ],
    "sentence": "学会了「册」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 876
  },
  {
    "char": "岩",
    "pinyin": "yán",
    "strokes": 8,
    "words": [
      "岩浆",
      "岩石",
      "岩羊"
    ],
    "sentence": "「岩」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 877
  },
  {
    "char": "宝",
    "pinyin": "bǎo",
    "strokes": 8,
    "words": [
      "宝刹",
      "宝号",
      "宝地"
    ],
    "sentence": "「宝」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 878
  },
  {
    "char": "趴",
    "pinyin": "pā",
    "strokes": 9,
    "words": [
      "学趴",
      "大趴",
      "小趴"
    ],
    "sentence": "学会了「趴」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 879
  },
  {
    "char": "印",
    "pinyin": "yìn",
    "strokes": 5,
    "words": [
      "印件",
      "印信",
      "印儿"
    ],
    "sentence": "学会了「印」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 880
  },
  {
    "char": "刨",
    "pinyin": "páo",
    "strokes": 7,
    "words": [
      "刨冰",
      "刨刀",
      "刨削"
    ],
    "sentence": "学会了「刨」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 881
  },
  {
    "char": "埋",
    "pinyin": "mái",
    "strokes": 10,
    "words": [
      "埋藏",
      "埋没",
      "埋头"
    ],
    "sentence": "「埋」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 882
  },
  {
    "char": "陆",
    "pinyin": "lù",
    "strokes": 7,
    "words": [
      "陆万",
      "陆上",
      "陆仟"
    ],
    "sentence": "「陆」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 883
  },
  {
    "char": "铁",
    "pinyin": "tiě",
    "strokes": 10,
    "words": [
      "铁厂",
      "铁岭",
      "铁打"
    ],
    "sentence": "学会了「铁」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 884
  },
  {
    "char": "质",
    "pinyin": "zhì",
    "strokes": 8,
    "words": [
      "质优",
      "质体",
      "质地"
    ],
    "sentence": "「质」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 885
  },
  {
    "char": "厚",
    "pinyin": "hòu",
    "strokes": 9,
    "words": [
      "厚度",
      "厚待",
      "厚朴"
    ],
    "sentence": "学会了「厚」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 886
  },
  {
    "char": "底",
    "pinyin": "dǐ",
    "strokes": 8,
    "words": [
      "底下",
      "底价",
      "底册"
    ],
    "sentence": "学会了「底」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 887
  },
  {
    "char": "忠",
    "pinyin": "zhōng",
    "strokes": 8,
    "words": [
      "忠仆",
      "忠信",
      "忠骨"
    ],
    "sentence": "「忠」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 888
  },
  {
    "char": "导",
    "pinyin": "dǎo",
    "strokes": 6,
    "words": [
      "导体",
      "导弹",
      "导流"
    ],
    "sentence": "学会了「导」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 889
  },
  {
    "char": "盏",
    "pinyin": "zhǎn",
    "strokes": 10,
    "words": [
      "把盏",
      "茶盏",
      "传杯弄盏"
    ],
    "sentence": "学会了「盏」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 890
  },
  {
    "char": "积",
    "pinyin": "jī",
    "strokes": 10,
    "words": [
      "积分",
      "积压",
      "积攒"
    ],
    "sentence": "学会了「积」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 891
  },
  {
    "char": "稠",
    "pinyin": "chóu",
    "strokes": 13,
    "words": [
      "稠度",
      "稠糊",
      "粘稠"
    ],
    "sentence": "「稠」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 892
  },
  {
    "char": "稀",
    "pinyin": "xī",
    "strokes": 12,
    "words": [
      "稀奇",
      "稀少",
      "稀拉"
    ],
    "sentence": "学会了「稀」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 893
  },
  {
    "char": "针",
    "pinyin": "zhēn",
    "strokes": 7,
    "words": [
      "针刺",
      "针叶",
      "针头"
    ],
    "sentence": "「针」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 894
  },
  {
    "char": "碰",
    "pinyin": "pèng",
    "strokes": 13,
    "words": [
      "碰头",
      "碰见",
      "相碰"
    ],
    "sentence": "「碰」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 895
  },
  {
    "char": "慌",
    "pinyin": "huāng",
    "strokes": 12,
    "words": [
      "发慌",
      "着慌",
      "慌不择路"
    ],
    "sentence": "「慌」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 896
  },
  {
    "char": "兄",
    "pinyin": "xiōng",
    "strokes": 5,
    "words": [
      "兄弟",
      "兄长",
      "令兄"
    ],
    "sentence": "学会了「兄」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 897
  },
  {
    "char": "呆",
    "pinyin": "dāi",
    "strokes": 7,
    "words": [
      "呆头",
      "呆子",
      "呆板"
    ],
    "sentence": "「呆」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 898
  },
  {
    "char": "商",
    "pinyin": "shāng",
    "strokes": 11,
    "words": [
      "商会",
      "商兑",
      "商厦"
    ],
    "sentence": "「商」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 899
  },
  {
    "char": "抹",
    "pinyin": "mǒ",
    "strokes": 8,
    "words": [
      "抹墙",
      "抹子",
      "抹布"
    ],
    "sentence": "「抹」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 900
  },
  {
    "char": "挤",
    "pinyin": "jǐ",
    "strokes": 9,
    "words": [
      "挤兑",
      "挤占",
      "挤压"
    ],
    "sentence": "学会了「挤」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 901
  },
  {
    "char": "拱",
    "pinyin": "gǒng",
    "strokes": 9,
    "words": [
      "拱券",
      "拱圈",
      "打拱"
    ],
    "sentence": "学会了「拱」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 902
  },
  {
    "char": "决",
    "pinyin": "jué",
    "strokes": 6,
    "words": [
      "决不",
      "决别",
      "决斗"
    ],
    "sentence": "「决」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 903
  },
  {
    "char": "价",
    "pinyin": "jià",
    "strokes": 6,
    "words": [
      "价值",
      "价格",
      "价目"
    ],
    "sentence": "「价」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 904
  },
  {
    "char": "钱",
    "pinyin": "qián",
    "strokes": 10,
    "words": [
      "钱夹",
      "钱数",
      "钱柜"
    ],
    "sentence": "「钱」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 905
  },
  {
    "char": "购",
    "pinyin": "gòu",
    "strokes": 8,
    "words": [
      "购得",
      "承购",
      "抢购"
    ],
    "sentence": "「购」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 906
  },
  {
    "char": "批",
    "pinyin": "pī",
    "strokes": 7,
    "words": [
      "批假",
      "批发",
      "批号"
    ],
    "sentence": "「批」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 907
  },
  {
    "char": "评",
    "pinyin": "píng",
    "strokes": 7,
    "words": [
      "评价",
      "评传",
      "评估"
    ],
    "sentence": "「评」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 908
  },
  {
    "char": "报",
    "pinyin": "bào",
    "strokes": 7,
    "words": [
      "报业",
      "报丧"
    ],
    "sentence": "「报」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 909
  },
  {
    "char": "玻",
    "pinyin": "bō",
    "strokes": 9,
    "words": [
      "玻璃",
      "玻璃杯",
      "玻璃碴"
    ],
    "sentence": "「玻」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 910
  },
  {
    "char": "璃",
    "pinyin": "lí",
    "strokes": 14,
    "words": [
      "玻璃",
      "玻璃杯",
      "玻璃碴"
    ],
    "sentence": "「璃」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 911
  },
  {
    "char": "破",
    "pinyin": "pò",
    "strokes": 10,
    "words": [
      "破坏",
      "破家",
      "破片"
    ],
    "sentence": "学会了「破」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 912
  },
  {
    "char": "碎",
    "pinyin": "suì",
    "strokes": 13,
    "words": [
      "碎片",
      "碎石",
      "碎裂"
    ],
    "sentence": "「碎」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 913
  },
  {
    "char": "滑",
    "pinyin": "huá",
    "strokes": 12,
    "words": [
      "滑头",
      "滑嫩",
      "滑润"
    ],
    "sentence": "「滑」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 914
  },
  {
    "char": "继",
    "pinyin": "jì",
    "strokes": 10,
    "words": [
      "继任",
      "继父",
      "相继"
    ],
    "sentence": "「继」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 915
  },
  {
    "char": "续",
    "pinyin": "xù",
    "strokes": 11,
    "words": [
      "续会",
      "续建",
      "续稿"
    ],
    "sentence": "「续」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 916
  },
  {
    "char": "封",
    "pinyin": "fēng",
    "strokes": 9,
    "words": [
      "封号",
      "封地",
      "封底"
    ],
    "sentence": "学会了「封」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 917
  },
  {
    "char": "骄",
    "pinyin": "jiāo",
    "strokes": 9,
    "words": [
      "骄横",
      "骄矜",
      "骄纵"
    ],
    "sentence": "学会了「骄」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 918
  },
  {
    "char": "傲",
    "pinyin": "ào",
    "strokes": 12,
    "words": [
      "傲骨",
      "应傲",
      "傲不可长"
    ],
    "sentence": "「傲」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 919
  },
  {
    "char": "拎",
    "pinyin": "līn",
    "strokes": 8,
    "words": [
      "学拎",
      "大拎",
      "小拎"
    ],
    "sentence": "学会了「拎」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 920
  },
  {
    "char": "桶",
    "pinyin": "tǒng",
    "strokes": 11,
    "words": [
      "便桶",
      "净桶",
      "油桶"
    ],
    "sentence": "「桶」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 921
  },
  {
    "char": "停",
    "pinyin": "tíng",
    "strokes": 11,
    "words": [
      "停发",
      "停建",
      "停当"
    ],
    "sentence": "学会了「停」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 922
  },
  {
    "char": "聪",
    "pinyin": "cōng",
    "strokes": 15,
    "words": [
      "聪明智能",
      "聪明正直",
      "蔽明塞聪"
    ],
    "sentence": "学会了「聪」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 923
  },
  {
    "char": "胳",
    "pinyin": "gē",
    "strokes": 10,
    "words": [
      "胳肢",
      "胳膊",
      "胳臂"
    ],
    "sentence": "学会了「胳」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 924
  },
  {
    "char": "膊",
    "pinyin": "bó",
    "strokes": 14,
    "words": [
      "膊裂",
      "胳膊",
      "臂膊"
    ],
    "sentence": "学会了「膊」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 925
  },
  {
    "char": "甸",
    "pinyin": "diān",
    "strokes": 7,
    "words": [
      "甸子",
      "林甸",
      "罗甸"
    ],
    "sentence": "「甸」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 926
  },
  {
    "char": "晃",
    "pinyin": "huǎng",
    "strokes": 10,
    "words": [
      "晃动",
      "晃悠",
      "晃摇"
    ],
    "sentence": "「晃」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 927
  },
  {
    "char": "荡",
    "pinyin": "dàng",
    "strokes": 9,
    "words": [
      "扫荡",
      "摇荡",
      "晃荡"
    ],
    "sentence": "学会了「荡」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 928
  },
  {
    "char": "叭",
    "pinyin": "bā",
    "strokes": 5,
    "words": [
      "喇叭口",
      "学叭",
      "大叭"
    ],
    "sentence": "学会了「叭」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 929
  },
  {
    "char": "玲",
    "pinyin": "líng",
    "strokes": 9,
    "words": [
      "学玲",
      "大玲",
      "小玲"
    ],
    "sentence": "「玲」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 930
  },
  {
    "char": "狗",
    "pinyin": "gǒu",
    "strokes": 8,
    "words": [
      "狗头",
      "狗胆",
      "恶狗"
    ],
    "sentence": "「狗」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 931
  },
  {
    "char": "糟",
    "pinyin": "zāo",
    "strokes": 17,
    "words": [
      "糟糠之妻",
      "乱七八糟",
      "哺糟啜醨"
    ],
    "sentence": "「糟」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 932
  },
  {
    "char": "楼",
    "pinyin": "lóu",
    "strokes": 13,
    "words": [
      "楼上",
      "楼区",
      "楼台"
    ],
    "sentence": "学会了「楼」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 933
  },
  {
    "char": "梯",
    "pinyin": "tī",
    "strokes": 11,
    "words": [
      "梯子",
      "滚梯",
      "楼梯间"
    ],
    "sentence": "学会了「梯」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 934
  },
  {
    "char": "肯",
    "pinyin": "kěn",
    "strokes": 8,
    "words": [
      "肯于",
      "肯干",
      "肯綮"
    ],
    "sentence": "「肯」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 935
  },
  {
    "char": "脑",
    "pinyin": "nǎo",
    "strokes": 10,
    "words": [
      "脑壳",
      "脑子",
      "脑浆"
    ],
    "sentence": "学会了「脑」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 936
  },
  {
    "char": "筋",
    "pinyin": "jīn",
    "strokes": 12,
    "words": [
      "筋斗",
      "筋络",
      "筋脉"
    ],
    "sentence": "「筋」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 937
  },
  {
    "char": "讶",
    "pinyin": "yà",
    "strokes": 6,
    "words": [
      "学讶",
      "大讶",
      "小讶"
    ],
    "sentence": "「讶」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 938
  },
  {
    "char": "谈",
    "pinyin": "tán",
    "strokes": 10,
    "words": [
      "谈兴",
      "谈助",
      "谈吐"
    ],
    "sentence": "「谈」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 939
  },
  {
    "char": "派",
    "pinyin": "pài",
    "strokes": 9,
    "words": [
      "派别",
      "派发",
      "派员"
    ],
    "sentence": "「派」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 940
  },
  {
    "char": "引",
    "pinyin": "yǐn",
    "strokes": 4,
    "words": [
      "引信",
      "引发",
      "引号"
    ],
    "sentence": "「引」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 941
  },
  {
    "char": "列",
    "pinyin": "liè",
    "strokes": 6,
    "words": [
      "列传",
      "列强",
      "列车"
    ],
    "sentence": "学会了「列」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 942
  },
  {
    "char": "峰",
    "pinyin": "fēng",
    "strokes": 10,
    "words": [
      "山峰",
      "顶峰",
      "高峰"
    ],
    "sentence": "学会了「峰」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 943
  },
  {
    "char": "敲",
    "pinyin": "qiāo",
    "strokes": 14,
    "words": [
      "敲打",
      "敲竹杠",
      "敲敲打打"
    ],
    "sentence": "学会了「敲」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 944
  },
  {
    "char": "附",
    "pinyin": "fù",
    "strokes": 7,
    "words": [
      "附上",
      "附中",
      "附丽"
    ],
    "sentence": "学会了「附」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 945
  },
  {
    "char": "近",
    "pinyin": "jìn",
    "strokes": 7,
    "words": [
      "近亲",
      "近似",
      "近场"
    ],
    "sentence": "学会了「近」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 946
  },
  {
    "char": "守",
    "pinyin": "shǒu",
    "strokes": 6,
    "words": [
      "守丧",
      "守信",
      "守分"
    ],
    "sentence": "学会了「守」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 947
  },
  {
    "char": "丢",
    "pinyin": "diū",
    "strokes": 6,
    "words": [
      "丢面子",
      "丢三拉四",
      "丢三落四"
    ],
    "sentence": "学会了「丢」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 948
  },
  {
    "char": "焦",
    "pinyin": "jiāo",
    "strokes": 12,
    "words": [
      "焦化",
      "焦干",
      "焦思"
    ],
    "sentence": "学会了「焦」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 949
  },
  {
    "char": "费",
    "pinyin": "fèi",
    "strokes": 9,
    "words": [
      "费劲",
      "费解",
      "费难"
    ],
    "sentence": "「费」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 950
  },
  {
    "char": "望",
    "pinyin": "wàng",
    "strokes": 11,
    "words": [
      "仰望",
      "切望",
      "可望"
    ],
    "sentence": "学会了「望」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 951
  },
  {
    "char": "算",
    "pinyin": "suàn",
    "strokes": 14,
    "words": [
      "算了",
      "算尺",
      "算得"
    ],
    "sentence": "「算」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 952
  },
  {
    "char": "此",
    "pinyin": "cǐ",
    "strokes": 6,
    "words": [
      "此人",
      "此地",
      "此间"
    ],
    "sentence": "「此」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 953
  },
  {
    "char": "桩",
    "pinyin": "zhuāng",
    "strokes": 10,
    "words": [
      "打桩",
      "打桩机",
      "打桩船"
    ],
    "sentence": "「桩」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 954
  },
  {
    "char": "肥",
    "pinyin": "féi",
    "strokes": 8,
    "words": [
      "肥大",
      "肥差",
      "肥硕"
    ],
    "sentence": "「肥」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 955
  },
  {
    "char": "灰",
    "pinyin": "huī",
    "strokes": 6,
    "words": [
      "灰分",
      "灰化",
      "灰沙"
    ],
    "sentence": "「灰」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 956
  },
  {
    "char": "讨",
    "pinyin": "tǎo",
    "strokes": 5,
    "words": [
      "讨亲",
      "讨价",
      "讨好"
    ],
    "sentence": "「讨」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 957
  },
  {
    "char": "厌",
    "pinyin": "yàn",
    "strokes": 6,
    "words": [
      "厌学",
      "厌恶",
      "不厌"
    ],
    "sentence": "「厌」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 958
  },
  {
    "char": "冰",
    "pinyin": "bīng",
    "strokes": 6,
    "words": [
      "冰凉",
      "冰场",
      "冰坨"
    ],
    "sentence": "「冰」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 959
  },
  {
    "char": "蛋",
    "pinyin": "dàn",
    "strokes": 11,
    "words": [
      "蛋青",
      "蛋鸭",
      "坏蛋"
    ],
    "sentence": "「蛋」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 960
  },
  {
    "char": "壳",
    "pinyin": "ké",
    "strokes": 7,
    "words": [
      "壳子",
      "剥壳",
      "卡壳"
    ],
    "sentence": "「壳」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 961
  },
  {
    "char": "鸭",
    "pinyin": "yā",
    "strokes": 10,
    "words": [
      "鸭子",
      "鸭肉",
      "鸭肫"
    ],
    "sentence": "学会了「鸭」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 962
  },
  {
    "char": "欺",
    "pinyin": "qī",
    "strokes": 12,
    "words": [
      "欺压",
      "欺哄",
      "欺瞒"
    ],
    "sentence": "学会了「欺」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 963
  },
  {
    "char": "负",
    "pinyin": "fù",
    "strokes": 6,
    "words": [
      "负号",
      "负担",
      "负数"
    ],
    "sentence": "「负」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 964
  },
  {
    "char": "鹅",
    "pinyin": "é",
    "strokes": 12,
    "words": [
      "鹅蛋",
      "鹅卵石",
      "鹅掌风"
    ],
    "sentence": "「鹅」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 965
  },
  {
    "char": "翅",
    "pinyin": "chì",
    "strokes": 10,
    "words": [
      "翅膀",
      "翅鞘",
      "鸡翅"
    ],
    "sentence": "学会了「翅」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 966
  },
  {
    "char": "膀",
    "pinyin": "bǎng",
    "strokes": 14,
    "words": [
      "膀胱",
      "膀臂",
      "翅膀"
    ],
    "sentence": "「膀」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 967
  },
  {
    "char": "勺",
    "pinyin": "sháo",
    "strokes": 3,
    "words": [
      "汤勺",
      "饭勺",
      "勺状软骨"
    ],
    "sentence": "「勺」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 968
  },
  {
    "char": "斗",
    "pinyin": "dòu",
    "strokes": 4,
    "words": [
      "斗争",
      "斗勇",
      "斗嘴"
    ],
    "sentence": "学会了「斗」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 969
  },
  {
    "char": "玉",
    "pinyin": "yù",
    "strokes": 5,
    "words": [
      "玉体",
      "玉佛",
      "玉女"
    ],
    "sentence": "「玉」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 970
  },
  {
    "char": "组",
    "pinyin": "zǔ",
    "strokes": 8,
    "words": [
      "组分",
      "组办",
      "组合"
    ],
    "sentence": "「组」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 971
  },
  {
    "char": "珍",
    "pinyin": "zhēn",
    "strokes": 9,
    "words": [
      "珍奇",
      "珍摄",
      "珍藏"
    ],
    "sentence": "「珍」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 972
  },
  {
    "char": "珠",
    "pinyin": "zhū",
    "strokes": 10,
    "words": [
      "珠蚌",
      "珠被",
      "佛珠"
    ],
    "sentence": "学会了「珠」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 973
  },
  {
    "char": "数",
    "pinyin": "shù",
    "strokes": 13,
    "words": [
      "数九",
      "数位",
      "数值"
    ],
    "sentence": "「数」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 974
  },
  {
    "char": "钻",
    "pinyin": "zuān",
    "strokes": 10,
    "words": [
      "钻井",
      "钻具",
      "钻劲"
    ],
    "sentence": "「钻」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 975
  },
  {
    "char": "研",
    "pinyin": "yán",
    "strokes": 9,
    "words": [
      "研习",
      "研判",
      "研制"
    ],
    "sentence": "学会了「研」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 976
  },
  {
    "char": "睡",
    "pinyin": "shuì",
    "strokes": 13,
    "words": [
      "睡容",
      "睡椅",
      "睡相"
    ],
    "sentence": "「睡」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 977
  },
  {
    "char": "距",
    "pinyin": "jù",
    "strokes": 11,
    "words": [
      "差距",
      "测距",
      "相距"
    ],
    "sentence": "「距」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 978
  },
  {
    "char": "离",
    "pinyin": "lí",
    "strokes": 10,
    "words": [
      "离任",
      "离休",
      "离别"
    ],
    "sentence": "「离」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 979
  },
  {
    "char": "油",
    "pinyin": "yóu",
    "strokes": 8,
    "words": [
      "油区",
      "油品",
      "油坊"
    ],
    "sentence": "「油」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 980
  },
  {
    "char": "检",
    "pinyin": "jiǎn",
    "strokes": 11,
    "words": [
      "不检",
      "体检",
      "免检"
    ],
    "sentence": "「检」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 981
  },
  {
    "char": "查",
    "pinyin": "chá",
    "strokes": 9,
    "words": [
      "查体",
      "查办",
      "查勘"
    ],
    "sentence": "「查」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 982
  },
  {
    "char": "团",
    "pinyin": "tuán",
    "strokes": 6,
    "words": [
      "团丁",
      "团体",
      "团员"
    ],
    "sentence": "「团」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 983
  },
  {
    "char": "斥",
    "pinyin": "chì",
    "strokes": 5,
    "words": [
      "呵斥",
      "喝斥",
      "排斥异己"
    ],
    "sentence": "「斥」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 984
  },
  {
    "char": "责",
    "pinyin": "zé",
    "strokes": 8,
    "words": [
      "责令",
      "责任",
      "责打"
    ],
    "sentence": "「责」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 985
  },
  {
    "char": "炎",
    "pinyin": "yán",
    "strokes": 8,
    "words": [
      "炎凉",
      "炎症",
      "发炎"
    ],
    "sentence": "「炎」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 986
  },
  {
    "char": "夸",
    "pinyin": "kuā",
    "strokes": 6,
    "words": [
      "夸口",
      "夸嘴",
      "夸大"
    ],
    "sentence": "学会了「夸」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 987
  },
  {
    "char": "奖",
    "pinyin": "jiǎng",
    "strokes": 9,
    "words": [
      "奖券",
      "奖掖",
      "中奖"
    ],
    "sentence": "学会了「奖」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 988
  },
  {
    "char": "亡",
    "pinyin": "wáng",
    "strokes": 3,
    "words": [
      "亡佚",
      "亡党",
      "亡友"
    ],
    "sentence": "「亡」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 989
  },
  {
    "char": "肉",
    "pinyin": "ròu",
    "strokes": 6,
    "words": [
      "肉丁",
      "肉体",
      "肉冠"
    ],
    "sentence": "学会了「肉」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 990
  },
  {
    "char": "耐",
    "pinyin": "nài",
    "strokes": 9,
    "words": [
      "耐看",
      "耐磨",
      "耐饥"
    ],
    "sentence": "学会了「耐」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 991
  },
  {
    "char": "谜",
    "pinyin": "mí",
    "strokes": 11,
    "words": [
      "哑谜",
      "解谜",
      "谜一样"
    ],
    "sentence": "「谜」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 992
  },
  {
    "char": "传",
    "pinyin": "chuán",
    "strokes": 6,
    "words": [
      "传世",
      "传习",
      "传人"
    ],
    "sentence": "「传」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 993
  },
  {
    "char": "染",
    "pinyin": "rǎn",
    "strokes": 9,
    "words": [
      "染坊",
      "传染"
    ],
    "sentence": "「染」字的笔顺要写对。",
    "grade": "二年级下册",
    "level": 4,
    "id": 994
  },
  {
    "char": "类",
    "pinyin": "lèi",
    "strokes": 9,
    "words": [
      "类似",
      "类别",
      "类同"
    ],
    "sentence": "「类」字在生活中很常见。",
    "grade": "二年级下册",
    "level": 4,
    "id": 995
  },
  {
    "char": "严",
    "pinyin": "yán",
    "strokes": 7,
    "words": [
      "严令",
      "严处",
      "严查"
    ],
    "sentence": "学会了「严」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 996
  },
  {
    "char": "寒",
    "pinyin": "hán",
    "strokes": 12,
    "words": [
      "寒伧",
      "寒假",
      "寒凉"
    ],
    "sentence": "学会了「寒」字，又多了一个朋友。",
    "grade": "二年级下册",
    "level": 4,
    "id": 997
  },
  {
    "char": "坪",
    "pinyin": "píng",
    "strokes": 8,
    "words": [
      "草坪",
      "地坪"
    ],
    "sentence": "「坪」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 998
  },
  {
    "char": "坝",
    "pinyin": "bà",
    "strokes": 7,
    "words": [
      "大坝",
      "水坝",
      "堤坝"
    ],
    "sentence": "「坝」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 999
  },
  {
    "char": "戴",
    "pinyin": "dài",
    "strokes": 17,
    "words": [
      "爱戴",
      "穿戴",
      "佩戴"
    ],
    "sentence": "用「戴」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1000
  },
  {
    "char": "招",
    "pinyin": "zhāo",
    "strokes": 8,
    "words": [
      "招亲",
      "招供",
      "招办"
    ],
    "sentence": "用「招」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1001
  },
  {
    "char": "蝴",
    "pinyin": "hú",
    "strokes": 15,
    "words": [
      "蝴蝶"
    ],
    "sentence": "用「蝴」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1002
  },
  {
    "char": "蝶",
    "pinyin": "dié",
    "strokes": 15,
    "words": [
      "蝴蝶",
      "彩蝶"
    ],
    "sentence": "认真书写「蝶」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1003
  },
  {
    "char": "孔",
    "pinyin": "kǒng",
    "strokes": 4,
    "words": [
      "孔子",
      "面孔",
      "孔雀"
    ],
    "sentence": "认真书写「孔」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1004
  },
  {
    "char": "雀",
    "pinyin": "què",
    "strokes": 11,
    "words": [
      "麻雀",
      "孔雀",
      "鸟雀"
    ],
    "sentence": "认真书写「雀」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1005
  },
  {
    "char": "舞",
    "pinyin": "wǔ",
    "strokes": 14,
    "words": [
      "跳舞",
      "舞蹈",
      "舞动"
    ],
    "sentence": "认真书写「舞」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1006
  },
  {
    "char": "铜",
    "pinyin": "tóng",
    "strokes": 11,
    "words": [
      "铜钟",
      "铜板",
      "铜牌"
    ],
    "sentence": "认真书写「铜」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1007
  },
  {
    "char": "粗",
    "pinyin": "cū",
    "strokes": 11,
    "words": [
      "粗细",
      "粗心",
      "粗糙"
    ],
    "sentence": "认真书写「粗」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1008
  },
  {
    "char": "尾",
    "pinyin": "wěi",
    "strokes": 7,
    "words": [
      "尾巴",
      "结尾",
      "尾随"
    ],
    "sentence": "用「尾」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1009
  },
  {
    "char": "装",
    "pinyin": "zhuāng",
    "strokes": 12,
    "words": [
      "服装",
      "装修",
      "装满"
    ],
    "sentence": "认真书写「装」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1010
  },
  {
    "char": "劲",
    "pinyin": "jìn",
    "strokes": 7,
    "words": [
      "使劲",
      "干劲",
      "用劲"
    ],
    "sentence": "「劲」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1011
  },
  {
    "char": "绒",
    "pinyin": "róng",
    "strokes": 9,
    "words": [
      "绒毛",
      "绒线"
    ],
    "sentence": "认真书写「绒」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1012
  },
  {
    "char": "朝",
    "pinyin": "cháo",
    "strokes": 12,
    "words": [
      "朝向",
      "朝夕",
      "朝代"
    ],
    "sentence": "「朝」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1013
  },
  {
    "char": "些",
    "pinyin": "xiē",
    "strokes": 8,
    "words": [
      "些个",
      "些小",
      "些微"
    ],
    "sentence": "用「些」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1014
  },
  {
    "char": "钓",
    "pinyin": "diào",
    "strokes": 8,
    "words": [
      "钓钩",
      "海钓",
      "钓鱼台"
    ],
    "sentence": "用「钓」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1015
  },
  {
    "char": "察",
    "pinyin": "chá",
    "strokes": 14,
    "words": [
      "警察",
      "观察",
      "考察"
    ],
    "sentence": "用「察」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1016
  },
  {
    "char": "瓣",
    "pinyin": "bàn",
    "strokes": 19,
    "words": [
      "花瓣",
      "蒜瓣"
    ],
    "sentence": "「瓣」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1017
  },
  {
    "char": "拢",
    "pinyin": "lǒng",
    "strokes": 8,
    "words": [
      "合拢",
      "聚拢",
      "靠拢"
    ],
    "sentence": "认真书写「拢」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1018
  },
  {
    "char": "掌",
    "pinyin": "zhǎng",
    "strokes": 12,
    "words": [
      "手掌",
      "鼓掌",
      "掌握"
    ],
    "sentence": "用「掌」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1019
  },
  {
    "char": "趣",
    "pinyin": "qù",
    "strokes": 15,
    "words": [
      "趣事",
      "趣剧",
      "趣味"
    ],
    "sentence": "认真书写「趣」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1020
  },
  {
    "char": "爬",
    "pinyin": "pá",
    "strokes": 8,
    "words": [
      "爬坡",
      "爬行",
      "爬梳洗剔"
    ],
    "sentence": "认真书写「爬」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1021
  },
  {
    "char": "顶",
    "pinyin": "dǐng",
    "strokes": 8,
    "words": [
      "顶上",
      "顶头",
      "顶数"
    ],
    "sentence": "「顶」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1022
  },
  {
    "char": "似",
    "pinyin": "shì",
    "strokes": 6,
    "words": [
      "似乎",
      "似曾",
      "似的"
    ],
    "sentence": "用「似」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1023
  },
  {
    "char": "苍",
    "pinyin": "cāng",
    "strokes": 7,
    "words": [
      "苍凉",
      "苍劲",
      "苍哑"
    ],
    "sentence": "用「苍」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1024
  },
  {
    "char": "仰",
    "pinyin": "yǎng",
    "strokes": 6,
    "words": [
      "仰仗",
      "仰光",
      "仰卧"
    ],
    "sentence": "「仰」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1025
  },
  {
    "char": "咱",
    "pinyin": "zán",
    "strokes": 9,
    "words": [
      "咱们",
      "咱俩",
      "咱家"
    ],
    "sentence": "认真书写「咱」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1026
  },
  {
    "char": "奋",
    "pinyin": "fèn",
    "strokes": 8,
    "words": [
      "奋发",
      "奋斗",
      "奋臂"
    ],
    "sentence": "认真书写「奋」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1027
  },
  {
    "char": "辫",
    "pinyin": "biàn",
    "strokes": 17,
    "words": [
      "辫子",
      "发辫",
      "翘辫子"
    ],
    "sentence": "认真书写「辫」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1028
  },
  {
    "char": "勇",
    "pinyin": "yǒng",
    "strokes": 9,
    "words": [
      "勇敢",
      "勇气",
      "英勇"
    ],
    "sentence": "用「勇」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1029
  },
  {
    "char": "居",
    "pinyin": "jū",
    "strokes": 8,
    "words": [
      "居丧",
      "居中",
      "居于"
    ],
    "sentence": "「居」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1030
  },
  {
    "char": "郊",
    "pinyin": "jiāo",
    "strokes": 8,
    "words": [
      "郊区",
      "郊县",
      "北郊"
    ],
    "sentence": "认真书写「郊」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1031
  },
  {
    "char": "散",
    "pinyin": "sàn",
    "strokes": 12,
    "words": [
      "散步",
      "分散",
      "散开"
    ],
    "sentence": "用「散」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1032
  },
  {
    "char": "步",
    "pinyin": "bù",
    "strokes": 7,
    "words": [
      "步行",
      "步调",
      "便步"
    ],
    "sentence": "用「步」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1033
  },
  {
    "char": "胸",
    "pinyin": "xiōng",
    "strokes": 10,
    "words": [
      "胸口",
      "胸怀",
      "胸膛"
    ],
    "sentence": "「胸」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1034
  },
  {
    "char": "脯",
    "pinyin": "pú",
    "strokes": 11,
    "words": [
      "胸脯"
    ],
    "sentence": "认真书写「脯」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1035
  },
  {
    "char": "渣",
    "pinyin": "zhā",
    "strokes": 12,
    "words": [
      "渣子",
      "残渣"
    ],
    "sentence": "用「渣」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1036
  },
  {
    "char": "或",
    "pinyin": "huò",
    "strokes": 8,
    "words": [
      "或者",
      "或许"
    ],
    "sentence": "认真书写「或」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1037
  },
  {
    "char": "者",
    "pinyin": "zhě",
    "strokes": 8,
    "words": [
      "一者",
      "何者",
      "强者"
    ],
    "sentence": "用「者」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1038
  },
  {
    "char": "敢",
    "pinyin": "gǎn",
    "strokes": 11,
    "words": [
      "勇敢",
      "敢说",
      "敢于"
    ],
    "sentence": "认真书写「敢」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1039
  },
  {
    "char": "惜",
    "pinyin": "xī",
    "strokes": 11,
    "words": [
      "惜败",
      "不惜",
      "体惜"
    ],
    "sentence": "认真书写「惜」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1040
  },
  {
    "char": "低",
    "pinyin": "dī",
    "strokes": 7,
    "words": [
      "低估",
      "低凹",
      "低压"
    ],
    "sentence": "认真书写「低」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1041
  },
  {
    "char": "诚",
    "pinyin": "chéng",
    "strokes": 8,
    "words": [
      "诚实",
      "真诚",
      "诚信"
    ],
    "sentence": "「诚」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1042
  },
  {
    "char": "基",
    "pinyin": "jī",
    "strokes": 11,
    "words": [
      "基地",
      "基数",
      "基色"
    ],
    "sentence": "「基」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1043
  },
  {
    "char": "突",
    "pinyin": "tū",
    "strokes": 9,
    "words": [
      "突入",
      "突发",
      "突地"
    ],
    "sentence": "用「突」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1044
  },
  {
    "char": "按",
    "pinyin": "àn",
    "strokes": 9,
    "words": [
      "按压",
      "按摩",
      "按期"
    ],
    "sentence": "认真书写「按」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1045
  },
  {
    "char": "摆",
    "pinyin": "bǎi",
    "strokes": 13,
    "words": [
      "摆件",
      "摆弄",
      "摆擂"
    ],
    "sentence": "用「摆」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1046
  },
  {
    "char": "弄",
    "pinyin": "nòng",
    "strokes": 7,
    "words": [
      "弄假",
      "弄口",
      "弄堂"
    ],
    "sentence": "认真书写「弄」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1047
  },
  {
    "char": "准",
    "pinyin": "zhǔn",
    "strokes": 10,
    "words": [
      "准予",
      "准信",
      "准假"
    ],
    "sentence": "认真书写「准」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1048
  },
  {
    "char": "备",
    "pinyin": "bèi",
    "strokes": 8,
    "words": [
      "备份",
      "备员",
      "备有"
    ],
    "sentence": "认真书写「备」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1049
  },
  {
    "char": "侧",
    "pinyin": "cè",
    "strokes": 8,
    "words": [
      "侧击",
      "侧卧",
      "侧向"
    ],
    "sentence": "用「侧」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1050
  },
  {
    "char": "胶",
    "pinyin": "jiāo",
    "strokes": 10,
    "words": [
      "胶丸",
      "胶体",
      "胶卷"
    ],
    "sentence": "用「胶」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1051
  },
  {
    "char": "卷",
    "pinyin": "juǎn",
    "strokes": 8,
    "words": [
      "卷云",
      "卷卷",
      "卷卷"
    ],
    "sentence": "认真书写「卷」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1052
  },
  {
    "char": "辆",
    "pinyin": "liàng",
    "strokes": 11,
    "words": [
      "车辆",
      "车辆厂",
      "车辆段"
    ],
    "sentence": "用「辆」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1053
  },
  {
    "char": "秘",
    "pinyin": "mì",
    "strokes": 10,
    "words": [
      "秘书",
      "秘传",
      "秘史"
    ],
    "sentence": "用「秘」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1054
  },
  {
    "char": "杂",
    "pinyin": "zá",
    "strokes": 6,
    "words": [
      "杂处",
      "杂家",
      "杂差"
    ],
    "sentence": "认真书写「杂」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1055
  },
  {
    "char": "社",
    "pinyin": "shè",
    "strokes": 7,
    "words": [
      "社会",
      "社区",
      "社员"
    ],
    "sentence": "「社」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1056
  },
  {
    "char": "著",
    "pinyin": "zhù",
    "strokes": 11,
    "words": [
      "著文",
      "专著",
      "卓著"
    ],
    "sentence": "认真书写「著」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1057
  },
  {
    "char": "藏",
    "pinyin": "cáng",
    "strokes": 17,
    "words": [
      "藏书",
      "藏人",
      "藏医"
    ],
    "sentence": "用「藏」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1058
  },
  {
    "char": "悄",
    "pinyin": "qiāo",
    "strokes": 10,
    "words": [
      "悄声",
      "悄寂",
      "悄悄"
    ],
    "sentence": "「悄」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1059
  },
  {
    "char": "闪",
    "pinyin": "shǎn",
    "strokes": 5,
    "words": [
      "闪射",
      "闪过",
      "打闪"
    ],
    "sentence": "「闪」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1060
  },
  {
    "char": "坑",
    "pinyin": "kēng",
    "strokes": 7,
    "words": [
      "坑蒙",
      "沙坑",
      "泥坑"
    ],
    "sentence": "用「坑」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1061
  },
  {
    "char": "臣",
    "pinyin": "chén",
    "strokes": 6,
    "words": [
      "臣仆",
      "臣服",
      "内臣"
    ],
    "sentence": "用「臣」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1062
  },
  {
    "char": "推",
    "pinyin": "tuī",
    "strokes": 11,
    "words": [
      "推普",
      "推磨",
      "助推"
    ],
    "sentence": "认真书写「推」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1063
  },
  {
    "char": "旅",
    "pinyin": "lǚ",
    "strokes": 10,
    "words": [
      "旅舍",
      "旅行",
      "旅贲"
    ],
    "sentence": "用「旅」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1064
  },
  {
    "char": "考",
    "pinyin": "kǎo",
    "strokes": 6,
    "words": [
      "考中",
      "考分",
      "考区"
    ],
    "sentence": "用「考」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1065
  },
  {
    "char": "秦",
    "pinyin": "qín",
    "strokes": 10,
    "words": [
      "秦岭",
      "秦桧",
      "秦艽"
    ],
    "sentence": "「秦」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1066
  },
  {
    "char": "纪",
    "pinyin": "jì",
    "strokes": 6,
    "words": [
      "纪事",
      "纪元",
      "纪委"
    ],
    "sentence": "认真书写「纪」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1067
  },
  {
    "char": "遗",
    "pinyin": "yí",
    "strokes": 12,
    "words": [
      "遗书",
      "遗传",
      "遗体"
    ],
    "sentence": "「遗」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1068
  },
  {
    "char": "究",
    "pinyin": "jiū",
    "strokes": 7,
    "words": [
      "究诘",
      "查究",
      "研究"
    ],
    "sentence": "认真书写「究」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1069
  },
  {
    "char": "震",
    "pinyin": "zhèn",
    "strokes": 15,
    "words": [
      "地震",
      "震动",
      "震惊"
    ],
    "sentence": "用「震」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1070
  },
  {
    "char": "促",
    "pinyin": "cù",
    "strokes": 9,
    "words": [
      "促进派",
      "敦促",
      "迫促"
    ],
    "sentence": "「促」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1071
  },
  {
    "char": "深",
    "pinyin": "shēn",
    "strokes": 11,
    "words": [
      "深为",
      "深切",
      "深化"
    ],
    "sentence": "「深」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1072
  },
  {
    "char": "忆",
    "pinyin": "yì",
    "strokes": 4,
    "words": [
      "记忆",
      "回忆",
      "记亿"
    ],
    "sentence": "用「忆」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1073
  },
  {
    "char": "异",
    "pinyin": "yì",
    "strokes": 6,
    "words": [
      "异于",
      "异化",
      "异同"
    ],
    "sentence": "认真书写「异」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1074
  },
  {
    "char": "逢",
    "pinyin": "féng",
    "strokes": 10,
    "words": [
      "恰逢",
      "相逢",
      "重逢"
    ],
    "sentence": "「逢」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1075
  },
  {
    "char": "佳",
    "pinyin": "jiā",
    "strokes": 8,
    "words": [
      "佳节",
      "佳肴",
      "最佳"
    ],
    "sentence": "认真书写「佳」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1076
  },
  {
    "char": "倍",
    "pinyin": "bèi",
    "strokes": 10,
    "words": [
      "加倍",
      "倍数",
      "倍增"
    ],
    "sentence": "用「倍」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1077
  },
  {
    "char": "遥",
    "pinyin": "yáo",
    "strokes": 13,
    "words": [
      "遥远",
      "遥控",
      "遥遥"
    ],
    "sentence": "认真书写「遥」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1078
  },
  {
    "char": "遍",
    "pinyin": "biàn",
    "strokes": 12,
    "words": [
      "一遍",
      "遍地",
      "普遍"
    ],
    "sentence": "「遍」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1079
  },
  {
    "char": "插",
    "pinyin": "chā",
    "strokes": 12,
    "words": [
      "插入",
      "插花",
      "插队"
    ],
    "sentence": "用「插」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1080
  },
  {
    "char": "精",
    "pinyin": "jīng",
    "strokes": 14,
    "words": [
      "精华",
      "精干",
      "精度"
    ],
    "sentence": "认真书写「精」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1081
  },
  {
    "char": "希",
    "pinyin": "xī",
    "strokes": 7,
    "words": [
      "希奇",
      "希有",
      "希腊"
    ],
    "sentence": "用「希」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1082
  },
  {
    "char": "却",
    "pinyin": "què",
    "strokes": 7,
    "words": [
      "却说",
      "了却",
      "省却"
    ],
    "sentence": "「却」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1083
  },
  {
    "char": "依",
    "pinyin": "yī",
    "strokes": 8,
    "words": [
      "依从",
      "依据",
      "依约"
    ],
    "sentence": "认真书写「依」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1084
  },
  {
    "char": "拼",
    "pinyin": "pīn",
    "strokes": 9,
    "words": [
      "拼刺",
      "拼合",
      "拼抢"
    ],
    "sentence": "用「拼」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1085
  },
  {
    "char": "命",
    "pinyin": "mìng",
    "strokes": 8,
    "words": [
      "命中",
      "命令",
      "命大"
    ],
    "sentence": "「命」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1086
  },
  {
    "char": "奔",
    "pinyin": "bēn",
    "strokes": 8,
    "words": [
      "奔丧",
      "奔劳",
      "奔命"
    ],
    "sentence": "「奔」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1087
  },
  {
    "char": "村",
    "pinyin": "cūn",
    "strokes": 7,
    "words": [
      "村上",
      "村夫",
      "村头"
    ],
    "sentence": "用「村」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1088
  },
  {
    "char": "抖",
    "pinyin": "dǒu",
    "strokes": 7,
    "words": [
      "抖搂",
      "抖擞",
      "抖落"
    ],
    "sentence": "认真书写「抖」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1089
  },
  {
    "char": "丧",
    "pinyin": "sàng",
    "strokes": 8,
    "words": [
      "丧乱",
      "丧事",
      "丧亡"
    ],
    "sentence": "用「丧」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1090
  },
  {
    "char": "磨",
    "pinyin": "mó",
    "strokes": 16,
    "words": [
      "磨光",
      "磨具",
      "磨制"
    ],
    "sentence": "用「磨」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1091
  },
  {
    "char": "坊",
    "pinyin": "fāng",
    "strokes": 7,
    "words": [
      "坊巷",
      "坊本",
      "坊间"
    ],
    "sentence": "认真书写「坊」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1092
  },
  {
    "char": "扇",
    "pinyin": "shàn",
    "strokes": 10,
    "words": [
      "扇动",
      "扇坠",
      "扇子"
    ],
    "sentence": "用「扇」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1093
  },
  {
    "char": "枚",
    "pinyin": "méi",
    "strokes": 8,
    "words": [
      "不可枚举",
      "不胜枚举",
      "不遑枚举"
    ],
    "sentence": "认真书写「枚」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1094
  },
  {
    "char": "邮",
    "pinyin": "yóu",
    "strokes": 7,
    "words": [
      "邮册",
      "邮差",
      "邮票"
    ],
    "sentence": "用「邮」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1095
  },
  {
    "char": "爽",
    "pinyin": "shuǎng",
    "strokes": 11,
    "words": [
      "不爽",
      "凉爽",
      "干爽"
    ],
    "sentence": "认真书写「爽」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1096
  },
  {
    "char": "柿",
    "pinyin": "shì",
    "strokes": 9,
    "words": [
      "柿子",
      "西红柿"
    ],
    "sentence": "认真书写「柿」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1097
  },
  {
    "char": "仙",
    "pinyin": "xiān",
    "strokes": 5,
    "words": [
      "仙乐",
      "仙台",
      "仙女"
    ],
    "sentence": "「仙」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1098
  },
  {
    "char": "梨",
    "pinyin": "lí",
    "strokes": 11,
    "words": [
      "地梨",
      "沙梨",
      "梨园子弟"
    ],
    "sentence": "「梨」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1099
  },
  {
    "char": "菠",
    "pinyin": "bō",
    "strokes": 11,
    "words": [
      "学菠",
      "大菠",
      "小菠"
    ],
    "sentence": "认真书写「菠」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1100
  },
  {
    "char": "萝",
    "pinyin": "luó",
    "strokes": 11,
    "words": [
      "萝卜",
      "莳萝",
      "藤萝"
    ],
    "sentence": "用「萝」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1101
  },
  {
    "char": "粮",
    "pinyin": "liáng",
    "strokes": 13,
    "words": [
      "粮区",
      "粮囤",
      "粮油"
    ],
    "sentence": "认真书写「粮」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1102
  },
  {
    "char": "紧",
    "pinyin": "jǐn",
    "strokes": 10,
    "words": [
      "紧俏",
      "紧着",
      "紧缩"
    ],
    "sentence": "认真书写「紧」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1103
  },
  {
    "char": "杨",
    "pinyin": "yáng",
    "strokes": 7,
    "words": [
      "杨木",
      "胡杨",
      "杨朱泣岐"
    ],
    "sentence": "认真书写「杨」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1104
  },
  {
    "char": "艳",
    "pinyin": "yàn",
    "strokes": 10,
    "words": [
      "艳丽",
      "艳服",
      "艳称"
    ],
    "sentence": "「艳」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1105
  },
  {
    "char": "内",
    "pinyin": "nèi",
    "strokes": 4,
    "words": [
      "内中",
      "内乡",
      "内乱"
    ],
    "sentence": "认真书写「内」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1106
  },
  {
    "char": "梦",
    "pinyin": "mèng",
    "strokes": 11,
    "words": [
      "占梦",
      "恶梦",
      "解梦"
    ],
    "sentence": "用「梦」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1107
  },
  {
    "char": "醒",
    "pinyin": "xǐng",
    "strokes": 16,
    "words": [
      "醒脑",
      "醒觉",
      "醒豁"
    ],
    "sentence": "认真书写「醒」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1108
  },
  {
    "char": "苏",
    "pinyin": "sū",
    "strokes": 7,
    "words": [
      "苏丹",
      "苏俄",
      "苏剧"
    ],
    "sentence": "认真书写「苏」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1109
  },
  {
    "char": "湿",
    "pinyin": "shī",
    "strokes": 12,
    "words": [
      "湿地",
      "湿度",
      "湿热"
    ],
    "sentence": "认真书写「湿」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1110
  },
  {
    "char": "娇",
    "pinyin": "jiāo",
    "strokes": 9,
    "words": [
      "娇好",
      "娇妻",
      "娇娆"
    ],
    "sentence": "认真书写「娇」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1111
  },
  {
    "char": "嫩",
    "pinyin": "nèn",
    "strokes": 14,
    "words": [
      "嫩弱",
      "嫩枝",
      "嫩滑"
    ],
    "sentence": "用「嫩」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1112
  },
  {
    "char": "强",
    "pinyin": "qiáng",
    "strokes": 12,
    "words": [
      "强人",
      "强令",
      "强似"
    ],
    "sentence": "用「强」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1113
  },
  {
    "char": "适",
    "pinyin": "shì",
    "strokes": 9,
    "words": [
      "适中",
      "适于",
      "适从"
    ],
    "sentence": "「适」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1114
  },
  {
    "char": "昆",
    "pinyin": "kūn",
    "strokes": 8,
    "words": [
      "昆曲",
      "昆山片玉",
      "昆弟之好"
    ],
    "sentence": "「昆」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1115
  },
  {
    "char": "播",
    "pinyin": "bō",
    "strokes": 15,
    "words": [
      "播发",
      "播弄",
      "播扬"
    ],
    "sentence": "认真书写「播」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1116
  },
  {
    "char": "修",
    "pinyin": "xiū",
    "strokes": 9,
    "words": [
      "修女",
      "修好",
      "修枝"
    ],
    "sentence": "用「修」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1117
  },
  {
    "char": "致",
    "pinyin": "zhì",
    "strokes": 10,
    "words": [
      "一致",
      "不致",
      "兴致"
    ],
    "sentence": "认真书写「致」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1118
  },
  {
    "char": "论",
    "pinyin": "lùn",
    "strokes": 6,
    "words": [
      "论争",
      "论交",
      "论价"
    ],
    "sentence": "认真书写「论」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1119
  },
  {
    "char": "试",
    "pinyin": "shì",
    "strokes": 8,
    "words": [
      "试养",
      "试卷",
      "试场"
    ],
    "sentence": "认真书写「试」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1120
  },
  {
    "char": "验",
    "pinyin": "yàn",
    "strokes": 10,
    "words": [
      "验放",
      "验查",
      "验核"
    ],
    "sentence": "用「验」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1121
  },
  {
    "char": "袋",
    "pinyin": "dài",
    "strokes": 11,
    "words": [
      "袋子",
      "袋装",
      "手袋"
    ],
    "sentence": "认真书写「袋」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1122
  },
  {
    "char": "证",
    "pinyin": "zhèng",
    "strokes": 7,
    "words": [
      "证券",
      "证据",
      "证见"
    ],
    "sentence": "认真书写「证」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1123
  },
  {
    "char": "概",
    "pinyin": "gài",
    "strokes": 13,
    "words": [
      "概括",
      "概数",
      "概率"
    ],
    "sentence": "用「概」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1124
  },
  {
    "char": "减",
    "pinyin": "jiǎn",
    "strokes": 11,
    "words": [
      "减亏",
      "减价",
      "减征"
    ],
    "sentence": "「减」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1125
  },
  {
    "char": "阻",
    "pinyin": "zǔ",
    "strokes": 7,
    "words": [
      "阻塞",
      "阻挡",
      "阻难"
    ],
    "sentence": "「阻」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1126
  },
  {
    "char": "测",
    "pinyin": "cè",
    "strokes": 9,
    "words": [
      "测光",
      "测度",
      "测查"
    ],
    "sentence": "用「测」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1127
  },
  {
    "char": "括",
    "pinyin": "kuò",
    "strokes": 9,
    "words": [
      "括号",
      "括弧",
      "包括"
    ],
    "sentence": "「括」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1128
  },
  {
    "char": "确",
    "pinyin": "què",
    "strokes": 12,
    "words": [
      "确信",
      "确切",
      "确当"
    ],
    "sentence": "认真书写「确」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1129
  },
  {
    "char": "误",
    "pinyin": "wù",
    "strokes": 9,
    "words": [
      "误会",
      "误传",
      "误信"
    ],
    "sentence": "「误」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1130
  },
  {
    "char": "途",
    "pinyin": "tú",
    "strokes": 10,
    "words": [
      "途中",
      "正途",
      "远途"
    ],
    "sentence": "用「途」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1131
  },
  {
    "char": "超",
    "pinyin": "chāo",
    "strokes": 12,
    "words": [
      "超乎",
      "超假",
      "超员"
    ],
    "sentence": "「超」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1132
  },
  {
    "char": "堂",
    "pinyin": "táng",
    "strokes": 11,
    "words": [
      "堂会",
      "堂叔",
      "堂奥"
    ],
    "sentence": "用「堂」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1133
  },
  {
    "char": "镜",
    "pinyin": "jìng",
    "strokes": 16,
    "words": [
      "镜台",
      "镜头",
      "镜子"
    ],
    "sentence": "认真书写「镜」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1134
  },
  {
    "char": "闲",
    "pinyin": "xián",
    "strokes": 7,
    "words": [
      "闲散",
      "闲空",
      "休闲"
    ],
    "sentence": "「闲」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1135
  },
  {
    "char": "待",
    "pinyin": "dài",
    "strokes": 9,
    "words": [
      "待业",
      "待人",
      "待到"
    ],
    "sentence": "用「待」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1136
  },
  {
    "char": "阅",
    "pinyin": "yuè",
    "strokes": 10,
    "words": [
      "阅卷",
      "阅看",
      "阅读"
    ],
    "sentence": "认真书写「阅」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1137
  },
  {
    "char": "腿",
    "pinyin": "tuǐ",
    "strokes": 13,
    "words": [
      "压腿",
      "大腿",
      "弹腿"
    ],
    "sentence": "用「腿」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1138
  },
  {
    "char": "随",
    "pinyin": "suí",
    "strokes": 11,
    "words": [
      "随和",
      "随处",
      "随迁"
    ],
    "sentence": "用「随」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1139
  },
  {
    "char": "调",
    "pinyin": "diào",
    "strokes": 10,
    "words": [
      "调人",
      "调令",
      "调价"
    ],
    "sentence": "「调」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1140
  },
  {
    "char": "简",
    "pinyin": "jiǎn",
    "strokes": 13,
    "words": [
      "简任",
      "简便",
      "简况"
    ],
    "sentence": "「简」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1141
  },
  {
    "char": "拜",
    "pinyin": "bài",
    "strokes": 9,
    "words": [
      "拜会",
      "拜佛",
      "拜倒"
    ],
    "sentence": "认真书写「拜」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1142
  },
  {
    "char": "访",
    "pinyin": "fǎng",
    "strokes": 6,
    "words": [
      "访友",
      "访查",
      "上访"
    ],
    "sentence": "用「访」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1143
  },
  {
    "char": "具",
    "pinyin": "jù",
    "strokes": 8,
    "words": [
      "具体",
      "具有",
      "具结"
    ],
    "sentence": "用「具」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1144
  },
  {
    "char": "闻",
    "pinyin": "wén",
    "strokes": 9,
    "words": [
      "闻知",
      "闻见",
      "闻风"
    ],
    "sentence": "「闻」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1145
  },
  {
    "char": "尘",
    "pinyin": "chén",
    "strokes": 6,
    "words": [
      "尘沙",
      "尘芥",
      "拂尘"
    ],
    "sentence": "「尘」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1146
  },
  {
    "char": "仆",
    "pinyin": "pū",
    "strokes": 4,
    "words": [
      "仆人",
      "仆从",
      "仆妇"
    ],
    "sentence": "认真书写「仆」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1147
  },
  {
    "char": "纳",
    "pinyin": "nà",
    "strokes": 7,
    "words": [
      "纳凉",
      "纳采",
      "纳闷"
    ],
    "sentence": "「纳」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1148
  },
  {
    "char": "闷",
    "pinyin": "mèn",
    "strokes": 7,
    "words": [
      "闷倦",
      "闷坐",
      "闷声"
    ],
    "sentence": "用「闷」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1149
  },
  {
    "char": "丘",
    "pinyin": "qiū",
    "strokes": 5,
    "words": [
      "任丘",
      "沙丘",
      "荒丘"
    ],
    "sentence": "「丘」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1150
  },
  {
    "char": "迎",
    "pinyin": "yíng",
    "strokes": 7,
    "words": [
      "迎亲",
      "迎合",
      "迎头"
    ],
    "sentence": "用「迎」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1151
  },
  {
    "char": "等",
    "pinyin": "děng",
    "strokes": 12,
    "words": [
      "等价",
      "等份",
      "等分"
    ],
    "sentence": "「等」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1152
  },
  {
    "char": "止",
    "pinyin": "zhǐ",
    "strokes": 4,
    "words": [
      "止泻",
      "止血",
      "不止"
    ],
    "sentence": "认真书写「止」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1153
  },
  {
    "char": "境",
    "pinyin": "jìng",
    "strokes": 14,
    "words": [
      "境地",
      "全境",
      "化境"
    ],
    "sentence": "「境」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1154
  },
  {
    "char": "授",
    "pinyin": "shòu",
    "strokes": 11,
    "words": [
      "授旗",
      "传授",
      "追授"
    ],
    "sentence": "认真书写「授」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1155
  },
  {
    "char": "品",
    "pinyin": "pǐn",
    "strokes": 9,
    "words": [
      "品种",
      "品系",
      "品红"
    ],
    "sentence": "认真书写「品」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1156
  },
  {
    "char": "暗",
    "pinyin": "àn",
    "strokes": 13,
    "words": [
      "暗中",
      "暗号",
      "暗合"
    ],
    "sentence": "用「暗」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1157
  },
  {
    "char": "降",
    "pinyin": "jiàng",
    "strokes": 8,
    "words": [
      "降下",
      "降世",
      "降临"
    ],
    "sentence": "「降」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1158
  },
  {
    "char": "丈",
    "pinyin": "zhàng",
    "strokes": 3,
    "words": [
      "丈夫",
      "丈量",
      "万丈"
    ],
    "sentence": "用「丈」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1159
  },
  {
    "char": "肢",
    "pinyin": "zhī",
    "strokes": 8,
    "words": [
      "肢体",
      "肢解",
      "上肢"
    ],
    "sentence": "认真书写「肢」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1160
  },
  {
    "char": "肌",
    "pinyin": "jī",
    "strokes": 6,
    "words": [
      "肌体",
      "肌骨",
      "肌劈理解"
    ],
    "sentence": "「肌」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1161
  },
  {
    "char": "肤",
    "pinyin": "fū",
    "strokes": 8,
    "words": [
      "肤浅",
      "肤觉",
      "体肤"
    ],
    "sentence": "用「肤」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1162
  },
  {
    "char": "辽",
    "pinyin": "liáo",
    "strokes": 5,
    "words": [
      "辽远",
      "学辽",
      "大辽"
    ],
    "sentence": "用「辽」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1163
  },
  {
    "char": "阔",
    "pinyin": "kuò",
    "strokes": 12,
    "words": [
      "阔别",
      "阔少",
      "阔绰"
    ],
    "sentence": "认真书写「阔」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1164
  },
  {
    "char": "血",
    "pinyin": "xuè",
    "strokes": 6,
    "words": [
      "血丝",
      "血书",
      "血亏"
    ],
    "sentence": "「血」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1165
  },
  {
    "char": "液",
    "pinyin": "yè",
    "strokes": 11,
    "words": [
      "体液",
      "汗液"
    ],
    "sentence": "认真书写「液」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1166
  },
  {
    "char": "滋",
    "pinyin": "zī",
    "strokes": 12,
    "words": [
      "滋长",
      "滋阴",
      "滋蔓难图"
    ],
    "sentence": "「滋」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1167
  },
  {
    "char": "润",
    "pinyin": "rùn",
    "strokes": 10,
    "words": [
      "润泽",
      "分润",
      "华润"
    ],
    "sentence": "认真书写「润」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1168
  },
  {
    "char": "创",
    "pinyin": "chuàng",
    "strokes": 6,
    "words": [
      "创业",
      "创举",
      "创优"
    ],
    "sentence": "用「创」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1169
  },
  {
    "char": "造",
    "pinyin": "zào",
    "strokes": 10,
    "words": [
      "造价",
      "造假",
      "造化"
    ],
    "sentence": "「造」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1170
  },
  {
    "char": "县",
    "pinyin": "xiàn",
    "strokes": 7,
    "words": [
      "县令",
      "县份",
      "县县"
    ],
    "sentence": "「县」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1171
  },
  {
    "char": "设",
    "pinyin": "shè",
    "strokes": 6,
    "words": [
      "设卡",
      "设点",
      "设若"
    ],
    "sentence": "「设」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1172
  },
  {
    "char": "参",
    "pinyin": "cān",
    "strokes": 8,
    "words": [
      "参与",
      "参事",
      "参军"
    ],
    "sentence": "用「参」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1173
  },
  {
    "char": "部",
    "pinyin": "bù",
    "strokes": 10,
    "words": [
      "部分",
      "部头",
      "部委"
    ],
    "sentence": "「部」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1174
  },
  {
    "char": "横",
    "pinyin": "héng",
    "strokes": 15,
    "words": [
      "横事",
      "横亘",
      "横列"
    ],
    "sentence": "用「横」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1175
  },
  {
    "char": "跨",
    "pinyin": "kuà",
    "strokes": 13,
    "words": [
      "跨度",
      "横跨",
      "跨年度"
    ],
    "sentence": "认真书写「跨」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1176
  },
  {
    "char": "举",
    "pinyin": "jǔ",
    "strokes": 9,
    "words": [
      "举发",
      "举家",
      "举行"
    ],
    "sentence": "「举」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1177
  },
  {
    "char": "击",
    "pinyin": "jī",
    "strokes": 5,
    "words": [
      "击中",
      "击发",
      "击打"
    ],
    "sentence": "用「击」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1178
  },
  {
    "char": "坚",
    "pinyin": "jiān",
    "strokes": 7,
    "words": [
      "坚信",
      "坚强",
      "坚称"
    ],
    "sentence": "「坚」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1179
  },
  {
    "char": "固",
    "pinyin": "gù",
    "strokes": 8,
    "words": [
      "固体",
      "固有",
      "固着"
    ],
    "sentence": "「固」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1180
  },
  {
    "char": "栏",
    "pinyin": "lán",
    "strokes": 9,
    "words": [
      "栏干",
      "栏杆",
      "栏柜"
    ],
    "sentence": "「栏」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1181
  },
  {
    "char": "案",
    "pinyin": "àn",
    "strokes": 10,
    "words": [
      "案值",
      "案卷",
      "案子"
    ],
    "sentence": "认真书写「案」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1182
  },
  {
    "char": "爪",
    "pinyin": "zhǎo",
    "strokes": 4,
    "words": [
      "爪儿",
      "爪哇",
      "爪子"
    ],
    "sentence": "用「爪」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1183
  },
  {
    "char": "贵",
    "pinyin": "guì",
    "strokes": 9,
    "words": [
      "贵体",
      "贵处",
      "贵妃"
    ],
    "sentence": "用「贵」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1184
  },
  {
    "char": "断",
    "pinyin": "duàn",
    "strokes": 11,
    "words": [
      "断句",
      "断片",
      "断种"
    ],
    "sentence": "「断」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1185
  },
  {
    "char": "楚",
    "pinyin": "chǔ",
    "strokes": 13,
    "words": [
      "楚剧",
      "楚王",
      "翘楚"
    ],
    "sentence": "认真书写「楚」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1186
  },
  {
    "char": "孤",
    "pinyin": "gū",
    "strokes": 8,
    "words": [
      "孤单",
      "孤女",
      "孤峰"
    ],
    "sentence": "认真书写「孤」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1187
  },
  {
    "char": "帆",
    "pinyin": "fān",
    "strokes": 6,
    "words": [
      "帆布包",
      "风帆",
      "一帆顺风"
    ],
    "sentence": "认真书写「帆」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1188
  },
  {
    "char": "蓝",
    "pinyin": "lán",
    "strokes": 13,
    "words": [
      "蓝调",
      "伽蓝",
      "湖蓝"
    ],
    "sentence": "认真书写「蓝」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1189
  },
  {
    "char": "懒",
    "pinyin": "lǎn",
    "strokes": 16,
    "words": [
      "懒得",
      "懒散",
      "懒觉"
    ],
    "sentence": "认真书写「懒」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1190
  },
  {
    "char": "披",
    "pinyin": "pī",
    "strokes": 8,
    "words": [
      "披卷",
      "披发",
      "披头"
    ],
    "sentence": "认真书写「披」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1191
  },
  {
    "char": "划",
    "pinyin": "huà",
    "strokes": 6,
    "words": [
      "划一",
      "划价",
      "划分"
    ],
    "sentence": "认真书写「划」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1192
  },
  {
    "char": "威",
    "pinyin": "wēi",
    "strokes": 9,
    "words": [
      "威信",
      "威吓",
      "威迫"
    ],
    "sentence": "用「威」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1193
  },
  {
    "char": "武",
    "pinyin": "wǔ",
    "strokes": 8,
    "words": [
      "武场",
      "武夫",
      "武将"
    ],
    "sentence": "用「武」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1194
  },
  {
    "char": "拣",
    "pinyin": "jiǎn",
    "strokes": 8,
    "words": [
      "拣择",
      "分拣",
      "挑拣"
    ],
    "sentence": "认真书写「拣」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1195
  },
  {
    "char": "顔",
    "pinyin": "yán",
    "strokes": 18,
    "words": [
      "学顔",
      "大顔",
      "小顔"
    ],
    "sentence": "认真书写「顔」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1196
  },
  {
    "char": "形",
    "pinyin": "xíng",
    "strokes": 7,
    "words": [
      "形似",
      "形体",
      "形数"
    ],
    "sentence": "认真书写「形」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1197
  },
  {
    "char": "状",
    "pinyin": "zhuàng",
    "strokes": 7,
    "words": [
      "状语",
      "万状",
      "令状"
    ],
    "sentence": "「状」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1198
  },
  {
    "char": "渔",
    "pinyin": "yú",
    "strokes": 11,
    "words": [
      "渔政",
      "休渔",
      "禁渔"
    ],
    "sentence": "用「渔」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1199
  },
  {
    "char": "料",
    "pinyin": "liào",
    "strokes": 10,
    "words": [
      "料斗",
      "料石",
      "料量"
    ],
    "sentence": "用「料」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1200
  },
  {
    "char": "辈",
    "pinyin": "bèi",
    "strokes": 12,
    "words": [
      "辈分",
      "辈子",
      "辈数"
    ],
    "sentence": "认真书写「辈」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1201
  },
  {
    "char": "汇",
    "pinyin": "huì",
    "strokes": 5,
    "words": [
      "汇价",
      "汇兑",
      "汇合"
    ],
    "sentence": "认真书写「汇」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1202
  },
  {
    "char": "欣",
    "pinyin": "xīn",
    "strokes": 8,
    "words": [
      "欣闻",
      "欣喜若狂",
      "欣欣自得"
    ],
    "sentence": "认真书写「欣」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1203
  },
  {
    "char": "赏",
    "pinyin": "shǎng",
    "strokes": 12,
    "words": [
      "赏花",
      "赏识",
      "品赏"
    ],
    "sentence": "用「赏」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1204
  },
  {
    "char": "映",
    "pinyin": "yìng",
    "strokes": 9,
    "words": [
      "映射",
      "上映",
      "倒映"
    ],
    "sentence": "认真书写「映」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1205
  },
  {
    "char": "挡",
    "pinyin": "dǎng",
    "strokes": 9,
    "words": [
      "挡子",
      "挡板",
      "挡路"
    ],
    "sentence": "用「挡」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1206
  },
  {
    "char": "视",
    "pinyin": "shì",
    "strokes": 8,
    "words": [
      "视唱",
      "视差",
      "视点"
    ],
    "sentence": "认真书写「视」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1207
  },
  {
    "char": "线",
    "pinyin": "xiàn",
    "strokes": 8,
    "words": [
      "线呢",
      "线圈",
      "线型"
    ],
    "sentence": "认真书写「线」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1208
  },
  {
    "char": "浸",
    "pinyin": "jìn",
    "strokes": 10,
    "words": [
      "浸没",
      "浸泡",
      "浸洗"
    ],
    "sentence": "「浸」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1209
  },
  {
    "char": "献",
    "pinyin": "xiàn",
    "strokes": 13,
    "words": [
      "献上",
      "献演",
      "献给"
    ],
    "sentence": "用「献」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1210
  },
  {
    "char": "药",
    "pinyin": "yào",
    "strokes": 9,
    "words": [
      "药具",
      "药单",
      "药厂"
    ],
    "sentence": "用「药」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1211
  },
  {
    "char": "材",
    "pinyin": "cái",
    "strokes": 7,
    "words": [
      "用材",
      "石材",
      "菲材"
    ],
    "sentence": "用「材」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1212
  },
  {
    "char": "软",
    "pinyin": "ruǎn",
    "strokes": 8,
    "words": [
      "软化",
      "软和",
      "软尺"
    ],
    "sentence": "「软」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1213
  },
  {
    "char": "刮",
    "pinyin": "guā",
    "strokes": 8,
    "words": [
      "刮削",
      "刮风",
      "刮地皮"
    ],
    "sentence": "用「刮」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1214
  },
  {
    "char": "舌",
    "pinyin": "shé",
    "strokes": 6,
    "words": [
      "舌头",
      "舌苔",
      "卷舌"
    ],
    "sentence": "用「舌」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1215
  },
  {
    "char": "矛",
    "pinyin": "máo",
    "strokes": 5,
    "words": [
      "矛头",
      "矛盾论",
      "长矛"
    ],
    "sentence": "「矛」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1216
  },
  {
    "char": "盾",
    "pinyin": "dùn",
    "strokes": 9,
    "words": [
      "金盾",
      "矛盾论",
      "主要矛盾"
    ],
    "sentence": "用「盾」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1217
  },
  {
    "char": "集",
    "pinyin": "jí",
    "strokes": 12,
    "words": [
      "集中",
      "集会",
      "集体"
    ],
    "sentence": "用「集」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1218
  },
  {
    "char": "持",
    "pinyin": "chí",
    "strokes": 9,
    "words": [
      "持家",
      "持有",
      "持正"
    ],
    "sentence": "「持」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1219
  },
  {
    "char": "般",
    "pinyin": "bān",
    "strokes": 10,
    "words": [
      "般桓",
      "般若",
      "一般"
    ],
    "sentence": "认真书写「般」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1220
  },
  {
    "char": "架",
    "pinyin": "jià",
    "strokes": 9,
    "words": [
      "架子",
      "架空",
      "刀架"
    ],
    "sentence": "用「架」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1221
  },
  {
    "char": "龟",
    "pinyin": "guī",
    "strokes": 7,
    "words": [
      "龟兹",
      "龟头",
      "龟板"
    ],
    "sentence": "认真书写「龟」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1222
  },
  {
    "char": "攻",
    "pinyin": "gōng",
    "strokes": 7,
    "words": [
      "攻占",
      "攻打",
      "攻擂"
    ],
    "sentence": "认真书写「攻」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1223
  },
  {
    "char": "炮",
    "pinyin": "pào",
    "strokes": 9,
    "words": [
      "炮仗",
      "炮位",
      "炮兵"
    ],
    "sentence": "「炮」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1224
  },
  {
    "char": "坦",
    "pinyin": "tǎn",
    "strokes": 8,
    "words": [
      "坦率",
      "坦露",
      "坦克车"
    ],
    "sentence": "用「坦」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1225
  },
  {
    "char": "战",
    "pinyin": "zhàn",
    "strokes": 9,
    "words": [
      "战前",
      "战区",
      "战地"
    ],
    "sentence": "用「战」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1226
  },
  {
    "char": "神",
    "pinyin": "shén",
    "strokes": 9,
    "words": [
      "神会",
      "神似",
      "神佛"
    ],
    "sentence": "「神」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1227
  },
  {
    "char": "兵",
    "pinyin": "bīng",
    "strokes": 7,
    "words": [
      "兵丁",
      "兵卒",
      "兵员"
    ],
    "sentence": "用「兵」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1228
  },
  {
    "char": "退",
    "pinyin": "tuì",
    "strokes": 9,
    "words": [
      "退亲",
      "退休",
      "退佃"
    ],
    "sentence": "认真书写「退」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1229
  },
  {
    "char": "挖",
    "pinyin": "wā",
    "strokes": 9,
    "words": [
      "挖泥船",
      "清挖",
      "采挖"
    ],
    "sentence": "用「挖」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1230
  },
  {
    "char": "鞋",
    "pinyin": "xié",
    "strokes": 15,
    "words": [
      "鞋刷",
      "鞋子",
      "鞋底"
    ],
    "sentence": "认真书写「鞋」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1231
  },
  {
    "char": "斧",
    "pinyin": "fǔ",
    "strokes": 8,
    "words": [
      "斧头",
      "斧正",
      "石斧"
    ],
    "sentence": "认真书写「斧」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1232
  },
  {
    "char": "锯",
    "pinyin": "jù",
    "strokes": 13,
    "words": [
      "锯条",
      "拉锯",
      "钢锯"
    ],
    "sentence": "认真书写「锯」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1233
  },
  {
    "char": "屋",
    "pinyin": "wū",
    "strokes": 9,
    "words": [
      "屋子",
      "内屋",
      "发屋"
    ],
    "sentence": "「屋」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1234
  },
  {
    "char": "抢",
    "pinyin": "qiǎng",
    "strokes": 7,
    "words": [
      "抢亲",
      "抢修",
      "抢先"
    ],
    "sentence": "认真书写「抢」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1235
  },
  {
    "char": "难",
    "pinyin": "nán",
    "strokes": 10,
    "words": [
      "难为",
      "难事",
      "难于"
    ],
    "sentence": "「难」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1236
  },
  {
    "char": "初",
    "pinyin": "chū",
    "strokes": 7,
    "words": [
      "初七",
      "初中",
      "初五"
    ],
    "sentence": "认真书写「初」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1237
  },
  {
    "char": "管",
    "pinyin": "guǎn",
    "strokes": 14,
    "words": [
      "管乐",
      "管区",
      "管家"
    ],
    "sentence": "认真书写「管」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1238
  },
  {
    "char": "敌",
    "pinyin": "dí",
    "strokes": 10,
    "words": [
      "敌区",
      "敌友",
      "敌台"
    ],
    "sentence": "用「敌」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1239
  },
  {
    "char": "阶",
    "pinyin": "jiē",
    "strokes": 6,
    "words": [
      "阶地",
      "台阶",
      "阶前万里"
    ],
    "sentence": "用「阶」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1240
  },
  {
    "char": "懂",
    "pinyin": "dǒng",
    "strokes": 15,
    "words": [
      "懂得",
      "懂行",
      "好懂"
    ],
    "sentence": "「懂」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1241
  },
  {
    "char": "陶",
    "pinyin": "táo",
    "strokes": 10,
    "words": [
      "陶塑",
      "熏陶",
      "陶然自得"
    ],
    "sentence": "用「陶」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1242
  },
  {
    "char": "谦",
    "pinyin": "qiān",
    "strokes": 12,
    "words": [
      "谦冲",
      "谦和",
      "谦称"
    ],
    "sentence": "「谦」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1243
  },
  {
    "char": "虚",
    "pinyin": "xū",
    "strokes": 11,
    "words": [
      "虚汗",
      "虚空",
      "乘虚"
    ],
    "sentence": "认真书写「虚」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1244
  },
  {
    "char": "嘴",
    "pinyin": "zuǐ",
    "strokes": 16,
    "words": [
      "嘴儿",
      "嘴头",
      "嘴碎"
    ],
    "sentence": "「嘴」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1245
  },
  {
    "char": "恼",
    "pinyin": "nǎo",
    "strokes": 9,
    "words": [
      "可恼",
      "学恼",
      "大恼"
    ],
    "sentence": "用「恼」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1246
  },
  {
    "char": "怒",
    "pinyin": "nù",
    "strokes": 9,
    "words": [
      "怒号",
      "怒喝",
      "发怒"
    ],
    "sentence": "用「怒」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1247
  },
  {
    "char": "吵",
    "pinyin": "chǎo",
    "strokes": 7,
    "words": [
      "吵人",
      "吵吵",
      "吵吵"
    ],
    "sentence": "认真书写「吵」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1248
  },
  {
    "char": "感",
    "pinyin": "gǎn",
    "strokes": 13,
    "words": [
      "感冒",
      "感化",
      "感发"
    ],
    "sentence": "认真书写「感」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1249
  },
  {
    "char": "荒",
    "pinyin": "huāng",
    "strokes": 9,
    "words": [
      "荒丘",
      "荒凉",
      "荒地"
    ],
    "sentence": "「荒」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1250
  },
  {
    "char": "捧",
    "pinyin": "pěng",
    "strokes": 11,
    "words": [
      "捧场",
      "追捧",
      "捧头鼠窜"
    ],
    "sentence": "「捧」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1251
  },
  {
    "char": "朴",
    "pinyin": "pǔ",
    "strokes": 6,
    "words": [
      "朴刀",
      "朴厚",
      "朴学"
    ],
    "sentence": "用「朴」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1252
  },
  {
    "char": "素",
    "pinyin": "sù",
    "strokes": 10,
    "words": [
      "素净",
      "素数",
      "素服"
    ],
    "sentence": "「素」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1253
  },
  {
    "char": "值",
    "pinyin": "zhí",
    "strokes": 10,
    "words": [
      "值当",
      "值得",
      "不值"
    ],
    "sentence": "用「值」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1254
  },
  {
    "char": "受",
    "pinyin": "shòu",
    "strokes": 8,
    "words": [
      "受冤",
      "受凉",
      "受援"
    ],
    "sentence": "「受」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1255
  },
  {
    "char": "愿",
    "pinyin": "yuàn",
    "strokes": 14,
    "words": [
      "发愿",
      "宁愿",
      "称愿"
    ],
    "sentence": "用「愿」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1256
  },
  {
    "char": "姿",
    "pinyin": "zī",
    "strokes": 9,
    "words": [
      "军姿",
      "坐姿",
      "新姿"
    ],
    "sentence": "认真书写「姿」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1257
  },
  {
    "char": "势",
    "pinyin": "shì",
    "strokes": 8,
    "words": [
      "势头",
      "势能",
      "势要"
    ],
    "sentence": "用「势」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1258
  },
  {
    "char": "投",
    "pinyin": "tóu",
    "strokes": 7,
    "words": [
      "投亲",
      "投合",
      "投向"
    ],
    "sentence": "「投」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1259
  },
  {
    "char": "况",
    "pinyin": "kuàng",
    "strokes": 7,
    "words": [
      "况且",
      "何况",
      "景况"
    ],
    "sentence": "用「况」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1260
  },
  {
    "char": "吞",
    "pinyin": "tūn",
    "strokes": 7,
    "words": [
      "吞剥",
      "吞吐",
      "吞咽"
    ],
    "sentence": "用「吞」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1261
  },
  {
    "char": "烈",
    "pinyin": "liè",
    "strokes": 10,
    "words": [
      "烈女",
      "烈属",
      "烈度"
    ],
    "sentence": "认真书写「烈」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1262
  },
  {
    "char": "绪",
    "pinyin": "xù",
    "strokes": 11,
    "words": [
      "别绪",
      "头绪",
      "思绪"
    ],
    "sentence": "认真书写「绪」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1263
  },
  {
    "char": "述",
    "pinyin": "shù",
    "strokes": 8,
    "words": [
      "述语",
      "述说",
      "上述"
    ],
    "sentence": "「述」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1264
  },
  {
    "char": "普",
    "pinyin": "pǔ",
    "strokes": 12,
    "words": [
      "普度",
      "普教",
      "普查"
    ],
    "sentence": "用「普」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1265
  },
  {
    "char": "通",
    "pinyin": "tōng",
    "strokes": 10,
    "words": [
      "通令",
      "通体",
      "通便"
    ],
    "sentence": "用「通」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1266
  },
  {
    "char": "鼓",
    "pinyin": "gǔ",
    "strokes": 13,
    "words": [
      "鼓乐",
      "鼓劲",
      "鼓弄"
    ],
    "sentence": "认真书写「鼓」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1267
  },
  {
    "char": "励",
    "pinyin": "lì",
    "strokes": 7,
    "words": [
      "励行",
      "励精更始",
      "以资鼓励"
    ],
    "sentence": "用「励」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1268
  },
  {
    "char": "育",
    "pinyin": "yù",
    "strokes": 8,
    "words": [
      "育婴",
      "育种",
      "不育"
    ],
    "sentence": "「育」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1269
  },
  {
    "char": "瓶",
    "pinyin": "píng",
    "strokes": 10,
    "words": [
      "瓶塞",
      "瓶子",
      "瓶盖"
    ],
    "sentence": "用「瓶」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1270
  },
  {
    "char": "系",
    "pinyin": "xì",
    "strokes": 7,
    "words": [
      "系列",
      "系好",
      "系带"
    ],
    "sentence": "认真书写「系」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1271
  },
  {
    "char": "绳",
    "pinyin": "shéng",
    "strokes": 11,
    "words": [
      "绳子",
      "头绳",
      "系绳"
    ],
    "sentence": "认真书写「绳」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1272
  },
  {
    "char": "茶",
    "pinyin": "chá",
    "strokes": 9,
    "words": [
      "茶会",
      "茶几",
      "茶匙"
    ],
    "sentence": "用「茶」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1273
  },
  {
    "char": "危",
    "pinyin": "wēi",
    "strokes": 6,
    "words": [
      "危亡",
      "危坐",
      "危城"
    ],
    "sentence": "认真书写「危」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1274
  },
  {
    "char": "险",
    "pinyin": "xiǎn",
    "strokes": 9,
    "words": [
      "险些",
      "险地",
      "险局"
    ],
    "sentence": "用「险」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1275
  },
  {
    "char": "顺",
    "pinyin": "shùn",
    "strokes": 9,
    "words": [
      "顺乎",
      "顺从",
      "顺便"
    ],
    "sentence": "「顺」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1276
  },
  {
    "char": "俩",
    "pinyin": "liǎ",
    "strokes": 9,
    "words": [
      "俩人",
      "伎俩",
      "咱俩"
    ],
    "sentence": "认真书写「俩」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1277
  },
  {
    "char": "索",
    "pinyin": "suǒ",
    "strokes": 10,
    "words": [
      "索价",
      "索要",
      "索解"
    ],
    "sentence": "认真书写「索」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1278
  },
  {
    "char": "激",
    "pinyin": "jī",
    "strokes": 16,
    "words": [
      "激切",
      "激化",
      "激发"
    ],
    "sentence": "用「激」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1279
  },
  {
    "char": "堵",
    "pinyin": "dǔ",
    "strokes": 11,
    "words": [
      "堵塞",
      "堵车",
      "填堵"
    ],
    "sentence": "用「堵」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1280
  },
  {
    "char": "获",
    "pinyin": "huò",
    "strokes": 10,
    "words": [
      "获得",
      "获知",
      "获选"
    ],
    "sentence": "「获」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1281
  },
  {
    "char": "予",
    "pinyin": "yǔ",
    "strokes": 4,
    "words": [
      "予以",
      "免予",
      "准予"
    ],
    "sentence": "用「予」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1282
  },
  {
    "char": "担",
    "pinyin": "dān",
    "strokes": 8,
    "words": [
      "担任",
      "担保",
      "担子"
    ],
    "sentence": "「担」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1283
  },
  {
    "char": "宽",
    "pinyin": "kuān",
    "strokes": 10,
    "words": [
      "宽体",
      "宽假",
      "宽和"
    ],
    "sentence": "认真书写「宽」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1284
  },
  {
    "char": "裕",
    "pinyin": "yù",
    "strokes": 12,
    "words": [
      "裕如",
      "共同富裕",
      "好问则裕"
    ],
    "sentence": "认真书写「裕」字很重要。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1285
  },
  {
    "char": "买",
    "pinyin": "mǎi",
    "strokes": 6,
    "words": [
      "买价",
      "买好",
      "买家"
    ],
    "sentence": "「买」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1286
  },
  {
    "char": "猜",
    "pinyin": "cāi",
    "strokes": 11,
    "words": [
      "猜度",
      "猜着",
      "猜透"
    ],
    "sentence": "用「猜」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1287
  },
  {
    "char": "糖",
    "pinyin": "táng",
    "strokes": 16,
    "words": [
      "糖业",
      "糖包",
      "糖化"
    ],
    "sentence": "「糖」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1288
  },
  {
    "char": "即",
    "pinyin": "jí",
    "strokes": 7,
    "words": [
      "即令",
      "即便",
      "即兴"
    ],
    "sentence": "「即」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1289
  },
  {
    "char": "卡",
    "pinyin": "kǎ",
    "strokes": 5,
    "words": [
      "卡其",
      "卡具",
      "卡口"
    ],
    "sentence": "「卡」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1290
  },
  {
    "char": "盼",
    "pinyin": "pàn",
    "strokes": 9,
    "words": [
      "盼头",
      "切盼",
      "有盼"
    ],
    "sentence": "用「盼」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1291
  },
  {
    "char": "仁",
    "pinyin": "rén",
    "strokes": 4,
    "words": [
      "仁儿",
      "仁化",
      "仁弟"
    ],
    "sentence": "「仁」字的部首你记住了吗？",
    "grade": "三年级上册",
    "level": 5,
    "id": 1292
  },
  {
    "char": "贴",
    "pinyin": "tiē",
    "strokes": 9,
    "words": [
      "贴切",
      "贴合",
      "贴着"
    ],
    "sentence": "用「贴」字组词能更好记住它。",
    "grade": "三年级上册",
    "level": 5,
    "id": 1293
  },
  {
    "char": "燕",
    "pinyin": "yàn",
    "strokes": 16,
    "words": [
      "燕京",
      "燕儿",
      "燕子"
    ],
    "sentence": "多写几遍就不会忘了「燕」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1294
  },
  {
    "char": "聚",
    "pinyin": "jù",
    "strokes": 14,
    "words": [
      "聚会",
      "聚合",
      "聚头"
    ],
    "sentence": "查字典可以找到「聚」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1295
  },
  {
    "char": "增",
    "pinyin": "zēng",
    "strokes": 15,
    "words": [
      "增修",
      "增压",
      "增大"
    ],
    "sentence": "查字典可以找到「增」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1296
  },
  {
    "char": "掠",
    "pinyin": "lüè",
    "strokes": 11,
    "words": [
      "抢掠",
      "掠地攻城",
      "不敢掠美"
    ],
    "sentence": "「掠」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1297
  },
  {
    "char": "稻",
    "pinyin": "dào",
    "strokes": 15,
    "words": [
      "稻子",
      "稻种",
      "中稻"
    ],
    "sentence": "查字典可以找到「稻」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1298
  },
  {
    "char": "尖",
    "pinyin": "jiān",
    "strokes": 6,
    "words": [
      "尖削",
      "尖头",
      "冒尖"
    ],
    "sentence": "「尖」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1299
  },
  {
    "char": "偶",
    "pinyin": "ǒu",
    "strokes": 11,
    "words": [
      "偶发",
      "偶合",
      "偶感"
    ],
    "sentence": "「偶」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1300
  },
  {
    "char": "沾",
    "pinyin": "zhān",
    "strokes": 8,
    "words": [
      "沾亲",
      "沾化",
      "沾亲带友"
    ],
    "sentence": "查字典可以找到「沾」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1301
  },
  {
    "char": "圈",
    "pinyin": "quān",
    "strokes": 11,
    "words": [
      "圈儿",
      "圈地",
      "圈子"
    ],
    "sentence": "多写几遍就不会忘了「圈」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1302
  },
  {
    "char": "漾",
    "pinyin": "yàng",
    "strokes": 14,
    "words": [
      "学漾",
      "大漾",
      "小漾"
    ],
    "sentence": "「漾」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1303
  },
  {
    "char": "倦",
    "pinyin": "juàn",
    "strokes": 10,
    "words": [
      "不倦",
      "闷倦",
      "倦尾赤色"
    ],
    "sentence": "「倦」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1304
  },
  {
    "char": "符",
    "pinyin": "fú",
    "strokes": 11,
    "words": [
      "符合",
      "符节",
      "不符"
    ],
    "sentence": "多写几遍就不会忘了「符」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1305
  },
  {
    "char": "演",
    "pinyin": "yǎn",
    "strokes": 14,
    "words": [
      "演化",
      "演员",
      "演戏"
    ],
    "sentence": "查字典可以找到「演」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1306
  },
  {
    "char": "赞",
    "pinyin": "zàn",
    "strokes": 16,
    "words": [
      "赞助",
      "赞同",
      "赞许"
    ],
    "sentence": "查字典可以找到「赞」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1307
  },
  {
    "char": "咏",
    "pinyin": "yǒng",
    "strokes": 8,
    "words": [
      "咏叹调",
      "咏嘲风月",
      "咏月嘲花"
    ],
    "sentence": "多写几遍就不会忘了「咏」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1308
  },
  {
    "char": "碧",
    "pinyin": "bì",
    "strokes": 14,
    "words": [
      "碧空",
      "碧绿",
      "碧血"
    ],
    "sentence": "查字典可以找到「碧」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1309
  },
  {
    "char": "妆",
    "pinyin": "zhuāng",
    "strokes": 6,
    "words": [
      "化妆",
      "红妆",
      "靓妆"
    ],
    "sentence": "多写几遍就不会忘了「妆」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1310
  },
  {
    "char": "裁",
    "pinyin": "cái",
    "strokes": 12,
    "words": [
      "裁员",
      "裁处",
      "裁并"
    ],
    "sentence": "查字典可以找到「裁」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1311
  },
  {
    "char": "剪",
    "pinyin": "jiǎn",
    "strokes": 11,
    "words": [
      "剪发",
      "剪枝",
      "倒剪"
    ],
    "sentence": "多写几遍就不会忘了「剪」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1312
  },
  {
    "char": "滨",
    "pinyin": "bīn",
    "strokes": 13,
    "words": [
      "滨海区",
      "哈尔滨"
    ],
    "sentence": "查字典可以找到「滨」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1313
  },
  {
    "char": "紫",
    "pinyin": "zǐ",
    "strokes": 12,
    "words": [
      "紫红",
      "紫菀",
      "紫衫"
    ],
    "sentence": "多写几遍就不会忘了「紫」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1314
  },
  {
    "char": "荷",
    "pinyin": "hé",
    "strokes": 10,
    "words": [
      "荷叶",
      "荷塘",
      "荷载"
    ],
    "sentence": "多写几遍就不会忘了「荷」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1315
  },
  {
    "char": "挨",
    "pinyin": "āi",
    "strokes": 10,
    "words": [
      "挨个",
      "挨打",
      "挨说"
    ],
    "sentence": "查字典可以找到「挨」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1316
  },
  {
    "char": "莲",
    "pinyin": "lián",
    "strokes": 10,
    "words": [
      "莲台",
      "湘莲",
      "红莲"
    ],
    "sentence": "「莲」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1317
  },
  {
    "char": "蓬",
    "pinyin": "péng",
    "strokes": 13,
    "words": [
      "蓬勃",
      "蓬松松",
      "雨蓬"
    ],
    "sentence": "查字典可以找到「蓬」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1318
  },
  {
    "char": "账",
    "pinyin": "zhàng",
    "strokes": 8,
    "words": [
      "账务",
      "账单",
      "账号"
    ],
    "sentence": "多写几遍就不会忘了「账」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1319
  },
  {
    "char": "仿",
    "pinyin": "fǎng",
    "strokes": 6,
    "words": [
      "仿佛",
      "仿冒",
      "仿单"
    ],
    "sentence": "多写几遍就不会忘了「仿」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1320
  },
  {
    "char": "佛",
    "pinyin": "fú",
    "strokes": 7,
    "words": [
      "佛事",
      "佛会",
      "佛像"
    ],
    "sentence": "查字典可以找到「佛」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1321
  },
  {
    "char": "裳",
    "pinyin": "shang",
    "strokes": 14,
    "words": [
      "裳裳",
      "裳裳",
      "衣裳"
    ],
    "sentence": "查字典可以找到「裳」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1322
  },
  {
    "char": "翩",
    "pinyin": "piān",
    "strokes": 15,
    "words": [
      "翩翩少年",
      "翩翩少年",
      "翩翩年少"
    ],
    "sentence": "多写几遍就不会忘了「翩」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1323
  },
  {
    "char": "蹈",
    "pinyin": "dǎo",
    "strokes": 17,
    "words": [
      "蹈其覆辙",
      "蹈刃不旋",
      "蹈厉奋发"
    ],
    "sentence": "「蹈」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1324
  },
  {
    "char": "蜻",
    "pinyin": "qīng",
    "strokes": 14,
    "words": [
      "学蜻",
      "大蜻",
      "小蜻"
    ],
    "sentence": "「蜻」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1325
  },
  {
    "char": "蜓",
    "pinyin": "tíng",
    "strokes": 12,
    "words": [
      "学蜓",
      "大蜓",
      "小蜓"
    ],
    "sentence": "「蜓」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1326
  },
  {
    "char": "翠",
    "pinyin": "cuì",
    "strokes": 14,
    "words": [
      "翠柏",
      "翠绿",
      "翠消红减"
    ],
    "sentence": "「翠」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1327
  },
  {
    "char": "秆",
    "pinyin": "gǎn",
    "strokes": 8,
    "words": [
      "秆儿",
      "麦秆儿",
      "麻秆儿"
    ],
    "sentence": "多写几遍就不会忘了「秆」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1328
  },
  {
    "char": "腹",
    "pinyin": "fù",
    "strokes": 13,
    "words": [
      "腹内",
      "腹地",
      "腹胀"
    ],
    "sentence": "「腹」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1329
  },
  {
    "char": "赤",
    "pinyin": "chì",
    "strokes": 7,
    "words": [
      "赤地",
      "赤红",
      "赤背"
    ],
    "sentence": "「赤」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1330
  },
  {
    "char": "衬",
    "pinyin": "chèn",
    "strokes": 8,
    "words": [
      "衬布",
      "衬映",
      "衬纸"
    ],
    "sentence": "多写几遍就不会忘了「衬」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1331
  },
  {
    "char": "衫",
    "pinyin": "shān",
    "strokes": 8,
    "words": [
      "汗衫",
      "紫衫",
      "长衫"
    ],
    "sentence": "「衫」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1332
  },
  {
    "char": "透",
    "pinyin": "tòu",
    "strokes": 10,
    "words": [
      "透信",
      "透射",
      "透底"
    ],
    "sentence": "查字典可以找到「透」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1333
  },
  {
    "char": "泛",
    "pinyin": "fàn",
    "strokes": 7,
    "words": [
      "泛化",
      "泛称",
      "泛论"
    ],
    "sentence": "查字典可以找到「泛」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1334
  },
  {
    "char": "泡",
    "pinyin": "pào",
    "strokes": 8,
    "words": [
      "泡制",
      "泡妞",
      "泡子"
    ],
    "sentence": "「泡」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1335
  },
  {
    "char": "饲",
    "pinyin": "sì",
    "strokes": 8,
    "words": [
      "饲养员",
      "精饲料",
      "狼羊同饲"
    ],
    "sentence": "查字典可以找到「饲」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1336
  },
  {
    "char": "翁",
    "pinyin": "wēng",
    "strokes": 10,
    "words": [
      "家翁",
      "不倒翁",
      "信天翁"
    ],
    "sentence": "「翁」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1337
  },
  {
    "char": "陡",
    "pinyin": "dǒu",
    "strokes": 9,
    "words": [
      "陡增",
      "陡度"
    ],
    "sentence": "「陡」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1338
  },
  {
    "char": "壁",
    "pinyin": "bì",
    "strokes": 16,
    "words": [
      "壁柜",
      "削壁",
      "壁上观"
    ],
    "sentence": "「壁」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1339
  },
  {
    "char": "欧",
    "pinyin": "ōu",
    "strokes": 8,
    "words": [
      "欧体",
      "欧化",
      "欧风"
    ],
    "sentence": "「欧」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1340
  },
  {
    "char": "洲",
    "pinyin": "zhōu",
    "strokes": 9,
    "words": [
      "大洲",
      "沙洲",
      "洲际导弹"
    ],
    "sentence": "查字典可以找到「洲」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1341
  },
  {
    "char": "瑞",
    "pinyin": "ruì",
    "strokes": 13,
    "words": [
      "学瑞",
      "大瑞",
      "小瑞"
    ],
    "sentence": "「瑞」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1342
  },
  {
    "char": "士",
    "pinyin": "shì",
    "strokes": 3,
    "words": [
      "士卒",
      "士女",
      "上士"
    ],
    "sentence": "多写几遍就不会忘了「士」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1343
  },
  {
    "char": "舒",
    "pinyin": "shū",
    "strokes": 12,
    "words": [
      "舒卷",
      "舒散",
      "舒服"
    ],
    "sentence": "查字典可以找到「舒」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1344
  },
  {
    "char": "启",
    "pinyin": "qǐ",
    "strokes": 7,
    "words": [
      "启发",
      "启蒙",
      "启行"
    ],
    "sentence": "多写几遍就不会忘了「启」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1345
  },
  {
    "char": "殊",
    "pinyin": "shū",
    "strokes": 10,
    "words": [
      "殊不知",
      "殊功劲节",
      "殊方同致"
    ],
    "sentence": "多写几遍就不会忘了「殊」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1346
  },
  {
    "char": "骤",
    "pinyin": "zhòu",
    "strokes": 17,
    "words": [
      "骤增",
      "骤起",
      "骤降"
    ],
    "sentence": "多写几遍就不会忘了「骤」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1347
  },
  {
    "char": "涉",
    "pinyin": "shè",
    "strokes": 10,
    "words": [
      "干涉",
      "涉及面",
      "远涉"
    ],
    "sentence": "查字典可以找到「涉」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1348
  },
  {
    "char": "疲",
    "pinyin": "pí",
    "strokes": 10,
    "words": [
      "疲态",
      "疲沓",
      "疲累"
    ],
    "sentence": "「疲」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1349
  },
  {
    "char": "政",
    "pinyin": "zhèng",
    "strokes": 9,
    "words": [
      "政令",
      "政企",
      "政体"
    ],
    "sentence": "多写几遍就不会忘了「政」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1350
  },
  {
    "char": "踏",
    "pinyin": "tà",
    "strokes": 15,
    "words": [
      "踏看",
      "踏空",
      "踏脚石"
    ],
    "sentence": "多写几遍就不会忘了「踏」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1351
  },
  {
    "char": "救",
    "pinyin": "jiù",
    "strokes": 11,
    "words": [
      "救险",
      "抢救",
      "救济金"
    ],
    "sentence": "多写几遍就不会忘了「救」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1352
  },
  {
    "char": "载",
    "pinyin": "zài",
    "strokes": 10,
    "words": [
      "载体",
      "载客",
      "载波"
    ],
    "sentence": "查字典可以找到「载」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1353
  },
  {
    "char": "森",
    "pinyin": "sēn",
    "strokes": 12,
    "words": [
      "森罗万象",
      "阴森森",
      "阴森森"
    ],
    "sentence": "多写几遍就不会忘了「森」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1354
  },
  {
    "char": "郁",
    "pinyin": "yù",
    "strokes": 8,
    "words": [
      "郁结",
      "郁闷",
      "蓊郁"
    ],
    "sentence": "多写几遍就不会忘了「郁」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1355
  },
  {
    "char": "葱",
    "pinyin": "cōng",
    "strokes": 12,
    "words": [
      "葱头",
      "葱绿",
      "大葱"
    ],
    "sentence": "「葱」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1356
  },
  {
    "char": "湛",
    "pinyin": "zhàn",
    "strokes": 12,
    "words": [
      "湛恩汪濊",
      "神湛骨寒"
    ],
    "sentence": "「湛」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1357
  },
  {
    "char": "盖",
    "pinyin": "gài",
    "strokes": 11,
    "words": [
      "盖世",
      "盖头",
      "盖子"
    ],
    "sentence": "「盖」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1358
  },
  {
    "char": "犁",
    "pinyin": "lí",
    "strokes": 11,
    "words": [
      "犁杖",
      "犁田",
      "尉犁"
    ],
    "sentence": "多写几遍就不会忘了「犁」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1359
  },
  {
    "char": "砍",
    "pinyin": "kǎn",
    "strokes": 9,
    "words": [
      "乱砍滥伐",
      "学砍",
      "大砍"
    ],
    "sentence": "「砍」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1360
  },
  {
    "char": "裸",
    "pinyin": "luǒ",
    "strokes": 13,
    "words": [
      "裸体",
      "裸露",
      "裸裎袒裼"
    ],
    "sentence": "查字典可以找到「裸」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1361
  },
  {
    "char": "扩",
    "pinyin": "kuò",
    "strokes": 6,
    "words": [
      "扩大",
      "扩容",
      "扩招"
    ],
    "sentence": "「扩」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1362
  },
  {
    "char": "栋",
    "pinyin": "dòng",
    "strokes": 9,
    "words": [
      "栋折榱坏",
      "栋折榱崩",
      "充栋汗牛"
    ],
    "sentence": "查字典可以找到「栋」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1363
  },
  {
    "char": "柴",
    "pinyin": "chái",
    "strokes": 10,
    "words": [
      "柴垛",
      "劈柴",
      "干柴"
    ],
    "sentence": "多写几遍就不会忘了「柴」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1364
  },
  {
    "char": "喘",
    "pinyin": "chuǎn",
    "strokes": 12,
    "words": [
      "发喘",
      "咳喘",
      "喘吁吁"
    ],
    "sentence": "查字典可以找到「喘」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1365
  },
  {
    "char": "黎",
    "pinyin": "lí",
    "strokes": 15,
    "words": [
      "巴黎和会",
      "学黎",
      "大黎"
    ],
    "sentence": "「黎」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1366
  },
  {
    "char": "寓",
    "pinyin": "yù",
    "strokes": 12,
    "words": [
      "寓于",
      "寓情于景",
      "寓意深远"
    ],
    "sentence": "查字典可以找到「寓」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1367
  },
  {
    "char": "则",
    "pinyin": "zé",
    "strokes": 6,
    "words": [
      "则甚",
      "否则",
      "正则"
    ],
    "sentence": "多写几遍就不会忘了「则」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1368
  },
  {
    "char": "窟",
    "pinyin": "kū",
    "strokes": 13,
    "words": [
      "地窟",
      "石窟",
      "云冈石窟"
    ],
    "sentence": "查字典可以找到「窟」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1369
  },
  {
    "char": "窿",
    "pinyin": "lóng",
    "strokes": 16,
    "words": [
      "学窿",
      "大窿",
      "小窿"
    ],
    "sentence": "查字典可以找到「窿」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1370
  },
  {
    "char": "狼",
    "pinyin": "láng",
    "strokes": 10,
    "words": [
      "狼头",
      "狼藉"
    ],
    "sentence": "「狼」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1371
  },
  {
    "char": "叼",
    "pinyin": "diāo",
    "strokes": 5,
    "words": [
      "学叼",
      "大叼",
      "小叼"
    ],
    "sentence": "「叼」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1372
  },
  {
    "char": "街",
    "pinyin": "jiē",
    "strokes": 12,
    "words": [
      "街上",
      "街区",
      "街坊"
    ],
    "sentence": "「街」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1373
  },
  {
    "char": "劝",
    "pinyin": "quàn",
    "strokes": 4,
    "words": [
      "劝化",
      "劝和",
      "劝解"
    ],
    "sentence": "多写几遍就不会忘了「劝」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1374
  },
  {
    "char": "悔",
    "pinyin": "huǐ",
    "strokes": 10,
    "words": [
      "悔约",
      "悔过",
      "悔不该"
    ],
    "sentence": "查字典可以找到「悔」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1375
  },
  {
    "char": "盘",
    "pinyin": "pán",
    "strokes": 11,
    "words": [
      "盘子",
      "盘曲",
      "盘活"
    ],
    "sentence": "多写几遍就不会忘了「盘」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1376
  },
  {
    "char": "缠",
    "pinyin": "chán",
    "strokes": 13,
    "words": [
      "缠磨",
      "缠结",
      "难缠"
    ],
    "sentence": "查字典可以找到「缠」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1377
  },
  {
    "char": "硬",
    "pinyin": "yìng",
    "strokes": 12,
    "words": [
      "硬充",
      "硬面",
      "硬顶"
    ],
    "sentence": "多写几遍就不会忘了「硬」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1378
  },
  {
    "char": "弓",
    "pinyin": "gōng",
    "strokes": 3,
    "words": [
      "弓背",
      "开弓",
      "弹弓"
    ],
    "sentence": "「弓」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1379
  },
  {
    "char": "魏",
    "pinyin": "wèi",
    "strokes": 17,
    "words": [
      "魏阙",
      "北魏",
      "魏颗结草"
    ],
    "sentence": "「魏」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1380
  },
  {
    "char": "射",
    "pinyin": "shè",
    "strokes": 10,
    "words": [
      "射入",
      "射击",
      "射干"
    ],
    "sentence": "多写几遍就不会忘了「射」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1381
  },
  {
    "char": "箭",
    "pinyin": "jiàn",
    "strokes": 15,
    "words": [
      "箭垛",
      "箭头",
      "令箭"
    ],
    "sentence": "多写几遍就不会忘了「箭」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1382
  },
  {
    "char": "猎",
    "pinyin": "liè",
    "strokes": 11,
    "words": [
      "猎装",
      "射猎",
      "打猎"
    ],
    "sentence": "「猎」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1383
  },
  {
    "char": "雁",
    "pinyin": "yàn",
    "strokes": 12,
    "words": [
      "雁行",
      "大雁",
      "头雁"
    ],
    "sentence": "「雁」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1384
  },
  {
    "char": "弦",
    "pinyin": "xián",
    "strokes": 8,
    "words": [
      "弦乐",
      "上弦",
      "单弦"
    ],
    "sentence": "查字典可以找到「弦」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1385
  },
  {
    "char": "悲",
    "pinyin": "bēi",
    "strokes": 12,
    "words": [
      "悲凉",
      "悲切",
      "悲号"
    ],
    "sentence": "查字典可以找到「悲」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1386
  },
  {
    "char": "惨",
    "pinyin": "cǎn",
    "strokes": 11,
    "words": [
      "惨不忍睹",
      "惨不忍言",
      "惨不忍闻"
    ],
    "sentence": "多写几遍就不会忘了「惨」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1387
  },
  {
    "char": "愈",
    "pinyin": "yù",
    "strokes": 13,
    "words": [
      "愈发",
      "愈合",
      "愈来愈少"
    ],
    "sentence": "查字典可以找到「愈」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1388
  },
  {
    "char": "痛",
    "pinyin": "tòng",
    "strokes": 12,
    "words": [
      "痛切",
      "痛处",
      "痛恶"
    ],
    "sentence": "多写几遍就不会忘了「痛」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1389
  },
  {
    "char": "裂",
    "pinyin": "liè",
    "strokes": 12,
    "words": [
      "裂变",
      "裂口",
      "裂帛"
    ],
    "sentence": "「裂」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1390
  },
  {
    "char": "叮",
    "pinyin": "dīng",
    "strokes": 5,
    "words": [
      "叮当",
      "叮叮当当",
      "叮叮当当"
    ],
    "sentence": "多写几遍就不会忘了「叮」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1391
  },
  {
    "char": "嘱",
    "pinyin": "zhǔ",
    "strokes": 15,
    "words": [
      "切嘱",
      "遵嘱",
      "买上嘱下"
    ],
    "sentence": "多写几遍就不会忘了「嘱」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1392
  },
  {
    "char": "排",
    "pinyin": "pái",
    "strokes": 11,
    "words": [
      "排他",
      "排偶",
      "排击"
    ],
    "sentence": "多写几遍就不会忘了「排」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1393
  },
  {
    "char": "靠",
    "pinyin": "kào",
    "strokes": 15,
    "words": [
      "靠椅",
      "靠泊",
      "靠背"
    ],
    "sentence": "查字典可以找到「靠」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1394
  },
  {
    "char": "幅",
    "pinyin": "fú",
    "strokes": 12,
    "words": [
      "幅员",
      "幅宽",
      "幅度"
    ],
    "sentence": "多写几遍就不会忘了「幅」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1395
  },
  {
    "char": "审",
    "pinyin": "shěn",
    "strokes": 8,
    "words": [
      "审处",
      "审干",
      "审度"
    ],
    "sentence": "「审」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1396
  },
  {
    "char": "肃",
    "pinyin": "sù",
    "strokes": 8,
    "words": [
      "严肃音乐",
      "学肃",
      "大肃"
    ],
    "sentence": "查字典可以找到「肃」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1397
  },
  {
    "char": "晌",
    "pinyin": "shǎng",
    "strokes": 10,
    "words": [
      "上半晌",
      "学晌",
      "大晌"
    ],
    "sentence": "查字典可以找到「晌」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1398
  },
  {
    "char": "悦",
    "pinyin": "yuè",
    "strokes": 10,
    "words": [
      "悦服",
      "不悦",
      "和悦"
    ],
    "sentence": "查字典可以找到「悦」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1399
  },
  {
    "char": "熟",
    "pinyin": "shú",
    "strokes": 15,
    "words": [
      "熟化",
      "熟地",
      "熟思"
    ],
    "sentence": "「熟」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1400
  },
  {
    "char": "悉",
    "pinyin": "xī",
    "strokes": 11,
    "words": [
      "知悉",
      "纤悉",
      "详悉"
    ],
    "sentence": "查字典可以找到「悉」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1401
  },
  {
    "char": "诲",
    "pinyin": "huì",
    "strokes": 9,
    "words": [
      "诲人不倦",
      "诲人不惓",
      "不屑教诲"
    ],
    "sentence": "多写几遍就不会忘了「诲」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1402
  },
  {
    "char": "赛",
    "pinyin": "sài",
    "strokes": 14,
    "words": [
      "赛会",
      "赛似",
      "赛制"
    ],
    "sentence": "「赛」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1403
  },
  {
    "char": "疼",
    "pinyin": "téng",
    "strokes": 10,
    "words": [
      "发疼",
      "头疼",
      "不着疼热"
    ],
    "sentence": "查字典可以找到「疼」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1404
  },
  {
    "char": "忧",
    "pinyin": "yōu",
    "strokes": 7,
    "words": [
      "忧思",
      "忧闷",
      "丁忧"
    ],
    "sentence": "查字典可以找到「忧」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1405
  },
  {
    "char": "慰",
    "pinyin": "wèi",
    "strokes": 15,
    "words": [
      "慰藉",
      "慰问品",
      "慰问电"
    ],
    "sentence": "查字典可以找到「慰」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1406
  },
  {
    "char": "梭",
    "pinyin": "suō",
    "strokes": 11,
    "words": [
      "梭天摸地",
      "投梭折齿",
      "瘦骨梭棱"
    ],
    "sentence": "查字典可以找到「梭」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1407
  },
  {
    "char": "虽",
    "pinyin": "suī",
    "strokes": 9,
    "words": [
      "虽说",
      "虽覆能复"
    ],
    "sentence": "「虽」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1408
  },
  {
    "char": "狂",
    "pinyin": "kuáng",
    "strokes": 7,
    "words": [
      "狂奔",
      "狂舞"
    ],
    "sentence": "查字典可以找到「狂」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1409
  },
  {
    "char": "赢",
    "pinyin": "yíng",
    "strokes": 17,
    "words": [
      "赢家",
      "赢得",
      "打赢"
    ],
    "sentence": "多写几遍就不会忘了「赢」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1410
  },
  {
    "char": "暑",
    "pinyin": "shǔ",
    "strokes": 12,
    "words": [
      "暑假",
      "暑期",
      "中暑"
    ],
    "sentence": "多写几遍就不会忘了「暑」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1411
  },
  {
    "char": "益",
    "pinyin": "yì",
    "strokes": 10,
    "words": [
      "益发",
      "益处",
      "助益"
    ],
    "sentence": "「益」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1412
  },
  {
    "char": "穷",
    "pinyin": "qióng",
    "strokes": 7,
    "words": [
      "穷尽",
      "穷期",
      "有穷"
    ],
    "sentence": "「穷」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1413
  },
  {
    "char": "将",
    "pinyin": "jiāng",
    "strokes": 9,
    "words": [
      "将令",
      "将兵",
      "将养"
    ],
    "sentence": "查字典可以找到「将」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1414
  },
  {
    "char": "若",
    "pinyin": "ruò",
    "strokes": 8,
    "words": [
      "若何",
      "若夫",
      "若干"
    ],
    "sentence": "多写几遍就不会忘了「若」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1415
  },
  {
    "char": "俱",
    "pinyin": "jù",
    "strokes": 10,
    "words": [
      "俱乐部",
      "家俱",
      "俱收并蓄"
    ],
    "sentence": "「俱」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1416
  },
  {
    "char": "博",
    "pinyin": "bó",
    "strokes": 12,
    "words": [
      "博大",
      "博得",
      "博识"
    ],
    "sentence": "查字典可以找到「博」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1417
  },
  {
    "char": "鸦",
    "pinyin": "yā",
    "strokes": 9,
    "words": [
      "鸦片",
      "鸦没鹊静",
      "鸦片战争"
    ],
    "sentence": "查字典可以找到「鸦」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1418
  },
  {
    "char": "截",
    "pinyin": "jié",
    "strokes": 14,
    "words": [
      "截发剉稾",
      "截发留宾",
      "截然不同"
    ],
    "sentence": "多写几遍就不会忘了「截」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1419
  },
  {
    "char": "伍",
    "pinyin": "wǔ",
    "strokes": 6,
    "words": [
      "为伍",
      "落伍",
      "行伍"
    ],
    "sentence": "多写几遍就不会忘了「伍」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1420
  },
  {
    "char": "默",
    "pinyin": "mò",
    "strokes": 16,
    "words": [
      "默契",
      "默片",
      "默许"
    ],
    "sentence": "查字典可以找到「默」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1421
  },
  {
    "char": "局",
    "pinyin": "jú",
    "strokes": 7,
    "words": [
      "局度",
      "局量",
      "局长"
    ],
    "sentence": "多写几遍就不会忘了「局」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1422
  },
  {
    "char": "棒",
    "pinyin": "bàng",
    "strokes": 12,
    "words": [
      "棒喝",
      "棒头",
      "棒针"
    ],
    "sentence": "「棒」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1423
  },
  {
    "char": "羡",
    "pinyin": "xiàn",
    "strokes": 12,
    "words": [
      "称羡",
      "啧啧称羡"
    ],
    "sentence": "多写几遍就不会忘了「羡」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1424
  },
  {
    "char": "慕",
    "pinyin": "mù",
    "strokes": 14,
    "words": [
      "仰慕",
      "思慕",
      "景慕"
    ],
    "sentence": "多写几遍就不会忘了「慕」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1425
  },
  {
    "char": "禁",
    "pinyin": "jìn",
    "strokes": 13,
    "words": [
      "禁书",
      "禁令",
      "禁例"
    ],
    "sentence": "「禁」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1426
  },
  {
    "char": "席",
    "pinyin": "xí",
    "strokes": 10,
    "words": [
      "席卷",
      "席地",
      "席棚"
    ],
    "sentence": "查字典可以找到「席」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1427
  },
  {
    "char": "众",
    "pinyin": "zhòng",
    "strokes": 6,
    "words": [
      "众数",
      "众说",
      "万众"
    ],
    "sentence": "查字典可以找到「众」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1428
  },
  {
    "char": "纠",
    "pinyin": "jiū",
    "strokes": 5,
    "words": [
      "纠合",
      "纠正",
      "纠结"
    ],
    "sentence": "「纠」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1429
  },
  {
    "char": "匠",
    "pinyin": "jiàng",
    "strokes": 6,
    "words": [
      "漆匠",
      "瓦匠",
      "石匠"
    ],
    "sentence": "查字典可以找到「匠」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1430
  },
  {
    "char": "替",
    "pinyin": "tì",
    "strokes": 12,
    "words": [
      "替考",
      "倒替",
      "兴替"
    ],
    "sentence": "查字典可以找到「替」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1431
  },
  {
    "char": "抄",
    "pinyin": "chāo",
    "strokes": 7,
    "words": [
      "抄家",
      "抄收",
      "抄查"
    ],
    "sentence": "多写几遍就不会忘了「抄」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1432
  },
  {
    "char": "墨",
    "pinyin": "mò",
    "strokes": 15,
    "words": [
      "墨囊",
      "墨家",
      "墨斗"
    ],
    "sentence": "查字典可以找到「墨」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1433
  },
  {
    "char": "骂",
    "pinyin": "mà",
    "strokes": 9,
    "words": [
      "吵骂",
      "嘲骂",
      "恶骂"
    ],
    "sentence": "查字典可以找到「骂」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1434
  },
  {
    "char": "缩",
    "pinyin": "suō",
    "strokes": 14,
    "words": [
      "缩写",
      "缩减",
      "缩印"
    ],
    "sentence": "多写几遍就不会忘了「缩」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1435
  },
  {
    "char": "承",
    "pinyin": "chéng",
    "strokes": 8,
    "words": [
      "承传",
      "承修",
      "承兑"
    ],
    "sentence": "多写几遍就不会忘了「承」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1436
  },
  {
    "char": "肩",
    "pinyin": "jiān",
    "strokes": 8,
    "words": [
      "肩头",
      "肩挑",
      "肩背"
    ],
    "sentence": "「肩」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1437
  },
  {
    "char": "扛",
    "pinyin": "káng",
    "strokes": 6,
    "words": [
      "扛活",
      "扛鼎",
      "扛得住"
    ],
    "sentence": "多写几遍就不会忘了「扛」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1438
  },
  {
    "char": "缘",
    "pinyin": "yuán",
    "strokes": 12,
    "words": [
      "缘簿",
      "亲缘",
      "化缘"
    ],
    "sentence": "查字典可以找到「缘」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1439
  },
  {
    "char": "愤",
    "pinyin": "fèn",
    "strokes": 12,
    "words": [
      "发愤",
      "泄愤",
      "愤不欲生"
    ],
    "sentence": "「愤」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1440
  },
  {
    "char": "毕",
    "pinyin": "bì",
    "strokes": 6,
    "words": [
      "毕剥",
      "毕肖",
      "毕露"
    ],
    "sentence": "查字典可以找到「毕」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1441
  },
  {
    "char": "戒",
    "pinyin": "jiè",
    "strokes": 7,
    "words": [
      "戒尺",
      "戒条",
      "戒严令"
    ],
    "sentence": "「戒」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1442
  },
  {
    "char": "既",
    "pinyin": "jì",
    "strokes": 9,
    "words": [
      "既往不咎",
      "既得利益",
      "一如既往"
    ],
    "sentence": "「既」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1443
  },
  {
    "char": "贺",
    "pinyin": "hè",
    "strokes": 9,
    "words": [
      "贺信",
      "贺卡",
      "同贺"
    ],
    "sentence": "「贺」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1444
  },
  {
    "char": "顾",
    "pinyin": "gù",
    "strokes": 10,
    "words": [
      "顾家",
      "不顾",
      "只顾"
    ],
    "sentence": "多写几遍就不会忘了「顾」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1445
  },
  {
    "char": "迅",
    "pinyin": "xùn",
    "strokes": 6,
    "words": [
      "迅跑",
      "迅雷风烈",
      "疾风迅雷"
    ],
    "sentence": "多写几遍就不会忘了「迅」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1446
  },
  {
    "char": "速",
    "pinyin": "sù",
    "strokes": 10,
    "words": [
      "速射",
      "速度",
      "速率"
    ],
    "sentence": "多写几遍就不会忘了「速」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1447
  },
  {
    "char": "复",
    "pinyin": "fù",
    "strokes": 9,
    "words": [
      "复会",
      "复信"
    ],
    "sentence": "查字典可以找到「复」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1448
  },
  {
    "char": "恰",
    "pinyin": "qià",
    "strokes": 9,
    "words": [
      "恰似",
      "恰切",
      "恰好"
    ],
    "sentence": "「恰」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1449
  },
  {
    "char": "犯",
    "pinyin": "fàn",
    "strokes": 5,
    "words": [
      "犯上",
      "犯急",
      "犯疑"
    ],
    "sentence": "多写几遍就不会忘了「犯」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1450
  },
  {
    "char": "缓",
    "pinyin": "huǎn",
    "strokes": 12,
    "words": [
      "缓冲",
      "缓和",
      "缓建"
    ],
    "sentence": "「缓」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1451
  },
  {
    "char": "婆",
    "pinyin": "pó",
    "strokes": 11,
    "words": [
      "婆婆",
      "婆婆",
      "伯婆"
    ],
    "sentence": "查字典可以找到「婆」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1452
  },
  {
    "char": "议",
    "pinyin": "yì",
    "strokes": 5,
    "words": [
      "议价",
      "议会",
      "议员"
    ],
    "sentence": "查字典可以找到「议」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1453
  },
  {
    "char": "达",
    "pinyin": "dá",
    "strokes": 6,
    "words": [
      "达摩",
      "达观",
      "上达"
    ],
    "sentence": "查字典可以找到「达」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1454
  },
  {
    "char": "稚",
    "pinyin": "zhì",
    "strokes": 13,
    "words": [
      "稚齿婑媠",
      "学稚",
      "大稚"
    ],
    "sentence": "「稚」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1455
  },
  {
    "char": "烦",
    "pinyin": "fán",
    "strokes": 10,
    "words": [
      "烦渎",
      "烦闷",
      "烦难"
    ],
    "sentence": "查字典可以找到「烦」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1456
  },
  {
    "char": "享",
    "pinyin": "xiǎng",
    "strokes": 8,
    "words": [
      "享乐",
      "享有",
      "共享"
    ],
    "sentence": "多写几遍就不会忘了「享」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1457
  },
  {
    "char": "炸",
    "pinyin": "zhà",
    "strokes": 9,
    "words": [
      "炸弹",
      "炸毁",
      "炸破"
    ],
    "sentence": "多写几遍就不会忘了「炸」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1458
  },
  {
    "char": "医",
    "pinyin": "yī",
    "strokes": 7,
    "words": [
      "医家",
      "医术",
      "从医"
    ],
    "sentence": "多写几遍就不会忘了「医」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1459
  },
  {
    "char": "输",
    "pinyin": "shū",
    "strokes": 13,
    "words": [
      "输家",
      "输血",
      "传输"
    ],
    "sentence": "多写几遍就不会忘了「输」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1460
  },
  {
    "char": "眉",
    "pinyin": "méi",
    "strokes": 9,
    "words": [
      "眉头",
      "眉梢",
      "攒眉"
    ],
    "sentence": "多写几遍就不会忘了「眉」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1461
  },
  {
    "char": "型",
    "pinyin": "xíng",
    "strokes": 9,
    "words": [
      "型号",
      "型钢",
      "体型"
    ],
    "sentence": "多写几遍就不会忘了「型」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1462
  },
  {
    "char": "否",
    "pinyin": "fǒu",
    "strokes": 7,
    "words": [
      "否决",
      "否则",
      "否定"
    ],
    "sentence": "查字典可以找到「否」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1463
  },
  {
    "char": "垫",
    "pinyin": "diàn",
    "strokes": 9,
    "words": [
      "垫儿",
      "垫圈",
      "垫板"
    ],
    "sentence": "多写几遍就不会忘了「垫」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1464
  },
  {
    "char": "酒",
    "pinyin": "jiǔ",
    "strokes": 10,
    "words": [
      "酒令",
      "酒会",
      "酒兴"
    ],
    "sentence": "「酒」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1465
  },
  {
    "char": "掩",
    "pinyin": "yǎn",
    "strokes": 11,
    "words": [
      "掩其不备",
      "掩其无备",
      "掩恶扬善"
    ],
    "sentence": "多写几遍就不会忘了「掩」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1466
  },
  {
    "char": "咬",
    "pinyin": "yǎo",
    "strokes": 9,
    "words": [
      "咬合",
      "咬得菜根",
      "咬文嚼字"
    ],
    "sentence": "多写几遍就不会忘了「咬」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1467
  },
  {
    "char": "拳",
    "pinyin": "quán",
    "strokes": 10,
    "words": [
      "拳参",
      "拳头",
      "拳打"
    ],
    "sentence": "查字典可以找到「拳」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1468
  },
  {
    "char": "制",
    "pinyin": "zhì",
    "strokes": 8,
    "words": [
      "制度",
      "制服",
      "制热"
    ],
    "sentence": "查字典可以找到「制」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1469
  },
  {
    "char": "柔",
    "pinyin": "róu",
    "strokes": 9,
    "words": [
      "柔化",
      "柔和",
      "柔术"
    ],
    "sentence": "多写几遍就不会忘了「柔」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1470
  },
  {
    "char": "渴",
    "pinyin": "kě",
    "strokes": 12,
    "words": [
      "渴念",
      "渴盼",
      "干渴"
    ],
    "sentence": "多写几遍就不会忘了「渴」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1471
  },
  {
    "char": "罐",
    "pinyin": "guàn",
    "strokes": 23,
    "words": [
      "罐头",
      "汤罐",
      "油罐"
    ],
    "sentence": "「罐」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1472
  },
  {
    "char": "累",
    "pinyin": "lèi",
    "strokes": 11,
    "words": [
      "累乏",
      "累了",
      "累人"
    ],
    "sentence": "「累」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1473
  },
  {
    "char": "竟",
    "pinyin": "jìng",
    "strokes": 11,
    "words": [
      "竟是",
      "竟购",
      "入竟问禁"
    ],
    "sentence": "查字典可以找到「竟」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1474
  },
  {
    "char": "匆",
    "pinyin": "cōng",
    "strokes": 5,
    "words": [
      "行色匆匆",
      "行色匆匆"
    ],
    "sentence": "查字典可以找到「匆」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1475
  },
  {
    "char": "哀",
    "pinyin": "āi",
    "strokes": 9,
    "words": [
      "哀乐",
      "哀号",
      "哀家"
    ],
    "sentence": "查字典可以找到「哀」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1476
  },
  {
    "char": "舔",
    "pinyin": "tiǎn",
    "strokes": 14,
    "words": [
      "舔食",
      "刀头舔蜜"
    ],
    "sentence": "多写几遍就不会忘了「舔」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1477
  },
  {
    "char": "反",
    "pinyin": "fǎn",
    "strokes": 4,
    "words": [
      "反侧",
      "反倒",
      "反冲"
    ],
    "sentence": "「反」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1478
  },
  {
    "char": "递",
    "pinyin": "dì",
    "strokes": 10,
    "words": [
      "递解",
      "递降",
      "传递"
    ],
    "sentence": "查字典可以找到「递」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1479
  },
  {
    "char": "忍",
    "pinyin": "rěn",
    "strokes": 7,
    "words": [
      "忍辱",
      "不忍",
      "强忍"
    ],
    "sentence": "多写几遍就不会忘了「忍」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1480
  },
  {
    "char": "凑",
    "pinyin": "còu",
    "strokes": 11,
    "words": [
      "凑乎",
      "凑数",
      "凑趣"
    ],
    "sentence": "查字典可以找到「凑」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1481
  },
  {
    "char": "咽",
    "pinyin": "yàn",
    "strokes": 9,
    "words": [
      "咽喉",
      "咽头",
      "咽气"
    ],
    "sentence": "多写几遍就不会忘了「咽」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1482
  },
  {
    "char": "唾",
    "pinyin": "tuò",
    "strokes": 11,
    "words": [
      "唾地成文",
      "唾手可取",
      "唾手可得"
    ],
    "sentence": "查字典可以找到「唾」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1483
  },
  {
    "char": "沫",
    "pinyin": "mò",
    "strokes": 8,
    "words": [
      "沫儿",
      "沫子",
      "吐沫"
    ],
    "sentence": "「沫」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1484
  },
  {
    "char": "涌",
    "pinyin": "yǒng",
    "strokes": 10,
    "words": [
      "涌出",
      "涌动",
      "涌泉"
    ],
    "sentence": "「涌」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1485
  },
  {
    "char": "差",
    "pinyin": "chà",
    "strokes": 9,
    "words": [
      "差事",
      "差价",
      "差使"
    ],
    "sentence": "多写几遍就不会忘了「差」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1486
  },
  {
    "char": "抵",
    "pinyin": "dǐ",
    "strokes": 8,
    "words": [
      "抵交",
      "抵挡",
      "抵缴"
    ],
    "sentence": "多写几遍就不会忘了「抵」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1487
  },
  {
    "char": "氏",
    "pinyin": "shì",
    "strokes": 4,
    "words": [
      "氏族",
      "人氏",
      "姓氏"
    ],
    "sentence": "多写几遍就不会忘了「氏」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1488
  },
  {
    "char": "庄",
    "pinyin": "zhuāng",
    "strokes": 6,
    "words": [
      "庄家",
      "庄重",
      "庄园主"
    ],
    "sentence": "查字典可以找到「庄」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1489
  },
  {
    "char": "稼",
    "pinyin": "jià",
    "strokes": 15,
    "words": [
      "稼穑艰难",
      "庄稼地",
      "庄稼院"
    ],
    "sentence": "查字典可以找到「稼」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1490
  },
  {
    "char": "兽",
    "pinyin": "shòu",
    "strokes": 11,
    "words": [
      "海兽",
      "兽聚鸟散",
      "食蚁兽"
    ],
    "sentence": "「兽」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1491
  },
  {
    "char": "存",
    "pinyin": "cún",
    "strokes": 6,
    "words": [
      "存世",
      "存亡",
      "存储"
    ],
    "sentence": "查字典可以找到「存」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1492
  },
  {
    "char": "繁",
    "pinyin": "fán",
    "strokes": 17,
    "words": [
      "繁丽",
      "繁乱",
      "繁体"
    ],
    "sentence": "多写几遍就不会忘了「繁」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1493
  },
  {
    "char": "殖",
    "pinyin": "zhí",
    "strokes": 12,
    "words": [
      "养殖",
      "垦殖",
      "增殖"
    ],
    "sentence": "查字典可以找到「殖」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1494
  },
  {
    "char": "蔬",
    "pinyin": "shū",
    "strokes": 15,
    "words": [
      "布衣蔬食",
      "弊衣蔬食",
      "恶衣蔬食"
    ],
    "sentence": "多写几遍就不会忘了「蔬」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1495
  },
  {
    "char": "麻",
    "pinyin": "má",
    "strokes": 11,
    "words": [
      "麻雀",
      "免麻",
      "发麻"
    ],
    "sentence": "查字典可以找到「麻」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1496
  },
  {
    "char": "较",
    "pinyin": "jiào",
    "strokes": 10,
    "words": [
      "较为",
      "较之",
      "较劲"
    ],
    "sentence": "查字典可以找到「较」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1497
  },
  {
    "char": "杀",
    "pinyin": "shā",
    "strokes": 6,
    "words": [
      "学杀",
      "大杀",
      "杀子"
    ],
    "sentence": "多写几遍就不会忘了「杀」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1498
  },
  {
    "char": "预",
    "pinyin": "yù",
    "strokes": 10,
    "words": [
      "预估",
      "预卜",
      "预压"
    ],
    "sentence": "「预」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1499
  },
  {
    "char": "幕",
    "pinyin": "mù",
    "strokes": 13,
    "words": [
      "一幕",
      "内幕",
      "屏幕"
    ],
    "sentence": "「幕」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1500
  },
  {
    "char": "临",
    "pinyin": "lín",
    "strokes": 9,
    "words": [
      "临了",
      "临别",
      "临场"
    ],
    "sentence": "多写几遍就不会忘了「临」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1501
  },
  {
    "char": "悬",
    "pinyin": "xuán",
    "strokes": 11,
    "words": [
      "悬棺",
      "倒悬",
      "悬钩子"
    ],
    "sentence": "多写几遍就不会忘了「悬」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1502
  },
  {
    "char": "曾",
    "pinyin": "céng",
    "strokes": 12,
    "words": [
      "曾孙",
      "曾祖",
      "曾经"
    ],
    "sentence": "查字典可以找到「曾」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1503
  },
  {
    "char": "奥",
    "pinyin": "ào",
    "strokes": 12,
    "words": [
      "奥义",
      "奥兰",
      "奥博"
    ],
    "sentence": "「奥」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1504
  },
  {
    "char": "努",
    "pinyin": "nǔ",
    "strokes": 7,
    "words": [
      "努劲儿",
      "努尔哈赤",
      "横眉努目"
    ],
    "sentence": "多写几遍就不会忘了「努」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1505
  },
  {
    "char": "登",
    "pinyin": "dēng",
    "strokes": 12,
    "words": [
      "登台",
      "登场",
      "登载"
    ],
    "sentence": "「登」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1506
  },
  {
    "char": "任",
    "pinyin": "rèn",
    "strokes": 6,
    "words": [
      "任丘",
      "任从",
      "任何"
    ],
    "sentence": "查字典可以找到「任」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1507
  },
  {
    "char": "撒",
    "pinyin": "sā",
    "strokes": 15,
    "words": [
      "撒刁",
      "撒娇",
      "撒布"
    ],
    "sentence": "多写几遍就不会忘了「撒」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1508
  },
  {
    "char": "藻",
    "pinyin": "zǎo",
    "strokes": 19,
    "words": [
      "藻井",
      "藻思",
      "藻饰"
    ],
    "sentence": "多写几遍就不会忘了「藻」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1509
  },
  {
    "char": "旦",
    "pinyin": "dàn",
    "strokes": 5,
    "words": [
      "旦角",
      "一旦",
      "名旦"
    ],
    "sentence": "多写几遍就不会忘了「旦」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1510
  },
  {
    "char": "项",
    "pinyin": "xiàng",
    "strokes": 9,
    "words": [
      "项圈",
      "项背",
      "多项"
    ],
    "sentence": "「项」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1511
  },
  {
    "char": "估",
    "pinyin": "gū",
    "strokes": 7,
    "words": [
      "估产",
      "估价",
      "估摸"
    ],
    "sentence": "「估」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1512
  },
  {
    "char": "龄",
    "pinyin": "líng",
    "strokes": 13,
    "words": [
      "同龄",
      "大龄",
      "婚龄"
    ],
    "sentence": "查字典可以找到「龄」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1513
  },
  {
    "char": "络",
    "pinyin": "luò",
    "strokes": 9,
    "words": [
      "络子",
      "络绎",
      "络脉"
    ],
    "sentence": "多写几遍就不会忘了「络」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1514
  },
  {
    "char": "箱",
    "pinyin": "xiāng",
    "strokes": 15,
    "words": [
      "箱体",
      "箱包",
      "箱子"
    ],
    "sentence": "查字典可以找到「箱」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1515
  },
  {
    "char": "迫",
    "pinyin": "pò",
    "strokes": 8,
    "words": [
      "迫临",
      "迫于",
      "迫令"
    ],
    "sentence": "多写几遍就不会忘了「迫」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1516
  },
  {
    "char": "悟",
    "pinyin": "wù",
    "strokes": 10,
    "words": [
      "悟出",
      "悟空",
      "了悟"
    ],
    "sentence": "「悟」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1517
  },
  {
    "char": "盯",
    "pinyin": "dīng",
    "strokes": 7,
    "words": [
      "盯梢",
      "学盯",
      "大盯"
    ],
    "sentence": "「盯」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1518
  },
  {
    "char": "鼠",
    "pinyin": "shǔ",
    "strokes": 13,
    "words": [
      "鼠害",
      "鼠类",
      "家鼠"
    ],
    "sentence": "多写几遍就不会忘了「鼠」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1519
  },
  {
    "char": "唐",
    "pinyin": "táng",
    "strokes": 10,
    "words": [
      "南唐",
      "行唐",
      "唐临晋帖"
    ],
    "sentence": "多写几遍就不会忘了「唐」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1520
  },
  {
    "char": "警",
    "pinyin": "jǐng",
    "strokes": 19,
    "words": [
      "警句",
      "警号",
      "警员"
    ],
    "sentence": "「警」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1521
  },
  {
    "char": "眯",
    "pinyin": "mī",
    "strokes": 11,
    "words": [
      "笑眯眯",
      "笑眯眯",
      "播穅眯目"
    ],
    "sentence": "查字典可以找到「眯」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1522
  },
  {
    "char": "览",
    "pinyin": "lǎn",
    "strokes": 9,
    "words": [
      "便览",
      "纵览",
      "要览"
    ],
    "sentence": "多写几遍就不会忘了「览」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1523
  },
  {
    "char": "敞",
    "pinyin": "chǎng",
    "strokes": 12,
    "words": [
      "敞篷",
      "敞车",
      "敞篷车"
    ],
    "sentence": "多写几遍就不会忘了「敞」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1524
  },
  {
    "char": "寄",
    "pinyin": "jì",
    "strokes": 11,
    "words": [
      "寄赠",
      "交寄",
      "寄宿制"
    ],
    "sentence": "查字典可以找到「寄」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1525
  },
  {
    "char": "秒",
    "pinyin": "miǎo",
    "strokes": 9,
    "words": [
      "分秒",
      "读秒",
      "争分夺秒"
    ],
    "sentence": "多写几遍就不会忘了「秒」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1526
  },
  {
    "char": "恋",
    "pinyin": "liàn",
    "strokes": 10,
    "words": [
      "恋乡",
      "恋家",
      "单恋"
    ],
    "sentence": "查字典可以找到「恋」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1527
  },
  {
    "char": "彤",
    "pinyin": "tóng",
    "strokes": 7,
    "words": [
      "彤红",
      "红彤彤",
      "红彤彤"
    ],
    "sentence": "多写几遍就不会忘了「彤」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1528
  },
  {
    "char": "霞",
    "pinyin": "xiá",
    "strokes": 17,
    "words": [
      "霞石",
      "朝霞",
      "栖霞"
    ],
    "sentence": "查字典可以找到「霞」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1529
  },
  {
    "char": "陪",
    "pinyin": "péi",
    "strokes": 10,
    "words": [
      "陪同",
      "陪祭",
      "陪都"
    ],
    "sentence": "「陪」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1530
  },
  {
    "char": "趁",
    "pinyin": "chèn",
    "strokes": 12,
    "words": [
      "趁便",
      "趁空",
      "趁势落篷"
    ],
    "sentence": "「趁」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1531
  },
  {
    "char": "窄",
    "pinyin": "zhǎi",
    "strokes": 10,
    "words": [
      "窄幅",
      "冤家路窄",
      "宽打窄用"
    ],
    "sentence": "查字典可以找到「窄」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1532
  },
  {
    "char": "脖",
    "pinyin": "bó",
    "strokes": 11,
    "words": [
      "脖子",
      "脖颈",
      "仰脖"
    ],
    "sentence": "「脖」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1533
  },
  {
    "char": "段",
    "pinyin": "duàn",
    "strokes": 9,
    "words": [
      "段落",
      "段长",
      "中段"
    ],
    "sentence": "「段」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1534
  },
  {
    "char": "漆",
    "pinyin": "qī",
    "strokes": 14,
    "words": [
      "漆匠",
      "漆画",
      "漆皮"
    ],
    "sentence": "查字典可以找到「漆」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1535
  },
  {
    "char": "胆",
    "pinyin": "dǎn",
    "strokes": 9,
    "words": [
      "胆囊",
      "胆子",
      "胆识"
    ],
    "sentence": "「胆」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1536
  },
  {
    "char": "踪",
    "pinyin": "zōng",
    "strokes": 15,
    "words": [
      "寻踪",
      "藏踪",
      "行踪"
    ],
    "sentence": "查字典可以找到「踪」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1537
  },
  {
    "char": "镇",
    "pinyin": "zhèn",
    "strokes": 15,
    "words": [
      "镇压",
      "镇尺",
      "镇服"
    ],
    "sentence": "多写几遍就不会忘了「镇」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1538
  },
  {
    "char": "摊",
    "pinyin": "tān",
    "strokes": 13,
    "words": [
      "摊主",
      "摊子",
      "摊放"
    ],
    "sentence": "「摊」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1539
  },
  {
    "char": "鼻",
    "pinyin": "bí",
    "strokes": 14,
    "words": [
      "鼻塞",
      "鼻头",
      "鼻子"
    ],
    "sentence": "「鼻」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1540
  },
  {
    "char": "换",
    "pinyin": "huàn",
    "strokes": 10,
    "words": [
      "换亲",
      "换型",
      "换届"
    ],
    "sentence": "「换」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1541
  },
  {
    "char": "摔",
    "pinyin": "shuāi",
    "strokes": 14,
    "words": [
      "摔倒",
      "摔打",
      "摔角"
    ],
    "sentence": "多写几遍就不会忘了「摔」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1542
  },
  {
    "char": "竖",
    "pinyin": "shù",
    "strokes": 9,
    "words": [
      "横竖",
      "七横八竖"
    ],
    "sentence": "多写几遍就不会忘了「竖」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1543
  },
  {
    "char": "卖",
    "pinyin": "mài",
    "strokes": 8,
    "words": [
      "卖价",
      "卖俏",
      "卖劲"
    ],
    "sentence": "多写几遍就不会忘了「卖」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1544
  },
  {
    "char": "售",
    "pinyin": "shòu",
    "strokes": 11,
    "words": [
      "售后",
      "售汇",
      "发售"
    ],
    "sentence": "「售」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1545
  },
  {
    "char": "驮",
    "pinyin": "tuó",
    "strokes": 6,
    "words": [
      "一驮粮",
      "学驮",
      "大驮"
    ],
    "sentence": "查字典可以找到「驮」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1546
  },
  {
    "char": "构",
    "pinyin": "gòu",
    "strokes": 8,
    "words": [
      "构思",
      "构筑",
      "构筑物"
    ],
    "sentence": "查字典可以找到「构」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1547
  },
  {
    "char": "端",
    "pinyin": "duān",
    "strokes": 14,
    "words": [
      "端丽",
      "端正",
      "端相"
    ],
    "sentence": "查字典可以找到「端」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1548
  },
  {
    "char": "掏",
    "pinyin": "tāo",
    "strokes": 11,
    "words": [
      "学掏",
      "大掏",
      "小掏"
    ],
    "sentence": "「掏」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1549
  },
  {
    "char": "馆",
    "pinyin": "guǎn",
    "strokes": 11,
    "words": [
      "馆员",
      "馆子",
      "馆所"
    ],
    "sentence": "「馆」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1550
  },
  {
    "char": "饭",
    "pinyin": "fàn",
    "strokes": 7,
    "words": [
      "饭勺",
      "饭囊",
      "饭票"
    ],
    "sentence": "「饭」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1551
  },
  {
    "char": "辨",
    "pinyin": "biàn",
    "strokes": 16,
    "words": [
      "辨别",
      "辨正",
      "辨识"
    ],
    "sentence": "「辨」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1552
  },
  {
    "char": "堆",
    "pinyin": "duī",
    "strokes": 11,
    "words": [
      "扎堆",
      "沙堆",
      "堆案盈几"
    ],
    "sentence": "多写几遍就不会忘了「堆」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1553
  },
  {
    "char": "模",
    "pinyin": "mó",
    "strokes": 14,
    "words": [
      "模仿",
      "模具",
      "模印"
    ],
    "sentence": "查字典可以找到「模」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1554
  },
  {
    "char": "付",
    "pinyin": "fù",
    "strokes": 5,
    "words": [
      "付与",
      "付酬",
      "兑付"
    ],
    "sentence": "多写几遍就不会忘了「付」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1555
  },
  {
    "char": "标",
    "pinyin": "biāo",
    "strokes": 9,
    "words": [
      "标价",
      "标号",
      "标尺"
    ],
    "sentence": "多写几遍就不会忘了「标」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1556
  },
  {
    "char": "齿",
    "pinyin": "chǐ",
    "strokes": 8,
    "words": [
      "齿冠",
      "齿条",
      "齿龈"
    ],
    "sentence": "「齿」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1557
  },
  {
    "char": "乞",
    "pinyin": "qǐ",
    "strokes": 3,
    "words": [
      "乞和",
      "乞降",
      "乞食"
    ],
    "sentence": "多写几遍就不会忘了「乞」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1558
  },
  {
    "char": "巧",
    "pinyin": "qiǎo",
    "strokes": 5,
    "words": [
      "巧劲",
      "巧取",
      "巧合"
    ],
    "sentence": "查字典可以找到「巧」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1559
  },
  {
    "char": "霄",
    "pinyin": "xiāo",
    "strokes": 15,
    "words": [
      "重霄",
      "霄壤之别",
      "霄鱼垂化"
    ],
    "sentence": "「霄」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1560
  },
  {
    "char": "渡",
    "pinyin": "dù",
    "strokes": 12,
    "words": [
      "渡头",
      "强渡",
      "抢渡"
    ],
    "sentence": "查字典可以找到「渡」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1561
  },
  {
    "char": "屏",
    "pinyin": "píng",
    "strokes": 9,
    "words": [
      "屏住",
      "屏山",
      "屏幕"
    ],
    "sentence": "多写几遍就不会忘了「屏」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1562
  },
  {
    "char": "烛",
    "pinyin": "zhú",
    "strokes": 10,
    "words": [
      "烛台",
      "烛照数计",
      "五侯蜡烛"
    ],
    "sentence": "「烛」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1563
  },
  {
    "char": "晓",
    "pinyin": "xiǎo",
    "strokes": 10,
    "words": [
      "晓得",
      "分晓",
      "拂晓"
    ],
    "sentence": "「晓」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1564
  },
  {
    "char": "偷",
    "pinyin": "tōu",
    "strokes": 11,
    "words": [
      "学偷",
      "大偷",
      "偷子"
    ],
    "sentence": "多写几遍就不会忘了「偷」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1565
  },
  {
    "char": "淹",
    "pinyin": "yān",
    "strokes": 11,
    "words": [
      "淹埋",
      "淹没",
      "淹溺"
    ],
    "sentence": "查字典可以找到「淹」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1566
  },
  {
    "char": "官",
    "pinyin": "guān",
    "strokes": 8,
    "words": [
      "官了",
      "官价",
      "官倒"
    ],
    "sentence": "多写几遍就不会忘了「官」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1567
  },
  {
    "char": "逼",
    "pinyin": "bī",
    "strokes": 12,
    "words": [
      "逼供",
      "逼和",
      "逼抢"
    ],
    "sentence": "「逼」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1568
  },
  {
    "char": "姓",
    "pinyin": "xìng",
    "strokes": 8,
    "words": [
      "姓任",
      "姓冠"
    ],
    "sentence": "「姓」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1569
  },
  {
    "char": "睁",
    "pinyin": "zhēng",
    "strokes": 11,
    "words": [
      "学睁",
      "大睁",
      "小睁"
    ],
    "sentence": "多写几遍就不会忘了「睁」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1570
  },
  {
    "char": "旱",
    "pinyin": "hàn",
    "strokes": 7,
    "words": [
      "旱区",
      "旱地",
      "旱魔"
    ],
    "sentence": "查字典可以找到「旱」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1571
  },
  {
    "char": "徒",
    "pinyin": "tú",
    "strokes": 10,
    "words": [
      "徒孙",
      "徒弟",
      "徒长"
    ],
    "sentence": "多写几遍就不会忘了「徒」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1572
  },
  {
    "char": "腾",
    "pinyin": "téng",
    "strokes": 13,
    "words": [
      "腾冲",
      "腾涌",
      "腾空"
    ],
    "sentence": "多写几遍就不会忘了「腾」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1573
  },
  {
    "char": "催",
    "pinyin": "cuī",
    "strokes": 13,
    "words": [
      "催办",
      "催化",
      "催发"
    ],
    "sentence": "多写几遍就不会忘了「催」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1574
  },
  {
    "char": "吊",
    "pinyin": "diào",
    "strokes": 6,
    "words": [
      "吊丧",
      "吊卷",
      "吊扇"
    ],
    "sentence": "「吊」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1575
  },
  {
    "char": "跪",
    "pinyin": "guì",
    "strokes": 13,
    "words": [
      "跪倒",
      "长跪"
    ],
    "sentence": "多写几遍就不会忘了「跪」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1576
  },
  {
    "char": "渠",
    "pinyin": "qú",
    "strokes": 11,
    "words": [
      "渠道",
      "干渠",
      "支渠"
    ],
    "sentence": "多写几遍就不会忘了「渠」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1577
  },
  {
    "char": "灌",
    "pinyin": "guàn",
    "strokes": 20,
    "words": [
      "灌制",
      "灌区",
      "灌洗"
    ],
    "sentence": "查字典可以找到「灌」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1578
  },
  {
    "char": "溉",
    "pinyin": "gài",
    "strokes": 12,
    "words": [
      "灌溉渠",
      "地面灌溉",
      "自流灌溉"
    ],
    "sentence": "「溉」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1579
  },
  {
    "char": "隆",
    "pinyin": "lóng",
    "strokes": 11,
    "words": [
      "兴隆",
      "轰隆",
      "隆重庆祝"
    ],
    "sentence": "「隆」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1580
  },
  {
    "char": "塌",
    "pinyin": "tā",
    "strokes": 13,
    "words": [
      "塌台",
      "塌落",
      "下塌"
    ],
    "sentence": "「塌」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1581
  },
  {
    "char": "露",
    "pinyin": "lù",
    "strokes": 21,
    "words": [
      "露丑",
      "露光",
      "露刃"
    ],
    "sentence": "多写几遍就不会忘了「露」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1582
  },
  {
    "char": "燃",
    "pinyin": "rán",
    "strokes": 16,
    "words": [
      "助燃",
      "易燃",
      "燃烧弹"
    ],
    "sentence": "多写几遍就不会忘了「燃」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1583
  },
  {
    "char": "熊",
    "pinyin": "xióng",
    "strokes": 14,
    "words": [
      "熊猫",
      "熊爪子",
      "熊据虎跱"
    ],
    "sentence": "「熊」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1584
  },
  {
    "char": "挣",
    "pinyin": "zhēng",
    "strokes": 9,
    "words": [
      "挣命",
      "挣扎",
      "挣揣"
    ],
    "sentence": "「挣」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1585
  },
  {
    "char": "熄",
    "pinyin": "xī",
    "strokes": 14,
    "words": [
      "学熄",
      "大熄",
      "小熄"
    ],
    "sentence": "查字典可以找到「熄」字的解释。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1586
  },
  {
    "char": "喷",
    "pinyin": "pēn",
    "strokes": 12,
    "words": [
      "喷发",
      "喷口",
      "喷吐"
    ],
    "sentence": "多写几遍就不会忘了「喷」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1587
  },
  {
    "char": "缺",
    "pinyin": "quē",
    "strokes": 10,
    "words": [
      "缺员",
      "缺少",
      "缺阵"
    ],
    "sentence": "「缺」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1588
  },
  {
    "char": "纯",
    "pinyin": "chún",
    "strokes": 7,
    "words": [
      "纯净",
      "纯化",
      "纯度"
    ],
    "sentence": "多写几遍就不会忘了「纯」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1589
  },
  {
    "char": "冶",
    "pinyin": "yě",
    "strokes": 7,
    "words": [
      "大冶",
      "冶叶倡条",
      "丰姿冶丽"
    ],
    "sentence": "多写几遍就不会忘了「冶」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1590
  },
  {
    "char": "炼",
    "pinyin": "liàn",
    "strokes": 9,
    "words": [
      "炼句",
      "炼钢",
      "提炼"
    ],
    "sentence": "「炼」字的含义很丰富。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1591
  },
  {
    "char": "盆",
    "pinyin": "pén",
    "strokes": 9,
    "words": [
      "盆地",
      "盆景",
      "盆汤"
    ],
    "sentence": "多写几遍就不会忘了「盆」字。",
    "grade": "三年级下册",
    "level": 6,
    "id": 1592
  },
  {
    "char": "潮",
    "pinyin": "cháo",
    "strokes": 15,
    "words": [
      "潮水",
      "浪潮",
      "高潮"
    ],
    "sentence": "在作文中用上「潮」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1593
  },
  {
    "char": "称",
    "pinyin": "chēng",
    "strokes": 10,
    "words": [
      "称呼",
      "名称",
      "称号"
    ],
    "sentence": "掌握「称」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1594
  },
  {
    "char": "盐",
    "pinyin": "yán",
    "strokes": 10,
    "words": [
      "食盐",
      "盐水",
      "盐分"
    ],
    "sentence": "掌握「盐」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1595
  },
  {
    "char": "笼",
    "pinyin": "lóng",
    "strokes": 11,
    "words": [
      "灯笼",
      "笼子",
      "笼罩"
    ],
    "sentence": "「笼」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1596
  },
  {
    "char": "罩",
    "pinyin": "zhào",
    "strokes": 13,
    "words": [
      "口罩",
      "笼罩",
      "外罩"
    ],
    "sentence": "「罩」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1597
  },
  {
    "char": "蒙",
    "pinyin": "méng",
    "strokes": 13,
    "words": [
      "启蒙",
      "蒙古",
      "蒙住"
    ],
    "sentence": "「蒙」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1598
  },
  {
    "char": "薄",
    "pinyin": "báo",
    "strokes": 16,
    "words": [
      "薄雾",
      "轻薄",
      "薄膜"
    ],
    "sentence": "在作文中用上「薄」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1599
  },
  {
    "char": "雾",
    "pinyin": "wù",
    "strokes": 13,
    "words": [
      "雾化",
      "喷雾",
      "晨雾"
    ],
    "sentence": "掌握「雾」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1600
  },
  {
    "char": "昂",
    "pinyin": "áng",
    "strokes": 8,
    "words": [
      "昂首",
      "高昂",
      "昂扬"
    ],
    "sentence": "「昂」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1601
  },
  {
    "char": "沸",
    "pinyin": "fèi",
    "strokes": 8,
    "words": [
      "沸腾",
      "沸水",
      "煮沸"
    ],
    "sentence": "在作文中用上「沸」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1602
  },
  {
    "char": "贯",
    "pinyin": "guàn",
    "strokes": 8,
    "words": [
      "一贯",
      "万贯",
      "条贯"
    ],
    "sentence": "掌握「贯」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1603
  },
  {
    "char": "旧",
    "pinyin": "jiù",
    "strokes": 5,
    "words": [
      "旧体",
      "旧地",
      "旧好"
    ],
    "sentence": "「旧」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1604
  },
  {
    "char": "恢",
    "pinyin": "huī",
    "strokes": 9,
    "words": [
      "恢复期",
      "恢宏大度",
      "恢廓大度"
    ],
    "sentence": "掌握「恢」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1605
  },
  {
    "char": "灿",
    "pinyin": "càn",
    "strokes": 7,
    "words": [
      "灿烂",
      "金灿灿"
    ],
    "sentence": "在作文中用上「灿」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1606
  },
  {
    "char": "烂",
    "pinyin": "làn",
    "strokes": 9,
    "words": [
      "灿烂",
      "破烂",
      "烂漫"
    ],
    "sentence": "「烂」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1607
  },
  {
    "char": "竿",
    "pinyin": "gān",
    "strokes": 9,
    "words": [
      "竿头一步",
      "竿头日上",
      "竿头日进"
    ],
    "sentence": "「竿」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1608
  },
  {
    "char": "茫",
    "pinyin": "máng",
    "strokes": 9,
    "words": [
      "迷茫",
      "茫茫",
      "白茫茫"
    ],
    "sentence": "「茫」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1609
  },
  {
    "char": "桨",
    "pinyin": "jiǎng",
    "strokes": 10,
    "words": [
      "船桨",
      "划桨"
    ],
    "sentence": "掌握「桨」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1610
  },
  {
    "char": "规",
    "pinyin": "guī",
    "strokes": 8,
    "words": [
      "规划",
      "规模",
      "规正"
    ],
    "sentence": "「规」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1611
  },
  {
    "char": "律",
    "pinyin": "lǜ",
    "strokes": 9,
    "words": [
      "律令",
      "律条",
      "乐律"
    ],
    "sentence": "在作文中用上「律」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1612
  },
  {
    "char": "支",
    "pinyin": "zhī",
    "strokes": 4,
    "words": [
      "支会",
      "支助",
      "支吾"
    ],
    "sentence": "在作文中用上「支」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1613
  },
  {
    "char": "株",
    "pinyin": "zhū",
    "strokes": 10,
    "words": [
      "株型",
      "株连蔓引",
      "削株掘根"
    ],
    "sentence": "「株」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1614
  },
  {
    "char": "缝",
    "pinyin": "fèng",
    "strokes": 13,
    "words": [
      "缝儿",
      "缝制",
      "缝合"
    ],
    "sentence": "「缝」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1615
  },
  {
    "char": "隙",
    "pinyin": "xì",
    "strokes": 12,
    "words": [
      "缝隙",
      "空隙",
      "间隙"
    ],
    "sentence": "掌握「隙」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1616
  },
  {
    "char": "耀",
    "pinyin": "yào",
    "strokes": 20,
    "words": [
      "照耀",
      "闪耀",
      "荣耀"
    ],
    "sentence": "掌握「耀」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1617
  },
  {
    "char": "梢",
    "pinyin": "shāo",
    "strokes": 11,
    "words": [
      "云梢",
      "末梢",
      "枝梢"
    ],
    "sentence": "在作文中用上「梢」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1618
  },
  {
    "char": "寂",
    "pinyin": "jì",
    "strokes": 11,
    "words": [
      "悄寂",
      "空寂",
      "寂天寞地"
    ],
    "sentence": "在作文中用上「寂」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1619
  },
  {
    "char": "莫",
    "pinyin": "mò",
    "strokes": 10,
    "words": [
      "莫非",
      "莫大"
    ],
    "sentence": "在作文中用上「莫」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1620
  },
  {
    "char": "腊",
    "pinyin": "là",
    "strokes": 12,
    "words": [
      "腊月",
      "腊肉",
      "腊八"
    ],
    "sentence": "在作文中用上「腊」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1621
  },
  {
    "char": "浑",
    "pinyin": "hún",
    "strokes": 9,
    "words": [
      "浑身",
      "浑水"
    ],
    "sentence": "在作文中用上「浑」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1622
  },
  {
    "char": "疑",
    "pinyin": "yí",
    "strokes": 14,
    "words": [
      "怀疑",
      "疑惑",
      "疑问"
    ],
    "sentence": "「疑」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1623
  },
  {
    "char": "虎",
    "pinyin": "hǔ",
    "strokes": 8,
    "words": [
      "虎劲",
      "虎将",
      "虎尾"
    ],
    "sentence": "在作文中用上「虎」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1624
  },
  {
    "char": "占",
    "pinyin": "zhàn",
    "strokes": 5,
    "words": [
      "占据",
      "占用",
      "占领"
    ],
    "sentence": "在作文中用上「占」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1625
  },
  {
    "char": "铺",
    "pinyin": "pù",
    "strokes": 12,
    "words": [
      "铺位",
      "铺保",
      "铺叙"
    ],
    "sentence": "在作文中用上「铺」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1626
  },
  {
    "char": "均",
    "pinyin": "jūn",
    "strokes": 7,
    "words": [
      "平均",
      "均匀",
      "均衡"
    ],
    "sentence": "在作文中用上「均」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1627
  },
  {
    "char": "匀",
    "pinyin": "yún",
    "strokes": 4,
    "words": [
      "匀兑",
      "匀净",
      "匀和"
    ],
    "sentence": "在作文中用上「匀」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1628
  },
  {
    "char": "叠",
    "pinyin": "dié",
    "strokes": 13,
    "words": [
      "叠合",
      "叠放",
      "折叠"
    ],
    "sentence": "掌握「叠」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1629
  },
  {
    "char": "茎",
    "pinyin": "jīng",
    "strokes": 8,
    "words": [
      "根茎",
      "花茎",
      "茎叶"
    ],
    "sentence": "掌握「茎」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1630
  },
  {
    "char": "柄",
    "pinyin": "bǐng",
    "strokes": 9,
    "words": [
      "手柄",
      "把柄"
    ],
    "sentence": "掌握「柄」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1631
  },
  {
    "char": "触",
    "pinyin": "chù",
    "strokes": 13,
    "words": [
      "触发",
      "触觉",
      "触角"
    ],
    "sentence": "掌握「触」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1632
  },
  {
    "char": "痕",
    "pinyin": "hén",
    "strokes": 11,
    "words": [
      "痕迹",
      "伤痕",
      "泪痕"
    ],
    "sentence": "掌握「痕」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1633
  },
  {
    "char": "逐",
    "pinyin": "zhú",
    "strokes": 10,
    "words": [
      "逐渐",
      "追逐",
      "逐步"
    ],
    "sentence": "掌握「逐」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1634
  },
  {
    "char": "宅",
    "pinyin": "zhái",
    "strokes": 6,
    "words": [
      "宅地",
      "宅邸",
      "内宅"
    ],
    "sentence": "「宅」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1635
  },
  {
    "char": "蔽",
    "pinyin": "bì",
    "strokes": 14,
    "words": [
      "隐蔽",
      "遮蔽"
    ],
    "sentence": "「蔽」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1636
  },
  {
    "char": "弃",
    "pinyin": "qì",
    "strokes": 7,
    "words": [
      "放弃",
      "丢弃",
      "抛弃"
    ],
    "sentence": "「弃」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1637
  },
  {
    "char": "毫",
    "pinyin": "háo",
    "strokes": 11,
    "words": [
      "分毫",
      "纤毫",
      "羊毫"
    ],
    "sentence": "在作文中用上「毫」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1638
  },
  {
    "char": "遇",
    "pinyin": "yù",
    "strokes": 12,
    "words": [
      "遇难",
      "不遇",
      "奇遇"
    ],
    "sentence": "「遇」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1639
  },
  {
    "char": "择",
    "pinyin": "zé",
    "strokes": 8,
    "words": [
      "择业",
      "择交",
      "择优"
    ],
    "sentence": "「择」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1640
  },
  {
    "char": "址",
    "pinyin": "zhǐ",
    "strokes": 7,
    "words": [
      "会址",
      "地址",
      "坝址"
    ],
    "sentence": "掌握「址」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1641
  },
  {
    "char": "穴",
    "pinyin": "xué",
    "strokes": 5,
    "words": [
      "穴头",
      "地穴",
      "空穴"
    ],
    "sentence": "掌握「穴」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1642
  },
  {
    "char": "掘",
    "pinyin": "jué",
    "strokes": 11,
    "words": [
      "挖掘",
      "采掘",
      "掘土"
    ],
    "sentence": "「掘」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1643
  },
  {
    "char": "搜",
    "pinyin": "sōu",
    "strokes": 12,
    "words": [
      "搜索",
      "搜查",
      "搜寻"
    ],
    "sentence": "在作文中用上「搜」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1644
  },
  {
    "char": "倾",
    "pinyin": "qīng",
    "strokes": 10,
    "words": [
      "倾斜",
      "倾听",
      "倾向"
    ],
    "sentence": "在作文中用上「倾」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1645
  },
  {
    "char": "扒",
    "pinyin": "bā",
    "strokes": 5,
    "words": [
      "扒开",
      "扒手",
      "扒拉"
    ],
    "sentence": "在作文中用上「扒」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1646
  },
  {
    "char": "抛",
    "pinyin": "pāo",
    "strokes": 7,
    "words": [
      "抛射",
      "抛撒",
      "抛洒"
    ],
    "sentence": "掌握「抛」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1647
  },
  {
    "char": "溢",
    "pinyin": "yì",
    "strokes": 13,
    "words": [
      "溢价",
      "溢美",
      "横溢"
    ],
    "sentence": "在作文中用上「溢」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1648
  },
  {
    "char": "允",
    "pinyin": "yǔn",
    "strokes": 4,
    "words": [
      "允当",
      "允许",
      "俞允"
    ],
    "sentence": "「允」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1649
  },
  {
    "char": "墙",
    "pinyin": "qiáng",
    "strokes": 14,
    "words": [
      "墙围",
      "墙垛",
      "墙头"
    ],
    "sentence": "在作文中用上「墙」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1650
  },
  {
    "char": "牌",
    "pinyin": "pái",
    "strokes": 12,
    "words": [
      "牌价",
      "牌儿",
      "牌号"
    ],
    "sentence": "在作文中用上「牌」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1651
  },
  {
    "char": "添",
    "pinyin": "tiān",
    "strokes": 11,
    "words": [
      "添丁",
      "添彩",
      "添色"
    ],
    "sentence": "「添」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1652
  },
  {
    "char": "训",
    "pinyin": "xùn",
    "strokes": 5,
    "words": [
      "训令",
      "训条",
      "家训"
    ],
    "sentence": "「训」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1653
  },
  {
    "char": "覆",
    "pinyin": "fù",
    "strokes": 18,
    "words": [
      "覆亡",
      "覆核",
      "覆没"
    ],
    "sentence": "在作文中用上「覆」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1654
  },
  {
    "char": "凝",
    "pinyin": "níng",
    "strokes": 16,
    "words": [
      "凝华",
      "凝合",
      "凝思"
    ],
    "sentence": "「凝」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1655
  },
  {
    "char": "辣",
    "pinyin": "là",
    "strokes": 14,
    "words": [
      "手辣",
      "辣椒油"
    ],
    "sentence": "在作文中用上「辣」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1656
  },
  {
    "char": "酷",
    "pinyin": "kù",
    "strokes": 14,
    "words": [
      "酷似",
      "酷肖"
    ],
    "sentence": "掌握「酷」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1657
  },
  {
    "char": "愉",
    "pinyin": "yú",
    "strokes": 12,
    "words": [
      "欢愉",
      "心旷神愉",
      "神怿气愉"
    ],
    "sentence": "在作文中用上「愉」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1658
  },
  {
    "char": "拆",
    "pinyin": "chāi",
    "strokes": 8,
    "words": [
      "拆伙",
      "拆借",
      "拆兑"
    ],
    "sentence": "「拆」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1659
  },
  {
    "char": "融",
    "pinyin": "róng",
    "strokes": 16,
    "words": [
      "融会",
      "融化",
      "融合"
    ],
    "sentence": "「融」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1660
  },
  {
    "char": "剩",
    "pinyin": "shèng",
    "strokes": 12,
    "words": [
      "过剩",
      "剩余价值",
      "剩馥残膏"
    ],
    "sentence": "「剩」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1661
  },
  {
    "char": "伐",
    "pinyin": "fá",
    "strokes": 6,
    "words": [
      "伐区",
      "北伐",
      "采伐"
    ],
    "sentence": "在作文中用上「伐」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1662
  },
  {
    "char": "煤",
    "pinyin": "méi",
    "strokes": 13,
    "words": [
      "煤尘",
      "煤熏"
    ],
    "sentence": "掌握「煤」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1663
  },
  {
    "char": "颈",
    "pinyin": "jǐng",
    "strokes": 11,
    "words": [
      "刎颈",
      "头颈",
      "宫颈"
    ],
    "sentence": "掌握「颈」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1664
  },
  {
    "char": "郑",
    "pinyin": "zhèng",
    "strokes": 8,
    "words": [
      "郑重",
      "南郑",
      "郑重其事"
    ],
    "sentence": "「郑」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1665
  },
  {
    "char": "厉",
    "pinyin": "lì",
    "strokes": 5,
    "words": [
      "厉行",
      "厉世摩钝",
      "厉精更始"
    ],
    "sentence": "「厉」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1666
  },
  {
    "char": "剧",
    "pinyin": "jù",
    "strokes": 10,
    "words": [
      "剧场",
      "剧曲"
    ],
    "sentence": "掌握「剧」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1667
  },
  {
    "char": "餐",
    "pinyin": "cān",
    "strokes": 16,
    "words": [
      "餐位",
      "餐券",
      "餐车"
    ],
    "sentence": "「餐」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1668
  },
  {
    "char": "倘",
    "pinyin": "tǎng",
    "strokes": 10,
    "words": [
      "倘佯",
      "倘使",
      "倘或"
    ],
    "sentence": "在作文中用上「倘」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1669
  },
  {
    "char": "饮",
    "pinyin": "yǐn",
    "strokes": 7,
    "words": [
      "饮弹",
      "饮片",
      "饮食"
    ],
    "sentence": "掌握「饮」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1670
  },
  {
    "char": "侍",
    "pinyin": "shì",
    "strokes": 8,
    "words": [
      "侍从",
      "侍女",
      "侍弄"
    ],
    "sentence": "「侍」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1671
  },
  {
    "char": "脾",
    "pinyin": "pí",
    "strokes": 12,
    "words": [
      "脾气很拗",
      "发脾气",
      "坏脾气"
    ],
    "sentence": "在作文中用上「脾」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1672
  },
  {
    "char": "蹲",
    "pinyin": "dūn",
    "strokes": 19,
    "words": [
      "学蹲",
      "大蹲",
      "小蹲"
    ],
    "sentence": "掌握「蹲」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1673
  },
  {
    "char": "供",
    "pinyin": "gōng",
    "strokes": 8,
    "words": [
      "供事",
      "供人",
      "供佛"
    ],
    "sentence": "「供」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1674
  },
  {
    "char": "邻",
    "pinyin": "lín",
    "strokes": 7,
    "words": [
      "邻家",
      "邻舍",
      "邻角"
    ],
    "sentence": "掌握「邻」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1675
  },
  {
    "char": "性",
    "pinyin": "xìng",
    "strokes": 8,
    "words": [
      "性别",
      "性能",
      "性行"
    ],
    "sentence": "「性」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1676
  },
  {
    "char": "格",
    "pinyin": "gé",
    "strokes": 10,
    "words": [
      "格斗",
      "格纸",
      "格调"
    ],
    "sentence": "掌握「格」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1677
  },
  {
    "char": "凭",
    "pinyin": "píng",
    "strokes": 8,
    "words": [
      "凭信",
      "凭单",
      "凭据"
    ],
    "sentence": "掌握「凭」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1678
  },
  {
    "char": "贪",
    "pinyin": "tān",
    "strokes": 8,
    "words": [
      "贪占",
      "贪睡",
      "贪食"
    ],
    "sentence": "「贪」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1679
  },
  {
    "char": "职",
    "pinyin": "zhí",
    "strokes": 11,
    "words": [
      "职大",
      "职教",
      "职校"
    ],
    "sentence": "在作文中用上「职」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1680
  },
  {
    "char": "痒",
    "pinyin": "yǎng",
    "strokes": 11,
    "words": [
      "刺痒",
      "发痒",
      "呵痒"
    ],
    "sentence": "在作文中用上「痒」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1681
  },
  {
    "char": "稿",
    "pinyin": "gǎo",
    "strokes": 15,
    "words": [
      "稿子",
      "稿源",
      "稿约"
    ],
    "sentence": "在作文中用上「稿」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1682
  },
  {
    "char": "踩",
    "pinyin": "cǎi",
    "strokes": 15,
    "words": [
      "踩点",
      "扒高踩低"
    ],
    "sentence": "掌握「踩」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1683
  },
  {
    "char": "梅",
    "pinyin": "méi",
    "strokes": 11,
    "words": [
      "梅雨",
      "刺梅",
      "梅花奖"
    ],
    "sentence": "「梅」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1684
  },
  {
    "char": "蛇",
    "pinyin": "shé",
    "strokes": 11,
    "words": [
      "蛇行",
      "委蛇"
    ],
    "sentence": "掌握「蛇」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1685
  },
  {
    "char": "跌",
    "pinyin": "diē",
    "strokes": 12,
    "words": [
      "跌价",
      "跌倒",
      "跌势"
    ],
    "sentence": "「跌」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1686
  },
  {
    "char": "撞",
    "pinyin": "zhuàng",
    "strokes": 15,
    "words": [
      "撞坏",
      "撞墙",
      "撞见"
    ],
    "sentence": "掌握「撞」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1687
  },
  {
    "char": "辟",
    "pinyin": "pì",
    "strokes": 13,
    "words": [
      "辟举",
      "辟书",
      "辟召"
    ],
    "sentence": "「辟」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1688
  },
  {
    "char": "崇",
    "pinyin": "chóng",
    "strokes": 11,
    "words": [
      "崇山峻岭",
      "崇论吰议",
      "崇论宏议"
    ],
    "sentence": "「崇」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1689
  },
  {
    "char": "旋",
    "pinyin": "xuán",
    "strokes": 11,
    "words": [
      "旋儿",
      "凯旋",
      "周旋"
    ],
    "sentence": "「旋」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1690
  },
  {
    "char": "嘉",
    "pinyin": "jiā",
    "strokes": 14,
    "words": [
      "嘉勉",
      "嘉应",
      "嘉许"
    ],
    "sentence": "「嘉」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1691
  },
  {
    "char": "砖",
    "pinyin": "zhuān",
    "strokes": 9,
    "words": [
      "砖厂",
      "砖头",
      "地砖"
    ],
    "sentence": "「砖」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1692
  },
  {
    "char": "隔",
    "pinyin": "gé",
    "strokes": 12,
    "words": [
      "隔别",
      "隔宿",
      "隔扇"
    ],
    "sentence": "「隔」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1693
  },
  {
    "char": "屯",
    "pinyin": "tún",
    "strokes": 4,
    "words": [
      "屯兵",
      "屯垦",
      "屯子"
    ],
    "sentence": "「屯」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1694
  },
  {
    "char": "堡",
    "pinyin": "bǎo",
    "strokes": 12,
    "words": [
      "堡垒",
      "堡子",
      "堡寨"
    ],
    "sentence": "掌握「堡」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1695
  },
  {
    "char": "垒",
    "pinyin": "lěi",
    "strokes": 9,
    "words": [
      "垒墙",
      "地垒",
      "堡垒"
    ],
    "sentence": "「垒」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1696
  },
  {
    "char": "仗",
    "pinyin": "zhàng",
    "strokes": 5,
    "words": [
      "仰仗",
      "干仗",
      "恶仗"
    ],
    "sentence": "掌握「仗」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1697
  },
  {
    "char": "扶",
    "pinyin": "fú",
    "strokes": 7,
    "words": [
      "扶助",
      "扶掖",
      "扶正"
    ],
    "sentence": "「扶」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1698
  },
  {
    "char": "智",
    "pinyin": "zhì",
    "strokes": 12,
    "words": [
      "智囊",
      "智擒",
      "智术"
    ],
    "sentence": "在作文中用上「智」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1699
  },
  {
    "char": "慧",
    "pinyin": "huì",
    "strokes": 15,
    "words": [
      "慧心巧思",
      "别具慧眼",
      "好行小慧"
    ],
    "sentence": "掌握「慧」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1700
  },
  {
    "char": "魄",
    "pinyin": "pò",
    "strokes": 14,
    "words": [
      "体魄",
      "落魄",
      "魄散魂消"
    ],
    "sentence": "「魄」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1701
  },
  {
    "char": "殿",
    "pinyin": "diàn",
    "strokes": 13,
    "words": [
      "佛殿",
      "大殿",
      "正殿"
    ],
    "sentence": "掌握「殿」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1702
  },
  {
    "char": "廊",
    "pinyin": "láng",
    "strokes": 11,
    "words": [
      "廊子",
      "发廊",
      "游廊"
    ],
    "sentence": "掌握「廊」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1703
  },
  {
    "char": "柱",
    "pinyin": "zhù",
    "strokes": 9,
    "words": [
      "柱石",
      "棱柱",
      "石柱"
    ],
    "sentence": "在作文中用上「柱」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1704
  },
  {
    "char": "栽",
    "pinyin": "zāi",
    "strokes": 10,
    "words": [
      "栽倒",
      "栽树",
      "栽种"
    ],
    "sentence": "掌握「栽」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1705
  },
  {
    "char": "筑",
    "pinyin": "zhù",
    "strokes": 12,
    "words": [
      "修筑",
      "兴筑",
      "建筑"
    ],
    "sentence": "「筑」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1706
  },
  {
    "char": "阁",
    "pinyin": "gé",
    "strokes": 9,
    "words": [
      "阁员",
      "倒阁",
      "内阁"
    ],
    "sentence": "在作文中用上「阁」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1707
  },
  {
    "char": "朱",
    "pinyin": "zhū",
    "strokes": 6,
    "words": [
      "朱墨",
      "朱批",
      "朱文"
    ],
    "sentence": "掌握「朱」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1708
  },
  {
    "char": "堤",
    "pinyin": "dī",
    "strokes": 12,
    "words": [
      "大堤",
      "护堤"
    ],
    "sentence": "「堤」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1709
  },
  {
    "char": "雕",
    "pinyin": "diāo",
    "strokes": 16,
    "words": [
      "雕琢",
      "雕砌",
      "沙雕"
    ],
    "sentence": "掌握「雕」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1710
  },
  {
    "char": "狮",
    "pinyin": "shī",
    "strokes": 9,
    "words": [
      "狮子",
      "狮子会",
      "狮子头"
    ],
    "sentence": "在作文中用上「狮」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1711
  },
  {
    "char": "态",
    "pinyin": "tài",
    "strokes": 8,
    "words": [
      "态度",
      "体态",
      "疲态"
    ],
    "sentence": "在作文中用上「态」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1712
  },
  {
    "char": "孟",
    "pinyin": "mèng",
    "strokes": 8,
    "words": [
      "孟什维克",
      "孟加拉国",
      "优孟衣冠"
    ],
    "sentence": "「孟」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1713
  },
  {
    "char": "浩",
    "pinyin": "hào",
    "strokes": 10,
    "words": [
      "浩大",
      "浩繁",
      "浩气长存"
    ],
    "sentence": "「浩」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1714
  },
  {
    "char": "陵",
    "pinyin": "líng",
    "strokes": 10,
    "words": [
      "南陵",
      "大陵",
      "陵劲淬砺"
    ],
    "sentence": "在作文中用上「陵」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1715
  },
  {
    "char": "辞",
    "pinyin": "cí",
    "strokes": 13,
    "words": [
      "辞令",
      "辞别",
      "辞句"
    ],
    "sentence": "「辞」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1716
  },
  {
    "char": "唯",
    "pinyin": "wéi",
    "strokes": 11,
    "words": [
      "唯物论",
      "唯理论",
      "唯其如此"
    ],
    "sentence": "「唯」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1717
  },
  {
    "char": "舍",
    "pinyin": "shě",
    "strokes": 8,
    "words": [
      "舍亲",
      "舍去",
      "舍己"
    ],
    "sentence": "在作文中用上「舍」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1718
  },
  {
    "char": "君",
    "pinyin": "jūn",
    "strokes": 7,
    "words": [
      "君子",
      "君王",
      "大君"
    ],
    "sentence": "掌握「君」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1719
  },
  {
    "char": "洪",
    "pinyin": "hóng",
    "strokes": 9,
    "words": [
      "洪大",
      "洪泽",
      "洪量"
    ],
    "sentence": "在作文中用上「洪」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1720
  },
  {
    "char": "暴",
    "pinyin": "bào",
    "strokes": 15,
    "words": [
      "学暴",
      "大暴",
      "暴子"
    ],
    "sentence": "在作文中用上「暴」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1721
  },
  {
    "char": "猛",
    "pinyin": "měng",
    "strokes": 11,
    "words": [
      "猛可",
      "猛将",
      "猛男"
    ],
    "sentence": "在作文中用上「猛」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1722
  },
  {
    "char": "涨",
    "pinyin": "zhǎng",
    "strokes": 10,
    "words": [
      "涨价",
      "涨水",
      "涨潮"
    ],
    "sentence": "「涨」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1723
  },
  {
    "char": "裤",
    "pinyin": "kù",
    "strokes": 12,
    "words": [
      "裤头",
      "裤子",
      "裤线"
    ],
    "sentence": "「裤」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1724
  },
  {
    "char": "稳",
    "pinyin": "wěn",
    "strokes": 14,
    "words": [
      "稳便",
      "稳当",
      "稳重"
    ],
    "sentence": "掌握「稳」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1725
  },
  {
    "char": "俗",
    "pinyin": "sú",
    "strokes": 9,
    "words": [
      "俗体",
      "俗家",
      "俗曲"
    ],
    "sentence": "掌握「俗」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1726
  },
  {
    "char": "衡",
    "pinyin": "héng",
    "strokes": 16,
    "words": [
      "衡量",
      "衡短论长",
      "衡石程书"
    ],
    "sentence": "在作文中用上「衡」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1727
  },
  {
    "char": "序",
    "pinyin": "xù",
    "strokes": 7,
    "words": [
      "序数",
      "序曲",
      "序论"
    ],
    "sentence": "「序」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1728
  },
  {
    "char": "伏",
    "pinyin": "fú",
    "strokes": 6,
    "words": [
      "伏地",
      "伏帖",
      "伏瘕"
    ],
    "sentence": "在作文中用上「伏」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1729
  },
  {
    "char": "峡",
    "pinyin": "xiá",
    "strokes": 9,
    "words": [
      "地峡",
      "咽峡炎",
      "瞿塘峡"
    ],
    "sentence": "掌握「峡」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1730
  },
  {
    "char": "桂",
    "pinyin": "guì",
    "strokes": 10,
    "words": [
      "桂冠",
      "桂枝",
      "折桂"
    ],
    "sentence": "掌握「桂」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1731
  },
  {
    "char": "移",
    "pinyin": "yí",
    "strokes": 11,
    "words": [
      "移入",
      "移解",
      "漂移"
    ],
    "sentence": "掌握「移」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1732
  },
  {
    "char": "湾",
    "pinyin": "wān",
    "strokes": 12,
    "words": [
      "湾头",
      "湾泊",
      "港湾"
    ],
    "sentence": "掌握「湾」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1733
  },
  {
    "char": "彼",
    "pinyin": "bǐ",
    "strokes": 8,
    "words": [
      "彼倡此和",
      "彼唱此和",
      "不分彼此"
    ],
    "sentence": "在作文中用上「彼」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1734
  },
  {
    "char": "袭",
    "pinyin": "xí",
    "strokes": 11,
    "words": [
      "袭来",
      "剿袭",
      "奇袭"
    ],
    "sentence": "掌握「袭」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1735
  },
  {
    "char": "余",
    "pinyin": "yú",
    "strokes": 7,
    "words": [
      "余兴",
      "余切",
      "余地"
    ],
    "sentence": "掌握「余」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1736
  },
  {
    "char": "怀",
    "pinyin": "huái",
    "strokes": 7,
    "words": [
      "怀化",
      "怀疑",
      "怀远"
    ],
    "sentence": "「怀」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1737
  },
  {
    "char": "旷",
    "pinyin": "kuàng",
    "strokes": 7,
    "words": [
      "旷远",
      "空旷",
      "旷世奇才"
    ],
    "sentence": "掌握「旷」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1738
  },
  {
    "char": "暂",
    "pinyin": "zàn",
    "strokes": 12,
    "words": [
      "暂住",
      "暂用",
      "暂行"
    ],
    "sentence": "「暂」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1739
  },
  {
    "char": "胞",
    "pinyin": "bāo",
    "strokes": 9,
    "words": [
      "胞妹",
      "胞姐",
      "胞弟"
    ],
    "sentence": "掌握「胞」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1740
  },
  {
    "char": "脉",
    "pinyin": "mài",
    "strokes": 9,
    "words": [
      "脉冲",
      "脉动",
      "脉压"
    ],
    "sentence": "掌握「脉」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1741
  },
  {
    "char": "帝",
    "pinyin": "dì",
    "strokes": 9,
    "words": [
      "帝号",
      "帝王",
      "帝都"
    ],
    "sentence": "掌握「帝」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1742
  },
  {
    "char": "义",
    "pinyin": "yì",
    "strokes": 3,
    "words": [
      "义女",
      "义行",
      "不义"
    ],
    "sentence": "掌握「义」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1743
  },
  {
    "char": "伯",
    "pinyin": "bó",
    "strokes": 7,
    "words": [
      "伯乐",
      "伯仲",
      "伯伯"
    ],
    "sentence": "「伯」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1744
  },
  {
    "char": "租",
    "pinyin": "zū",
    "strokes": 10,
    "words": [
      "租价",
      "租佃",
      "租地"
    ],
    "sentence": "在作文中用上「租」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1745
  },
  {
    "char": "振",
    "pinyin": "zhèn",
    "strokes": 10,
    "words": [
      "振兴",
      "振臂",
      "不振"
    ],
    "sentence": "「振」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1746
  },
  {
    "char": "范",
    "pinyin": "fàn",
    "strokes": 9,
    "words": [
      "范蠡",
      "模范",
      "风范"
    ],
    "sentence": "「范」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1747
  },
  {
    "char": "闯",
    "pinyin": "chuǎng",
    "strokes": 6,
    "words": [
      "闯劲",
      "闯将",
      "闯王"
    ],
    "sentence": "掌握「闯」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1748
  },
  {
    "char": "凡",
    "pinyin": "fán",
    "strokes": 3,
    "words": [
      "凡夫",
      "凡间",
      "不凡"
    ],
    "sentence": "在作文中用上「凡」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1749
  },
  {
    "char": "巡",
    "pinyin": "xún",
    "strokes": 6,
    "words": [
      "巡屉",
      "巡更",
      "巡查"
    ],
    "sentence": "掌握「巡」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1750
  },
  {
    "char": "嚷",
    "pinyin": "rǎng",
    "strokes": 20,
    "words": [
      "嚷叫",
      "嚷嚷",
      "嚷嚷"
    ],
    "sentence": "在作文中用上「嚷」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1751
  },
  {
    "char": "妇",
    "pinyin": "fù",
    "strokes": 6,
    "words": [
      "妇产",
      "妇女",
      "妇婴"
    ],
    "sentence": "「妇」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1752
  },
  {
    "char": "惩",
    "pinyin": "chéng",
    "strokes": 12,
    "words": [
      "惩处",
      "惩艾",
      "重惩"
    ],
    "sentence": "掌握「惩」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1753
  },
  {
    "char": "篇",
    "pinyin": "piān",
    "strokes": 15,
    "words": [
      "篇幅",
      "一篇",
      "篇章"
    ],
    "sentence": "掌握「篇」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1754
  },
  {
    "char": "荐",
    "pinyin": "jiàn",
    "strokes": 9,
    "words": [
      "毛遂自荐",
      "称贤荐能"
    ],
    "sentence": "掌握「荐」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1755
  },
  {
    "char": "翻",
    "pinyin": "fān",
    "strokes": 18,
    "words": [
      "翻供",
      "翻倒",
      "翻卷"
    ],
    "sentence": "「翻」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1756
  },
  {
    "char": "帘",
    "pinyin": "lián",
    "strokes": 8,
    "words": [
      "帘子",
      "卷帘",
      "盖帘"
    ],
    "sentence": "「帘」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1757
  },
  {
    "char": "页",
    "pinyin": "yè",
    "strokes": 6,
    "words": [
      "页数",
      "合页",
      "折页"
    ],
    "sentence": "「页」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1758
  },
  {
    "char": "删",
    "pinyin": "shān",
    "strokes": 7,
    "words": [
      "删削",
      "删节",
      "删节号"
    ],
    "sentence": "「删」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1759
  },
  {
    "char": "词",
    "pinyin": "cí",
    "strokes": 7,
    "words": [
      "词令",
      "词句",
      "词头"
    ],
    "sentence": "在作文中用上「词」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1760
  },
  {
    "char": "燥",
    "pinyin": "zào",
    "strokes": 17,
    "words": [
      "燥裂",
      "干燥",
      "干燥剂"
    ],
    "sentence": "「燥」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1761
  },
  {
    "char": "握",
    "pinyin": "wò",
    "strokes": 12,
    "words": [
      "握别",
      "把握",
      "握发吐哺"
    ],
    "sentence": "掌握「握」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1762
  },
  {
    "char": "洽",
    "pinyin": "qià",
    "strokes": 9,
    "words": [
      "和洽",
      "洽谈会",
      "洽闻强记"
    ],
    "sentence": "在作文中用上「洽」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1763
  },
  {
    "char": "昏",
    "pinyin": "hūn",
    "strokes": 8,
    "words": [
      "昏晕",
      "发昏",
      "头昏"
    ],
    "sentence": "在作文中用上「昏」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1764
  },
  {
    "char": "厅",
    "pinyin": "tīng",
    "strokes": 4,
    "words": [
      "大厅",
      "展厅",
      "正厅"
    ],
    "sentence": "「厅」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1765
  },
  {
    "char": "糊",
    "pinyin": "hú",
    "strokes": 15,
    "words": [
      "模糊",
      "糊涂",
      "糊口"
    ],
    "sentence": "「糊」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1766
  },
  {
    "char": "改",
    "pinyin": "gǎi",
    "strokes": 7,
    "words": [
      "改为",
      "改产",
      "改任"
    ],
    "sentence": "在作文中用上「改」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1767
  },
  {
    "char": "程",
    "pinyin": "chéng",
    "strokes": 12,
    "words": [
      "过程",
      "路程",
      "工程"
    ],
    "sentence": "「程」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1768
  },
  {
    "char": "赖",
    "pinyin": "lài",
    "strokes": 13,
    "words": [
      "不赖",
      "仰赖",
      "信赖"
    ],
    "sentence": "「赖」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1769
  },
  {
    "char": "耕",
    "pinyin": "gēng",
    "strokes": 10,
    "words": [
      "耕地",
      "耕畜",
      "耕种"
    ],
    "sentence": "掌握「耕」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1770
  },
  {
    "char": "驾",
    "pinyin": "jià",
    "strokes": 8,
    "words": [
      "驾车",
      "台驾",
      "大驾"
    ],
    "sentence": "在作文中用上「驾」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1771
  },
  {
    "char": "幻",
    "pinyin": "huàn",
    "strokes": 4,
    "words": [
      "幻想",
      "科幻",
      "变幻"
    ],
    "sentence": "掌握「幻」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1772
  },
  {
    "char": "潜",
    "pinyin": "qián",
    "strokes": 15,
    "words": [
      "潜回",
      "潜流",
      "潜能"
    ],
    "sentence": "掌握「潜」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1773
  },
  {
    "char": "核",
    "pinyin": "hé",
    "strokes": 10,
    "words": [
      "核仁",
      "核儿",
      "核准"
    ],
    "sentence": "掌握「核」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1774
  },
  {
    "char": "控",
    "pinyin": "kòng",
    "strokes": 11,
    "words": [
      "光控",
      "内控",
      "军控"
    ],
    "sentence": "「控」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1775
  },
  {
    "char": "联",
    "pinyin": "lián",
    "strokes": 12,
    "words": [
      "联体",
      "联华",
      "联句"
    ],
    "sentence": "在作文中用上「联」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1776
  },
  {
    "char": "哲",
    "pinyin": "zhé",
    "strokes": 10,
    "words": [
      "哲学",
      "哲理"
    ],
    "sentence": "在作文中用上「哲」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1777
  },
  {
    "char": "归",
    "pinyin": "guī",
    "strokes": 5,
    "words": [
      "归化",
      "归宁",
      "归宿"
    ],
    "sentence": "「归」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1778
  },
  {
    "char": "恐",
    "pinyin": "kǒng",
    "strokes": 10,
    "words": [
      "恐怕",
      "恐怖",
      "恐龙"
    ],
    "sentence": "在作文中用上「恐」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1779
  },
  {
    "char": "凶",
    "pinyin": "xiōng",
    "strokes": 4,
    "words": [
      "学凶",
      "大凶",
      "凶子"
    ],
    "sentence": "「凶」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1780
  },
  {
    "char": "笨",
    "pinyin": "bèn",
    "strokes": 11,
    "words": [
      "笨蛋",
      "笨拙",
      "愚笨"
    ],
    "sentence": "在作文中用上「笨」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1781
  },
  {
    "char": "鸽",
    "pinyin": "gē",
    "strokes": 11,
    "words": [
      "鸽子",
      "白鸽"
    ],
    "sentence": "掌握「鸽」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1782
  },
  {
    "char": "仅",
    "pinyin": "jǐn",
    "strokes": 4,
    "words": [
      "仅仅",
      "不仅",
      "仅此"
    ],
    "sentence": "在作文中用上「仅」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1783
  },
  {
    "char": "顿",
    "pinyin": "dùn",
    "strokes": 10,
    "words": [
      "顿号",
      "顿觉",
      "冒顿"
    ],
    "sentence": "「顿」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1784
  },
  {
    "char": "描",
    "pinyin": "miáo",
    "strokes": 11,
    "words": [
      "勾描",
      "扫描",
      "描写画角"
    ],
    "sentence": "「描」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1785
  },
  {
    "char": "绘",
    "pinyin": "huì",
    "strokes": 9,
    "words": [
      "绘划",
      "勾绘",
      "编绘"
    ],
    "sentence": "掌握「绘」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1786
  },
  {
    "char": "吨",
    "pinyin": "dūn",
    "strokes": 7,
    "words": [
      "学吨",
      "大吨",
      "小吨"
    ],
    "sentence": "「吨」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1787
  },
  {
    "char": "盈",
    "pinyin": "yíng",
    "strokes": 9,
    "words": [
      "盈利",
      "轻盈",
      "充盈"
    ],
    "sentence": "「盈」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1788
  },
  {
    "char": "敏",
    "pinyin": "mǐn",
    "strokes": 11,
    "words": [
      "不敏",
      "过敏",
      "灵敏度"
    ],
    "sentence": "「敏」是四年级的生字。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1789
  },
  {
    "char": "捷",
    "pinyin": "jié",
    "strokes": 11,
    "words": [
      "敏捷",
      "快捷",
      "便捷"
    ],
    "sentence": "掌握「捷」字对阅读很有帮助。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1790
  },
  {
    "char": "崭",
    "pinyin": "zhǎn",
    "strokes": 11,
    "words": [
      "崭新",
      "崭露"
    ],
    "sentence": "在作文中用上「崭」字吧。",
    "grade": "四年级上册",
    "level": 7,
    "id": 1791
  },
  {
    "char": "亭",
    "pinyin": "tíng",
    "strokes": 9,
    "words": [
      "亭子",
      "亭长",
      "乐亭"
    ],
    "sentence": "学会了「亭」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1792
  },
  {
    "char": "庭",
    "pinyin": "tíng",
    "strokes": 9,
    "words": [
      "庭长",
      "内庭",
      "家庭"
    ],
    "sentence": "理解「庭」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1793
  },
  {
    "char": "潭",
    "pinyin": "tán",
    "strokes": 15,
    "words": [
      "泥潭",
      "学潭",
      "大潭"
    ],
    "sentence": "学会了「潭」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1794
  },
  {
    "char": "螺",
    "pinyin": "luó",
    "strokes": 17,
    "words": [
      "螺号",
      "螺旋",
      "螺杆"
    ],
    "sentence": "「螺」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1795
  },
  {
    "char": "谙",
    "pinyin": "ān",
    "strokes": 11,
    "words": [
      "学谙",
      "大谙",
      "小谙"
    ],
    "sentence": "理解「谙」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1796
  },
  {
    "char": "澜",
    "pinyin": "lán",
    "strokes": 15,
    "words": [
      "澜倒波随",
      "推波助澜"
    ],
    "sentence": "「澜」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1797
  },
  {
    "char": "瑕",
    "pinyin": "xiá",
    "strokes": 13,
    "words": [
      "瑕不掩瑜",
      "瑕不揜瑜",
      "瑕瑜互见"
    ],
    "sentence": "理解「瑕」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1798
  },
  {
    "char": "攀",
    "pinyin": "pān",
    "strokes": 19,
    "words": [
      "攀亲",
      "攀供",
      "攀折"
    ],
    "sentence": "「攀」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1799
  },
  {
    "char": "峦",
    "pinyin": "luán",
    "strokes": 9,
    "words": [
      "重峦叠嶂",
      "重峦叠巘",
      "重峦复嶂"
    ],
    "sentence": "学会了「峦」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1800
  },
  {
    "char": "泰",
    "pinyin": "tài",
    "strokes": 10,
    "words": [
      "泰和",
      "泰宁",
      "泰斗"
    ],
    "sentence": "理解「泰」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1801
  },
  {
    "char": "骆",
    "pinyin": "luò",
    "strokes": 9,
    "words": [
      "骆驼刺",
      "骆驿不绝"
    ],
    "sentence": "「骆」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1802
  },
  {
    "char": "驼",
    "pinyin": "tuó",
    "strokes": 8,
    "words": [
      "驼背",
      "单峰驼",
      "骆驼刺"
    ],
    "sentence": "「驼」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1803
  },
  {
    "char": "罗",
    "pinyin": "luó",
    "strokes": 8,
    "words": [
      "罗刹",
      "罗勒",
      "罗圈"
    ],
    "sentence": "理解「罗」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1804
  },
  {
    "char": "障",
    "pinyin": "zhàng",
    "strokes": 13,
    "words": [
      "内障",
      "屏障",
      "清障"
    ],
    "sentence": "「障」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1805
  },
  {
    "char": "兀",
    "pinyin": "wù",
    "strokes": 3,
    "words": [
      "兀秃",
      "学兀",
      "大兀"
    ],
    "sentence": "学会了「兀」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1806
  },
  {
    "char": "绵",
    "pinyin": "mián",
    "strokes": 11,
    "words": [
      "绵力薄材",
      "绵延不断",
      "绵绵不断"
    ],
    "sentence": "理解「绵」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1807
  },
  {
    "char": "浙",
    "pinyin": "zhè",
    "strokes": 10,
    "words": [
      "浙江省",
      "浙江大学"
    ],
    "sentence": "学会了「浙」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1808
  },
  {
    "char": "桐",
    "pinyin": "tóng",
    "strokes": 10,
    "words": [
      "桐树",
      "桐籽",
      "刺桐"
    ],
    "sentence": "学会了「桐」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1809
  },
  {
    "char": "簇",
    "pinyin": "cù",
    "strokes": 17,
    "words": [
      "上簇",
      "花攒锦簇",
      "花簇锦攒"
    ],
    "sentence": "学会了「簇」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1810
  },
  {
    "char": "浓",
    "pinyin": "nóng",
    "strokes": 9,
    "words": [
      "浓度",
      "浓绿",
      "浓缩"
    ],
    "sentence": "学会了「浓」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1811
  },
  {
    "char": "臀",
    "pinyin": "tún",
    "strokes": 17,
    "words": [
      "后臀尖",
      "学臀",
      "大臀"
    ],
    "sentence": "「臀」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1812
  },
  {
    "char": "稍",
    "pinyin": "shāo",
    "strokes": 12,
    "words": [
      "稍为",
      "稍事",
      "稍加"
    ],
    "sentence": "理解「稍」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1813
  },
  {
    "char": "额",
    "pinyin": "é",
    "strokes": 15,
    "words": [
      "额头",
      "额度",
      "额数"
    ],
    "sentence": "学会了「额」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1814
  },
  {
    "char": "擦",
    "pinyin": "cā",
    "strokes": 17,
    "words": [
      "擦洗",
      "擦背",
      "擦边"
    ],
    "sentence": "「擦」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1815
  },
  {
    "char": "蜿",
    "pinyin": "wān",
    "strokes": 14,
    "words": [
      "学蜿",
      "大蜿",
      "小蜿"
    ],
    "sentence": "理解「蜿」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1816
  },
  {
    "char": "蜒",
    "pinyin": "yán",
    "strokes": 12,
    "words": [
      "学蜒",
      "大蜒",
      "小蜒"
    ],
    "sentence": "学会了「蜒」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1817
  },
  {
    "char": "乳",
    "pinyin": "rǔ",
    "strokes": 8,
    "words": [
      "乳化",
      "乳头",
      "乳晕"
    ],
    "sentence": "「乳」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1818
  },
  {
    "char": "据",
    "pinyin": "jù",
    "strokes": 11,
    "words": [
      "依据",
      "信据",
      "借据"
    ],
    "sentence": "学会了「据」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1819
  },
  {
    "char": "源",
    "pinyin": "yuán",
    "strokes": 13,
    "words": [
      "源地",
      "源头",
      "源源"
    ],
    "sentence": "理解「源」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1820
  },
  {
    "char": "维",
    "pinyin": "wéi",
    "strokes": 11,
    "words": [
      "思维",
      "纤维",
      "维妙维肖"
    ],
    "sentence": "理解「维」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1821
  },
  {
    "char": "财",
    "pinyin": "cái",
    "strokes": 7,
    "words": [
      "财会",
      "财界",
      "财长"
    ],
    "sentence": "理解「财」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1822
  },
  {
    "char": "属",
    "pinyin": "shǔ",
    "strokes": 12,
    "words": [
      "属意",
      "属文",
      "属望"
    ],
    "sentence": "「属」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1823
  },
  {
    "char": "货",
    "pinyin": "huò",
    "strokes": 8,
    "words": [
      "货价",
      "货单",
      "货场"
    ],
    "sentence": "学会了「货」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1824
  },
  {
    "char": "驰",
    "pinyin": "chí",
    "strokes": 6,
    "words": [
      "奔驰",
      "驰名中外",
      "驰名当世"
    ],
    "sentence": "「驰」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1825
  },
  {
    "char": "赠",
    "pinyin": "zèng",
    "strokes": 16,
    "words": [
      "赠与",
      "赠书",
      "赠予"
    ],
    "sentence": "学会了「赠」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1826
  },
  {
    "char": "驶",
    "pinyin": "shǐ",
    "strokes": 8,
    "words": [
      "停驶",
      "奔驶",
      "空驶"
    ],
    "sentence": "「驶」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1827
  },
  {
    "char": "德",
    "pinyin": "dé",
    "strokes": 15,
    "words": [
      "德化",
      "德行",
      "德语"
    ],
    "sentence": "理解「德」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1828
  },
  {
    "char": "惑",
    "pinyin": "huò",
    "strokes": 12,
    "words": [
      "不惑",
      "扇惑",
      "疑惑"
    ],
    "sentence": "学会了「惑」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1829
  },
  {
    "char": "码",
    "pinyin": "mǎ",
    "strokes": 8,
    "words": [
      "码垛",
      "码头",
      "价码"
    ],
    "sentence": "理解「码」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1830
  },
  {
    "char": "库",
    "pinyin": "kù",
    "strokes": 7,
    "words": [
      "库券",
      "库区",
      "库藏"
    ],
    "sentence": "「库」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1831
  },
  {
    "char": "捎",
    "pinyin": "shāo",
    "strokes": 10,
    "words": [
      "捎信",
      "捎带",
      "捎脚"
    ],
    "sentence": "理解「捎」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1832
  },
  {
    "char": "橡",
    "pinyin": "xiàng",
    "strokes": 15,
    "words": [
      "橡皮圈",
      "橡皮泥",
      "橡皮筏"
    ],
    "sentence": "理解「橡」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1833
  },
  {
    "char": "拨",
    "pinyin": "bō",
    "strokes": 8,
    "words": [
      "拨发",
      "拨叫",
      "拨号"
    ],
    "sentence": "学会了「拨」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1834
  },
  {
    "char": "尊",
    "pinyin": "zūn",
    "strokes": 12,
    "words": [
      "尊口",
      "令尊",
      "尊主泽民"
    ],
    "sentence": "理解「尊」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1835
  },
  {
    "char": "沃",
    "pinyin": "wò",
    "strokes": 7,
    "words": [
      "沃地",
      "以汤沃沸",
      "以汤沃雪"
    ],
    "sentence": "学会了「沃」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1836
  },
  {
    "char": "呈",
    "pinyin": "chéng",
    "strokes": 7,
    "words": [
      "呈上",
      "呈正",
      "呈露"
    ],
    "sentence": "理解「呈」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1837
  },
  {
    "char": "惫",
    "pinyin": "bèi",
    "strokes": 12,
    "words": [
      "衰惫",
      "疲惫不堪"
    ],
    "sentence": "理解「惫」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1838
  },
  {
    "char": "堪",
    "pinyin": "kān",
    "strokes": 12,
    "words": [
      "堪当",
      "不堪",
      "堪培拉"
    ],
    "sentence": "理解「堪」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1839
  },
  {
    "char": "善",
    "pinyin": "shàn",
    "strokes": 12,
    "words": [
      "善处",
      "善恶",
      "善行"
    ],
    "sentence": "理解「善」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1840
  },
  {
    "char": "款",
    "pinyin": "kuǎn",
    "strokes": 12,
    "words": [
      "款型",
      "款待",
      "款曲"
    ],
    "sentence": "理解「款」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1841
  },
  {
    "char": "例",
    "pinyin": "lì",
    "strokes": 8,
    "words": [
      "例会",
      "例假",
      "例句"
    ],
    "sentence": "理解「例」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1842
  },
  {
    "char": "瘦",
    "pinyin": "shòu",
    "strokes": 14,
    "words": [
      "瘦削",
      "瘦长",
      "削瘦"
    ],
    "sentence": "理解「瘦」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1843
  },
  {
    "char": "杰",
    "pinyin": "jié",
    "strokes": 8,
    "words": [
      "人杰地灵",
      "地灵人杰",
      "女中豪杰"
    ],
    "sentence": "理解「杰」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1844
  },
  {
    "char": "喉",
    "pinyin": "hóu",
    "strokes": 12,
    "words": [
      "喉头",
      "喉管",
      "喉结"
    ],
    "sentence": "「喉」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1845
  },
  {
    "char": "捶",
    "pinyin": "chuí",
    "strokes": 11,
    "words": [
      "捶背",
      "捶骨沥髓",
      "泣血捶膺"
    ],
    "sentence": "理解「捶」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1846
  },
  {
    "char": "僵",
    "pinyin": "jiāng",
    "strokes": 15,
    "words": [
      "僵冷",
      "僵化"
    ],
    "sentence": "理解「僵」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1847
  },
  {
    "char": "配",
    "pinyin": "pèi",
    "strokes": 10,
    "words": [
      "配乐",
      "配发",
      "配合"
    ],
    "sentence": "学会了「配」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1848
  },
  {
    "char": "幼",
    "pinyin": "yòu",
    "strokes": 5,
    "words": [
      "幼体",
      "幼师",
      "幼教"
    ],
    "sentence": "理解「幼」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1849
  },
  {
    "char": "滩",
    "pinyin": "tān",
    "strokes": 13,
    "words": [
      "滩地",
      "滩头",
      "滩羊"
    ],
    "sentence": "「滩」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1850
  },
  {
    "char": "侦",
    "pinyin": "zhēn",
    "strokes": 8,
    "words": [
      "侦查",
      "侦缉",
      "侦察员"
    ],
    "sentence": "学会了「侦」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1851
  },
  {
    "char": "嘲",
    "pinyin": "cháo",
    "strokes": 15,
    "words": [
      "嘲哳",
      "嘲弄",
      "嘲笑"
    ],
    "sentence": "「嘲」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1852
  },
  {
    "char": "啄",
    "pinyin": "zhuó",
    "strokes": 11,
    "words": [
      "众啄同音",
      "学啄",
      "大啄"
    ],
    "sentence": "理解「啄」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1853
  },
  {
    "char": "企",
    "pinyin": "qǐ",
    "strokes": 6,
    "words": [
      "企划",
      "企待",
      "企管"
    ],
    "sentence": "学会了「企」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1854
  },
  {
    "char": "愚",
    "pinyin": "yú",
    "strokes": 13,
    "words": [
      "愚弄",
      "愚氓",
      "愚蒙"
    ],
    "sentence": "「愚」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1855
  },
  {
    "char": "蠢",
    "pinyin": "chǔn",
    "strokes": 21,
    "words": [
      "愚夫蠢妇",
      "学蠢",
      "大蠢"
    ],
    "sentence": "学会了「蠢」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1856
  },
  {
    "char": "返",
    "pinyin": "fǎn",
    "strokes": 7,
    "words": [
      "返城",
      "返祖",
      "返迁"
    ],
    "sentence": "学会了「返」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1857
  },
  {
    "char": "拦",
    "pinyin": "lán",
    "strokes": 8,
    "words": [
      "拦挡",
      "拦柜",
      "拦蓄"
    ],
    "sentence": "理解「拦」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1858
  },
  {
    "char": "鸥",
    "pinyin": "ōu",
    "strokes": 9,
    "words": [
      "沙鸥",
      "鸥水相依",
      "沙鸥翔集"
    ],
    "sentence": "「鸥」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1859
  },
  {
    "char": "帽",
    "pinyin": "mào",
    "strokes": 12,
    "words": [
      "帽子",
      "便帽",
      "僧帽"
    ],
    "sentence": "「帽」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1860
  },
  {
    "char": "吁",
    "pinyin": "xū",
    "strokes": 6,
    "words": [
      "吁吁",
      "吁吁",
      "吁求"
    ],
    "sentence": "「吁」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1861
  },
  {
    "char": "彻",
    "pinyin": "chè",
    "strokes": 7,
    "words": [
      "彻底",
      "彻查",
      "彻骨"
    ],
    "sentence": "理解「彻」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1862
  },
  {
    "char": "蝙",
    "pinyin": "biān",
    "strokes": 15,
    "words": [
      "学蝙",
      "大蝙",
      "小蝙"
    ],
    "sentence": "学会了「蝙」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1863
  },
  {
    "char": "蝠",
    "pinyin": "fú",
    "strokes": 15,
    "words": [
      "学蝠",
      "大蝠",
      "小蝠"
    ],
    "sentence": "「蝠」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1864
  },
  {
    "char": "捕",
    "pinyin": "bǔ",
    "strokes": 10,
    "words": [
      "捕头",
      "捕食",
      "拘捕"
    ],
    "sentence": "学会了「捕」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1865
  },
  {
    "char": "蛾",
    "pinyin": "é",
    "strokes": 13,
    "words": [
      "蛾子",
      "蛾眉",
      "夜蛾"
    ],
    "sentence": "学会了「蛾」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1866
  },
  {
    "char": "蚊",
    "pinyin": "wén",
    "strokes": 10,
    "words": [
      "蚊子",
      "疟蚊",
      "熏蚊子"
    ],
    "sentence": "理解「蚊」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1867
  },
  {
    "char": "避",
    "pinyin": "bì",
    "strokes": 16,
    "words": [
      "避邪",
      "避难",
      "避雨"
    ],
    "sentence": "学会了「避」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1868
  },
  {
    "char": "锐",
    "pinyin": "ruì",
    "strokes": 12,
    "words": [
      "锐眼",
      "锐角",
      "锐不可当"
    ],
    "sentence": "「锐」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1869
  },
  {
    "char": "铛",
    "pinyin": "dāng",
    "strokes": 11,
    "words": [
      "茶铛",
      "酒铛",
      "铃铛"
    ],
    "sentence": "理解「铛」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1870
  },
  {
    "char": "蝇",
    "pinyin": "yíng",
    "strokes": 14,
    "words": [
      "蝇头",
      "蝇拍",
      "家蝇"
    ],
    "sentence": "「蝇」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1871
  },
  {
    "char": "揭",
    "pinyin": "jiē",
    "strokes": 12,
    "words": [
      "揭发",
      "揭密",
      "揭帖"
    ],
    "sentence": "「揭」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1872
  },
  {
    "char": "碍",
    "pinyin": "ài",
    "strokes": 13,
    "words": [
      "碍难",
      "不碍",
      "干碍"
    ],
    "sentence": "理解「碍」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1873
  },
  {
    "char": "荧",
    "pinyin": "yíng",
    "strokes": 10,
    "words": [
      "荧屏",
      "荧光屏",
      "荧光粉"
    ],
    "sentence": "理解「荧」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1874
  },
  {
    "char": "削",
    "pinyin": "xuē",
    "strokes": 9,
    "words": [
      "削价",
      "削减",
      "削削"
    ],
    "sentence": "「削」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1875
  },
  {
    "char": "喂",
    "pinyin": "wèi",
    "strokes": 12,
    "words": [
      "喂食",
      "投喂"
    ],
    "sentence": "「喂」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1876
  },
  {
    "char": "哨",
    "pinyin": "shào",
    "strokes": 10,
    "words": [
      "哨卡",
      "查哨",
      "瞭望哨"
    ],
    "sentence": "学会了「哨」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1877
  },
  {
    "char": "挺",
    "pinyin": "tǐng",
    "strokes": 9,
    "words": [
      "挺括",
      "挺胸凸肚",
      "打挺儿"
    ],
    "sentence": "理解「挺」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1878
  },
  {
    "char": "斯",
    "pinyin": "sī",
    "strokes": 12,
    "words": [
      "瓦斯",
      "斯事体大",
      "斯拉夫人"
    ],
    "sentence": "理解「斯」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1879
  },
  {
    "char": "甩",
    "pinyin": "shuǎi",
    "strokes": 5,
    "words": [
      "甩手掌柜",
      "学甩",
      "大甩"
    ],
    "sentence": "学会了「甩」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1880
  },
  {
    "char": "踢",
    "pinyin": "tī",
    "strokes": 15,
    "words": [
      "踢打",
      "踢天弄井",
      "拳打脚踢"
    ],
    "sentence": "理解「踢」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1881
  },
  {
    "char": "枪",
    "pinyin": "qiāng",
    "strokes": 8,
    "words": [
      "枪刺",
      "枪弹",
      "枪把"
    ],
    "sentence": "学会了「枪」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1882
  },
  {
    "char": "防",
    "pinyin": "fáng",
    "strokes": 6,
    "words": [
      "防伪",
      "防凌",
      "防区"
    ],
    "sentence": "学会了「防」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1883
  },
  {
    "char": "鬼",
    "pinyin": "guǐ",
    "strokes": 9,
    "words": [
      "学鬼",
      "大鬼",
      "鬼子"
    ],
    "sentence": "理解「鬼」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1884
  },
  {
    "char": "汉",
    "pinyin": "hàn",
    "strokes": 5,
    "words": [
      "汉中",
      "汉家",
      "汉显"
    ],
    "sentence": "理解「汉」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1885
  },
  {
    "char": "滚",
    "pinyin": "gǔn",
    "strokes": 13,
    "words": [
      "滚木",
      "滚梯",
      "滚热"
    ],
    "sentence": "理解「滚」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1886
  },
  {
    "char": "毁",
    "pinyin": "huǐ",
    "strokes": 13,
    "words": [
      "毁坏",
      "毁约",
      "毁证"
    ],
    "sentence": "理解「毁」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1887
  },
  {
    "char": "惯",
    "pinyin": "guàn",
    "strokes": 11,
    "words": [
      "习惯于",
      "看不惯",
      "司空见惯"
    ],
    "sentence": "学会了「惯」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1888
  },
  {
    "char": "牺",
    "pinyin": "xī",
    "strokes": 10,
    "words": [
      "学牺",
      "大牺",
      "小牺"
    ],
    "sentence": "「牺」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1889
  },
  {
    "char": "牲",
    "pinyin": "shēng",
    "strokes": 9,
    "words": [
      "牲畜",
      "畜牲",
      "大牲畜"
    ],
    "sentence": "学会了「牲」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1890
  },
  {
    "char": "凯",
    "pinyin": "kǎi",
    "strokes": 8,
    "words": [
      "凯旋",
      "凯旋门"
    ],
    "sentence": "「凯」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1891
  },
  {
    "char": "征",
    "pinyin": "zhēng",
    "strokes": 8,
    "words": [
      "征剿",
      "征发",
      "征召"
    ],
    "sentence": "学会了「征」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1892
  },
  {
    "char": "阿",
    "pinyin": "ā",
    "strokes": 7,
    "words": [
      "阿公",
      "阿呆",
      "阿哥"
    ],
    "sentence": "学会了「阿」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1893
  },
  {
    "char": "姨",
    "pinyin": "yí",
    "strokes": 9,
    "words": [
      "姨夫",
      "姨父",
      "大姨"
    ],
    "sentence": "理解「姨」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1894
  },
  {
    "char": "济",
    "pinyin": "jì",
    "strokes": 9,
    "words": [
      "济世",
      "济事",
      "济公"
    ],
    "sentence": "理解「济」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1895
  },
  {
    "char": "贡",
    "pinyin": "gòng",
    "strokes": 7,
    "words": [
      "贡酒",
      "朝贡",
      "贡禹弹冠"
    ],
    "sentence": "「贡」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1896
  },
  {
    "char": "圣",
    "pinyin": "shèng",
    "strokes": 5,
    "words": [
      "圣上",
      "圣地",
      "圣女"
    ],
    "sentence": "理解「圣」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1897
  },
  {
    "char": "驻",
    "pinyin": "zhù",
    "strokes": 8,
    "words": [
      "驻地",
      "驻屯",
      "驻扎"
    ],
    "sentence": "「驻」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1898
  },
  {
    "char": "罪",
    "pinyin": "zuì",
    "strokes": 13,
    "words": [
      "罪恶",
      "罪行",
      "罪过"
    ],
    "sentence": "「罪」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1899
  },
  {
    "char": "恶",
    "pinyin": "è",
    "strokes": 10,
    "words": [
      "恶习",
      "恶事",
      "恶人"
    ],
    "sentence": "理解「恶」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1900
  },
  {
    "char": "健",
    "pinyin": "jiàn",
    "strokes": 10,
    "words": [
      "健将",
      "健身器",
      "劲健"
    ],
    "sentence": "「健」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1901
  },
  {
    "char": "康",
    "pinyin": "kāng",
    "strokes": 11,
    "words": [
      "康庄大道",
      "再别康桥",
      "孙康映雪"
    ],
    "sentence": "「康」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1902
  },
  {
    "char": "径",
    "pinyin": "jìng",
    "strokes": 8,
    "words": [
      "径行",
      "内径",
      "曲径"
    ],
    "sentence": "理解「径」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1903
  },
  {
    "char": "畅",
    "pinyin": "chàng",
    "strokes": 8,
    "words": [
      "畅行",
      "不畅",
      "和畅"
    ],
    "sentence": "学会了「畅」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1904
  },
  {
    "char": "磕",
    "pinyin": "kē",
    "strokes": 15,
    "words": [
      "磕头",
      "磕打",
      "磕头虫"
    ],
    "sentence": "理解「磕」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1905
  },
  {
    "char": "绊",
    "pinyin": "bàn",
    "strokes": 8,
    "words": [
      "绊倒",
      "绊儿",
      "绊脚石"
    ],
    "sentence": "学会了「绊」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1906
  },
  {
    "char": "瞬",
    "pinyin": "shùn",
    "strokes": 17,
    "words": [
      "瞬间",
      "转瞬",
      "瞬息万变"
    ],
    "sentence": "「瞬」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1907
  },
  {
    "char": "弧",
    "pinyin": "hú",
    "strokes": 8,
    "words": [
      "弧度",
      "弧菌",
      "弧圈球"
    ],
    "sentence": "学会了「弧」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1908
  },
  {
    "char": "翔",
    "pinyin": "xiáng",
    "strokes": 12,
    "words": [
      "横翔捷出",
      "沙鸥翔集",
      "遨翔自得"
    ],
    "sentence": "学会了「翔」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1909
  },
  {
    "char": "权",
    "pinyin": "quán",
    "strokes": 6,
    "words": [
      "权且",
      "权作",
      "权数"
    ],
    "sentence": "学会了「权」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1910
  },
  {
    "char": "缤",
    "pinyin": "bīn",
    "strokes": 13,
    "words": [
      "落英缤纷",
      "学缤",
      "大缤"
    ],
    "sentence": "「缤」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1911
  },
  {
    "char": "扰",
    "pinyin": "rǎo",
    "strokes": 7,
    "words": [
      "叨扰",
      "吵扰",
      "干扰"
    ],
    "sentence": "理解「扰」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1912
  },
  {
    "char": "欲",
    "pinyin": "yù",
    "strokes": 11,
    "words": [
      "六欲",
      "权欲",
      "禁欲"
    ],
    "sentence": "学会了「欲」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1913
  },
  {
    "char": "屈",
    "pinyin": "qū",
    "strokes": 8,
    "words": [
      "屈从",
      "屈强",
      "屈折"
    ],
    "sentence": "「屈」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1914
  },
  {
    "char": "茁",
    "pinyin": "zhuó",
    "strokes": 8,
    "words": [
      "茁长",
      "茁壮成长"
    ],
    "sentence": "「茁」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1915
  },
  {
    "char": "诊",
    "pinyin": "zhěn",
    "strokes": 7,
    "words": [
      "诊脉",
      "会诊",
      "切诊"
    ],
    "sentence": "理解「诊」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1916
  },
  {
    "char": "撼",
    "pinyin": "hàn",
    "strokes": 16,
    "words": [
      "撼人心魄",
      "撼地摇天",
      "撼天动地"
    ],
    "sentence": "理解「撼」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1917
  },
  {
    "char": "蹋",
    "pinyin": "tà",
    "strokes": 17,
    "words": [
      "槌胸蹋地",
      "学蹋",
      "大蹋"
    ],
    "sentence": "理解「蹋」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1918
  },
  {
    "char": "限",
    "pinyin": "xiàn",
    "strokes": 8,
    "words": [
      "限产",
      "限令",
      "限价"
    ],
    "sentence": "学会了「限」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1919
  },
  {
    "char": "棚",
    "pinyin": "péng",
    "strokes": 12,
    "words": [
      "棚圈",
      "棚车",
      "凉棚"
    ],
    "sentence": "理解「棚」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1920
  },
  {
    "char": "饰",
    "pinyin": "shì",
    "strokes": 8,
    "words": [
      "头饰",
      "夸饰",
      "服饰"
    ],
    "sentence": "「饰」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1921
  },
  {
    "char": "冠",
    "pinyin": "guān",
    "strokes": 9,
    "words": [
      "冠冕",
      "冠军",
      "冠名"
    ],
    "sentence": "学会了「冠」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1922
  },
  {
    "char": "菊",
    "pinyin": "jú",
    "strokes": 11,
    "words": [
      "矢车菊",
      "除虫菊"
    ],
    "sentence": "理解「菊」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1923
  },
  {
    "char": "瞧",
    "pinyin": "qiáo",
    "strokes": 17,
    "words": [
      "瞧见",
      "瞧不起",
      "瞧得起"
    ],
    "sentence": "理解「瞧」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1924
  },
  {
    "char": "率",
    "pinyin": "lǜ",
    "strokes": 11,
    "words": [
      "率先",
      "率军",
      "率尔"
    ],
    "sentence": "学会了「率」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1925
  },
  {
    "char": "觅",
    "pinyin": "mì",
    "strokes": 8,
    "words": [
      "觅食",
      "钻天觅缝",
      "钻头觅缝"
    ],
    "sentence": "学会了「觅」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1926
  },
  {
    "char": "耸",
    "pinyin": "sǒng",
    "strokes": 10,
    "words": [
      "耸峙",
      "耸肩曲背",
      "耸肩缩背"
    ],
    "sentence": "学会了「耸」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1927
  },
  {
    "char": "捣",
    "pinyin": "dǎo",
    "strokes": 10,
    "words": [
      "捣乱分子",
      "捣虚批吭",
      "捣虚撇抗"
    ],
    "sentence": "「捣」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1928
  },
  {
    "char": "搬",
    "pinyin": "bān",
    "strokes": 13,
    "words": [
      "搬家",
      "搬弄",
      "搬口弄舌"
    ],
    "sentence": "理解「搬」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1929
  },
  {
    "char": "巢",
    "pinyin": "cháo",
    "strokes": 11,
    "words": [
      "归巢",
      "巢居穴处",
      "巢林一枝"
    ],
    "sentence": "「巢」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1930
  },
  {
    "char": "谐",
    "pinyin": "xié",
    "strokes": 11,
    "words": [
      "和谐",
      "调谐",
      "口谐辞给"
    ],
    "sentence": "「谐」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1931
  },
  {
    "char": "眠",
    "pinyin": "mián",
    "strokes": 10,
    "words": [
      "休眠",
      "长眠",
      "眠云卧石"
    ],
    "sentence": "理解「眠」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1932
  },
  {
    "char": "辛",
    "pinyin": "xīn",
    "strokes": 7,
    "words": [
      "辛苦费",
      "万苦千辛",
      "亿辛万苦"
    ],
    "sentence": "学会了「辛」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1933
  },
  {
    "char": "蚕",
    "pinyin": "cán",
    "strokes": 10,
    "words": [
      "蚕沙",
      "蚕种",
      "蚕蛾"
    ],
    "sentence": "理解「蚕」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1934
  },
  {
    "char": "桑",
    "pinyin": "sāng",
    "strokes": 10,
    "words": [
      "桑叶",
      "桑椹",
      "桑葚"
    ],
    "sentence": "理解「桑」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1935
  },
  {
    "char": "昼",
    "pinyin": "zhòu",
    "strokes": 9,
    "words": [
      "昼乾夕惕",
      "昼伏夜行",
      "昼夜兼行"
    ],
    "sentence": "学会了「昼」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1936
  },
  {
    "char": "绩",
    "pinyin": "jì",
    "strokes": 11,
    "words": [
      "成绩单",
      "败绩失据",
      "重熙累绩"
    ],
    "sentence": "学会了「绩」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1937
  },
  {
    "char": "塞",
    "pinyin": "sāi",
    "strokes": 13,
    "words": [
      "塞上",
      "塞北",
      "塞外"
    ],
    "sentence": "学会了「塞」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1938
  },
  {
    "char": "鹭",
    "pinyin": "lù",
    "strokes": 18,
    "words": [
      "鹭序鸳行",
      "鹭序鹓行",
      "鹭约鸥盟"
    ],
    "sentence": "学会了「鹭」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1939
  },
  {
    "char": "笠",
    "pinyin": "lì",
    "strokes": 11,
    "words": [
      "斗笠",
      "乘车戴笠",
      "戴笠乘车"
    ],
    "sentence": "「笠」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1940
  },
  {
    "char": "略",
    "pinyin": "lüè",
    "strokes": 11,
    "words": [
      "从略",
      "传略",
      "史略"
    ],
    "sentence": "学会了「略」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1941
  },
  {
    "char": "辩",
    "pinyin": "biàn",
    "strokes": 16,
    "words": [
      "辩手",
      "辩正",
      "辩解"
    ],
    "sentence": "理解「辩」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1942
  },
  {
    "char": "奉",
    "pinyin": "fèng",
    "strokes": 8,
    "words": [
      "奉上",
      "奉为",
      "奉令"
    ],
    "sentence": "理解「奉」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1943
  },
  {
    "char": "违",
    "pinyin": "wéi",
    "strokes": 7,
    "words": [
      "违令",
      "违和",
      "违拗"
    ],
    "sentence": "「违」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1944
  },
  {
    "char": "磅",
    "pinyin": "bàng",
    "strokes": 15,
    "words": [
      "磅礴",
      "磅秤",
      "地磅"
    ],
    "sentence": "学会了「磅」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1945
  },
  {
    "char": "拴",
    "pinyin": "shuān",
    "strokes": 9,
    "words": [
      "学拴",
      "大拴",
      "小拴"
    ],
    "sentence": "学会了「拴」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1946
  },
  {
    "char": "拖",
    "pinyin": "tuō",
    "strokes": 8,
    "words": [
      "拖把",
      "拖拉",
      "拖斗"
    ],
    "sentence": "学会了「拖」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1947
  },
  {
    "char": "释",
    "pinyin": "shì",
    "strokes": 12,
    "words": [
      "释卷",
      "释教",
      "释疑"
    ],
    "sentence": "学会了「释」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1948
  },
  {
    "char": "宣",
    "pinyin": "xuān",
    "strokes": 9,
    "words": [
      "宣传",
      "宣化",
      "宣召"
    ],
    "sentence": "学会了「宣」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1949
  },
  {
    "char": "萨",
    "pinyin": "sà",
    "strokes": 11,
    "words": [
      "拉萨",
      "泥菩萨",
      "金沙萨"
    ],
    "sentence": "理解「萨」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1950
  },
  {
    "char": "妄",
    "pinyin": "wàng",
    "strokes": 6,
    "words": [
      "妄为",
      "妄加",
      "妄称"
    ],
    "sentence": "理解「妄」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1951
  },
  {
    "char": "执",
    "pinyin": "zhí",
    "strokes": 6,
    "words": [
      "执委",
      "执拗",
      "执教"
    ],
    "sentence": "「执」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1952
  },
  {
    "char": "港",
    "pinyin": "gǎng",
    "strokes": 12,
    "words": [
      "港元",
      "港务",
      "港口"
    ],
    "sentence": "「港」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1953
  },
  {
    "char": "澈",
    "pinyin": "chè",
    "strokes": 15,
    "words": [
      "澄澈",
      "澈底澄清",
      "大澈大悟"
    ],
    "sentence": "「澈」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1954
  },
  {
    "char": "壶",
    "pinyin": "hú",
    "strokes": 10,
    "words": [
      "乘壶",
      "便壶",
      "喷壶"
    ],
    "sentence": "理解「壶」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1955
  },
  {
    "char": "缸",
    "pinyin": "gāng",
    "strokes": 9,
    "words": [
      "缸瓦",
      "缸盖",
      "牙缸"
    ],
    "sentence": "「缸」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1956
  },
  {
    "char": "罢",
    "pinyin": "bà",
    "strokes": 10,
    "words": [
      "罢演",
      "罢赛",
      "也罢"
    ],
    "sentence": "学会了「罢」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1957
  },
  {
    "char": "苟",
    "pinyin": "gǒu",
    "strokes": 8,
    "words": [
      "苟且",
      "苟合",
      "苟同"
    ],
    "sentence": "学会了「苟」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1958
  },
  {
    "char": "绣",
    "pinyin": "xiù",
    "strokes": 10,
    "words": [
      "绣制",
      "绣品",
      "刺绣"
    ],
    "sentence": "理解「绣」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1959
  },
  {
    "char": "挥",
    "pinyin": "huī",
    "strokes": 9,
    "words": [
      "挥发",
      "挥拳",
      "挥洒"
    ],
    "sentence": "「挥」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1960
  },
  {
    "char": "徽",
    "pinyin": "huī",
    "strokes": 17,
    "words": [
      "徽号",
      "徽调",
      "会徽"
    ],
    "sentence": "学会了「徽」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1961
  },
  {
    "char": "聋",
    "pinyin": "lóng",
    "strokes": 11,
    "words": [
      "聋子",
      "聋哑人",
      "下塞上聋"
    ],
    "sentence": "学会了「聋」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1962
  },
  {
    "char": "哑",
    "pinyin": "yǎ",
    "strokes": 9,
    "words": [
      "哑剧",
      "哑口",
      "哑哑"
    ],
    "sentence": "理解「哑」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1963
  },
  {
    "char": "昌",
    "pinyin": "chāng",
    "strokes": 8,
    "words": [
      "昌乐",
      "昌盛",
      "会昌"
    ],
    "sentence": "「昌」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1964
  },
  {
    "char": "妻",
    "pinyin": "qī",
    "strokes": 8,
    "words": [
      "妻儿",
      "妻子",
      "妻孥"
    ],
    "sentence": "学会了「妻」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1965
  },
  {
    "char": "刺",
    "pinyin": "cì",
    "strokes": 8,
    "words": [
      "刺伤",
      "刺儿",
      "刺刀"
    ],
    "sentence": "「刺」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1966
  },
  {
    "char": "绑",
    "pinyin": "bǎng",
    "strokes": 9,
    "words": [
      "绑扎",
      "绑票",
      "五花大绑"
    ],
    "sentence": "理解「绑」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1967
  },
  {
    "char": "扁",
    "pinyin": "biǎn",
    "strokes": 9,
    "words": [
      "扁圆",
      "扁扁",
      "扁扁"
    ],
    "sentence": "学会了「扁」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1968
  },
  {
    "char": "鹊",
    "pinyin": "què",
    "strokes": 13,
    "words": [
      "扁鹊",
      "鹊巢鸠占",
      "鹊巢鸠据"
    ],
    "sentence": "「鹊」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1969
  },
  {
    "char": "蔡",
    "pinyin": "cài",
    "strokes": 14,
    "words": [
      "学蔡",
      "大蔡",
      "小蔡"
    ],
    "sentence": "理解「蔡」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1970
  },
  {
    "char": "睬",
    "pinyin": "cǎi",
    "strokes": 13,
    "words": [
      "不揪不睬",
      "不瞅不睬"
    ],
    "sentence": "理解「睬」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1971
  },
  {
    "char": "肠",
    "pinyin": "cháng",
    "strokes": 7,
    "words": [
      "肠子",
      "大肠",
      "洗肠"
    ],
    "sentence": "理解「肠」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1972
  },
  {
    "char": "胃",
    "pinyin": "wèi",
    "strokes": 9,
    "words": [
      "洗胃",
      "胃溃疡",
      "胃穿孔"
    ],
    "sentence": "学会了「胃」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1973
  },
  {
    "char": "烫",
    "pinyin": "tàng",
    "strokes": 10,
    "words": [
      "烫发",
      "烫头",
      "烫洗"
    ],
    "sentence": "「烫」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1974
  },
  {
    "char": "剂",
    "pinyin": "jì",
    "strokes": 8,
    "words": [
      "剂量",
      "冲剂",
      "合剂"
    ],
    "sentence": "学会了「剂」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1975
  },
  {
    "char": "汤",
    "pinyin": "tāng",
    "strokes": 6,
    "words": [
      "汤剂",
      "汤勺",
      "汤包"
    ],
    "sentence": "学会了「汤」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1976
  },
  {
    "char": "焰",
    "pinyin": "yàn",
    "strokes": 12,
    "words": [
      "内焰",
      "光焰万丈"
    ],
    "sentence": "理解「焰」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1977
  },
  {
    "char": "驱",
    "pinyin": "qū",
    "strokes": 7,
    "words": [
      "驱散",
      "驱车",
      "驱迫"
    ],
    "sentence": "学会了「驱」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1978
  },
  {
    "char": "袖",
    "pinyin": "xiù",
    "strokes": 10,
    "words": [
      "袖头",
      "拂袖",
      "红袖"
    ],
    "sentence": "学会了「袖」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1979
  },
  {
    "char": "败",
    "pinyin": "bài",
    "strokes": 8,
    "words": [
      "败亡",
      "败兴",
      "败兵"
    ],
    "sentence": "理解「败」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1980
  },
  {
    "char": "罚",
    "pinyin": "fá",
    "strokes": 9,
    "words": [
      "罚没",
      "体罚",
      "判罚"
    ],
    "sentence": "学会了「罚」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1981
  },
  {
    "char": "佩",
    "pinyin": "pèi",
    "strokes": 8,
    "words": [
      "佩服",
      "倒冠落佩",
      "水佩风裳"
    ],
    "sentence": "学会了「佩」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1982
  },
  {
    "char": "饶",
    "pinyin": "ráo",
    "strokes": 9,
    "words": [
      "饶头",
      "饶有",
      "广饶"
    ],
    "sentence": "学会了「饶」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1983
  },
  {
    "char": "抗",
    "pinyin": "kàng",
    "strokes": 7,
    "words": [
      "抗上",
      "抗体",
      "抗凝"
    ],
    "sentence": "学会了「抗」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1984
  },
  {
    "char": "押",
    "pinyin": "yā",
    "strokes": 8,
    "words": [
      "押头",
      "押尾",
      "押当"
    ],
    "sentence": "学会了「押」，词汇量又增加了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1985
  },
  {
    "char": "锁",
    "pinyin": "suǒ",
    "strokes": 12,
    "words": [
      "锁上",
      "锁匙",
      "锁头"
    ],
    "sentence": "理解「锁」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1986
  },
  {
    "char": "狠",
    "pinyin": "hěn",
    "strokes": 9,
    "words": [
      "狠劲",
      "狠抓"
    ],
    "sentence": "「狠」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1987
  },
  {
    "char": "膝",
    "pinyin": "xī",
    "strokes": 15,
    "words": [
      "膝头",
      "膝盖",
      "膝行"
    ],
    "sentence": "「膝」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1988
  },
  {
    "char": "肝",
    "pinyin": "gān",
    "strokes": 7,
    "words": [
      "肝风",
      "肝功能",
      "肝硬化"
    ],
    "sentence": "理解「肝」字的意思很重要。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1989
  },
  {
    "char": "脏",
    "pinyin": "zàng",
    "strokes": 10,
    "words": [
      "脏了",
      "脏话",
      "内脏"
    ],
    "sentence": "「脏」字有点难，但多练就会了。",
    "grade": "四年级下册",
    "level": 8,
    "id": 1990
  },
  {
    "char": "窃",
    "pinyin": "qiè",
    "strokes": 9,
    "words": [
      "偷窃",
      "窃听",
      "窃读"
    ],
    "sentence": "请用「窃」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 1991
  },
  {
    "char": "炒",
    "pinyin": "chǎo",
    "strokes": 8,
    "words": [
      "炒菜",
      "炒饭",
      "翻炒"
    ],
    "sentence": "积累像「炒」这样的字词很重要。",
    "grade": "五年级上册",
    "level": 9,
    "id": 1992
  },
  {
    "char": "锅",
    "pinyin": "guō",
    "strokes": 12,
    "words": [
      "铁锅",
      "锅盖",
      "火锅"
    ],
    "sentence": "「锅」字的用法要灵活掌握。",
    "grade": "五年级上册",
    "level": 9,
    "id": 1993
  },
  {
    "char": "踮",
    "pinyin": "diǎn",
    "strokes": 15,
    "words": [
      "学踮",
      "大踮",
      "小踮"
    ],
    "sentence": "请用「踮」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 1994
  },
  {
    "char": "哟",
    "pinyin": "yō",
    "strokes": 9,
    "words": [
      "哟嗬",
      "哎哟",
      "嗨哟"
    ],
    "sentence": "积累像「哟」这样的字词很重要。",
    "grade": "五年级上册",
    "level": 9,
    "id": 1995
  },
  {
    "char": "饿",
    "pinyin": "è",
    "strokes": 10,
    "words": [
      "饥饿",
      "饿肚子"
    ],
    "sentence": "积累像「饿」这样的字词很重要。",
    "grade": "五年级上册",
    "level": 9,
    "id": 1996
  },
  {
    "char": "惧",
    "pinyin": "jù",
    "strokes": 11,
    "words": [
      "恐惧",
      "畏惧",
      "惧怕"
    ],
    "sentence": "请用「惧」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 1997
  },
  {
    "char": "充",
    "pinyin": "chōng",
    "strokes": 6,
    "words": [
      "充满",
      "补充",
      "充足"
    ],
    "sentence": "「充」字的用法要灵活掌握。",
    "grade": "五年级上册",
    "level": 9,
    "id": 1998
  },
  {
    "char": "檐",
    "pinyin": "yán",
    "strokes": 17,
    "words": [
      "屋檐",
      "房檐"
    ],
    "sentence": "请用「檐」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 1999
  },
  {
    "char": "皱",
    "pinyin": "zhòu",
    "strokes": 10,
    "words": [
      "皱纹",
      "皱眉",
      "皱巴巴"
    ],
    "sentence": "请用「皱」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2000
  },
  {
    "char": "碗",
    "pinyin": "wǎn",
    "strokes": 13,
    "words": [
      "碗柜",
      "碗橱",
      "汤碗"
    ],
    "sentence": "积累像「碗」这样的字词很重要。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2001
  },
  {
    "char": "酸",
    "pinyin": "suān",
    "strokes": 14,
    "words": [
      "酸甜",
      "心酸",
      "酸奶"
    ],
    "sentence": "积累像「酸」这样的字词很重要。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2002
  },
  {
    "char": "撑",
    "pinyin": "chēng",
    "strokes": 15,
    "words": [
      "支撑",
      "撑伞",
      "撑腰"
    ],
    "sentence": "请用「撑」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2003
  },
  {
    "char": "柜",
    "pinyin": "guì",
    "strokes": 8,
    "words": [
      "柜子",
      "衣柜",
      "书柜"
    ],
    "sentence": "「柜」字的用法要灵活掌握。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2004
  },
  {
    "char": "侣",
    "pinyin": "lǚ",
    "strokes": 8,
    "words": [
      "伴侣",
      "情侣"
    ],
    "sentence": "请用「侣」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2005
  },
  {
    "char": "娱",
    "pinyin": "yú",
    "strokes": 10,
    "words": [
      "娱乐",
      "欢娱"
    ],
    "sentence": "请用「娱」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2006
  },
  {
    "char": "盒",
    "pinyin": "hé",
    "strokes": 11,
    "words": [
      "盒子",
      "盒式",
      "盒装"
    ],
    "sentence": "「盒」字的用法要灵活掌握。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2007
  },
  {
    "char": "豫",
    "pinyin": "yù",
    "strokes": 15,
    "words": [
      "犹豫",
      "豫剧"
    ],
    "sentence": "请用「豫」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2008
  },
  {
    "char": "趟",
    "pinyin": "tàng",
    "strokes": 15,
    "words": [
      "趟地",
      "趟水",
      "趟马"
    ],
    "sentence": "积累像「趟」这样的字词很重要。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2009
  },
  {
    "char": "诵",
    "pinyin": "sòng",
    "strokes": 9,
    "words": [
      "背诵",
      "朗诵",
      "诵读"
    ],
    "sentence": "「诵」字的用法要灵活掌握。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2010
  },
  {
    "char": "零",
    "pinyin": "líng",
    "strokes": 13,
    "words": [
      "零钱",
      "零分",
      "零用"
    ],
    "sentence": "积累像「零」这样的字词很重要。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2011
  },
  {
    "char": "编",
    "pinyin": "biān",
    "strokes": 12,
    "words": [
      "编写",
      "编织",
      "编辑"
    ],
    "sentence": "请用「编」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2012
  },
  {
    "char": "某",
    "pinyin": "mǒu",
    "strokes": 9,
    "words": [
      "某人",
      "某个",
      "某些"
    ],
    "sentence": "「某」字的用法要灵活掌握。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2013
  },
  {
    "char": "洛",
    "pinyin": "luò",
    "strokes": 9,
    "words": [
      "洛夫",
      "学洛",
      "大洛"
    ],
    "sentence": "「洛」字的用法要灵活掌握。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2014
  },
  {
    "char": "榆",
    "pinyin": "yú",
    "strokes": 13,
    "words": [
      "榆中",
      "榆钱",
      "地榆"
    ],
    "sentence": "「榆」字的用法要灵活掌握。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2015
  },
  {
    "char": "畔",
    "pinyin": "pàn",
    "strokes": 10,
    "words": [
      "学畔",
      "大畔",
      "小畔"
    ],
    "sentence": "请用「畔」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2016
  },
  {
    "char": "帐",
    "pinyin": "zhàng",
    "strokes": 7,
    "words": [
      "帐单",
      "帐簿",
      "冲帐"
    ],
    "sentence": "请用「帐」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2017
  },
  {
    "char": "魂",
    "pinyin": "hún",
    "strokes": 13,
    "words": [
      "亡魂",
      "勾魂",
      "还魂"
    ],
    "sentence": "请用「魂」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2018
  },
  {
    "char": "缕",
    "pinyin": "lǚ",
    "strokes": 12,
    "words": [
      "万缕千丝",
      "不绝如缕",
      "依头缕当"
    ],
    "sentence": "积累像「缕」这样的字词很重要。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2019
  },
  {
    "char": "幽",
    "pinyin": "yōu",
    "strokes": 9,
    "words": [
      "幽丽",
      "幽会",
      "幽咽"
    ],
    "sentence": "积累像「幽」这样的字词很重要。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2020
  },
  {
    "char": "葬",
    "pinyin": "zàng",
    "strokes": 12,
    "words": [
      "丧葬",
      "合葬",
      "埋葬"
    ],
    "sentence": "请用「葬」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2021
  },
  {
    "char": "愁",
    "pinyin": "chóu",
    "strokes": 13,
    "words": [
      "愁思",
      "愁闷",
      "发愁"
    ],
    "sentence": "积累像「愁」这样的字词很重要。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2022
  },
  {
    "char": "腮",
    "pinyin": "sāi",
    "strokes": 13,
    "words": [
      "腮红",
      "络腮",
      "腮帮子"
    ],
    "sentence": "「腮」字的用法要灵活掌握。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2023
  },
  {
    "char": "甚",
    "pinyin": "shèn",
    "strokes": 9,
    "words": [
      "甚且",
      "甚为",
      "甚么"
    ],
    "sentence": "积累像「甚」这样的字词很重要。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2024
  },
  {
    "char": "绸",
    "pinyin": "chóu",
    "strokes": 11,
    "words": [
      "绸缪",
      "柞绸",
      "花绸"
    ],
    "sentence": "积累像「绸」这样的字词很重要。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2025
  },
  {
    "char": "呜",
    "pinyin": "wū",
    "strokes": 7,
    "words": [
      "呜叫",
      "呜咽",
      "呜呜咽咽"
    ],
    "sentence": "积累像「呜」这样的字词很重要。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2026
  },
  {
    "char": "谓",
    "pinyin": "wèi",
    "strokes": 11,
    "words": [
      "何谓",
      "可谓",
      "称谓"
    ],
    "sentence": "积累像「谓」这样的字词很重要。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2027
  },
  {
    "char": "梳",
    "pinyin": "shū",
    "strokes": 11,
    "words": [
      "梳子",
      "梳妆打扮",
      "沐雨梳风"
    ],
    "sentence": "请用「梳」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2028
  },
  {
    "char": "衰",
    "pinyin": "shuāi",
    "strokes": 10,
    "words": [
      "衰乏",
      "衰亡",
      "衰减"
    ],
    "sentence": "积累像「衰」这样的字词很重要。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2029
  },
  {
    "char": "绢",
    "pinyin": "juàn",
    "strokes": 10,
    "words": [
      "绢扇",
      "绢画"
    ],
    "sentence": "积累像「绢」这样的字词很重要。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2030
  },
  {
    "char": "侨",
    "pinyin": "qiáo",
    "strokes": 8,
    "words": [
      "侨商",
      "侨属",
      "侨领"
    ],
    "sentence": "请用「侨」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2031
  },
  {
    "char": "鲸",
    "pinyin": "jīng",
    "strokes": 16,
    "words": [
      "鲸吞蚕食",
      "鲸吞蛇噬",
      "蚕食鲸吞"
    ],
    "sentence": "积累像「鲸」这样的字词很重要。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2032
  },
  {
    "char": "猪",
    "pinyin": "zhū",
    "strokes": 11,
    "words": [
      "猪排",
      "猪窝",
      "猪肚"
    ],
    "sentence": "「猪」字的用法要灵活掌握。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2033
  },
  {
    "char": "腭",
    "pinyin": "è",
    "strokes": 13,
    "words": [
      "腭裂",
      "嚼腭搥床"
    ],
    "sentence": "「腭」字的用法要灵活掌握。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2034
  },
  {
    "char": "哺",
    "pinyin": "bǔ",
    "strokes": 10,
    "words": [
      "哺乳假",
      "哺糟啜醨",
      "吐哺捉发"
    ],
    "sentence": "积累像「哺」这样的字词很重要。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2035
  },
  {
    "char": "滤",
    "pinyin": "lǜ",
    "strokes": 13,
    "words": [
      "滤过",
      "过滤",
      "过滤嘴"
    ],
    "sentence": "积累像「滤」这样的字词很重要。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2036
  },
  {
    "char": "肚",
    "pinyin": "dù",
    "strokes": 7,
    "words": [
      "肚丝",
      "肚兜",
      "肚子"
    ],
    "sentence": "请用「肚」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2037
  },
  {
    "char": "肺",
    "pinyin": "fèi",
    "strokes": 8,
    "words": [
      "肺叶",
      "肺泡",
      "清肺"
    ],
    "sentence": "请用「肺」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2038
  },
  {
    "char": "矮",
    "pinyin": "ǎi",
    "strokes": 13,
    "words": [
      "矮个",
      "矮个子",
      "矮人看场"
    ],
    "sentence": "请用「矮」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2039
  },
  {
    "char": "判",
    "pinyin": "pàn",
    "strokes": 7,
    "words": [
      "判分",
      "判别",
      "判处"
    ],
    "sentence": "积累像「判」这样的字词很重要。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2040
  },
  {
    "char": "胎",
    "pinyin": "tāi",
    "strokes": 9,
    "words": [
      "胎发",
      "胎教"
    ],
    "sentence": "请用「胎」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2041
  },
  {
    "char": "盗",
    "pinyin": "dào",
    "strokes": 11,
    "words": [
      "学盗",
      "大盗",
      "盗子"
    ],
    "sentence": "积累像「盗」这样的字词很重要。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2042
  },
  {
    "char": "嫌",
    "pinyin": "xián",
    "strokes": 13,
    "words": [
      "嫌恶",
      "嫌烦",
      "嫌疑"
    ],
    "sentence": "积累像「嫌」这样的字词很重要。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2043
  },
  {
    "char": "夹",
    "pinyin": "jiā",
    "strokes": 6,
    "words": [
      "夹克",
      "夹具",
      "夹击"
    ],
    "sentence": "「夹」字的用法要灵活掌握。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2044
  },
  {
    "char": "恙",
    "pinyin": "yàng",
    "strokes": 10,
    "words": [
      "别来无恙",
      "学恙",
      "大恙"
    ],
    "sentence": "请用「恙」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2045
  },
  {
    "char": "藕",
    "pinyin": "ǒu",
    "strokes": 18,
    "words": [
      "藕粉",
      "藕色",
      "藕节"
    ],
    "sentence": "请用「藕」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2046
  },
  {
    "char": "粘",
    "pinyin": "zhān",
    "strokes": 11,
    "words": [
      "粘土",
      "粘液",
      "粘牙"
    ],
    "sentence": "请用「粘」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2047
  },
  {
    "char": "噪",
    "pinyin": "zào",
    "strokes": 16,
    "words": [
      "声名大噪",
      "学噪",
      "大噪"
    ],
    "sentence": "「噪」字的用法要灵活掌握。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2048
  },
  {
    "char": "废",
    "pinyin": "fèi",
    "strokes": 8,
    "words": [
      "废油",
      "废票",
      "兴废"
    ],
    "sentence": "请用「废」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2049
  },
  {
    "char": "捞",
    "pinyin": "lāo",
    "strokes": 10,
    "words": [
      "捞饭",
      "打捞",
      "捞一把"
    ],
    "sentence": "「捞」字的用法要灵活掌握。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2050
  },
  {
    "char": "饵",
    "pinyin": "ěr",
    "strokes": 9,
    "words": [
      "饵料",
      "食饵"
    ],
    "sentence": "「饵」字的用法要灵活掌握。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2051
  },
  {
    "char": "溅",
    "pinyin": "jiàn",
    "strokes": 12,
    "words": [
      "溅射",
      "溅水",
      "溅污"
    ],
    "sentence": "「溅」字的用法要灵活掌握。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2052
  },
  {
    "char": "钩",
    "pinyin": "gōu",
    "strokes": 9,
    "words": [
      "钩子",
      "上钩",
      "打钩"
    ],
    "sentence": "「钩」字的用法要灵活掌握。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2053
  },
  {
    "char": "翼",
    "pinyin": "yì",
    "strokes": 17,
    "words": [
      "翼侧",
      "侧翼",
      "尾翼"
    ],
    "sentence": "积累像「翼」这样的字词很重要。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2054
  },
  {
    "char": "纵",
    "pinyin": "zòng",
    "strokes": 7,
    "words": [
      "纵令",
      "纵使",
      "纵向"
    ],
    "sentence": "请用「纵」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2055
  },
  {
    "char": "啪",
    "pinyin": "pā",
    "strokes": 11,
    "words": [
      "啪嗒",
      "劈啪",
      "劈劈啪啪"
    ],
    "sentence": "积累像「啪」这样的字词很重要。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2056
  },
  {
    "char": "鳃",
    "pinyin": "sāi",
    "strokes": 17,
    "words": [
      "学鳃",
      "大鳃",
      "小鳃"
    ],
    "sentence": "「鳃」字的用法要灵活掌握。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2057
  },
  {
    "char": "皎",
    "pinyin": "jiǎo",
    "strokes": 11,
    "words": [
      "皎阳似火",
      "风清月皎"
    ],
    "sentence": "请用「皎」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2058
  },
  {
    "char": "唇",
    "pinyin": "chún",
    "strokes": 10,
    "words": [
      "唇线",
      "唇膏",
      "唇裂"
    ],
    "sentence": "积累像「唇」这样的字词很重要。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2059
  },
  {
    "char": "沮",
    "pinyin": "jǔ",
    "strokes": 8,
    "words": [
      "沮丧",
      "沮洳",
      "心低意沮"
    ],
    "sentence": "「沮」字的用法要灵活掌握。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2060
  },
  {
    "char": "诱",
    "pinyin": "yòu",
    "strokes": 9,
    "words": [
      "诱供",
      "诱发",
      "诱掖"
    ],
    "sentence": "请用「诱」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2061
  },
  {
    "char": "诫",
    "pinyin": "jiè",
    "strokes": 9,
    "words": [
      "小惩大诫",
      "断织之诫"
    ],
    "sentence": "积累像「诫」这样的字词很重要。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2062
  },
  {
    "char": "践",
    "pinyin": "jiàn",
    "strokes": 12,
    "words": [
      "践约",
      "践行",
      "勾践"
    ],
    "sentence": "「践」字的用法要灵活掌握。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2063
  },
  {
    "char": "亩",
    "pinyin": "mǔ",
    "strokes": 7,
    "words": [
      "亩产",
      "地亩"
    ],
    "sentence": "积累像「亩」这样的字词很重要。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2064
  },
  {
    "char": "尝",
    "pinyin": "cháng",
    "strokes": 9,
    "words": [
      "尝鲜",
      "体尝",
      "何尝"
    ],
    "sentence": "积累像「尝」这样的字词很重要。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2065
  },
  {
    "char": "吩",
    "pinyin": "fēn",
    "strokes": 7,
    "words": [
      "学吩",
      "大吩",
      "小吩"
    ],
    "sentence": "请用「吩」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2066
  },
  {
    "char": "咐",
    "pinyin": "fù",
    "strokes": 8,
    "words": [
      "学咐",
      "大咐",
      "小咐"
    ],
    "sentence": "请用「咐」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2067
  },
  {
    "char": "茅",
    "pinyin": "máo",
    "strokes": 8,
    "words": [
      "茅台",
      "茅舍",
      "籍茅"
    ],
    "sentence": "「茅」字的用法要灵活掌握。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2068
  },
  {
    "char": "榨",
    "pinyin": "zhà",
    "strokes": 14,
    "words": [
      "压榨",
      "榨油厂",
      "敲榨勒索"
    ],
    "sentence": "「榨」字的用法要灵活掌握。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2069
  },
  {
    "char": "榴",
    "pinyin": "liú",
    "strokes": 14,
    "words": [
      "榴弹",
      "榴弹炮",
      "榴霰弹"
    ],
    "sentence": "请用「榴」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2070
  },
  {
    "char": "杉",
    "pinyin": "shān",
    "strokes": 7,
    "words": [
      "杉木",
      "杉树",
      "冷杉"
    ],
    "sentence": "「杉」字的用法要灵活掌握。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2071
  },
  {
    "char": "矶",
    "pinyin": "jī",
    "strokes": 7,
    "words": [
      "学矶",
      "大矶",
      "小矶"
    ],
    "sentence": "积累像「矶」这样的字词很重要。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2072
  },
  {
    "char": "混",
    "pinyin": "hùn",
    "strokes": 11,
    "words": [
      "混养",
      "混双",
      "混和"
    ],
    "sentence": "积累像「混」这样的字词很重要。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2073
  },
  {
    "char": "昔",
    "pinyin": "xī",
    "strokes": 8,
    "words": [
      "昔天同庆",
      "今不如昔",
      "感今思昔"
    ],
    "sentence": "「昔」字的用法要灵活掌握。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2074
  },
  {
    "char": "墟",
    "pinyin": "xū",
    "strokes": 14,
    "words": [
      "殷墟",
      "井管拘墟",
      "华屋丘墟"
    ],
    "sentence": "请用「墟」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2075
  },
  {
    "char": "曼",
    "pinyin": "màn",
    "strokes": 11,
    "words": [
      "曼舞",
      "阿曼",
      "日耳曼人"
    ],
    "sentence": "请用「曼」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2076
  },
  {
    "char": "疾",
    "pinyin": "jí",
    "strokes": 10,
    "words": [
      "疾行",
      "疾风",
      "恶疾"
    ],
    "sentence": "「疾」字的用法要灵活掌握。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2077
  },
  {
    "char": "爆",
    "pinyin": "bào",
    "strokes": 19,
    "words": [
      "爆发",
      "爆炸",
      "爆裂"
    ],
    "sentence": "「爆」字的用法要灵活掌握。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2078
  },
  {
    "char": "砾",
    "pinyin": "lì",
    "strokes": 10,
    "words": [
      "砾石",
      "沙砾",
      "漂砾"
    ],
    "sentence": "「砾」字的用法要灵活掌握。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2079
  },
  {
    "char": "砸",
    "pinyin": "zá",
    "strokes": 10,
    "words": [
      "打砸抢",
      "搬石砸脚",
      "板上砸钉"
    ],
    "sentence": "积累像「砸」这样的字词很重要。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2080
  },
  {
    "char": "颤",
    "pinyin": "chàn",
    "strokes": 19,
    "words": [
      "颤动",
      "颤声",
      "颤悠"
    ],
    "sentence": "请用「颤」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2081
  },
  {
    "char": "糕",
    "pinyin": "gāo",
    "strokes": 16,
    "words": [
      "糕干",
      "切糕",
      "发糕"
    ],
    "sentence": "请用「糕」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2082
  },
  {
    "char": "迪",
    "pinyin": "dí",
    "strokes": 8,
    "words": [
      "摩加迪沙",
      "学迪",
      "大迪"
    ],
    "sentence": "请用「迪」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2083
  },
  {
    "char": "搂",
    "pinyin": "lǒu",
    "strokes": 12,
    "words": [
      "搂抱",
      "抖搂"
    ],
    "sentence": "请用「搂」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2084
  },
  {
    "char": "豪",
    "pinyin": "háo",
    "strokes": 14,
    "words": [
      "豪兴",
      "豪华",
      "豪强"
    ],
    "sentence": "请用「豪」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2085
  },
  {
    "char": "誊",
    "pinyin": "téng",
    "strokes": 13,
    "words": [
      "学誊",
      "大誊",
      "小誊"
    ],
    "sentence": "请用「誊」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2086
  },
  {
    "char": "置",
    "pinyin": "zhì",
    "strokes": 13,
    "words": [
      "置信",
      "置疑",
      "倒置"
    ],
    "sentence": "请用「置」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2087
  },
  {
    "char": "司",
    "pinyin": "sī",
    "strokes": 5,
    "words": [
      "司令",
      "司南",
      "司空"
    ],
    "sentence": "积累像「司」这样的字词很重要。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2088
  },
  {
    "char": "妙",
    "pinyin": "miào",
    "strokes": 7,
    "words": [
      "妙句",
      "妙处",
      "妙着"
    ],
    "sentence": "请用「妙」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2089
  },
  {
    "char": "版",
    "pinyin": "bǎn",
    "strokes": 8,
    "words": [
      "版筑",
      "专版",
      "凹版"
    ],
    "sentence": "积累像「版」这样的字词很重要。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2090
  },
  {
    "char": "慈",
    "pinyin": "cí",
    "strokes": 13,
    "words": [
      "慈和",
      "慈父",
      "家慈"
    ],
    "sentence": "积累像「慈」这样的字词很重要。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2091
  },
  {
    "char": "祥",
    "pinyin": "xiáng",
    "strokes": 10,
    "words": [
      "祥和",
      "不祥",
      "发祥"
    ],
    "sentence": "积累像「祥」这样的字词很重要。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2092
  },
  {
    "char": "歧",
    "pinyin": "qí",
    "strokes": 8,
    "words": [
      "分歧",
      "歧路亡羊",
      "多歧亡羊"
    ],
    "sentence": "「歧」字的用法要灵活掌握。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2093
  },
  {
    "char": "谨",
    "pinyin": "jǐn",
    "strokes": 13,
    "words": [
      "谨上",
      "拘谨",
      "谨本详始"
    ],
    "sentence": "积累像「谨」这样的字词很重要。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2094
  },
  {
    "char": "慎",
    "pinyin": "shèn",
    "strokes": 13,
    "words": [
      "慎思",
      "慎行",
      "慎重"
    ],
    "sentence": "请用「慎」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2095
  },
  {
    "char": "损",
    "pinyin": "sǔn",
    "strokes": 10,
    "words": [
      "损坏",
      "折损",
      "易损"
    ],
    "sentence": "积累像「损」这样的字词很重要。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2096
  },
  {
    "char": "皇",
    "pinyin": "huáng",
    "strokes": 9,
    "words": [
      "皇上",
      "皇亲",
      "皇冠"
    ],
    "sentence": "请用「皇」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2097
  },
  {
    "char": "珑",
    "pinyin": "lóng",
    "strokes": 9,
    "words": [
      "学珑",
      "大珑",
      "小珑"
    ],
    "sentence": "「珑」字的用法要灵活掌握。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2098
  },
  {
    "char": "剔",
    "pinyin": "tī",
    "strokes": 10,
    "words": [
      "剔红",
      "挑剔",
      "剔抽禿刷"
    ],
    "sentence": "请用「剔」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2099
  },
  {
    "char": "杭",
    "pinyin": "háng",
    "strokes": 8,
    "words": [
      "学杭",
      "大杭",
      "小杭"
    ],
    "sentence": "请用「杭」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2100
  },
  {
    "char": "莱",
    "pinyin": "lái",
    "strokes": 10,
    "words": [
      "莱案",
      "秋莱",
      "好莱坞"
    ],
    "sentence": "「莱」字的用法要灵活掌握。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2101
  },
  {
    "char": "瑶",
    "pinyin": "yáo",
    "strokes": 14,
    "words": [
      "瑶民",
      "瑶台琼室",
      "瑶台银阙"
    ],
    "sentence": "请用「瑶」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2102
  },
  {
    "char": "宏",
    "pinyin": "hóng",
    "strokes": 7,
    "words": [
      "宏丽",
      "宏大",
      "宏观"
    ],
    "sentence": "请用「宏」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2103
  },
  {
    "char": "宋",
    "pinyin": "sòng",
    "strokes": 7,
    "words": [
      "宋朝",
      "北宋",
      "南宋"
    ],
    "sentence": "积累像「宋」这样的字词很重要。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2104
  },
  {
    "char": "侵",
    "pinyin": "qīn",
    "strokes": 9,
    "words": [
      "侵占",
      "内侵",
      "寒风侵肌"
    ],
    "sentence": "请用「侵」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2105
  },
  {
    "char": "统",
    "pinyin": "tǒng",
    "strokes": 9,
    "words": [
      "统共",
      "统包",
      "统属"
    ],
    "sentence": "积累像「统」这样的字词很重要。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2106
  },
  {
    "char": "销",
    "pinyin": "xiāo",
    "strokes": 12,
    "words": [
      "销价",
      "销假",
      "销号"
    ],
    "sentence": "「销」字的用法要灵活掌握。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2107
  },
  {
    "char": "瑰",
    "pinyin": "guī",
    "strokes": 13,
    "words": [
      "瑰丽",
      "瑰奇",
      "瑰意奇行"
    ],
    "sentence": "「瑰」字的用法要灵活掌握。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2108
  },
  {
    "char": "烬",
    "pinyin": "jìn",
    "strokes": 10,
    "words": [
      "化为灰烬",
      "学烬",
      "大烬"
    ],
    "sentence": "积累像「烬」这样的字词很重要。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2109
  },
  {
    "char": "庙",
    "pinyin": "miào",
    "strokes": 8,
    "words": [
      "庙会",
      "庙号",
      "土地庙"
    ],
    "sentence": "「庙」字的用法要灵活掌握。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2110
  },
  {
    "char": "务",
    "pinyin": "wù",
    "strokes": 5,
    "words": [
      "务使",
      "务期",
      "务正"
    ],
    "sentence": "请用「务」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2111
  },
  {
    "char": "葛",
    "pinyin": "gé",
    "strokes": 12,
    "words": [
      "葛布",
      "葛根",
      "葛粉"
    ],
    "sentence": "请用「葛」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2112
  },
  {
    "char": "吼",
    "pinyin": "hǒu",
    "strokes": 7,
    "words": [
      "一牛吼地",
      "学吼",
      "大吼"
    ],
    "sentence": "积累像「吼」这样的字词很重要。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2113
  },
  {
    "char": "腔",
    "pinyin": "qiāng",
    "strokes": 12,
    "words": [
      "腔调",
      "体腔",
      "空腔"
    ],
    "sentence": "请用「腔」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2114
  },
  {
    "char": "崎",
    "pinyin": "qí",
    "strokes": 11,
    "words": [
      "长崎",
      "崎嵚历落",
      "崟崎磊落"
    ],
    "sentence": "「崎」字的用法要灵活掌握。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2115
  },
  {
    "char": "岖",
    "pinyin": "qū",
    "strokes": 7,
    "words": [
      "学岖",
      "大岖",
      "小岖"
    ],
    "sentence": "请用「岖」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2116
  },
  {
    "char": "尸",
    "pinyin": "shī",
    "strokes": 3,
    "words": [
      "尸体",
      "尸骨",
      "女尸"
    ],
    "sentence": "「尸」字的用法要灵活掌握。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2117
  },
  {
    "char": "斩",
    "pinyin": "zhǎn",
    "strokes": 8,
    "words": [
      "斩头去尾",
      "斩头沥血",
      "斩将刈旗"
    ],
    "sentence": "「斩」字的用法要灵活掌握。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2118
  },
  {
    "char": "坠",
    "pinyin": "zhuì",
    "strokes": 7,
    "words": [
      "坠地",
      "坠落",
      "扇坠"
    ],
    "sentence": "「坠」字的用法要灵活掌握。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2119
  },
  {
    "char": "雹",
    "pinyin": "báo",
    "strokes": 13,
    "words": [
      "学雹",
      "大雹",
      "小雹"
    ],
    "sentence": "「雹」字的用法要灵活掌握。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2120
  },
  {
    "char": "仇",
    "pinyin": "chóu",
    "strokes": 4,
    "words": [
      "学仇",
      "大仇",
      "仇子"
    ],
    "sentence": "「仇」字的用法要灵活掌握。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2121
  },
  {
    "char": "恨",
    "pinyin": "hèn",
    "strokes": 9,
    "words": [
      "学恨",
      "大恨",
      "恨子"
    ],
    "sentence": "请用「恨」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2122
  },
  {
    "char": "眺",
    "pinyin": "tiào",
    "strokes": 11,
    "words": [
      "远眺",
      "极目远眺"
    ],
    "sentence": "积累像「眺」这样的字词很重要。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2123
  },
  {
    "char": "丸",
    "pinyin": "wán",
    "strokes": 3,
    "words": [
      "丸子",
      "弹丸",
      "泥丸"
    ],
    "sentence": "请用「丸」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2124
  },
  {
    "char": "崖",
    "pinyin": "yá",
    "strokes": 11,
    "words": [
      "摩崖",
      "跳崖",
      "高崖"
    ],
    "sentence": "积累像「崖」这样的字词很重要。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2125
  },
  {
    "char": "岷",
    "pinyin": "mín",
    "strokes": 8,
    "words": [
      "学岷",
      "大岷",
      "小岷"
    ],
    "sentence": "「岷」字的用法要灵活掌握。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2126
  },
  {
    "char": "典",
    "pinyin": "diǎn",
    "strokes": 8,
    "words": [
      "典当",
      "会典",
      "佛典"
    ],
    "sentence": "「典」字的用法要灵活掌握。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2127
  },
  {
    "char": "副",
    "pinyin": "fù",
    "strokes": 11,
    "words": [
      "副刊",
      "副品",
      "副官"
    ],
    "sentence": "请用「副」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2128
  },
  {
    "char": "委",
    "pinyin": "wěi",
    "strokes": 8,
    "words": [
      "委以",
      "委任",
      "委员"
    ],
    "sentence": "「委」字的用法要灵活掌握。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2129
  },
  {
    "char": "协",
    "pinyin": "xié",
    "strokes": 6,
    "words": [
      "协会",
      "协助",
      "协同"
    ],
    "sentence": "积累像「协」这样的字词很重要。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2130
  },
  {
    "char": "宾",
    "pinyin": "bīn",
    "strokes": 10,
    "words": [
      "宾从",
      "宾服",
      "上宾"
    ],
    "sentence": "请用「宾」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2131
  },
  {
    "char": "泽",
    "pinyin": "zé",
    "strokes": 8,
    "words": [
      "泽兰",
      "泽国",
      "泽泻"
    ],
    "sentence": "积累像「泽」这样的字词很重要。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2132
  },
  {
    "char": "奏",
    "pinyin": "zòu",
    "strokes": 9,
    "words": [
      "奏乐",
      "奏折",
      "上奏"
    ],
    "sentence": "「奏」字的用法要灵活掌握。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2133
  },
  {
    "char": "诞",
    "pinyin": "dàn",
    "strokes": 8,
    "words": [
      "华诞",
      "夸诞",
      "诞妄不经"
    ],
    "sentence": "积累像「诞」这样的字词很重要。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2134
  },
  {
    "char": "钮",
    "pinyin": "niǔ",
    "strokes": 9,
    "words": [
      "钉钮扣",
      "学钮",
      "大钮"
    ],
    "sentence": "请用「钮」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2135
  },
  {
    "char": "瞻",
    "pinyin": "zhān",
    "strokes": 18,
    "words": [
      "瞻仰",
      "观瞻",
      "心瞻魏阙"
    ],
    "sentence": "请用「瞻」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2136
  },
  {
    "char": "拂",
    "pinyin": "fú",
    "strokes": 8,
    "words": [
      "拂尘",
      "拂拂",
      "拂拂"
    ],
    "sentence": "请用「拂」字造一个句子。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2137
  },
  {
    "char": "骑",
    "pinyin": "qí",
    "strokes": 11,
    "words": [
      "骑乘",
      "骑射",
      "骑缝"
    ],
    "sentence": "积累像「骑」这样的字词很重要。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2138
  },
  {
    "char": "嗓",
    "pinyin": "sǎng",
    "strokes": 13,
    "words": [
      "倒嗓",
      "哑嗓",
      "嗓门儿"
    ],
    "sentence": "「嗓」字的用法要灵活掌握。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2139
  },
  {
    "char": "党",
    "pinyin": "dǎng",
    "strokes": 10,
    "words": [
      "党参",
      "党员",
      "党委"
    ],
    "sentence": "积累像「党」这样的字词很重要。",
    "grade": "五年级上册",
    "level": 9,
    "id": 2140
  },
  {
    "char": "毯",
    "pinyin": "tǎn",
    "strokes": 12,
    "words": [
      "毯子",
      "地毯"
    ],
    "sentence": "用「毯」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2141
  },
  {
    "char": "渲",
    "pinyin": "xuàn",
    "strokes": 12,
    "words": [
      "学渲",
      "大渲",
      "小渲"
    ],
    "sentence": "五年级了，「渲」字应该掌握了。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2142
  },
  {
    "char": "勒",
    "pinyin": "lēi",
    "strokes": 11,
    "words": [
      "勒令",
      "勒住",
      "勒派"
    ],
    "sentence": "五年级了，「勒」字应该掌握了。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2143
  },
  {
    "char": "吟",
    "pinyin": "yín",
    "strokes": 7,
    "words": [
      "吟哦",
      "行吟",
      "轻吟"
    ],
    "sentence": "「吟」字经常在文章中出现。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2144
  },
  {
    "char": "迂",
    "pinyin": "yū",
    "strokes": 6,
    "words": [
      "迂曲",
      "迂论",
      "迂夫子"
    ],
    "sentence": "「迂」字经常在文章中出现。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2145
  },
  {
    "char": "襟",
    "pinyin": "jīn",
    "strokes": 18,
    "words": [
      "大襟",
      "底襟",
      "襟怀洒落"
    ],
    "sentence": "五年级了，「襟」字应该掌握了。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2146
  },
  {
    "char": "蹄",
    "pinyin": "tí",
    "strokes": 16,
    "words": [
      "蹄閒三寻",
      "蹄间三寻",
      "有蹄类"
    ],
    "sentence": "「蹄」字经常在文章中出现。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2147
  },
  {
    "char": "貌",
    "pinyin": "mào",
    "strokes": 14,
    "words": [
      "貌似",
      "貌相",
      "体貌"
    ],
    "sentence": "五年级了，「貌」字应该掌握了。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2148
  },
  {
    "char": "拘",
    "pinyin": "jū",
    "strokes": 8,
    "words": [
      "拘传",
      "拘役",
      "拘执"
    ],
    "sentence": "「拘」字经常在文章中出现。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2149
  },
  {
    "char": "羞",
    "pinyin": "xiū",
    "strokes": 10,
    "words": [
      "羞于",
      "羞恶",
      "羞臊"
    ],
    "sentence": "用「羞」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2150
  },
  {
    "char": "涩",
    "pinyin": "sè",
    "strokes": 10,
    "words": [
      "发涩",
      "干涩",
      "涩于言论"
    ],
    "sentence": "用「涩」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2151
  },
  {
    "char": "跤",
    "pinyin": "jiāo",
    "strokes": 13,
    "words": [
      "学跤",
      "大跤",
      "小跤"
    ],
    "sentence": "「跤」字经常在文章中出现。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2152
  },
  {
    "char": "偏",
    "pinyin": "piān",
    "strokes": 11,
    "words": [
      "偏于",
      "偏信",
      "偏好"
    ],
    "sentence": "用「偏」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2153
  },
  {
    "char": "涯",
    "pinyin": "yá",
    "strokes": 11,
    "words": [
      "一望无涯",
      "咫尺天涯",
      "地角天涯"
    ],
    "sentence": "用「涯」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2154
  },
  {
    "char": "晰",
    "pinyin": "xī",
    "strokes": 12,
    "words": [
      "晰毛辨发",
      "学晰",
      "大晰"
    ],
    "sentence": "用「晰」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2155
  },
  {
    "char": "伞",
    "pinyin": "sǎn",
    "strokes": 6,
    "words": [
      "伞盖",
      "伞骨",
      "跳伞"
    ],
    "sentence": "五年级了，「伞」字应该掌握了。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2156
  },
  {
    "char": "抚",
    "pinyin": "fǔ",
    "strokes": 7,
    "words": [
      "抚宁",
      "抚弄",
      "抚摩"
    ],
    "sentence": "五年级了，「抚」字应该掌握了。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2157
  },
  {
    "char": "绍",
    "pinyin": "shào",
    "strokes": 8,
    "words": [
      "绍兴",
      "绍兴戏",
      "绍兴酒"
    ],
    "sentence": "用「绍」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2158
  },
  {
    "char": "疆",
    "pinyin": "jiāng",
    "strokes": 19,
    "words": [
      "疆土",
      "疆场",
      "疆域"
    ],
    "sentence": "「疆」字经常在文章中出现。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2159
  },
  {
    "char": "陷",
    "pinyin": "xiàn",
    "strokes": 10,
    "words": [
      "陷没",
      "陷落",
      "内陷"
    ],
    "sentence": "用「陷」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2160
  },
  {
    "char": "牧",
    "pinyin": "mù",
    "strokes": 8,
    "words": [
      "牧区",
      "牧地",
      "牧场"
    ],
    "sentence": "用「牧」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2161
  },
  {
    "char": "蓑",
    "pinyin": "suō",
    "strokes": 13,
    "words": [
      "烟蓑雨笠",
      "绿蓑青笠",
      "雨笠烟蓑"
    ],
    "sentence": "「蓑」字经常在文章中出现。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2162
  },
  {
    "char": "遮",
    "pinyin": "zhē",
    "strokes": 14,
    "words": [
      "遮光",
      "遮挡",
      "遮盖"
    ],
    "sentence": "用「遮」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2163
  },
  {
    "char": "醉",
    "pinyin": "zuì",
    "strokes": 15,
    "words": [
      "喝醉",
      "醉吐相茵",
      "醉山颓倒"
    ],
    "sentence": "五年级了，「醉」字应该掌握了。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2164
  },
  {
    "char": "媚",
    "pinyin": "mèi",
    "strokes": 12,
    "words": [
      "媚骨",
      "倚姣作媚",
      "奴颜媚骨"
    ],
    "sentence": "「媚」字经常在文章中出现。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2165
  },
  {
    "char": "锄",
    "pinyin": "chú",
    "strokes": 12,
    "words": [
      "锄地",
      "锄头",
      "荷锄"
    ],
    "sentence": "「锄」字经常在文章中出现。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2166
  },
  {
    "char": "剥",
    "pinyin": "bō",
    "strokes": 10,
    "words": [
      "剥削",
      "剥剥",
      "剥剥"
    ],
    "sentence": "用「剥」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2167
  },
  {
    "char": "毡",
    "pinyin": "zhān",
    "strokes": 9,
    "words": [
      "毡子",
      "地毡",
      "毡上拖毛"
    ],
    "sentence": "用「毡」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2168
  },
  {
    "char": "卸",
    "pinyin": "xiè",
    "strokes": 9,
    "words": [
      "卸任",
      "卸车",
      "卸载"
    ],
    "sentence": "「卸」字经常在文章中出现。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2169
  },
  {
    "char": "咀",
    "pinyin": "jǔ",
    "strokes": 8,
    "words": [
      "咀嚼",
      "咀嚼英华",
      "含商咀征"
    ],
    "sentence": "用「咀」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2170
  },
  {
    "char": "嚼",
    "pinyin": "jué",
    "strokes": 20,
    "words": [
      "嚼子",
      "嚼舌",
      "倒嚼"
    ],
    "sentence": "用「嚼」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2171
  },
  {
    "char": "漠",
    "pinyin": "mò",
    "strokes": 13,
    "words": [
      "漠北",
      "漠南",
      "漠漠"
    ],
    "sentence": "用「漠」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2172
  },
  {
    "char": "寞",
    "pinyin": "mò",
    "strokes": 13,
    "words": [
      "落寞",
      "不甘寂寞",
      "寂天寞地"
    ],
    "sentence": "用「寞」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2173
  },
  {
    "char": "袄",
    "pinyin": "ǎo",
    "strokes": 9,
    "words": [
      "夹袄",
      "学袄",
      "大袄"
    ],
    "sentence": "「袄」字经常在文章中出现。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2174
  },
  {
    "char": "袍",
    "pinyin": "páo",
    "strokes": 10,
    "words": [
      "袍子",
      "袍服",
      "袍泽"
    ],
    "sentence": "用「袍」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2175
  },
  {
    "char": "傻",
    "pinyin": "shǎ",
    "strokes": 13,
    "words": [
      "傻乐",
      "傻劲儿",
      "傻呵呵"
    ],
    "sentence": "「傻」字经常在文章中出现。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2176
  },
  {
    "char": "胚",
    "pinyin": "pēi",
    "strokes": 9,
    "words": [
      "胚轴",
      "学胚",
      "大胚"
    ],
    "sentence": "用「胚」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2177
  },
  {
    "char": "祸",
    "pinyin": "huò",
    "strokes": 11,
    "words": [
      "召祸",
      "奇祸",
      "招祸"
    ],
    "sentence": "五年级了，「祸」字应该掌握了。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2178
  },
  {
    "char": "患",
    "pinyin": "huàn",
    "strokes": 11,
    "words": [
      "患难",
      "为患",
      "匪患"
    ],
    "sentence": "「患」字经常在文章中出现。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2179
  },
  {
    "char": "臂",
    "pinyin": "bì",
    "strokes": 17,
    "words": [
      "臂力",
      "臂助",
      "臂弯"
    ],
    "sentence": "五年级了，「臂」字应该掌握了。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2180
  },
  {
    "char": "赋",
    "pinyin": "fù",
    "strokes": 12,
    "words": [
      "赋予",
      "赋有",
      "头会箕赋"
    ],
    "sentence": "五年级了，「赋」字应该掌握了。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2181
  },
  {
    "char": "淘",
    "pinyin": "táo",
    "strokes": 11,
    "words": [
      "淘洗",
      "淘气包",
      "淘沙取金"
    ],
    "sentence": "五年级了，「淘」字应该掌握了。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2182
  },
  {
    "char": "妨",
    "pinyin": "fáng",
    "strokes": 7,
    "words": [
      "妨事",
      "不妨",
      "何妨"
    ],
    "sentence": "五年级了，「妨」字应该掌握了。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2183
  },
  {
    "char": "岂",
    "pinyin": "qǐ",
    "strokes": 6,
    "words": [
      "岂不",
      "岂但",
      "岂可"
    ],
    "sentence": "「岂」字经常在文章中出现。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2184
  },
  {
    "char": "痴",
    "pinyin": "chī",
    "strokes": 13,
    "words": [
      "痴恋",
      "发痴",
      "痴人说梦"
    ],
    "sentence": "五年级了，「痴」字应该掌握了。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2185
  },
  {
    "char": "绞",
    "pinyin": "jiǎo",
    "strokes": 9,
    "words": [
      "绞车",
      "绞尽脑汁"
    ],
    "sentence": "五年级了，「绞」字应该掌握了。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2186
  },
  {
    "char": "汁",
    "pinyin": "zhī",
    "strokes": 5,
    "words": [
      "橘汁",
      "浆汁"
    ],
    "sentence": "五年级了，「汁」字应该掌握了。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2187
  },
  {
    "char": "厘",
    "pinyin": "lí",
    "strokes": 9,
    "words": [
      "厘正",
      "分厘",
      "不失毫厘"
    ],
    "sentence": "「厘」字经常在文章中出现。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2188
  },
  {
    "char": "愧",
    "pinyin": "kuì",
    "strokes": 12,
    "words": [
      "愧怍",
      "愧汗",
      "不愧"
    ],
    "sentence": "用「愧」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2189
  },
  {
    "char": "亏",
    "pinyin": "kuī",
    "strokes": 3,
    "words": [
      "亏待",
      "亏得",
      "亏折"
    ],
    "sentence": "「亏」字经常在文章中出现。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2190
  },
  {
    "char": "梁",
    "pinyin": "liáng",
    "strokes": 11,
    "words": [
      "上梁",
      "大梁",
      "强梁"
    ],
    "sentence": "「梁」字经常在文章中出现。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2191
  },
  {
    "char": "惠",
    "pinyin": "huì",
    "strokes": 12,
    "words": [
      "惠及",
      "惠风",
      "惠更斯"
    ],
    "sentence": "「惠」字经常在文章中出现。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2192
  },
  {
    "char": "诣",
    "pinyin": "yì",
    "strokes": 8,
    "words": [
      "学诣",
      "大诣",
      "小诣"
    ],
    "sentence": "「诣」字经常在文章中出现。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2193
  },
  {
    "char": "乃",
    "pinyin": "nǎi",
    "strokes": 2,
    "words": [
      "乃至于",
      "乃心王室"
    ],
    "sentence": "用「乃」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2194
  },
  {
    "char": "曰",
    "pinyin": "yuē",
    "strokes": 4,
    "words": [
      "美其名曰",
      "学曰",
      "大曰"
    ],
    "sentence": "「曰」字经常在文章中出现。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2195
  },
  {
    "char": "禽",
    "pinyin": "qín",
    "strokes": 12,
    "words": [
      "家禽",
      "畜禽",
      "种禽"
    ],
    "sentence": "用「禽」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2196
  },
  {
    "char": "侮",
    "pinyin": "wǔ",
    "strokes": 9,
    "words": [
      "戏侮",
      "内忧外侮",
      "取乱侮亡"
    ],
    "sentence": "用「侮」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2197
  },
  {
    "char": "辱",
    "pinyin": "rǔ",
    "strokes": 10,
    "words": [
      "辱没",
      "忍辱",
      "折辱"
    ],
    "sentence": "五年级了，「辱」字应该掌握了。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2198
  },
  {
    "char": "谎",
    "pinyin": "huǎng",
    "strokes": 11,
    "words": [
      "谎称",
      "谎言",
      "撒谎"
    ],
    "sentence": "「谎」字经常在文章中出现。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2199
  },
  {
    "char": "敝",
    "pinyin": "bì",
    "strokes": 11,
    "words": [
      "敝帷不弃",
      "敝盖不弃",
      "敝綈恶粟"
    ],
    "sentence": "「敝」字经常在文章中出现。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2200
  },
  {
    "char": "矩",
    "pinyin": "jǔ",
    "strokes": 9,
    "words": [
      "矩尺",
      "矩形",
      "规矩"
    ],
    "sentence": "用「矩」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2201
  },
  {
    "char": "囚",
    "pinyin": "qiú",
    "strokes": 5,
    "words": [
      "囚徒",
      "囚服",
      "囚禁"
    ],
    "sentence": "用「囚」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2202
  },
  {
    "char": "嘻",
    "pinyin": "xī",
    "strokes": 15,
    "words": [
      "嘻笑",
      "嘻闹",
      "嘻嘻哈哈"
    ],
    "sentence": "用「嘻」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2203
  },
  {
    "char": "淮",
    "pinyin": "huái",
    "strokes": 11,
    "words": [
      "淮南鸡犬",
      "淮橘为枳",
      "淮王鸡狗"
    ],
    "sentence": "五年级了，「淮」字应该掌握了。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2204
  },
  {
    "char": "柑",
    "pinyin": "gān",
    "strokes": 9,
    "words": [
      "芦柑",
      "佛手柑",
      "双柑斗酒"
    ],
    "sentence": "「柑」字经常在文章中出现。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2205
  },
  {
    "char": "橘",
    "pinyin": "jú",
    "strokes": 16,
    "words": [
      "橘子",
      "橘汁",
      "橘红"
    ],
    "sentence": "用「橘」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2206
  },
  {
    "char": "枳",
    "pinyin": "zhǐ",
    "strokes": 9,
    "words": [
      "枳壳",
      "南橘北枳",
      "橘化为枳"
    ],
    "sentence": "五年级了，「枳」字应该掌握了。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2207
  },
  {
    "char": "贼",
    "pinyin": "zéi",
    "strokes": 10,
    "words": [
      "学贼",
      "大贼",
      "贼子"
    ],
    "sentence": "用「贼」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2208
  },
  {
    "char": "赔",
    "pinyin": "péi",
    "strokes": 12,
    "words": [
      "赔还",
      "倒赔",
      "赔不是"
    ],
    "sentence": "五年级了，「赔」字应该掌握了。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2209
  },
  {
    "char": "妮",
    "pinyin": "nī",
    "strokes": 8,
    "words": [
      "学妮",
      "大妮",
      "小妮"
    ],
    "sentence": "用「妮」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2210
  },
  {
    "char": "役",
    "pinyin": "yì",
    "strokes": 7,
    "words": [
      "役畜",
      "仆役",
      "差役"
    ],
    "sentence": "五年级了，「役」字应该掌握了。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2211
  },
  {
    "char": "硝",
    "pinyin": "xiāo",
    "strokes": 12,
    "words": [
      "硝化",
      "硝盐",
      "硝石"
    ],
    "sentence": "「硝」字经常在文章中出现。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2212
  },
  {
    "char": "炭",
    "pinyin": "tàn",
    "strokes": 9,
    "words": [
      "炭化",
      "泥炭",
      "炭火盆"
    ],
    "sentence": "五年级了，「炭」字应该掌握了。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2213
  },
  {
    "char": "谊",
    "pinyin": "yì",
    "strokes": 10,
    "words": [
      "谊不容辞",
      "谊不敢辞",
      "谊切苔岑"
    ],
    "sentence": "五年级了，「谊」字应该掌握了。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2214
  },
  {
    "char": "谣",
    "pinyin": "yáo",
    "strokes": 12,
    "words": [
      "谣传",
      "谣谚",
      "谣风"
    ],
    "sentence": "「谣」字经常在文章中出现。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2215
  },
  {
    "char": "噩",
    "pinyin": "è",
    "strokes": 16,
    "words": [
      "混混噩噩",
      "混混噩噩"
    ],
    "sentence": "用「噩」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2216
  },
  {
    "char": "耗",
    "pinyin": "hào",
    "strokes": 10,
    "words": [
      "耗子",
      "耗尽",
      "耗散"
    ],
    "sentence": "「耗」字经常在文章中出现。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2217
  },
  {
    "char": "跺",
    "pinyin": "duò",
    "strokes": 13,
    "words": [
      "学跺",
      "大跺",
      "小跺"
    ],
    "sentence": "用「跺」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2218
  },
  {
    "char": "嫂",
    "pinyin": "sǎo",
    "strokes": 12,
    "words": [
      "嫂子",
      "叔嫂",
      "大嫂"
    ],
    "sentence": "五年级了，「嫂」字应该掌握了。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2219
  },
  {
    "char": "挎",
    "pinyin": "kuà",
    "strokes": 9,
    "words": [
      "挎包",
      "挎斗"
    ],
    "sentence": "用「挎」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2220
  },
  {
    "char": "篮",
    "pinyin": "lán",
    "strokes": 16,
    "words": [
      "篮坛",
      "篮子",
      "上篮"
    ],
    "sentence": "五年级了，「篮」字应该掌握了。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2221
  },
  {
    "char": "咆",
    "pinyin": "páo",
    "strokes": 8,
    "words": [
      "学咆",
      "大咆",
      "小咆"
    ],
    "sentence": "「咆」字经常在文章中出现。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2222
  },
  {
    "char": "哮",
    "pinyin": "xiāo",
    "strokes": 10,
    "words": [
      "学哮",
      "大哮",
      "小哮"
    ],
    "sentence": "「哮」字经常在文章中出现。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2223
  },
  {
    "char": "疯",
    "pinyin": "fēng",
    "strokes": 9,
    "words": [
      "疯枝",
      "疯长",
      "发疯"
    ],
    "sentence": "「疯」字经常在文章中出现。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2224
  },
  {
    "char": "狞",
    "pinyin": "níng",
    "strokes": 8,
    "words": [
      "狞恶",
      "学狞",
      "大狞"
    ],
    "sentence": "「狞」字经常在文章中出现。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2225
  },
  {
    "char": "淌",
    "pinyin": "tǎng",
    "strokes": 11,
    "words": [
      "淌汗",
      "流淌",
      "滴淌"
    ],
    "sentence": "用「淌」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2226
  },
  {
    "char": "肆",
    "pinyin": "sì",
    "strokes": 13,
    "words": [
      "肆应",
      "肆行",
      "大肆"
    ],
    "sentence": "五年级了，「肆」字应该掌握了。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2227
  },
  {
    "char": "揪",
    "pinyin": "jiū",
    "strokes": 12,
    "words": [
      "揪斗",
      "不揪不採",
      "不揪不睬"
    ],
    "sentence": "「揪」字经常在文章中出现。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2228
  },
  {
    "char": "豹",
    "pinyin": "bào",
    "strokes": 10,
    "words": [
      "豹头环眼",
      "管中窥豹",
      "龙眉豹颈"
    ],
    "sentence": "五年级了，「豹」字应该掌握了。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2229
  },
  {
    "char": "瞪",
    "pinyin": "dèng",
    "strokes": 17,
    "words": [
      "瞪目结舌",
      "瞪眼咋舌",
      "干瞪眼"
    ],
    "sentence": "五年级了，「瞪」字应该掌握了。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2230
  },
  {
    "char": "呻",
    "pinyin": "shēn",
    "strokes": 8,
    "words": [
      "学呻",
      "大呻",
      "小呻"
    ],
    "sentence": "五年级了，「呻」字应该掌握了。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2231
  },
  {
    "char": "膛",
    "pinyin": "táng",
    "strokes": 15,
    "words": [
      "上膛",
      "弹膛",
      "炮膛"
    ],
    "sentence": "用「膛」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2232
  },
  {
    "char": "搀",
    "pinyin": "chān",
    "strokes": 12,
    "words": [
      "搀假",
      "搀兑",
      "搀和"
    ],
    "sentence": "「搀」字经常在文章中出现。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2233
  },
  {
    "char": "祭",
    "pinyin": "jì",
    "strokes": 11,
    "words": [
      "祭品",
      "主祭",
      "公祭"
    ],
    "sentence": "用「祭」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2234
  },
  {
    "char": "奠",
    "pinyin": "diàn",
    "strokes": 12,
    "words": [
      "奠都",
      "奠基石"
    ],
    "sentence": "用「奠」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2235
  },
  {
    "char": "赵",
    "pinyin": "zhào",
    "strokes": 9,
    "words": [
      "赵体",
      "燕赵",
      "张王李赵"
    ],
    "sentence": "五年级了，「赵」字应该掌握了。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2236
  },
  {
    "char": "璧",
    "pinyin": "bì",
    "strokes": 18,
    "words": [
      "璧还",
      "合璧",
      "璧合珠联"
    ],
    "sentence": "用「璧」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2237
  },
  {
    "char": "召",
    "pinyin": "zhào",
    "strokes": 5,
    "words": [
      "召募",
      "召唤",
      "召回"
    ],
    "sentence": "用「召」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2238
  },
  {
    "char": "诺",
    "pinyin": "nuò",
    "strokes": 10,
    "words": [
      "卡诺",
      "应诺",
      "朱诺"
    ],
    "sentence": "五年级了，「诺」字应该掌握了。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2239
  },
  {
    "char": "怯",
    "pinyin": "qiè",
    "strokes": 8,
    "words": [
      "怯场",
      "露怯",
      "怯头怯脑"
    ],
    "sentence": "五年级了，「怯」字应该掌握了。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2240
  },
  {
    "char": "瑟",
    "pinyin": "sè",
    "strokes": 13,
    "words": [
      "瑟缩",
      "瑟弄琴调",
      "瑟调琴弄"
    ],
    "sentence": "五年级了，「瑟」字应该掌握了。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2241
  },
  {
    "char": "拒",
    "pinyin": "jù",
    "strokes": 7,
    "words": [
      "拒不",
      "拒贿"
    ],
    "sentence": "「拒」字经常在文章中出现。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2242
  },
  {
    "char": "诸",
    "pinyin": "zhū",
    "strokes": 10,
    "words": [
      "诸侯",
      "诸葛",
      "公诸"
    ],
    "sentence": "「诸」字经常在文章中出现。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2243
  },
  {
    "char": "荆",
    "pinyin": "jīng",
    "strokes": 9,
    "words": [
      "荆条",
      "荆芥",
      "荆三棱"
    ],
    "sentence": "五年级了，「荆」字应该掌握了。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2244
  },
  {
    "char": "妒",
    "pinyin": "dù",
    "strokes": 7,
    "words": [
      "妒能害贤",
      "妒贤嫉能",
      "妒贤疾能"
    ],
    "sentence": "用「妒」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2245
  },
  {
    "char": "忌",
    "pinyin": "jì",
    "strokes": 7,
    "words": [
      "忌惮",
      "忌食",
      "切忌"
    ],
    "sentence": "用「忌」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2246
  },
  {
    "char": "曹",
    "pinyin": "cáo",
    "strokes": 11,
    "words": [
      "户曹参军",
      "阴曹地府"
    ],
    "sentence": "五年级了，「曹」字应该掌握了。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2247
  },
  {
    "char": "督",
    "pinyin": "dū",
    "strokes": 13,
    "words": [
      "督率",
      "督脉",
      "提督"
    ],
    "sentence": "「督」字经常在文章中出现。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2248
  },
  {
    "char": "甘",
    "pinyin": "gān",
    "strokes": 5,
    "words": [
      "甘为",
      "甘休",
      "甘当"
    ],
    "sentence": "「甘」字经常在文章中出现。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2249
  },
  {
    "char": "鲁",
    "pinyin": "lǔ",
    "strokes": 12,
    "words": [
      "秘鲁",
      "鲁斤燕削",
      "鲁莽灭裂"
    ],
    "sentence": "用「鲁」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2250
  },
  {
    "char": "延",
    "pinyin": "yán",
    "strokes": 6,
    "words": [
      "延搁",
      "延时",
      "延期"
    ],
    "sentence": "五年级了，「延」字应该掌握了。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2251
  },
  {
    "char": "幔",
    "pinyin": "màn",
    "strokes": 14,
    "words": [
      "幔子",
      "地幔"
    ],
    "sentence": "五年级了，「幔」字应该掌握了。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2252
  },
  {
    "char": "私",
    "pinyin": "sī",
    "strokes": 7,
    "words": [
      "私了",
      "私会"
    ],
    "sentence": "五年级了，「私」字应该掌握了。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2253
  },
  {
    "char": "寨",
    "pinyin": "zhài",
    "strokes": 14,
    "words": [
      "堡寨",
      "苗寨",
      "压寨夫人"
    ],
    "sentence": "五年级了，「寨」字应该掌握了。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2254
  },
  {
    "char": "擂",
    "pinyin": "léi",
    "strokes": 16,
    "words": [
      "擂主",
      "擂台",
      "擂鼓"
    ],
    "sentence": "用「擂」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2255
  },
  {
    "char": "呐",
    "pinyin": "nà",
    "strokes": 7,
    "words": [
      "呐喊",
      "唢呐",
      "呐喊助威"
    ],
    "sentence": "「呐」字经常在文章中出现。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2256
  },
  {
    "char": "援",
    "pinyin": "yuán",
    "strokes": 12,
    "words": [
      "援款",
      "援藏",
      "受援"
    ],
    "sentence": "用「援」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2257
  },
  {
    "char": "丞",
    "pinyin": "chéng",
    "strokes": 6,
    "words": [
      "丞相",
      "学丞",
      "大丞"
    ],
    "sentence": "用「丞」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2258
  },
  {
    "char": "擞",
    "pinyin": "sǒu",
    "strokes": 16,
    "words": [
      "抖擞",
      "抖擞精神",
      "精神抖擞"
    ],
    "sentence": "用「擞」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2259
  },
  {
    "char": "绽",
    "pinyin": "zhàn",
    "strokes": 11,
    "words": [
      "初绽",
      "学绽",
      "大绽"
    ],
    "sentence": "五年级了，「绽」字应该掌握了。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2260
  },
  {
    "char": "扳",
    "pinyin": "bān",
    "strokes": 7,
    "words": [
      "扳倒",
      "学扳",
      "大扳"
    ],
    "sentence": "五年级了，「扳」字应该掌握了。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2261
  },
  {
    "char": "咚",
    "pinyin": "dōng",
    "strokes": 8,
    "words": [
      "黑咕隆咚",
      "学咚",
      "大咚"
    ],
    "sentence": "五年级了，「咚」字应该掌握了。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2262
  },
  {
    "char": "监",
    "pinyin": "jiān",
    "strokes": 10,
    "words": [
      "监事",
      "监利",
      "监制"
    ],
    "sentence": "「监」字经常在文章中出现。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2263
  },
  {
    "char": "侄",
    "pinyin": "zhí",
    "strokes": 8,
    "words": [
      "侄儿",
      "侄女",
      "侄子"
    ],
    "sentence": "五年级了，「侄」字应该掌握了。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2264
  },
  {
    "char": "郎",
    "pinyin": "láng",
    "strokes": 8,
    "words": [
      "郎中",
      "郎君",
      "郎当"
    ],
    "sentence": "用「郎」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2265
  },
  {
    "char": "皆",
    "pinyin": "jiē",
    "strokes": 9,
    "words": [
      "皆大欢喜",
      "举世皆知",
      "五蕴皆空"
    ],
    "sentence": "「皆」字经常在文章中出现。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2266
  },
  {
    "char": "敛",
    "pinyin": "liǎn",
    "strokes": 11,
    "words": [
      "敛声屏息",
      "敛声屏气"
    ],
    "sentence": "用「敛」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2267
  },
  {
    "char": "媳",
    "pinyin": "xí",
    "strokes": 13,
    "words": [
      "媳妇儿",
      "弟媳",
      "孙媳妇"
    ],
    "sentence": "用「媳」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2268
  },
  {
    "char": "骚",
    "pinyin": "sāo",
    "strokes": 12,
    "words": [
      "骚乱",
      "骚人",
      "骚体"
    ],
    "sentence": "用「骚」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2269
  },
  {
    "char": "宗",
    "pinyin": "zōng",
    "strokes": 8,
    "words": [
      "宗亲",
      "宗仰",
      "宗教"
    ],
    "sentence": "五年级了，「宗」字应该掌握了。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2270
  },
  {
    "char": "怜",
    "pinyin": "lián",
    "strokes": 8,
    "words": [
      "可怜",
      "可怜相",
      "可怜虫"
    ],
    "sentence": "用「怜」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2271
  },
  {
    "char": "帕",
    "pinyin": "pà",
    "strokes": 8,
    "words": [
      "头帕",
      "坎帕拉"
    ],
    "sentence": "「帕」字经常在文章中出现。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2272
  },
  {
    "char": "脊",
    "pinyin": "jí",
    "strokes": 10,
    "words": [
      "脊椎",
      "脊背",
      "脊骨"
    ],
    "sentence": "「脊」字经常在文章中出现。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2273
  },
  {
    "char": "莞",
    "pinyin": "guǎn",
    "strokes": 10,
    "words": [
      "莞尔",
      "莞莞",
      "莞莞"
    ],
    "sentence": "五年级了，「莞」字应该掌握了。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2274
  },
  {
    "char": "锦",
    "pinyin": "jǐn",
    "strokes": 13,
    "words": [
      "锦囊",
      "锦屏",
      "锦纶"
    ],
    "sentence": "五年级了，「锦」字应该掌握了。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2275
  },
  {
    "char": "姹",
    "pinyin": "chà",
    "strokes": 9,
    "words": [
      "姹紫嫣红",
      "嫣红姹紫"
    ],
    "sentence": "「姹」字经常在文章中出现。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2276
  },
  {
    "char": "嫣",
    "pinyin": "yān",
    "strokes": 14,
    "words": [
      "嫣红",
      "嫣然一笑",
      "嫣红姹紫"
    ],
    "sentence": "「嫣」字经常在文章中出现。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2277
  },
  {
    "char": "暇",
    "pinyin": "xiá",
    "strokes": 13,
    "words": [
      "不暇",
      "空暇",
      "不遑暇食"
    ],
    "sentence": "五年级了，「暇」字应该掌握了。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2278
  },
  {
    "char": "颇",
    "pinyin": "pǒ",
    "strokes": 11,
    "words": [
      "景颇族",
      "无平不颇",
      "禁中颇牧"
    ],
    "sentence": "「颇」字经常在文章中出现。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2279
  },
  {
    "char": "尼",
    "pinyin": "ní",
    "strokes": 5,
    "words": [
      "尼采",
      "尼龙布",
      "尼龙绳"
    ],
    "sentence": "用「尼」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2280
  },
  {
    "char": "艇",
    "pinyin": "tǐng",
    "strokes": 12,
    "words": [
      "划艇",
      "炮艇",
      "船艇"
    ],
    "sentence": "用「艇」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2281
  },
  {
    "char": "叉",
    "pinyin": "chā",
    "strokes": 3,
    "words": [
      "叉儿",
      "叉子",
      "叉开"
    ],
    "sentence": "五年级了，「叉」字应该掌握了。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2282
  },
  {
    "char": "艄",
    "pinyin": "shāo",
    "strokes": 13,
    "words": [
      "学艄",
      "大艄",
      "小艄"
    ],
    "sentence": "用「艄」字写出优美的句子。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2283
  },
  {
    "char": "翘",
    "pinyin": "qiào",
    "strokes": 12,
    "words": [
      "翘企",
      "翘望",
      "翘棱"
    ],
    "sentence": "「翘」字经常在文章中出现。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2284
  },
  {
    "char": "舱",
    "pinyin": "cāng",
    "strokes": 10,
    "words": [
      "舱室",
      "后舱",
      "底舱"
    ],
    "sentence": "「舱」字经常在文章中出现。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2285
  },
  {
    "char": "姆",
    "pinyin": "mǔ",
    "strokes": 8,
    "words": [
      "达姆弹",
      "学姆",
      "大姆"
    ],
    "sentence": "「姆」字经常在文章中出现。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2286
  },
  {
    "char": "祷",
    "pinyin": "dǎo",
    "strokes": 11,
    "words": [
      "学祷",
      "大祷",
      "小祷"
    ],
    "sentence": "五年级了，「祷」字应该掌握了。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2287
  },
  {
    "char": "雇",
    "pinyin": "gù",
    "strokes": 12,
    "words": [
      "雇佣",
      "雇员",
      "解雇"
    ],
    "sentence": "五年级了，「雇」字应该掌握了。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2288
  },
  {
    "char": "哗",
    "pinyin": "huā",
    "strokes": 9,
    "words": [
      "哗众",
      "哗变",
      "哗哗"
    ],
    "sentence": "「哗」字经常在文章中出现。",
    "grade": "五年级下册",
    "level": 10,
    "id": 2289
  },
  {
    "char": "邀",
    "pinyin": "yāo",
    "strokes": 16,
    "words": [
      "邀请",
      "邀约",
      "应邀"
    ],
    "sentence": "会写「邀」字，更要会用「邀」字。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2290
  },
  {
    "char": "俯",
    "pinyin": "fǔ",
    "strokes": 10,
    "words": [
      "俯仰",
      "俯冲",
      "俯角"
    ],
    "sentence": "六年级了，「俯」字要熟练掌握。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2291
  },
  {
    "char": "瀑",
    "pinyin": "pù",
    "strokes": 18,
    "words": [
      "瀑布",
      "飞瀑"
    ],
    "sentence": "六年级了，「瀑」字要熟练掌握。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2292
  },
  {
    "char": "峭",
    "pinyin": "qiào",
    "strokes": 10,
    "words": [
      "陡峭",
      "峭壁",
      "峻峭"
    ],
    "sentence": "「峭」字是必考字，一定要记牢。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2293
  },
  {
    "char": "躯",
    "pinyin": "qū",
    "strokes": 11,
    "words": [
      "躯体",
      "躯壳",
      "躯干"
    ],
    "sentence": "「躯」字是必考字，一定要记牢。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2294
  },
  {
    "char": "津",
    "pinyin": "jīn",
    "strokes": 9,
    "words": [
      "天津",
      "津津有味"
    ],
    "sentence": "六年级了，「津」字要熟练掌握。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2295
  },
  {
    "char": "蕴",
    "pinyin": "yùn",
    "strokes": 15,
    "words": [
      "蕴含",
      "蕴藏",
      "底蕴"
    ],
    "sentence": "会写「蕴」字，更要会用「蕴」字。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2296
  },
  {
    "char": "侠",
    "pinyin": "xiá",
    "strokes": 8,
    "words": [
      "武侠",
      "侠客",
      "侠义"
    ],
    "sentence": "六年级了，「侠」字要熟练掌握。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2297
  },
  {
    "char": "谧",
    "pinyin": "mì",
    "strokes": 12,
    "words": [
      "静谧",
      "安谧"
    ],
    "sentence": "会写「谧」字，更要会用「谧」字。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2298
  },
  {
    "char": "巷",
    "pinyin": "xiàng",
    "strokes": 9,
    "words": [
      "巷口",
      "巷子",
      "巷战"
    ],
    "sentence": "「巷」字是必考字，一定要记牢。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2299
  },
  {
    "char": "俏",
    "pinyin": "qiào",
    "strokes": 9,
    "words": [
      "俏丽",
      "俊俏",
      "俏皮"
    ],
    "sentence": "「俏」字是必考字，一定要记牢。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2300
  },
  {
    "char": "逗",
    "pinyin": "dòu",
    "strokes": 10,
    "words": [
      "逗笑",
      "逗号",
      "逗留"
    ],
    "sentence": "六年级了，「逗」字要熟练掌握。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2301
  },
  {
    "char": "庞",
    "pinyin": "páng",
    "strokes": 8,
    "words": [
      "庞大",
      "脸庞"
    ],
    "sentence": "「庞」字是必考字，一定要记牢。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2302
  },
  {
    "char": "烘",
    "pinyin": "hōng",
    "strokes": 10,
    "words": [
      "烘烤",
      "暖烘烘"
    ],
    "sentence": "「烘」字是必考字，一定要记牢。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2303
  },
  {
    "char": "烤",
    "pinyin": "kǎo",
    "strokes": 10,
    "words": [
      "烧烤",
      "烤火",
      "烤箱"
    ],
    "sentence": "会写「烤」字，更要会用「烤」字。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2304
  },
  {
    "char": "韵",
    "pinyin": "yùn",
    "strokes": 13,
    "words": [
      "韵母",
      "韵味",
      "音韵"
    ],
    "sentence": "「韵」字是必考字，一定要记牢。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2305
  },
  {
    "char": "勤",
    "pinyin": "qín",
    "strokes": 13,
    "words": [
      "勤于",
      "勤朴",
      "勤王"
    ],
    "sentence": "六年级了，「勤」字要熟练掌握。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2306
  },
  {
    "char": "勉",
    "pinyin": "miǎn",
    "strokes": 9,
    "words": [
      "勉强",
      "共勉",
      "嘉勉"
    ],
    "sentence": "六年级了，「勉」字要熟练掌握。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2307
  },
  {
    "char": "吻",
    "pinyin": "wěn",
    "strokes": 7,
    "words": [
      "口吻",
      "亲吻",
      "吻合"
    ],
    "sentence": "会写「吻」字，更要会用「吻」字。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2308
  },
  {
    "char": "施",
    "pinyin": "shī",
    "strokes": 9,
    "words": [
      "施工",
      "实施",
      "措施"
    ],
    "sentence": "六年级了，「施」字要熟练掌握。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2309
  },
  {
    "char": "挠",
    "pinyin": "náo",
    "strokes": 9,
    "words": [
      "阻挠",
      "抓挠"
    ],
    "sentence": "六年级了，「挠」字要熟练掌握。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2310
  },
  {
    "char": "庸",
    "pinyin": "yōng",
    "strokes": 11,
    "words": [
      "庸碌",
      "庸中佼佼",
      "庸中皦皦"
    ],
    "sentence": "会写「庸」字，更要会用「庸」字。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2311
  },
  {
    "char": "艰",
    "pinyin": "jiān",
    "strokes": 8,
    "words": [
      "艰苦",
      "艰难",
      "艰辛"
    ],
    "sentence": "「艰」字是必考字，一定要记牢。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2312
  },
  {
    "char": "毅",
    "pinyin": "yì",
    "strokes": 15,
    "words": [
      "毅力",
      "坚毅"
    ],
    "sentence": "「毅」字是必考字，一定要记牢。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2313
  },
  {
    "char": "铲",
    "pinyin": "chǎn",
    "strokes": 11,
    "words": [
      "铲子",
      "风铲"
    ],
    "sentence": "六年级了，「铲」字要熟练掌握。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2314
  },
  {
    "char": "劣",
    "pinyin": "liè",
    "strokes": 6,
    "words": [
      "恶劣",
      "低劣"
    ],
    "sentence": "六年级了，「劣」字要熟练掌握。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2315
  },
  {
    "char": "惹",
    "pinyin": "rě",
    "strokes": 12,
    "words": [
      "惹事",
      "惹人",
      "惹祸"
    ],
    "sentence": "会写「惹」字，更要会用「惹」字。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2316
  },
  {
    "char": "讥",
    "pinyin": "jī",
    "strokes": 4,
    "words": [
      "讥讽",
      "讥笑"
    ],
    "sentence": "「讥」字是必考字，一定要记牢。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2317
  },
  {
    "char": "浆",
    "pinyin": "jiāng",
    "strokes": 10,
    "words": [
      "浆果",
      "浆汁",
      "浆洗"
    ],
    "sentence": "「浆」字是必考字，一定要记牢。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2318
  },
  {
    "char": "岔",
    "pinyin": "chà",
    "strokes": 7,
    "words": [
      "岔路",
      "分岔",
      "岔口"
    ],
    "sentence": "六年级了，「岔」字要熟练掌握。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2319
  },
  {
    "char": "挚",
    "pinyin": "zhì",
    "strokes": 10,
    "words": [
      "鹰挚狼食",
      "学挚",
      "大挚"
    ],
    "sentence": "「挚」字是必考字，一定要记牢。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2320
  },
  {
    "char": "寝",
    "pinyin": "qǐn",
    "strokes": 13,
    "words": [
      "寝车",
      "寝食",
      "寝不安席"
    ],
    "sentence": "「寝」字是必考字，一定要记牢。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2321
  },
  {
    "char": "频",
    "pinyin": "pín",
    "strokes": 13,
    "words": [
      "频仍",
      "频传",
      "频发"
    ],
    "sentence": "会写「频」字，更要会用「频」字。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2322
  },
  {
    "char": "朦",
    "pinyin": "méng",
    "strokes": 17,
    "words": [
      "学朦",
      "大朦",
      "小朦"
    ],
    "sentence": "「朦」字是必考字，一定要记牢。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2323
  },
  {
    "char": "胧",
    "pinyin": "lóng",
    "strokes": 9,
    "words": [
      "蒙胧",
      "学胧",
      "大胧"
    ],
    "sentence": "会写「胧」字，更要会用「胧」字。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2324
  },
  {
    "char": "凄",
    "pinyin": "qī",
    "strokes": 10,
    "words": [
      "凄凉",
      "凄切",
      "凄风冷雨"
    ],
    "sentence": "六年级了，「凄」字要熟练掌握。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2325
  },
  {
    "char": "斑",
    "pinyin": "bān",
    "strokes": 12,
    "words": [
      "斑纹",
      "汗斑",
      "祛斑"
    ],
    "sentence": "六年级了，「斑」字要熟练掌握。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2326
  },
  {
    "char": "搁",
    "pinyin": "gē",
    "strokes": 12,
    "words": [
      "搁放",
      "搁板",
      "搁浅"
    ],
    "sentence": "会写「搁」字，更要会用「搁」字。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2327
  },
  {
    "char": "填",
    "pinyin": "tián",
    "strokes": 13,
    "words": [
      "填充",
      "填写",
      "填发"
    ],
    "sentence": "会写「填」字，更要会用「填」字。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2328
  },
  {
    "char": "怨",
    "pinyin": "yuàn",
    "strokes": 9,
    "words": [
      "怨女",
      "学怨",
      "大怨"
    ],
    "sentence": "「怨」字是必考字，一定要记牢。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2329
  },
  {
    "char": "掀",
    "pinyin": "xiān",
    "strokes": 11,
    "words": [
      "掀天动地",
      "掀天揭地",
      "掀天斡地"
    ],
    "sentence": "会写「掀」字，更要会用「掀」字。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2330
  },
  {
    "char": "唉",
    "pinyin": "āi",
    "strokes": 10,
    "words": [
      "唉声叹气",
      "学唉",
      "大唉"
    ],
    "sentence": "六年级了，「唉」字要熟练掌握。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2331
  },
  {
    "char": "裹",
    "pinyin": "guǒ",
    "strokes": 14,
    "words": [
      "裹挟",
      "裹血力战",
      "裹足不前"
    ],
    "sentence": "六年级了，「裹」字要熟练掌握。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2332
  },
  {
    "char": "魁",
    "pinyin": "kuí",
    "strokes": 13,
    "words": [
      "魁北克",
      "魁梧奇伟"
    ],
    "sentence": "六年级了，「魁」字要熟练掌握。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2333
  },
  {
    "char": "梧",
    "pinyin": "wú",
    "strokes": 11,
    "words": [
      "枝梧",
      "梧桐断角",
      "左枝右梧"
    ],
    "sentence": "「梧」字是必考字，一定要记牢。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2334
  },
  {
    "char": "淋",
    "pinyin": "lín",
    "strokes": 11,
    "words": [
      "淋浴",
      "淋淋",
      "淋淋"
    ],
    "sentence": "「淋」字是必考字，一定要记牢。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2335
  },
  {
    "char": "撕",
    "pinyin": "sī",
    "strokes": 15,
    "words": [
      "撕打",
      "撕票",
      "撕裂"
    ],
    "sentence": "六年级了，「撕」字要熟练掌握。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2336
  },
  {
    "char": "霉",
    "pinyin": "méi",
    "strokes": 15,
    "words": [
      "霉变",
      "霉头",
      "霉斑"
    ],
    "sentence": "「霉」字是必考字，一定要记牢。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2337
  },
  {
    "char": "虑",
    "pinyin": "lǜ",
    "strokes": 10,
    "words": [
      "多虑",
      "思虑",
      "疑虑"
    ],
    "sentence": "会写「虑」字，更要会用「虑」字。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2338
  },
  {
    "char": "悠",
    "pinyin": "yōu",
    "strokes": 11,
    "words": [
      "悠悠然",
      "悠悠然",
      "晃悠"
    ],
    "sentence": "会写「悠」字，更要会用「悠」字。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2339
  },
  {
    "char": "仪",
    "pinyin": "yí",
    "strokes": 5,
    "words": [
      "仪节",
      "菲仪",
      "风仪"
    ],
    "sentence": "六年级了，「仪」字要熟练掌握。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2340
  },
  {
    "char": "歉",
    "pinyin": "qiàn",
    "strokes": 14,
    "words": [
      "丰歉",
      "三好两歉",
      "为好成歉"
    ],
    "sentence": "会写「歉」字，更要会用「歉」字。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2341
  },
  {
    "char": "溜",
    "pinyin": "liū",
    "strokes": 13,
    "words": [
      "溜光",
      "溜冰",
      "溜号"
    ],
    "sentence": "六年级了，「溜」字要熟练掌握。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2342
  },
  {
    "char": "嘿",
    "pinyin": "hēi",
    "strokes": 15,
    "words": [
      "嘿嘿",
      "嘿嘿",
      "潜神嘿规"
    ],
    "sentence": "六年级了，「嘿」字要熟练掌握。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2343
  },
  {
    "char": "割",
    "pinyin": "gē",
    "strokes": 12,
    "words": [
      "割切",
      "割地",
      "割据"
    ],
    "sentence": "六年级了，「割」字要熟练掌握。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2344
  },
  {
    "char": "晶",
    "pinyin": "jīng",
    "strokes": 12,
    "words": [
      "晶体",
      "晶石",
      "晶状体"
    ],
    "sentence": "会写「晶」字，更要会用「晶」字。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2345
  },
  {
    "char": "莹",
    "pinyin": "yíng",
    "strokes": 11,
    "words": [
      "澄莹",
      "晶莹剔透",
      "清莹秀澈"
    ],
    "sentence": "六年级了，「莹」字要熟练掌握。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2346
  },
  {
    "char": "蔼",
    "pinyin": "ǎi",
    "strokes": 14,
    "words": [
      "和蔼",
      "蔼然可亲",
      "和蔼可亲"
    ],
    "sentence": "「蔼」字是必考字，一定要记牢。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2347
  },
  {
    "char": "资",
    "pinyin": "zī",
    "strokes": 10,
    "words": [
      "资信",
      "资助",
      "内资"
    ],
    "sentence": "会写「资」字，更要会用「资」字。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2348
  },
  {
    "char": "矿",
    "pinyin": "kuàng",
    "strokes": 8,
    "words": [
      "矿体",
      "矿区",
      "矿石"
    ],
    "sentence": "「矿」字是必考字，一定要记牢。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2349
  },
  {
    "char": "赐",
    "pinyin": "cì",
    "strokes": 12,
    "words": [
      "赐予",
      "赐教",
      "赐给"
    ],
    "sentence": "六年级了，「赐」字要熟练掌握。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2350
  },
  {
    "char": "竭",
    "pinyin": "jié",
    "strokes": 14,
    "words": [
      "竭尽",
      "血竭",
      "衰竭"
    ],
    "sentence": "「竭」字是必考字，一定要记牢。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2351
  },
  {
    "char": "滥",
    "pinyin": "làn",
    "strokes": 13,
    "words": [
      "滥发",
      "滥捕",
      "滥调"
    ],
    "sentence": "「滥」字是必考字，一定要记牢。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2352
  },
  {
    "char": "胁",
    "pinyin": "xié",
    "strokes": 8,
    "words": [
      "胁从",
      "胁迫",
      "胁不沾席"
    ],
    "sentence": "「胁」字是必考字，一定要记牢。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2353
  },
  {
    "char": "睹",
    "pinyin": "dǔ",
    "strokes": 13,
    "words": [
      "睹咒",
      "亲睹",
      "重睹"
    ],
    "sentence": "六年级了，「睹」字要熟练掌握。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2354
  },
  {
    "char": "嗡",
    "pinyin": "wēng",
    "strokes": 13,
    "words": [
      "大轰大嗡",
      "学嗡",
      "大嗡"
    ],
    "sentence": "「嗡」字是必考字，一定要记牢。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2355
  },
  {
    "char": "鹿",
    "pinyin": "lù",
    "strokes": 11,
    "words": [
      "鹿尾",
      "鹿角霜"
    ],
    "sentence": "六年级了，「鹿」字要熟练掌握。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2356
  },
  {
    "char": "骏",
    "pinyin": "jùn",
    "strokes": 10,
    "words": [
      "骏骨牵盐",
      "光车骏马",
      "千里骏骨"
    ],
    "sentence": "「骏」字是必考字，一定要记牢。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2357
  },
  {
    "char": "鹰",
    "pinyin": "yīng",
    "strokes": 18,
    "words": [
      "鹰爪",
      "鹰爪子",
      "鹰击长空"
    ],
    "sentence": "六年级了，「鹰」字要熟练掌握。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2358
  },
  {
    "char": "潺",
    "pinyin": "chán",
    "strokes": 15,
    "words": [
      "学潺",
      "大潺",
      "小潺"
    ],
    "sentence": "六年级了，「潺」字要熟练掌握。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2359
  },
  {
    "char": "脂",
    "pinyin": "zhī",
    "strokes": 10,
    "words": [
      "脂膏",
      "羊脂",
      "脂肪瘤"
    ],
    "sentence": "「脂」字是必考字，一定要记牢。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2360
  },
  {
    "char": "婴",
    "pinyin": "yīng",
    "strokes": 11,
    "words": [
      "妇婴",
      "溺婴",
      "育婴"
    ],
    "sentence": "六年级了，「婴」字要熟练掌握。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2361
  },
  {
    "char": "眷",
    "pinyin": "juàn",
    "strokes": 11,
    "words": [
      "亲眷",
      "内眷",
      "女眷"
    ],
    "sentence": "会写「眷」字，更要会用「眷」字。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2362
  },
  {
    "char": "扭",
    "pinyin": "niǔ",
    "strokes": 7,
    "words": [
      "扭头",
      "扭打",
      "扭曲"
    ],
    "sentence": "六年级了，「扭」字要熟练掌握。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2363
  },
  {
    "char": "胯",
    "pinyin": "kuà",
    "strokes": 10,
    "words": [
      "胯骨",
      "学胯",
      "大胯"
    ],
    "sentence": "六年级了，「胯」字要熟练掌握。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2364
  },
  {
    "char": "厨",
    "pinyin": "chú",
    "strokes": 12,
    "words": [
      "名厨",
      "有脚书厨",
      "立地书厨"
    ],
    "sentence": "会写「厨」字，更要会用「厨」字。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2365
  },
  {
    "char": "套",
    "pinyin": "tào",
    "strokes": 10,
    "words": [
      "套头",
      "套数",
      "套曲"
    ],
    "sentence": "「套」字是必考字，一定要记牢。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2366
  },
  {
    "char": "猬",
    "pinyin": "wèi",
    "strokes": 12,
    "words": [
      "刺猬",
      "学猬",
      "大猬"
    ],
    "sentence": "会写「猬」字，更要会用「猬」字。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2367
  },
  {
    "char": "畜",
    "pinyin": "chù",
    "strokes": 10,
    "words": [
      "畜产",
      "畜养",
      "畜力"
    ],
    "sentence": "会写「畜」字，更要会用「畜」字。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2368
  },
  {
    "char": "窜",
    "pinyin": "cuàn",
    "strokes": 12,
    "words": [
      "回窜",
      "奔窜",
      "上窜下跳"
    ],
    "sentence": "「窜」字是必考字，一定要记牢。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2369
  },
  {
    "char": "挽",
    "pinyin": "wǎn",
    "strokes": 10,
    "words": [
      "共挽鹿车",
      "击搏挽裂",
      "鹿车共挽"
    ],
    "sentence": "六年级了，「挽」字要熟练掌握。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2370
  },
  {
    "char": "囫",
    "pinyin": "hú",
    "strokes": 7,
    "words": [
      "囫囵半片",
      "学囫",
      "大囫"
    ],
    "sentence": "「囫」字是必考字，一定要记牢。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2371
  },
  {
    "char": "囵",
    "pinyin": "lún",
    "strokes": 7,
    "words": [
      "囫囵半片",
      "学囵",
      "大囵"
    ],
    "sentence": "六年级了，「囵」字要熟练掌握。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2372
  },
  {
    "char": "枣",
    "pinyin": "zǎo",
    "strokes": 8,
    "words": [
      "枣子",
      "枣核",
      "枣泥"
    ],
    "sentence": "会写「枣」字，更要会用「枣」字。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2373
  },
  {
    "char": "搞",
    "pinyin": "gǎo",
    "strokes": 13,
    "words": [
      "搞好",
      "搞臭",
      "搞对象"
    ],
    "sentence": "六年级了，「搞」字要熟练掌握。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2374
  },
  {
    "char": "恍",
    "pinyin": "huǎng",
    "strokes": 9,
    "words": [
      "恍若",
      "恍然大悟",
      "恍然若失"
    ],
    "sentence": "六年级了，「恍」字要熟练掌握。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2375
  },
  {
    "char": "霜",
    "pinyin": "shuāng",
    "strokes": 17,
    "words": [
      "霜叶",
      "霜期",
      "霜降"
    ],
    "sentence": "会写「霜」字，更要会用「霜」字。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2376
  },
  {
    "char": "详",
    "pinyin": "xiáng",
    "strokes": 8,
    "words": [
      "详图",
      "详备",
      "详实"
    ],
    "sentence": "六年级了，「详」字要熟练掌握。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2377
  },
  {
    "char": "逝",
    "pinyin": "shì",
    "strokes": 10,
    "words": [
      "远逝",
      "长逝",
      "逝将去汝"
    ],
    "sentence": "六年级了，「逝」字要熟练掌握。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2378
  },
  {
    "char": "章",
    "pinyin": "zhāng",
    "strokes": 11,
    "words": [
      "乐章",
      "会章",
      "华章"
    ],
    "sentence": "「章」字是必考字，一定要记牢。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2379
  },
  {
    "char": "咳",
    "pinyin": "ké",
    "strokes": 9,
    "words": [
      "咳咳",
      "咳咳",
      "咳喘"
    ],
    "sentence": "「咳」字是必考字，一定要记牢。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2380
  },
  {
    "char": "嗽",
    "pinyin": "sòu",
    "strokes": 14,
    "words": [
      "咳嗽",
      "枕石嗽流"
    ],
    "sentence": "会写「嗽」字，更要会用「嗽」字。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2381
  },
  {
    "char": "塑",
    "pinyin": "sù",
    "strokes": 13,
    "words": [
      "塑料布",
      "泥塑",
      "陶塑"
    ],
    "sentence": "会写「塑」字，更要会用「塑」字。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2382
  },
  {
    "char": "饼",
    "pinyin": "bǐng",
    "strokes": 9,
    "words": [
      "饼干",
      "饼铛",
      "大饼"
    ],
    "sentence": "「饼」字是必考字，一定要记牢。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2383
  },
  {
    "char": "谱",
    "pinyin": "pǔ",
    "strokes": 14,
    "words": [
      "谱号",
      "谱曲",
      "谱系"
    ],
    "sentence": "六年级了，「谱」字要熟练掌握。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2384
  },
  {
    "char": "抑",
    "pinyin": "yì",
    "strokes": 7,
    "words": [
      "压抑",
      "抑塞磊落",
      "抑强扶弱"
    ],
    "sentence": "「抑」字是必考字，一定要记牢。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2385
  },
  {
    "char": "挫",
    "pinyin": "cuò",
    "strokes": 10,
    "words": [
      "挫折",
      "挫骨扬灰"
    ],
    "sentence": "六年级了，「挫」字要熟练掌握。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2386
  },
  {
    "char": "歇",
    "pinyin": "xiē",
    "strokes": 13,
    "words": [
      "歇凉",
      "歇宿",
      "歇枝"
    ],
    "sentence": "会写「歇」字，更要会用「歇」字。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2387
  },
  {
    "char": "吉",
    "pinyin": "jí",
    "strokes": 6,
    "words": [
      "吉期",
      "吉卜赛",
      "吉普车"
    ],
    "sentence": "「吉」字是必考字，一定要记牢。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2388
  },
  {
    "char": "营",
    "pinyin": "yíng",
    "strokes": 11,
    "words": [
      "营区",
      "主营",
      "合营"
    ],
    "sentence": "会写「营」字，更要会用「营」字。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2389
  },
  {
    "char": "劈",
    "pinyin": "pī",
    "strokes": 15,
    "words": [
      "劈刀",
      "劈刺",
      "劈叉"
    ],
    "sentence": "会写「劈」字，更要会用「劈」字。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2390
  },
  {
    "char": "寇",
    "pinyin": "kòu",
    "strokes": 11,
    "words": [
      "倭寇",
      "成王败寇"
    ],
    "sentence": "六年级了，「寇」字要熟练掌握。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2391
  },
  {
    "char": "蕉",
    "pinyin": "jiāo",
    "strokes": 15,
    "words": [
      "芭蕉扇",
      "学蕉",
      "大蕉"
    ],
    "sentence": "「蕉」字是必考字，一定要记牢。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2392
  },
  {
    "char": "筒",
    "pinyin": "tǒng",
    "strokes": 12,
    "words": [
      "筒瓦",
      "信筒",
      "号筒"
    ],
    "sentence": "「筒」字是必考字，一定要记牢。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2393
  },
  {
    "char": "躁",
    "pinyin": "zào",
    "strokes": 20,
    "words": [
      "发躁",
      "躁言丑句"
    ],
    "sentence": "六年级了，「躁」字要熟练掌握。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2394
  },
  {
    "char": "革",
    "pinyin": "gé",
    "strokes": 9,
    "words": [
      "革囊",
      "兴革",
      "病革"
    ],
    "sentence": "「革」字是必考字，一定要记牢。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2395
  },
  {
    "char": "遭",
    "pinyin": "zāo",
    "strokes": 14,
    "words": [
      "遭难",
      "横遭",
      "险遭"
    ],
    "sentence": "会写「遭」字，更要会用「遭」字。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2396
  },
  {
    "char": "泣",
    "pinyin": "qì",
    "strokes": 8,
    "words": [
      "泣血",
      "啜泣",
      "泣下如雨"
    ],
    "sentence": "「泣」字是必考字，一定要记牢。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2397
  },
  {
    "char": "浴",
    "pinyin": "yù",
    "strokes": 10,
    "words": [
      "浴佛",
      "浴场",
      "浴血"
    ],
    "sentence": "会写「浴」字，更要会用「浴」字。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2398
  },
  {
    "char": "搏",
    "pinyin": "bó",
    "strokes": 13,
    "words": [
      "搏斗",
      "脉搏",
      "击搏挽裂"
    ],
    "sentence": "「搏」字是必考字，一定要记牢。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2399
  },
  {
    "char": "碑",
    "pinyin": "bēi",
    "strokes": 13,
    "words": [
      "碑帖",
      "碑拓",
      "碑石"
    ],
    "sentence": "会写「碑」字，更要会用「碑」字。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2400
  },
  {
    "char": "茵",
    "pinyin": "yīn",
    "strokes": 9,
    "words": [
      "坠茵落溷",
      "堕溷飘茵",
      "居不重茵"
    ],
    "sentence": "六年级了，「茵」字要熟练掌握。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2401
  },
  {
    "char": "蜡",
    "pinyin": "là",
    "strokes": 14,
    "words": [
      "蜡台",
      "上蜡",
      "发蜡"
    ],
    "sentence": "六年级了，「蜡」字要熟练掌握。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2402
  },
  {
    "char": "陌",
    "pinyin": "mò",
    "strokes": 8,
    "words": [
      "巷陌",
      "陌路相逢",
      "六街三陌"
    ],
    "sentence": "六年级了，「陌」字要熟练掌握。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2403
  },
  {
    "char": "盲",
    "pinyin": "máng",
    "strokes": 8,
    "words": [
      "盲从",
      "盲女",
      "盲童"
    ],
    "sentence": "六年级了，「盲」字要熟练掌握。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2404
  },
  {
    "char": "键",
    "pinyin": "jiàn",
    "strokes": 13,
    "words": [
      "键盘乐器",
      "倒带键",
      "共价键"
    ],
    "sentence": "「键」字是必考字，一定要记牢。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2405
  },
  {
    "char": "粼",
    "pinyin": "lín",
    "strokes": 14,
    "words": [
      "学粼",
      "大粼",
      "小粼"
    ],
    "sentence": "会写「粼」字，更要会用「粼」字。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2406
  },
  {
    "char": "霎",
    "pinyin": "shà",
    "strokes": 16,
    "words": [
      "霎时间",
      "一霎那"
    ],
    "sentence": "「霎」字是必考字，一定要记牢。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2407
  },
  {
    "char": "录",
    "pinyin": "lù",
    "strokes": 8,
    "words": [
      "录像片",
      "摄录",
      "纪录"
    ],
    "sentence": "「录」字是必考字，一定要记牢。",
    "grade": "六年级上册",
    "level": 11,
    "id": 2408
  },
  {
    "char": "挪",
    "pinyin": "nuó",
    "strokes": 9,
    "words": [
      "七担八挪",
      "东挪西撮"
    ],
    "sentence": "临毕业了，「挪」字你掌握了吗？",
    "grade": "六年级下册",
    "level": 12,
    "id": 2409
  },
  {
    "char": "蒸",
    "pinyin": "zhēng",
    "strokes": 13,
    "words": [
      "蒸发",
      "蒸散",
      "蒸笼"
    ],
    "sentence": "临毕业了，「蒸」字你掌握了吗？",
    "grade": "六年级下册",
    "level": 12,
    "id": 2410
  },
  {
    "char": "秧",
    "pinyin": "yāng",
    "strokes": 10,
    "words": [
      "瓜秧",
      "插秧机"
    ],
    "sentence": "「秧」字将为中学学习打下基础。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2411
  },
  {
    "char": "萎",
    "pinyin": "wēi",
    "strokes": 11,
    "words": [
      "萎靡",
      "枯萎",
      "衰萎"
    ],
    "sentence": "临毕业了，「萎」字你掌握了吗？",
    "grade": "六年级下册",
    "level": 12,
    "id": 2412
  },
  {
    "char": "番",
    "pinyin": "fān",
    "strokes": 12,
    "words": [
      "番号",
      "番将",
      "番椒"
    ],
    "sentence": "「番」字将为中学学习打下基础。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2413
  },
  {
    "char": "锻",
    "pinyin": "duàn",
    "strokes": 14,
    "words": [
      "锻制",
      "锻压",
      "锻打"
    ],
    "sentence": "「锻」字将为中学学习打下基础。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2414
  },
  {
    "char": "雅",
    "pinyin": "yǎ",
    "strokes": 12,
    "words": [
      "雅乐",
      "雅兴",
      "雅号"
    ],
    "sentence": "掌握「雅」，小学字词积累完成。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2415
  },
  {
    "char": "勃",
    "pinyin": "bó",
    "strokes": 9,
    "words": [
      "勃兴",
      "勃勃",
      "勃勃"
    ],
    "sentence": "掌握「勃」，小学字词积累完成。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2416
  },
  {
    "char": "旬",
    "pinyin": "xún",
    "strokes": 6,
    "words": [
      "上旬",
      "中下旬",
      "三旬九食"
    ],
    "sentence": "掌握「旬」，小学字词积累完成。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2417
  },
  {
    "char": "熬",
    "pinyin": "áo",
    "strokes": 14,
    "words": [
      "熬夜",
      "熬心",
      "熬煎"
    ],
    "sentence": "临毕业了，「熬」字你掌握了吗？",
    "grade": "六年级下册",
    "level": 12,
    "id": 2418
  },
  {
    "char": "蒜",
    "pinyin": "suàn",
    "strokes": 13,
    "words": [
      "蒜头",
      "蒜泥",
      "蒜黄"
    ],
    "sentence": "「蒜」字将为中学学习打下基础。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2419
  },
  {
    "char": "醋",
    "pinyin": "cù",
    "strokes": 15,
    "words": [
      "醋精",
      "醋劲儿",
      "乔文假醋"
    ],
    "sentence": "临毕业了，「醋」字你掌握了吗？",
    "grade": "六年级下册",
    "level": 12,
    "id": 2420
  },
  {
    "char": "饺",
    "pinyin": "jiǎo",
    "strokes": 9,
    "words": [
      "饺子",
      "学饺",
      "大饺"
    ],
    "sentence": "掌握「饺」，小学字词积累完成。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2421
  },
  {
    "char": "翡",
    "pinyin": "fěi",
    "strokes": 14,
    "words": [
      "学翡",
      "大翡",
      "小翡"
    ],
    "sentence": "掌握「翡」，小学字词积累完成。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2422
  },
  {
    "char": "拌",
    "pinyin": "bàn",
    "strokes": 8,
    "words": [
      "拌匀",
      "拌和",
      "拌嘴"
    ],
    "sentence": "掌握「拌」，小学字词积累完成。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2423
  },
  {
    "char": "榛",
    "pinyin": "zhēn",
    "strokes": 14,
    "words": [
      "披榛采兰",
      "学榛",
      "大榛"
    ],
    "sentence": "掌握「榛」，小学字词积累完成。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2424
  },
  {
    "char": "栗",
    "pinyin": "lì",
    "strokes": 10,
    "words": [
      "栗子",
      "地栗"
    ],
    "sentence": "掌握「栗」，小学字词积累完成。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2425
  },
  {
    "char": "筝",
    "pinyin": "zhēng",
    "strokes": 12,
    "words": [
      "风筝",
      "断线风筝"
    ],
    "sentence": "临毕业了，「筝」字你掌握了吗？",
    "grade": "六年级下册",
    "level": 12,
    "id": 2426
  },
  {
    "char": "鞭",
    "pinyin": "biān",
    "strokes": 18,
    "words": [
      "鞭子",
      "鞭打",
      "鞭梢"
    ],
    "sentence": "临毕业了，「鞭」字你掌握了吗？",
    "grade": "六年级下册",
    "level": 12,
    "id": 2427
  },
  {
    "char": "麦",
    "pinyin": "mài",
    "strokes": 7,
    "words": [
      "麦垛",
      "麦客",
      "麦片"
    ],
    "sentence": "掌握「麦」，小学字词积累完成。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2428
  },
  {
    "char": "寺",
    "pinyin": "sì",
    "strokes": 6,
    "words": [
      "寺观",
      "佛寺",
      "佛光寺"
    ],
    "sentence": "临毕业了，「寺」字你掌握了吗？",
    "grade": "六年级下册",
    "level": 12,
    "id": 2429
  },
  {
    "char": "逛",
    "pinyin": "guàng",
    "strokes": 10,
    "words": [
      "学逛",
      "大逛",
      "小逛"
    ],
    "sentence": "临毕业了，「逛」字你掌握了吗？",
    "grade": "六年级下册",
    "level": 12,
    "id": 2430
  },
  {
    "char": "籍",
    "pinyin": "jí",
    "strokes": 20,
    "words": [
      "籍没",
      "籍茅",
      "会籍"
    ],
    "sentence": "掌握「籍」，小学字词积累完成。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2431
  },
  {
    "char": "屉",
    "pinyin": "tì",
    "strokes": 8,
    "words": [
      "巡屉",
      "学屉",
      "大屉"
    ],
    "sentence": "「屉」字将为中学学习打下基础。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2432
  },
  {
    "char": "怖",
    "pinyin": "bù",
    "strokes": 8,
    "words": [
      "可怖",
      "学怖",
      "大怖"
    ],
    "sentence": "临毕业了，「怖」字你掌握了吗？",
    "grade": "六年级下册",
    "level": 12,
    "id": 2433
  },
  {
    "char": "瞅",
    "pinyin": "chǒu",
    "strokes": 14,
    "words": [
      "瞅见",
      "不瞅不睬"
    ],
    "sentence": "「瞅」字将为中学学习打下基础。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2434
  },
  {
    "char": "魔",
    "pinyin": "mó",
    "strokes": 20,
    "words": [
      "魔头",
      "魔女",
      "魔教"
    ],
    "sentence": "临毕业了，「魔」字你掌握了吗？",
    "grade": "六年级下册",
    "level": 12,
    "id": 2435
  },
  {
    "char": "胖",
    "pinyin": "pàng",
    "strokes": 9,
    "words": [
      "胖子",
      "发胖",
      "白胖"
    ],
    "sentence": "临毕业了，「胖」字你掌握了吗？",
    "grade": "六年级下册",
    "level": 12,
    "id": 2436
  },
  {
    "char": "刑",
    "pinyin": "xíng",
    "strokes": 6,
    "words": [
      "刑场",
      "刑期",
      "刑种"
    ],
    "sentence": "临毕业了，「刑」字你掌握了吗？",
    "grade": "六年级下册",
    "level": 12,
    "id": 2437
  },
  {
    "char": "哼",
    "pinyin": "hēng",
    "strokes": 10,
    "words": [
      "哼哈二将",
      "不哼不哈"
    ],
    "sentence": "临毕业了，「哼」字你掌握了吗？",
    "grade": "六年级下册",
    "level": 12,
    "id": 2438
  },
  {
    "char": "峻",
    "pinyin": "jùn",
    "strokes": 10,
    "words": [
      "峻岭",
      "峻阪盐车",
      "丛山峻岭"
    ],
    "sentence": "掌握「峻」，小学字词积累完成。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2439
  },
  {
    "char": "残",
    "pinyin": "cán",
    "strokes": 9,
    "words": [
      "残匪",
      "残卷",
      "残旧"
    ],
    "sentence": "临毕业了，「残」字你掌握了吗？",
    "grade": "六年级下册",
    "level": 12,
    "id": 2440
  },
  {
    "char": "匪",
    "pinyin": "fěi",
    "strokes": 10,
    "words": [
      "匪患",
      "剿匪",
      "抢匪"
    ],
    "sentence": "临毕业了，「匪」字你掌握了吗？",
    "grade": "六年级下册",
    "level": 12,
    "id": 2441
  },
  {
    "char": "窝",
    "pinyin": "wō",
    "strokes": 12,
    "words": [
      "窝囊",
      "窝头",
      "窝家"
    ],
    "sentence": "「窝」字将为中学学习打下基础。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2442
  },
  {
    "char": "啃",
    "pinyin": "kěn",
    "strokes": 11,
    "words": [
      "啃书本",
      "学啃",
      "大啃"
    ],
    "sentence": "掌握「啃」，小学字词积累完成。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2443
  },
  {
    "char": "舅",
    "pinyin": "jiù",
    "strokes": 13,
    "words": [
      "舅父",
      "大舅",
      "妻舅"
    ],
    "sentence": "「舅」字将为中学学习打下基础。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2444
  },
  {
    "char": "鸿",
    "pinyin": "hóng",
    "strokes": 11,
    "words": [
      "鸿爪",
      "鸿蒙",
      "鸿业远图"
    ],
    "sentence": "临毕业了，「鸿」字你掌握了吗？",
    "grade": "六年级下册",
    "level": 12,
    "id": 2445
  },
  {
    "char": "鼎",
    "pinyin": "dǐng",
    "strokes": 12,
    "words": [
      "鼎峙",
      "鼎盛",
      "扛鼎"
    ],
    "sentence": "「鼎」字将为中学学习打下基础。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2446
  },
  {
    "char": "旺",
    "pinyin": "wàng",
    "strokes": 8,
    "words": [
      "旺盛",
      "兴旺",
      "人丁兴旺"
    ],
    "sentence": "「旺」字将为中学学习打下基础。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2447
  },
  {
    "char": "炊",
    "pinyin": "chuī",
    "strokes": 8,
    "words": [
      "炊事员",
      "炊事班",
      "炊沙作糜"
    ],
    "sentence": "「炊」字将为中学学习打下基础。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2448
  },
  {
    "char": "乖",
    "pinyin": "guāi",
    "strokes": 8,
    "words": [
      "乖觉",
      "乖僻邪谬",
      "上当学乖"
    ],
    "sentence": "「乖」字将为中学学习打下基础。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2449
  },
  {
    "char": "裙",
    "pinyin": "qún",
    "strokes": 12,
    "words": [
      "裙子",
      "短裙",
      "裙带风"
    ],
    "sentence": "临毕业了，「裙」字你掌握了吗？",
    "grade": "六年级下册",
    "level": 12,
    "id": 2450
  },
  {
    "char": "兜",
    "pinyin": "dōu",
    "strokes": 11,
    "words": [
      "兜肚",
      "兜风",
      "兜生意"
    ],
    "sentence": "「兜」字将为中学学习打下基础。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2451
  },
  {
    "char": "币",
    "pinyin": "bì",
    "strokes": 4,
    "words": [
      "假币",
      "港币",
      "币重言甘"
    ],
    "sentence": "掌握「币」，小学字词积累完成。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2452
  },
  {
    "char": "哎",
    "pinyin": "āi",
    "strokes": 8,
    "words": [
      "哎呀",
      "哎哟"
    ],
    "sentence": "临毕业了，「哎」字你掌握了吗？",
    "grade": "六年级下册",
    "level": 12,
    "id": 2453
  },
  {
    "char": "橱",
    "pinyin": "chú",
    "strokes": 16,
    "words": [
      "橱柜",
      "柜橱",
      "碗橱"
    ],
    "sentence": "临毕业了，「橱」字你掌握了吗？",
    "grade": "六年级下册",
    "level": 12,
    "id": 2454
  },
  {
    "char": "锈",
    "pinyin": "xiù",
    "strokes": 12,
    "words": [
      "锈菌",
      "锈迹",
      "铜锈"
    ],
    "sentence": "临毕业了，「锈」字你掌握了吗？",
    "grade": "六年级下册",
    "level": 12,
    "id": 2455
  },
  {
    "char": "摩",
    "pinyin": "mó",
    "strokes": 15,
    "words": [
      "摩天",
      "摩尔",
      "摩崖"
    ],
    "sentence": "掌握「摩」，小学字词积累完成。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2456
  },
  {
    "char": "揉",
    "pinyin": "róu",
    "strokes": 12,
    "words": [
      "众说纷揉",
      "心痒难揉",
      "操揉磨治"
    ],
    "sentence": "「揉」字将为中学学习打下基础。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2457
  },
  {
    "char": "玛",
    "pinyin": "mǎ",
    "strokes": 7,
    "words": [
      "学玛",
      "大玛",
      "小玛"
    ],
    "sentence": "「玛」字将为中学学习打下基础。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2458
  },
  {
    "char": "蘸",
    "pinyin": "zhàn",
    "strokes": 22,
    "words": [
      "学蘸",
      "大蘸",
      "小蘸"
    ],
    "sentence": "临毕业了，「蘸」字你掌握了吗？",
    "grade": "六年级下册",
    "level": 12,
    "id": 2459
  },
  {
    "char": "毒",
    "pinyin": "dú",
    "strokes": 9,
    "words": [
      "学毒",
      "大毒",
      "毒子"
    ],
    "sentence": "掌握「毒」，小学字词积累完成。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2460
  },
  {
    "char": "撇",
    "pinyin": "piē",
    "strokes": 14,
    "words": [
      "撇嘴",
      "撇开",
      "撇弃"
    ],
    "sentence": "临毕业了，「撇」字你掌握了吗？",
    "grade": "六年级下册",
    "level": 12,
    "id": 2461
  },
  {
    "char": "噎",
    "pinyin": "yē",
    "strokes": 15,
    "words": [
      "因噎废食",
      "见噎废食",
      "闻噎废食"
    ],
    "sentence": "掌握「噎」，小学字词积累完成。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2462
  },
  {
    "char": "搓",
    "pinyin": "cuō",
    "strokes": 12,
    "words": [
      "搓弄",
      "搓洗"
    ],
    "sentence": "「搓」字将为中学学习打下基础。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2463
  },
  {
    "char": "匣",
    "pinyin": "xiá",
    "strokes": 7,
    "words": [
      "话匣子",
      "黑匣子",
      "囊匣如洗"
    ],
    "sentence": "「匣」字将为中学学习打下基础。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2464
  },
  {
    "char": "喳",
    "pinyin": "zhā",
    "strokes": 12,
    "words": [
      "叽叽喳喳",
      "叽叽喳喳",
      "吱吱喳喳"
    ],
    "sentence": "临毕业了，「喳」字你掌握了吗？",
    "grade": "六年级下册",
    "level": 12,
    "id": 2465
  },
  {
    "char": "吭",
    "pinyin": "kēng",
    "strokes": 7,
    "words": [
      "吭哧",
      "吭声",
      "吭气"
    ],
    "sentence": "掌握「吭」，小学字词积累完成。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2466
  },
  {
    "char": "娜",
    "pinyin": "nà",
    "strokes": 9,
    "words": [
      "婀娜",
      "袅娜",
      "雅典娜"
    ],
    "sentence": "掌握「娜」，小学字词积累完成。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2467
  },
  {
    "char": "伊",
    "pinyin": "yī",
    "strokes": 6,
    "words": [
      "伊吾",
      "伊甸园",
      "伊于胡底"
    ],
    "sentence": "掌握「伊」，小学字词积累完成。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2468
  },
  {
    "char": "搅",
    "pinyin": "jiǎo",
    "strokes": 12,
    "words": [
      "搅合",
      "搅和",
      "搅拌"
    ],
    "sentence": "「搅」字将为中学学习打下基础。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2469
  },
  {
    "char": "埃",
    "pinyin": "āi",
    "strokes": 10,
    "words": [
      "苏维埃",
      "学埃",
      "大埃"
    ],
    "sentence": "掌握「埃」，小学字词积累完成。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2470
  },
  {
    "char": "伦",
    "pinyin": "lún",
    "strokes": 6,
    "words": [
      "伦敦",
      "伦敦大学",
      "不伦不类"
    ],
    "sentence": "「伦」字将为中学学习打下基础。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2471
  },
  {
    "char": "藤",
    "pinyin": "téng",
    "strokes": 18,
    "words": [
      "藤子",
      "藤条",
      "藤椅"
    ],
    "sentence": "临毕业了，「藤」字你掌握了吗？",
    "grade": "六年级下册",
    "level": 12,
    "id": 2472
  },
  {
    "char": "析",
    "pinyin": "xī",
    "strokes": 8,
    "words": [
      "析疑",
      "分析",
      "研析"
    ],
    "sentence": "「析」字将为中学学习打下基础。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2473
  },
  {
    "char": "碱",
    "pinyin": "jiǎn",
    "strokes": 14,
    "words": [
      "碱地",
      "汗碱",
      "碱金属"
    ],
    "sentence": "「碱」字将为中学学习打下基础。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2474
  },
  {
    "char": "顽",
    "pinyin": "wán",
    "strokes": 10,
    "words": [
      "顽强",
      "顽症",
      "顽石"
    ],
    "sentence": "掌握「顽」，小学字词积累完成。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2475
  },
  {
    "char": "卓",
    "pinyin": "zhuó",
    "strokes": 8,
    "words": [
      "卓著",
      "卓见",
      "卓识"
    ],
    "sentence": "临毕业了，「卓」字你掌握了吗？",
    "grade": "六年级下册",
    "level": 12,
    "id": 2476
  },
  {
    "char": "效",
    "pinyin": "xiào",
    "strokes": 10,
    "words": [
      "效应",
      "效率",
      "效能"
    ],
    "sentence": "掌握「效」，小学字词积累完成。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2477
  },
  {
    "char": "蚀",
    "pinyin": "shí",
    "strokes": 9,
    "words": [
      "剥蚀",
      "磨蚀",
      "风蚀"
    ],
    "sentence": "掌握「蚀」，小学字词积累完成。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2478
  },
  {
    "char": "乏",
    "pinyin": "fá",
    "strokes": 4,
    "words": [
      "乏术",
      "乏累",
      "不乏"
    ],
    "sentence": "「乏」字将为中学学习打下基础。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2479
  },
  {
    "char": "誉",
    "pinyin": "yù",
    "strokes": 13,
    "words": [
      "誉为",
      "令誉",
      "信誉"
    ],
    "sentence": "掌握「誉」，小学字词积累完成。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2480
  },
  {
    "char": "衔",
    "pinyin": "xián",
    "strokes": 11,
    "words": [
      "头衔",
      "衔华佩实",
      "衔尾相随"
    ],
    "sentence": "「衔」字将为中学学习打下基础。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2481
  },
  {
    "char": "粪",
    "pinyin": "fèn",
    "strokes": 12,
    "words": [
      "粪便",
      "粪车",
      "上粪"
    ],
    "sentence": "掌握「粪」，小学字词积累完成。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2482
  },
  {
    "char": "捐",
    "pinyin": "juān",
    "strokes": 10,
    "words": [
      "捐助",
      "捐躯赴难",
      "为国捐躯"
    ],
    "sentence": "「捐」字将为中学学习打下基础。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2483
  },
  {
    "char": "澡",
    "pinyin": "zǎo",
    "strokes": 16,
    "words": [
      "泡澡",
      "洗澡",
      "冷水澡"
    ],
    "sentence": "「澡」字将为中学学习打下基础。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2484
  },
  {
    "char": "械",
    "pinyin": "xiè",
    "strokes": 11,
    "words": [
      "缴械",
      "机械化",
      "机械论"
    ],
    "sentence": "临毕业了，「械」字你掌握了吗？",
    "grade": "六年级下册",
    "level": 12,
    "id": 2485
  },
  {
    "char": "逆",
    "pinyin": "nì",
    "strokes": 9,
    "words": [
      "逆差",
      "逆行",
      "逆转"
    ],
    "sentence": "掌握「逆」，小学字词积累完成。",
    "grade": "六年级下册",
    "level": 12,
    "id": 2486
  },
  {
    "char": "玫",
    "pinyin": "méi",
    "strokes": 8,
    "words": [
      "玫瑰红",
      "玫瑰香"
    ],
    "sentence": "临毕业了，「玫」字你掌握了吗？",
    "grade": "六年级下册",
    "level": 12,
    "id": 2487
  },
  {
    "char": "域",
    "pinyin": "yù",
    "strokes": 11,
    "words": [
      "域内",
      "区域",
      "地域"
    ],
    "sentence": "临毕业了，「域」字你掌握了吗？",
    "grade": "六年级下册",
    "level": 12,
    "id": 2488
  }
];
