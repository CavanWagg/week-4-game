//Create characters using objects

$(document).ready(function() {
  let char = {
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

  var selectedChar;
  var selectedDefender;

  //initialize game

  let renderOne = function(char, renderArea, selectChar) {
    let charDiv = $("<div class='char'>");
    let charName = $("<div class='char-name'>").text(char.name);
    let charImage = $("<img alt='image' class='char-image'>").attr(
      "src",
      char.image
    );
    let charHealth = $("<div class='char-healthPoints'>").text(
      char.healthPoints
    );
    let charAttack = $("<div class='char-attackPower'>").text(char.attackPower);
    let charCounterAttack = $("<div class='char-counterAttackPower'>").text(
      char.counterAttackPower
    );
    charDiv
      .append(charName)
      .append(charImage)
      .append(charHealth)
      .append(charAttack)
      .append(charCounterAttack);
    $(renderArea).append(charDiv);

    //conditional, separating out enemies
    if (selectChar == "enemy") {
      $(charDiv).addClass("enemy");
    } else if (selectChar == "defender") {
      currDefender = character;
      $(charDiv).addClass("target-enemy");
    }
  };

  let renderChars = function(char, areaRender) {
    //render all characters
    if (areaRender == "#characters-section") {
      $(areaRender).empty();
      for (var key in char) {
        if (char.hasOwnProperty(key)) {
          renderOne(char[key], areaRender, "");
        }
      }
    }

    //render player character
    if (areaRender == "#selected-char") {
      $("#selected-char").prepend("Your Character");
      renderOne(char, areaRender, "");
      // $('#attack-button').css('visibility', 'visible');
    }
    // renderOne(char[i], areaRender, 'enemy');
  };
  renderChars(char, "#characters-section");

  //click event Select character,
  // let selectChar = function() {
  // $('.char').click(function(){
  //  $(this).addClass('chosen-hero')
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
