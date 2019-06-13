// some basics of OOP in JS for review ----------------------------------------------------->

// using instanceOf 
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}

var myHouse = new House(3);
myHouse instanceof House; // returns TRUE!


// for...in with hasOwnProperty (meaning it's NOT a prototype property)
function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

for (let prop in beagle) {
    if (beagle.hasOwnProperty(prop)) {
        ownProps.push(prop)
    } else {
        prototypeProps.push(prop)
    }
}

// accessing constructor type
function Dog(name) {
    this.name = name;
}

function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
        return true;
    } else {
        return false;
    }
}


// declaring the constructor in the prototype so it's not overwritten!
function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    constructor: Dog,
    numLegs: 2,
    eat: function () {
        console.log("nom nom nom");
    },
    describe: function () {
        console.log("My name is " + this.name);
    }
};


// understanding where prototype comes from
function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle)