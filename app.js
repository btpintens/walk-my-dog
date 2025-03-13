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
const pagePromptSection = document.querySelector(".page-prompt");
const failDiv = document.querySelector("#fail");
const walkEl = document.querySelector(".walk-button");
const pageTwoPrompt = document.querySelector(".page-two");
const correctTwo = document.querySelector("#correct-two");
const choicesTwo = document.querySelector(".choices-two");
const wrongTwo = document.querySelectorAll(".two-fail");
const failDivTwo = document.querySelector("#fail-two");
const pageThreePrompt = document.querySelector(".page-three");
const correctThree = document.querySelector("#correct-three");
const choicesThree = document.querySelector("#choices-three");
const wrongThreeA = document.querySelector(".three-fail-a");
const wrongThreeB = document.querySelector(".three-fail-b");
const failDivThreeA = document.querySelector(".fail-three-a");
const failDivThreeB = document.querySelector(".fail-three-b");

const tools = { Leash: 2, Bags: 2, Treats: 3, Money: 5 };

dog.addEventListener("mouseover", () => {
  dogHint.style.display = "block";
  treatBtn.style.boxShadow = "rgb(0, 255, 255) 0 0 15px 5px";
});

dog.addEventListener("mouseout", () => {
  dogHint.style.display = "none";
  treatBtn.style.boxShadow = "";
});

const treatEl = document.querySelector("#treats");
treatEl.addEventListener("click", () => {
  if (tools.Treats > 0) {
    tools.Treats -= 1;
    treatBtn.textContent = `Treats: ${tools.Treats}`;

  } if (tools.Treats <= 2) {
      walkEl.disabled = false;
    
    } if (tools.Treats === 0) {
        failDiv.style.display = "block";
    }
  });

  walkEl.addEventListener("click", () => {
    document.querySelector("h1").classList.add("hidden")
    document.querySelector("h2").classList.add("hidden")
    choicesTwo.style.display = "block";
    pageTwoPrompt.style.display = "block";
  })

  const roundTwoFail = document.querySelectorAll(".round-two-fail");
  roundTwoFail.forEach((round) => {
      round.addEventListener("click", () => {
          failDivTwo.style.display = "block";
      });
  });

const bagEl = document.querySelector("#bags");
bagEl.addEventListener("click", () => {
    if (tools.Bags > 0) {
        tools.Bags -= 1;
        bagsBtn.textContent = `Bags: ${tools.Bags}`;

        if (tools.Bags = 1) {
            correctTwo.disabled = false;
            roundTwoFail.forEach((round) => {
                round.disabled = false;
            })
        }   
    }
});

correctTwo.addEventListener("click", () => {
    choicesTwo.style.display = "hidden";
    pageTwoPrompt.style.display = "hidden";
    pageThreePrompt.style.display = "block";
    choicesThree.style.display = "block";

});

const leashEl = document.querySelector("#leash");
leashEl.addEventListener("click", () => {
  if (tools.Leash > 0) {
    tools.Leash -= 1;
    leashBtn.textContent = `Leash: ${tools.Leash}`;

  } if (tools.Leash <= 2) {
      walkEl.disabled = false;
    
    } if (tools.Leash = 1) {
        failDiv.style.display = "block";
    }
  });



//document.getElementById("myButton").disabled = true
//walkEl.addEventListener('click', ( ) => {
//  open and init page 2
//console.log("Let's Walk");
// });


//PAGE 2
//DISPLAY ELEMENT dog pooped, what do you do
//BUTTON A: leave it (return home. you failed) FAIL PAGE aEL
//BUTTON B: pick it up (good job! keep walking) (decrease bags by 1
// (but add $5?)) PROCEED TO PAGE 3 aEL
//BUTTON C: ask a stranger to pick it up (return home. you failed) FAIL PAGE aEL

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


