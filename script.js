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
  attackpower: 30,
  counterAttackPower: 40,
},
"Robin": {
  name: "Robin",
  HealthPoints: 100,
  AttackPower: 30,
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
  return renderChar;
}



//click event Select character, 




//select enemy, 





//Attack enemy

//render message 

//clear message 

//reset game to initial state