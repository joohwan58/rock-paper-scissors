function getComputerChoice() {
    let choice = Math.floor(Math.random()*3) + 1
    switch (choice) {
        case 1:
            return "rock"
            break;
        case 2:
            return "scissors"
        case 3:
            return "paper"
        default:
            break;
    }
}
function playRound(player, computer) {
    switch (player+computer) {
        case "rockscissors":
            return "You win! Rock beats scissors"
            break;
        case "rockpaper":
            return "You lose. Paper beats rock"
            break;
        case "paperscissors":
            return "You lose. Scissors beat paper"
            break;
        case "paperrock":
            return "You win! Paper Beats rock"
            break;
        case "scissorpapper":
            return "You win!, Scissors beat paper"
            break;
        case "scissorrock":
            return "You lose. Rock beats scissors"
            break;
        default:
            return "It's a draw!"
            break;
    }
}
function game() {
    let player
    for (i = 0; i < 5; i++) {
        player = prompt("Play rps, enter option")
        console.log(playRound(player, getComputerChoice()))
    }
}