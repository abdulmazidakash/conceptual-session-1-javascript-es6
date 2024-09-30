// const numbers = [2, 43, 4, 5, 4];

// let sum = 0;
// for (let item of numbers){
// 	sum += item;
// }

// console.log(sum);

// const numbers = [1, 2, 3, 4];

// [1, 2, 3, 4]
// [3, 3, 4]
// [6, 4]
// [10]

//arr.reduce((previous, current) => prev + current, 0);

/*
0 + 1 = 1; (if you give initial value 0)
1 + 2 = 3;
3 + 3 = 6;
6 + 4 = 10;
*/

// const numbers = [1, 2, 3, 4];

// const sum = numbers.reduce((prev, current) => prev + current);
// console.log(sum);

// const multiply = numbers.reduce((prev, current) => prev * current, 1);
// console.log(multiply);

// const numbers = [1, 2, 3, 4];

const numbers = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
const total = numbers.reduce((prev, current) => prev + current.a, 0);

console.log(total);