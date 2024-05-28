// 11	Program to implement Access Control.		

public class p11 {
    private int privateVar = 10;
    int defaultVar = 20;
    protected int protectedVar = 30;
    public int publicVar = 40;

    public static void main(String[] args) {
        p11 obj = new p11();
        System.out.println("Accessing variables:");
        System.out.println("Private variable: " + obj.privateVar);
        System.out.println("Default variable: " + obj.defaultVar);
        System.out.println("Protected variable: " + obj.protectedVar);
        System.out.println("Public variable: " + obj.publicVar);
    }
}

// output:

// Accessing variables:
// Private variable: 10
// Default variable: 20
// Protected variable: 30
// Public variable: 40