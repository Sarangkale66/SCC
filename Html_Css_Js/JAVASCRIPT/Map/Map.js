//Map-Datastructure & its methods

let arr=[3,20,20,10,10,1,1,2];

// find distinct Element in an array
//O(n2)->O(n)

let M=new Map();

//O(N)

arr.forEach((val,ind)=>{
  if(M.has(val))
    M.set(val,M.get(val)+1);
  else
    M.set(val,1);
});
console.log(M);
//O(N)
arr.forEach((val,ind)=>{
  if(M.get(val)==1){
    console.log(val);
  }
});

