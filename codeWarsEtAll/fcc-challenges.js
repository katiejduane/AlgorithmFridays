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
    // Find my place in this sorted array.
    return num;
}

getIndexToIns([40, 60], 50);