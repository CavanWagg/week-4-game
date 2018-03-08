//Create characters using objects

let char = {

"Batman": {
  name: "Batman",
  healthPoints: 100,
  attackPower: 30,
  counterAttackPower: 40,
},
"Joker": {
  name: "Joker",
  healthPoints: 130,
  attackPower: 30,
  counterAttackPower: 40,
},
"Robin": {
  name: "Robin",
  healthPoints: 100,
  attackPower: 30,
  counterAttackPower: 40,
},
"Bane": {
  name: "Bane",
  healthPoints: 100,
  attackPower: 30,
  counterAttackPower: 40,
},
"Solomon-Grundy": {
  name: "Solomon Grundy",
  healthPoints: 100,
  attackPower: 30,
  counterAttackPower: 40,
}
}

var selectedChar;
var selectedDefender;




//initialize game
let initializeGame = function() {
  for (var key in char) {
    renderChar(char[key],"#character-selection");
  }
}


// render characters

let renderChar = function(char,renderArea) {
  let charDiv = $("<div class='char'>");
  let charName = $("<div class='char-name'>").text(char.name);
  let charHealth = $("<div class='char-healthPoints'>").text(char.healthPoints);
  let charAttack = $("<div class='char-attackPower'>").text(char.attackPower);
  let charCounterAttack = $("<div class='char-counterAttackPower'>").text(char.counterAttackPower);
  charDiv.append(charName).append(charHealth).append(charAttack).append(charCounterAttack);
  $(renderArea).append(charDiv);
  // return renderChar;
}
initializeGame();



//click event Select character, 
// let selectChar = function() {
$('.char').click(function(){
 $(this).addClass('chosen-hero')
})


//select enemy, 





//Attack enemy, //create a button onclick attack function


// enemy healthPoints -= playerAttack
// hero healthPoints -= enemyAttack 


//render message 

// if (hero healthPoints < 1)
// gameOver();
// if all enemy healthPoints < 1)
// victory(); 

//clear message 

//reset game to initial state using a reset button
let restart = $('<button class="tn">Restart</button>').click(function() {
  location.reload();
});
$("#gameMessage").append(restart); //need to render gameMessage