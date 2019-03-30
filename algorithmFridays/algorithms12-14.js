productList  = [];
for(x = 999; x >=100; x--){
    for(y = 999; y >= 100; y--){
        product = x * y;
        productStr = product.toString()
        if (productStr.length == 6) {
            if (productStr[0]=== productStr[5]&& productStr[1]===productStr[4] && productStr[2] === productStr[3])  {
                productList.push(productStr)
        }
    }
}
}

productList2 = []
for(i = 0; i < productList.length; i++){
    let product2 = Number(productList[i])
    productList2.push(product2)
}

function biggestPal(array) {
    biggestDrome = 0;
    for (var i = 0; i < array.length; i++) {
        currentNum = array[i]
        if (currentNum > biggestDrome) {
            biggestDrome = currentNum;
        }
    }
    return biggestDrome
}

console.log(biggestPal(productList2))
theBiggestPalindromeByTwoThreeDigitNums = 906609;

function getFactors(num) {
    const isEven = num % 2 === 0;
    let inc = isEven ? 1 : 2;
    let factors = [1, num];

    for (let curFactor = isEven ? 2 : 3; Math.pow(curFactor, 2) <= num; curFactor += inc) {
        if (num % curFactor !== 0) continue;
        factors.push(curFactor);
        let compliment = num / curFactor;
        if (compliment !== curFactor) factors.push(compliment);
    }

    return factors;
}

console.log(getFactors(906609));

// =====================================


// function makeArray(gridSize) {
//     let array = []
//     for (i = 0; i < gridSize; i++) {
//         let rowArray = []
//         array.push(rowArray)
//     }
//     return array
// }

// //make arrays to use in game functions
// let boardArray = makeArray(gridSize);

// let size = 6
// let gridArray = []

// function makeArray(size) {
//     let matrix = []
//     // to populate the top array with 1's
//     for (i = 0; i < size; i++) {
//         let row = [1]
//         array.push(row)
//         for (j = 1; j < size; j++) {
//             array[i].push(1)
//         }
//     } return array
// }

let numRows = 10;
let numCols = 10;
let matrix = [];
for (let row = 0; row < numRows; row++) {
    matrix.push([]);
    for (let cell = 0; cell < numCols; cell++) {
        if (row === 0 || cell === 0) {
            matrix[row][cell] = 1;
        } else {
            matrix[row][cell] = matrix[row - 1][cell] + matrix[row][cell - 1];
        }
    }
}
matrix.forEach(row => console.log(row));
console.log(`The number of paths is ${matrix[numRows - 1][numCols - 1]}`);


gridSize = 20;

function findRoutes(gridSize){
    let routeMatrix = [];
    for (let i = 1; i <= gridSize; i++) {
        routeMatrix.push(1);
    }
    for (let i = 1; i <= gridSize; i++) {
        for(let j = 1; j < gridSize; j++) {
            routeMatrix[j] = routeMatrix[j] + routeMatrix[j-1];
        }
        routeMatrix[i] = 2 * routeMatrix[i-1];
    }
    console.log(routeMatrix)
    return routeMatrix[gridSize]
}

n = findRoutes(gridSize)
console.log(n)

