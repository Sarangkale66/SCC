#include<iostream>
using namespace std;

//print function
int main()
{
  int arr[]={1,2,4,2,1};
  int size=sizeof(arr)/sizeof(int);
  for(int i=0;i<5;i++){
    for(int j=0;j<=i;j++){
      cout<<"* ";
    }
    cout<<endl;
  }
}