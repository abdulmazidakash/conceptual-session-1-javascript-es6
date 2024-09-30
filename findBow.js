const bow = [
	{name: 'purnima', job: 'sorkari', salary: 17000},
	{name: 'shabnur', job: 'besorkari', salary: 25000},
	{name: 'alia', job: 'sorkari', salary: 21000},
	{name: 'shreya', job: 'sorkari', salary: 47000},
	{name: 'mariam', job: 'besorkari', salary: 57000}
];

//sorkari >= 20 or besorkari >= 40

// const bows = bow.filter((meye) => (meye.job === 'sorkari' && meye.salary >= 20000) || (meye.job === 'besorkari' && meye.salary >= 40000));

// console.log(bows);

const lottery = Math.floor(Math.random() * bow.length);
// console.log(lottery);

console.log(bow[lottery].name, 'tumi jitso....')