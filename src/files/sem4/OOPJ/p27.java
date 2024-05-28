// 27	Program to implement multiple threads.		

class MyThread extends Thread {
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(Thread.currentThread().getName() + ": " + i);
        }
    }
}

public class MultipleThreadsExample {
    public static void main(String[] args) {
        MyThread thread1 = new MyThread();
        MyThread thread2 = new MyThread();

        thread1.setName("Thread 1");
        thread2.setName("Thread 2");

        thread1.start();
        thread2.start();
    }
}

// output:

// Thread 1: 1
// Thread 1: 2
// Thread 1: 3
// Thread 1: 4
// Thread 1: 5
// Thread 2: 1
// Thread 2: 2
// Thread 2: 3
// Thread 2: 4
// Thread 2: 5