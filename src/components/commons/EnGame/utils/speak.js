const synth = window.speechSynthesis;
let voices;

speechSynthesis.addEventListener('voiceschanged', () => {
  voices = speechSynthesis.getVoices();
});
function getRandINDEX() {
  const INDEXES = [106, 134, 142, 158, 159, 160];
  return INDEXES[Math.floor(Math.random() * INDEXES.length)];
}

export const speakEN = (text, setIsSpeak) => {
  const voiceEn = voices[getRandINDEX()];
  const utterThis = new SpeechSynthesisUtterance(text);
  utterThis.voice = voiceEn;

  utterThis.onend = function() {
    setIsSpeak(false);
  };
  synth.speak(utterThis);
};
export const speakUA = text => {
  const voicesUA = filterByLang(voices, 'uk-UA')[0];
  const utterThis = new SpeechSynthesisUtterance(text);
  utterThis.voice = voicesUA;
  synth.speak(utterThis);
};

function filterByLang(array, langValue) {
  return array?.filter(item => item.lang === langValue);
}
