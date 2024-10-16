class Laptop{
  #name;
  #color;

  //get method
  getName(){
    return this.#name;
  }
  getColor(){
    return this.#color;
  }
  
  //set method
  setName(name1){
    this.#name=name1;
  }
  setColor(color1){
    this.#color=color1;
  }
}

let L1=new Laptop();
L1.setName("sarang");
L1.setColor("red");

console.log(L1.getName());
console.log(L1.getColor());

