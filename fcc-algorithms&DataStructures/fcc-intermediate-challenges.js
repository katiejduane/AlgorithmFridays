// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all 
// the numbers between them. The lowest number will not always come first.

function sumAll(arr) {
    // let result = (arr[0] > arr[1]);
    // let start = (result) ? arr[0] : arr[1];
    // let end = (!result) ? arr[0] : arr[1];
    let arr = arr.sort((a, b) => a - b)
    let [start, end] = arr;
}

sumAll([1, 4]);