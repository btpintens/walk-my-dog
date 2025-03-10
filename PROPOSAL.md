# Walk My Dog

![This Dog Needs A Walk](https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
)

## Project Description 

My game is called Walk My Dog (inspired by my own dog who is a mischevious demon on a string). Walk My Dog is a choose your own adventure game with multiple choices on each level leading the player on various different paths. Throughout the game the player will encounter various challenges that will either terminate the game or allow the player to continue. 

## Wire Frames

**Initial Landing View**

![Initial Landing View](https://imgur.com/4WjgN5J)

**Results View**

![image](https://imgur.com/o0oQQW1)


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
- As a player I would like the animation to correspond with choices made during the game (basic dog commands: sit, stay, shake, etc.) as well as reflecting the change in environment as the walk progresses (based on weather, location, activity, etc. )
- As a player I would like to be able to create a profile and maintain points and tools each time I play the game 
- As a player I would like the ability to purchase additional tools thus extending gameplay and - ultimately - earn more money 


## Pseudocode
```//HOME PAGE
// DISPLAY ELEMENT: introductory message with image of dog and 
// instructions of how to walk (what you'll encounter along 
//the way)
//BUTTON start walk button addEventListener

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

//VAR leash, bags, treats, money 
//VAR buttons (3 per page, 9 total):  
//IF proceed = increase money by 5. buttonB = reduce bags by 
//1. 
//buttonI = reduce treats by 1```




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