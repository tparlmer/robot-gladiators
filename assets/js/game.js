var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// Alert players that they are starting the round
window.alert("Welcome to Robot Gladiators!");

var fight = function(enemyName) {
    // repeat and execute as long as the enemyrobot is alive
    while(enemyHealth > 0) {
      var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

      // if player choses to fight, then fight
      if (promptFight === "fight" || promptFight === "FIGHT") {
      // remove enemy's health by subtracting the amount set in the playerAttack variable
      enemyHealth = enemyHealth - playerAttack;
      console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
      );
    
      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
      } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
      }
    
      // remove player's health by subtracting the amount set in the enemyAttack variable
      playerHealth = playerHealth - enemyAttack;
      console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
      );
    
      // check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
      } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
      }
      // if player choses to skip
      } else if (promptFight === "skip" || promptFight === "SKIP") {
          // confirm player wants to skip
          var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
          // if yes (true), leave fight
          if (confirmSkip) {
              window.alert(playerName + " has decided to skip this fight. Goodbye!");
              // subtract money away from player for skipping
              playerMoney = playerMoney - 2;
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
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  // other logic remains the same...
  for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      var pickedEnemyName = enemyNames[i];

      enemyHealth = 50;

      fight(pickedEnemyName);
    }
    else {
      window.alert("You havel ost your robot in battle! Game Over!");
      break;
    }
  }

  // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
  endGame();

  // play again
  startGame();
}

var endGame = function() {
  // if playe ris still alive, player wins!
  if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
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
}


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
