// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

const isDivisibleByFive = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) == 0;
console.log (`The isDivisibleByFive according to the provided criteria: ${isDivisibleByFive}.`) 


const isFirstLargerLast = n1 > n4;
console.log (`The FirstLargerLast is valid according to the provided criteria: ${isFirstLargerLast}.`) 


const isRemainer = (((n2 - n1) * n3) % n4) % 5 == 0;
console.log (`The isRemainervalid according to the provided criteria: ${isRemainer}.`) 

const isLess25 = (n1 < 25 )|| n2 < 25 || n3 < 25 || n4 < 25;
console.log (`The isLess25 is valid according to the provided criteria: ${isLess25}.`) 


const isValid = isDivisibleByFive && isFirstLargerLast && isRemainer && isLess25;
console.log (`The four numbers are valid ccording to the provided criteria: ${isValid}.`) 




// Part 2: Practical Math


// const tripDistance = 1500;
// const fuelBudget = 175;
// const costFuel_perGalllon = 3;
// let gallon_fiftyfivePerHour = 30;
// let gallon_sixtyPerHour = 28;
// let gallon_seventyFivePerHour = 23;

// const gallonsForTrip = fuelBudget / costFuel_perGalllon;

//  let gallons_used= "";

// function CalculateGallons(n){

//     if (n === 30){
//          gallons_used = tripDistance / n;
//     } else if (n === 38){
//       gallons_used = tripDistance / n;
//     } else if (n === 23){
//      gallons_used = tripDistance / n;
//     } else{
//       console.log("Enter another number");
//     }
// }

// // Enter "n" which is the number of miles/hr and it will show you how many gallons you would use during the trip
// let hoursOfTravel = "";
// function hours(n){
//    if (n === 55){
//     hoursOfTravel = Math.round(tripDistance / n);
//    }else if(n === 60){
//     hoursOfTravel = Math.round(tripDistance / n);
//    }else if(n === 75){
//     hoursOfTravel = Math.round(tripDistance / n);
//    }else{
//     console.log("Enter another number");
//    }
// }


// //Enter the speed rate you will be going at,
// hours(55);
// //Enter the number of miles per gallon you will use up at that speed
// CalculateGallons(30);

// console.log(`At that speed, you will use ${gallons_used} gallons for the entire trip and It will take you ${hoursOfTravel} hours`);




