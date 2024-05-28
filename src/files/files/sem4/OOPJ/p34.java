// 34	Program to copy the contents of one file to another file.		

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class FileCopyExample {
    public static void main(String[] args) {
        String sourceFile = "source.txt";
        String destinationFile = "destination.txt";

        try (FileInputStream inputStream = new FileInputStream(sourceFile);
             FileOutputStream outputStream = new FileOutputStream(destinationFile)) {

            byte[] buffer = new byte[1024];
            int length;

            while ((length = inputStream.read(buffer)) > 0) {
                outputStream.write(buffer, 0, length);
            }

            System.out.println("File copied successfully.");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

// output:

// File copied successfully.