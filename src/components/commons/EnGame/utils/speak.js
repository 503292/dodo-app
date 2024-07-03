const synth = window.speechSynthesis;
let voices;

speechSynthesis.onvoiceschanged = () => {
  voices = speechSynthesis.getVoices();
};

export const speakEN = (text, setIsSpeakEN) => {
  const voiceEn = voices[getRandINDEX()];
  const msg = new SpeechSynthesisUtterance();
  msg.voice = voiceEn;
  msg.lang = 'en-US';
  msg.text = text;

  msg.onend = function() {
    setIsSpeakEN(false);
  };
  synth.speak(msg);
};
export const speakUA = (text, setIsSpeakUA) => {
  const voicesUA = filterByLang(voices, 'uk-UA')[0];
  const msg = new SpeechSynthesisUtterance();
  msg.voice = voicesUA;
  msg.text = text;
  msg.lang = 'uk-UA';
  msg.onend = function() {
    setIsSpeakUA(false);
  };
  synth.speak(msg);
};

function getRandINDEX() {
  const INDEXES = [106, 134, 142, 158, 159, 160];
  return INDEXES[Math.floor(Math.random() * INDEXES.length)];
}

function filterByLang(array, langValue) {
  return array?.filter(item => item.lang === langValue);
}
