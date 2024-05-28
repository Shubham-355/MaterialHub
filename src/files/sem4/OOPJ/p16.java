// 16	Program to implement Method Overriding.		

class Parent {
    void display() {
        System.out.println("Parent's display() method");
    }
}

class Child extends Parent {
    void display() {
        System.out.println("Child's display() method");
    }
}

public class p16 {
    public static void main(String[] args) {
        Child obj = new Child();
        obj.display();
    }
}

// output:

// Child's display() method