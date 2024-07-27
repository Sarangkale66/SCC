let arr=[10,20,30];
//for loop
  //  -traditional for loop
   for(let i=0;i<6;i++)
  {
    console.log("hello");
  }
  // -forEach()
  arr.forEach(function(value,index){
    console.log(value,index);
  })
  // -for_of
  // -for_in

//while
  let i=0;
  while(i<6){
    console.log(i++);
  }
//Do while
  let j=0;
  do{
    console.log(j);
  }while(j--);
