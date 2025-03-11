//HOME PAGE
// DISPLAY ELEMENT: introductory message with image of dog and
// instructions of how to walk (what you'll encounter along the way)
//BUTTON start walk button addEventListener

//ICON/IMAGE table that lists tools (leash, bags, treats) we have
//and how much money earned.
//

const dog = document.querySelector(".hover-trigger");
const dogHint = document.querySelector(".hover-content");
const treatBtn = document.querySelector("#treats");
const walkEl = document.querySelector(".walk-button");

const tools = { Leash: 1, Bags: 2, Treats: 3, Money: 5 };
//let numTreats = parseInt(document.querySelector('#treats'))

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

    if (tools.Treats <= 2) {
      walkEl.disabled = false;
    }
  }
});

// Check if treats are 2 or less, to enable the walk button
// button.disabled = false

//document.getElementById("myButton").disabled = true
//walkEl.addEventListener('click', ( ) => {
//  open and init page 2
//console.log("Let's Walk");
// });

// if (walkEl.disable === true)
//     {return walkEl.disable !== true};

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

//VAR leash, bags, treats, money
//VAR buttons (3 per page, 9 total):
//IF proceed = increase money by 5. buttonB = reduce bags by 1.
//buttonI = reduce treats by 1.
