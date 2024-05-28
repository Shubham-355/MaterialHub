// 23	Program to implement Exception Handling.		

public class p23 {
    public static void main(String[] args) {
        try {
            int num1 = 10;
            int num2 = 0;
            int result = num1 / num2;
            System.out.println("Result: " + result);
        } catch (ArithmeticException e) {
            System.out.println("Exception caught: Division by zero");
        }
    }
}

// output:

// Exception caught: Division by zero