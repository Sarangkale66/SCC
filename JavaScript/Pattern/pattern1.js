// syntax:
// while(/*condition*/){
// }

//for(initialization;condition;Upadation){
// }

//* * * * * * * * 

function Star(){
  let i=0; //initialization
  let str=""
  //condition (0 to 7) means less than 8
  while(i<8){
    str=str+"* "
    //updation
    i++;
  }
  console.log(str); 
}

function Star1(){
  let str1=""
  for(let j=0;j<8;j++){
    str1=str1+"* "
  }
  console.log(str1);
}
