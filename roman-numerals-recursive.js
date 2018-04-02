
function toRoman(int){
  let result = []

  if(int <= 0){
    return result;
  } else {
    while(int >= 1000){
      result.push('M')
      return result + toRoman(int-1000)
    }

    while(int >= 900){
      result.push('CM')
      return result + toRoman(int-900)
    }

    while(int >= 500){
      result.push('D')
      return result + toRoman(int-500)
    }

    while(int >= 400){
      result.push('CD')
      return result + toRoman(int-400)
    }

    while(int >= 100){
      result.push('C')
      return result + toRoman(int-100)
    }

    while(int >= 90){
      result.push('XC')
      return result + toRoman(int-90)
    }

    while(int >= 50){
      result.push('L')
      return result + toRoman(int-50)
    }

    while(int >= 40){
      result.push('XL')
      return result + toRoman(int-40)
    }

    while(int >= 10){
      result.push('X')
      return result + toRoman(int-10)
    }

    while(int >= 9){
      result.push('IX')
      return result + toRoman(int-9)
    }

    while(int >= 5){
      result.push('V')
      return result + toRoman(int-5)
    }

    while(int >= 4){
      result.push('IV')
      return result + toRoman(int-4)
    }

    while(int >= 1){
      result.push('I')
      return result + toRoman(int-1)
    }
  }
}


console.log('My totally sweet testing script\n');
console.log('input | expected | actual');
console.log('------|----------|---------');
console.log('4     | IV       |', toRoman(4));
console.log('9     | IX       |', toRoman(9));
console.log('23    | XXIII    |', toRoman(23));
console.log('1453  | MCDLIII  |', toRoman(1453));
console.log('1646  | MDCXLVI  |', toRoman(1646));
