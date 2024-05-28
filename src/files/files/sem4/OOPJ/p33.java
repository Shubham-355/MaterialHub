// 33	Program to read lines of strings from console.		

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class ConsoleInputStringExample {
    public static void main(String[] args) {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        System.out.println("Enter a string:");

        try {
            String input = reader.readLine();
            System.out.println("You entered: " + input);
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

// Enter a string:
// Hello, World!
// You entered: Hello, World!