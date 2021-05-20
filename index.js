// Code your solution in this file!

// const returnFirstTwoDrivers = function (x){
//         return x.slice(0, 2);
//     }
// }

// function returnFirstTwoDrivers() {
//     const driverList = function (x) {
//         return x.slice(0, 2);
//     }
// }
function returnFirstTwoDrivers(x) {
    return x.slice(0, 2);
}

function returnLastTwoDrivers(x) {
    return x.slice(x.length-2);
}

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

// function createFareMultiplier(y) {
//     let inner = num =>  num * y;
//     return inner;
// }

function createFareMultiplier(y) {
    return num =>  num * y;
}

// let fareDoubler = (num) => num *2;

function fareDoubler(num) {
    const cb = createFareMultiplier(2);
    return cb(num);
}

// let fareTripler = (num) => num *3;

function fareTripler(num) {
    const cb = createFareMultiplier(3);
    return cb(num);
}

function selectDifferentDrivers(arrayOfDrivers, fn) {
    return fn(arrayOfDrivers);
}