var newGameBtn = document.getElementById('js-newGameButton');

newGameBtn.addEventListener('click', newGame);

var pickRock = document.getElementById('js-playerPick_rock'),
     pickPaper = document.getElementById('js-playerPick_paper'),
     pickScissors = document.getElementById('js-playerPick_scissors');

var newGameElem = document.getElementById('js-newGameElement'),
    pickElem = document.getElementById('js-playerPickElement'),
    resultsElem = document.getElementById('js-resultsTableElement');

var playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');

var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');

pickRock.addEventListener('click', function() { playerPick('rock') });
pickPaper.addEventListener('click', function() { playerPick('paper') });
pickScissors.addEventListener('click', function() { playerPick('scissors') });

var gameState = 'notStarted',
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };



function setGameElements() {
  switch(gameState) {
    case 'started':
        newGameElem.style.display = 'none';
        pickElem.style.display = 'block';
        resultsElem.style.display = 'block';
      break;
    case 'ended':
        newGameBtn.innerText = 'Jeszcze raz';
    case 'notStarted':
    default:
        newGameElem.style.display = 'block';
        pickElem.style.display = 'none';
        resultsElem.style.display = 'none';
  }
}

setGameElements();

function newGame() {
  player.name = prompt('Please enter your name', 'imię gracza');
  if (player.name) {
    player.score = 0;
    computer.score = 0;
    gameState = 'started';
    setGameElements();

    playerNameElem.innerHTML = player.name;
    setGamePoints(); 
  }

}

function playerPick(playerPick) {
    console.log(playerPick);
}


function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
}



function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
}

function checkRoundWinner(playerPick, computerPick) {
    playerResultElem.innerHTML = "";
    computerResultElem.innerHTML = "";

    if (playerPick == computerPick) {   
    }
    else if (
        (computerPick == 'rock' &&  playerPick == 'scissors') ||
        (computerPick == 'scissors' &&  playerPick == 'paper') ||
        (computerPick == 'paper' &&  playerPick == 'rock')) {

        computerResultElem.innerHTML = "Win!";
        computer.score++;
        }
    else {
        playerResultElem.innerHTML = "Win!";
        player.score++;
    }
    setGamePoints();
    setGameEnd();
}

function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;

    checkRoundWinner(playerPick, computerPick);
}

function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}
function setGameEnd() {
    
    var finish = 10;
    var winner;
    if (player.score == finish) {
        gameState = 'ended';
        console.log(gameState);
        winner = player.name;
        alert("The Winner is: " + winner);
        setGameElements();
        
    } else if(computer.score == finish) {
        gameState = 'ended';
        winner = 'computer';
        console.log(gameState);
        alert("The Winner is: " + winner);
        setGameElements();  
    }
}


