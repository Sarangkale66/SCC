//         1
//       1 2
//     1 2 3
//   1 2 3 4
// 1 2 3 4 5

let n=5;
for(let i=0;i<n;i++){
  let str="";
  for(let k=0;k<n-i-1;k++){
    str+="  ";
  }
  for(let j=0;j<=i;j++){
    str+=String(j+1)+" ";
  }
  console.log(str);
}