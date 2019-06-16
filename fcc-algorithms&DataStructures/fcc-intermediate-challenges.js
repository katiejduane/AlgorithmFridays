// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all 
// the numbers between them. The lowest number will not always come first.

function sumAll(arr) {
    // let result = (arr[0] > arr[1]);
    // let start = (result) ? arr[0] : arr[1];
    // let end = (!result) ? arr[0] : arr[1];
    arr = arr.sort((a, b) => a - b)
    let [low, high] = arr;
    let sum = 0;
    for(let i = low; i <= high; i++){
        sum += i
    }
    return sum;
}
// console.log(sumAll([1, 4]));


// return the symmetric difference of two arrays
function diffArray(arr1, arr2) {
    let joinedArr = arr1.concat(arr2).sort((a,b) => a - b);
    let newArr = []
    for(let i = 0; i < joinedArr.length; i++){
        if(joinedArr.indexOf(joinedArr[i]) === joinedArr.lastIndexOf(joinedArr[i])){
            newArr.push(joinedArr[i])
        }
    }
    return newArr;
}

// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));


// seek and destroy: remove all elems in an array that match the params passed in
// you will have to use the arguments object
function destroyer(arr) {
    let aaargs = Array.from(arguments).slice(1);
    let newArr = arr.filter(function(val){
        return aaargs.indexOf(val) < 0
    })
    return newArr;
}
// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));


// wherefore art thou?
function whatIsInAName(collection, source) {
    let sourceKeys = Object.keys(source);
    return collection.filter(function(obj){
        for(let i = 0; i < sourceKeys.length; i++){
            if(!obj.hasOwnProperty(sourceKeys[i]) || obj[sourceKeys[i]] !== source[sourceKeys[i]]){
                return false;
            }
        }
        return true;
    });
}

// console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));


// spinal-tap-case
function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
}

console.log(spinalCase('This Is Spinal Tap'));