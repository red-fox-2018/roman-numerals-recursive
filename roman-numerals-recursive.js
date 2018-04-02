function toRoman(angkaInput){
  let angkaRomawi = ''
  let arrRoman = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
  let arrArabic = [1, 5, 10, 50, 100, 500, 1000]

  if(angkaInput< 1){
    return ''
  }

    for(let i=1; i<=arrArabic.length; i++){
      if(angkaInput === 4){
        debugger
        angkaRomawi += 'IV'
        angkaInput -= 4
      }
      else if(angkaInput === 9){
        debugger
        angkaRomawi += 'IX'
        angkaInput -= 9
      }
      else if(angkaInput >= 40 && angkaInput < 50){
        debugger
        angkaRomawi += 'XL'
        angkaInput -= 40
      }
      else if(angkaInput >= 90 && angkaInput < 100){
        debugger
        angkaRomawi += 'XC'
        angkaInput -= 90
      }
      else if(angkaInput >= 400 && angkaInput < 500){
        debugger
        angkaRomawi += 'CD'
        angkaInput -= 400
      }
      else if(angkaInput >= 900 && angkaInput < 1000){
        debugger
        angkaRomawi += 'CM'
        angkaInput -= 900
      }
      else if(angkaInput >= 1000){
        debugger
        angkaRomawi += 'M'
        angkaInput -= 1000
      }
      else if(angkaInput < arrArabic[i] && angkaInput >= arrArabic[i-1]){
        debugger
        angkaRomawi += arrRoman[i-1]
        angkaInput -= arrArabic[i-1]
      }
    }

  return angkaRomawi + toRoman(angkaInput)
  // console.log(angkaRomawi)
}

console.log('My totally sweet testing script\n')
console.log('input | expected | actual')
console.log('______|__________|________')
console.log('4     |IV        |',toRoman(4))
console.log('9     |IX        |',toRoman(9))
console.log('23    |XXIII     |',toRoman(23))
console.log('1453  |MCDLIII   |',toRoman(1453))
console.log('1646  |MDCXLVI   |',toRoman(1646))
