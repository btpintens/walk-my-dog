//HOME PAGE
// DISPLAY ELEMENT: introductory message with image of dog and
// instructions of how to walk (what you'll encounter along the way)
//BUTTON start walk button addEventListener

//ICON/IMAGE table that lists tools (leash, bags, treats) we have
//and how much money earned.
//

const dog = document.querySelector(".hover-trigger");
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
const failDivFour = document.querySelector(".fail-four");
const correctFour = document.querySelector("#correct-four");
const gameFailMsg = document.querySelector("#game-fail");
const winning = document.querySelector("#winner");

const tools = { Leash: 2, Bags: 2, Treats: 3, Money: 5 };

const checkComboFail = true;

setInterval(() => {
  console.log("running", tools);
  if (tools.Leash === 0 || tools.Bags === 0 || tools.Treats === 0) {
    gameFailMsg.style.display = "block";
  }

  checkCombo();
}, 1000);

const dogMouseOver = () => {
  dogHint.style.display = "block";
  treatBtn.style.boxShadow = "rgb(0, 255, 255) 0 0 15px 5px";
};

const dogMouseOverTwo = () => {
  dogHintTwo.style.display = "block";
};

dog.addEventListener("mouseover", dogMouseOver);

dog.addEventListener("mouseout", () => {
  dogHint.style.display = "none";
  treatBtn.style.boxShadow = "";
});

//select treat
//enable walkBtn
const treatEl = document.querySelector("#treats");
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

//   // Might need another condition such as choices-two is also not disabled
//   if (walkEl.disabled) {
//     // call checkCombo function somewhere here
//   }
});

//select walkBtn
//hide page 1 elements
//display page 2

walkEl.addEventListener("click", () => {
  document.querySelector("h1").classList.add("hidden");
  document.querySelector("h2").classList.add("hidden");
  choicesTwo.classList.remove("hidden");
  pageTwoPrompt.classList.remove("hidden");
  walkEl.classList.add("hidden");
  //walkEl.disabled = true;
  money.textContent = `Money: ${(tools.Money = +5)}`;
  dog.removeEventListener("mouseover", dogMouseOver);
});

//select bagBtn (correct answer)
//enable choices to click
const bagEl = document.querySelector("#bags");
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
//chose wrong
//fail message
wrongTwo.forEach((wrong) => {
  wrong.addEventListener("click", () => {
    failDivTwo.style.display = "block";
  });
});

if (tools.Treats <= 2 && tools.Bags === 1) {
  walkEl.disabled = false;
}
//select correct answer
//hide page 2 elements
//display page 3 elements

correctTwo.addEventListener("click", () => {
  choicesTwo.classList.add("hidden");
  pageTwoPrompt.classList.add("hidden");
  money.textContent = `Money: ${(tools.Money += 5)}`;
  pageThreePrompt.classList.remove("hidden");
  choicesThree.classList.remove("hidden");
});

//page 3 prompt
//select leash button
//enables page 3 choices

const leashEl = document.querySelector("#leash");
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

//fail message

wrongThreeA.addEventListener("click", () => {
  failDivThreeA.style.display = "block";
  let;
});
wrongThreeB.addEventListener("click", () => {
  failDivThreeB.style.display = "block";
});

//correct answer
//hide page 3 prompt
//hide page 3 choices
//display page 4 prompt
//display page 4 answers

correctThree.addEventListener("click", () => {
  choicesThree.classList.add("hidden");
  pageThreePrompt.classList.add("hidden");
  money.textContent = `Money: ${(tools.Money += 5)}`;
  pageFourPrompt.classList.remove("hidden");
  choicesFour.classList.remove("hidden");
  dog.addEventListener("mouseover", dogMouseOverTwo);
  dog.addEventListener("mouseout", () => {
    dogHintTwo.style.display = "none";
  });
});

const checkCombo = () => {
  const choicesFourButtons = choicesFour.querySelectorAll("button");
  if (tools.Leash === 1 && tools.Bags === 1 && tools.Treats === 1) {
    choicesFourButtons.forEach((btn) => {
      btn.disabled = false;
    });
  }
};

// wrongFour.addEventListener("click", () => {
//   failDivFour.classList.remove("hidden");
// });

correctFour.addEventListener("click", () => {
  money.textContent = `Money: ${[(tools.Money += 5)]}`;
  winning.classList.remove("hidden");
});
