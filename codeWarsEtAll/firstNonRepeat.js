// Write a function named first_non_repeating_letter that takes a string input, and returns the first 
// character that is not repeated anywhere in the string.
// For example, if given the input 'stress', the function should return 't', since the letter t 
// only occurs once in the string, and occurs first in the string.
// As an added challenge, upper - and lowercase letters are considered the same character, but the 
// function should return the correct case for the initial letter.
// For example, the input 'sTreSS' should return 'T'.
// If a string contains all repeating characters, it should return an empty string("") or None.

function firstNonRepeatedCharacter(string) {
    let first;
    if(string.length === 0){
        first = ''
    } else if (string.length === 1){
        first  = string[0]
    }

    string.split('').some(function (character, index, obj) {
        if(obj.indexOf(character) === obj.lastIndexOf(character)) {
            first = character;
            return true;
        }

        return '';
    });

    return first;
}

console.log(firstNonRepeatedCharacter('moonmen'));