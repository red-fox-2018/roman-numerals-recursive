function toRoman(num) {
  let obj = {M:1000,
             CM:900, 
             D:500,
             CD:400, 
             C:100,
             XC:90,
             L:50,
             XL:40,
             X:10,
             IX:9,
             V:5,
             IV:4,
             I:1};
  if (num === 0) return '';
  for (let i in obj) {
    while (num >= obj[i]) {
      return i + toRoman(num-obj[i]);
    }
  }
}
console.log('My totally sweet testing script\n');
console.log('  Latin   |   Roman  ');
console.log('----------|----------');
console.log('    4     |'+'    '+toRoman(4));
console.log('    9     |'+'    '+toRoman(9));
console.log('    23    |'+'    '+toRoman(23));
console.log('    1453  |'+'    '+toRoman(1453));
console.log('    1646  |'+'    '+toRoman(1646));


