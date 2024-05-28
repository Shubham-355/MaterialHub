// 14	Program to implement Command Line Argument.		

public class p14 {
    public static void main(String[] args) {
        System.out.println("Number of command line arguments: " + args.length);
        System.out.println("Arguments:");
        for (int i = 0; i < args.length; i++) {
            System.out.println((i + 1) + ": " + args[i]);
        }
    }
}

// output:

// Number of command line arguments: 3
// Arguments:
// 1: arg1
// 2: arg2
// 3: arg3