// function sayHello(name) {
//   console.log('Hi ' + name);
// }

const checkInput = () => {
	console.log('You need to input something!');
};

const sayHello = (checkHendler, a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) => {
	for (data of a) {
		if (data % 2 == 1) {
			checkHendler();
			return;
		}
		console.log(data);
	}
};

sayHello(checkInput, [2, 4, 6, 8, 10]);
sayHello(checkInput);
