/*
PSEUDOCODE

1. jika num sama dengan 0, maka return hasil
2. selain itu, looping sepanjang angka dari belakang ke depan
  2.a. jika num lebih besar dibanding angka[i]
    2.a.i. num dikurang angka[i]
    2.a.ii. return roman[i] ditambah function toRoman(num)
*/

function toRoman(num) {
  var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
  var roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM', 'M'];
  var hasil = '';

  if (num == 0) {
    return hasil
  } else {
    for (var i = angka.length - 1; i >= 0; i--) {
      if (num >= angka[i]) {
        num -= angka[i];
        return roman[i] + toRoman(num);
      }
    }
  }
}

console.log(toRoman(13));
