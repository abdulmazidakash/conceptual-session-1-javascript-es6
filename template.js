const name = 'Akash';
const age = 23;
const job = 'bekar';

// const sentence = 'amar nam ' + name + '. amar boyos ' + '. ami akhon ' + job;

// const sentence = `amar nam ${name}. amar boyos ${age}. ami akhon ${job}.`;

// console.log(sentence);

const myInfo = {
	name: 'akash',
	age: 23,
	address: 'feni',
	sosurName: 'katappa',
	sosurBari: 'b.baria',
	subjects: ['bangla', 'english', 'math']
}

const sentence = `amar nam ${myInfo.name}. amar boyos ${myInfo.age}. amar subjects ${myInfo.subjects.map((sub) => sub).join(' | ')}`;

console.log(sentence);