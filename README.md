# roman-numerals-recursive

PSEUDOCODE

STORE 'num' with number value
STORE 'toRoman' with function value
  STORE 'roman' with nested array value
  STORE 'roman' nested array value index 0 with number value
  STORE 'roman' nested array value index 1 with roman value

  IF 'num' equal to 0
    RETURN ''
    ELSE
      STORE 'i' with 0
      FOR 'i' equal to 0, 'i' less than 'roman' length, ADD 'i' by 1
        IF 'roman' index 'i',0 less than equal 'num'
            RETURN 'roman' index 'i',1 ADD BY 'toRoman' with parameter 'num' MINUS by 'roman' index 'i',0
