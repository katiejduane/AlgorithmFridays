const tableHeight = 15;
const tableWidth = 3;

function makeBox(h, w) {
    for (let i = 0; i < h; i++) {
        let row = "";
        for (let j = 0; j < w; j++) {
            row = row + "X"
        }
        console.log(row);
    }
}

function makeBoxWithoutNest(h, w) {
    let row = ''
    let cell = 0
    for (let i = 0; i < h; i++) {
        if (cell < w) {
            row = row + 'c'
            cell++
        } else if (cell === w) {
            console.log(row, cell)
        }
    }
}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [0, 0, 0]
]

function logMatrix(matrix) {
    for (var i = 0; i < matrix.length; i++)
        if (Array.isArray(matrix[i]))
            logMatrix(matrix[i])
    else
        console.log(matrix[i])
}

logMatrix(matrix)
// console.log(matrix)

// 'Assert that "dots" denoting permissions for each role are present in each table cell': browser => {
//     let tableBody = '.src-components-TableLegacy-__styles-module___tbody'
//     let rowNumber = 1
//     let currentRow = `${tableBody} > tr:nth-of-type(${rowNumber})`
//     while (rowNumber <= 15) {
//         for (let i = 2; i <= 4; i++) {
//             rolesPermissions(browser).expect.element(`${currentRow} td:nth-child(${i}) svg`).to.be.visible
//         }
//         rowNumber++
//     }
// }