
/*
// lession: 1
console.log("Hello World!");

// lesson: 2 // function

var name = "Brijesh";
var age = 27;
var sex = "Male"

function details(userName, userAge, userSex) {
    // return ("name is " + userName + " age is " + userAge + " sex is " + userSex)
    return (`Name is ${userName} age is ${userAge} and my sex is ${userSex}`);
};

console.log(details(name, age, sex));

// lesson:3 // let const and var

// we can declair variable in this forms

// let and const work as same but in let we change the variable after sometime 
// but const is constant we cant change variable when once declaired

// var is also change when we declair variable as var then it take space in local storage 

var name1 = "Brijesh";
let age1 = 27;
const sex1 = "Male"

//lesson 3 // Annonomous Function

const details1 = function(userName, userAge, userSex) {
    // return ("name is " + userName + " age is " + userAge + " sex is " + userSex)
    return (`Name is ${userName} age is ${userAge} and my sex is ${userSex}`);
};

console.log(details1(name, age, sex));

// Arrow Function

const details2 = (userName, userAge, userSex) => {
    // return ("name is " + userName + " age is " + userAge + " sex is " + userSex)
    return (`Name is ${userName} age is ${userAge} and my sex is ${userSex}`);
};

console.log(details2(name, age, sex));

const add = (a, b) => {    // function with curley bracket
    return a + b;
}

console.log(add(2, 3));

const multiply = (c, d) => c * d;  // function without curley bracket
console.log(multiply(4, 3));

const addOne = a => a + 1;  // here only take 1 argument and rest is in their code
console.log(addOne(2))

const addRandom = () => 7 + 7; // without argument
console.log(addRandom());

*/

const productOfTwoNumber = (a, b) => {

	return (a*b);

};

console.log(productOfTwoNumber(2, 9));







