const sumAll = function (a, b) {
	let total = 0;
	if (Number.isInteger(a) && a >= 0 && Number.isInteger(b) && b >= 0) {
		if (a <= b) {
			while (a <= b) {
				total += a;
				++a;
			}
			return total;
		} else if (b <= a) {
			while (b <= a) {
				total += b;
				++b;
			}
			return total;
		}
	} else {
		return "ERROR";
	}
};

// Do not edit below this line
module.exports = sumAll;
