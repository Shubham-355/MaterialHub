const fileData = {
    OOPJ: {
        Practical1: `1    Program to implement a Class and method without parameters.

class p1 {
    void display() {
        System.out.println("Hello, this is a method without parameters.");
    }

    public static void main(String[] args) {
        p1 obj = new p1();
        obj.display();
    }
}

output:

Hello, this is a method without parameters.
`,
        Practical2: `
2	Program to implement a Class and method with parameters and return value.		

class p2 {
    int add(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        p2 obj = new p2();
        int result = obj.add(5, 3);
        System.out.println("Result of addition: " + result);
    }
}

output:

Result of addition: 8
`,
        Practical3: `
3	Program to implement Stack.		

class Stack {
    private int maxSize;
    private int[] stackArray;
    private int top;

    public Stack(int size) {
        maxSize = size;
        stackArray = new int[maxSize];
        top = -1;
    }

    public void push(int value) {
        if (top == maxSize - 1) {
            System.out.println("Stack overflow");
            return;
        }
        stackArray[++top] = value;
    }

    public int pop() {
        if (top == -1) {
            System.out.println("Stack underflow");
            return -1;
        }
        return stackArray[top--];
    }

    public int peek() {
        if (top == -1) {
            System.out.println("Stack is empty");
            return -1;
        }
        return stackArray[top];
    }

    public boolean isEmpty() {
        return (top == -1);
    }
}

public class p3 {
    public static void main(String[] args) {
        Stack myStack = new Stack(5);
        myStack.push(10);
        myStack.push(20);
        myStack.push(30);

        System.out.println("Top element: " + myStack.peek());
        System.out.println("Popped element: " + myStack.pop());
        System.out.println("Top element after popping: " + myStack.peek());
        System.out.println("Is the stack empty? " + myStack.isEmpty());
    }
}

output:

Top element: 30
Popped element: 30
Top element after popping: 20
Is the stack empty? false
`,
        Practical4: `
4	Program to implement object passing as arguments.		

class Test {
    int a, b;

    Test(int i, int j) {
        a = i;
        b = j;
    }

    // Pass an object.
    void meth(Test o) {
        o.a *= 2;
        o.b /= 2;
    }
}

public class p4 {
    public static void main(String[] args) {
        Test obj = new Test(10, 20);

        System.out.println("Values before calling method: a = " + obj.a + ", b = " + obj.b);

        // Pass obj as an argument.
        obj.meth(obj);

        System.out.println("Values after calling method: a = " + obj.a + ", b = " + obj.b);
    }
}


output:

Values before calling method: a = 10, b = 20
Values after calling method: a = 20, b = 10
`,
        Practical5: `
5	Program to implement this keyword.		

class Student {
    int rollNo;
    String name;

    Student(int rollNo, String name) {
        this.rollNo = rollNo;
        this.name = name;
    }

    void display() {
        System.out.println("Roll No: " + rollNo);
        System.out.println("Name: " + name);
    }
}

public class p5 {
    public static void main(String[] args) {
        Student student1 = new Student(1, "Alice");
        Student student2 = new Student(2, "Bob");

        System.out.println("Details of student 1:");
        student1.display();

        System.out.println("\nDetails of student 2:");
        student2.display();
    }
}

output:

Details of student 1:
Roll No: 1
Name: Alice

Details of student 2:
Roll No: 2
Name: Bob
`,
        Practical6: `
6	Program to implement Call by value.		

class p6 {
    void modify(int x) {
        x = x * 2;
        System.out.println("Inside modify method: x = " + x);
    }

    public static void main(String[] args) {
        p6 obj = new p6();
        int num = 10;

        System.out.println("Before calling modify method: num = " + num);
        obj.modify(num);
        System.out.println("After calling modify method: num = " + num);
    }
}

output:

Before calling modify method: num = 10
Inside modify method: x = 20
After calling modify method: num = 10
`,
        Practical7: `
7	Program to implement Call by reference.		

class Test {
    int x, y;

    Test(int x, int y) {
        this.x = x;
        this.y = y;
    }

    void modify(Test obj) {
        obj.x *= 2;
        obj.y /= 2;
    }
}

public class p7 {
    public static void main(String[] args) {
        Test obj = new Test(10, 20);

        System.out.println("Values before calling modify method: x = " + obj.x + ", y = " + obj.y);

        // Pass obj as an argument.
        obj.modify(obj);

        System.out.println("Values after calling modify method: x = " + obj.x + ", y = " + obj.y);
    }
}

output:

Values before calling modify method: x = 10, y = 20
Values after calling modify method: x = 20, y = 10
`,
        Practical8: `
8	Program to implement returning objects.		

class Rectangle {
    int length;
    int width;

    Rectangle(int length, int width) {
        this.length = length;
        this.width = width;
    }

    int calculateArea() {
        return length * width;
    }
}

public class p8 {
    Rectangle createRectangle(int length, int width) {
        return new Rectangle(length, width);
    }

    public static void main(String[] args) {
        p8 obj = new p8();
        Rectangle rectangle = obj.createRectangle(5, 3);
        int area = rectangle.calculateArea();

        System.out.println("Area of the rectangle: " + area);
    }
}

output:

Area of the rectangle: 15
`,
        Practical9: `
9	Program to implement Recursion (Example of factorial).		

public class p9 {
    int factorial(int n) {
        if (n == 0 || n == 1)
            return 1;
        else
            return n * factorial(n - 1);
    }

    public static void main(String[] args) {
        p9 obj = new p9();
        int num = 5;
        System.out.println("Factorial of " + num + " is: " + obj.factorial(num));
    }
}

output:

Factorial of 5 is: 120
`,
        Practical10: `
10	Program to implement Recursion (Printing elements of an Array).		

public class p10 {
    void printArray(int[] arr, int index) {
        if (index < arr.length) {
            System.out.print(arr[index] + " ");
            printArray(arr, index + 1);
        }
    }

    public static void main(String[] args) {
        p10 obj = new p10();
        int[] arr = {1, 2, 3, 4, 5};
        System.out.println("Elements of the array:");
        obj.printArray(arr, 0);
    }
}

output:

Elements of the array:
1 2 3 4 5 
`,
        Practical11: `
11	Program to implement Access Control.		

public class p11 {
    private int privateVar = 10;
    int defaultVar = 20;
    protected int protectedVar = 30;
    public int publicVar = 40;

    public static void main(String[] args) {
        p11 obj = new p11();
        System.out.println("Accessing variables:");
        System.out.println("Private variable: " + obj.privateVar);
        System.out.println("Default variable: " + obj.defaultVar);
        System.out.println("Protected variable: " + obj.protectedVar);
        System.out.println("Public variable: " + obj.publicVar);
    }
}

output:

Accessing variables:
Private variable: 10
Default variable: 20
Protected variable: 30
Public variable: 40
`,
        Practical12: `
Program to implement the use of static keyword.		

public class p12 {
    static int numInstances = 0;

    p12() {
        numInstances++;
    }

    public static void main(String[] args) {
        p12 obj1 = new p12();
        p12 obj2 = new p12();
        System.out.println("Number of instances created: " + p12.numInstances);
    }
}

output:

Number of instances created: 2
`,
        Practical13: `
13	Program to implement inner classes.		

public class p13 {
    private int outerVar = 10;

    class Inner {
        void display() {
            System.out.println("Outer variable: " + outerVar);
        }
    }

    public static void main(String[] args) {
        p13 outerObj = new p13();
        p13.Inner innerObj = outerObj.new Inner();
        innerObj.display();
    }
}

output:

Outer variable: 10
`,
        Practical14: `
14	Program to implement Command Line Argument.		

public class p14 {
    public static void main(String[] args) {
        System.out.println("Number of command line arguments: " + args.length);
        System.out.println("Arguments:");
        for (int i = 0; i < args.length; i++) {
            System.out.println((i + 1) + ": " + args[i]);
        }
    }
}

output:

Number of command line arguments: 3
Arguments:
1: arg1
2: arg2
3: arg3
`,
        Practical15: `
15	Program to implement Inheritance.		

class Animal {
    void sound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    void sound() {
        System.out.println("Dog barks");
    }
}

public class p15 {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.sound();
    }
}

output:

Dog barks
`,
        Practical16: `
16	Program to implement Method Overriding.		

class Parent {
    void display() {
        System.out.println("Parent's display() method");
    }
}

class Child extends Parent {
    void display() {
        System.out.println("Child's display() method");
    }
}

public class p16 {
    public static void main(String[] args) {
        Child obj = new Child();
        obj.display();
    }
}

output:

Child's display() method
`,
        Practical17: `
17	Program to implement super keyword.		

class Parent {
    int num = 10;
}

class Child extends Parent {
    int num = 20;

    void display() {
        System.out.println("Child class num: " + num);
        System.out.println("Parent class num: " + super.num);
    }
}

public class p17 {
    public static void main(String[] args) {
        Child obj = new Child();
        obj.display();
    }
}

output:

Child class num: 20
Parent class num: 10
`,
        Practical18: `
18	Program to implement final keyword.		

class Example {
    final int num = 10;

    void display() {
        // Trying to modify the final variable, which will result in a compile-time error
        // num = 20;
        System.out.println("Value of final variable: " + num);
    }
}

public class p18 {
    public static void main(String[] args) {
        Example obj = new Example();
        obj.display();
    }
}

output:

Value of final variable: 10
`,
        Practical19: `
19	Program to implement Package.		

package myPackage;

public class p19 {
    public static void main(String[] args) {
        System.out.println("Inside myPackage.p19");
    }
}

output:

Inside myPackage.p19
`,
        Practical20: `
20	Program to implement interface.		

interface Shape {
    void draw();
}

class Circle implements Shape {
    public void draw() {
        System.out.println("Drawing a circle");
    }
}

public class p20 {
    public static void main(String[] args) {
        Circle circle = new Circle();
        circle.draw();
    }
}

output:

Drawing a circle
`,
        Practical21: `
21	Program to implement partial implementation.		

abstract class PartialImplementation {
    void display() {
        System.out.println("This is a concrete method.");
    }

    abstract void show();
}

class Subclass extends PartialImplementation {
    void show() {
        System.out.println("This is an abstract method implementation.");
    }
}

public class PartialImplementationExample {
    public static void main(String[] args) {
        Subclass obj = new Subclass();
        obj.display();
        obj.show();
    }
}

output:

This is a concrete method.
This is an abstract method implementation.
`,
        Practical22: `
22	Program to implement Dynamic stack implementing Interface.		

interface Stack {
    void push(int value);
    int pop();
}

class DynamicStack implements Stack {
    private int maxSize;
    private int[] stackArray;
    private int top;

    DynamicStack(int size) {
        maxSize = size;
        stackArray = new int[maxSize];
        top = -1;
    }

    public void push(int value) {
        if (top == maxSize - 1) {
            System.out.println("Stack overflow");
            return;
        }
        stackArray[++top] = value;
    }

    public int pop() {
        if (top == -1) {
            System.out.println("Stack underflow");
            return -1;
        }
        return stackArray[top--];
    }
}

public class p22 {
    public static void main(String[] args) {
        DynamicStack stack = new DynamicStack(5);
        stack.push(10);
        stack.push(20);
        System.out.println("Popped element: " + stack.pop());
    }
}

output:

Popped element: 20
`,
        Practical23: `
23	Program to implement Exception Handling.		

public class p23 {
    public static void main(String[] args) {
        try {
            int num1 = 10;
            int num2 = 0;
            int result = num1 / num2;
            System.out.println("Result: " + result);
        } catch (ArithmeticException e) {
            System.out.println("Exception caught: Division by zero");
        }
    }
}

output:

Exception caught: Division by zero
`,
        Practical24: `
24	Program to implement user defined Exception.		

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

output:

Caught custom exception: This is a custom exception
`,
        Practical25: `
25	Program to implement main Thread.		

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


output:

Main thread name: main
Main thread priority: 5
Main thread ID: 1
Main thread state: RUNNABLE
Main thread is alive: true
`,
        Practical26: `
26	Program to create new threads.		

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

output:

Thread running...
`,
        Practical27: `
27	Program to implement multiple threads.		

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

output:

Thread 1: 1
Thread 1: 2
Thread 1: 3
Thread 1: 4
Thread 1: 5
Thread 2: 1
Thread 2: 2
Thread 2: 3
Thread 2: 4
Thread 2: 5
`,
        Practical28: `
28	Program to demonstrate synchronize keyword.		

class Counter {
    private int count = 0;

    // synchronized method to increment count
    public synchronized void increment() {
        count++;
    }

    public int getCount() {
        return count;
    }
}

class MyThread extends Thread {
    private Counter counter;

    public MyThread(Counter counter) {
        this.counter = counter;
    }

    public void run() {
        for (int i = 0; i < 1000; i++) {
            counter.increment();
        }
    }
}

public class SynchronizedExample {
    public static void main(String[] args) throws InterruptedException {
        Counter counter = new Counter();
        MyThread thread1 = new MyThread(counter);
        MyThread thread2 = new MyThread(counter);

        thread1.start();
        thread2.start();

        thread1.join(); // Wait for thread1 to finish
        thread2.join(); // Wait for thread2 to finish

        System.out.println("Count: " + counter.getCount());
    }
}


output:

Count: 2000
`,
        Practical29: `
29	Program to implement thread priority.		

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


output:

Thread-0: 1
Thread-1: 1
Thread-0: 2
Thread-1: 2
Thread-0: 3
Thread-1: 3
Thread-0: 4
Thread-1: 4
Thread-0: 5
Thread-1: 5
`,
        Practical30: `
30	Program to solve producer consumer problem using threads.		

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


output:

Producer produced: 0
Producer produced: 1
Consumer consumed: 0
Producer produced: 2
Consumer consumed: 1
Producer produced: 3
Consumer consumed: 2
Producer produced: 4
Consumer consumed: 3
Producer produced: 5
Consumer consumed: 4
Producer produced: 6
Consumer consumed: 5
Producer produced: 7
Consumer consumed: 6
Producer produced: 8
Consumer consumed: 7
Producer produced: 9
Consumer consumed: 8
Producer produced: 10
Consumer consumed: 9
`,
        Practical31: `
31	Program to demonstrate deadlock, using thread.		

public class DeadlockExample {
    static Object lock1 = new Object();
    static Object lock2 = new Object();

    public static void main(String[] args) {
        Thread thread1 = new Thread(() -> {
            synchronized (lock1) {
                System.out.println("Thread 1: Holding lock 1...");

                try {
                    Thread.sleep(100);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }

                System.out.println("Thread 1: Waiting for lock 2...");
                synchronized (lock2) {
                    System.out.println("Thread 1: Holding lock 1 and lock 2...");
                }
            }
        });

        Thread thread2 = new Thread(() -> {
            synchronized (lock2) {
                System.out.println("Thread 2: Holding lock 2...");

                try {
                    Thread.sleep(100);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }

                System.out.println("Thread 2: Waiting for lock 1...");
                synchronized (lock1) {
                    System.out.println("Thread 2: Holding lock 2 and lock 1...");
                }
            }
        });

        thread1.start();
        thread2.start();
    }
}
`,
        Practical32: `
32	Program to read characters from console using I/O classes.		

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


output:

Enter a character:
A
You entered: A
`,
        Practical33: `
33	Program to read lines of strings from console.		

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

output:

Enter a string:
Hello, World!
You entered: Hello, World!
`,
        Practical34: `
34	Program to copy the contents of one file to another file.		

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

output:

File copied successfully.
`,
        Practical35: `
35	Program to describe the Applet skeleton.		

import java.applet.Applet;
import java.awt.Graphics;

public class MyApplet extends Applet {
    public void paint(Graphics g) {
        g.drawString("Welcome to MyApplet!", 20, 20);
    }
}
`,
        Practical36: `
36	Program to display a moving banner in applet.		

import java.applet.Applet;
import java.awt.Graphics;
import java.util.Timer;
import java.util.TimerTask;

public class MovingBannerApplet extends Applet {
    String message = "Moving Banner";

    public void init() {
        Timer timer = new Timer();
        timer.schedule(new TimerTask() {
            int x = 10;

            public void run() {
                x += 10;
                repaint();
            }
        }, 0, 1000); // Delay 0 milliseconds, repeat every 1 second
    }

    public void paint(Graphics g) {
        g.drawString(message, getXCoordinate(), 50);
    }

    int getXCoordinate() {
        int x = Integer.parseInt(getParameter("x"));
        if (x == 0) {
            x = 10;
        }
        return x;
    }
}
`,
        Practical37: `
37	Program to demonstrate the properties of HTML tag and getDocumentBase and getCodeBase methods.		

<html>
<head>
    <title>Applet Example</title>
</head>
<body>
    <applet code="MyApplet.class" width="200" height="200">
        <param name="x" value="100">
    </applet>
</body>
</html>
`,
        Practical38: `
38	Program that demonstrate the mouse event handlers.	

import java.awt.*;
import java.awt.event.*;

public class MouseEventDemo extends Frame implements MouseListener, MouseMotionListener {
    Label lbl;

    MouseEventDemo() {
        addMouseListener(this);
        addMouseMotionListener(this);

        lbl = new Label();
        lbl.setBounds(20, 50, 100, 20);
        add(lbl);

        setSize(300, 300);
        setLayout(null);
        setVisible(true);
    }

    public void mouseClicked(MouseEvent e) {
        lbl.setText("Mouse Clicked");
    }

    public void mouseEntered(MouseEvent e) {
        lbl.setText("Mouse Entered");
    }

    public void mouseExited(MouseEvent e) {
        lbl.setText("Mouse Exited");
    }

    public void mousePressed(MouseEvent e) {
        lbl.setText("Mouse Pressed");
    }

    public void mouseReleased(MouseEvent e) {
        lbl.setText("Mouse Released");
    }

    public void mouseDragged(MouseEvent e) {
        lbl.setText("Mouse Dragged");
    }

    public void mouseMoved(MouseEvent e) {
        lbl.setText("Mouse Moved");
    }

    public static void main(String[] args) {
        new MouseEventDemo();
    }
}
`,
        Practical39: `
39 Program that demonstrate Arraylist

import java.util.ArrayList;

public class p39 {
    public static void main(String[] args) {
        // Create an ArrayList to store integers
        ArrayList<Integer> numbers = new ArrayList<>();

        // Adding elements to the ArrayList
        numbers.add(10);
        numbers.add(20);
        numbers.add(30);
        numbers.add(40);

        // Displaying the ArrayList
        System.out.println("ArrayList: " + numbers);

        // Accessing elements by index
        System.out.println("Element at index 1: " + numbers.get(1));

        // Iterating over the ArrayList using for-each loop
        System.out.print("Elements in the ArrayList: ");
        for (Integer num : numbers) {
            System.out.print(num + " ");
        }
        System.out.println();

        // Removing an element from the ArrayList
        numbers.remove(2);

        // Displaying the modified ArrayList
        System.out.println("ArrayList after removing element at index 2: " + numbers);

        // Checking if the ArrayList contains a specific element
        int searchElement = 20;
        if (numbers.contains(searchElement)) {
            System.out.println("ArrayList contains " + searchElement);
        } else {
            System.out.println("ArrayList does not contain " + searchElement);
        }

        // Getting the size of the ArrayList
        System.out.println("Size of ArrayList: " + numbers.size());

        // Clearing the ArrayList
        numbers.clear();

        // Checking if the ArrayList is empty
        if (numbers.isEmpty()) {
            System.out.println("ArrayList is empty");
        } else {
            System.out.println("ArrayList is not empty");
        }
    }
}


output:

ArrayList: [10, 20, 30, 40]
Element at index 1: 20
Elements in the ArrayList: 10 20 30 40 
ArrayList after removing element at index 2: [10, 20, 40]
ArrayList contains 20
Size of ArrayList: 3
ArrayList is empty
`,
        Practical40: `
40 Program that demonstrate linklist

import java.util.LinkedList;

public class p40 {
    public static void main(String[] args) {
        // Create a LinkedList to store strings
        LinkedList<String> names = new LinkedList<>();

        // Adding elements to the LinkedList
        names.add("Alice");
        names.add("Bob");
        names.add("Charlie");
        names.add("David");

        // Displaying the LinkedList
        System.out.println("LinkedList: " + names);

        // Adding an element at the beginning of the LinkedList
        names.addFirst("Eve");

        // Displaying the modified LinkedList
        System.out.println("LinkedList after adding element at the beginning: " + names);

        // Adding an element at the end of the LinkedList
        names.addLast("Frank");

        // Displaying the modified LinkedList
        System.out.println("LinkedList after adding element at the end: " + names);

        // Accessing elements by index
        System.out.println("Element at index 2: " + names.get(2));

        // Removing an element from the LinkedList
        names.remove(1);

        // Displaying the modified LinkedList
        System.out.println("LinkedList after removing element at index 1: " + names);

        // Checking if the LinkedList contains a specific element
        String searchName = "Alice";
        if (names.contains(searchName)) {
            System.out.println("LinkedList contains " + searchName);
        } else {
            System.out.println("LinkedList does not contain " + searchName);
        }

        // Getting the size of the LinkedList
        System.out.println("Size of LinkedList: " + names.size());

        // Clearing the LinkedList
        names.clear();

        // Checking if the LinkedList is empty
        if (names.isEmpty()) {
            System.out.println("LinkedList is empty");
        } else {
            System.out.println("LinkedList is not empty");
        }
    }
}

output:

LinkedList: [Alice, Bob, Charlie, David]
LinkedList after adding element at the beginning: [Eve, Alice, Bob, Charlie, David]
LinkedList after adding element at the end: [Eve, Alice, Bob, Charlie, David, Frank]
Element at index 2: Bob
LinkedList after removing element at index 1: [Eve, Bob, Charlie, David, Frank]
LinkedList contains Alice
Size of LinkedList: 5
LinkedList is empty
`,
        Practical41: `
41 Program that demonsarate treeset

import java.util.TreeSet;

public class p41 {
    public static void main(String[] args) {
        // Create a TreeSet to store integers
        TreeSet<Integer> numbers = new TreeSet<>();

        // Adding elements to the TreeSet
        numbers.add(10);
        numbers.add(5);
        numbers.add(20);
        numbers.add(15);

        // Displaying the TreeSet (in ascending order)
        System.out.println("TreeSet: " + numbers);

        // Adding duplicate elements
        numbers.add(10);
        numbers.add(5);

        // Displaying the modified TreeSet (duplicates are not allowed)
        System.out.println("TreeSet after adding duplicates: " + numbers);

        // Removing an element from the TreeSet
        numbers.remove(15);

        // Displaying the modified TreeSet
        System.out.println("TreeSet after removing element 15: " + numbers);

        // Checking if the TreeSet contains a specific element
        int searchNumber = 20;
        if (numbers.contains(searchNumber)) {
            System.out.println("TreeSet contains " + searchNumber);
        } else {
            System.out.println("TreeSet does not contain " + searchNumber);
        }

        // Getting the size of the TreeSet
        System.out.println("Size of TreeSet: " + numbers.size());

        // Clearing the TreeSet
        numbers.clear();

        // Checking if the TreeSet is empty
        if (numbers.isEmpty()) {
            System.out.println("TreeSet is empty");
        } else {
            System.out.println("TreeSet is not empty");
        }
    }
}

output:

TreeSet: [5, 10, 15, 20]
TreeSet after adding duplicates: [5, 10, 15, 20]
TreeSet after removing element 15: [5, 10, 20]
TreeSet contains 20
Size of TreeSet: 3
TreeSet is empty
`,
    },
    ITW: {
        Practical1: `
1. Design web pages for your college containing a description of the courses, departments, faculties, library etc. Use Href and list tags.

Index.html

    <!DOCTYPE html>
    <html>
    <head>
    <title>LDRP-ITR</title>
    </head>
    <body>
    <header>
        <h1>Welcome to LDRP-ITR</h1>
    </header>
    <nav>
        <ul>
        <li><a href="courses.html">Courses</a></li>
        <li><a href="departments.html">Departments</a></li>
        <li><a href="faculties.html">Faculties</a></li>
        <li><a href="library.html">Library</a></li>
        </ul>
    </nav>
    <footer>
        <p>&copy; 2023 LDRP-ITR. All rights reserved.</p>
    </footer>
    </body>
    </html>

library.html

    <!DOCTYPE html>
    <html>
    <head>
        <title>Library - LDRP-ITR</title>
    </head>
    <body>
        <header>
        <h1>Library</h1>
        </header>
        <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="courses.html">Courses</a></li>
            <li><a href="departments.html">Departments</a></li>
            <li><a href="faculties.html">Faculties</a></li>
        </ul>
        </nav>
        <section>
        <h2>About the Library</h2>
        <p>LDRP-ITR Library offers a wide range of resources... Our library stands as a beacon of intellectual exploration, housing a vast collection of books, journals, and digital resources that span across various engineering disciplines. Whether you're delving into classic engineering texts or exploring cutting-edge research, our library offers a quiet and inspiring space for both individual study and collaborative learning. With state-of-the-art facilities and dedicated librarians, we're committed to supporting your academic journey and fostering a culture of continuous learning and innovation. Explore, discover, and broaden your horizons at the heart of engineering knowledge</p>
        </section>
        <footer>
        <p>&copy; 2023 LDRP-ITR. All rights reserved.</p>
        </footer>
    </body>
    </html>

faculties.html

    <!DOCTYPE html>
    <html>
    <head>
    <title>Faculties - LDRP-ITR</title>
    </head>
    <body>
    <header>
        <h1>Faculties</h1>
    </header>
    <nav>
        <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="courses.html">Courses</a></li>
        <li><a href="departments.html">Departments</a></li>
        <li><a href="library.html">Library</a></li>
        </ul>
    </nav>
    <section>
        <h2>Faculties List</h2>
        <ul>
        <li>Faculty of Computer Engineering</li>
        <li>Faculty of Electrical Engineering</li>
        <li>Faculty of Information Technology</li>
        <li>Faculty of Civil Engineering</li>
        <li>Faculty of Mechanical Engineering</li>
        <!-- Add more faculties here -->
        </ul>
    </section>
    <footer>
        <p>&copy; LDRP-ITR. All rights reserved.</p>
    </footer>
    </body>
    </html>

departments.html

    <!DOCTYPE html>
    <html>
    <head>
    <title>Departments - LDRP-ITR</title>
    </head>
    <body>
    <header>
        <h1>Departments</h1>
    </header>
    <nav>
        <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="courses.html">Courses</a></li>
        <li><a href="faculties.html">Faculties</a></li>
        <li><a href="library.html">Library</a></li>
        </ul>
    </nav>
    <section>
        <h2>Departments List</h2>
        <ul>
        <li>Computer Engineering</li>
        <li>Electrical Engineering</li>
        <li>Information Technology</li>
        <li>Civil Engineering</li>
        <li>Mechanical Engineering</li>
        <!-- Add more departments here -->
        </ul>
    </section>
    <footer>
        <p>&copy; 2023 LDRP-ITR. All rights reserved.</p>
    </footer>
    </body>
    </html>

courses.html

        <!DOCTYPE html>
        <html>
        <head>
        <title>Courses - LDRP-ITR</title>
        </head>
        <body>
        <header>
            <h1>Courses Offered</h1>
        </header>
        <nav>
            <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="departments.html">Departments</a></li>
            <li><a href="faculties.html">Faculties</a></li>
            <li><a href="library.html">Library</a></li>
            </ul>
        </nav>
        <section>
            <h2>Course List</h2>
            <ul>
            <li>Computer Engineering</li>
            <li>Electrical Engineering</li>
            <li>Information Technology</li>
            <li>Civil Engineering</li>
            <li>Mechanical Engineering</li>
            <!-- Add more courses here -->
            </ul>
        </section>
        <footer>
            <p>&copy; LDRP-ITR. All rights reserved.</p>
        </footer>
        </body>
        </html>
`,
        Practical2: `
        2. Create your class timetable using table tag.

Index.html

  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" type="text/css" href="style.css">
      <title>TIME TABLE (G)</title>
  </head>
  <body>
      <div>
          <h1> <a href="https://www.ldrp.ac.in/"> LDRP-INSTITUTE OF TECHNOLOGY AND RESEARCH, GANDHINAGAR ACADEMIC YEAR 2023-24 </a></h1>
          <h2> <a href="https://www.ldrp.ac.in/scheme-computer-cbcs/">TABLE OF DIVISION SEM 3G B.E. (COMPUTER ENGINEERING) </a></h2>
      </div>
          <table>
              <tr class="fill">
                  <th>SLOT</th>
                  <th>MONDAY</th>
                  <th>TUESDAY</th>
                  <th>WEDNESDAY</th>
                  <th>THURSDAY</th>
                  <th>FRIDAY</th>
                  <th>SATURDAY</th>
              </tr>
              <tr class="empty">
                  <td></td>
                  <td colspan="6"></td>
              <tr>
                  <td class="fill">1</td>
                  <td class="DBMS">DBMS</td>
                  <td class="MATHS">MATHS</td>
                  <td class="MATHS">MATHS</td>
                  <td class="LAB" rowspan="2"> G1 DBMS <br> G2 DSA <br> G3 ITW </td>
                  <td class="ITW">ITW</td>
                  <td class="DSA">DSA</td>
              </tr>
              <tr>
                  <td class="fill">2</td>
                  <td class="DSA">DSA</td>
                  <td class="DE">DE</td>
                  <td class="DBMS">DBMS</td>
                  <td class="DBMS">DBMS</td>
                  <td class="DBMS">DBMS</td>
              </tr>
              <tr class="empty">
                  <td></td>
                  <td colspan="6"></td>
              </tr>
              <tr>
                  <td class="fill">3</td>
                  <td class="LAB" rowspan="2"> G1 DE <br> G2 DBMS <br> G3 ITW </td>
                  <td class="LAB" rowspan="2"> G1 DSA <br> G2 ITW <br> G3 DBMS </td>
                  <td class="LAB" rowspan="2"> G1 ITW <br> G2 DE  <br> G3 DBMS </td>
                  <td class="LAB" rowspan="2"> G1 DBMS <br> G2 ITW <br> G3 DE </td>
                  <td class="DSA">DSA</td>
                  <td class="LAB" rowspan="2"> G1 ITW <br> G2 DBMS <br> G3 DSA </td>
              </tr>
              <tr>
                  <td class="fill">4</td>
                  <td class="DE">DE</td>
              </tr>
              <tr class="empty">
                  <td></td>
                  <td colspan="6"></td>
              <tr>
                  <td class="fill">5</td>
                  <td class="DE">DE</td>
                  <td class="ITW">ITW</td>
                  <td class="DE">DE</td>
                  <td class="DSA">DSA</td>
                  <td class="MATHS">MATHS</td>
                  <td class="emptyslot" rowspan="2"></td>    
              </tr>
              <tr>
                  <td class="fill">6</td>
                  <td class="MATHS">MATHS</td>
                  <td class="DBMS">DBMS</td>
                  <td class="DSA">DSA</td>
                  <td class="ITW">ITW</td>
                  <td class="DE">DE</td>
              </tr>
          </table>
      <div>
          
      </div>
  </body>
  </html>
`,
        Practical3: `
        3. Create user Student feedback form (use textbox, text area, checkbox, radio button, select box etc.)
feedbackform.html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>student Feedback form</title>
  </head>
  <body>
      <h1>Student Feedback Form</h1>
      <form action="" method="post">
          <h2>Persional Information</h2>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required><br>
  
          <label for="student_id">Student ID:</label>
          <input type="text" id="student_id" name="student_id" required><br>
  
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required><br>
  
          <label for="phone">Phone Number:</label>
          <input type="text" id="phone" name="phone" required><br>
  
          <h2>Course Information</h2>
          <label for="course_name">Course Name:</label> <br>
          <input type="radio" id="rating1" name="overall_experience" value="1" required>
          <label for="rating1">Computer Engineering</label><br>
  
          <input type="radio" id="rating2" name="overall_experience" value="2">
          <label for="rating2">Information Technology</label><br>
  
          <input type="radio" id="rating3" name="overall_experience" value="3">
          <label for="rating3">Mechanical Engineering</label><br>
  
          <input type="radio" id="rating4" name="overall_experience" value="4">
          <label for="rating4">Civil Engineering</label><br>
  
          <input type="radio" id="rating5" name="overall_experience" value="5">
          <label for="rating5">Electronics and Communication Engineering</label><br><br>
  
          <label for="instructor_name">Instructor's Name:</label>
          <input type="text" id="instructor_name" name="instructor_name" required><br>
  
          <label for="semester">Semester/Year:</label>
          <input type="text" id="semester" name="semester" required><br>
  
          <h2>1. Overall Experience:</h2>
          <label for="checkbox1"> 1 </label>
          <input type="checkbox" id="checkbox1" name="checkbox1" value="checked">
          <label for="checkbox1"> 2 </label>
          <input type="checkbox" id="checkbox2" name="checkbox2" value="checked">
          <label for="checkbox1"> 3 </label>
          <input type="checkbox" id="checkbox3" name="checkbox3" value="checked">
          <label for="checkbox1"> 4 </label>
          <input type="checkbox" id="checkbox4" name="checkbox4" value="checked">
          <label for="checkbox1"> 5 </label>
          <input type="checkbox" id="checkbox5" name="checkbox5" value="checked">
  
          <h2>2. Additional Comments:</h2>
          <textarea id="additional_comments" name="additional_comments" rows="4" cols="50"></textarea>
          
          <h2>3. How did you find about this course?</h2>
          <select id="how_found" name="how_found">
              <option value="college_website">College Website</option>
              <option value="instructor_recommendation">Instructor Recommendation</option>
              <option value="friends_classmates">Friends or Classmates</option>
              <option value="social_media">Social Media</option>
              <option value="other">Other</option>
          </select><br>
  
          <input type="submit" value="Submit">
      </form>
  </body>
  </html>

Form.html

  <!DOCTYPE html>
  <html>
  <head>
      <title>Student Feedback Form</title>
  </head>
  <body>
      <h1>Student Feedback Form</h1>
      <form action="submit_feedback.php" method="post">
          <h2>Personal Information:</h2>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required><br>
          
          <label for="student_id">Student ID:</label>
          <input type="text" id="student_id" name="student_id" required><br>
          
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required><br>
          
          <label for="phone">Phone Number:</label>
          <input type="text" id="phone" name="phone" required><br>
          
          <h2>Course Information:</h2>
          <label for="course_name">Course Name:</label>
          <input type="text" id="course_name" name="course_name" required><br>
          
          <label for="instructor_name">Instructor's Name:</label>
          <input type="text" id="instructor_name" name="instructor_name" required><br>
          
          <label for="semester">Semester/Year:</label>
          <input type="text" id="semester" name="semester" required><br>
          
          <h2>1. Overall Experience:</h2>
          <input type="radio" id="rating1" name="overall_experience" value="1" required>
          <label for="rating1">1</label>
          
          <input type="radio" id="rating2" name="overall_experience" value="2">
          <label for="rating2">2</label>
          
          <input type="radio" id="rating3" name="overall_experience" value="3">
          <label for="rating3">3</label>
          
          <input type="radio" id="rating4" name="overall_experience" value="4">
          <label for="rating4">4</label>
          
          <input type="radio" id="rating5" name="overall_experience" value="5">
          <label for="rating5">5</label><br>
          
          <!-- Continue adding the remaining form elements similar to the above examples -->
  
          <h2>12. Additional Comments:</h2>
          <textarea id="additional_comments" name="additional_comments" rows="4" cols="50"></textarea><br>
          
          <h2>13. How did you find out about this course?</h2>
          <select id="how_found" name="how_found">
              <option value="college_website">College website</option>
              <option value="instructor_recommendation">Instructor recommendation</option>
              <option value="friends_classmates">Friends or classmates</option>
              <option value="social_media">Social media</option>
              <option value="other">Other</option>
          </select><br>
          
          <input type="submit" value="Submit">
      </form>
  </body>
  <style>
      body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 20px;
          background-color: #f4f4f4;
      }
      h1 {
          text-align: center;
      }
      form {
          background-color: #ffffff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      }
      label {
          font-weight: bold;
      }
      input[type="text"],
      input[type="email"],
      textarea,
      select {
          width: 100%;
          padding: 10px;
          margin-bottom: 15px;
          border: 1px solid #ccc;
          border-radius: 5px;
      }
      input[type="radio"] {
          margin-right: 5px;
      }
      textarea {
          height: 100px;
      }
      select {
          height: 40px;
      }
      input[type="submit"] {
          background-color: #007bff;
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease-in-out;
      }
      input[type="submit"]:hover {
          background-color: #0056b3;
      }
  </style>
  </html>
`,
        Practical4: `
        4. Create a web page using frame. Divide the page into two parts with Navigation links on left hand side of page (width=20%) and content page on right hand side of page (width = 80%). On clicking the navigation Links corresponding content must be shown on the right hand side.
index.html
    <!DOCTYPE html>
    <html>
    <head>
        <title>Frame Example</title>
        <style>
            body {
                margin: 0;
                padding: 0;
            }
        </style>
    </head>
    <frameset cols="20%, 80%">
        <frame src="navigation.html" name="navigation">
        <frame src="content.html" name="content">
    </frameset>
    </html>

content.html

    <!DOCTYPE html>
    <html>
    <head>
        <title>Content</title>
    </head>
    <body>
        <h2>Content Area</h2>
        <p>This is the default content area. Click on a navigation link to see the corresponding content.</p>
    </body>
    </html>

navigation.html

    <!DOCTYPE html>
    <html>
    <head>
        <title>Navigation</title>
    </head>
    <body>
        <h2>Navigation Links</h2>
        <ul>
            <li><a href="page1.html" target="content">Page 1</a></li>
            <li><a href="page2.html" target="content">Page 2</a></li>
            <li><a href="page3.html" target="content">Page 3</a></li>
        </ul>
    </body>
    </html>

page1.html

    <!DOCTYPE html>
    <html>
    <head>
        <title>Page 1</title>
    </head>
    <body>
        <h2>Page 1 Content</h2>
        <p>This is the content for Page 1.</p>
    </body>
    </html>

page2.html

    <!DOCTYPE html>
    <html>
    <head>
        <title>Page 2</title>
    </head>
    <body>
        <h2>Page 2 Content</h2>
        <p>This is the content for Page 2.</p>
    </body>
    </html>

page3.html

    <!DOCTYPE html>
    <html>
    <head>
        <title>Page 3</title>
    </head>
    <body>
        <h2>Page 3 Content</h2>
        <p>This is the content for Page 3.</p>
    </body>
    </html>
`,
        Practical5: `
        5. Create your resume using HTML tags also experiment with colors, text, link , size and also other tags you studied.
resume.html

  <!DOCTYPE html>
  <html>
  <head>
      <title>My Resume</title>
  </head>
  <body>
      <div class="header">
          <h1>Shubham Suthar</h1>
          <p>Front-End Developer</p>
          <p><a href="mailto:exe@example.com">exe@example.com</a> | <a href="tel:+1234567890">123-456-7890</a></p>
      </div>
      
      <div class="section">
          <h2>Summary</h2>
          <p>Passionate front-end developer with 5 years of experience in creating user-friendly and responsive web applications.</p>
      </div>
      
      <div class="section">
          <h2>Skills</h2>
          <ul>
              <li>HTML5, CSS3, JavaScript</li>
              <li>React.js, Vue.js</li>
              <li>Responsive Web Design</li>
              <li>Version Control (Git)</li>
          </ul>
      </div>
      
      <div class="section">
          <h2>Experience</h2>
          <p><strong>Web Developer</strong>, XYZ Tech Solutions, 2026 - Present</p>
          <p>Developed and maintained client websites, collaborated with design team to implement responsive layouts.</p>
          
          <p><strong>Front-End Developer</strong>, ABC Web Agency, 2027 - 2029</p>
          <p>Worked on various projects, optimized website performance, and created interactive UI components.</p>
      </div>
      
      <div class="section">
          <h2>Education</h2>
          <p><strong>Bachelor of Engineering in Computer Engineering</strong>, KSV University, 2026</p>
      </div>
      
      <div class="section">
          <h2>Portfolio</h2>
          <p>Check out my portfolio at <a href="https://www.example.com/portfolio">www.example.com/portfolio</a></p>
      </div>
  </body>
  </html>
`,
        Practical6: `
        6. Design a web page of your home town with an attractive background color, text color, an Image, font etc. (use internal CSS).</div>
Index.html

  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to My Hometown</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      background-color: #f2f2f2;
      color: #333;
    }
    
    header {
      background-color: #3498db;
      color: #fff;
      padding: 10px 0;
      text-align: center;
    }

    .town-image {
      margin-right: 100px;
      margin: 5px;
      width: auto;
      max-height: 200px;
      object-fit: cover;
    }

    .container {
      max-width: 800px;
      margin: 20px auto;
      padding: 20px;
      background-color: #fff;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
    }

    footer {
      text-align: center;
      padding: 10px;
      background-color: #3498db;
      color: #fff;
    }
  </style>
  </head>
  <body>
    <header>
      <h1>Welcome to My Hometown</h1>
      <p>Discover the Beauty and Charm</p>
    </header>

    <div class="container">
      <h2>General information</h2>
      <ul>
          <li>Geographic Location : 23.18°N 72.2°E.</li>
          <li>Crops : Sorghum, Cotton, Wheat, Rayado, Cumin seed etc.</li>
          <li>Domestic Animals : Cows, buffaloes, camels, donkeys, goats etc.</li>
          <li>Minerals : Oil & Natural Gas</li>
          <li>Roads : State Highways, Panchayat Roads etc.</li>
          <li>Industries : Cotton processing, Cotton seed processing, Cotton oil Refineries, Ceramic industry and many more.Big companies like Somany Tiles, Cera Sanitary, Johnson Controls, Many other companies are located here</li>
      </ul>
      <h2>About Our Town</h2>
      <p>Kadi is one of the nine taluks of Mehsana district of Gujarat state. Kadi is also an important city of Gujarat state from industrial point of view.
          The ancient city of Kadi which was earlier known as "Killekdi" came to be known as "Kadi Province" under the dominance of the Gaekwad government from the 17th century. It is known as "Kadi" after the merger of Vadodara state with India.
          Being at the forefront of cotton production, ginning industry and the production of cottonseed oil, the "Kadi" city, a partner in continuous development, is rich in mineral oil and petroleum gases.
          A link adorned with white and black gold truly lives up to the adage "Kadi - gold rod".</p>

      <h2>Attractions</h2>
      <ul>
        <li>Local Park</li>
        <li>Historical Fort</li>
        <li>Tourist Points: Meladi mata temple, Malhavrav Fort, Umiya mata temple, Narmada Canal diversion, Municipal Garden, Malji Bhagat ni Vav, Oghadnath Mahadev temple, Dasiya pir dargah, maneksha bawa dargah, Balapir bava ki dargah, Thol Lake is there which is 22 km away from kadi, known as a bird sanctuary Thol Lake. Many out of countries birds used to come in winter at thol lake</li>
      </li>
      </ul>

      <h2>Upcoming Events</h2>
      <p>Stay tuned for exciting events happening in our town!</p>
    </div>

    <img class="town-image" src="oldmahel.png" alt="Hometown View">
    <img class="town-image" src="mahel-.png" alt="Hometown View">
    <img class="town-image" src="mahel-T.V.png" alt="Hometown View">
    <img class="town-image" src="malharraav.png" alt="Hometown View">
    <img class="town-image" src="townhall.png" alt="Hometown View">
    <img class="town-image" src="om.png" alt="Hometown View">

    <footer>
      <p>&copy; 2023 My Hometown. All rights reserved.</p>
    </footer>
  </body>
  </html>
`,
        Practical7: `
        7. Use Inline CSS to format your resume that you created.

resume.html

  <!DOCTYPE html>
  <html>
  <head>
      <title>My Resume</title>
  </head>
  <body style="font-family: Arial, sans-serif; background-color: #f7f7f7; margin: 0; padding: 20px;">
      <div style="text-align: center; margin-bottom: 20px;">
          <h1 style="color: #333; font-size: 28px; margin-bottom: 5px;">Shubham Suthar</h1>
          <p style="margin: 5px 0; font-size: 16px; line-height: 1.5;">Full-stack Developer</p>
          <p style="margin: 5px 0; font-size: 16px; line-height: 1.5;"><a style="color: #007bff; text-decoration: none;" href="mailto:exe@example.com">exe@example.com</a> | <a style="color: #007bff; text-decoration: none;" href="tel:+1234567890">123-456-7890</a></p>
      </div>
      
      <div style="margin-bottom: 40px; border-left: 4px solid #007bff; padding-left: 15px;">
          <h2 style="color: #555; font-size: 24px; margin-bottom: 10px;">Summary</h2>
          <p style="margin: 5px 0; font-size: 16px; line-height: 1.5;">Passionate front-end developer with 5 years of experience in creating user-friendly and responsive web applications.</p>
      </div>
      
      <div style="margin-bottom: 40px; border-left: 4px solid #007bff; padding-left: 15px;">
          <h2 style="color: #555; font-size: 24px; margin-bottom: 10px;">Skills</h2>
          <ul style="list-style: disc; margin-left: 10px; font-size: 16px; line-height: 1.5;">
              <li>HTML5, CSS3, JavaScript</li>
              <li>React.js, Vue.js</li>
              <li>Responsive Web Design</li>
              <li>Version Control (Git)</li>
          </ul>
      </div>
      
      <div style="margin-bottom: 40px; border-left: 4px solid #007bff; padding-left: 15px;">
          <h2 style="color: #555; font-size: 24px; margin-bottom: 10px;">Experience</h2>
          <p style="margin: 5px 0; font-size: 16px; line-height: 1.5;"><strong>Web Developer</strong>, XYZ Tech Solutions, 2026 - Present</p>
          <p style="margin: 5px 0; font-size: 16px; line-height: 1.5;">Developed and maintained client websites, collaborated with design team to implement responsive layouts.</p>
          
          <p style="margin: 5px 0; font-size: 16px; line-height: 1.5;"><strong>Front-End Developer</strong>, ABC Web Agency, 2027 - 2029</p>
          <p style="margin: 5px 0; font-size: 16px; line-height: 1.5;">Worked on various projects, optimized website performance, and created interactive UI components.</p>
      </div>
      
      <div style="margin-bottom: 40px; border-left: 4px solid #007bff; padding-left: 15px;">
          <h2 style="color: #555; font-size: 24px; margin-bottom: 10px;">Education</h2>
          <p style="margin: 5px 0; font-size: 16px; line-height: 1.5;"><strong>Bachelor of Engineering in Computer Engineering</strong>, KSV University, 2026</p>
      </div>
      
      <div style="margin-bottom: 40px; border-left: 4px solid #007bff; padding-left: 15px;">
          <h2 style="color: #555; font-size: 24px; margin-bottom: 10px;">Portfolio</h2>
          <p style="margin: 5px 0; font-size: 16px; line-height: 1.5;">Check out my portfolio at <a style="color: #007bff; text-decoration: none;" href="https://www.example.com/portfolio">www.example.com/portfolio</a></p>
      </div>
  </body>
  </html>
`,
        Practical8: `
        8. Use External CSS to format your class timetable as you created
Index.html

  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" type="text/css" href="style.css">
      <title>TIME TABLE (G)</title>
  </head>
  <body>
      <div>
          <h1> <a href="https://www.ldrp.ac.in/"> LDRP-INSTITUTE OF TECHNOLOGY AND RESEARCH, GANDHINAGAR ACADEMIC YEAR 2023-24 </a></h1>
          <h2> <a href="https://www.ldrp.ac.in/scheme-computer-cbcs/">TIME TABLE OF DIVISION SEM 3G B.E. (COMPUTER ENGINEERING) </a></h2>
      </div>
          <table>
              <tr class="fill">
                  <th>SLOT</th>
                  <th>MONDAY</th>
                  <th>TUESDAY</th>
                  <th>WEDNESDAY</th>
                  <th>THURSDAY</th>
                  <th>FRIDAY</th>
                  <th>SATURDAY</th>
              </tr>
              <tr class="empty">
                  <td></td>
                  <td colspan="6"></td>
              <tr>
                  <td class="fill">1</td>
                  <td class="DBMS">DBMS</td>
                  <td class="MATHS">MATHS</td>
                  <td class="MATHS">MATHS</td>
                  <td class="LAB" rowspan="2"> G1 DBMS <br> G2 DSA <br> G3 ITW </td>
                  <td class="ITW">ITW</td>
                  <td class="DSA">DSA</td>
              </tr>
              <tr>
                  <td class="fill">2</td>
                  <td class="DSA">DSA</td>
                  <td class="DE">DE</td>
                  <td class="DBMS">DBMS</td>
                  <td class="DBMS">DBMS</td>
                  <td class="DBMS">DBMS</td>
              </tr>
              <tr class="empty">
                  <td></td>
                  <td colspan="6"></td>
              </tr>
              <tr>
                  <td class="fill">3</td>
                  <td class="LAB" rowspan="2"> G1 DE <br> G2 DBMS <br> G3 ITW </td>
                  <td class="LAB" rowspan="2"> G1 DSA <br> G2 ITW <br> G3 DBMS </td>
                  <td class="LAB" rowspan="2"> G1 ITW <br> G2 DE  <br> G3 DBMS </td>
                  <td class="LAB" rowspan="2"> G1 DBMS <br> G2 ITW <br> G3 DE </td>
                  <td class="DSA">DSA</td>
                  <td class="LAB" rowspan="2"> G1 ITW <br> G2 DBMS <br> G3 DSA </td>
              </tr>
              <tr>
                  <td class="fill">4</td>
                  <td class="DE">DE</td>
              </tr>
              <tr class="empty">
                  <td></td>
                  <td colspan="6"></td>
              <tr>
                  <td class="fill">5</td>
                  <td class="DE">DE</td>
                  <td class="ITW">ITW</td>
                  <td class="DE">DE</td>
                  <td class="DSA">DSA</td>
                  <td class="MATHS">MATHS</td>
                  <td class="emptyslot" rowspan="2"></td>    
              </tr>
              <tr>
                  <td class="fill">6</td>
                  <td class="MATHS">MATHS</td>
                  <td class="DBMS">DBMS</td>
                  <td class="DSA">DSA</td>
                  <td class="ITW">ITW</td>
                  <td class="DE">DE</td>
              </tr>
          </table>
      <div>
          
      </div>
  </body>
  </html>

style.css

  body{
    background-color: #d4d4d4;
}

th{
    color: #efefef;
    border-style: solid;
}

td{
    color : #efefef;
    width : 100px ;
    border-style: double;
}

table {
border-collapse: collapse;
width: 100%;
}

h1{
    width: auto;
    text-align: center;
    font-family: 'Dosis', sans-serif;
    border: 2px solid red;
    border-radius: 5px;
    -webkit-text-fill-color: white;
    background-color: orangered;
    border-style: solid;
}

a{
    text-decoration: none;
}

h2{
    text-align: center;
    font-family: 'Dosis', sans-serif;
    font-family: 'Oswasld', sans-serif;
}

table{
    -webkit-text-fill-color: white;
    text-align: center;
    font-family: 'Handle', cursive;
}

.fill{
    background-color: #1c1f33; height: 75px;
}

.empty{
    height: 8px;
}
.DSA{
    background-color: orange;
}

.ITW{
    background-color: #dd3939;
}

.DBMS{
    background-color: #215b68;
}

.MATHS{
    background-color: #59d659;
}

.DE{
    background-color: #91b4bc;
}

.LAB{
    background-color: #e63126;
}

.emptyslot{
    background-color: #1ac96c;
}
`,
        Practical9: `
        9. Use External, Internal, and Inline CSS to format college web page that you created
index.html
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="forcourses.css">
    <title>LDRP-ITR</title>
  </head>
  <body>
    <header>
      <h1>Welcome to LDRP-ITR</h1>
    </header>
    <nav>
      <ul>
        <li><a href="courses.html">Courses</a></li>
        <li><a href="departments.html">Departments</a></li>
        <li><a href="faculties.html">Faculties</a></li>
        <li><a href="library.html">Library</a></li>
      </ul>
    </nav>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <footer>
      <p>&copy; 2023 LDRP-ITR. All rights reserved.</p>
    </footer>
  </body>
  </html>

courses.html

  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="forcourses.css">
    <title>Courses - LDRP-ITR</title> 
  </head>
  <body>
    <header>
      <h1>Courses Offered</h1>
    </header>
    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="departments.html">Departments</a></li>
        <li><a href="faculties.html">Faculties</a></li>
        <li><a href="library.html">Library</a></li>
      </ul>
    </nav>
    <section>
      <h2>Course List</h2>
      <ul>
        <li>Computer Engineering</li>
        <li>Electrical Engineering</li>
        <li>Information Technology</li>
        <li>Civil Engineering</li>
        <li>Mechanical Engineering</li>
        <!-- Add more courses here -->
      </ul>
    </section>
    <footer>
      <p>&copy; LDRP-ITR. All rights reserved.</p>
    </footer>
  </body>
  </html>

department.html

  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="forcourses.css">
    <title>Departments - LDRP-ITR</title>
  </head>
  <body>
    <header>
      <h1>Departments</h1>
    </header>
    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="courses.html">Courses</a></li>
        <li><a href="faculties.html">Faculties</a></li>
        <li><a href="library.html">Library</a></li>
      </ul>
    </nav>
    <section>
      <h2>Departments List</h2>
      <ul>
        <li>Computer Engineering</li>
        <li>Electrical Engineering</li>
        <li>Information Technology</li>
        <li>Civil Engineering</li>
        <li>Mechanical Engineering</li>
        <!-- Add more departments here -->
      </ul>
    </section>
    <footer>
      <p>&copy; 2023 LDRP-ITR. All rights reserved.</p>
    </footer>
  </body>
  </html>

faculties.html

  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="forcourses.css">
    <title>Faculties - LDRP-ITR</title>
  </head>
  <body>
    <header>
      <h1>Faculties</h1>
    </header>
    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="courses.html">Courses</a></li>
        <li><a href="departments.html">Departments</a></li>
        <li><a href="library.html">Library</a></li>
      </ul>
    </nav>
    <section>
      <h2>Faculties List</h2>
      <ul>
        <li>Faculty of Computer Engineering</li>
        <li>Faculty of Electrical Engineering</li>
        <li>Faculty of Information Technology</li>
        <li>Faculty of Civil Engineering</li>
        <li>Faculty of Mechanical Engineering</li>
        <!-- Add more faculties here -->
      </ul>
    </section>
    <footer>
      <p>&copy; LDRP-ITR. All rights reserved.</p>
    </footer>
  </body>
  </html>
  
library.html

  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="forcourses.css">
    <title>Library - LDRP-ITR</title>
  </head>
  <body>
    <header>
      <h1>Library</h1>
    </header>
    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="courses.html">Courses</a></li>
        <li><a href="departments.html">Departments</a></li>
        <li><a href="faculties.html">Faculties</a></li>
      </ul>
    </nav>
    <section>
      <h2>About the Library</h2>
      <p class="library-description">LDRP-ITR Library offers a wide range of resources... Our library stands as a beacon of intellectual exploration, housing a vast collection of books, journals, and digital resources that span across various engineering disciplines. Whether you're delving into classic engineering texts or exploring cutting-edge research, our library offers a quiet and inspiring space for both individual study and collaborative learning. With state-of-the-art facilities and dedicated librarians, we're committed to supporting your academic journey and fostering a culture of continuous learning and innovation. Explore, discover, and broaden your horizons at the heart of engineering knowledge</p>
    </section>
    <footer>
      <p>&copy; 2023 LDRP-ITR. All rights reserved.</p>
    </footer>
  </body>
  </html>

forcourses.css

  body {
    font-family: Arial, sans-serif;
    margin: 0px;
    padding: 0px;
}

header, section, footer {
    margin: 20px;
    padding: 20px;
    border: 1px solid #ddd;
}

nav {
    margin: 20px;
    border: 1px solid #ddd;
}

ul {
    list-style-type: none;
    padding: 0px;
}

ul li {
    margin-bottom: 10px;
}

nav ul {
    display: flex;
    justify-content: space-around;
}

nav a {
    text-decoration: none;
    color: #333;
    transition: color 0.3;
}

nav a:hover {
    color: #007BFF;
}

header h1 {
    margin: 0px;
}

section h2 {
    font-size: 24px;
}

footer {
    text-align: center;
    background-color: #f5f5f5;
}

.library-description {
    font-style: italic;
}

nav ul li:hover {
    background-color: #f4511e;
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  opacity: 0.6;
  transition: 0.3s;
}

nav li {
    text-align: center;
    width: 250px;
    height: 20px;
    padding: 20px;
}
`,
        Practical11: `
        11. Develop a JavaScript to display today’s date.
date.html

  <!DOCTYPE html>
  <html>
  <head>
    <title>Today's Date</title>
  </head>
  <body>
    <h1 style="text-align: center;">Today's Date</h1>
    <p style="text-align: center;" id="date"></p>

    <script>
      // Get the current date
      const currentDate = new Date();

      // Extract individual date components
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1;
      const day = currentDate.getDate();

      // Display the date on the webpage
      const dateElement = document.getElementById("date");
      dateElement.textContent = "Today is " + day + "/" + month + "/" + year;
    </script>
  </body>
  </html>
`,
        Practical12: `
        12. Develop simple calculator for addition, subtraction, multiplication and division operation using JavaScript
index.html

  <!DOCTYPE html>
  <html>
  <head>
      <title>Simple Calculator</title>
  </head>
  <body>
      <h1>Calculator</h1>
      <form name="calculator">
          <input type="text" name="display" id="display" readonly>
          <br>
          <button class="num" type="button" onclick="addToDisplay('7')">7</button>
          <button class="num" type="button" onclick="addToDisplay('8')">8</button>
          <button class="num" type="button" onclick="addToDisplay('9')">9</button>
          <button class="C" type="button" onclick="clearDisplay()">C</button>
          <br>
          <button class="num" type="button" onclick="addToDisplay('4')">4</button>
          <button class="num" type="button" onclick="addToDisplay('5')">5</button>
          <button class="num" type="button" onclick="addToDisplay('6')">6</button>
          <button class="sign" type="button" onclick="addToDisplay('+')">+</button>
          <br>
          <button class="num" type="button" onclick="addToDisplay('1')">1</button>
          <button class="num" type="button" onclick="addToDisplay('2')">2</button>
          <button class="num" type="button" onclick="addToDisplay('3')">3</button>
          <button class="sign" type="button" onclick="addToDisplay('-')">-</button>
          <br>
          <button class="num" type="button" onclick="addToDisplay('0')">0</button>
          <button class="sign" type="button" onclick="addToDisplay('*')">x</button>
          <button class="sign" type="button" onclick="addToDisplay('/')">/</button>
          <button class="sign" type="button" onclick="calculate()">=</button>
      </form>

      <script>
          function addToDisplay(value) {
              document.calculator.display.value += value;
          }

          function clearDisplay() {
              document.calculator.display.value = "";
          }

          function calculate() {
              try {
                  document.calculator.display.value = eval(document.calculator.display.value);
              } catch (error) {
                  document.calculator.display.value = "Error";
              }
          }
      </script>
  </body>
  <style>
      body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          text-align: center;
      }

      h1 {
          color: #333;
      }
      
      form {
          background-color: #0f0b01;
          border-radius: 5px;
          padding: 20px;
          display: inline-block;
          width: 255px;
      }

      input[type="text"] {
          width: 100%;
          height: 40px;
          font-size: 24px;
          text-align: right;
          margin-bottom: 10px;
          padding: 0px;
          color: white;
          background-color: #0f0b01;
      }

      .sign {
          width: 50px;
          height: 50px;
          font-size: 24px;
          margin: 5px;
          cursor: pointer;
          background-color: #fcb603;
          color: #fff;
          border: none;
          border-radius: 5px;
      }

      .num {
          width: 50px;
          height: 50px;
          font-size: 24px;
          margin: 5px;
          cursor: pointer;
          background-color: #e3d9bf;
          color: #fff;
          border: none;
          border-radius: 5px;
      }

      .C {
          width: 50px;
          height: 50px;
          font-size: 24px;
          margin: 5px;
          cursor: pointer;
          background-color: green;
          color: #fff;
          border: none;
          border-radius: 5px;
      }


      button:hover {
          background-color: #45a049;
      }
  </style>
  </html>
`,
        Practical13: `
        13. Create HTML Page with JavaScript which takes Integer number as input and tells whether the number is ODD or EVEN
Index.html

<!DOCTYPE html>
<html>
<head>
    <title>Odd or Even Checker</title>
</head>
<body>
    <h1>Odd or Even Checker</h1>
    <label for="numberInput">Enter an integer:</label>
    <input type="number" id="numberInput">
    <button onclick="checkOddOrEven()">Check</button>
    <p id="result"></p>

    <script>
        function checkOddOrEven() {
            var number = document.getElementById("numberInput").value;
            if (number !== "" && !isNaN(number) && Number.isInteger(Number(number))) {

                if (number % 2 === 0) {
                    document.getElementById("result").innerHTML = number + " is EVEN.";
                } else {
                    document.getElementById("result").innerHTML = number + " is ODD.";
                }
            } else {
                document.getElementById("result").innerHTML = "Please enter a valid integer.";
            }
        }
    </script>
</body>
<style>
    body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        text-align: center;
        margin: 0;
        padding: 0;
    }

    h1 {
        color: #333;
    }

    label {
        font-size: 18px;
    }

    input[type="number"] {
        width: 200px;
        height: 40px;
        font-size: 18px;
        text-align: center;
        margin: 10px;
        border: 2px solid #ccc;
        border-radius: 5px;
    }

    button {
        width: 120px;
        height: 40px;
        font-size: 18px;
        cursor: pointer;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 5px;
    }

    button:hover {
        background-color: #0056b3;
    }

    #result {
        font-size: 24px;
        margin: 20px;
    }

`,
        Practical14: `
        14. Create HTML Page that contains form with fields Name, Email, Mobile No, Gender, Favourite Color and a button. Also write a JavaScript code to combine and display the information in textbox when the button is clicked.
Index.html
  <!DOCTYPE html>
  <html>
  <head>
      <title>Form Example</title>
  </head>
  <body>
      <h1>User Information Form</h1>
      <form id="userForm">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" maxlength="30" required>

          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required>

          <label for="mobile">Mobile No:</label>
          <input type="tel" id="mobile" name="mobile" maxlength="10" required><br><br>

          <label for="gender">Gender:</label>
          <input type="radio" id="male" name="gender" value="Male">
          <label for="male">Male</label>
          <input type="radio" id="female" name="gender" value="Female">
          <label for="female">Female</label><br><br>

          <label for="color">Favorite Color:</label>
          <select id="color" name="color">
              <option value="Red">--Select Color--</option>
              <option value="Red">Red</option>
              <option value="Green">Green</option>
              <option value="Blue">Blue</option>
              <option value="Yellow">Yellow</option>
          </select><br><br>

          <button type="button" onclick="combineInfo()">Combine Information</button>
      </form>

      <h2>Combined Information:</h2>
      <textarea id="combinedInfo" rows="4" cols="50" readonly></textarea>

      <script>
          function isValidEmail(email) {
              const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
              return emailPattern.test(email);
          }

          function combineInfo() {
              const name = document.getElementById("name").value;
              const email = document.getElementById("email").value;
              const mobile = document.getElementById("mobile").value;
              const gender = document.querySelector('input[name="gender"]:checked');
              const color = document.getElementById("color").value;

              if (name && isValidEmail(email) && mobile && gender && color) {
                  const genderValue = gender.value;
                  const combinedInfo = \`Name: \${name}\\nEmail: \${email}\\nMobile No: \${mobile}\\nGender: \${genderValue}\\nFavorite Color: \${color}\`;
                  document.getElementById("combinedInfo").value = combinedInfo;
              } else {
                  alert("Please fill in all fields correctly.");
              }
          }
      </script>
  </body>
  <style>
      body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          margin: 0;
          padding: 0;
      }

      h1 {
          color: #333;
          text-align: center;
      }

      form {
          background-color: #fff;
          border-radius: 5px;
          padding: 20px;
          width: 400px;
          margin: 0 auto;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
      }

      label {
          font-size: 20px;
      }

      input[type="text"],
      input[type="email"],
      input[type="tel"],
      select,
      button {
          width: 100%;
          height: 30px;
          font-size: 16px;
          margin: 10px 0;
          padding: 1px;
          border: 2px solid #ccc;
          border-radius: 5px;
      }

      button {
          width: 50%;
          margin: 5px 5px 5px 100px;
          padding: 0px !important;
      }

      input[type="radio"] {
          margin-right: 5px;
      }

      button {
          background-color: #007bff;
          color: #fff;
          border: none;
          cursor: pointer;
      }

      button:hover {
          background-color: #0056b3;
      }

      h2 {
          margin-top: 20px;
          color: #333;
          text-align: center;
      }

      textarea {
          width: 100%;
          height: 100px;
          font-size: 16px;
          margin-top: 10px;
          padding: 5px;
          border: 2px solid #ccc;
          border-radius: 5px;
          resize: none;
      }
  </style>
  </html>
`,
        Practical15: `
        15. Write a JavaScript code to rotate images after a specific time interval
Index.html

  <!DOCTYPE html>
  <html>
  <head>
      <title>Image Rotation</title>
      <style>
          img {
              max-width: 400px;
          }
      </style>
  </head>
  <body>
      <h1>Image Rotation</h1>
      <img id="image" src="image1.png" alt="Image 1">
      <img id="dogecoin" src="dogecoin.png" alt="Image 2">

      <script>
        var myImage = document.getElementById("image");
        var ImageArray = ["image1.png", "image3.png", "image4.png", "image5.png"];
        var ImageIndex = 0;
        function changeImage() {
            myImage.setAttribute("src", ImageArray[ImageIndex]);
            ImageIndex = (ImageIndex + 1) % ImageArray.length;
        }
        setTimeout(changeImage, 1000);
        setInterval(changeImage, 2000);

        let rotateImage = () => {
            let img = document.getElementById("dogecoin");
            img.style.transform = "rotate(180deg)";
        }
      </script>
  </body>
  </html>
`,
    }
};
   
export default fileData;