const arr = [23, 54, 54];

// arr.map((item, index, array) => {
// 	console.log('item: ', item, 'index: ', index, 'array: ', array)
// });

// const result = arr.forEach((a) => a);
// console.log(result);

// const result = arr.map((a) => a * 2);
// console.log(result);
// console.log(arr);

const result = arr.map((item) => {
	const x = item + 3;
	return x;
});

console.log(result);