onload = () => {
    const link = window.location.search;

    const player_paper = document.getElementById("player_paper");
    const player_rock = document.getElementById("player_rock");
    const player_scissor = document.getElementById("player_scissor");

    const gameResultTitle = document.getElementById("gameResultTitle");
    const gameResults = document.getElementById("gameResults");

    function animateResultChange(time = 5000) {
        gameResultTitle.classList.add("animate");
        gameResults.classList.add("animate");

        setTimeout(() => {


            gameResultTitle.classList.remove("animate");
            gameResults.classList.remove("animate");
        }, time);
    }

    function computer_turn() {
        let rps = [
            "Rock",
            "Paper",
            "Scissor"
        ]

        let computer_played = rps[Math.floor(Math.random() * rps.length)];
        return computer_played;
    }

    function determineWinner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return "It's a tie!";
        } else if (
            (playerChoice === "Rock" && computerChoice === "Scissor") ||
            (playerChoice === "Paper" && computerChoice === "Rock") ||
            (playerChoice === "Scissor" && computerChoice === "Paper")
        ) {
            return "You win!";
        } else {
            return "Computer wins!";
        }
    }

    function handlePlayerChoice(playerChoice) {
        const computerChoice = computer_turn();
        const roundResult = determineWinner(playerChoice, computerChoice);
        gameResultTitle.innerHTML = `<span class="player">${playerChoice}</span> VS <span class="computer">${computerChoice}</span>`;
        gameResults.innerHTML = roundResult;
        animateResultChange();
    }

    player_paper.onclick = () => handlePlayerChoice("Paper");
    player_rock.onclick = () => handlePlayerChoice("Rock");
    player_scissor.onclick = () => handlePlayerChoice("Scissor");
}