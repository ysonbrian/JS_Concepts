// const numbers = [1, 2, 3];
// console.log(numbers);

// // const moreNumbers = Array(5, 2);
// // console.log(moreNumbers);

// // const yetMoreNumbers = Array.of(1, 2);
// // console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const hobbies = ['Cooking', 'Sports'];
// const personalData = [30, 'Max', {moreDetail: []}];

// const analyticsData = [[1, 1.6], [-5.4, 2.1]];

// for (const data of analyticsData) {
//   for (const dataPoint of data) {
//     console.log(dataPoint);
//   }
// }

// console.log(personalData[1]);

// const hobbies = ['Sports', 'Cooking'];
// hobbies.push('Reading');
// hobbies.unshift('Coding');
// const poppedValue = hobbies.pop();
// hobbies.shift();
// console.log(hobbies);

// hobbies[1] = 'Coding';
// // hobbies[5] = 'Reading'; // rarely used
// console.log(hobbies, hobbies[4]);

// hobbies.splice(1, 0, 'Good Food');
// console.log(hobbies);

// const removedElements = hobbies.splice(-2, 1);
// console.log(hobbies);

// const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// const storedResults = testResults.slice(2);

// testResults.push(5.91);

// console.log(storedResults, testResults);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// // for (const price of prices) {
// // 	taxAdjustedPrices.push(price * (1 + tax));
// // }

// prices.forEach((price, idx, prices) => {
// 	const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
// 	taxAdjustedPrices.push(priceObj);
// });

// console.log(taxAdjustedPrices);

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

const taxAdjustedPrices = prices.map((price, idx, prices) => {
	const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
	return priceObj;
});

console.log(taxAdjustedPrices);

const studentScores = [99, 100, 88, 79, 81];
// const studentData = [];

// studentScores.forEach((score, idx, scores) => {
// 	const studentObj = { id: idx, grade: score };
// 	studentData.push(studentObj);
// });

// const studentData = studentScores.map((score, idx, scores) => {
// 	const studentObj = { id: idx, grade: score, avg: score / 2 };
// 	return studentObj;
// });

// console.log(studentData);
function checkSort(a, b) {
	if (a > b) {
		return 1;
	} else if (a === b) {
		return 0;
	} else {
		return -1;
	}
}
const sortedScores = studentScores.sort(checkSort);
console.log(sortedScores);
