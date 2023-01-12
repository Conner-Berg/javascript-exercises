const convertToCelsius = function (fTemp) {
	let fTempToC = 0;
	fTempToC = ((fTemp - 32) * 5) / 9;
	fTempToC = Math.round(fTempToC * 10) / 10;
	return fTempToC;
};

const convertToFahrenheit = function (cTemp) {
	let cTempToF = 0;
	cTempToF = (cTemp * 9) / 5 + 32;
	cTempToF = Math.round(cTempToF * 10) / 10;
	return cTempToF;
};

// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit,
};
