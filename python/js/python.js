let btns = document.querySelectorAll(".type-btn");
let chooseContainer = document.querySelector(".choose-type-container");
chooseContainer.addEventListener("click", (e) => {
  // removing all cards
  removeAllBtns();
  removeAllCards();

  // settings the new cards
  e.target.toggleAttribute("checked");
  let value = e.target.getAttribute("data-value");

  showCards(value);
});

function showCards(value) {
  document.querySelectorAll(`.card.${value}`).forEach((card) => {
    card.style.display = "flex";
  });
}

function removeAllCards() {
  document.querySelectorAll(".card").forEach((card) => {
    card.style.display = "none";
  });
}

function removeAllBtns() {
  btns.forEach((btn) => {
    btn.removeAttribute("checked");
  });
}

function resetType() {
  removeAllBtns();
  document.querySelectorAll(".card").forEach((card) => {
    card.style.display = "flex";
  });
}
