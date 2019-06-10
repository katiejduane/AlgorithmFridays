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


console.log(titleCase("I'm a little tea pot")); //I'm A Little Tea Pot