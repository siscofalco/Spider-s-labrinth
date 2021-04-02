# Spider's Labyrinth 🕷 

This project is a 80's inspired arcade game where your character has to walk through a labyrinth in order to get a special trophy, while surviving the deadly spiders.

The original idea consists of three different levels, same map but more difficulty regarding the enemies (spiders).

<h3>MVP</h3>

<ol>
<li>Welcome screen</li>
<li>Character selector: selection from at least two characters.</li>
<li>Labyrinth map: map where the game takes place, main character has to be controlled and moved by the user.</li>
<li>Success/failure screen: score indicator and the option to restart the game.</li>
</ol>

<h3>Data Structures</h3>

```
Game(){
  this.map,
  this.time,
  this.intervalId,
  this.score,
  this.level,
  this.character,
  this.enemies,
  this.trophy
}

Character(){
  this.appearance,
  this.position,
  this.direction
}

Enemies(){
  this.position,
  this.direction
}

Trophy(){
  this.position,
  this.visible
}
```
### States + States Transitions

<ol>
  <li>Welcome screen</li>
  <li>Character selector screen</li>
  <li>Game screen</li>
  <li>Game over screen</li>
</ol>

### Links

##### Trello 

https://trello.com/b/EOtOy4nC/spiders-labyrinth

##### Presentation slides

https://docs.google.com/presentation/d/17R6wrI6h5AiKzMhwQd5JmRrNqB94cvRvjMfs4SFWdxY/edit#slide=id.p
