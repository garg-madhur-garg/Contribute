package dataStructure;

public class BubbleSort {
	public static void main(String[] args) {
		
		int[] intArray = {10 , 20 ,11, -4, 6, -22 ,33};
		
		for (int unsortedArrayIndex = intArray.length-1 ; unsortedArrayIndex>0 ; unsortedArrayIndex--) {
			
			for (int i=0; i<unsortedArrayIndex;i++) {
				
				if (intArray[i]>intArray[i+1]) {
					swap(intArray , i , i+1);
				}
			}
			
		}
		for(int j=0;j<intArray.length;j++) {
			System.out.println(intArray[j]);
		}
		
		
	}
	
	public static void swap(int[] arr , int i , int j) {
		
		if(i==j) {
			return;
		}
		
		int temp = arr[i];
		arr[i]= arr[j];
		arr[j]= temp;
		
	}

}
