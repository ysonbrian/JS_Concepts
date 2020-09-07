const defaultResult = 0;
let currentResult = defaultResult;
let calculationDescription = '';

let addMark = ' + ';
let minusMark = ' - ';
let multiplyMark = ' * ';
let divideMark = ' / ';

let userInputValue = userInput.value;
function add() {
	calculationDescription += userInput.value + addMark;
	currentResult += +userInput.value;
	outputResult(currentResult, calculationDescription);

	userInput.value = '';
}

function minus() {
	calculationDescription += userInput.value + minusMark;
	currentResult -= +userInput.value;
	outputResult(currentResult, calculationDescription);

	userInput.value = '';
}

function multiply() {
	calculationDescription += userInput.value + multiplyMark;
	currentResult *= +userInput.value;
	outputResult(currentResult, calculationDescription);
	userInput.value = '';
}

function divide() {
	calculationDescription += userInput.value + multiplyMark;
	currentResult /= +userInput.value;
	outputResult(currentResult, calculationDescription);
	userInput.value = '';
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', minus);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

console.log(calculationDescription);
console.log(currentResult);
