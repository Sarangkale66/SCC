
let obj={
  name:"sarang",
  DOB:"21-05-2003",
  wife:"shaani",
};

// obj.lastName="Omar";
// console.log(obj);
// obj.lastName="Kale";
// console.log(obj.name);

console.log(obj["name"]);
delete obj['name'];
console.log(obj["name"]);

//database:
//  SQL    - relational Database 5s
//  MONGODB - Non relational database (NOSQL) 0.5s
//  POSTgreSQL- 0.7s
//  Redis- 0.01s