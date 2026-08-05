/* ========================================
   Web Speech API - 汉字朗读
   ======================================== */

const TTS = {
  speaking: false,

  speak(text, rate = 0.85) {
    if (!window.speechSynthesis) return;
    
    // 停止当前朗读
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN';
    utterance.rate = rate;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    // 尝试选择中文语音
    const voices = window.speechSynthesis.getVoices();
    const zhVoice = voices.find(v => v.lang.startsWith('zh'));
    if (zhVoice) utterance.voice = zhVoice;

    this.speaking = true;
    utterance.onend = () => { this.speaking = false; };
    utterance.onerror = () => { this.speaking = false; };

    window.speechSynthesis.speak(utterance);
  },

  speakChar(char, words = []) {
    // 朗读汉字及其组词
    let text = char;
    if (words.length > 0) {
      text += '，组词：' + words.join('，');
    }
    this.speak(text);
  },

  speakSentence(sentence) {
    this.speak(sentence, 0.75);
  },

  stop() {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      this.speaking = false;
    }
  },
};

// 预加载语音列表
if (window.speechSynthesis) {
  window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
  };
}
