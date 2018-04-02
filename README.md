# roman-numerals-recursive
toRoman(input)

iniatiate objkamus { "M":1000, "CM":900, "D":500, "CD":400, "C":100, "XC":90, "L":50, "XL":40, "X":10, "IX":9, "V":5, "IV":4, "I":1}


  if[input equal 0]
    return string result
  else
    for[every variabel roman value in objkamus]
      if[input greater or equal objkamus value]
        return roman  and toRoman [input minus value of objkamus]
