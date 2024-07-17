#include<iostream>
using namespace std;
//two sum pointer

class ListNode{
  public:
  int val;
  ListNode* next;
  ListNode(int val){
    this->val=val;
    this->next=NULL;
  }
}; 


/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
void InsertAtTail(ListNode*&head,ListNode*&tail,int val){
    ListNode* newNode=new ListNode(val);
    if(!head){
        head=newNode;
        tail=newNode;
    }
    else{
    tail->next=newNode;
    tail=newNode;
    }
}
ListNode* addTwoNumbers(ListNode* &l1, ListNode*&l2) {
        ListNode* resultHead=NULL;
        ListNode* resultTail=NULL;
        ListNode* head1=l1;
        ListNode* head2=l2;
        int carry=0;
        while(head1!=NULL && head2!=NULL){
            int sum=head1->val+head2->val+carry;
            carry=sum/10;
            sum=sum%10;
            InsertAtTail(resultHead,resultTail,sum);
            head1=head1->next;
            head2=head2->next;
        }
        if(carry!=0)
          InsertAtTail(resultHead,resultTail,carry);
        return resultHead;
}


int main(){
  // int arr[]={1,2,3,4,5};
  // int sum=8;
  // int size1=sizeof(arr)/sizeof(int);
  // // time complexity: O(n2) - worst case
  // for(int i=0;i<size1;i++){
  //   for(int j=i+1;j<size1;j++){
  //     if(arr[i]+arr[j]==sum){
  //       cout<<arr[i]<<" "<<arr[j]<<endl;
  //     }
  //   }
  // }
  
  // time complexity:O(2n^2)

  ListNode* head1=NULL;
  ListNode* tail1=NULL;
  InsertAtTail(head1,tail1,2);
  InsertAtTail(head1,tail1,4);
  // InsertAtTail(head1,tail1,3);

  ListNode* head2=NULL;
  ListNode* tail2=NULL;
  InsertAtTail(head2,tail2,5);
  InsertAtTail(head2,tail2,6);
  // InsertAtTail(head2,tail2,4);

  // ListNode* result=addTwoNumbers(head1,head2);

  // while(result){
  //   cout<<result->val<<" ";
  //   result=result->next;
  // }


  string a;
  a.push_back('a');
  a.push_back('b');
  a.pop_back();
  a='b'+a;  
  cout<<a;
  
}


