
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



const productOfTwoNumber = (a, b) => {

	return (a*b);

};

console.log(productOfTwoNumber(2, 9));


// Objects

const person = {
    name: "Brijesh",  // in object not only group variable but you can also add function
    age: 27,
    // greet: () => {      // when we use arrow function and try to access this.name its not working because arrow function access global scope value
    //     console.log(`Hi I am ${this.name}`) // this refer to global scope so we get output here undefine because this.name is not available in global scope but its is in local scope of person
    greet: function() {
        console.log(`Hi I am ${this.name}`) // its give value because normal function access the local scope of person
    },

    greet1() {
        console.log(`Hi I am ${this.age}`) // we can also get output by this

    }
};


person.greet();
person.greet1();


// Array

const hobbies = ["sports", "cooking", 69, true, {Gym: "Running", activity:"swimming" }];
for (let i = 0; i < hobbies.length; i++) {
    console.log(i) // 1 2 3 4
    console.log(hobbies[i]); // all hobies 
};

for (let i of hobbies) {
    console.log(i) // all hobies
};

for (let i in hobbies) {
    console.log(i) // 1 2 3 4
};

console.log(hobbies.map(i => {
    return (`hobby is: ${i}`)   // it create one new array without changing previous array
}));
console.log(hobbies);



// Rest and Spread Operator

const hobbies1 = ["sports", "cooking", 69, true, "swimming"];

const copyhobbies1 = hobbies1.slice() // it copy the array and put in another array

console.log(copyhobbies1); // [ 'sports', 'cooking', 69, true, 'swimming' ]

const copyhobbies2 = [hobbies1] // copyhobbies2 is an array and inside this array one another array is available
console.log(copyhobbies2);  // [ [ 'sports', 'cooking', 69, true, 'swimming' ] ]


// Spread Operator // Array
const copyhobbies3 = [...hobbies1] // in this case it take all element from parent array and put it in new array
console.log(copyhobbies3);  // [ 'sports', 'cooking', 69, true, 'swimming' ]

// Spread Operator // Objects

const person1 = {
    name: "Brijesh",
    age: 27,
    greet: function() {
        console.log(`Hi I am ${this.name}`) 
    }
};

const copyObject = {...person1};  // it gives copy of object
console.log(copyObject);  // { name: 'Brijesh', age: 27, greet: [Function: greet] }



// Rest Operator

const toArray = (arg1, arg2, arg3) => {
    // return [arg1, arg2, arg3]; // [1, 2, 3]
    // return (arg1, arg2, arg3); // 3 
    return (arg1 + arg2 + arg3); // 6
}

// console.log(toArray(1,2,3));

const toArray1 = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3]; // when we give 4 element then it give only first 3 element
}

console.log(toArray1(1,2,3,4)); // [1,2,3]

const toArray2 = (...args) => {   // rest operator is also look like spread operator but place decide who you call it
    return args; // [1,2,3,4]
}

console.log(toArray2(1,2,3,4)); // when we give 4 element then it give only first 3 element

// when we use operaton to pull element or propertyes out of array and objects its called spread operator

// And when we use to murge multiple argument into an Array and used it in the argument list of a function then its a rest operator 

*/

// Questions

// const obj1 = {'key1': 1}
// console.log(obj1);  // { key1: 1 }

// const obj2 = { ...obj1}
// console.log(obj2); // { key1: 1 }

// if(obj2 === obj1){
//     console.log('same objects')
// }
// else{
//     console.log('different objects')
// }

// ANS:- 
// obj1 is created with the key-value pair 'key1': 1.
// obj2 is created by spreading the properties of obj1 into a new object. This essentially creates a shallow copy of obj1.
// The conditional statement if (obj2 === obj1) checks if obj2 and obj1 reference the exact same object in memory.
// Since obj2 is a shallow copy of obj1 and not the same object in memory, the condition obj2 === obj1 will evaluate to false. Therefore, the code will output 'different objects'.

// const obj3 = {'key1': 1 , 'key2' : 2}
// const obj4 = { ...obj1, key1: 1000}
// console.log(obj3)  // { key1: 1, key2: 2 }
// console.log(obj4) // { key1: 1000, key2: 2 }


// Destructor

// const admin = {
//     name: "Mohan",
//     age: 27,
//     detaill() {
//         console.log(`Hi iam + ${this.name}`);
//     }
// }

// Destructor // Normal way

// const printName = (adminData) => {
//     console.log(adminData.name);
// }

// printName(admin); // Mohan

// Through Destructuring

// const printName1 = ({ name }) => {
//     console.log(name); // Mohan 
// }

// printName1(admin)

// Object Destructuring
// const {name, age} = admin;
// console.log(name, age); // Mohan 27


// // Array Destructuring 
// const intrest = ["Cooking", "Dancing"];
// const [intrest1, intrest2] = intrest;
// console.log(intrest2); // Dancing
// console.log(intrest1, intrest2); // Cooking Dancing


// Asynchronous 

// callback function when function call it excute and give output and after 2sec it again call and give output

// setTimeout(() => {      // Asynchronous Code 
//     console.log("Iam Here");
// }, 2000)
// console.log("Hello");   // Synchronous Code
// console.log("World!");


// const fatchData = callback => {
//     setTimeout(() => {
//         callback("Done");
//     }, 1500)
// };

// setTimeout(() => {
//     console.log("Honey Bonny")
//     fatchData(text => {
//         console.log(text);
//     })
// }, 2000);

// console.log("Hey");
// console.log("Iam");

// Create Promises

const fatchData = () => {
    const takePromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done");
        }, 1500)
    }); 
    return takePromise; 
};

setTimeout(() => {
    console.log("Honey Bonny");
    fatchData()
        .then(text => {
            console.log(text);
            return fatchData();
        })
        .then(text1 => {    // when we have multiple promises
            console.log(text1);
        });
}, 2000);

console.log("Hey");
console.log("Iam");