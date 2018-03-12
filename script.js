//Create characters using objects

$(document).ready(function() {
  let characters = {
    Batman: {
      name: "Batman",
      image: "assets/images/batman.png",
      healthPoints: 160,
      attackPower: 30,
      counterAttackPower: 40
    },
    Joker: {
      name: "Joker",
      image: "assets/images/joker.png",
      healthPoints: 180,
      attackPower: 30,
      counterAttackPower: 40
    },
    Catwoman: {
      name: "Catwoman",
      image: "assets/images/catwoman.png",
      healthPoints: 120,
      attackPower: 30,
      counterAttackPower: 40
    },
    Penguin: {
      name: "Penguin",
      image: "assets/images/penguin.png",
      healthPoints: 90,
      attackPower: 30,
      counterAttackPower: 40
    },
    Clayface: {
      name: "Clayface",
      image: "assets/images/clayface.png",
      healthPoints: 200,
      attackPower: 30,
      counterAttackPower: 40
    }
  };

  var currentSelectedCharacter;
  var currentDefender;
  var attackResult;
  var combatants = [];
  var turnCounter = 1;

  //initialize game

  let renderOne = function(character, renderArea, makeChar) {
    let charDiv = $("<div class='character' data-name='" + character.name + "'>");
    let charName = $("<div class='character-name'>").text(character.name);
    let charImage = $("<img alt='image' class='character-image'>").attr(
      "src",
      character.image
    );
    let charHealth = $("<div class='character-healthPoints'>").text(
      character.healthPoints
    );
    let charAttack = $("<div class='character-attackPower'>").text(
      character.attackPower
    );
    let charCounterAttack = $(
      "<div class='character-counterAttackPower'>"
    ).text(character.counterAttackPower);
    charDiv
      .append(charName)
      .append(charImage)
      .append(charHealth)
      .append(charAttack)
      .append(charCounterAttack);
    $(renderArea).append(charDiv);

    //conditional, separating out enemies
    if (makeChar == "enemy") {
      $(charDiv).addClass("enemy");
    } else if (makeChar == "defender") {
      currentDefender = character;
      $(charDiv).addClass("target-enemy");
    }
  };

  //function to render game message 
  let renderMessage = function(message) {
    let gameMessageSet = $('#gameMessage');
    let newMessage = $('<div>').text(message);
    gameMessageSet.append(newMessage);
    console.log('Game Message');

    if (message == 'clearMessage') {
      gameMessageSet.text('');
    }
  };

  let renderCharacters = function(charactersObject, areaRender) {
    //render all characters
    if (areaRender == "#characters-section") {
      $(areaRender).empty();
      for (var key in charactersObject) {
        if (charactersObject.hasOwnProperty(key)) {
          renderOne(charactersObject[key], areaRender, "");
        }
      }
    }

    //render player character
    if (areaRender == "#selected-character") {
      $("#selected-character").prepend("Your Character");
      renderOne(charactersObject, areaRender, "");
      $('#attack-button').css('visibility', 'visible');
    }
    //render combatants
    if (areaRender == "#available-to-attack-section") {
      $("#available-to-attack-section").prepend("Choose your opponent");
      for (var i = 0; i < charactersObject.length; i++) {
        renderOne(charactersObject[i], areaRender, "enemy");
      }
      //render single enemy to defender area
      $(document).on('click', '.enemy', function() {
        console.log('you clicked an enemy to fight!');
        //select an enemy to fight
        name = ($(this).data('name'));
        //if defender area is empty
        if ($('#defender').children().length === 0) {
          renderCharacters(name, '#defender');
          $(this).hide();
          renderMessage("clearMessage");
        }
      });
    }
    //render defender 
    if (areaRender == '#defender') {
      $(areaRender).empty();
      for (var i = 0; i < combatants.length; i++) {
        //add enemy to defender area 
        if (combatants[i].name == charactersObject) {
          $('#defender').append("Opponent")
          console.log('defender');
          renderOne(combatants[i], areaRender, 'defender');
        }
      }
    }
    //update defender when attacked
    //error
    if (areaRender == 'playerDamage') {
      $('#defender').empty();
      $('#defender').append("Opponent")
      renderOne(charactersObject, '#defender', 'defender');

    }

    //update player character when attacked
    if (areaRender == 'enemyDamage') {
      $('#selected-character').empty();
      renderOne(charactersObject, '#selected-character', '');
    }
  };  
  
  
  //render all characters for user to choose who they fight
  renderCharacters(characters, "#characters-section");
  $(document).on("click", ".character", function() {
    name = $(this).data("name");
    //if no player char has been selected
    if (!currentSelectedCharacter) {
      currentSelectedCharacter = characters[name];
      for (var key in characters) {
        if (key != name) {
          combatants.push(characters[key]);
        }
      }
      $("#characters-section").hide();
      renderCharacters(currentSelectedCharacter, "#selected-character");
      renderCharacters(combatants, "#available-to-attack-section");
    }
  });

  // --------------------------------------------------------------------
  // attack function 
  $('#attack-button').on('click', function() {
    console.log('Attack');
    //If defender area contains an enemy
    if ($('#defender').children().length !== 0) {
      console.log('damage calculation');
      //defender state change
      let attackMessage = "Hero" + currentSelectedCharacter + " attacks for " + (currentSelectedCharacter.attackPower * turnCounter) + " damage.";
      renderMessage('clearMessage');
      currentDefender.healthPoints = currentDefender.healthPoints - (currentSelectedCharacter.attack * turnCounter);
      
      //2 ifs statement?
      //win condition 
    if (currentDefender.healthPoints > 0) {
      console.log('still alive');
      //enemy is alive; continue the fight
      renderCharacters(currentDefender, 'playerDamage');
      //player state change
      let counterAttackMessage = currentDefender.name + " strikes back for " + currentDefender.counterAttackPower + " damage.";
      renderMessage(attackMessage); 
      renderMessage(counterAttackMessage);  

      currentSelectedCharacter.healthPoints = currentSelectedCharacter.healthPoints - currentDefender.counterAttackPower;
      renderCharacters(currentSelectedCharacter, 'enemyDamage');
      
    }


    } else {

    }

    });
  //   }
  // })

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
  // let restart = $('<button class="tn">Restart</button>').click(function() {
  //   location.reload();
  // });
  // $("#gameMessage").append(restart); //need to render gameMessage
});
