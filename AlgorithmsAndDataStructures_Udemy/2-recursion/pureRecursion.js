// (no helper method; little harder to wrap your head around, says colt)

function collectOddValues(arr){
    let newArr = [];
    if(arr.length === 0){
        return newArr
    }
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
    newArr = newArr.concat(collectOddValues(arr.slice(1)))
    return newArr;
}


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(collectOddValues(array))