# roman-numerals-recursive
# CREATE function toRoman with one parameter number
#   INITIALIZE numbers to array of object roman and integer
#   BASE CASE >>> IF num equal to 0, return empty string
#   RECURSIVE >>> ELSE,
#       LOOP from 0 to numbers length and plus one every iteration
#           IF num greater than equal to numbers[i].latin
#               num minus numbers[i].latin
#               RETURN numbers[i].roman plus function toRoman