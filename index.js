// Code your solution in this file!
const drivers =['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(drivers){
    return  drivers.slice (0,2);
}

function returnLastTwoDrivers(drivers){
    return  drivers.slice (-2);
}
    
const selectingDrivers= [returnFirstTwoDrivers,returnLastTwoDrivers ];
function driverSelectionFunction(){
    if(selectingDrivers === returnFirstTwoDrivers){
        return returnFirstTwoDrivers;
    }
    else if(selectingDrivers === returnLastTwoDrivers){
        return returnLastTwoDrivers
    }
}


function createFareMultiplier(multiplier){

return function(fare){
    return fare * multiplier
};
}

function fareDoubler(fare){
    
        return fare * 2;

}
function fareTripler(fare){
    
        return fare * 3;

}
function selectDifferentDrivers(drivers, driverSelectionFunction) {
   
    return driverSelectionFunction(drivers);
}
