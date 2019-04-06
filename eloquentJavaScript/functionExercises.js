// understanding CLOSURE
// CLOSURE is being able to reference a specific instance of a local variable in an
// enclosing scope.
// but, A closure is a function that references varibales from local scopes around it.

function wrapValue(n){
    let local = n;
    return () => local + 10;
}

let wrap1 = wrapValue(1); // console.logging this as is returns [Function]
let wrap2 = wrapValue(2); // console.logging this as is returns [Function]
console.log(wrap1()); // but logging it here as a function that's being called returns 11
console.log(wrap2()); // but logging it here as a function that's being called returns 12

// function wrapValue(n) {
//     let local = n;
//     return local + 10;
// }

// let wrap1 = wrapValue(1);
// let wrap2 = wrapValue(2);
// console.log(wrap1);
// console.log(wrap2);

//
function multiplier(factor){
    return number => number * factor;
}
let twice = multiplier(2);
console.log(twice); // [Function] // i think because it has not yet recieved a NUMBER
console.log(twice(5)); // 10 // i think because here we pass it 5, it can now multiply the
// factor (2) by the number (5) it received from 'twice'...?


// recursion, oh recursion...

function findSolution(target){
    //this is the outer 'helper' function!
    function find(current, history){
        //this is the inner recursive function!
        if(current == target){ //must be only == because we're comparing an int and a str
            return history;
        }else if(current > target){
            return null;
        }else{
            return find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, '1');
}
console.log(findSolution(24));
console.log(findSolution(13));
console.log(findSolution(56));
console.log(findSolution(94));
