let obj=new Date();
let date=String(obj.getDate()).padStart(2,"0");

let month=String(obj.getMonth()+1).padStart(2,"0");

let year=String(obj.getFullYear());

// console.log(`Today is ${date}-${month}-${year}`);

let hour =obj.getHours();
let minutes=obj.getMinutes();
let seconds=obj.getSeconds();
let miliseconds=obj.getMilliseconds();

console.log(`current time is ${hour}-${minutes}-${seconds}-${miliseconds}`);
// console.clear();