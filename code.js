// Function to play the game
function playGame(playerChoice) {
    // Array of computer choices
    let computerChoices = ['fire', 'water', 'grass'];
    let computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
    // Determine the winner
    let result;
    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === 'fire' && computerChoice === 'grass') ||
        (playerChoice === 'grass' && computerChoice === 'water') ||
        (playerChoice === 'water' && computerChoice === 'fire')
    ) {
        result = `You win! ${playerChoice} beats ${computerChoice}.`;
    } else {
        result = `You lose! ${computerChoice} beats ${playerChoice}.`;
    }
    
    // Display the result
    let resultElement = document.getElementById('result');
    resultElement.textContent = result;
    resultElement.style.opacity = 0;
    resultElement.style.animation = 'none';
    setTimeout(() => {
        resultElement.style.animation = 'fadeIn 1s forwards';
    }, 50);

    // Reset display of all gestures
    document.getElementById('playerFire').classList.remove('show');
    document.getElementById('playerWater').classList.remove('show');
    document.getElementById('playerGrass').classList.remove('show');
    document.getElementById('computerFire').classList.remove('show');
    document.getElementById('computerWater').classList.remove('show');
    document.getElementById('computerGrass').classList.remove('show');

    // Show player gesture
    if (playerChoice === 'fire') {
        document.getElementById('playerFire').classList.add('show');
    } else if (playerChoice === 'water') {
        document.getElementById('playerWater').classList.add('show');
    } else if (playerChoice === 'grass') {
        document.getElementById('playerGrass').classList.add('show');
    }

    // Show computer gesture
    if (computerChoice === 'fire') {
        document.getElementById('computerFire').classList.add('show');
    } else if (computerChoice === 'water') {
        document.getElementById('computerWater').classList.add('show');
    } else if (computerChoice === 'grass') {
        document.getElementById('computerGrass').classList.add('show');
    }
}
