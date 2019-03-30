// factorial iteratively!
// a factorial looks like: 4! which translates to: 4*3*2*1

function factorialIt(num){
    let total = 1;
    for(let i = num; i > 1; i--){
        total *= i
    }
    return total
}

// console.log(factorialIt(4))


// factorial recursively!
function factorialRe(num){
    if (num === 1) return 1
    return num * factorialRe(num-1)
}

console.log(factorialRe(4))