// multiple pointers
let exArray = [-4, -3, -2, -1, 0, 1, 2, 5]
// let exString = 'alksjdalksjdlkasjdlks'

// write a function called sumZero which accepts a SORTED array of integers. The function should find
// the first pair whee the sum is 0. return an array that includes both values that sum to zero or
// undefined if a pair does not exist!

// naïve solution:
function sumZero1(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if (arr[i] + arr[j] === 0){
                return [arr[i], arr[j]]
            }
        }
    }
}
// console.log(sumZero1(exArray))

// refactored solution:
function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        }else if(sum > 0) {
            right--;
        }else{
            left++;
        }
    }
}

console.log(sumZero(exArray))

// another multiple pointers problem!
// counts the number of unique values in a sorted array!

let vals = [1,2,3,4,4,4,7,7,12,12,13]

function countUniqueValues(arr){
    var i = 0;
    for(j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
        // console.log(i, j)
    }
    return i + 1
}

console.log(countUniqueValues(vals))