// 21	Program to implement partial implementation.		

abstract class PartialImplementation {
    void display() {
        System.out.println("This is a concrete method.");
    }

    abstract void show();
}

class Subclass extends PartialImplementation {
    void show() {
        System.out.println("This is an abstract method implementation.");
    }
}

public class PartialImplementationExample {
    public static void main(String[] args) {
        Subclass obj = new Subclass();
        obj.display();
        obj.show();
    }
}

// output:

// This is a concrete method.
// This is an abstract method implementation.