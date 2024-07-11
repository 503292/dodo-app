const synth = window.speechSynthesis;

export const speakEN = (text, setIsSpeakEN) => {
  const msg = new SpeechSynthesisUtterance();
  msg.lang = 'en-US';
  msg.text = text;

  msg.onend = function() {
    setIsSpeakEN(false);
  };
  synth.speak(msg);
};
export const speakUA = (text, setIsSpeakUA) => {
  const msg = new SpeechSynthesisUtterance();
  msg.text = text;
  msg.lang = 'uk-UA';
  msg.onend = function() {
    setIsSpeakUA(false);
  };
  synth.speak(msg);
};
