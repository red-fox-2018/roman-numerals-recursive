# roman-numerals-recursive

**PSEUDOCODE**

SET int WITH input from user
SET result WITH []

IF int <= 0
  return result
  ELSE
    WHILE int >= 1000
      DO  PUSH result WITH M
          return result + (int-1000)
    WHILE int >= 900
      DO  PUSH result WITH CM
          return result + (int-900)
    WHILE int >= 500
      DO  PUSH result WITH D
          return result + (int-500)
    WHILE int >= 400
      DO  PUSH result WITH CD
          return result + (int-400)
    WHILE int >= 100
      DO  PUSH result WITH C
          return result + (int-100)
    WHILE int >= 90
      DO  PUSH result WITH XC
          return result + (int-90)
    WHILE int >= 50
      DO  PUSH result WITH L
          return result + (int-50)
    WHILE int >= 40
      DO  PUSH result WITH XL
          return result + (int-40)
    WHILE int >= 10
      DO  PUSH result WITH X
          return result + (int-10)
    WHILE int >= 9
      DO  PUSH result WITH IX
          return result + (int-9)
    WHILE int >= 5
      DO  PUSH result WITH V
          return result + (int-5)
    WHILE int >= 4
      DO  PUSH result WITH IV
          return result + (int-4)
    WHILE int >= 1
      DO  PUSH result WITH I
          return result + (int-1)
