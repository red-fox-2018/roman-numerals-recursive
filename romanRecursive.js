function toRoman(number) {
  var roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
  var arabic = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  if (number === 0) {
    return '';
  } else {
    for (var i = arabic.length - 1; i >= 0; i--) {
      while (number >= arabic[i]) {
        number -= arabic[i];
        return roman[i] + toRoman(number);
      }
    }
  }
}


console.log(toRoman(1453));
