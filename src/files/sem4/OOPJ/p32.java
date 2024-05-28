// 32	Program to read characters from console using I/O classes.		

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class ConsoleInputExample {
    public static void main(String[] args) {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        System.out.println("Enter a character:");

        try {
            char c = (char) reader.read();
            System.out.println("You entered: " + c);
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                reader.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}


// output:

// Enter a character:
// A
// You entered: A