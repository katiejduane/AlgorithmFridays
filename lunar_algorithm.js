// // algorithm challenge: 12/10!

// The moon goes through phases because it orbits the earth and the sun hits it differently at different places in its orbit.
// This means that, depending on where it is in its orbit, you might see a full moon, right quarter moon, or even "no" moon(new moon) 
// at all. It takes 27.3 days for the moon to orbit the Earth, but the actual phase difference from one full moon to the next is 29.5 
// days because the earth cruises a cool 45 million miles around the sun in that 27.3 days.It takes 2.2 days for the the moon to make 
// up for that distance and get all the way back to where you last saw a full moon.

// Whenever the moon is full twice in one month, the second one is called a "blue moon." This last happened in July of 2015 on the 
// 1st and 31st.The next time is January of 2018(same days).You can research the timing, otherwise you can assume midnight.
// Write a program that determines how many "blue moons" there will be in third milenia(2000 - 2999) ?

// If you want to be really, really specific, the lunar month varies depending on the shape of the sun and moons orbit.
// The average is  29 days, 12 hours, and 44 minutes.

// Pseudo code for this algorithm: 
// What I need to do:  29.5 days per moon cycle, a blue moon occurs every time there is a second full moon within one month (1-30 or 1-31 days,
//     as feb is only ever 29 days maxxx! I DO need to account for leap years though, and I do need to send 29.5 though each year, regular and
//     leap years, to see how often the second moon occurs within each month.

//     I should make a variable with numbers one for leap years and one for regular years. i should also create an object for each kind of year.
//     I will also need a variable set to 29.5 I must first caculate how many moon cycles appear in each year, total... 
//     then I must look/get data for 2000-2999, to know which years are or are not leap years...

// blue moons 2000-2040:
// November 30, 2001
// July 31, 2004
// June 30, 2007
// December 31, 2009
// August 31, 2012
// July 31, 2015
// January 31, 2018
// March 31, 2018
// October 31, 2020
// August 31, 2023
// May 31, 2026
// December 31, 2028
// September 30, 2031
// July 31, 2034
// January 31, 2037
// March 31, 2037
// October 31, 2039

var moonCycle = 29.5;
var year = 365;  
var leapYear = 366;
var adjYear = 365.25

var moonCyclesInYear = year / moonCycle; // 12.372881355932204
var moonCyclesInLeapYear = leapYear / moonCycle; // 12.40677966101695

//variable to hold the # of leap years between 2000-2999... but i also need to know WHICH ONES to skip in the program...
var leaps = []
var numOfLeaps = leaps.length // 243
var notLeaps = [2100, 2200, 2300, 2500, 2600, 2700, 2900]

function getLeaps() {
    for (var i = 2000; i < 3000; i++) {
        if (i % 4 == 0 && i % 100 != 0 || i % 400 == 0 && i % 100 == 0)
            leaps.push(i)
        }
    } 

var fullMoonsYear = []
var fullMoonsLeapYear = []
var startDate = new Date("January 1, 2000")
var endDate = new Date("December 31, 2999")
var firstFullMoonOf2000 = new Date("January 21, 2000")
var numDays2000To2999;
var numFullMoons2000To2999 = []

// function getNumOfDays(startDate, endDate) {
//     for (var i = startDate; i <= endDate; i++) {
//         console.log("hi")
//     }
// }

// getNumOfDays(startDate, endDate);

// function get numFullMoons(startDate, endDate) {
//     for (var i = startDate; i <= endDate; i + 29.5)
// }

function getFullMoonDays(yearType, array) {
    var i = 21
    while (i <= yearType) {
        i += moonCycle
        array.push(i)
    }
}

getFullMoonDays(leapYear, fullMoonsLeapYear)
console.log(fullMoonsLeapYear)
getFullMoonDays(year, fullMoonsYear)
console.log(fullMoonsYear)

var monthsInYear = {
    January: 31,
    February: 28,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31
}

var monthsInLeapYear = {
    January: 31,
    February: 29,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31
}

var yearObj = {
    January: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
    ],
    February: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28
    ],
    March: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
    ],
    April: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30
    ],
    May: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
    ],
    June: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30
    ],
    July: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
    ],
    August: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
    ],
    September: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30
    ],
    October: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
    ],
    November: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30
    ],
    December: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
    ],
}

var leapYearObj = {
    January: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
    ],
    February: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29
    ],
    March: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
    ],
    April: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30
    ],
    May: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
    ],
    June: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30
    ],
    July: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
    ],
    August: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
    ],
    September: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30
    ],
    October: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
    ],
    November: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30
    ],
    December: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
    ],
}


console.log(moonCyclesInYear)
console.log(moonCyclesInLeapYear)
// console.log(leaps)
console.log(notLeaps)
// console.log(leaps.length)