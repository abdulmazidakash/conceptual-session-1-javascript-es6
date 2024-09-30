const student = [
	{name: 'mehedy', email: 'mehedy@gmail.com', avg: 56, fiftyPercent: true},
	{name: 'akash', email: 'mehedy@gmail.com', avg: 45, fiftyPercent: false},
	{name: 'shakib', email: 'mehedy@gmail.com', avg: 32, fiftyPercent: false},
	{name: 'tamim', email: 'mehedy@gmail.com', avg: 34, fiftyPercent: true},
	{name: 'mashrafe', email: 'mehedy@gmail.com', avg: 56, fiftyPercent: false},
];

//scic = avg = 48, fiftyPercent = true;

// const scic = student.filter((person) => person.avg >= 48 && person.fiftyPercent === true);

// console.log(scic);

// const findScic = (student) => {
// 	const scic = student.filter((person) => person.avg >= 48 && person.fiftyPercent === true);
// 	// return scic;
// 	const names = scic.map((name) => name.name);
// 	return names;
// };

const findScic = (student) => student.filter((person) => person.avg >= 48 && person.fiftyPercent).map((p) => p.name);

const result = findScic(student);
console.log(result);
