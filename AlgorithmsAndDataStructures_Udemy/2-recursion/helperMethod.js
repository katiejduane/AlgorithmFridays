function collectOddValues(arr){
    let result = []
    // 'how are we going to have this piece that persists throughout?' ... lil slice of poetry amid coding...
    function helper(helperInput){
        if(helperInput.length === 0){
            return;
        }
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }
    helper(arr)
    return result
}

let array = [1,2,3,4,5,6,7,8,9,10]

// console.log(collectOddValues(array))

//inventing my own for practice... 

function fourLetterWord(arr){
    let words = [];
    function helper(helperInput){
        if(helperInput.length === 0){
            return;
        }
        if(helperInput[0].length === 4){
            words.push(helperInput[0]);
        }
        helper(helperInput.slice(1));
    }
    helper(arr);
    return words;
}

let mixedWords = ['blizzard', 'hell', 'wonder', 'ash', 'rain']
console.log(fourLetterWord(mixedWords));
