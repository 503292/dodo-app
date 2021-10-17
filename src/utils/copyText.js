// copy text to navigator.clipboard
const copyText = text => {
  navigator.clipboard.writeText(text);
};

export default copyText;
