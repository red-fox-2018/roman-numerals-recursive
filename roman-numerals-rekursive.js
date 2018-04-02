function toRoman(num){

  const kamus = [
    {
      latin : 1000,
      romawi : 'M'
    },{
      latin : 900,
      romawi : 'CM'
    },{
      latin : 500,
      romawi : 'D'
    },{
      latin : 400,
      romawi : 'CD'
    },{
      latin : 100,
      romawi : 'C'
    },{
      latin : 90,
      romawi : 'XC'
    },{
      latin : 50,
      romawi : 'L'
    },{
      latin : 40,
      romawi : 'XL'
    },{
      latin : 10,
      romawi : 'X'
    },{
      latin : 9,
      romawi : 'IX'
    },{
      latin : 5,
      romawi : 'V'
    },{
      latin : 4,
      romawi : 'IV'
    },{
      latin : 1,
      romawi : 'I'
    }]

  if (num == 0) {

    return ''

  } else {

    for (var i = 0; i < kamus.length; i++) {

      if (num >= kamus[i].latin) {

        num -= kamus[i].latin

        return kamus[i].romawi + toRoman(num)

      }

    }

  }

}

console.log('My totally sweet testing script\n');
console.log('input | expected | actual');
console.log('======|==========|=======');
console.log('4     | IV       |', toRoman(4));
console.log('9     | IX       |', toRoman(9));
console.log('23    | XXIII    |', toRoman(23));
console.log('1453  | MCDLIII  |', toRoman(1453));
console.log('1646  | MCDXLVI  |', toRoman(1646));
