// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"


function order(words) {
    let nums = ['1','2','3','4','5','6','7','8','9','0'];
    let wordsArray = words.split(' ');
    let numFound;
    let sortedArray = new Array(wordsArray.length - 1);
    for(let i = 0; i < wordsArray.length; i++){
        for(let j = 0; j < wordsArray[i].length+1; j++){
            if(wordsArray[i][j] in nums){
                numFound = Number(wordsArray[i][j]);
                index = numFound - 1;
                sortedArray.splice(index, 1, wordsArray[i]);
                // console.log(numFound, index, sortedArray)
            }
        }
    }
    return sortedArray.join(' ');
}

console.log(order("6, 7, 8, 9, 1, 2, 3, 4, 5"));
