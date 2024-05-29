let score = "33"
let scores = null
let scoress = undefined
let scoree = true

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);

console.log(typeof(valueInNumber));

// "33" => 33
//  "33abc" => NaN
// true => 1 , false => 0

// "" => false
// "hitesh" => true



// string to number conversions
let age = 23

let stringNumber = String(age)
console.log(stringNumber)
console.log(typeof(stringNumber))




//   OPERATIONS  //

let value = 3;
let negval = -value;
console.log(negval)

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3)
console.log(2%2)
console.log(2/2)


// strings addition

let str1 = "Hello, Myself ";
let str2 = "Aastha";

let str3 = str1 + str2;

console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

// prefix and postfix

let gamecounter = 100;
gamecounter++; //postfix
console.log(gamecounter);

let game = 101;
++game;  //prefix
console.log(game);