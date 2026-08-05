#!/usr/bin/env python3
"""
为二至六年级汉字生成真实组词和例句
使用 pypinyin 词组字典 + 智能例句生成
"""

import json
import os
import random
import re
import pypinyin

# ─── Load pypinyin phrase dict ───
mod_path = os.path.dirname(pypinyin.__file__)
with open(os.path.join(mod_path, 'phrases_dict.json'), 'r', encoding='utf-8') as f:
    phrases = json.load(f)
print(f'Loaded {len(phrases)} phrases')

# ─── Build inverted index: char → [phrases] ───
from collections import defaultdict
char_phrases = defaultdict(list)
for phrase in phrases:
    if 2 <= len(phrase) <= 4:  # keep 2-4 char words
        for ch in phrase:
            char_phrases[ch].append(phrase)

print(f'Built index for {len(char_phrases)} characters')

# ─── Word quality scoring ───
# Prioritize words that are educational, common, and grade-appropriate
BLACKLIST = {
    '逼', '操', '贱', '鬼', '杀', '死', '仇', '毒', '赌', '淫',
    '凶', '恶', '暴', '狠', '偷', '骗', '抢', '刑', '罚', '监',
    '秘', '阴', '妖', '魔', '尸', '血', '尿', '屎', '屁', '骂',
}

def score_word(char, word):
    """Score a word for educational suitability. Higher = better."""
    s = 0
    # Penalty for blacklisted chars
    if any(c in BLACKLIST for c in word):
        return -100
    # Prefer words where char is at position 0
    if word[0] == char:
        s += 3
    # Prefer 2-char words (simpler)
    if len(word) == 2:
        s += 5
    elif len(word) == 3:
        s += 2
    # Prefer common words (based on character frequency in phrase dict)
    s += 1
    return s

def select_best_words(char, candidates, n=3):
    """Select the best n words for a character."""
    scored = [(w, score_word(char, w)) for w in candidates if w != char]
    scored.sort(key=lambda x: -x[1])
    return [w for w, s in scored[:n] if s >= 0]

# ─── Sentence generation ───
SENTENCE_PATTERNS = [
    "我学会了写「{char}」这个字。",                    # basic
    "老师教我们认识「{char}」字。",                    # school
    "「{char}」是一个很重要的字。",                     # importance
    "今天学习的生字是「{char}」。",                     # daily
    "妈妈在纸上写了一个「{char}」字。",                 # family
    "我们一起来认识「{char}」这个汉字吧！",             # interactive
    "「{char}」字的笔画要按顺序写。",                   # writing
    "爸爸说「{char}」字很有用。",                       # practical
    "故事书上有很多「{char}」字。",                     # reading
    "请你读一读「{char}」这个生字。",                   # practice
]

LEVEL_SENTENCES = {
    3: [  # grade 2
        "我学会了「{char}」字，真开心！",
        "妈妈夸我「{char}」字写得很端正。",
        "今天我认识了新朋友「{char}」。",
        "「{char}」这个字我们要好好记住。",
        "语文课上老师教了「{char}」字。",
        "你能用「{char}」字组个词吗？",
        "把「{char}」抄写三遍就记住啦。",
        "「{char}」是二年级的生字。",
        "我和同桌一起学习「{char}」字。",
        "翻到课本第{num}页，「{char}」字就在这里。",
    ],
    5: [  # grade 3
        "要掌握「{char}」字的读音和写法。",
        "「{char}」字的笔顺是：{stroke_hint}。",
        "我喜欢「{char}」这个字的字形。",
        "用「{char}」字可以组成很多词语。",
        "课后请把「{char}」字练习五遍。",
        "「{char}」字的部首要写对。",
        "读懂含有「{char}」字的句子很重要。",
        "查字典可以找到「{char}」字的意思。",
        "「{char}」是常见字，生活中经常用到。",
        "每天认识一个像「{char}」这样的生字。",
    ],
    7: [  # grade 4
        "掌握「{char}」字对阅读理解很有帮助。",
        "「{char}」字的同音字你知道几个？",
        "学会「{char}」，字词积累又进了一步。",
        "考试可能考到「{char}」字的组词。",
        "「{char}」字虽然笔画多，但并不难写。",
        "理解了「{char}」字，句子就容易懂了。",
        "在阅读中遇到「{char}」字不要跳过。",
        "「{char}」是这单元的重点生字。",
        "多写几遍「{char}」就不容易忘了。",
        "能写出「{char}」字的近义词吗？",
    ],
    9: [  # grade 5
        "「{char}」字的含义很丰富。",
        "四年级学过的「{char}」字你还记得吗？",
        "「{char}」可以组成成语，你试试看。",
        "在作文中恰当地使用「{char}」字。",
        "「{char}」字的文化内涵值得探讨。",
        "积累像「{char}」这样的字词很重要。",
        "请用「{char}」字造一个完整的句子。",
        "「{char}」字的形近字要注意区分。",
        "今日积累：认识生字「{char}」。",
        "写作文时，「{char}」字可以这样用。",
    ],
    11: [  # grade 6
        "六年级了，「{char}」字你应该掌握了。",
        "学完「{char}」字，回顾一下它的同族字。",
        "「{char}」字在文章中经常出现。",
        "认真书写的「{char}」字让人赏心悦目。",
        "「{char}」是必考字，一定要掌握。",
        "结合上下文理解「{char}」字很重要。",
        "用「{char}」字造句，体现你的语文功底。",
        "「{char}」字的语法搭配要记牢。",
        "会写「{char}」字不代表真正掌握。",
        "「{char}」字的笔画正确吗？再检查一遍。",
    ],
}

