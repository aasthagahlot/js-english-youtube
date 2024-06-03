let myDate = new Date()
console.log(myDate);

console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

let myCreatedDate = new Date(2022 , 0 , 4) // month start from 0 in javascript
console.log(myCreatedDate.toDateString());

let myCreateddate = new Date(2022 , 0 , 4, 5, 3)
console.log(myCreateddate.toLocaleString());

