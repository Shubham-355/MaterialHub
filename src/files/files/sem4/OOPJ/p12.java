// 12	Program to implement the use of static keyword.		

public class p12 {
    static int numInstances = 0;

    p12() {
        numInstances++;
    }

    public static void main(String[] args) {
        p12 obj1 = new p12();
        p12 obj2 = new p12();
        System.out.println("Number of instances created: " + p12.numInstances);
    }
}

// output:

// Number of instances created: 2