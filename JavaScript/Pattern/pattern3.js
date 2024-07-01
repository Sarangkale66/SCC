//A B C D E

// let str="A"
// let sank=str.charCodeAt(0)+1;

// console.log(sank);

// let rev=String.fromCharCode(sank);

// console.log(rev);

let ch="A";
let str="";
for(let i=0;i<5;i++){
  str+=String.fromCharCode(ch.charCodeAt(0)+i)+" ";
}
console.log(str);