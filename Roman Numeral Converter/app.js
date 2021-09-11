let definition = [
	[1000, "M"],
	[900, "CM"],
	[500, "D"],
	[400, "CD"],
	[100, "C"],
	[90, "XC"],
	[50, "L"],
	[40, "XL"],
	[10, "X"],
	[9, "IX"],
	[5, "V"],
	[4, "IV"],
	[1, "I"]
]

function convertToRoman(num) {
 	var _result = "";
	if (num === 0) {
		_result = "nulla"
	} else {
		for (var i = 0; i < definition.length; i++) {
			while (num >= definition[i][0]) {
				_result += definition[i][1];
				num -= definition[i][0];
			}
		}		
	}
	return _result;
}

console.log(convertToRoman(0));