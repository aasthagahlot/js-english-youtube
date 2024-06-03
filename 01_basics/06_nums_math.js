const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2));

const otherNumber = 123.234566;
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));


//MATHS ------------------------

console.log(Math);

console.log(Math.abs(-4))
console.log(Math.round(3.4));
console.log(Math.ceil(3.4));
console.log(Math.floor(3.6));
console.log(Math.min(4,5,7,1));
console.log(Math.max(4,5,7,1));

console.log(Math.random());  //it always give value in brtween 0 to 1
console.log(Math.random()*10); //if we want to confirmation then we add +1

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max - min+1)));
console.log(Math.floor(Math.random()*(max - min+1)+min));