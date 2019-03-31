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

function terrible(arr, num){
    let minLen = Infinity;
    let len = 0;
    let sum = 0;
    let i = 0
    while(i < arr.length){
        if(sum < num){
            sum += arr[i]
            len++
            i++
        }
        if (sum > num) {
            sum = sum - arr[i - len]
            len--
        }
        if(sum === num){
            minLen = Math.min(len, minLen)
        }
    }
    if(minLen === Infinity){
        return 0
    } else{
        return minLen
    }
}

console.log(terrible([1,1,6,3,5,2], 7))


