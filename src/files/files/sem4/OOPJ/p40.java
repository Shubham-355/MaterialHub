// 40 Program that demonstrate linklist

import java.util.LinkedList;

public class p40 {
    public static void main(String[] args) {
        // Create a LinkedList to store strings
        LinkedList<String> names = new LinkedList<>();

        // Adding elements to the LinkedList
        names.add("Alice");
        names.add("Bob");
        names.add("Charlie");
        names.add("David");

        // Displaying the LinkedList
        System.out.println("LinkedList: " + names);

        // Adding an element at the beginning of the LinkedList
        names.addFirst("Eve");

        // Displaying the modified LinkedList
        System.out.println("LinkedList after adding element at the beginning: " + names);

        // Adding an element at the end of the LinkedList
        names.addLast("Frank");

        // Displaying the modified LinkedList
        System.out.println("LinkedList after adding element at the end: " + names);

        // Accessing elements by index
        System.out.println("Element at index 2: " + names.get(2));

        // Removing an element from the LinkedList
        names.remove(1);

        // Displaying the modified LinkedList
        System.out.println("LinkedList after removing element at index 1: " + names);

        // Checking if the LinkedList contains a specific element
        String searchName = "Alice";
        if (names.contains(searchName)) {
            System.out.println("LinkedList contains " + searchName);
        } else {
            System.out.println("LinkedList does not contain " + searchName);
        }

        // Getting the size of the LinkedList
        System.out.println("Size of LinkedList: " + names.size());

        // Clearing the LinkedList
        names.clear();

        // Checking if the LinkedList is empty
        if (names.isEmpty()) {
            System.out.println("LinkedList is empty");
        } else {
            System.out.println("LinkedList is not empty");
        }
    }
}

// output:

// LinkedList: [Alice, Bob, Charlie, David]
// LinkedList after adding element at the beginning: [Eve, Alice, Bob, Charlie, David]
// LinkedList after adding element at the end: [Eve, Alice, Bob, Charlie, David, Frank]
// Element at index 2: Bob
// LinkedList after removing element at index 1: [Eve, Bob, Charlie, David, Frank]
// LinkedList contains Alice
// Size of LinkedList: 5
// LinkedList is empty