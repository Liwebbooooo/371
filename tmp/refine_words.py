#!/usr/bin/env python3
"""精细化组词：过滤不适当词汇，优化低质量组词"""

import json, re

src = '../js/data/characters.js'
with open(src, 'r', encoding='utf-8') as f:
    content = f.read()

start = content.index('[')
end = content.rindex(']') + 1
chars = json.loads(content[start:end])
print(f'Loaded {len(chars)} chars')

# ─── Inappropriate word filters ───
INAPPROPRIATE = re.compile(
    r'(死|杀|鬼|毒|淫|盗|贼|偷|赌|嫖|妓|奸|仇|恨|凶|暴|虐|恐怖|血腥|暴力|自杀|施暴|强奸)'
)

RARE_CHARS = re.compile(r'[坳埠埠坒坓坔坕坖圪圩圬圮圯垆垇垈垉垊埇埈埉埊垚垛]')

BAD_WORDS = {
    '戴绿帽', '豕食丐衣', '垓下歌', '墒情', '墒土',
    '圩堤', '垸子', 
}

# ─── Better fallback word generation ───
COMMON_SUFFIXES = ['子', '儿', '头', '了', '着', '的', '地', '得', '人', '手', '力', '气', '生', '心', '意', '情', '学', '习', '语', '字', '书', '法', '道', '路', '物', '品', '面', '方', '名', '号', '日', '期', '时', '空', '光', '色', '形', '声', '音', '花', '草', '树', '木', '水', '火', '土', '石', '山', '河', '林', '田', '园', '野', '风', '云', '雨', '雪', '雷', '电', '天', '地', '日', '月', '星']

COMMON_PREFIXES = ['学', '大', '小', '新', '老', '好', '美', '快', '慢', '冷', '热', '高', '低', '长', '短', '清', '明', '光', '深', '浅', '红', '绿', '蓝', '白', '黑', '黄', '正', '反', '前', '后', '上', '下', '左', '右', '开', '关', '进', '出', '多', '少', '强', '弱', '轻', '重', '软', '硬', '真', '假', '对', '错', '主', '副', '生', '死', '加', '减', '乘', '除', '收', '放', '来', '去', '起', '落', '飞', '跑', '走', '坐', '站']

def generate_words(char):
    """Generate 2-3 plausible words for a character."""
    words = []
    # Try prefix + char
    for p in COMMON_PREFIXES[:20]:
        w = p + char
        if w != char and len(w) >= 2:
            words.append(w)
            if len(words) >= 2:
                break
    # Try char + suffix  
    for s in COMMON_SUFFIXES[:20]:
        w = char + s
        if w != char and len(w) >= 2 and w not in words:
            words.append(w)
            if len(words) >= 3:
                break
    if not words:
        words = [char + '字']
    return words[:3]

# ─── Process each character ───
improved = 0
for ch in chars:
    c = ch['char']
    words = ch['words']
    
    # Filter out bad words
    filtered = []
    for w in words:
        if w in BAD_WORDS:
            continue
        if INAPPROPRIATE.search(w):
            continue
        # Filter very obscure words (4+ chars or ultra-rare)
        if len(w) > 4:
            continue
        filtered.append(w)
    
    # If we filter too many, regenerate
    if len(filtered) < 2:
        gen = generate_words(c)
        remaining = [w for w in gen if w not in filtered]
        filtered = list(dict.fromkeys(filtered + remaining))  # dedupe
    
    # Cap at 3
    words = filtered[:3]
    
    if words != ch['words']:
        ch['words'] = words
        improved += 1

print(f'Improved words for {improved} characters')

# ─── Write back ───
new_json = json.dumps(chars, ensure_ascii=False, indent=2)
new_content = content[:start] + new_json + content[end:]

with open(src, 'w', encoding='utf-8') as f:
    f.write(new_content)
print(f'Updated characters.js')

# ─── Quality check ───
print('\n=== Quality samples ===')
for level, name in [(3,'G2'), (5,'G3'), (7,'G4'), (9,'G5'), (11,'G6')]:
    samples = [ch for ch in chars if ch['level'] == level][:3]
    for s in samples:
        print(f"  {name} {s['char']} 画={s['strokes']} 词={s['words']} 句={s['sentence']}")
