//Number Array
const arr=[5,11,13];
//Inserting value into array
arr.push(10);
arr.push(10);
arr.push(20);
arr.push(30);
arr.push(40);
arr.push(50);
arr.push(50);
//Deleting value from backside of array
arr.pop();
//Deleting value from frontside of array
arr.shift();
//Inserting value in between array by replacing the value
arr[3]=30;
// console.log(arr.length);
//find index of value
// console.log(arr.indexOf(50));
//delete value inbetween

//perform sorting
// console.log(arr.sort());

//inorder to serach the presence of value returns boolean
// console.log(arr.includes(5));

console.log(arr);

//split function sirf string par kaam karta hai
// const str=arr.toString();
// console.log(str);
// console.log(str.split(",").join("-").split("-").join("$"));

// console.log(arr.slice(-3,-1));
// console.log(arr.slice(0,3));

// let find=arr.find((value,index)=>{
//   return arr[index]<100;//comparison
// });
// console.log(find);

//for-Each
// arr.forEach(function(nums,pos){
//  console.log(nums,pos);
// });

//Map:-agar apko array ko koi nayi condition deke change karana hai toh may use karta hu map
// let str=["manisha","simaa","vishakhaa","vedant","vishwaajit"]
// var key="vish";//search box
// let newArr=str.map((value,index)=>{
//    if(value.startsWith(key))
//      return value;
//   //  return 0;
// });
// console.log(newArr);

// filter- 
// let ans=str.filter((value,index)=>{
//     return value.startsWith(key);
// });
// console.log(ans);





