// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1       5


for(let i=0;i<5;i++){
  let str=""
  for(let j=0;j<=i;j++){
    if(i!=4){
      str+=(j+1+" ");
    }
    // else if((j==0 || j==4)){
    //   str+=j+1+" ";
    // }
    else{
//          (condition) ? (true) : (false)
      str+=(j==0||j==4) ? (j+1+" ") :"  ";
    }
  }
  console.log(str);
}