// Variables for game settings
let moveSpeed = 3, gravity = 0.5;
let bird_dy = 0;

// DOM elements
let bird = document.querySelector(".bird");
let img = document.getElementById("bird-1");
let scoreValue = document.querySelector('.score-value');
let message = document.querySelector('.message');
let scoreTitle = document.querySelector('.score-title');
let playerNameInput = document.getElementById('player-name');
let startGameButton = document.getElementById('start-game');
let leaderboardList = document.getElementById('leaderboard-list');
let leaderboardModal = document.getElementById('leaderboard-modal');
let closeButton = document.querySelector('.close-button');
let restartButton = document.getElementById('restart-game');

// Sounds
let soundPoint = new Audio('Assets/point.mp3');
let soundDie = new Audio('Assets/die.mp3');

// Bird and background properties
let birdProp = bird.getBoundingClientRect();
let background = document.querySelector('#board').getBoundingClientRect();

// Game state
let gameState = 'start';
img.style.display = "none"; // Hide the bird initially

// Load leaderboard
function loadLeaderboard() {
    let scores = JSON.parse(localStorage.getItem('leaderboard')) || [];
    scores.sort((a, b) => b.score - a.score);
    scores = scores.slice(0, 5); // Keep only the latest 5 scores
    leaderboardList.innerHTML = '';
    scores.forEach(entry => {
        let li = document.createElement('li');
        li.textContent = `${entry.name}: ${entry.score}`;
        leaderboardList.appendChild(li);
    });
}

// Show the leaderboard modal
function showLeaderboard() {
    leaderboardModal.style.display = "block";
    loadLeaderboard();
}

// Close the leaderboard modal
function closeLeaderboard() {
    leaderboardModal.style.display = "none";
}

// Function to toggle visibility
function toggleVisibility(elements, display) {
    elements.forEach(element => element.style.display = display);
}

// Function to start or restart the game
function startGame() {
    if (gameState === 'play') return; // Do nothing if the game is already playing

    let playerName = playerNameInput.value.trim();
    if (!playerName) {
        alert("Please enter your name");
        return;
    }

    toggleVisibility([playerNameInput, startGameButton], 'none');
    resetGame();
    play();
}

// Function to reset the game
function resetGame() {
    document.querySelectorAll('.pipe_sprite').forEach(e => e.remove());
    img.style.display = "block";
    bird.style.top = '40vh';
    gameState = 'play';
    message.innerHTML = "";
    scoreTitle.innerHTML = 'Score:';
    scoreValue.innerHTML = '0';
    toggleVisibility([document.getElementById('board')], 'block');
    toggleVisibility([document.getElementById('start-screen')], 'none');
}

// Main game loop
function play() {
    movePipes();
    applyGravity();
    createPipes();
}

// Function to move pipes and check for collisions
function movePipes() {
    function move() {
        if (gameState !== 'play') return;

        document.querySelectorAll('.pipe_sprite').forEach(item => {
            let pipe_sprite_props = item.getBoundingClientRect();
            let bird_props = bird.getBoundingClientRect();

            if (pipe_sprite_props.right <= 0) {
                item.remove();
            } else {
                if (checkCollision(bird_props, pipe_sprite_props)) {
                    endGame();
                    return;
                } else {
                    updateScore(pipe_sprite_props, bird_props, item);
                    item.style.left = pipe_sprite_props.left - moveSpeed + 'px';
                }
            }
        });
        requestAnimationFrame(move);
    }
    requestAnimationFrame(move);
}

// Function to check for collisions between bird and pipes
function checkCollision(bird_props, pipe_sprite_props) {
    return (
        bird_props.left < pipe_sprite_props.left + pipe_sprite_props.width &&
        bird_props.left + bird_props.width > pipe_sprite_props.left &&
        bird_props.top < pipe_sprite_props.top + pipe_sprite_props.height &&
        bird_props.top + bird_props.height > pipe_sprite_props.top
    );
}

// Function to end the game
function endGame() {
    gameState = "End";
    message.innerHTML = 'Game Over'.fontcolor('red') + '<br> Press Enter To Restart';
    img.style.display = 'none';
    soundDie.play();

    let playerName = playerNameInput.value.trim();
    let score = parseInt(scoreValue.innerHTML);
    if (playerName) {
        saveScore(playerName, score);
        showLeaderboard();
    }

    toggleVisibility([playerNameInput, startGameButton], 'block');
}

// Function to update the score when bird passes a pipe
function updateScore(pipe_sprite_props, bird_props, item) {
    if (pipe_sprite_props.right < bird_props.left && pipe_sprite_props.right + moveSpeed >= bird_props.left && item.increase_score === '1') {
        scoreValue.innerHTML = parseInt(scoreValue.innerHTML) + 1;
        soundPoint.play();
    }
}

// Function to apply gravity to the bird
function applyGravity() {
    function gravityEffect() {
        if (gameState !== 'play') return;

        bird_dy += gravity;
        bird.style.top = birdProp.top + bird_dy + 'px';
        birdProp = bird.getBoundingClientRect();

        if (birdProp.top <= 0 || birdProp.bottom >= background.bottom) {
            endGame();
            return;
        }
        requestAnimationFrame(gravityEffect);
    }

    document.addEventListener("keydown", e => {
        if (e.key === 'ArrowUp') {
            img.src = 'Assets/flappybird.png';
            bird_dy = -7.6; // Make the bird jump
        }
    });

    document.addEventListener("keyup", e => {
        if (e.key === 'ArrowUp') {
            img.src = 'Assets/flappybird.png'; // Reset bird image after jump
        }
    });

    requestAnimationFrame(gravityEffect);
}

// Function to create pipes at intervals
function createPipes() {
    let pipeSeparation = 0;
    let pipe_gap = 35;

    function createPipe() {
        if (gameState !== 'play') return;

        if (pipeSeparation > 115) {
            pipeSeparation = 0;
            let pipe_pos = Math.floor(Math.random() * 43) + 8;

            let pipe_sprite_inv = document.createElement("div");
            pipe_sprite_inv.className = 'pipe_sprite';
            pipe_sprite_inv.style.top = pipe_pos - 70 + 'vh';
            pipe_sprite_inv.style.left = '100vw';
            document.body.appendChild(pipe_sprite_inv);

            let pipe_sprite = document.createElement("div");
            pipe_sprite.className = 'pipe_sprite';
            pipe_sprite.style.top = pipe_pos + pipe_gap + 'vh';
            pipe_sprite.style.left = '100vw';
            pipe_sprite.increase_score = '1';
            document.body.appendChild(pipe_sprite);
        }
        pipeSeparation++;
        requestAnimationFrame(createPipe);
    }
    requestAnimationFrame(createPipe);
}

// Save player score and name in localStorage
function saveScore(playerName, score) {
    let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    leaderboard.push({ name: playerName, score: score });
    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard = leaderboard.slice(0, 5);
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
}

// Event listeners
startGameButton.addEventListener('click', startGame);
closeButton.addEventListener('click', closeLeaderboard);
window.addEventListener('load', loadLeaderboard);

// Event listener for "Enter" key to start or restart the game
document.addEventListener("keydown", e => {
    if (e.key === "Enter" && gameState !== 'play') {
        toggleVisibility([document.getElementById('start-screen')], 'none');
        resetGame();
        play();
    }
});

// Event listener for t