# Walk My Dog

![This Dog Needs A Walk](https://i.imgur.com/UsOEOfC.jpg)

## Project Description 

My game is called Walk My Dog (inspired by my own dog who is a mischevious demon on a string). Walk My Dog is a choose your own adventure game with multiple choices on each level leading the player on various different paths. Throughout the game the player will encounter various challenges that will either terminate the game or allow the player to continue. 

## Wire Frames

**Initial Landing View**

![Initial Landing View](./assets/Screenshot%202025-03-10%20at%203.01.39 PM.png)

**Mid-Game View**
![page 2 landing view](https://i.imgur.com/BVYqU4A.jpg?1)

**Results View**

![Final Landing View](./assets/Screenshot%202025-03-10%20at%203.02.15 PM.png)


#### MVP Goals
* As a user I want an introduction page that explains the requirements (rules) of walking my dog
* As a user I want a clean interface with graphics of the dog and the "tools" you need to walk him (leash, bags, treats)
* As a user I want a constant visual reminder of how many tools (kind and quantity) I have left
* As a user I want buttons which clearly provide information regarding the choices I can make to progress the walk: ___give treats, look out for squirrels, pick up poop, etc.___
* As a user I want to be able to click the buttons - thus moving onto the next part of the walk
* As a user I want to be presented with a message when I have successfully completed the walk and an image the dog has made it safely home
* As a user I want to know how much money I earned (points I have) once I have completed the walk (finished the game)

#### Stretch Goals

- As a player I would like to encorporate complex challenges beyond the 3-choice option on each level. These challenges would come with more complex "rewards": ___ex: taking pictures, having the dog do tricks, dressing the dog according to weather___ would all gain more money and/tools 
- As a player I would like an audio component - dog barking - that would contribute to various clues/guidance/challenges
- As a player I would like the animation to correspond with choices made during the game (basic dog commands: sit, stay, shake, etc.) as well as reflecting the change in environment as the walk progresses (based on weather, location, activity, etc. )
- As a player I would like to be able to create a profile and maintain points and tools each time I play the game 
- As a player I would like the ability to purchase additional tools thus extending gameplay and - ultimately - earn more money. Potentially adding pop-up trivia questions which would further add to money. 


## Pseudocode
```//HOME PAGE
// DISPLAY ELEMENT: introductory message with image of dog and 
// instructions of how to walk (what you'll encounter along 
//the way)
//hint HOVER over dog and he'll tell you to give him a treat. once you give him the treat, the start walk button will be enabled
//BUTTON start walk button addEventListener(aEL)

//ICON/IMAGE table that lists tools (leash, bags, treats) we have 
//and how much money earned. 

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

//VAR leash (loads at 1), bags (loads at 2), treats (loads at 3), money (loads at $5)
//VAR buttons (3 per page, 9 total):  
//IF proceed = increase money by 5. buttonB = reduce bags by 
//1. 
//buttonI = reduce treats by 1```

/*-------------------------------- Constants --------------------------------*/
dog (hover for hint on intro page)

/*-------------------------------- Variables --------------------------------*/
leash - will decrease if wrong answer clicked
bags - will decrease if correct button is clicked
treats - will decrease on first page (to start game) and if correct button is clicked on following pages
money - can increase or decrease based on buttons clicked
SOME MESSAGES ARE CODED IN HTML - so they aren't vars or consts

/*------------------------ Cached Element References ------------------------*/
the "panel" that holds tools and money: panelEl


/*-------------------------------- Functions --------------------------------*/
initGame when page loads
increaseVal (money) when correct button is clicked and if game ends in a win
decreaseVal (leash, bags, treats) when correct button clicked
reset when game failed
respondMes when button is clicked (message confirming you made the in/correct choice)
dogHint when you hover over him and reveal a helpful message


/*----------------------------- Event Listeners -----------------------------*/
'click' - need a way to give a treat - will be reflected in the panel displaying tools 
'click' - begin game
'click' - return home/fail (different messages)
'click' - proceed to next level (different messages)
'hover - hover over dog for clue (to get going)



| Day        |   | Task                               | Blockers | Notes/ Thoughts |
|------------|---|------------------------------------|----------|-----------------|
| Monday     |   | Create and present proposal        |          |                 |
| Tuesday    |   | Create html, js, css files         |          | how to link multiple 
             |                                                     HTML pages    
| Wednesday  |   | Create basic scaffolding           |          |                 |
| Thursday   |   | Add functionality, start learning                learn art
                    how to art                        |          |                 |
| Friday     |   | Add styling                        |          |                 |
| Saturday   |   | Finalize MVP                       |          |                 |
| Sunday     |   | hope it works and fine tune        |          |                 |
| Monday     |   | PRESENTATION                       |          |                 |
|            |   |                                    |          |                 |