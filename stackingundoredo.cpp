#include <bits/stdc++.h>
using namespace std;

#define n 100

class Stack{
    int *arr;
    int top;
    public:
    Stack(){
        arr = new int[n];
        top = -1;
    }
    void push(int val){
        if(top == n - 1){
            cout << "stack is fullly occupied\n";
            return;
        }
        top++;
        arr[top] = val;
    }
    void pop(){
        if(top == -1){
            cout << "stack has no element to pop\n";
        }
        top--;
    }
    int Top(){
        if(top == -1){
            cout << "Stack is empty\n";
            return -1;
        }
        return arr[top];
    }
    bool empty(){
        return top == -1;
    }
};

int main(){
    Stack st;
    st.push(1);
    st.push(2);
    st.push(3);
    st.push(4);

    cout << st.Top() << endl;
    st.pop();

    cout << st.Top() << endl;
    st.pop();

    cout << st.Top() << endl;
    st.pop();

    cout << st.Top() << endl;
    st.pop();

    cout << st.Top() << endl;
    st.pop();

    if(st.empty())
        cout << "Stack is empty\n";
    
    else    
        cout << "Stack is not empty\n";
}

