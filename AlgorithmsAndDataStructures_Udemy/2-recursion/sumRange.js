function sumRange(num){
    if(num === 1) return 1;
    return num + sumRange(num-1);
}

console.log(sumRange(3))

// the function illustrated (sorta)
// sumRange(3) // waiting on sumRange(2) 3 + 3, which is 6!
//     return 3 + sumRange(2) // waiting on sumRange(2) // returns 3
//         return 2 + sumRange(1) // waiting on sumRange(1) // returns 1
//             return 1
//                 all added together (3 + 2 + 1) = 6!