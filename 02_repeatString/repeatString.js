const repeatString = function (string, num) {
	let output = "";
	for (i = 1; i <= num; ++i) {
		output += string;
	}
	if (num < 0) {
		output = "ERROR";
	}
	return output;
};

// Do not edit below this line
module.exports = repeatString;
