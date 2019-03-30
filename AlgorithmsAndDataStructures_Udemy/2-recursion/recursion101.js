// base case is the end of the line!! can't have an infinite loop...!
// so we always need: The Base Case, and Different Input for the Recursive Case

// first example:
function countDown(num){
    if(num <= 0){
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num)
}

// countDown(5);

// you could also do it iteratively; just so you can see the difference:
// function countDownLoop(num){
//     for(var i = num; i > 0; i--){
//         console.log(i)
//     }
//     console.log("All done!!")
// }

// countDownLoop(5)

