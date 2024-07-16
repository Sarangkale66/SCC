#include<iostream>
using namespace std;
//two sum pointer
int main(){
  int arr[]={1,2,3,4,5};
  int sum=8;
  int size1=sizeof(arr)/sizeof(int);
  // time complexity: O(n2)
  for(int i=0;i<size1;i++){
    for(int j=i+1;j<size1;j++){
      if(arr[i]+arr[j]==sum){
        cout<<arr[i]<<" "<<arr[j]<<endl;
      }
    }
    for(int a=0;a<size1;a++){
      //loop run n times
    }
  }
  // time complexity:O(2n^2)
}