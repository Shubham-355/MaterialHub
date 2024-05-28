// 26	Program to create new threads.		

class MyThread extends Thread {
    public void run() {
        System.out.println("Thread running...");
    }
}

public class NewThreadExample {
    public static void main(String[] args) {
        MyThread thread = new MyThread();
        thread.start(); // Start the thread
    }
}

// output:

// Thread running...