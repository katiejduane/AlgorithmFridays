// Return the length of the longest word in the provided sentence.
// Your response should be a number.

function findLongestWordLength(str) {
    let strArr = str.split(" ")
    let longestWord = '';
    for(let i = 0; i < strArr.length; i++){
        if(strArr[i].length > longestWord.length){
            longestWord = strArr[i]
        }
    }
    return longestWord;
}

// findLongestWordLength("The quick brown fox jumped over the lazy dog");
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));
