//types of datatypes

// 1- primitive datatype
// 7 categories = strings, null, boolean, number, undefined, symbol, bigINT



// so javascript is dynmatically typed language which doesn't required to declare the type of datatypes
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 2345566778994n

// 2- Non-primitive datatypes
// arrays, object, functions

const heros = ["shaktiman", "doga" , "naagraj"]

let myObj = {
    name:"aastha",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World")
}


console.log(typeof heros);