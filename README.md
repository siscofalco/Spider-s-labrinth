# Spider's Labyrinth 🕷 

This project is a 80's inspired arcade game where your character has to walk through a labyrinth in order to get a special trophy, while surviving the deadly spiders.

The original idea consists of three different levels, same map but more difficulty regarding the enemies (spiders).

<h3>MVP</h3>

<ol>
<li>Welcome screen</li>
<li>Labyrinth: map where the game takes place, main character has to be controlled and moved by the user.</li>
<li>Success/failure screen: option to restart the game.</li>
</ol>

<h3>Data Structures</h3>

```
--------> index.js

    function buildDom(){
    }
    
    function createWelcomeScreen(){
    }
    
    function createGameScreen(){
    }
    
    function removeGameScreen(){
    }
    
    function createGameOverScreen(){
    }
    
    function removeGameOverScreen(){
    }
    
    function startGame(){
    }
    
    function endGame(){
    }

--------> game.js

class Game {
    constructor{
        this.gameScreen = gameScreen,
        this.mapArr 
        this.character 
        this.enemies
        this.canvas 
        this.ctx
        this.runningGame
        this.score
        this.howManyLife
        this.scoreValue
        this.playButton
        this.pauseButton
        this.life
        this.blockImg
        this.trophyImg
        this.floorImg
        this.lifeImg
        }
        
        start(difficulty){
        }
        
        printCharacter(){
        }
        
        printEnemies(){
        }
        
        printLabyrinth(ctx){
        }
        
        loadImages(){
        }
        
        startLoop(){
        }
        
        activatePauseButton(){
        }
        
        printScore(){
        }
}

const mapArr[],

--------> character.js

class Character {
    constructor() {
        this.canvas
        this.ctx
        this.x
        this.y
        this.direction
    }

    characterDraw() {
    }
    
    characterPosition(){
    }
    
    setKeyListener(){
    }
}

--------> enemy.js

class Enemy{
    constructor() {
        this.canvas
        this.ctx
        this.x 
        this.y
        this.direction
        this.count
    }

    enemyDraw() {
    }
    
    enemyPosition(){
    }
}
```
### States + States Transitions

<ol>
  <li>Welcome screen</li>
  <li>Game screen</li>
  <li>Game over screen</li>
</ol>

### Links

##### Trello 

https://trello.com/b/EOtOy4nC/spiders-labyrinth

##### Presentation slides

https://docs.google.com/presentation/d/17R6wrI6h5AiKzMhwQd5JmRrNqB94cvRvjMfs4SFWdxY/edit#slide=id.p

##### Deploy link

https://siscofalco.github.io/Spiders-labyrinth/
