// 7	Program to implement Call by reference.		

class Test {
    int x, y;

    Test(int x, int y) {
        this.x = x;
        this.y = y;
    }

    void modify(Test obj) {
        obj.x *= 2;
        obj.y /= 2;
    }
}

public class p7 {
    public static void main(String[] args) {
        Test obj = new Test(10, 20);

        System.out.println("Values before calling modify method: x = " + obj.x + ", y = " + obj.y);

        // Pass obj as an argument.
        obj.modify(obj);

        System.out.println("Values after calling modify method: x = " + obj.x + ", y = " + obj.y);
    }
}

// output:

// Values before calling modify method: x = 10, y = 20
// Values after calling modify method: x = 20, y = 10