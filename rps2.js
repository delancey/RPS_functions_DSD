var player1 = 0;
var player2 = 0;

function playGame(user1, user2, playUntil) {
    
    while (player1 < playUntil && player2 < playUntil) {
        var hand = ['rock', 'paper', 'scissors'];
    }  
    
    function getChoice() {

        var randomizer = Math.random();

        if (randomizer < 0.34) {
            return hand[0];
        }else if (randomizer < 0.67) {
            return hand[1];
        } else {
            return hand[2];
        }
    } //end of get choice

    var player1Throw = getChoice();
    var player2Throw = getChoice();
    //play round
   /* console.log(player1Throw)
    console.log(player2Throw)*/
    
    console.log(user1 + ' you have ' + player1)
    console.log(user2 + ' you have ' + player2)
    
    function playRound() {
            if(player1Throw == player2Throw){
                return "Computer: " + player1Throw + "\nYou: " + player2Throw + "\nThe result is a tie!";
            }

            if(player1Throw == 'rock'){
                if(player2Throw == 'scissors'){
                    player1++;
                    return "Player 1: " + player1Throw + " Player 2: " + player2Throw + " - Round to Player 1!";
                }else {
                    player2++;
                     return "Player 1: " + player1Throw + " Player 2: " + player2Throw + " - Round to Player 2!";
                }
            }
            
            if(player1Throw == 'paper'){
                if(player2Throw == 'rock'){
                    player1++;
                    return "Player 1: " + player1Throw + " Player 2: " + player2Throw + " - Round to Player 1!";
                }else {
                    player2++;
                    return "Player 1: " + player1Throw + " Player 2: " + player2Throw + " - Round to Player 2!";
                }
            }

            if(player1Throw == 'scissors'){
                if(player2Throw == 'paper'){
                    player1++;
                    return "Player 1: " + player1Throw + " Player 2: " + player2Throw + " - Round to Player 1!";
                }else {
                    player2++;
                    return "Player 1: " + player1Throw + " Player 2: " + player2Throw + " - Round to Player 2!";
                }
            }
            
        }

        console.log(playRound());
    
    
     console.log('Game over! ' + user1 +  ' scroed ' + player1 + 'and ' + user2 + ' had ' + player2);
    
    
} //end of game
    
    playGame('Dana', 'Computer', 5);
    
