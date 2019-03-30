//frequency counter

//naive solution
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false
    };
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1){
            return false
        }
        console.log(arr2)
        arr2.splice(correctIndex, 1)
    }
    return true
}

array1 = [1,2,3,3]
array2 = [9,1,4,9]

// same(array1,array2)

//refactored solution
function sameTwo(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        // console.log('diff lengths')
        return false;
    }
    let freqCounter1 = {}
    let freqCounter2 = {}
    for(let val of arr1){
        freqCounter1[val] = (freqCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
        freqCounter2[val] = (freqCounter2[val] || 0) + 1
    }
    // two separate loops is WAY faster than a nested loop (if the arrays were 1,000 items long; 2 loops = 2,000 iterations, a nested loop would be 1,000,000 iterations)
    console.log(freqCounter1)
    console.log(freqCounter2)
    for (let key in freqCounter1){
        if(!(key ** 2 in freqCounter2)){
            // console.log('one')
            return false
        }
        if(freqCounter2[key ** 2] !== freqCounter1[key]) {
            // console.log('two')
            return false
        }
    }
    return true
}
// console.log(sameTwo(array1, array2))

function sameLetters(string1, string2){
    if(string1.length !== string2.length){
        return false
    }
    let freqCounter1 = {}
    let freqCounter2 = {}
    for (let val of string1){
        freqCounter1[val] = (freqCounter1[val] || 0) + 1
        // console.log(freqCounter1[val])
    }
    for (let val of string2){
        freqCounter2[val] = (freqCounter2[val] || 0) + 1
    }
    
    for(let key in freqCounter1){
        // console.log(freqCounter1[key])
        if(!(key in freqCounter2)){
            return false
        }
        if(freqCounter2[key] !== freqCounter1[key]){
            return false
        }
    }
    return true
} 

let string1 = "katiieie"
let string2 = "eitakiee"

console.log(sameLetters(string1, string2))
