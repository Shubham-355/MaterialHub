// 4	Program to implement object passing as arguments.		

class Test {
    int a, b;

    Test(int i, int j) {
        a = i;
        b = j;
    }

    // Pass an object.
    void meth(Test o) {
        o.a *= 2;
        o.b /= 2;
    }
}

public class p4 {
    public static void main(String[] args) {
        Test obj = new Test(10, 20);

        System.out.println("Values before calling method: a = " + obj.a + ", b = " + obj.b);

        // Pass obj as an argument.
        obj.meth(obj);

        System.out.println("Values after calling method: a = " + obj.a + ", b = " + obj.b);
    }
}


// output:

// Values before calling method: a = 10, b = 20
// Values after calling method: a = 20, b = 10