//input:200723 
// let num=200723;
// let reverse=0;
// while(num!=0){
//   let temp=Math.floor(num%10);         
//   reverse=reverse*10+temp;
//   num=Math.floor(num/10);        
// }

// console.log(reverse); 

                  //3
let num=200723;   //23 //20
                  //723 //700
                  //0723 //0000
                  //00723 //00000
                  //200723 //200000
let reverse=0;
let i=0;
while(num!=0){
  let temp=Math.floor(num%10); //3 2 7 0 0 2
  reverse=(10**i)*temp+reverse;
  num=Math.floor(num/10);
  i++;
}
console.log(reverse);