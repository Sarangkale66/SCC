#include<iostream>
using namespace std;

//by default mere ke member variables hite hai private
class Car{
 public:
  int data;
  string name;
  Car(int val,string naam){
    data=val;
    name=naam;
  }
};

Car Print(){
  Car c(10,"shaani");
  return c;
}

int main()
{
  Car ans=Print();
  cout<<ans.data<<endl;
  cout<<ans.name;
}