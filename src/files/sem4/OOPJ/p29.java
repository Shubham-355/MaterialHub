// 29	Program to implement thread priority.		

class MyThread extends Thread {
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(Thread.currentThread().getName() + ": " + i);
            try {
                Thread.sleep(1000); // Sleep for 1 second
            } catch (InterruptedException e) {
                System.out.println(e);
            }
        }
    }
}

public class ThreadPriorityExample {
    public static void main(String[] args) {
        MyThread thread1 = new MyThread();
        MyThread thread2 = new MyThread();

        thread1.setPriority(Thread.MIN_PRIORITY); // Set priority to minimum (1)
        thread2.setPriority(Thread.MAX_PRIORITY); // Set priority to maximum (10)

        thread1.start();
        thread2.start();
    }
}


// output:

// Thread-0: 1
// Thread-1: 1
// Thread-0: 2
// Thread-1: 2
// Thread-0: 3
// Thread-1: 3
// Thread-0: 4
// Thread-1: 4
// Thread-0: 5
// Thread-1: 5