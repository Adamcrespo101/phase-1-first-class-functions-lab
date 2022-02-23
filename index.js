// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']; 

const returnFirstTwoDrivers = (function (){return drivers.slice(0 , 2) })

const returnLastTwoDrivers = (function(){return drivers.slice(2)})

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (fare){
    return function (multiplier) {
        return fare * multiplier;
    }

}

function fareDoubler (fare) {
    return fare * 2;
}

function fareTripler (fare){
    return fare * 3;
}

function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers)
}