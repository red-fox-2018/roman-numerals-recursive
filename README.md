# roman-numerals-recursive

FUNCTION toRoman parameter input

  IF input sama dengan 0
    RETURN ''
  END IF
  ELSE
    SET roman sama dengan array dengan nilai 'I','IV','V','IX','X','XL','L','LX','C','CD','D','DC','M'
    SET decimal sama dengan array dengan nilai 1,4,5,9,10,40,50,60,100,400,500,600,1000

    LOOP index i = panjang nilai decimal dikurangi satu, index i lebih besar sama dengan 0 decrement satu
      IF input lebih besar sama dengan decimal index i
        RETURN roman index i ditamabah FUNCTION toRoman dari input sama dengan input dikurangi decimal index i
      END IF
    END LOOP
  END ELSE
END FUNCTION
