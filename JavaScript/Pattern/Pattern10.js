//         1
//       2 2
//     3 3 3
//   4 4 4 4
// 5 5 5 5 5

let n=5;
for(let i=0;i<n;i++){
  let str="";
  for(let k=0;k<n-i-1;k++){
    str+="  ";
  }
  for(let j=0;j<=i;j++){
    str+=String(i+1)+" ";
  }
  console.log(str);
}
