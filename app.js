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
const correctFour = document.querySelector("#correct-four")

const tools = { Leash: 2, Bags: 2, Treats: 3, Money: 5 };

dog.addEventListener("mouseover", () => {
  dogHint.style.display = "block";
  treatBtn.style.boxShadow = "rgb(0, 255, 255) 0 0 15px 5px";
});

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
});

//select walkBtn
//hide page 1 elements
//display page 2

walkEl.addEventListener("click", () => {
  document.querySelector("h1").classList.add("hidden");
  document.querySelector("h2").classList.add("hidden");
  choicesTwo.classList.remove("hidden")
  pageTwoPrompt.classList.remove("hidden")
  walkEl.classList.add("hidden")
});

//select bagBtn (correct answer)
//enable choices to click 
const bagEl = document.querySelector("#bags");
bagEl.addEventListener("click", () => {
  if (tools.Bags > 0) {
    tools.Bags -= 1;
    bagsBtn.textContent = `Bags: ${tools.Bags}`;

    if ((tools.Bags = 1)) {
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

 //select correct answer
 //hide page 2 elements
 //display page 3 elements 

correctTwo.addEventListener("click", () => {
  choicesTwo.classList.add("hidden");
  pageTwoPrompt.classList.add("hidden");
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
    pageFourPrompt.classList.remove("hidden");
    choicesFour.classList.remove("hidden");
});

//IF WE ALREADY DECLARED AN EVENT LISTENER (TREAT AT PAGE 1) DO WE NEED 
//TO DECLARE IT AGAIN OR HOW DO WE CALL IT AGAIN? 

//PAGE 3
// DISPLAY: dog sees squirrel, what do you do
//BUTTON D: let him chase it
//  (return home, you lost my dog) FAIL PAGE aEL
//BUTTON E: you both chase it together
//  (return home you both died) FAIL PAGE aEL
//BUTTON F: hold that leash tight! PROCEED TO PAGE 4 aEL
//  (good job! keep walking) (add another $5)

//PAGE 4
//DISPLAY ELEMENT there's a stranger approaching, what do you do
//BUTTON G: nothing
//  (he bites stranger. you're fired. go home) FAIL PAGE aEL
//BUTTON H: ask dog nicely to not bite the stranger
//  (this dog does not respect you. go home) FAIL PAGE aEL
//BUTTON I: offer dog a treat as a distraction and a reward for good behavior
//  (good job! keep walking) (lose a treat but get another $5) THANK YOU FOR WALKING MY DOG aEL
