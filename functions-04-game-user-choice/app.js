const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const computerRandomList = ['ROCK', 'PAPER', 'SCISSORS'];
const resultData = [
	['TIE', 'LOSE', 'WIN'],
	['WIN', 'TIE', 'LOSE'],
	['LOSE', 'WIN', 'TIE'],
];

const getPlayerChoice = function () {
	const selection = prompt(
		`${ROCK}, ${PAPER} or ${SCISSORS}?`,
		''
	).toUpperCase();
	if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
		alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
		return DEFAULT_USER_CHOICE;
	}
	return selection;
};

const getComputerChoice = function () {
	const computerChoice = Math.floor(Math.random() * 3);
	console.log(computerChoice);
	return computerChoice;
};

const checkResult = function (player, computer) {
	if (player == 'ROCK') {
		return resultData[0][computer];
	} else if (player == 'PAPER') {
		return resultData[1][computer];
	} else {
		return resultData[2][computer];
	}
};

startGameBtn.addEventListener('click', function () {
	console.log('Game is starting...');
	const playerSelection = getPlayerChoice();
	const computerSelection = getComputerChoice();
	const result = checkResult(playerSelection, computerSelection);
	console.log(playerSelection);
	console.log(computerSelection);
	console.log(result);
});
