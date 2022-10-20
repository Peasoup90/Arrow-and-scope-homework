let array = ["pizza", "tacos", "pineapple"];

array.forEach(newFunction);

function newFunction(food) {
    console.log(food);    
}

//-----------------------------------------------------

let numArray = [1, 2, 3, 4, 5];
let store = 0;
for (let i = 0; i < numArray.length; i++) {
    store += numArray[i]
}

console.log("The sum of string is: " + store);

let numArray1 = [1, 2, 3, 4, 5];
let store1 = 1;
for (let i = 0; i < numArray1.length; i++) {
    store1 *= numArray1[i]
}

console.log("The sum of string is: " + store1);

const multiplyArr = arr => {
    let multiplication = 1;
    arr.forEach((item) => {
        multiplication = multiplication * item;
    })
    return multiplication
};

console.log(multiplyArr(numArray))
//-------------------------------------------------------


let studentGrades = [70, 20, 53, 64, 78, 60, 32];

const passingGrades = studentGrades.filter((score) => score >= 50);
console.log(studentGrades);
console.log(passingGrades);

//-------------------------------------------------------

const students = ['jane', 'peter', 'ringo'];

const dash = students.join(" - ");

console.log(dash);


function toCSV(students){
    
}

//--------------------------------------------------------

const kilometers = [5, 10, 15, 20, 25, 30]

const converted = kilometers.map((miles) => {
    return Math.abs(miles * 0.621371)
});
console.log(converted)

//--------------------------------------------------------

const inputArray = ["18", " 27", 19, 21, "22 ", NaN, undefined];

//let convert = inputArray.map(Number);
let filtered = inputArray.filter(function(Number){
    return Number % 1 == 0;  
})

console.log(filtered);

//--------------------------------------------------------

let ages = [10, 21, 13, 64, 98, 40, 32];

const canVote = ages.filter((years) => years >= 18);
console.log(ages);
console.log("These ages can vote:", canVote);

//--------------------------------------------------------

const numberArray = [19, 243, 2, 87, 46];

const sum = numberArray.reduce(function (a, b) {
    return a + b;
}, 0);
console.log(sum)

//-------------------------------------------------------

const multiplyArray = arr => {
    let multiplication = 1;
    arr.forEach((item) => {
        multiplication = multiplication * item;
    })
    return multiplication
};

console.log(multiplyArray(numberArray));

//-------------------------------------------------------


const spaceCraft = {Size:'1150', Range:'50000', Model:'space1', Capacity:'6'}

