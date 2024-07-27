#include<iostream>
using namespace std;

int num=10;

void ABCD(){
  cout<<num;
}
int main()
{
  ABCD();
  if(!false){
    cout<<num;
    num++;
  }
  cout<<num;
}