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
function gameLogic(player, computer) {
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
const result = document.querySelector('.result');
const computer = document.querySelector('.computer');
const computerChoiceImageContainer = document.querySelector('.computer-choice');
const computerChoiceImage = document.createElement('img');
function displayResult(option) {
    computer.textContent = "Computer chose:"
    let computerChoice = getComputerChoice();
    result.textContent = gameLogic(option, computerChoice);
    computerChoiceImage.src = `/images/${computerChoice}.jpg`;
    console.log(computerChoiceImage.src);
    computerChoiceImageContainer.appendChild(computerChoiceImage);
}
const options = document.querySelectorAll(".options div");
options.forEach((option) => {
    option.addEventListener('click', () => {
        displayResult(option.className);
    })
});