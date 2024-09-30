const numbers = [23, 43, 53, 65, 79, 67];

// let find = null;

// for (let item of numbers){
// 	if(item > 50){
// 		find = item;
// 		break;
// 	}
// }

// const find = numbers.find((item) => item > 50 && item % 2 === 0);

// console.log(find);

const result = numbers.filter((item) => item > 50 && item % 2 === 0);
console.log(result);