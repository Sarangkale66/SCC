//poly-many
//morphism-forms

// -function Overloading
class Car{
  Add(a=0,b=0,c=0,d=0,e=0,f=0,g=0,h=0){
    return (a+b+c+d+e+f+g+h);
  }
}
let obj=new Car();
// console.log(obj.Add(1,2,3,4,5,6,7,8));

// -function Overriding
class Laptop{
   getFeature(a,b,c){
    console.log("music feature Laptop class");
   }
}

class Desktop extends Laptop{
  getFeature(a,b){
    console.log("music feature Desktop class");
  }
}

let obj1=new Desktop();
obj1.getFeature(1,2,3);