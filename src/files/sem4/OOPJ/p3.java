// 3	Program to implement Stack.		

class Stack {
    private int maxSize;
    private int[] stackArray;
    private int top;

    public Stack(int size) {
        maxSize = size;
        stackArray = new int[maxSize];
        top = -1;
    }

    public void push(int value) {
        if (top == maxSize - 1) {
            System.out.println("Stack overflow");
            return;
        }
        stackArray[++top] = value;
    }

    public int pop() {
        if (top == -1) {
            System.out.println("Stack underflow");
            return -1;
        }
        return stackArray[top--];
    }

    public int peek() {
        if (top == -1) {
            System.out.println("Stack is empty");
            return -1;
        }
        return stackArray[top];
    }

    public boolean isEmpty() {
        return (top == -1);
    }
}

public class p3 {
    public static void main(String[] args) {
        Stack myStack = new Stack(5);
        myStack.push(10);
        myStack.push(20);
        myStack.push(30);

        System.out.println("Top element: " + myStack.peek());
        System.out.println("Popped element: " + myStack.pop());
        System.out.println("Top element after popping: " + myStack.peek());
        System.out.println("Is the stack empty? " + myStack.isEmpty());
    }
}

// output:

// Top element: 30
// Popped element: 30
// Top element after popping: 20
// Is the stack empty? false