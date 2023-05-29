document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("button");
  const textSubmit = document.getElementById("text");
  const resultaat = document.getElementById("result");

  button.addEventListener("click", () => {
    const str = textSubmit.value;
    function capitalWord(str) {
      let text = "";

      for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
          text += " ";
        } else if (i % 2 === 1) {
          text += str[i].toUpperCase();
        } else {
          text += str[i];
        }
      }
      return text;
    }
    resultaat.innerHTML = capitalWord(str);
  });
});
