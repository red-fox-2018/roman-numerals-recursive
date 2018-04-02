function toRoman(num) {
  let romNum = [
    {
      number: 1,
      roman: 'I'
    }, {
      number: 4,
      roman: 'IV'
    }, {
      number: 5,
      roman: 'V'
    }, {
      number: 9,
      roman: 'IX'
    }, {
      number: 10,
      roman: 'X'
    }, {
      number: 40,
      roman: 'XL'
    }, {
      number: 50,
      roman: 'L'
    }, {
      number: 90,
      roman: 'XC'
    }, {
      number: 100,
      roman: 'C'
    }, {
      number: 400,
      roman: 'CD'
    }, {
      number: 500,
      roman: 'D'
    }, {
      number: 900,
      roman: 'CM'
    }, {
      number: 1000,
      roman: 'M'
    }
  ]
  var str = ''
  if(num == 0) {
    return str
  }
  for(var i = romNum.length-1; i >= 0; i--) {
    if(num >= romNum[i].number) {
      num -= romNum[i].number
      str += romNum[i].roman
      return str + toRoman(num)
    }
  }
}

console.log(toRoman(159));
