// Frequency Counter - sameFrequency
// Write a function called sameFrequency.Given two positive integers, 
// find out if the two numbers have the same frequency of digits.
// Your solution MUST have the following complexities:Time: O(N)
// (182, 182)
// (34, 33)

function numberFrequency(num1, num2){
    let obj1 = {}
    let obj2 = {}
    let stringNum1 = num1.toString()
    let stringNum2 = num2.toString()
    if (stringNum1.length !== stringNum2.length){
        return false
    }
    for(let num of stringNum1){
        if(obj1[num]){
            obj1[num]++ 
        }else{
            obj1[num] = 1
        }
    }
    for(let num of stringNum2){
        if(obj2[num]){
            obj2[num]++
        }else{
            obj2[num] = 1
        }
    }
    for(let key in obj1){
        if(!obj2[key]){
            return false
        }
        if(obj1[key] !== obj2[key]){
            return false
        }
    }
    return true;
}

// console.log(numberFrequency(131, 113))


// write a function that tests if a pair of 
// #s in the array matches the target average
//(two args)

function targetAverage(array, avg){
    for(let i = 0; i < array.length; i++){
        for (let j = 1; j < array.length; j++) {
            if ((array[i] + array[j]) / 2 == avg) {
                return true
            }
        }
    } 
    return false    
}

// console.log(targetAverage([1,2,3,4,5], 16))

function betterAverage(array, avg){
    let i = 0;
    let j = array.length -1;
    while(i < j){
        let average = ((array[i] + array[j]) / 2)
        if(average < avg){
            i++
        }else if(average > avg){
            j--
        }else if(average == avg){
            return true
        }
    }
    return false
}

// console.log(betterAverage([1,2,3,4,5], 2.5))


//write a function which accepts a variable number of arguments and checks whether there are any 
//duplicates among the args passed in. solve this with either the freq counter pattern or mult pointers pattern!
function areThereDuplicates(arguments) {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}
// console.log(areThereDuplicates())


//write a function which takes two strings and checks whether the chars in the first string form
//a subsequence of the chars in the second string. the function should check whether the chars in
//the first string appear somewhere in the second string, not necessarily all next to eachother, but
//without their order changing.
//isSubsequence('hello', 'hello world') // true
//isSubsequence('sing', 'string') // true
//isSubsequence('abc', 'acb') // false (order matters)
function isSubsequence(str1, str2) {
    // good luck. Add any arguments you deem necessary.
    let i = 0;
    let j = 0;
    if (!str1) return true;
    while (j < str2.length) {
        if (str2[j] === str1[i]) i++;
        if (i === str1.length) return true;
        j++;
    }
    return false;
    
}
console.log(isSubsequence('hello', 'hello world'))

//given an array on integers and a number, write a function which fins the maximum sum of a subarray
//with thelength of the number passed into the function. note that a subarray MUST consist of consecutive
//elements from the original array!
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}


//write a function called minSUbArrayLen which accepts two params, an array of pos integers and a
//pos integer. The function should return the minimal length of a contiguous subarray of which the 
//sum is greater than or equal to the integer passed to the function. if there isn't one, return 0.
function minSubArrayLen(){

}


//write a function that accepts a string and returns the length of the longest substring with all
//distinct characters.
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
function findLongestSubstring() {
    // add whatever parameters you deem necessary - good luck!
}

// collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;

function makeCounter(input){
    input = input.toLowerCase();
    let counter = {}
    for(letter of input){
        if(letter != ' '){
            counter[letter] = (counter[letter] || 0) + 1;
        }
    }
    return counter;
}

// console.log(makeCounter('dollshead trail'))