#include<iostream>
using namespace std;

void find(int i,int n){
  if(i==n)
   return;

  cout<<i<<" ";
  find(i+1,n);
}

int main()
{
  // 0---------n
  int n=3;
  find(0,n);
}