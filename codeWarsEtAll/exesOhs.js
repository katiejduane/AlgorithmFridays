// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive.
// The string can contain any char.

// Examples input / output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(input){
    let oCount = 0;
    let xCount = 0;
    lowerInput = input.toLowerCase();
    for(let i = 0; i < lowerInput.length; i++){
        if(lowerInput[i] === 'x'){
            xCount++
        } else if (lowerInput[i] === 'o'){
            oCount++
        }
    }
    if(xCount === oCount){
        return true;
    }else{
        return false;
    }
}

console.log(XO('xXooxx'))

function XO2(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}

console.log(XO2('xxoox'))