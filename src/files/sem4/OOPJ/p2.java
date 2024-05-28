// 2	Program to implement a Class and method with parameters and return value.		

class p2 {
    int add(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        p2 obj = new p2();
        int result = obj.add(5, 3);
        System.out.println("Result of addition: " + result);
    }
}

// output:

// Result of addition: 8