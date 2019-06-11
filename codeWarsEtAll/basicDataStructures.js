// arrays and the spread operator

// let thisArray = [true, true, undefined, false, null];
// let thatArray = [...thisArray];
// thatArray equals [true, true, undefined, false, null]
// thisArray remains unchanged, and is identical to thatArray
// console.log(thisArray, thatArray)

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        newArr.push([...arr])
        num--;
    }
    return newArr;
}
// console.log(copyMachine([true, false, true], 2));


// combining arrays with spread operator
let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];
let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
// thatArray now equals ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']

function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['Learning', ...fragment, 'is', 'fun']
    return sentence;
}
// console.log(spreadOut());

// INDEX OF PRACTICE
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates') // returns -1
fruits.indexOf('oranges') // returns 2
fruits.indexOf('pears') // returns 1, the first index at which the element exists

function quickCheck(arr, elem) {
    let result = (arr.indexOf(elem) > -1) ? true : false
    return result
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'shrooms'));


