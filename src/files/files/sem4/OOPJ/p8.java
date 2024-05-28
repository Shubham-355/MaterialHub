// 8	Program to implement returning objects.		

class Rectangle {
    int length;
    int width;

    Rectangle(int length, int width) {
        this.length = length;
        this.width = width;
    }

    int calculateArea() {
        return length * width;
    }
}

public class p8 {
    Rectangle createRectangle(int length, int width) {
        return new Rectangle(length, width);
    }

    public static void main(String[] args) {
        p8 obj = new p8();
        Rectangle rectangle = obj.createRectangle(5, 3);
        int area = rectangle.calculateArea();

        System.out.println("Area of the rectangle: " + area);
    }
}

// output:

// Area of the rectangle: 15