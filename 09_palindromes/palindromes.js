const palindromes = function (str) {
	let strAlpha = "";
	let strBackwardsAlpha = "";
	for (let char in str) {
		if (str[char].toUpperCase() != str[char].toLowerCase()) {
			// Checks if char is alpha
			strAlpha = strAlpha + str[char].toLowerCase();
			strBackwardsAlpha =
				str[char].toLocaleLowerCase() + strBackwardsAlpha;
		}
	}
	if (strAlpha === strBackwardsAlpha) {
		return true;
	} else {
		return false;
	}
};

// Do not edit below this line
module.exports = palindromes;
