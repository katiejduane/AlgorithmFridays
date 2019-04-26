// write a function called power which accepts a base and an exponent,the function should return
// the power of the base to the exponent
// 2 to the power of 4 = 2*2*2*2

// function power(base, exp){
//     if(exp === 1){
//         return base
//     }else{
//         console.log(base, exp)
//         return base * power(base, exp-1)
//     }
// }

//the above function works here but fails in tests on udemy...

function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base,exponent-1);
}

// console.log(power(2,6))

//reverse a string recursively
let stringToRev = 'cloud';
function reverse(str) {
    if (str.length <= 1) {
        return str;
    }
    return reverse(str.substr(1)) + str[0];
}

console.log(reverse(stringToRev));


// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
function productOfArray(arr){
    
}


// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 
function recursiveRange() {

}

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
function fib() {
    // add whatever parameters you deem necessary - good luck!  
}