// 小学必备成语谚语歇后语
const IDIOM_DATA = [
  {
    "id": 1,
    "type": "成语",
    "text": "一心一意",
    "pinyin": "yī xīn yī yì",
    "meaning": "心思、意念专一。",
    "example": "小明一心一意地学习。",
    "grade": "一年级"
  },
  {
    "id": 2,
    "type": "成语",
    "text": "三心二意",
    "pinyin": "sān xīn èr yì",
    "meaning": "形容犹豫不决或意志不坚定。",
    "example": "做事不能三心二意。",
    "grade": "一年级"
  },
  {
    "id": 3,
    "type": "成语",
    "text": "四面八方",
    "pinyin": "sì miàn bā fāng",
    "meaning": "各个方向，到处。",
    "example": "人们从四面八方赶来。",
    "grade": "一年级"
  },
  {
    "id": 4,
    "type": "成语",
    "text": "五颜六色",
    "pinyin": "wǔ yán liù sè",
    "meaning": "形容色彩繁多。",
    "example": "花园里开着五颜六色的花。",
    "grade": "一年级"
  },
  {
    "id": 5,
    "type": "成语",
    "text": "七上八下",
    "pinyin": "qī shàng bā xià",
    "meaning": "形容心里慌乱不安。",
    "example": "考试前我的心里七上八下的。",
    "grade": "二年级"
  },
  {
    "id": 6,
    "type": "成语",
    "text": "九牛一毛",
    "pinyin": "jiǔ niú yī máo",
    "meaning": "比喻极大数量中微不足道的数量。",
    "example": "这点钱对他来说简直是九牛一毛。",
    "grade": "二年级"
  },
  {
    "id": 7,
    "type": "成语",
    "text": "十全十美",
    "pinyin": "shí quán shí měi",
    "meaning": "各方面都非常完美。",
    "example": "世界上没有十全十美的人。",
    "grade": "二年级"
  },
  {
    "id": 8,
    "type": "成语",
    "text": "百发百中",
    "pinyin": "bǎi fā bǎi zhòng",
    "meaning": "形容射击、投掷非常准确。",
    "example": "他投篮百发百中。",
    "grade": "二年级"
  },
  {
    "id": 9,
    "type": "成语",
    "text": "千军万马",
    "pinyin": "qiān jūn wàn mǎ",
    "meaning": "形容雄壮的队伍或浩大的声势。",
    "example": "千军万马奔腾而来。",
    "grade": "二年级"
  },
  {
    "id": 10,
    "type": "成语",
    "text": "万紫千红",
    "pinyin": "wàn zǐ qiān hóng",
    "meaning": "形容百花齐放、色彩艳丽。",
    "example": "春天来了，公园里万紫千红。",
    "grade": "二年级"
  },
  {
    "id": 11,
    "type": "成语",
    "text": "画蛇添足",
    "pinyin": "huà shé tiān zú",
    "meaning": "比喻做了多余的事，反而不好。",
    "example": "文章已经写得很好了，再加这一段就是画蛇添足了。",
    "grade": "二年级"
  },
  {
    "id": 12,
    "type": "成语",
    "text": "守株待兔",
    "pinyin": "shǒu zhū dài tù",
    "meaning": "比喻不主动努力，存侥幸心理。",
    "example": "我们要主动争取，不能守株待兔。",
    "grade": "二年级"
  },
  {
    "id": 13,
    "type": "成语",
    "text": "亡羊补牢",
    "pinyin": "wáng yáng bǔ láo",
    "meaning": "出了问题后想办法补救，防止再受损失。",
    "example": "虽然这次没考好，但亡羊补牢，为时不晚。",
    "grade": "三年级"
  },
  {
    "id": 14,
    "type": "成语",
    "text": "掩耳盗铃",
    "pinyin": "yǎn ěr dào líng",
    "meaning": "比喻自己欺骗自己。",
    "example": "考试作弊就是掩耳盗铃，骗不了别人。",
    "grade": "三年级"
  },
  {
    "id": 15,
    "type": "成语",
    "text": "叶公好龙",
    "pinyin": "yè gōng hào lóng",
    "meaning": "比喻口头上喜欢，实际上害怕。",
    "example": "他嘴上说喜欢运动，其实叶公好龙。",
    "grade": "三年级"
  },
  {
    "id": 16,
    "type": "成语",
    "text": "自相矛盾",
    "pinyin": "zì xiāng máo dùn",
    "meaning": "自己的言行前后不一致。",
    "example": "他的话前后自相矛盾。",
    "grade": "三年级"
  },
  {
    "id": 17,
    "type": "成语",
    "text": "刻舟求剑",
    "pinyin": "kè zhōu qiú jiàn",
    "meaning": "比喻不懂事物已发生变化，仍静止地看问题。",
    "example": "形势已经变了，我们不能再刻舟求剑了。",
    "grade": "三年级"
  },
  {
    "id": 18,
    "type": "成语",
    "text": "对牛弹琴",
    "pinyin": "duì niú tán qín",
    "meaning": "比喻对不懂道理的人讲道理。",
    "example": "跟不讲道理的人争论，简直是对牛弹琴。",
    "grade": "三年级"
  },
  {
    "id": 19,
    "type": "成语",
    "text": "井底之蛙",
    "pinyin": "jǐng dǐ zhī wā",
    "meaning": "比喻见识狭小的人。",
    "example": "我们要多出去走走，不要做井底之蛙。",
    "grade": "三年级"
  },
  {
    "id": 20,
    "type": "成语",
    "text": "狐假虎威",
    "pinyin": "hú jiǎ hǔ wēi",
    "meaning": "比喻借别人的威势吓唬人。",
    "example": "他不过是狐假虎威罢了。",
    "grade": "三年级"
  },
  {
    "id": 21,
    "type": "成语",
    "text": "愚公移山",
    "pinyin": "yú gōng yí shān",
    "meaning": "比喻做事有毅力，不怕困难。",
    "example": "只要有愚公移山的精神，什么困难都能克服。",
    "grade": "三年级"
  },
  {
    "id": 22,
    "type": "成语",
    "text": "精卫填海",
    "pinyin": "jīng wèi tián hǎi",
    "meaning": "比喻意志坚决，不畏艰难。",
    "example": "他用精卫填海般的毅力坚持学习。",
    "grade": "三年级"
  },
  {
    "id": 23,
    "type": "成语",
    "text": "夸父追日",
    "pinyin": "kuā fù zhuī rì",
    "meaning": "比喻人有大志，也比喻不自量力。",
    "example": "我们要有夸父追日的勇气。",
    "grade": "三年级"
  },
  {
    "id": 24,
    "type": "成语",
    "text": "女娲补天",
    "pinyin": "nǚ wā bǔ tiān",
    "meaning": "比喻有拯救天下的伟大功绩。",
    "example": "救灾英雄们有女娲补天般的功绩。",
    "grade": "三年级"
  },
  {
    "id": 25,
    "type": "成语",
    "text": "开天辟地",
    "pinyin": "kāi tiān pì dì",
    "meaning": "比喻前所未有的伟大事业。",
    "example": "这是开天辟地的大事。",
    "grade": "三年级"
  },
  {
    "id": 26,
    "type": "成语",
    "text": "闻鸡起舞",
    "pinyin": "wén jī qǐ wǔ",
    "meaning": "比喻有志之士及时奋发。",
    "example": "他每天闻鸡起舞，刻苦训练。",
    "grade": "四年级"
  },
  {
    "id": 27,
    "type": "成语",
    "text": "悬梁刺股",
    "pinyin": "xuán liáng cì gǔ",
    "meaning": "形容刻苦学习。",
    "example": "他有悬梁刺股的学习精神。",
    "grade": "四年级"
  },
  {
    "id": 28,
    "type": "成语",
    "text": "凿壁偷光",
    "pinyin": "záo bì tōu guāng",
    "meaning": "形容家贫而读书刻苦。",
    "example": "古人凿壁偷光的故事很感人。",
    "grade": "四年级"
  },
  {
    "id": 29,
    "type": "成语",
    "text": "囊萤映雪",
    "pinyin": "náng yíng yìng xuě",
    "meaning": "形容在艰苦的条件下坚持学习。",
    "example": "我们要学习古人囊萤映雪的精神。",
    "grade": "四年级"
  },
  {
    "id": 30,
    "type": "成语",
    "text": "胸有成竹",
    "pinyin": "xiōng yǒu chéng zhú",
    "meaning": "比喻做事前已有全面的考虑。",
    "example": "他对这次演讲胸有成竹。",
    "grade": "四年级"
  },
  {
    "id": 31,
    "type": "成语",
    "text": "鹤立鸡群",
    "pinyin": "hè lì jī qún",
    "meaning": "比喻一个人的才能仪表在众人中很突出。",
    "example": "他在班上鹤立鸡群，成绩一直很好。",
    "grade": "四年级"
  },
  {
    "id": 32,
    "type": "成语",
    "text": "画龙点睛",
    "pinyin": "huà lóng diǎn jīng",
    "meaning": "比喻在关键处用几句话点明要旨。",
    "example": "老师的点评画龙点睛，让文章更精彩了。",
    "grade": "四年级"
  },
  {
    "id": 33,
    "type": "成语",
    "text": "大材小用",
    "pinyin": "dà cái xiǎo yòng",
    "meaning": "把大材料用在小地方，形容浪费人才。",
    "example": "让他扫地真是大材小用了。",
    "grade": "四年级"
  },
  {
    "id": 34,
    "type": "成语",
    "text": "异口同声",
    "pinyin": "yì kǒu tóng shēng",
    "meaning": "不同的人说同样的话。",
    "example": "同学们异口同声地回答。",
    "grade": "四年级"
  },
  {
    "id": 35,
    "type": "成语",
    "text": "焕然一新",
    "pinyin": "huàn rán yī xīn",
    "meaning": "改变旧面貌，出现崭新气象。",
    "example": "教室打扫后焕然一新。",
    "grade": "四年级"
  },
  {
    "id": 36,
    "type": "成语",
    "text": "津津有味",
    "pinyin": "jīn jīn yǒu wèi",
    "meaning": "形容特别有兴趣。",
    "example": "他津津有味地读着故事书。",
    "grade": "四年级"
  },
  {
    "id": 37,
    "type": "成语",
    "text": "恋恋不舍",
    "pinyin": "liàn liàn bù shě",
    "meaning": "非常留恋，舍不得离开。",
    "example": "夏令营结束了，大家恋恋不舍地告别。",
    "grade": "四年级"
  },
  {
    "id": 38,
    "type": "成语",
    "text": "栩栩如生",
    "pinyin": "xǔ xǔ rú shēng",
    "meaning": "形容艺术形象非常逼真。",
    "example": "画中的小鸟栩栩如生。",
    "grade": "四年级"
  },
  {
    "id": 39,
    "type": "成语",
    "text": "翩翩起舞",
    "pinyin": "piān piān qǐ wǔ",
    "meaning": "形容轻快地跳舞。",
    "example": "蝴蝶在花丛中翩翩起舞。",
    "grade": "四年级"
  },
  {
    "id": 40,
    "type": "成语",
    "text": "废寝忘食",
    "pinyin": "fèi qǐn wàng shí",
    "meaning": "顾不上睡觉吃饭，形容非常专心。",
    "example": "他学习起来废寝忘食。",
    "grade": "五年级"
  },
  {
    "id": 41,
    "type": "成语",
    "text": "持之以恒",
    "pinyin": "chí zhī yǐ héng",
    "meaning": "长久地坚持下去。",
    "example": "学习要持之以恒，不能半途而废。",
    "grade": "五年级"
  },
  {
    "id": 42,
    "type": "成语",
    "text": "水滴石穿",
    "pinyin": "shuǐ dī shí chuān",
    "meaning": "比喻力量虽小，只要坚持就能成功。",
    "example": "水滴石穿，坚持就是胜利。",
    "grade": "五年级"
  },
  {
    "id": 43,
    "type": "成语",
    "text": "集思广益",
    "pinyin": "jí sī guǎng yì",
    "meaning": "集中众人的智慧。",
    "example": "大家集思广益，问题很快就解决了。",
    "grade": "五年级"
  },
  {
    "id": 44,
    "type": "成语",
    "text": "举一反三",
    "pinyin": "jǔ yī fǎn sān",
    "meaning": "从一件事类推其他事，形容善于学习。",
    "example": "聪明的学生能够举一反三。",
    "grade": "五年级"
  },
  {
    "id": 45,
    "type": "成语",
    "text": "温故知新",
    "pinyin": "wēn gù zhī xīn",
    "meaning": "温习旧的知识得到新的体会。",
    "example": "温故知新是很好的学习方法。",
    "grade": "五年级"
  },
  {
    "id": 46,
    "type": "成语",
    "text": "不耻下问",
    "pinyin": "bù chǐ xià wèn",
    "meaning": "不把向不如自己的人请教当耻辱。",
    "example": "我们要有不耻下问的学习态度。",
    "grade": "五年级"
  },
  {
    "id": 47,
    "type": "成语",
    "text": "学以致用",
    "pinyin": "xué yǐ zhì yòng",
    "meaning": "把学到的知识用到实际中。",
    "example": "学以致用才能真正掌握知识。",
    "grade": "五年级"
  },
  {
    "id": 48,
    "type": "成语",
    "text": "见多识广",
    "pinyin": "jiàn duō shí guǎng",
    "meaning": "见过的多知道的广，形容阅历深。",
    "example": "他走南闯北，见多识广。",
    "grade": "五年级"
  },
  {
    "id": 49,
    "type": "成语",
    "text": "取长补短",
    "pinyin": "qǔ cháng bǔ duǎn",
    "meaning": "吸取别人的长处弥补自己的不足。",
    "example": "同学之间要取长补短，互相学习。",
    "grade": "五年级"
  },
  {
    "id": 50,
    "type": "成语",
    "text": "精益求精",
    "pinyin": "jīng yì qiú jīng",
    "meaning": "已经很好了还要求更好。",
    "example": "他的学习态度是精益求精。",
    "grade": "五年级"
  },
  {
    "id": 51,
    "type": "成语",
    "text": "囫囵吞枣",
    "pinyin": "hú lún tūn zǎo",
    "meaning": "比喻读书等不加分析笼统接受。",
    "example": "读书不能囫囵吞枣。",
    "grade": "四年级"
  },
  {
    "id": 52,
    "type": "成语",
    "text": "张冠李戴",
    "pinyin": "zhāng guān lǐ dài",
    "meaning": "比喻弄错了对象或事实。",
    "example": "你把我的书包拿走了，真是张冠李戴。",
    "grade": "五年级"
  },
  {
    "id": 53,
    "type": "成语",
    "text": "坐井观天",
    "pinyin": "zuò jǐng guān tiān",
    "meaning": "比喻眼界狭小，见识少。",
    "example": "不能坐井观天，要多看看外面的世界。",
    "grade": "三年级"
  },
  {
    "id": 54,
    "type": "成语",
    "text": "雪中送炭",
    "pinyin": "xuě zhōng sòng tàn",
    "meaning": "比喻在别人困难时给予帮助。",
    "example": "朋友生病时去看望，真是雪中送炭。",
    "grade": "四年级"
  },
  {
    "id": 55,
    "type": "成语",
    "text": "锦上添花",
    "pinyin": "jǐn shàng tiān huā",
    "meaning": "比喻好上加好。",
    "example": "你的画已经很好了，加上这个边框真是锦上添花。",
    "grade": "五年级"
  },
  {
    "id": 56,
    "type": "成语",
    "text": "拔苗助长",
    "pinyin": "bá miáo zhù zhǎng",
    "meaning": "比喻违反事物发展规律急于求成。",
    "example": "学习不能拔苗助长，要循序渐进。",
    "grade": "三年级"
  },
  {
    "id": 57,
    "type": "成语",
    "text": "买椟还珠",
    "pinyin": "mǎi dú huán zhū",
    "meaning": "比喻没有眼光，取舍不当。",
    "example": "只追求外表不看内容，就是买椟还珠。",
    "grade": "五年级"
  },
  {
    "id": 58,
    "type": "成语",
    "text": "滥竽充数",
    "pinyin": "làn yú chōng shù",
    "meaning": "比喻没有真才实学混在行家里面充数。",
    "example": "我们要真才实学，不能滥竽充数。",
    "grade": "四年级"
  },
  {
    "id": 59,
    "type": "成语",
    "text": "邯郸学步",
    "pinyin": "hán dān xué bù",
    "meaning": "比喻模仿别人不成，反把自己原来的长处丢了。",
    "example": "学别人要结合自己的特点，否则就会邯郸学步。",
    "grade": "五年级"
  },
  {
    "id": 60,
    "type": "成语",
    "text": "杯弓蛇影",
    "pinyin": "bēi gōng shé yǐng",
    "meaning": "比喻疑神疑鬼，自相惊扰。",
    "example": "他过于紧张，简直是杯弓蛇影。",
    "grade": "五年级"
  },
  {
    "id": 61,
    "type": "成语",
    "text": "自言自语",
    "pinyin": "zì yán zì yǔ",
    "meaning": "自己跟自己说话。",
    "example": "他一个人在那里自言自语。",
    "grade": "二年级"
  },
  {
    "id": 62,
    "type": "成语",
    "text": "千变万化",
    "pinyin": "qiān biàn wàn huà",
    "meaning": "形容变化极多。",
    "example": "天上的云彩千变万化。",
    "grade": "三年级"
  },
  {
    "id": 63,
    "type": "成语",
    "text": "风和日丽",
    "pinyin": "fēng hé rì lì",
    "meaning": "形容天气晴朗暖和。",
    "example": "今天风和日丽，适合出去郊游。",
    "grade": "三年级"
  },
  {
    "id": 64,
    "type": "成语",
    "text": "兴高采烈",
    "pinyin": "xìng gāo cǎi liè",
    "meaning": "形容兴致高，精神饱满。",
    "example": "同学们兴高采烈地去春游。",
    "grade": "三年级"
  },
  {
    "id": 65,
    "type": "成语",
    "text": "争先恐后",
    "pinyin": "zhēng xiān kǒng hòu",
    "meaning": "抢着向前，唯恐落后。",
    "example": "同学们争先恐后地回答问题。",
    "grade": "三年级"
  },
  {
    "id": 66,
    "type": "成语",
    "text": "引人注目",
    "pinyin": "yǐn rén zhù mù",
    "meaning": "引起人们的注意。",
    "example": "那幅画特别引人注目。",
    "grade": "四年级"
  },
  {
    "id": 67,
    "type": "成语",
    "text": "赞不绝口",
    "pinyin": "zàn bù jué kǒu",
    "meaning": "不住口地称赞。",
    "example": "大家对她的表演赞不绝口。",
    "grade": "四年级"
  },
  {
    "id": 68,
    "type": "成语",
    "text": "无可奈何",
    "pinyin": "wú kě nài hé",
    "meaning": "没有办法可想。",
    "example": "雨一直下，我们无可奈何地取消了郊游。",
    "grade": "四年级"
  },
  {
    "id": 69,
    "type": "成语",
    "text": "精打细算",
    "pinyin": "jīng dǎ xì suàn",
    "meaning": "精密地计划，详细地计算。",
    "example": "妈妈过日子总是精打细算。",
    "grade": "五年级"
  },
  {
    "id": 70,
    "type": "成语",
    "text": "一丝不苟",
    "pinyin": "yī sī bù gǒu",
    "meaning": "形容办事认真，连最细微的地方也不马虎。",
    "example": "他做作业总是一丝不苟。",
    "grade": "五年级"
  },
  {
    "id": 71,
    "type": "成语",
    "text": "全神贯注",
    "pinyin": "quán shén guàn zhù",
    "meaning": "全部精神集中在一起。",
    "example": "他全神贯注地看书。",
    "grade": "四年级"
  },
  {
    "id": 72,
    "type": "成语",
    "text": "目瞪口呆",
    "pinyin": "mù dèng kǒu dāi",
    "meaning": "形容因吃惊或害怕而发愣。",
    "example": "精彩的表演让大家目瞪口呆。",
    "grade": "四年级"
  },
  {
    "id": 73,
    "type": "成语",
    "text": "迫不及待",
    "pinyin": "pò bù jí dài",
    "meaning": "急得不能再等待了。",
    "example": "放学了，他迫不及待地跑出教室。",
    "grade": "四年级"
  },
  {
    "id": 74,
    "type": "成语",
    "text": "五光十色",
    "pinyin": "wǔ guāng shí sè",
    "meaning": "形容色彩鲜艳，花样繁多。",
    "example": "霓虹灯五光十色，好看极了。",
    "grade": "三年级"
  },
  {
    "id": 75,
    "type": "成语",
    "text": "应有尽有",
    "pinyin": "yīng yǒu jìn yǒu",
    "meaning": "应该有的全都有了。",
    "example": "超市里的商品应有尽有。",
    "grade": "三年级"
  },
  {
    "id": 76,
    "type": "成语",
    "text": "满载而归",
    "pinyin": "mǎn zài ér guī",
    "meaning": "装得满满地回来，形容收获很大。",
    "example": "同学们从图书馆满载而归。",
    "grade": "四年级"
  },
  {
    "id": 77,
    "type": "成语",
    "text": "不约而同",
    "pinyin": "bù yuē ér tóng",
    "meaning": "没有事先商量而彼此一致。",
    "example": "大家不约而同地笑了。",
    "grade": "五年级"
  },
  {
    "id": 78,
    "type": "成语",
    "text": "恍然大悟",
    "pinyin": "huǎng rán dà wù",
    "meaning": "形容一下子明白过来。",
    "example": "听了老师的讲解，我恍然大悟。",
    "grade": "四年级"
  },
  {
    "id": 79,
    "type": "成语",
    "text": "左顾右盼",
    "pinyin": "zuǒ gù yòu pàn",
    "meaning": "向左右两边看。",
    "example": "上课不要左顾右盼。",
    "grade": "三年级"
  },
  {
    "id": 80,
    "type": "成语",
    "text": "眉开眼笑",
    "pinyin": "méi kāi yǎn xiào",
    "meaning": "形容高兴愉快的样子。",
    "example": "收到礼物，他眉开眼笑。",
    "grade": "三年级"
  },
  {
    "id": 81,
    "type": "成语",
    "text": "愁眉苦脸",
    "pinyin": "chóu méi kǔ liǎn",
    "meaning": "形容愁苦的神情。",
    "example": "不要愁眉苦脸的，开心点！",
    "grade": "三年级"
  },
  {
    "id": 82,
    "type": "成语",
    "text": "神气活现",
    "pinyin": "shén qì huó xiàn",
    "meaning": "自以为优越而表现出得意的样子。",
    "example": "他得了一百分，神气活现地走来。",
    "grade": "四年级"
  },
  {
    "id": 83,
    "type": "成语",
    "text": "手舞足蹈",
    "pinyin": "shǒu wǔ zú dǎo",
    "meaning": "形容高兴到了极点。",
    "example": "听到好消息，他高兴得手舞足蹈。",
    "grade": "三年级"
  },
  {
    "id": 84,
    "type": "成语",
    "text": "心花怒放",
    "pinyin": "xīn huā nù fàng",
    "meaning": "形容内心高兴极了。",
    "example": "考了第一名，她心花怒放。",
    "grade": "四年级"
  },
  {
    "id": 85,
    "type": "成语",
    "text": "垂头丧气",
    "pinyin": "chuí tóu sàng qì",
    "meaning": "形容失望或受到挫折时情绪低沉。",
    "example": "输了比赛，队员们垂头丧气。",
    "grade": "四年级"
  },
  {
    "id": 86,
    "type": "成语",
    "text": "提心吊胆",
    "pinyin": "tí xīn diào dǎn",
    "meaning": "形容十分担心或害怕。",
    "example": "他提心吊胆地等着考试成绩。",
    "grade": "五年级"
  },
  {
    "id": 87,
    "type": "成语",
    "text": "目瞪口呆",
    "pinyin": "mù dèng kǒu dāi",
    "meaning": "睁大眼睛说不出话来，形容受惊而愣住。",
    "example": "魔术表演让大家目瞪口呆。",
    "grade": "五年级"
  },
  {
    "id": 88,
    "type": "成语",
    "text": "名列前茅",
    "pinyin": "míng liè qián máo",
    "meaning": "名次列在前面。",
    "example": "他的成绩在班里名列前茅。",
    "grade": "五年级"
  },
  {
    "id": 89,
    "type": "成语",
    "text": "自强不息",
    "pinyin": "zì qiáng bù xī",
    "meaning": "自己努力向上，永远不懈怠。",
    "example": "我们要发扬自强不息的精神。",
    "grade": "六年级"
  },
  {
    "id": 90,
    "type": "成语",
    "text": "坚持不懈",
    "pinyin": "jiān chí bù xiè",
    "meaning": "坚持到底，毫不松懈。",
    "example": "他坚持不懈地练习钢琴。",
    "grade": "六年级"
  },
  {
    "id": 91,
    "type": "成语",
    "text": "聚精会神",
    "pinyin": "jù jīng huì shén",
    "meaning": "集中精神，集中注意力。",
    "example": "同学们聚精会神地听老师讲课。",
    "grade": "四年级"
  },
  {
    "id": 92,
    "type": "成语",
    "text": "心旷神怡",
    "pinyin": "xīn kuàng shén yí",
    "meaning": "心情舒畅，精神愉快。",
    "example": "看到大海，让人心旷神怡。",
    "grade": "六年级"
  },
  {
    "id": 93,
    "type": "成语",
    "text": "流连忘返",
    "pinyin": "liú lián wàng fǎn",
    "meaning": "玩乐时留恋不愿离去。",
    "example": "公园的美景让人流连忘返。",
    "grade": "五年级"
  },
  {
    "id": 94,
    "type": "成语",
    "text": "不可计数",
    "pinyin": "bù kě jì shǔ",
    "meaning": "形容数量极多，无法计算。",
    "example": "天上的星星不可计数。",
    "grade": "五年级"
  },
  {
    "id": 95,
    "type": "成语",
    "text": "应接不暇",
    "pinyin": "yìng jiē bù xiá",
    "meaning": "形容来人或事情太多，应付不过来。",
    "example": "参观的人络绎不绝，让人应接不暇。",
    "grade": "六年级"
  },
  {
    "id": 96,
    "type": "成语",
    "text": "莫名其妙",
    "pinyin": "mò míng qí miào",
    "meaning": "没有人能说明它的奥妙，表示奇怪。",
    "example": "他突然生气了，真是莫名其妙。",
    "grade": "五年级"
  },
  {
    "id": 97,
    "type": "成语",
    "text": "异想天开",
    "pinyin": "yì xiǎng tiān kāi",
    "meaning": "形容想法非常奇怪。",
    "example": "这个发明真是异想天开。",
    "grade": "五年级"
  },
  {
    "id": 98,
    "type": "成语",
    "text": "随心所欲",
    "pinyin": "suí xīn suǒ yù",
    "meaning": "随着自己的意思，想干什么就干什么。",
    "example": "在图书馆不能随心所欲地大声说话。",
    "grade": "六年级"
  },
  {
    "id": 99,
    "type": "成语",
    "text": "排山倒海",
    "pinyin": "pái shān dǎo hǎi",
    "meaning": "形容力量强盛，声势浩大。",
    "example": "洪水以排山倒海之势冲来。",
    "grade": "六年级"
  },
  {
    "id": 100,
    "type": "成语",
    "text": "惊天动地",
    "pinyin": "jīng tiān dòng dì",
    "meaning": "形容声音响亮或事业伟大。",
    "example": "这是一项惊天动地的事业。",
    "grade": "五年级"
  },
  {
    "id": 101,
    "type": "成语",
    "text": "翻天覆地",
    "pinyin": "fān tiān fù dì",
    "meaning": "形容变化巨大而彻底。",
    "example": "家乡发生了翻天覆地的变化。",
    "grade": "六年级"
  },
  {
    "id": 102,
    "type": "成语",
    "text": "震耳欲聋",
    "pinyin": "zhèn ěr yù lóng",
    "meaning": "形容声音很大，耳朵都快震聋了。",
    "example": "会场上响起了震耳欲聋的掌声。",
    "grade": "六年级"
  },
  {
    "id": 103,
    "type": "成语",
    "text": "斩钉截铁",
    "pinyin": "zhǎn dīng jié tiě",
    "meaning": "形容说话办事坚决果断。",
    "example": "他斩钉截铁地说: 我一定能行!",
    "grade": "六年级"
  },
  {
    "id": 104,
    "type": "成语",
    "text": "别出心裁",
    "pinyin": "bié chū xīn cái",
    "meaning": "另有一种构思或设计，与众不同。",
    "example": "他的设计别出心裁。",
    "grade": "六年级"
  },
  {
    "id": 105,
    "type": "成语",
    "text": "别具一格",
    "pinyin": "bié jù yī gé",
    "meaning": "另有一种独特的风格。",
    "example": "这栋建筑的造型别具一格。",
    "grade": "六年级"
  },
  {
    "id": 106,
    "type": "成语",
    "text": "不拘一格",
    "pinyin": "bù jū yī gé",
    "meaning": "不局限于一种规格或方式。",
    "example": "选拔人才要不拘一格。",
    "grade": "六年级"
  },
  {
    "id": 107,
    "type": "成语",
    "text": "不翼而飞",
    "pinyin": "bù yì ér fēi",
    "meaning": "没有翅膀却飞走了，形容东西突然丢失。",
    "example": "我的橡皮怎么不翼而飞了？",
    "grade": "五年级"
  },
  {
    "id": 108,
    "type": "成语",
    "text": "川流不息",
    "pinyin": "chuān liú bù xī",
    "meaning": "形容行人、车马等像水流一样连续不断。",
    "example": "马路上车流川流不息。",
    "grade": "四年级"
  },
  {
    "id": 109,
    "type": "成语",
    "text": "成千上万",
    "pinyin": "chéng qiān shàng wàn",
    "meaning": "形容数量非常多。",
    "example": "成千上万的人来参观展览。",
    "grade": "三年级"
  },
  {
    "id": 110,
    "type": "成语",
    "text": "不计其数",
    "pinyin": "bù jì qí shù",
    "meaning": "没法计算数目，形容很多。",
    "example": "天上的星星不计其数。",
    "grade": "四年级"
  },
  {
    "id": 111,
    "type": "成语",
    "text": "目不转睛",
    "pinyin": "mù bù zhuǎn jīng",
    "meaning": "眼珠子一动不动地盯着看，形容注意力集中。",
    "example": "他目不转睛地看着黑板。",
    "grade": "四年级"
  },
  {
    "id": 112,
    "type": "成语",
    "text": "目不暇接",
    "pinyin": "mù bù xiá jiē",
    "meaning": "东西太多，眼睛看不过来。",
    "example": "商场里的商品让人目不暇接。",
    "grade": "五年级"
  },
  {
    "id": 113,
    "type": "成语",
    "text": "赏心悦目",
    "pinyin": "shǎng xīn yuè mù",
    "meaning": "看到美好的景色而心情愉快。",
    "example": "这幅画让人赏心悦目。",
    "grade": "六年级"
  },
  {
    "id": 114,
    "type": "成语",
    "text": "耳目一新",
    "pinyin": "ěr mù yī xīn",
    "meaning": "听到的、看到的跟以前完全不同。",
    "example": "新装修的教室让人耳目一新。",
    "grade": "五年级"
  },
  {
    "id": 115,
    "type": "成语",
    "text": "滔滔不绝",
    "pinyin": "tāo tāo bù jué",
    "meaning": "形容话多，连续不断。",
    "example": "他滔滔不绝地讲了一个小时。",
    "grade": "五年级"
  },
  {
    "id": 116,
    "type": "成语",
    "text": "口若悬河",
    "pinyin": "kǒu ruò xuán hé",
    "meaning": "讲起话来滔滔不绝，像瀑布一样。",
    "example": "他口若悬河，大家都听呆了。",
    "grade": "六年级"
  },
  {
    "id": 117,
    "type": "成语",
    "text": "侃侃而谈",
    "pinyin": "kǎn kǎn ér tán",
    "meaning": "理直气壮、从容不迫地说话。",
    "example": "他侃侃而谈，大家都信服了。",
    "grade": "六年级"
  },
  {
    "id": 118,
    "type": "成语",
    "text": "大步流星",
    "pinyin": "dà bù liú xīng",
    "meaning": "形容步子跨得大，走得快。",
    "example": "他大步流星地走向教室。",
    "grade": "五年级"
  },
  {
    "id": 119,
    "type": "成语",
    "text": "健步如飞",
    "pinyin": "jiàn bù rú fēi",
    "meaning": "脚步轻快得像飞一样。",
    "example": "爷爷虽然年纪大了，走起路来却健步如飞。",
    "grade": "五年级"
  },
  {
    "id": 120,
    "type": "成语",
    "text": "身强力壮",
    "pinyin": "shēn qiáng lì zhuàng",
    "meaning": "形容身体强壮有力。",
    "example": "他身强力壮，干起活来毫不费力。",
    "grade": "四年级"
  },
  {
    "id": 121,
    "type": "成语",
    "text": "英姿飒爽",
    "pinyin": "yīng zī sà shuǎng",
    "meaning": "形容英俊威武、精神焕发的样子。",
    "example": "女兵们英姿飒爽地走过检阅台。",
    "grade": "六年级"
  },
  {
    "id": 201,
    "type": "谚语",
    "text": "一寸光阴一寸金，寸金难买寸光阴",
    "pinyin": "yī cùn guāng yīn yī cùn jīn，cùn jīn nán mǎi cùn guāng yīn",
    "meaning": "时间比金钱更宝贵。",
    "example": "一寸光阴一寸金，寸金难买寸光阴，我们要珍惜时间。",
    "grade": "三年级"
  },
  {
    "id": 202,
    "type": "谚语",
    "text": "一年之计在于春，一日之计在于晨",
    "pinyin": "yī nián zhī jì zài yú chūn，yī rì zhī jì zài yú chén",
    "meaning": "一年的计划在春天就要安排好，一天的计划在早晨就要安排好。",
    "example": "一年之计在于春，一日之计在于晨，早上要好好读书。",
    "grade": "三年级"
  },
  {
    "id": 203,
    "type": "谚语",
    "text": "谦虚使人进步，骄傲使人落后",
    "pinyin": "qiān xū shǐ rén jìn bù，jiāo ào shǐ rén luò hòu",
    "meaning": "要谦虚不要骄傲。",
    "example": "谦虚使人进步，骄傲使人落后，我们要时刻记住这句话。",
    "grade": "三年级"
  },
  {
    "id": 204,
    "type": "谚语",
    "text": "三人行，必有我师焉",
    "pinyin": "sān rén xíng，bì yǒu wǒ shī yān",
    "meaning": "几个人一起走路，其中一定有可以做我老师的人。",
    "example": "三人行，必有我师焉，要虚心向别人学习。",
    "grade": "四年级"
  },
  {
    "id": 205,
    "type": "谚语",
    "text": "读书破万卷，下笔如有神",
    "pinyin": "dú shū pò wàn juàn，xià bǐ rú yǒu shén",
    "meaning": "书读得多了，写文章就很厉害。",
    "example": "读书破万卷，下笔如有神，多读书才能写好作文。",
    "grade": "四年级"
  },
  {
    "id": 206,
    "type": "谚语",
    "text": "少壮不努力，老大徒伤悲",
    "pinyin": "shào zhuàng bù nǔ lì，lǎo dà tú shāng bēi",
    "meaning": "年轻时不努力，到老了只能后悔。",
    "example": "少壮不努力，老大徒伤悲，我们要抓紧时间学习。",
    "grade": "五年级"
  },
  {
    "id": 207,
    "type": "谚语",
    "text": "书山有路勤为径，学海无涯苦作舟",
    "pinyin": "shū shān yǒu lù qín wéi jìng，xué hǎi wú yá kǔ zuò zhōu",
    "meaning": "学习要靠勤奋和刻苦。",
    "example": "书山有路勤为径，学海无涯苦作舟，学习就要刻苦。",
    "grade": "五年级"
  },
  {
    "id": 208,
    "type": "谚语",
    "text": "千里之行，始于足下",
    "pinyin": "qiān lǐ zhī xíng，shǐ yú zú xià",
    "meaning": "远大的目标要从眼前的小事做起。",
    "example": "千里之行，始于足下，从现在开始努力吧。",
    "grade": "四年级"
  },
  {
    "id": 209,
    "type": "谚语",
    "text": "尺有所短，寸有所长",
    "pinyin": "chǐ yǒu suǒ duǎn，cùn yǒu suǒ cháng",
    "meaning": "每个人或事物都有长处和短处。",
    "example": "尺有所短，寸有所长，我们要看到自己的优点和不足。",
    "grade": "五年级"
  },
  {
    "id": 210,
    "type": "谚语",
    "text": "己所不欲，勿施于人",
    "pinyin": "jǐ suǒ bù yù，wù shī yú rén",
    "meaning": "自己不愿意的，不要强加给别人。",
    "example": "己所不欲，勿施于人，要学会换位思考。",
    "grade": "六年级"
  },
  {
    "id": 211,
    "type": "谚语",
    "text": "良药苦口利于病，忠言逆耳利于行",
    "pinyin": "liáng yào kǔ kǒu lì yú bìng，zhōng yán nì ěr lì yú xíng",
    "meaning": "好药虽苦对病有好处，真心话虽不好听对办事有帮助。",
    "example": "良药苦口利于病，忠言逆耳利于行，老师的批评是为了我们好。",
    "grade": "六年级"
  },
  {
    "id": 212,
    "type": "谚语",
    "text": "吃一堑，长一智",
    "pinyin": "chī yī qiàn，zhǎng yī zhì",
    "meaning": "受一次挫折，长一分见识。",
    "example": "吃一堑，长一智，这次失败让我们学到了很多。",
    "grade": "四年级"
  },
  {
    "id": 213,
    "type": "谚语",
    "text": "百闻不如一见",
    "pinyin": "bǎi wén bù rú yī jiàn",
    "meaning": "听别人说一百次，不如自己亲眼见一次。",
    "example": "百闻不如一见，长城比想象的更壮观。",
    "grade": "三年级"
  },
  {
    "id": 214,
    "type": "谚语",
    "text": "世上无难事，只怕有心人",
    "pinyin": "shì shàng wú nán shì，zhǐ pà yǒu xīn rén",
    "meaning": "只要肯下决心做，任何困难都能克服。",
    "example": "世上无难事，只怕有心人，只要我们努力一定能成功。",
    "grade": "四年级"
  },
  {
    "id": 215,
    "type": "谚语",
    "text": "冰冻三尺，非一日之寒",
    "pinyin": "bīng dòng sān chǐ，fēi yī rì zhī hán",
    "meaning": "事物的形成需要一个过程。",
    "example": "冰冻三尺非一日之寒，他的成功是长期努力的结果。",
    "grade": "五年级"
  },
  {
    "id": 216,
    "type": "谚语",
    "text": "近朱者赤，近墨者黑",
    "pinyin": "jìn zhū zhě chì，jìn mò zhě hēi",
    "meaning": "接近好人可以使人变好，接近坏人可以使人变坏。",
    "example": "近朱者赤，近墨者黑，我们要多交好朋友。",
    "grade": "五年级"
  },
  {
    "id": 217,
    "type": "歇后语",
    "text": "哑巴吃黄连——有苦说不出",
    "meaning": "心中有苦却说不出来的无奈。",
    "grade": "四年级"
  },
  {
    "id": 218,
    "type": "歇后语",
    "text": "竹篮打水——一场空",
    "meaning": "白费力气，没有收获。",
    "grade": "三年级"
  },
  {
    "id": 219,
    "type": "歇后语",
    "text": "王婆卖瓜——自卖自夸",
    "meaning": "自己夸自己。",
    "grade": "四年级"
  },
  {
    "id": 220,
    "type": "歇后语",
    "text": "泥菩萨过江——自身难保",
    "meaning": "自己都顾不了自己。",
    "grade": "四年级"
  },
  {
    "id": 221,
    "type": "歇后语",
    "text": "芝麻开花——节节高",
    "meaning": "越来越好，步步高升。",
    "grade": "三年级"
  },
  {
    "id": 222,
    "type": "歇后语",
    "text": "外甥打灯笼——照旧（舅）",
    "meaning": "和原来一样，没有变化。",
    "grade": "五年级"
  },
  {
    "id": 223,
    "type": "歇后语",
    "text": "小葱拌豆腐——一清二白",
    "meaning": "事情很清楚明白。",
    "grade": "三年级"
  },
  {
    "id": 224,
    "type": "歇后语",
    "text": "肉包子打狗——有去无回",
    "meaning": "一去不复返，白费力气。",
    "grade": "五年级"
  },
  {
    "id": 225,
    "type": "歇后语",
    "text": "千里送鹅毛——礼轻情意重",
    "meaning": "礼物虽轻但情意很重。",
    "grade": "四年级"
  },
  {
    "id": 226,
    "type": "歇后语",
    "text": "姜太公钓鱼——愿者上钩",
    "meaning": "心甘情愿上当。",
    "grade": "五年级"
  },
  {
    "id": 227,
    "type": "歇后语",
    "text": "狗咬吕洞宾——不识好人心",
    "meaning": "把好人心意当做恶意。",
    "grade": "五年级"
  },
  {
    "id": 228,
    "type": "歇后语",
    "text": "猪八戒照镜子——里外不是人",
    "meaning": "两面都不讨好。",
    "grade": "五年级"
  },
  {
    "id": 229,
    "type": "歇后语",
    "text": "孙悟空的金箍棒——能大能小",
    "meaning": "形容灵活多变。",
    "grade": "四年级"
  },
  {
    "id": 230,
    "type": "歇后语",
    "text": "孔夫子搬家——尽是书（输）",
    "meaning": "全是输。",
    "grade": "五年级"
  },
  {
    "id": 231,
    "type": "歇后语",
    "text": "老虎的屁股——摸不得",
    "meaning": "不能招惹。",
    "grade": "四年级"
  },
  {
    "id": 232,
    "type": "歇后语",
    "text": "黄鼠狼给鸡拜年——没安好心",
    "meaning": "表面上友善，实际上不怀好意。",
    "grade": "四年级"
  },
  {
    "id": 233,
    "type": "歇后语",
    "text": "十五个吊桶打水——七上八下",
    "meaning": "心里不安，很紧张。",
    "grade": "三年级"
  },
  {
    "id": 234,
    "type": "歇后语",
    "text": "打破砂锅——问（纹）到底",
    "meaning": "追究事情的根底。",
    "grade": "五年级"
  },
  {
    "id": 235,
    "type": "歇后语",
    "text": "热锅上的蚂蚁——团团转",
    "meaning": "形容焦急不安。",
    "grade": "四年级"
  },
  {
    "id": 236,
    "type": "歇后语",
    "text": "八仙过海——各显神通",
    "meaning": "各自施展本领。",
    "grade": "五年级"
  },
  {
    "id": 237,
    "type": "歇后语",
    "text": "对牛弹琴——白费劲",
    "meaning": "对不懂道理的人讲道理是白费力气。",
    "grade": "四年级"
  },
  {
    "id": 238,
    "type": "歇后语",
    "text": "飞蛾扑火——自取灭亡",
    "meaning": "自己找死。",
    "grade": "六年级"
  },
  {
    "id": 239,
    "type": "歇后语",
    "text": "鸡蛋碰石头——不自量力",
    "meaning": "过高估计自己的力量。",
    "grade": "四年级"
  },
  {
    "id": 240,
    "type": "歇后语",
    "text": "猫哭老鼠——假慈悲",
    "meaning": "假装同情。",
    "grade": "五年级"
  },
  {
    "id": 241,
    "type": "歇后语",
    "text": "铁公鸡——一毛不拔",
    "meaning": "形容非常吝啬。",
    "grade": "五年级"
  },
  {
    "id": 242,
    "type": "歇后语",
    "text": "兔子尾巴——长不了",
    "meaning": "时间不会长。",
    "grade": "三年级"
  },
  {
    "id": 243,
    "type": "歇后语",
    "text": "秀才遇到兵——有理说不清",
    "meaning": "跟不懂道理的人讲不清道理。",
    "grade": "六年级"
  },
  {
    "id": 244,
    "type": "歇后语",
    "text": "瞎子点灯——白费蜡",
    "meaning": "白费力气。",
    "grade": "五年级"
  },
  {
    "id": 245,
    "type": "歇后语",
    "text": "丈二和尚——摸不着头脑",
    "meaning": "弄不清楚是怎么回事。",
    "grade": "五年级"
  }
];
