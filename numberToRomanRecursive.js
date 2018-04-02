function toRoman(number){
  const symbol = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M']
  const value = [1,4,5,9,10,40,50,90,100,400,500,900,1000]
  if (number == 0) {
    return ''
  } else {
    for (var i = symbol.length-1; i >= 0; i--) {
      if (number >= value[i]) {
        return symbol[i] + toRoman(number-value[i])
      }
    }
  }
}
console.log(toRoman(135));
