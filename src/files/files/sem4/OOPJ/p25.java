// 25	Program to implement main Thread.		

public class MainThreadExample {
    public static void main(String[] args) {
        Thread mainThread = Thread.currentThread();

        System.out.println("Main thread name: " + mainThread.getName());
        System.out.println("Main thread priority: " + mainThread.getPriority());
        System.out.println("Main thread ID: " + mainThread.getId());
        System.out.println("Main thread state: " + mainThread.getState());
        System.out.println("Main thread is alive: " + mainThread.isAlive());
    }
}


// output:

// Main thread name: main
// Main thread priority: 5
// Main thread ID: 1
// Main thread state: RUNNABLE
// Main thread is alive: true