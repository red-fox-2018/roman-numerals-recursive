function romanRecursive(num){
    var roman=["MMCM","MMD","MMCD","M","CM","D","C","XC","L","XL","X","IX","V","IV","I"]
    var nomer=[2900,2500,2400,1000,900,500,100,90,50,40,10,9,5,4,1]
    for(var i=0; i<nomer.length; i++){
    if(num<=0){
        return ""
    }
    if(num-nomer[i]>=0)
        return roman[i]+(romanRecursive(num-nomer[i]))
    }
   
}
console.log(romanRecursive(20))
console.log(romanRecursive(2999))
