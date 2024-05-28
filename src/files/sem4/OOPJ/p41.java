// 41 Program that demonsarate treeset

import java.util.TreeSet;

public class p41 {
    public static void main(String[] args) {
        // Create a TreeSet to store integers
        TreeSet<Integer> numbers = new TreeSet<>();

        // Adding elements to the TreeSet
        numbers.add(10);
        numbers.add(5);
        numbers.add(20);
        numbers.add(15);

        // Displaying the TreeSet (in ascending order)
        System.out.println("TreeSet: " + numbers);

        // Adding duplicate elements
        numbers.add(10);
        numbers.add(5);

        // Displaying the modified TreeSet (duplicates are not allowed)
        System.out.println("TreeSet after adding duplicates: " + numbers);

        // Removing an element from the TreeSet
        numbers.remove(15);

        // Displaying the modified TreeSet
        System.out.println("TreeSet after removing element 15: " + numbers);

        // Checking if the TreeSet contains a specific element
        int searchNumber = 20;
        if (numbers.contains(searchNumber)) {
            System.out.println("TreeSet contains " + searchNumber);
        } else {
            System.out.println("TreeSet does not contain " + searchNumber);
        }

        // Getting the size of the TreeSet
        System.out.println("Size of TreeSet: " + numbers.size());

        // Clearing the TreeSet
        numbers.clear();

        // Checking if the TreeSet is empty
        if (numbers.isEmpty()) {
            System.out.println("TreeSet is empty");
        } else {
            System.out.println("TreeSet is not empty");
        }
    }
}

// output:

// TreeSet: [5, 10, 15, 20]
// TreeSet after adding duplicates: [5, 10, 15, 20]
// TreeSet after removing element 15: [5, 10, 20]
// TreeSet contains 20
// Size of TreeSet: 3
// TreeSet is empty