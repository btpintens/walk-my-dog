// Emre's notes from presentation
// - It is a unique game, a great idea
// - The app doesn’t fully fit the page
// - Hints are great
// - Good color pallete
// - You can leave more comments on code to describe what’s going on
// - Code organization, try using the commented sections (Functions, Event Handlers, Caching Vars, Vars, Consts)

/*------------------------ Cached Element References ------------------------*/
const dog = document.querySelector(".hover-trigger");
const dogFour = document.querySelector(".hover-trigger-two");
const dogHint = document.querySelector(".hover-content");
const dogHintTwo = document.querySelector(".hover-content-two");
const treatBtn = document.querySelector("#treats");
const bagsBtn = document.querySelector("#bags");
const leashBtn = document.querySelector("#leash");
const money = document.querySelector("#money");
const failDiv = document.querySelector("#fail");
const walkEl = document.querySelector(".walk-button");
const pageTwoPrompt = document.querySelector(".page-two");
const correctTwo = document.querySelector("#correct-two");
const choicesTwo = document.querySelector(".choices-two");
const wrongTwo = document.querySelectorAll(".two-fail");
const failDivTwo = document.querySelector("#fail-two");
const pageThreePrompt = document.querySelector(".page-three");
const correctThree = document.querySelector("#correct-three");
const choicesThree = document.querySelector(".choices-three");
const wrongThreeA = document.querySelector(".three-fail-a");
const wrongThreeB = document.querySelector(".three-fail-b");
const failDivThreeA = document.querySelector("#fail-three-a");
const failDivThreeB = document.querySelector("#fail-three-b");
const pageFourPrompt = document.querySelector(".page-four");
const choicesFour = document.querySelector(".choices-four");
const wrongFour = document.querySelectorAll(".four-fail");
const failDivFour = document.querySelector("#fail-four");
const correctFour = document.querySelector("#correct-four");
const gameFailMsg = document.querySelector("#game-fail");
const winning = document.querySelector("#winner");
const restart = document.querySelector("#restartButton");
const leashEl = document.querySelector("#leash");
const bagEl = document.querySelector("#bags");
const treatEl = document.querySelector("#treats");

const imageOne = document.querySelector(".first-dog");
const imageTwo = document.querySelector(".second-dog");
const imageThree = document.querySelector(".third-dog");
const imageFour = document.querySelector(".fourth-dog");

const dogBioOne = document.querySelector(".dog-one");
const dogBioTwo = document.querySelector(".dog-two");
const dogBioThree = document.querySelector(".dog-three");

/*-------------------------------- Variables --------------------------------*/
const tools = { Leash: 2, Bags: 2, Treats: 3, Money: 5 };

setInterval(() => {
  console.log("running", tools);
  if (tools.Leash === 0 || tools.Bags === 0 || tools.Treats === 0) {
    gameFailMsg.style.display = "block";
  }

  checkCombo();
}, 1000);

/*-------------------------------- Functions --------------------------------*/
wrongTwo.forEach((wrong) => {
  wrong.addEventListener("click", () => {
    failDivTwo.style.display = "block";
  });
});

if (tools.Treats <= 2 && tools.Bags === 1) {
  walkEl.disabled = false;
}

const checkCombo = () => {
  const choicesFourButtons = choicesFour.querySelectorAll("button");
  if (tools.Leash === 1 && tools.Bags === 1 && tools.Treats === 1) {
    choicesFourButtons.forEach((btn) => {
      btn.disabled = false;
    });
  }
};

/*----------------------------- Event Listeners -----------------------------*/

treatEl.addEventListener("click", () => {
  if (tools.Treats > 0) {
    tools.Treats -= 1;
    treatBtn.textContent = `Treats: ${tools.Treats}`;
  }
  if (tools.Treats <= 2) {
    walkEl.disabled = false;
  }

  if (tools.Treats === 0) {
    failDiv.style.display = "block";
  }
});

walkEl.addEventListener("click", () => {
  document.querySelector("h1").classList.add("hidden");
  document.querySelector("h2").classList.add("hidden");
  imageOne.classList.add("hidden");
  dogBioOne.classList.add("visible");
  choicesTwo.classList.remove("hidden");
  pageTwoPrompt.classList.remove("hidden");
  imageTwo.classList.remove("hidden");
  walkEl.classList.add("hidden");
  money.textContent = `Money: ${(tools.Money = +5)}`;
  dog.removeEventListener("mouseover", dogMouseOver);
});

bagEl.addEventListener("click", () => {
  if (tools.Bags > 0) {
    tools.Bags -= 1;
    bagsBtn.textContent = `Bags: ${tools.Bags}`;
    if (tools.Bags === 1) {
      correctTwo.disabled = false;
      wrongTwo.forEach((wrong) => {
        wrong.disabled = false;
      });
    }
  }
});

correctTwo.addEventListener("click", () => {
  choicesTwo.classList.add("hidden");
  pageTwoPrompt.classList.add("hidden");
  imageTwo.classList.add("hidden");
  dogBioOne.classList.remove("visible");
  money.textContent = `Money: ${(tools.Money += 5)}`;
  imageThree.classList.remove("hidden");
  dogBioTwo.classList.add("visible");
  pageThreePrompt.classList.remove("hidden");
  choicesThree.classList.remove("hidden");
});

leashEl.addEventListener("click", () => {
  if (tools.Leash > 0) {
    tools.Leash -= 1;
    leashBtn.textContent = `Leash: ${tools.Leash}`;
  }
  if (tools.Leash <= 2) {
    correctThree.disabled = false;
    wrongThreeA.disabled = false;
    wrongThreeB.disabled = false;
  }
});

wrongThreeA.addEventListener("click", () => {
  failDivThreeA.style.display = "block";
});

wrongThreeB.addEventListener("click", () => {
  failDivThreeB.style.display = "block";
});

correctThree.addEventListener("click", () => {
  choicesThree.classList.add("hidden");
  pageThreePrompt.classList.add("hidden");
  imageThree.classList.add("hidden");
  dogBioTwo.classList.remove("hidden");
  money.textContent = `Money: ${(tools.Money += 5)}`;
  pageFourPrompt.classList.remove("hidden");
  choicesFour.classList.remove("hidden");
  imageFour.classList.remove("hidden");
  dogBioThree.style.display = "block";
});

dogFour.addEventListener("mouseover", () => {
  dogHintTwo.style.display = "block";
});

dogFour.addEventListener("mouseout", () => {
  dogHintTwo.style.display = "none";
});

dog.addEventListener("mouseover", () => {
  dogHint.style.display = "block";
  treatBtn.style.boxShadow = "rgb(0, 255, 255) 0 0 15px 5px";
});

dog.addEventListener("mouseout", () => {
  dogHint.style.display = "none";
  treatBtn.style.boxShadow = "";
});

wrongFour.forEach((four) => {
  four.addEventListener("click", () => {
    failDivFour.style.display = "block";
  });
});

correctFour.addEventListener("click", () => {
  money.textContent = `Money: ${[(tools.Money += 5)]}`;
  winning.style.display = "block";
});

restart.addEventListener("click", function () {
  window.location.reload();
  return false;
});
