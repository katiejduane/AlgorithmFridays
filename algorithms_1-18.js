const fs = require('fs');
const names = fs.readFileSync('names.txt', 'utf8');

let namesArray = names.split("\n")

function findDrome(name) {
    let revName = name.split("").reverse().join("");
    if (name == revName) {
        return true;
    }
}

for(let i = 0; i < namesArray.length; i++) {
    if(findDrome(namesArray[i])){
        console.log(namesArray[i])
    }
}

//shorter version with .forEach()
namesArray.forEach((element) => {
    let reversedProduct = element.split('').reverse().join('');
    if (element === reversedProduct) {
        ;
        console.log(element)
    }
})

// =================================================== //

const digits = fs.readFileSync('numbers.txt', 'utf8')
// console.log(digits)
let digitsAsString = digits.split('\n').join('')
digitsArray = digitsAsString.split('');

let digitsAsNums = []
for(let i = 0; i < digitsArray.length; i++) {
    digitsAsNums.push(Number(digitsArray[i]))
}

let sum = 0;
for (let i = 0; i < digitsAsNums.length; i++){
    sum += digitsAsNums[i];
}

console.log(sum)
