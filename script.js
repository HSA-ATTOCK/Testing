document.addEventListener("DOMContentLoaded", function () {
  const paragraphInput = document.getElementById("paragraph");

  const totalCharsSpan = document.getElementById("totalChars");
  const lettersSpan = document.getElementById("letters");
  const digitsSpan = document.getElementById("digits");
  const spacesSpan = document.getElementById("spaces");
  const dotsSpan = document.getElementById("dots");
  const specialCharsSpan = document.getElementById("specialChars");
  const wordsSpan = document.getElementById("words");

  paragraphInput.addEventListener("input", function () {
    const text = paragraphInput.value;

    let letters = 0;
    let digits = 0;
    let spaces = 0;
    let dots = 0;
    let specialChars = 0;

    for (let char of text) {
      if (/[a-zA-Z]/.test(char)) {
        letters++;
      } else if (/[0-9]/.test(char)) {
        digits++;
      } else if (char === " ") {
        spaces++;
      } else if (char === ".") {
        dots++;
      } else {
        specialChars++;
      }
    }

    const words = text.trim().length > 0 ? text.trim().split(/\s+/).length : 0;

    totalCharsSpan.textContent = text.length;
    lettersSpan.textContent = letters;
    digitsSpan.textContent = digits;
    spacesSpan.textContent = spaces;
    dotsSpan.textContent = dots;
    specialCharsSpan.textContent = specialChars;
    wordsSpan.textContent = words;
  });
});