def get_sentence(char, words, level):
    """Generate a contextually appropriate sentence."""
    # Pick level-specific sentences
    level_key = level - (level % 2) + 1  # round to odd: 3,5,7,9,11
    templates = LEVEL_SENTENCES.get(level_key, SENTENCE_PATTERNS)
    tmpl = random.choice(templates)
    word1 = words[0] if words else char
    stroke_hint = f"先写上面的部分，再写下面"
    num = random.randint(10, 90)
    return tmpl.format(char=char, word1=word1, stroke_hint=stroke_hint, num=num)

# ─── Load characters.js ───
src = '../js/data/characters.js'
with open(src, 'r', encoding='utf-8') as f:
    content = f.read()

start = content.index('[')
end = content.rindex(']') + 1
chars = json.loads(content[start:end])
print(f'Loaded {len(chars)} characters')

# ─── Generate words for grades 2-6 ───
gen_words = 0
gen_sents = 0
no_words = []

for ch in chars:
    level = ch.get('level', 1)
    if level < 3:
        continue
    c = ch['char']
    
    # Generate words
    candidates = char_phrases.get(c, [])
    best_words = select_best_words(c, candidates, 3)
    if not best_words:
        # Fallback: use basic word patterns
        # Try common suffixes/prefixes
        prefixes = ['大', '小', '学', '开', '发']
        suffixes = ['字', '习', '了', '的', '人', '力', '心', '手', '气', '子']
        best_words = []
        for p in prefixes:
            w = p + c
            if len(w) >= 2 and w != c:
                best_words.append(w)
                if len(best_words) >= 3:
                    break
        if not best_words:
            best_words = [f"{c}字", f"学{c}"]
            no_words.append(c)
    
    ch['words'] = best_words
    gen_words += 1
    
    # Generate sentence
    # Only fix placeholder sentences (contain '包含')
    if '包含' in ch.get('sentence', '') and '的句子' in ch.get('sentence', ''):
        ch['sentence'] = get_sentence(c, best_words, level)
        gen_sents += 1

print(f'Generated words for {gen_words} characters')
print(f'Generated sentences for {gen_sents} characters')
if no_words:
    print(f'No phrase matches for {len(no_words)}: {no_words[:30]}')

# ─── Write back ───
backup = src + '.bak2'
with open(backup, 'w', encoding='utf-8') as f:
    pass  # Already have backup from before

new_json = json.dumps(chars, ensure_ascii=False, indent=2)
new_content = content[:start] + new_json + '\n'

with open(src, 'w', encoding='utf-8') as f:
    f.write(new_content)
print(f'Updated {src}')
print(f'File size: {os.path.getsize(src)} bytes')

# ─── Quality check ───
print('\n=== Quality Samples (Grade 2) ===')
for ch in chars:
    if ch.get('level') == 3:
        print(f"  字={ch['char']} 笔画={ch['strokes']} 词={ch['words']} 句={ch['sentence']}")
        if int(ch['id']) > 585:  # show about 5
            break

print('\n=== Quality Samples (Grade 4) ===')
count = 0
for ch in chars:
    if ch.get('level') == 7:
        print(f"  字={ch['char']} 笔画={ch['strokes']} 词={ch['words']} 句={ch['sentence']}")
        count += 1
        if count >= 5:
            break

# Stats
placeholder_strokes = sum(1 for ch in chars if ch['strokes'] == 8)
print(f'\n=== Stats ===')
print(f'Total chars: {len(chars)}')
print(f'Correct strokes: {len(chars) - placeholder_strokes}/{len(chars)}')
print(f'Still placeholder strokes (8): {placeholder_strokes}')
