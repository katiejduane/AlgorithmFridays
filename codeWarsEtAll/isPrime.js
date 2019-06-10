
function isPrime(value) {
    var limit = Math.sqrt(value);
    for (var i = 2; i < limit; i++) {
        if (value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

// console.log(isPrime(10))

// alternative from the polyglot developer (web site)
function printPrime(value) {
    var primes = [];
    for (var i = 2; i < value; i++) {
        primes[i] = true;
    }
    var limit = Math.sqrt(value);
    for (var i = 2; i < limit; i++) {
        if (primes[i] === true) {
            console.log(primes[i])
            for (var j = i * i; j < value; j += i) {
                primes[j] = false;
            }
        }
    }
    for (var i = 2; i < value; i++) {
        if (primes[i] === true) {
            console.log(i + " " + primes[i]);
        }
    }
}

printPrime(4)

// less desireable solution
// function isPrime(value) {
//     for (var i = 2; i < value; i++) {
//         if (value % i === 0) {
//             return false;
//         }
//     }
//     return value > 1;
// }