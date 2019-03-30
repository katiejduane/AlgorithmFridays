// just wanted to make sure i could do this...! need to brush up on this kind of stuff!
// let string = "katie";
// let revString = "";
// for (let i = string.length - 1; i >= 0; i--) {
//     revString += string[i];
// } console.log(revString)


// GUESS A NUMBER

// - loop through all:

// for (let i = 0; i < numList.length; i++) {
//     if (numList[i] == number) {
//         console.log("Found!", number)
//         console.log(`It took ${i + 1} guesses to get the answer.`)
//         break
//     }
// }

// guess randomly (not a good option!)

// let found = false;
// let counter = 0;
// while (found === false) {
//     counter ++
//     let randIndex = Math.floor(Math.random() * numList.length);
//     if (numList[randIndex] === number) {
//         found = true;
//         console.log("Horray! We found the number!", number)
//         console.log(counter)
//     }
// }

// // let number = 1;
// let numList = [1, 2, 3, 4, 5];
// let number = Math.floor(Math.random() * numList.length)
// console.log("number =", number)

// // binary search
// let found = false;
// let index = (Math.floor(numList.length/2));
// console.log("first index =", index)

// while(!found){
//     if (number === numList[index]){
//         console.log(`found! number was`, numList[index])
//         console.log(`it took ${index + 1} guesses`)
//         found = true;
//     } else if (number < numList[index]){
//         // cut of the top have by moving the index to the middle of the lower half
//         index = Math.floor(index/2)
//         console.log("number is lower")
//     } else {
//         // we knows it's higher
//         index = Math.floor((index + numList.length)/2)
//         console.log("number is higher")
//     }
// }

function binarySearch(list, value) {
    // we will set a range or bounds to check, this will get smaller as we guess
    let bottomIndex = 0;
    // start top at list.length - 1
    let topIndex = list.length -1;
    // middle is between whatever top or bottom is, whatever they are, and they will change is the function runs
    let middleIndex = Math.floor((topIndex + bottomIndex)/2)
    console.log(bottomIndex, middleIndex, topIndex);
    // we need a while loop, we need to keep looking until we find the correct number
    // keep looping hile middle is NOT the right number and there isn't only 1 left
    let found = false;
    let counter = 0;
    while (!found) {
        counter++
        if (value < list[middleIndex]) {
            topIndex = middleIndex - 1;
        } else if (value > list[middleIndex]) {
            bottomIndex = middleIndex + 1;
        } else {
            //we found it!
            found = true;
        }
        //recalculate the middle because we changed the top or bottom
        middleIndex = Math.floor((topIndex + bottomIndex) / 2)
    }
    console.log(`it took ${counter} guesses`)
    return list[middleIndex];
}

let numbers = []
for (let i = 0; i < 10000000; i ++) {
    numbers.push(i)
}

let foundIndex = binarySearch(numbers, 1)
console.log(foundIndex)
