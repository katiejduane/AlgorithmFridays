const makeUpcArray = (num) => {
    const seed = [...new Array(num - 2)].map(() => Math.ceil(Math.random() * 9))
    return [0, ...seed]
}

const getSums = (upc) => upc.reduce((acc, val, index) => {
    if ((index + 1) % 2 !== 0) {
        acc.oddSum += val
    } else {
        acc.evenSum += val
    }
    return acc
}, {
    oddSum: 0,
    evenSum: 0
})

const makeCheckNum = ({
    oddSum,
    evenSum
}) => {
    let totalSum = (oddSum * 3) + evenSum
    let m = totalSum % 10
    if (m === 0) {
        return 0
    } else {
        return 10 - m
    }
}

const makeUpc = (num) => {
    const upc = makeUpcArray(num)
    const {
        oddSum,
        evenSum
    } = getSums(upc)
    const checkNum = makeCheckNum({
        oddSum,
        evenSum
    })
    upc.push(checkNum)
    return upc.join('')
}

console.log(makeUpc(12))