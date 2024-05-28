// 18	Program to implement final keyword.		

class Example {
    final int num = 10;

    void display() {
        // Trying to modify the final variable, which will result in a compile-time error
        // num = 20;
        System.out.println("Value of final variable: " + num);
    }
}

public class p18 {
    public static void main(String[] args) {
        Example obj = new Example();
        obj.display();
    }
}

// output:

// Value of final variable: 10