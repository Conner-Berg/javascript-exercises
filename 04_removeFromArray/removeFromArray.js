const removeFromArray = function (array, ...valuesToRemove) {
	let testArray = [...array];
	for (let i = array.length - 1; i >= 0; --i) {
		for (let j = valuesToRemove.length - 1; j >= 0; --j) {
			if (array[i] === valuesToRemove[j]) {
				testArray.splice(i, 1);
			}
		}
	}
	return testArray;
};

// Do not edit below this line
module.exports = removeFromArray;
