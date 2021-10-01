#include <bits/stdc++.h>
using namespace std;

//Cycle Sort : Sorting array of size n having integers from 1 to n in O(n);

void swap(int *a, int *b){
    int temp = *a;
    *a = *b;
    *b = temp;
}

void printArray(int arr[], int n){
    for(int i = 0; i < n; i++){
        cout << arr[i] << " ";
    }
}

void sortArray(int arr[], int n){
    for(int i=0; i<n; i++){
        if(arr[i] == i+1)
            i++;
        else
            swap(&arr[i], &arr[arr[i] - 1]);
    }
    
    printArray(arr, n);
}

int main() {
	int n;
	cin >> n;

    int arr[n];
	
	for(int i=0; i<n; i++){
	    cin >> arr[i];
	}
	
	sortArray(arr, n);
}
