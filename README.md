# Spider-s-labrinth

This project is a 80's inspired arcade game where your character has to walk through a labrinth in order to get a special trophy, while surviving the deadly spiders.

The original idea consists of three different levels, same map but more difficulty regarding the enemies (spiders).

<h3>MVP</h3>

<ol>
<li>Welcome screen</li>
<li>Character selector: selection from at least two characters.</li>
<li>Labrinth map: map where the game takes place, main character has to be controlled and moved by the user.</li>
<li>Success/failure screen: score indicator and the option to restart the game.</li>
</ol>

<h3>Data Structures</h3>

```
Game(){
  this.map,
  this.time,
  this.score,
  this.level,
  this.character,
  this.enemies
}

Character(){
  this.appearance,
  this.position,
  this.direction
}

Enemies(){
  this.position,
  this.direction,
}
```

