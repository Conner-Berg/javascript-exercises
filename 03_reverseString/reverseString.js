const reverseString = function (string) {
	let output = "";
	while (string) {
		output += string.slice(-1);
		string = string.slice(0, -1);
	}
	return output;
};

// Do not edit below this line
module.exports = reverseString;
