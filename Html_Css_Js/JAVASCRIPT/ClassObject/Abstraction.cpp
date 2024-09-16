#include<bits/stdc++.h>
using namespace std;

class Abstraction{
  private:
  int Multiply(int a,int b){
    return a*b;
  }
  public:
  int CallMe(int a, int b){
    return this->Multiply(a,b);
  }
};
int main(){
  Abstraction obj;
  cout<<obj.CallMe(10,10);
}