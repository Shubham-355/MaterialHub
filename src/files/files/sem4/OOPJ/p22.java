// 22	Program to implement Dynamic stack implementing Interface.		

interface Stack {
    void push(int value);
    int pop();
}

class DynamicStack implements Stack {
    private int maxSize;
    private int[] stackArray;
    private int top;

    DynamicStack(int size) {
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
}

public class p22 {
    public static void main(String[] args) {
        DynamicStack stack = new DynamicStack(5);
        stack.push(10);
        stack.push(20);
        System.out.println("Popped element: " + stack.pop());
    }
}

// output:

// Popped element: 20