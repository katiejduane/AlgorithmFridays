function duplicateEncode(word){
    let string = "";
    let lowerCaseWord = word.toLowerCase();
    for (let i = 0; i < lowerCaseWord.length; i++) {
        console.log(lowerCaseWord.indexOf(lowerCaseWord[i]))
        console.log(lowerCaseWord.lastIndexOf(lowerCaseWord[i]));
        if (lowerCaseWord.indexOf(lowerCaseWord[i]) === lowerCaseWord.lastIndexOf(lowerCaseWord[i])) {
            string += "(";
        } else {
            string += ")";
        }
    }
    return string;
}

console.log(duplicateEncode('catty'))