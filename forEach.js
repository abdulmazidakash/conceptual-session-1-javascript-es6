// const arr = [23, 45, 65, 65];

// function show(a){
// 	console.log(a);
// }

// show(arr);

// arr.forEach((a) => {
// 	console.log(a)
// })

// const result = arr.forEach((a) => console.log(a));
// console.log(result);

// let sum = 0;
// arr.forEach((item) => {
// 	sum += item;
// });

// console.log(sum);

//callback parameters (item, index, whole array);

const arr = [23, 45, 65, 65];

arr.forEach((item, index, array) => {
	console.log('item: ', item, 'index', index, 'array', array)
})