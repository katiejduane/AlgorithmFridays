function confirmEnding(str, target) {
    let end = str.length -1;
    let len = target.length;
    let start = (end - len) + 1;
    if(len > 1){
        console.log(start, end, len)
        if (str.substring(start) === target) {
                return true;
            } else {
                return false;
            }
        } else {
        console.log(start, end, len)
            if(str.substring(end) === target){
                return true
            } else {
                return false;
            }
        }
}

// console.log(confirmEnding("Bastian", "an"));


function repeatStringNumTimes(str, num) {
    if (num < 0) return '';
    let arr = [];
    for(let i = 0; i < num; i++){
        arr.push(str)

    }
    let result = arr.join('')
    return result;
}

// console.log(repeatStringNumTimes("abc", 3));


function truncateString(str, num) {
    // Clear out that junk in your trunk
    if (str.length > num && num > 3) {
        return str.slice(0, (num)) + '...';
    } else if (str.length > num && num <= 3) {
        return str.slice(0, num) + '...';
    } else {
        return str;
    }
}

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));


function findElement(arr, func) {
    // let num = 0;
    // return num;
    let found = arr.find(func)
    return found;
    
}

// console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));


function booWho(bool) {
    if(bool === true || bool === false){
        return true;
    }else{
        return false;
    }
}

// console.log(booWho(null));


// function titleCase(str) {
//     let arr = str.split(' ')
//     let res = []
//     for(word of arr){
//         let titleCased = word[0].toUpperCase() + word.slice(1).toLowerCase();
//         res.push(titleCased)
//     }
//     return res.join(' ')
// }

//since free code camp doesn't like for...of loops:
function titleCase(str) {
    let arr = str.split(' ')
    let res = []
    for(let i = 0; i < arr.length; i++){
    let titleCased = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
    res.push(titleCased)
    }
    return res.join(' ')
}


// console.log(titleCase("I'm a little tea pot")); //I'm A Little Tea Pot


function frankenSplice(arr1, arr2, n) {
    // for(item of arr1){
    //     arr2.splice(n, 0, item)
    // }
    let r = arr2.slice();
    console.log(r)
    for (let i = 0; i < arr1.length; i++) {
        r.splice(n + i, 0, arr1[i]);
    }
    return r;
}

// console.log(frankenSplice([1, 2, 3], [4, 5], 1)); 


function bouncer(arr) {
    return arr.filter((value => {
        if (value !== Boolean){
            return value;
        }
    }))
}

// console.log(bouncer([false, null, 0, NaN, undefined, ""]));


// Return the lowest index at which a value(second argument) should be inserted into an array
// (first argument) once it has been sorted.The returned value should be a number.

// For example, getIndexToIns([1, 2, 3, 4], 1.5) should return 1 because it is greater than 1(index 0), 
// but less than 2(index 1). Likewise, getIndexToIns([20, 3, 5], 19) should return 2 because once the 
// array has been sorted it will look like[3, 5, 20] and 19 is less than 20(index 2) and greater than 5(index 1).
function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort((a, b) => a - b);
    return arr.indexOf(num);
}

// console.log(getIndexToIns([5, 3, 20, 3], 5));
// getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.


// Return true if the string in the first element of the array contains all of the letters of the string 
// in the second element of the array. For example, ["hello", "Hello"], should return true because all of 
// the letters in the second string are present in the first, ignoring case. The arguments["hello", "hey"] 
// should return false because the string "hello" does not contain a "y".
function mutation(arr) {
    let target = arr[0].toLowerCase();
    let test = arr[1].toLowerCase();
    for(let i = 0; i < test.length; i++){
        if(target.indexOf(test[i]) < 0)
            return false;
    }
    return true;
}
// console.log(mutation(["Alien", "line"]));


// Write a function that splits an array(first argument) into groups the length of size(second argument) 
// and returns them as a two - dimensional array.
function chunkArrayInGroups(arr, size) {
    let tempArr = [];
    let finalArray = [];
    for(let i = 0, j = arr.length; i < j; i += size){
        tempArr = arr.slice(i, i + size)
        finalArray.push(tempArr)
    }
    return finalArray;


    // let temp = [];
    // let result = [];
    // for (let i = 0; i < arr.length; i++) {
    //     console.log(i, size, i % size)
    //     if (i % size !== size - 1){
    //         temp.push(arr[i]);
    //         // console.log(1, temp);
    //     } else {
    //         temp.push(arr[i]);
    //         // console.log(2, temp)
    //         result.push(temp);
    //         temp = [];
    //     }
    // }
    // if (temp.length !== 0)
    //     result.push(temp);
    // return result;
}

// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
// chunkArrayInGroups(["a", "b", "c", "d"], 2) //should return [["a", "b"], ["c", "d"]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)) //should return [[0, 1, 2], [3, 4, 5]]
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) //should return [[0, 1, 2, 3], [4, 5]]