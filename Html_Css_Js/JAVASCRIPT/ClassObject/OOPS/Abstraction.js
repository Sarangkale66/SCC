class KuchKuch{
  #Substrction(a,b){
    return b-a;
  }
  CallMe(a,b){
    return this.#Substrction(a,b);
  }
}

let obj=new KuchKuch();
let ans=obj.CallMe(10,11);
console.log(ans);