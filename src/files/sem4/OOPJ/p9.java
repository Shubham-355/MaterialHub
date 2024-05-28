// 9	Program to implement Recursion (Example of factorial).		

public class p9 {
    int factorial(int n) {
        if (n == 0 || n == 1)
            return 1;
        else
            return n * factorial(n - 1);
    }

    public static void main(String[] args) {
        p9 obj = new p9();
        int num = 5;
        System.out.println("Factorial of " + num + " is: " + obj.factorial(num));
    }
}

// output:

// Factorial of 5 is: 120