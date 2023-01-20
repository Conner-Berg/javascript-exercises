const fibonacci = function (num) {
	num = Number(num) - 1;
	if (num < 0) return "OOPS";
	let sequence = [1, 1];
	while (sequence[num] === undefined) {
		sequence.push(
			sequence[sequence.length - 1] + sequence[sequence.length - 2]
		);
	}
	return sequence[num];
};

// Do not edit below this line
module.exports = fibonacci;
