// 24	Program to implement user defined Exception.		

class CustomException extends Exception {
    CustomException(String message) {
        super(message);
    }
}

public class p24 {
    public static void main(String[] args) {
        try {
            throw new CustomException("This is a custom exception");
        } catch (CustomException e) {
            System.out.println("Caught custom exception: " + e.getMessage());
        }
    }
}

// output:

// Caught custom exception: This is a custom exception