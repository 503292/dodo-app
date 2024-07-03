const synth = window.speechSynthesis;
let voices;

// speechSynthesis.addEventListener('voiceschanged', () => {
//   voices = speechSynthesis.getVoices();
// });
speechSynthesis.onvoiceschanged = () => {
  voices = speechSynthesis.getVoices();
};
function getRandINDEX() {
  const INDEXES = [106, 134, 142, 158, 159, 160];
  return INDEXES[Math.floor(Math.random() * INDEXES.length)];
}

export const speakEN = (text, setIsSpeakEN) => {
  const voiceEn = voices[getRandINDEX()];
  const msg = new SpeechSynthesisUtterance();
  msg.voice = voiceEn;
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
  msg.onend = function() {
    setIsSpeakUA(false);
  };
  synth.speak(msg);
};
// export const speakUA = (text, setIsSpeakUA) => {
//   const voicesUA = filterByLang(voices, 'uk-UA')[0];
//   const utterThis = new SpeechSynthesisUtterance(text);
//   utterThis.voice = voicesUA;
//   utterThis.onend = function() {
//     setIsSpeakUA(false);
//   };
//   synth.speak(utterThis);
// };

function filterByLang(array, langValue) {
  return array?.filter(item => item.lang === langValue);
}
