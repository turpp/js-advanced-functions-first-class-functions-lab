// Code your solution in this file!
const returnFirstTwoDrivers = function(array){
    let a=[]
    a.push(array[0])
    a.push(array[1])
    return a
}

const returnLastTwoDrivers = function(array){
    let a =[]
    a.push(array[array.length-2])
    a.push(array[array.length-1])
    return a
}

const selectingDrivers =[returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int){
    return function(fare){
        return fare * int
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(array, fn){
   return fn(array)
}

