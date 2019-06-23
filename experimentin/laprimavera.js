// reverse a string 2 ways
let string = "banana phone";
let anotherString = "Quinn";

let practice = {}

// # 1
practice.reverseStr = function(str){
    str = str.toLowerCase().split('')
    let rev = []
    for(let i = str.length; i >= 0; i--){
        rev.push(str[i])
    }
    return rev.join('')
}
// console.log(reverseStr(string));

// # 2 (recursive)
function recurseReverse(str){
    if(str === '') return 'no empty strings, please'
    if(str.length <= 1) return str
    str = str.toLowerCase()
    return recurseReverse(str.substr(1)) + str[0];

}
// console.log(recurseReverse(anotherString))



// make a frequency counter 2 ways
let toCount = "supercalifragil isticexpialidocious!";
let moreToCount = "A horse of course!";

function firstCounter(str){
    let str = str.toLowerCase();
    let counter = {};
    for(i = 0; i < str.length; i++){
        let currLetter = str[i]
        if (currLetter !== " ") {
            if (!counter[currLetter]) {
                counter[currLetter] = 1
            } else {
                counter[currLetter] += 1
            }
        }
    }
    return counter;
}
console.log(firstCounter(toCount))

function secondCounter(str){
    let str = str.toLowerCase();
    let counter = {};
    for(letter of str){
        if(letter !== " "){
            counter[letter] = (counter[letter] || 0) + 1
        }
    }
    return counter;
}
console.log(secondCounter(moreToCount))

// filter out the numbers/non numbers
let toFilter = [1,3,'h','k',1,7,'b',3,'e'];



// remove the duplicates
let declutterMe = [1,2,3,6,8,1,2,5];



// count unique values
let vals = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13];



// sum range recursive
let num = 8;


module.exports = practice;