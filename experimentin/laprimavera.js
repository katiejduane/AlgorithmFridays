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
let toCount = "supercalifragilisticexpialidocious!";
let moreToCount = "A horse of course!";



// filter out the numbers/non numbers
let toFilter = [1,3,'h','k',1,7,'b',3,'e'];



// remove the duplicates
let declutterMe = [1,2,3,6,8,1,2,5];



// count unique values
let vals = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13];



// sum range recursive
let num = 8;


module.exports = practice;