


// Alert players that they are starting the round
window.alert("Welcome to Robot Gladiators!");

var fight = function(enemy) {
  console.log(enemy);
  // repeat and execute as long as the enemyrobot is alive
    while(enemy.health > 0) {
      var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

      // if player choses to fight, then fight
      if (promptFight === "fight" || promptFight === "FIGHT") {
        // generate random damage value based on player's attack power
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

        enemy.health = Math.max(0, enemy.health - damage);

      console.log(
        playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
      );
    
      // check enemy's health
      if (enemy.health <= 0) {
        window.alert(enemy.name + " has died!");
      } else {
        window.alert(enemy.name + " still has " + enemy.health + " health left.");
      }
    
      var damage = randomNumber(enemy.attack - 3, enemy.attack);

      playerInfo.health = Math.max(0, playerInfo.health - damage);

      console.log(
        enemyName + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
      );
    
      // check player's health
      if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + " has died!");
      } else {
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
      }
      // if player choses to skip
      } else if (promptFight === "skip" || promptFight === "SKIP") {
          // confirm player wants to skip
          var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
          // if yes (true), leave fight
          if (confirmSkip) {
              window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
              // subtract money away from player for skipping
              playerInfo.money = Math.max(0, playerInfo.money - 10);
          }
          // if no (false), ask question again by running fight() again
          else {
              fight();
          }
      
      } else {
      window.alert("You need to choose a valid option. Try again!");
      }
    }

    
};

var startGame = function() {
  //reset player stats
  playerInfo.reset();

  // other logic remains the same...
  for(var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      var pickedEnemyObj = enemyInfo[i];

      pickedEnemyObj.health = randomNumber(40, 60);

      fight(pickedEnemyObj);

      // if we're not at the last enemy in teh array
      if (playerInfo.health > 0 && i < enemyNames.length - 1) {
        // Ask if player wants to use the store before the next round
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
        
        // if yes, take them to the store() function
        if (storeConfirm) {
          shop();
        }
      }
    }
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }

  // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
  endGame();

  // play again
  startGame();
};

var endGame = function() {
  // if player is still alive, player wins!
  if (playerInfo.health > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
  }
  else {
    window.alert("You've lost your robot in battle.");
  }

  window.alert("The game has now ended. let's see how you did!");

  // ask player if they'd like to play again
  var playAgainConfirm = window.confirm("would you like to play again?")

  if (playAgainConfirm) {
    // restart the game
    startGame();
  }
  else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

var shop = function() {
  // ask player what they'd like to do
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  )

  // use switch to carry out action
  switch (shopOptionPrompt) {
    case "REFILL": // new case
    case "refill":
      if (playerInfo.money >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");

        // increase haltha nd decrease money
        playerInfo.health = playerInfo.health + 20;
        playerInfo.money = playerInfo.money - 7;
      }  
      else {
        window.alert("You don't have enough money!");
      }

      break;
    case "UPGRADE": // new case
    case "upgrade":
      if (playerInfo.money >= 7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");

        // increase attack and decrease money
        playerInfo.attack = playerInfo.attack + 6;
        playerInfo.money = playerInfo.money - 7;
      }
      else {
        window.alert("You don't have enough money!");
      }  

      break;
    case "LEAVE": // new case
    case "leave":
      window.alert("Leaving the store.");

      // do nothing, so function will end
      break;
    default:
      window.alert("you did not pick a valud option. Try again.");

      // call shop() again to force player to pick a valid option
      shop();
      break;
  }
};

// function to generate a random numeric value
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max- min + 1) + min);

  return value;
};

var playerInfo = {
  name: window.prompt("what is yoru robot's name?"),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function() {
    if (this.money >= 7) {
      window.alert("refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    }
    else {
      window.alert("You don't have enough money!");
    }
  },
  upgradeAttack: function() {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    }
    else {
      window.alert("You don't have enough money!");
    }
  }
};

var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 45)
  },
  {
    name: "Amy Android",
    attack: randonNumber(10, 14)
  },
  {
    name: "Robo Trumble",
    attack: randonNumber(10, 14)
  }
];

// start the game when the page loads
startGame();


// if (enemyHealth > 0) // if the enemy robot has health points, continue to fight

// Game States
// "WIN" - Player robot has defeated all enemy robots
//  * Fight all enemy robots
//  * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less


// Add Play Again feature

// Add SHOP feature

//Wrap the game logic in a startGame() function
//Whent he player is defeated or there are no more enemies, call an endGame() function that:
  // Alerts the player's total stats
  // Asks the player if they want to play again
  //if yes, call startGame() to restart the game

// After the player skips or defeates ane nemy (and there are still more robots to fight):
  // Ask the player if they want to "shop"
  // If no, continue as normal
  // If yes, call the shop() function
  // In the shop() function, ask player if they want to "refill" health, "upgrade" attack,or "leave" the shop
  // If refill, subtract money points from player and increase health
  // If upgrade, subtract money points from player and increase health
  // If leave, alrt goodbye and exithte h function
  // If any other invalid option, call shop() again
