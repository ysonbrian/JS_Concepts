// const ids = new Set(['Hi', 'from', 'set!']);
// ids.add(2);
// if (ids.has('Hi')) {
//   ids.delete('Hi');
// }

// for (const entry of ids.entries()) {
//   console.log(entry[0]);
// }

// const person1 = { name: 'Max' };
// const person2 = { name: 'Manuel' };
// const personData = new Map([[person1, [{ date: 'yesterday', price: 10 }]]]);

// personData.set(person2, [{ date: 'two weeks ago', price: 100 }]);

// console.log(personData);
// console.log(personData.get(person1));

// for (const [key, value] of personData.entries()) {
// 	console.log(key, value);
// }

// for (const key of personData.keys()) {
// 	console.log(key);
// }

// for (const value of personData.values()) {
// 	console.log(value);
// }

// console.log(personData.size);

// let person = { name: 'Max' };
// const persons = new WeakSet();
// persons.add(person);

// console.log(persons);

// const personData = new WeakMap();

// personData.set(person, 'Extra Info!');

// person = null;

// console.log(personData);

const numbers = [1, 2, 3, 4, 5, 8, 9, 10];
const filterNumbers = numbers.filter((number) => number > 5);
const mapNumbers = numbers.map((number) => {
	num: numbers;
});
const sum = numbers.reduce((preVal, curVal) => preVal + curVal, 0);

console.log(filterNumbers);
console.log(mapNumbers);
console.log(sum);

function findMax(...numbers) {
	return Math.max(numbers);
}
