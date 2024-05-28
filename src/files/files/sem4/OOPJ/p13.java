// 13	Program to implement inner classes.		

public class p13 {
    private int outerVar = 10;

    class Inner {
        void display() {
            System.out.println("Outer variable: " + outerVar);
        }
    }

    public static void main(String[] args) {
        p13 outerObj = new p13();
        p13.Inner innerObj = outerObj.new Inner();
        innerObj.display();
    }
}

// output:

// Outer variable: 10