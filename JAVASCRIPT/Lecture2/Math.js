const pie=Math.PI;
// console.log(pie);
// static keyword- which never returns any object and Call by its class name
let ans1=Math.round(pie);
// console.log(ans1);
// console.log(Math.ceil(4.01));
// console.log(Math.ceil(4.2));

// console.log(Math.floor(4.6));
// console.log(Math.floor(4.2));

let ans2=Math.pow(2,3);
// console.log(ans2);

let ans3=Math.sqrt(8);
// console.log(ans3);

let ans4=Math.abs(1);
// console.log(ans4);

// rad to deg = 
let ans5=Math.sin(90*Math.PI/180);
// console.log(ans5);

let ans6=Math.max(10,3,201,3,8);
// console.log(ans6);

let ans7=Math.min(-1,32,13,5,1,9);
// console.log(ans7);

//Very very very Important
//homework - kha se leke kaha tak wala function

function random(start,end){
  return Math.floor(Math.random()*(end-start+1)+start); //(0 to 4)+10
}
let ans=random(10,15);
console.log(ans);