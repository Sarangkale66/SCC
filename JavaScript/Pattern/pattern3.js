//A B C D E

function printVishu(i,str1){
  let ascii=str1.charCodeAt(0);
  let str=""
  while(i>0){
    str+=String.fromCharCode(ascii++)+" "
    i--;
  }
  console.log(str);
}
printVishu(5,'a');

