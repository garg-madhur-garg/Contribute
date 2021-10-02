#include <iostream>
#define MAX 10
using namespace std;

class Deque {
    int *deque;
    int left = -1, right = -1;
public:
    Deque();
    void input_deque(void);
    void output_deque(void);
    void insert_left(void);
    void insert_right(void);
    void delete_left(void);
    void delete_right(void);
    void display(void);
};

int main() {
    Deque d;
    int option;
    printf("\n *****MAIN MENU*****");
    printf("\n 1.Input restricted deque");
    printf("\n 2.Output restricted deque");
    printf("Enter your option : ");
    scanf("%d",&option);
    switch(option) {
    case 1:
        d.input_deque();
        break;
    case 2:
        d.output_deque();
        break;
    }
    return 0;
}

Deque::Deque() {
    deque = new int[MAX];
}

void Deque:: input_deque() {
    int option;
    do {
        printf("\n INPUT RESTRICTED DEQUE");
        printf("\n 1.Insert at right");
        printf("\n 2.Delete from left");
        printf("\n 3.Delete from right");
        printf("\n 4.Display");
        printf("\n 5.Quit");
        printf("\n Enter your option : ");
        scanf("%d",&option);
        switch(option) {
        case 1:
            insert_right();
            break;
        case 2:
            delete_left();
            break;
        case 3:
            delete_right();
            break;
        case 4:
            display();
            break;
        }
    } while(option!=5);
}
void Deque::  output_deque() {
    int option;
    do {
        printf("OUTPUT RESTRICTED DEQUE");
        printf("\n 1.Insert at right");
        printf("\n 2.Insert at left");
        printf("\n 3.Delete from left");
        printf("\n 4.Display");
        printf("\n 5.Quit");
        printf("\n Enter your option : ");
        scanf("%d",&option);
        switch(option) {
        case 1:
            insert_right();
            break;
        case 2:
            insert_left();
            break;
        case 3:
            delete_left();
            break;
        case 4:
            display();
            break;
        }
    } while(option!=5);
}
void Deque:: insert_right() {
    int val;
    cout<<"\n Enter the value to be added:";
    cin>>val;
    if((left==0 &&  right == MAX-1) || (left == right+1)) {
        cout<<"\n OVERFLOW";
        return;
    }
    if(left == -1){ /* if queue is initially empty */
        left = 0;
        right = 0;
    }
    else {
        if(right == MAX-1) /*right is at last position of queue */
            right = 0;
        else
            right++;
    }
    deque[right] = val ;
}
void Deque:: insert_left(){
    int val;
    cout<<"\n Enter the value to be added:";
    cin>>val;
    if((left == 0 && right == MAX-1) || (left == right+1)) {
        cout<<"\n Overflow";
        return;
    }

    if(left == -1) { /*If queue is initially empty*/
        left = 0;
        right = 0;
    }
    else{
        if(left == 0)
            left=MAX-1;
        else
            left--;
    }
    deque[left]=val;
}
void Deque:: delete_left() {
    if (left == -1) {
        cout<<"\n UNDERFLOW";
        return ;
    }
    cout<<"\n The deleted element is : "<<deque[left] ;
    if(left == right) { /*Queue has only one element */
        left = -1;
        right = -1;
    }
    else {
        if(left == MAX-1)
            left = 0;
        else
            left = left+1;
    }
}
void Deque:: delete_right() {
    if (left == -1) {
        cout<<"\n UNDERFLOW";
        return ;
    }
    cout<<"\n The element deleted is : "<<deque[right];
    if(left == right) { /*queue has only one element*/
        left = -1;
        right = -1;
    }
    else {
        if(right == 0)
            right=MAX-1;
        else
            right=right-1;
    }
}
void Deque:: display() {
    int front=left, rear=right;
    if(front == -1) {
        cout<<"\n QUEUE IS EMPTY";
        return;
    }
    cout<<"\n The elements of the queue are : ";

    if(front <= rear ) {
        while(front <= rear) {
            cout<<deque[front++]<<" ";
        }
    }
    else {
        while(front <= MAX-1) {
            cout<<deque[front++]<<" ";
        }
        front = 0;
        while(front <= rear) {
            cout<<deque[front++]<<" ";
        }
    }
    cout<<endl;
}
