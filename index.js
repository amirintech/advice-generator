const adviceID = document.querySelector("#advice-id");
const adviceText = document.querySelector("#advice-text");
const getAdviceBtn = document.querySelector("#random-advice-btn");
const API_URL = "https://api.adviceslip.com/advice";

getAdviceBtn.addEventListener("click", fetchRandomAdvice);

function fetchRandomAdvice() {
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      const { id, advice } = data.slip;
      displayAdvice(id, advice);
    });
}

function displayAdvice(id, text) {
  adviceID.textContent = `Advice #${id}`;
  adviceText.textContent = text;
}
