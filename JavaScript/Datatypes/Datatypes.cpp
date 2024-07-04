#include<iostream>
using namespace std;

int main(){
  int num=10;
  int *ptr=&num;

  cout<<&num<<endl;//address
  cout<<num<<"\n";//value
  cout<<ptr<<endl;//num-address
  cout<<&ptr<<endl;//ptr-address
  cout<<*ptr+1;//num-value
  cout<<num<<"\n";//value
}