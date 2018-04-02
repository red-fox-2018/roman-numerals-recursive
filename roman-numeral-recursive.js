function toRoman(number) {
  var roman = ["M","D","CD","C","L","XL","X","IX","V","IV","I"];
  var angka = [1000,500,400,100,50,40,10,9,5,4,1];
  var textRoman  = '';


  for(var i = 0 ; i < roman.length ; i++){
    if(number < 1){
      return textRoman;
    }
    if(number >= angka[i]){
      textRoman = roman[i];
      return textRoman + toRoman(number - angka[i]);
    }
  }
}


console.log('My totally sweet testing script\n');
console.log('input | expected | actual');
console.log(' 4    |   IV     |',toRoman(4));
console.log(' 9    |   IX     |',toRoman(9));
console.log(' 23   |   XXIII  |',toRoman(23));
console.log(' 1453 |  MCDLIII |',toRoman(1453));
console.log(' 1646 |  MDCXLVI |',toRoman(1646));
