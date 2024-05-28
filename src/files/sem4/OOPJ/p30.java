// 30	Program to solve producer consumer problem using threads.		

import java.util.LinkedList;

class ProducerConsumer {
    private LinkedList<Integer> buffer = new LinkedList<>();
    private int capacity;

    ProducerConsumer(int capacity) {
        this.capacity = capacity;
    }

    public void produce() throws InterruptedException {
        int value = 0;
        while (true) {
            synchronized (this) {
                while (buffer.size() == capacity)
                    wait();

                System.out.println("Producer produced: " + value);
                buffer.add(value++);

                notify();

                Thread.sleep(1000);
            }
        }
    }

    public void consume() throws InterruptedException {
        while (true) {
            synchronized (this) {
                while (buffer.isEmpty())
                    wait();

                int consumedValue = buffer.removeFirst();
                System.out.println("Consumer consumed: " + consumedValue);

                notify();

                Thread.sleep(1000);
            }
        }
    }
}

public class ProducerConsumerExample {
    public static void main(String[] args) {
        ProducerConsumer pc = new ProducerConsumer(5);

        Thread producerThread = new Thread(() -> {
            try {
                pc.produce();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });

        Thread consumerThread = new Thread(() -> {
            try {
                pc.consume();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });

        producerThread.start();
        consumerThread.start();
    }
}


// output:

// Producer produced: 0
// Producer produced: 1
// Consumer consumed: 0
// Producer produced: 2
// Consumer consumed: 1
// Producer produced: 3
// Consumer consumed: 2
// Producer produced: 4
// Consumer consumed: 3
// Producer produced: 5
// Consumer consumed: 4
// Producer produced: 6
// Consumer consumed: 5
// Producer produced: 7
// Consumer consumed: 6
// Producer produced: 8
// Consumer consumed: 7
// Producer produced: 9
// Consumer consumed: 8
// Producer produced: 10
// Consumer consumed: 9