const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice (0,2)
}
const returnLastTwoDrivers = function(drivers){
    return drivers.slice (-2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
    const multiplier = function(num1) {
        return num * num1
    }
    return multiplier
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
function selectDifferentDrivers(drivers, returnDrivers) {
    return returnDrivers(drivers)
}