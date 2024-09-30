// const myInfo = {
// 	name: 'akash',
// 	age: 23,
// 	address: 'feni',
// 	sosurName: 'katappa',
// 	sosurBari: 'b.baria',
// 	phone: 34543,
// 	contact: {
// 		phone: 345,
// 		email: 'akash@gmail.com'
// 	}
// }

// const obj2 = {...myInfo};

// obj2.married = false;
// obj2.age = 34;

// console.log(myInfo);
// console.log(obj2);

// const {contact} = myInfo;
// console.log(contact);
// const {email} = contact;
// console.log(email);

// const {contact:{email}} = myInfo;
// console.log(email)

//object access: dot notation, bracket notation

const myInfo = {
	name: 'akash',
	age: 23,
	address: 'feni',
	sosurName: 'katappa',
	sosurBari: 'b.baria',
	phone: 34543,
	contact: {
		phone: 345,
		email: 'akash@gmail.com'
	}
}

console.log(myInfo['sosurName']);

