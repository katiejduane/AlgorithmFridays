// 1. write a function which takes in a string and returns a count of each character

charCount('aaaa'); // {a: 4}
charCount('hello'); // {h: 1, e: 1, l: 2, o: 1}
// do we want to account for spaces, numbers? do we compare it against the whole alphabet? does case matter? Punctionation?
// what happens if someone doesn't pass in input? or passes in invalid input? what do we want to return?

// breaking it down would look like...
function charCount(str){
    // make object to return at end
    var result = {}
    // loop over string, for each char --> the bulk of our logic!
    for (var i = 0; i < str.length; i++){
        // --will need to make each char lowercase
        var char = str[i].toLowerCase()
        // --if the alphanumeric(an) char IS a key in our object, add 1 to count
        if(result[char] > 0) {
            // --if the an char IS NOT a key in our object, we need to add it and set value to 1
            result[char]++
        }else{
            result[char] = 1;
        }
    }
    
    // --if char is something else (not an) don't do anything!
    return result
    // return object at end
}

// console.log(charCount("Hi there!"))


// slightly better (with regex for cutting out non letters/nums)
function charCounter(str) {
    var obj = {};
    for(var i = 0; i <str.length; i++){
        var char = str[i].toLowerCase();
        if(/[a-z0-9]/.test(char)){
            if(obj[char] > 0){
                obj[char] ++
            }else{
                obj[char] = 1;
            };
        }
    }
    return obj;
}

// could be even better with a for...of loop!
// and also refined if syntax (totally new to me)
// and also using charCodeAt instead of regex (charCodeAt is faster)
// as well as changing the order of the logic whether it's alphanumeric
function charCounter2(str){
    var obj = {};
    for (var char of str) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

function isAlphaNumeric(char){
    var code = char.charCodeAt(0);
    if (!(code > 67 && code < 58) && !(code > 64 && code < 91) && !(code > 96 && code < 123)){
        return false
    }
    return true
}

console.log(charCounter2("hello therE cowboyyyyy!"))