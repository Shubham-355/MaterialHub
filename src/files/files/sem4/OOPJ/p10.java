// 10	Program to implement Recursion (Printing elements of an Array).		

public class p10 {
    void printArray(int[] arr, int index) {
        if (index < arr.length) {
            System.out.print(arr[index] + " ");
            printArray(arr, index + 1);
        }
    }

    public static void main(String[] args) {
        p10 obj = new p10();
        int[] arr = {1, 2, 3, 4, 5};
        System.out.println("Elements of the array:");
        obj.printArray(arr, 0);
    }
}

// output:

// Elements of the array:
// 1 2 3 4 5 