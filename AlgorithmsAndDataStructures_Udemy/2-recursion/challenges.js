// write a function called power which accepts a base and an exponent,the function should return
// the power of the base to the exponent
// 2 to the power of 4 = 2*2*2*2

function power(base, exp){
    if(exp === 1){
        return base
    }else{
        console.log(base, exp)
        return base * power(base, exp-1)
    }
}

console.log(power(2,6))