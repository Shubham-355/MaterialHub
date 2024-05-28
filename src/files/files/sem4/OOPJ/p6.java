// 6	Program to implement Call by value.		

class p6 {
    void modify(int x) {
        x = x * 2;
        System.out.println("Inside modify method: x = " + x);
    }

    public static void main(String[] args) {
        p6 obj = new p6();
        int num = 10;

        System.out.println("Before calling modify method: num = " + num);
        obj.modify(num);
        System.out.println("After calling modify method: num = " + num);
    }
}

// output:

// Before calling modify method: num = 10
// Inside modify method: x = 20
// After calling modify method: num = 10