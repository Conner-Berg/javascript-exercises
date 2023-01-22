const findTheOldest = function (array) {
	// sets yearOfDeath key to current year if missing
	array.forEach((person) => {
		if (person.yearOfDeath === undefined) {
			person.yearOfDeath = new Date().getFullYear();
		}
	});
	// copies people array and adds age key
	const peopleAges = array.map((person) => ({
		...person,
		age: person.yearOfDeath - person.yearOfBirth,
	}));
	// finds age key with highest value
	let highestAge = 0;
	peopleAges.forEach((person) => {
		if (person.age > highestAge) {
			highestAge = person.age;
		}
	});
	// returns object with highest age key
	return peopleAges.find((person) => {
		return person.age === highestAge;
	});
};

// Do not edit below this line
module.exports = findTheOldest;
