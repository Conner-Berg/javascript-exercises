const add = function (a, b) {
	return a + b;
};

const subtract = function (a, b) {
	return a - b;
};

const sum = function (array) {
	let total = 0;
	for (let index in array) {
		total += array[index];
	}
	return total;
};

const multiply = function (array) {
	let total = 1;
	for (let index in array) {
		total *= array[index];
	}
	return total;
};

const power = function (a, b) {
	let total = a;
	while (b > 1) {
		total *= a;
		--b;
	}
	if (b === 0) {
		total = 1;
	} else if (b <= 0) {
		total = "ERROR";
	}
	return total;
};

const factorial = function (a) {
	let total = a;
	while (a > 1) {
		--a;
		total *= a;
	}
	if (a === 0) total = 1;
	return total;
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
