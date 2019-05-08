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
function factorial(num) {
  if (num <= 1) {
    return 1;
  }
  return num * factorial(num - 1);
}
// console.log(factorial(4))

//write a function called productOfArray that takes in array of numsand returns the product of them all!
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

let mySillyArr = [1,2,3,3] 

function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}

// console.log(productOfArray(mySillyArr))


//write a function called recursive range which accepts a number and adds up all the numbers from 0
//to the number passed to the function.
// recursiveRange(6) // 21
// recursiveRange(10) // 55 
function recursiveRange(num){
   if (num === 0) return num;
   return num + recursiveRange(num -1)
}
// console.log(recursiveRange(4))


//write a function called fib which accepts a number and returns the nth number in the fibonacci
//sequence. 1,1,2,3,5,8,13,21,34,55
// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(1))