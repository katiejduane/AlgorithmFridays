// linear search

// pseudo code: this function accepts an array and a value, loops through array to check
// if the current element is equal to the value, if it is, it returns its index, if not,
// it returns -1

// practice: try writing a linear search
function linearSearch(array, val){
    for(let i = 0; i < array.length; i++){
        if (array[i] === val){
            return i;
        }
    } 
    return -1;
}
let names = ['katie', 'hannah', 'ellen', 'barbie', 'ken', 'skipper', 'courtney']
console.log(linearSearch(names, 'ken'))