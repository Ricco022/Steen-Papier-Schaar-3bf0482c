var choicePlayer1 = null;
var choicePlayer2 = null;

function sendChoice(choice) {
    if (choicePlayer1 === null){
        choicePlayer1 = choice;
        document.getElementById("playerID").innerText = "2";
    } else if (choicePlayer2 === null) {
        choicePlayer2 = choice;
        document.getElementById("game").style.display = "none";

        let won = null;
        switch (choicePlayer1) {
            case 'rock':
                switch (choicePlayer2) {
                    case 'rock':
                        won = 3;
                        break;
                    case 'paper':
                        won = 2;
                        break;
                    case 'scissors':
                        won = 1;
                        break;
                    default:
                        document.write('error 1001');
                        break;
                }
                break;
            case 'paper':
                switch (choicePlayer2) {
                    case 'rock':
                        won = 1;
                        break;
                    case 'paper':
                        won = 3;
                        break;
                    case 'scissors':
                        won = 2;
                        break;
                    default:
                        document.write('error 1002');
                        break;
                }
                break;
            case 'scissors':
                switch (choicePlayer2) {
                    case 'rock':
                        won = 2;
                        break;
                    case 'paper':
                        won = 1;
                        break;
                    case 'scissors':
                        won = 3;
                        break;
                    default:
                        document.write('error 1003');
                        break;
                }
                break;
            default:
                document.write('error 1004');
                break;
        }

        switch (won) {
            case 1:
                document.getElementById("wonTitle").innerText = "Congratulations player 1!";
                document.getElementById("wonMessage").innerText = `Player 1 won because he/she chose ${choicePlayer1}, Player 2 chose ${choicePlayer2}`;
                break;
            case 2:
                document.getElementById("wonTitle").innerText = "Congratulations player 2!";
                document.getElementById("wonMessage").innerText = `Player 2 won because he/she chose ${choicePlayer2}, Player 1 chose ${choicePlayer1}`;
                break;
            case 3:
                document.getElementById("wonTitle").innerText = "Congratulations player 1 & 2!";
                document.getElementById("wonMessage").innerText = `Player 1 & 2 won because they both chose ${choicePlayer1}`;
                break;

            default:
                document.write('error 1005');
                break;
        }
        document.getElementById("wonBlock").style.display = "block";
        document.body.style.backgroundColor = "#e9ecef";

    } else {
        document.write('error 1006');
    }
}

function reset() {
    choicePlayer1 = null;
    choicePlayer2 = null;
    location.reload();
}