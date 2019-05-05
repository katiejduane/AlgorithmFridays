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


//write a function which accepts a numberand returns the factorial of that number. a factorial is the
//product of an integer and all the integers below it. 
// factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040
function factorial(num){
    
}

//write a function called productOfArray that takes in array of numsand returns the product of them all!
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
function productOfArray(arr){

}



//write a function called recursive range which accepts a number and adds up all the numbers from 0
//to the number passed to the function.
// recursiveRange(6) // 21
// recursiveRange(10) // 55 
function recursiveRange(){
   
}


//write a function called fib which accepts a number and returns the nth number in the fibonacci
//sequence. 1,1,2,3,5,8...
// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
function fib(){
  // add whatever parameters you deem necessary - good luck!  
}


