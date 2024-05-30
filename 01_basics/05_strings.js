const name = "aastha"
const repoCount = 23

// console.log(name + repoCount + value); this is not us in modern language

console.log(`hello my name is ${name} and my repocount is ${repoCount}`);

const gameName = new String('AasthaG')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4);
console.log(newString);
const neWString = gameName.slice(-6,4);
console.log(neWString);

const newstringone = "    Aastha    ";
console.log(newstringone);
console.log(newstringone.trim());

const url = "https://aastha.com/aastha20gahlot"

console.log(url.replace('20','-'));

console.log(url.includes('aastha'));

const word = "aastha-aastha-g";
console.log(word.split("-"));





