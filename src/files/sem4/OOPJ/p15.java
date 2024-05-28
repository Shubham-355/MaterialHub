// 15	Program to implement Inheritance.		

class Animal {
    void sound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    void sound() {
        System.out.println("Dog barks");
    }
}

public class p15 {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.sound();
    }
}

// output:

// Dog barks