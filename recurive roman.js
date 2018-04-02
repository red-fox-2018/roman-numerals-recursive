function romanNumber(num) {
	// body...
	var r = ''
		decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
	if (num===0) {
		return	''
	}
	else{
		for(var i=0;i<decimals.length;i++){
			if (num>=decimals[i]) {
				return roman[i] + romanNumber(num-decimals[i])
			}
		}
	}
}
console.log("input | expected | actual");
console.log("———|—————|———");
console.log("4     | IV       | ", romanNumber(4));
console.log("9     | IX       | ", romanNumber(9));
console.log("13    | XIII     | ", romanNumber(13));
console.log("1453  | MCDLIII  | ", romanNumber(1453));
console.log("1646  | MDCXLVI  | ", romanNumber(1646));