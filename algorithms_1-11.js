
//basic bubble sort
// let sorted = false;
// let numList = [5, 4, 11, 2, 6]
// let count = 0;
// let stop = numList.length

// while (!sorted) {
//     let count = 0
//     for (let i = 0; i < numList.length; i ++) {
//         let currentNum = i;
//         let nextNum = i + 1
//         if (numList[currentNum] > numList[nextNum]) {
//             let stashed = numList[currentNum];
//             numList[currentNum] = numList[nextNum];
//             numList[nextNum] = stashed;
//             count++
//         }
    
//     } if (count == 0) {
//         sorted = true;
//         console.log(numList)
//     }
// }

// more efficient bubbleSort

// insertion sort
let initArray = [5, 11, 13, 2, 22, 7];

function insertionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let temp = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > temp) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = temp;
    }
    return array;
}

console.log(insertionSort(initArray))





