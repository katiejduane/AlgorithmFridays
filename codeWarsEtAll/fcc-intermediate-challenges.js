// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all 
// the numbers between them. The lowest number will not always come first.

function sumAll(arr) {
   let start = (arr[0] > arr[1]) ? arr[0] : arr[1]
   console.log(start)
}

sumAll([1, 4]);