// 20	Program to implement interface.		

interface Shape {
    void draw();
}

class Circle implements Shape {
    public void draw() {
        System.out.println("Drawing a circle");
    }
}

public class p20 {
    public static void main(String[] args) {
        Circle circle = new Circle();
        circle.draw();
    }
}

// output:

// Drawing a circle