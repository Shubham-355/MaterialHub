// 39 Program that demonstrate Arraylist

import java.util.ArrayList;

public class p39 {
    public static void main(String[] args) {
        // Create an ArrayList to store integers
        ArrayList<Integer> numbers = new ArrayList<>();

        // Adding elements to the ArrayList
        numbers.add(10);
        numbers.add(20);
        numbers.add(30);
        numbers.add(40);

        // Displaying the ArrayList
        System.out.println("ArrayList: " + numbers);

        // Accessing elements by index
        System.out.println("Element at index 1: " + numbers.get(1));

        // Iterating over the ArrayList using for-each loop
        System.out.print("Elements in the ArrayList: ");
        for (Integer num : numbers) {
            System.out.print(num + " ");
        }
        System.out.println();

        // Removing an element from the ArrayList
        numbers.remove(2);

        // Displaying the modified ArrayList
        System.out.println("ArrayList after removing element at index 2: " + numbers);

        // Checking if the ArrayList contains a specific element
        int searchElement = 20;
        if (numbers.contains(searchElement)) {
            System.out.println("ArrayList contains " + searchElement);
        } else {
            System.out.println("ArrayList does not contain " + searchElement);
        }

        // Getting the size of the ArrayList
        System.out.println("Size of ArrayList: " + numbers.size());

        // Clearing the ArrayList
        numbers.clear();

        // Checking if the ArrayList is empty
        if (numbers.isEmpty()) {
            System.out.println("ArrayList is empty");
        } else {
            System.out.println("ArrayList is not empty");
        }
    }
}


// output:

// ArrayList: [10, 20, 30, 40]
// Element at index 1: 20
// Elements in the ArrayList: 10 20 30 40 
// ArrayList after removing element at index 2: [10, 20, 40]
// ArrayList contains 20
// Size of ArrayList: 3
// ArrayList is empty