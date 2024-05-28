// 17	Program to implement super keyword.		

class Parent {
    int num = 10;
}

class Child extends Parent {
    int num = 20;

    void display() {
        System.out.println("Child class num: " + num);
        System.out.println("Parent class num: " + super.num);
    }
}

public class p17 {
    public static void main(String[] args) {
        Child obj = new Child();
        obj.display();
    }
}

// output:

// Child class num: 20
// Parent class num: 10