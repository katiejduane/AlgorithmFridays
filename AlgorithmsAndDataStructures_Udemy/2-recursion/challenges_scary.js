//reverse a string recursively
let stringToRev = "cloud";
function reverse(str) {
  if (str.length <= 1) {
    return str;
  }
  return reverse(str.substr(1)) + str[0];
}
console.log(reverse(stringToRev));


//write a funtion that returns true if the string passed to it is a palindrome, otherwise returns false
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false
function isPalindrome(){
  // add whatever parameters you deem necessary - good luck!
}


//write a function which accepts an array and a callback. the function returns true if a single value
//in the array returns true when passed to the callback, otherwise it returns false.
// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(){
  // add whatever parameters you deem necessary - good luck!
}


//write a recursive function which accepts an array of arrays and returns a 
//new array with all values flattened!
// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
function flatten(){
  // add whatever parameters you deem necessary - good luck!
}

