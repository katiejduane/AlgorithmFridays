// combine two arrays using concat method
// you can also use concat to add elems to the end of an array (instead of push)
function nonMutatingConcat(original, attach) {
   return original.concat(attach)
}
var first = [1, 2, 3];
var second = [4, 5];
console.log(nonMutatingConcat(first, second));


// filter an array with filter
// var filteredList = watchList.map(function (elem) {
//     return { title: elem["Title"], rating: elem["imdbRating"] }
// }).filter((elem) => elem.rating >= 8);

// console.log(filteredList); 

// making your own version of 'filter'
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function (callback) {
    var newArray = [];
    s.forEach((item) => {
        if(callback(item)) newArray.push(item)
    })
    console.log(newArray)
    return newArray;

};

var new_s = s.myFilter(function (item) {
    return item % 2 === 1;
});


//REDUCE
// Array.prototype.reduce(), or simply reduce(), is the most general of all array operations in 
// JavaScript.You can solve almost any array processing problem using the reduce method.
// This is not the case with the filter and map methods since they do not allow interaction between 
// two different elements of the array.For example, if you want to compare elements of the array, 
// or add them together, filter or map could not process that. The reduce method allows for more 
// general forms of array processing, and it's possible to show that both filter and map can be 
// derived as a special application of reduce.


// .every()
function checkPositive(arr) {
    // return arr.every(val => val > 0);
    return arr.every(function(currentVal) {
        return currentVal > 0;
    })
}
console.log(checkPositive([1, 2, 3, 4, 5]));

// .some()
function checkPositive(arr) {
    return arr.some(val => val > 0);
}
console.log(checkPositive([1, 2, 3, -4, 5]));

// CURRYING functions
// The arity of a function is the number of arguments it requires.Currying a function means 
// to convert a function of N arity into N functions of arity 1. In other words, it restructures 
// a function so it takes one argument, then returns another function that takes the next argument, 
// and so on.

//Un-curried function
function unCurried(x, y) {
    return x + y;
}

//Curried function
function curried(x) {
    return function (y) {
        return x + y;
    }
}
curried(1)(2) // Returns 3

// This is useful in your program if you can't supply all the arguments to a function at one time. 
// You can save each function call into a variable, which will hold the returned function reference 
// that takes the next argument when it's available.Here's an example using the curried function in 
// the example above:

// Call a curried function in parts:
var funcForY = curried(1);
console.log(funcForY(2)); // Prints 3


// Similarly, partial application can be described as applying a few arguments to a function at a 
// time and returning another function that is applied to more arguments.
//     Here's an example:

//Impartial function
function impartial(x, y, z) {
    return x + y + z;
}
var partialFn = impartial.bind(this, 1, 2);
partialFn(10); // Returns 13

// another example
function add(x) {
    return function (y) {
        return function (z) {
            return x + y + z
        }
    }
}
add(10)(20)(30);