/* 
set function toRoman with number parameter
if number<=0
    return ''
end if
set var roman with array value
        M,1000
        CM,900
        D,500
        CD,400
        C,100
        XC,90
        L,50
        XL,40
        X,10
        IX,9
        V,5
        IV,4
        I,1
set var result to empty string
loop from i=0 until i<roman length increment
    if i equal index ganjil && not equal with 0
        while number > index
            return roman[i-1] + toRoman(number-roman[i])
        end while
    end if
end loop
end function
*/
function toRoman(num) {
if(num<=0){
    return ''
}
    var roman = [
        'M', 1000,
        'CM', 900,
        'D', 500,
        'CD', 400,
        'C', 100,
        'XC', 90,
        'L', 50,
        'XL', 40,
        'X', 10,
        'IX', 9,
        'V', 5,
        'IV', 4,
        'I', 1,
    ]
    var result = ''
    for (let i = 0; i < roman.length; i++) {
        if (i % 2 == 1 && i != 0) {
            while (num >= roman[i]) {
                return roman[i-1] + toRoman(num-roman[i])
            }
        }
    }
}

console.log(toRoman(4))
console.log(toRoman(9))
console.log(toRoman(8))
console.log(toRoman(23))
console.log(toRoman(1453))
console.log(toRoman(1646))
console.log(toRoman(3644))