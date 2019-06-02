// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it.
// If you have an empty array, you need to return it.

// Example:
// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

function theOddsAreSorted(array){
    var odds = [];
    for (var i = 0; i < array.length; ++i) {
        if (array[i] % 2 !== 0) {
            odds.push(array[i]);
        }
    }
    odds.sort(function (a, b) {
        return a - b;
    });
    for (var j = 0; j < array.length; ++j) {
        if (array[j] % 2 !== 0) {
            array[j] = odds.shift();
        }
    }

    return array;
}

console.log(theOddsAreSorted([5, 3, 2, 8, 1, 4]))
