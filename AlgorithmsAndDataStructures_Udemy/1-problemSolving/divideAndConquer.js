// many examples, mostly fairly advanced, to come later!

// binary search

function binSearch(array, val){
    let min = 0;
    let max = array.length - 1;
    while(min <= max){
        let middle = Math.floor((min + max) / 2 );
        let currentElem = array[middle];
        if(array[middle] < val){
            min = middle + 1;
        }else if(array[middle] > val){
            max = middle - 1;
        }else{
            return middle
        }
    }
    return -1; 
}

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13]
let val = 11
console.log(binSearch(arr, val)) // returns the INDEX of the found value