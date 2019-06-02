// Return the length of the longest word in the provided sentence.
// Your response should be a number.

function findLongestWordLength(str) {
    let strArr = str.split(" ")
    let wordLen = 0;
    let longestWord = 0;
    for(let i = 0; i < strArr.length; i++){
        console.log(strArr[i], strArr[i].length)
        if(wordLen > longestWord){
            longestWord = wordLen
        }
    }
    return longestWord;
}

// findLongestWordLength("The quick brown fox jumped over the lazy dog");
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));
