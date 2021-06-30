// Code your solution in this file!
const returnFirstTwoDrivers = (arr) => {
    return [arr[0],arr[1]]
}

const returnLastTwoDrivers = (arr) => {
    // let rev = arr.reverse()
    // return [rev[1], rev[0]]
    return [arr[2], arr[3]]
}

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

function createFareMultiplier(int){
    return function(){
        return int * int
    }
}

function fareDoubler(cash){
    // const fare = createFareMultiplier(cash)
    return cash * 2
}

function fareTripler(fare){
    return fare * 3
}

function selectDifferentDrivers(arr, func){
    return func(arr)
}
