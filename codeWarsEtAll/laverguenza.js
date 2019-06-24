// DOM RELATED ============================================================================>

// This represents a clickable card matrix. Initally, all cards are face down. When the card is first
// clicked, it is turns over to face up. After that, whenever a card is clicked, the card that was 
// previously face up is turned over to face down, and the clicked card is face up. Only one card is
// ever face up. Face up cards should have content 'up', while face down cards have content 'down'.

let cards = Array.from(document.getElementsByClassName('card'));

function setup() {
    cards.forEach((card) => {
        card.addEventListener('click', () => {
            onOff(cards)
        });
    });
}

function onOff(elems) {
    elems.forEach(elem => {
        if (elem == event.target) {
            elem.textContent = 'Up'
        } else {
            elem.textContent = 'Down'
        }
    });
}

setup();


// Write another setup function that registers a click handler and implements this logic:
// when clicked, the btn with the ID 'btn' is hidden, on the second click, the button reappears

const button = document.getElementById('btn');
const button2 = document.getElementById('btn2')

function setup2(btn, targetBtn) {
    let clicks = 0;
    btn.addEventListener('click', () => {
        targetBtn.style.display = 'none';
        clicks += 1
        if (clicks === 2 || clicks % 2 === 0) {
            // this seemed like an OK way to ensure endless 'on-off' clicking action
            targetBtn.style.display = 'inline'
        }
    })
}

setup2(button2, button);


// NO DOM, none at all =======================================================================>

// # 1
// Implement this function to return an array containing the names of the people, in any order,
// that enjoy the hobby passed in as second arg

// This also worked in my IDE but failed in the test. Not sure why, perhaps I did not push the data
// to the array correctly. I didn't have time to run any additional scenarios and see what was failing
// where. I reformatted the array push, but the rest is the same.

function findHobbyists(hobbies, hobby) {
    let arr = []
    Object.keys(hobbies).forEach(key => {
        let name = key;
        let value = hobbies[key]
        if (value.includes(hobby)) {
            arr.push(`${name}: ${hobby}`)
        }
    })
    return arr;
}

var hobbies = {
    "John": ['Piano', 'Puzzles', 'Yoga'],
    "Adam": ['Drama', 'Fashion', 'Pets'],
    "Mary": ['Magic', 'Pets', 'Reading']
};

// console.log(findHobbyists(hobbies, 'Yoga'));


// #2 Write a function that removes all items from the array, it should modify existing array, not create a new one
// this one passed in the test environment, so it has not been modified.
function filterNumbersFromArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) !== 'number') {
            arr.splice(i, 1)
            i--
            //i added the decrement because i realized the next item was being skipped as
            //the index was still incrementing after the item as removed
        }
    }
    return arr
}

var arr = [1, 'a', 'b', 2];
// console.log(filterNumbersFromArray(arr));


// simulates a calculation that takes extraneous time to execute in a trivial fashion. however,
// there is a problem. the goal would be to return the result of the calc given the value provided as
// a param, and echo it to the screen once finished. there is more than one way to satisfy this situation

// i couldn't get this to work in the time alotted, but i knew if i had a little more time to crunch
// away it, i would. i was concerned a promise was a tad 'extra' for such a simple problem, but since
// my other ideas failed to execute, i gave it a whirl. returning a promise that executes and returns
// the value, but is not logged to the console (or echoed to the screen) till .then() is called, once
// the time out has finished. 

function math(a) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(a * a)
        }, 1000);
    })
}

math(3).then(result => console.log(result))


