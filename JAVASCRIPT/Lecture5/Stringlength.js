// 0 1 1 2 3 5 8.....

function fib(n,dp={}){
  if(n==0)
    return 0;
  if(n==1)
    return 1;

  if(n in dp)
    return dp[n];

  return dp[n]=fib(n-1)+fib(n-2);
}

//time complexity:O(2*n)

let n=6;
let ans=fib(n);
console.log(ans);

function print(i,str){
  //base case
  if(i>=str.length)
    return;

  console.log(str[i]);
  print(i+1,str);

  console.log(true);
}

let str="ABCDEFGH";
// console.log(str.length);//8

//iteration : (visit every value)
    // -looping
    /*for(let i=0;i<str.length;i++)
    {
      console.log(str[i]);
    }*/
    // -recursion
    let i=0; 
    // print(i,str);