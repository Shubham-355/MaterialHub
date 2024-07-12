const fileData = {
    OOPJ: {
        Practical1: `
1    Program to implement a Class and method without parameters.

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
12  Program to implement the use of static keyword.		

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
    } //,
//     PSNM: {
//         Practical1: `
// `,
//         Practical2: `
// `,
//         Practical3: `
// `,
//         Practical4: `
// `,
//         Practical5: `
// `,
//         Practical6: `
// `,
//         Practical7: `
// `,
//         Practical8: `
// `,
//         Practical9: `
// `,
//         Practical10: `
// `,
//         Practical11: `
// `,
//     }
,
    OS: {
        Practical1: `
AIM: To Study and hands on upon various UNIX, VI  Editor and Shell’s Commands.

1)	cal:
a)	Print the calendar of any year in the range 1 to 9999
b)	The system not stores these calendar in memory but generate through the calculation when we invoke command
Options
c)	If we want to see the calendar of any year then
§	$ Cal 2006
d)	If we want to see the calendar for particular month then
§	$ Cal 3 2006

2)  who:-
a)	List all the users who are currently logged in, with their terminal and their log in time.
      Option:
b)	$ who am i:
            It displays our login name, terminal name and log in time.
3)	ls:   

It list all the filenames in alphabetical order which are present in current  directory.

Options:
ls –a          : display hidden files also
ls [aeiou]* : display all files which has first letter any from the bracket.
ls –l           : It list the files with 7 columns having information about  
                        it’s  permission ,number of links, owner name, group name,  
                        size of file in bytes, date and time when file was last  
                        modified & filename.
4)	cat:
      a)  It is used to create a new file. Press ctrl + d to indicate EOF.
           b)  $ cat > test
                Crete a filename with test
           c)   $ cat test
                 Display the content of test file
c)	$ cat  file1 file2 > file3
       This would create a new file and content of file1 & file2 are copied  
       into it.
5)	wc:
 a)  It counts the number of lines , words and character from  the specified  file or files.
       b)  Wc –l  filename : display the number of lines
       c)  Wc-w filename: display the number of words
       d)  Wc-c  filename:   display the number of character.

6)	pipe :
                    a)    We can join the commands using a pipe, means it sends the output 
                           of one command as input of another.
        b)    $ ls | wc-l
 Here the output of ls becomes the input to wc which promptly counts the number of lines it receives as input and display this count on the Screen.
7)	echo:
              It is used to display output. If we use “ “ in echo then the shell treats  
              the content within  “ “ as a single string to be displayed.
  
8)	exit:
              It will stop the execution of shell script and exit form the program.


9)	type:
               It returns the location of the given command
               type command
    10) man:
               a)    This provide the help manual for every commands
          b)    $ Man cd
                  It display the help manual for cd command.    
     11) date: 
          a)   It display date on screen
          b)   $ date
                It display Wed mar 08 04:40:10 IST 2006
                Where IST means Indian standard time.
c)	 The output of the date command can be modified by a variety of   
 Switch. 
For e.g.  $date ‘+DATE:%d-%m-%y%n TIME : %H:%M:%S’
                 Where %d, %m, %y indicate day, month, year and %h, %m, %s   
                  Indicate hour, minute and second.
12)	 bc:
          a)    Calculator can be invoked by typing bc at shell prompt.
          b)   $ bc
                Sqrt(25)
                 5
13)	 script:
a)	   When you write script on the prompt, all the commands which you      
            run after it will be stored in a file named type script.
      b)      You can close the file by writing exit on the prompt.
14)	 ln:
       a)      It is used to create another link for a same file.
       b)      $ ln  file1 file2
                This command establish one more link for the file1 in the form of     
                 the name file2.
 15) nl:
       a)    This command displays the content of the file with the line number.
       b)    $ nl abc
              This command display the content of files abc with line number  
              before every line.
16) head:
       a)     It helps in viewing lines at the beginning of file.
       b)     If we not specify anything then this command display first 10 lines
               For e.g. $ head abc
       c)     $ head -15 abc
               This command display first 15 lines of file abc. 
17) tail: 
               It helps in viewing lines from the end of file
               For e.g. $ tail -20 abc will display the last 20 lines from the file abc.

18) grep:
       a)  grep stands for “globally search a regular expression and print it.”
             This command search for the specified input fully for a match with    
             The supplied pattern and display it.
        b)  $ grep xy abc
             This would search the word xy in a file called abc.
19) sort:
         a)  It is used to sort the content of a file.
         b)  $ sort abc
               It shows the content of file abc in sorted format
         c)  $ sort file1 file2 file3
This will sort the contents of several files at once.  
   20) cut:
                a)  It cuts or picks up a given number of character or fields from the   
                        specified file.
b)	suppose we have a large database of student information from that we 
      Want only specific field say name (second field) and division (fifth  
      field) then we can write the cut command as
                $ cut –c 2 ,7  empinfo
      If we want to view the field 2 through 7 then
                $ cut –f1 -d “ “  empinfo
21) passwd:
        
a)	You can change your password whenever you are logged in by using the passwd command as below.
$ passwd
This command asks you to enter old password to prove that you are the authorized person and then after it ask for the new password.      

22) pwd:        
             
                         Pwd stands for ‘present working directory’. When you write pwd on 
                         prompt it will display current working directory.

                         For e.g.  $ pwd
23) cd:
      
                  a)  This command is used to change the directory.
                  b)  $ cd newdir
                   This command would take you in new directory.
                  c)  $ cd
  when given without any argument is interpreted by the shell as a   
  request to change over the current user’s home directory. 
24) mkdir:
a) This command is used to create a new directory.
b) $ mkdir xyz
     This will create directory named xyz.
c) $ mkdir –p  xyz/abc
     -p option tell to create xyz directory first and then create directory        
      abc.
     
25) rm:
                      This command removes the given file or files supplied to it.
                    a) $ rm -i file1
                     where –i  is a switch , removes file interactively; means you are asked  
                         for confirmation before deleting the file.
                    b) $  rm -r dir1
                        This command recursively removes all content of dir1 and also dir1    
                         itself

26) cp: 
                    This command is used to copy a file.
a)	$ cp file1 file2
This will copy file1 in to file2. if file2 does not exit then it will be created.  

                b)  We can copy more than one file into a directory. 
                      $ cp file1 file2 dir1

27) mv:
                   This command is used to rename the file
a)	$ mv file1 file2
This command renames the file1 to file2

b)	$mv file1 file2 dir1
This command moves the file1 and file2 from its original location to the directory dir.

28) cmp:
               The cmp utilities compares two files of any type and writes the result to the  
               Standard o/p
29) diff
    
                The diff utility used to compare the contents of two files.
                    diff file1 file2
30) ulimit
unix system has resource limits such as limits on number of processes, maximum allowed file size , etc
                    a) ulimit -a
                    b)ulimit -f 121212

Common vi editor command list

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
|                                                                                                                                                                         |
|   To insert new text		                                    |    esc + i ( You have to press 'escape' key then 'i')                                               |
|   To save file		                                    |    esc + : + w (Press 'escape' key  then 'colon' and finally 'w')                                   |
|   To save file with file name (save as)		            |    esc + : + w  "filename"                                                                          |
|   To quit the vi editor		                            |    esc + : + q                                                                                      |
|   To quit without saving		                            |    esc + : + q!                                                                                     |
|   o save and quit vi editor		                            |    esc + : + wq                                                                                     |
|   To search for specified word in forward direction		    |    esc + /word (Press 'escape' key, type /word-to-find, for e.g. to find word 'shri', type as/shri) |
|   To continue with search 		                            |    n                                                                                                |
|   To search for specified word in backward direction		    |    esc + ?word (Press 'escape' key, type word-to-find)                                              |
|   To copy the line where cursor is located		            |    esc + yy                                                                                         |
|   To paste the text just deleted or copied at the cursor	    |    esc + p	                                                                                  |
|   To delete entire line where cursor is located		    |    esc + dd	                                                                                  |
|   To delete word from cursor position	                            |    esc + dw                                                                                         |
|   To Find all occurrence of given word and Replace them globally  |    esc + :$s/word-to-find/word-to-replace/g                                                         |
|   without confirmation 	                                    |    For. e.g. :$s/mumbai/pune/g                                                                      |
|                                                                   |    Here word "mumbai" is replace with "pune"                                                        |
|   To Find all occurrence of given word and Replace then globally  |    esc + :$s/word-to-find/word-to-replace/cg                                                        |
|   with confirmation		                                    |                                                                                                     |
|   To run shell command like ls, cp or date etc within vi	    |    esc + :!shell-command                                                                            |
|                                                                   |    For e.g. :!pwd                                                                                   |
|                                                                                                                                                                         |
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------                                                                    

`,
        Practical2: `
AIM: Implementation of Shell’s Scripts using basic UNIX commands and control statements

1. Write shell script to take cost price and selling price of an item as input through the keyboard, and determine whether the seller has made a profit or incurred a loss.
Program:-
echo "Enter cost price of item:";
read c;
echo "Enter selling price of item:";
read s;
if [ $s -eq $c ]
then
    echo "No profit or No loss has incurred.";
elif [ $s -lt $c ]
then
    echo "Loss of Rs. \$(expr $c - $s) has incurred.";
else
    echo "Profit of Rs. \$(expr $s - $c) has incurred.";
fi
Output:-
Enter cost price of item:
2000

Enter selling price of item:
2250

Profit of Rs. 250 has incurred.

2. Write a script to find the largest number out of two inputted numbers.
Program:-
echo "Enter two numbers:";
read a;
read b;

if [ $a -gt $b ]
then
    echo "\$a is the largest number.";
elif [ $a -lt $b ]
then
    echo "\$b is the largest number.";
else
    echo "Both numbers are equal.";
fi

Output:-
Enter two numbers:
12
10

12 is the largest number.

3. Write a script to enter any year through the keyboard and determine whether the year is a leap year or not.
Program:-
echo "Enter the year in 4 digits:";
read year;
if [ $year -gt 1000 -a $year -lt 9999 ]
then
    if [ \$(expr $year % 4) -eq 0 ]
    then
        echo "The year $year is a leap year.";
    else
        echo "The year $year is not a leap year.";
    fi
else
    echo "Invalid year format.";
fi

Output:-
Enter the year in 4 digits:
2014
The year 2014 is not a leap year.

4. Write a script to create a menu with the following options:
1) Present working directory
2) Calendar
3) List of users who are currently logged in
4) Exit
Make use of the case statement.
Program:-
echo "Menu:\n1. Present working directory.\n2. Calendar.\n3. List of users who are currently logged in.\n4. Exit"
echo "Enter your choice:"
read choice
case $choice in
1) pwd ;;
2) cal ;;
3) who -Hu ;;
4) exit ;;
*)  echo "Invalid Choice."
esac
Output:-
Menu:
1. Present working directory.
2. Calendar.
3. List of users who are currently logged in.
4. Exit
Enter your choice:
2
April 2014
Su   Mo  Tu   We  Th   Fr    Sa

1      2      3      4      5
6      7      8      9      10    11    12
13    14    15    16    17    18    19
20    21    22    23    24    25    26
27    28    29    30

5. Write a script to accept a number and perform addition, subtraction, multiplication & division.
Program:-
echo "Menu:\n 1. Addition\n 2. Subtraction \n 3. Multiplication \n 4. Division \n";
echo "Enter your choice:";
read choice;
if [ $choice -lt 5 ]
then
    echo "Enter a & b :";
    read a;
    read b;
else
    echo "Invalid choice";
    exit 1;
fi
case $choice in
1) echo "Addition of the two numbers: \$(expr $a + $b)" ;;
2) echo "Subtraction of the two numbers: \$(expr $a - $b)" ;;
3) echo "Multiplication of the two numbers: \$(expr $a \* $b)" ;;
4) echo "Division of the two numbers: \$(expr $a / $b)" ;;
*)  echo "Invalid Choice" ;;
esac
Output:-
Menu:
1. Addition
2. Subtraction
3. Multiplication
4. Division

Enter your choice:
1

Enter a & b :
10
20

Addition of these two numbers:
30

6. Write a script to accept a string and check whether it is a file or directory if it exists. (null string is not allowed).
Program:-
echo "Enter string:";
read str;
if [ -d $str ]
then
    echo "It is a directory.";
elif [ -f $str ]
then
    echo "It is a file.";
else
    echo "The file or directory does not exist";
fi
Output:-
Enter string:
abc
It is a directory.

7. Write a script to accept a file name & display the last modification time if the file exists, otherwise display an appropriate message.
Program:-
echo "Enter file name:";
read fn;
if [ -f $fn ]
then
    echo "Last modification time:";
    date -r $fn +"%T";
else 
    echo "File does not exist.";
fi

Output:-
Enter file name:
abc.sh

Last modification time:
14:34:67

8. Write a script to display the names of all executable files in the given directory.
Program:-
echo "Enter directory name:";
read dir;
if [ -d $dir ]
then
    echo "Enter extension you want to search:";
    read ext;
    ls -l $dir/*$ext | grep '^-' | grep 'x'
else 
    echo "Directory doesn't exist.";
fi

Output:-
Enter directory name:
abc

Enter extension you want to search:
*.c
-rwxr-xr-x 1 user user 85 May 13 13:26 a1.c
-rwxr-xr-x 1 user user 59 May 20 12:49 a2.c

9. Write a script to display the date, time & a welcome message (like Good Morning etc.). The time should be displayed with 'a.m' or 'p.m' & not in 24-hour notation.
Program:-
echo "Current Time: \$(date +"%I:%M %p")";
HH=\$(date +%H)
if [ $HH -ge 5 -a $HH -lt 12 ]
then
    echo "Good Morning";
elif [ $HH -ge 12 -a $HH -lt 17 ]
then
    echo "Good Afternoon";
elif [ $HH -ge 17 -a $HH -lt 21 ]
then
    echo "Good Evening";
else
    echo "Good Night";
fi

Output:-
Current Time:
07:36 AM

Good Morning

10. Write a script to display the files in the directory in descending order of size.
Program:-
echo "Enter the file extension:";
read ext;
ls -lS *$ext

Output:-
Enter the file extension:
*.sh
-rw-r--r-- 1 user user 510 Apr 22 11:41 vishal1.sh
-rw-r--r-- 1 user user 420 Apr 22 13:44 dir.sh
-rw-r--r-- 1 user user 265 Apr 22 11:35 vishal.sh
-rw-r--r-- 1 user user 214 Apr 22 14:17 aaa.sh
-rw-r--r-- 1 user user 185 Apr 22 12:31 v3.sh
-rw-r--r-- 1 user user 138 Apr 22 11:52 time.sh
-rw-r--r-- 1 user user 83 Apr 22 14:46 aaaa.sh

11. Write a script to perform the following file and directory management operations:
1) Display current directory
2) List directory
3) Make directory
4) Change directory
5) Copy directory
6) Rename a file
7) Delete a file
8) Edit a file

Program:-
echo "Menu:\n1. Display current directory\n2. List directory\n3. Make directory\n4. Change directory\n5. Copy directory\n6. Rename a file\n7. Delete a file\n8. Edit a file"
echo "Enter your choice: "
read choice
if [ $choice -eq 1 ];
then
    echo "Current directory is ";
    pwd;
elif [ $choice -eq 2 ];
then
    echo "List of directory:";
    ls;
elif [ $choice -eq 3 ];
then
    echo "Enter new directory name to create:";
    read dir; 
    mkdir $dir;
    echo "$dir directory is created successfully.";
elif [ $choice -eq 4 ];
then
    echo "Enter directory name to change: ";
    read cdir; 
    cd $cdir;
elif [ $choice -eq 5 ];
then
    echo "Enter file name to copy:";
    read file;
    echo "Enter directory name to which file to be copied:";
    read dir1;
    cp $file $dir1;
elif [ $choice -eq 6 ];
then
    echo "Enter file name to rename: ";
    read rname;
    echo "Enter new name:";
    read nname;
    mv $rname $nname;
elif [ $choice -eq 7 ]
then
    echo "Enter file name to delete:";
    read dfile;
    rm $dfile;
elif [ $choice -eq 8 ];
then
    echo "Enter file name to edit:";
    read efile;
    echo "Enter new data to write:";
    read newdata;
    echo $newdata > $efile;
fi

Output:-
Menu:
1. Display current directory
2. List directory
3. Make directory
4. Change directory
5. Copy directory
6. Rename a file
7. Delete a file
8. Edit a file

Enter your choice:
1
/home/user

12. Write a script which reads a text file & outputs the following count of characters, words & lines.
Program:-
echo "Enter the file name:";
read fname;
echo "Total characters:" \$(wc -c < $fname);
echo "Total words:" \$(wc -w < $fname);
echo "Total lines:" \$(wc -l < $fname);

Output:-
Enter the file name: abc.sh
Total characters:
243
Total words:
67
Total lines:
22
`,
        Practical3: `
AIM: Implementation of Shell’s Scripts demonstrating Loops

1. Write a script to accept a five-digit number through the keyboard, then reverse this five-digit number.
Program:-
echo "Enter five-digit number:";
read n;
rev=0; rem=0; temp=0;
while [ $n -ne 0 ]
do
    rem=\$(expr $n % 10); 
    temp=\$(expr $rev \* 10); 
    rev=\$(expr $temp + $rem); 
    n=\$(expr $n / 10);
done
echo "Reverse number is $rev.";
Output:-
Enter five-digit number:
12345

Reverse number is 54321

2. Write a script to generate the sum of all odd numbers between 1 to 20.
Program:-
echo "Sum of all odd numbers between 1 to 20:";
sum=0;
i=1;
while [ $i -le 20 ]
do
    rem=\$(expr $i % 2);
    if [ $rem -eq 1 ]
    then
        sum=\$(expr $i + $sum);
    fi
    i=\$(expr $i + 1);
done
echo $sum;
Output:-
Sum of all odd numbers between 1 to 20:
100

3. Write a script to demonstrate the use of the for.. loop
Program:
i=0
for day in Mon Tue Wed Thu Fri
do
    echo "Weekday $((i++)) : $day"
done

Output:
Weekday 0 : Mon
Weekday 1 : Tue
Weekday 2 : Wed
Weekday 3 : Thu
Weekday 4 : Fri 

4. Write a script to fetch the data from a file & display the data.
Program:- 
while read line 
do
    echo $line;
done < filename

Output:- 
LDRP-ITR, Gandhinagar.
`,
        Practical4: `
AIM: Implementation of Shell’s Scripts demonstrating the use of String operations & Command line Arguments

String Length

$ cat len.sh

#! /bin/bash
var="Welcome to the geekstuff"
echo \${#var}

Output:
$ ./len.sh
24

Substring of String
Program:
$ cat substr.sh
#! /bin/bash

var="Welcome to the geekstuff"
echo \${var:15}
echo \${var:15:4}

Output:
$ ./substr.sh
geekstuff
geek

String Concatenate
Program:
a='hello'
b='world'
c=$a$b
echo $c

Output:
helloworld

String Compare
Program:
Sourcesystem="ABC"
if [ "$Sourcesystem" == "XYZ" ]; then 
    echo "Sourcesystem Matched" 
else
    echo "Sourcesystem is NOT Matched $Sourcesystem"  
fi

echo "Sourcesystem Value is $Sourcesystem"

Output:

Command-line Arguments:
Program: 
$ vi myscript
#!/bin/bash

echo "First arg: \$1"
echo "Second arg: \$2"

Output:

Run by writing command: 
$ ./myscript hello world

First arg: hello
Second arg: world
`,
        Practical5: `
AIM: Implementation of FCFS (First Come First Serve) CPU Scheduling

Algorithm

1. Define an array of structure process with members pid, btime, wtime & ttime.
2. Get length of the ready queue, i.e., number of process (say n)
3. Obtain btime for each process.
4. The wtime for first process is 0.
5. Compute wtime and ttime for each process as:
    a. wtime[i+1] =  wtime[i] + btime[i]
    b. ttime[i] =  wtime[i] + btime[i]
6. Compute average waiting time awat and average turnaround time atur
7. Display the btime, ttime and wtime for each process.
8. Display GANTT chart for the above scheduling
9. Display awat time and atur
10. Stop

Result

Thus waiting time & turnaround time for processes based on FCFS scheduling was computed and the average waiting time was determined.

Program

/* FCFS Scheduling - fcfs.c */

#include <stdio.h>

struct process {
    int pid; 
    int btime; 
    int wtime; 
    int ttime;
} p[10];

int main() {
    int i, j, k, n, ttur, twat;
    float awat, atur;

    printf("Enter no. of process: ");
    scanf("%d", &n);
    for(i=0; i<n; i++) {
        printf("Burst time for process P%d (in ms): ", (i+1));
        scanf("%d", &p[i].btime);
        p[i].pid = i + 1;
    }

    p[0].wtime = 0;
    for(i=0; i<n; i++) {
        p[i+1].wtime = p[i].wtime + p[i].btime;
        p[i].ttime = p[i].wtime + p[i].btime;
    }
    ttur = twat = 0;
    for(i=0; i<n; i++) {
        ttur += p[i].ttime;
        twat += p[i].wtime;
    }
    awat = (float)twat / n;
    atur = (float)ttur / n;

    printf("\n       FCFS Scheduling\n\n");
    for(i=0; i<28; i++)
        printf("-");
    printf("\nProcess B-Time T-Time W-Time\n");
    for(i=0; i<28; i++)
        printf("-");
    for(i=0; i<n; i++)
        printf("\n  P%d\t%4d\t%3d\t%2d", p[i].pid, p[i].btime, p[i].ttime, p[i].wtime);
    printf("\n");
    for(i=0; i<28; i++)
        printf("-");

    printf("\n\nGANTT Chart\n");
    printf("-");
    for(i=0; i<(p[n-1].ttime + 2*n); i++)
        printf("-");
    printf("\n");
    printf("|");
    for(i=0; i<n; i++) {
        k = p[i].btime / 2;
        for(j=0; j<k; j++)
            printf(" ");
        printf("P%d", p[i].pid);
        for(j=k+1; j<p[i].btime; j++)
            printf(" ");
        printf("|");
    }
    printf("\n");
    printf("-");
    for(i=0; i<(p[n-1].ttime + 2*n); i++)
        printf("-");
    printf("\n");
    printf("0");
    for(i=0; i<n; i++) {
        for(j=0; j<p[i].btime; j++)
            printf(" ");
        printf("%2d", p[i].ttime);
    }

    printf("\n\nAverage waiting time     : %5.2fms", awat);
    printf("\nAverage turn around time : %5.2fms\n", atur);

    return 0;
}

Output

$ gcc fcfs.c

$ ./a.out
Enter no. of process : 4
Burst time for process P1 (in ms) : 10
Burst time for process P2 (in ms) : 4
Burst time for process P3 (in ms) : 11
Burst time for process P4 (in ms) : 6

FCFS Scheduling

----------------------------
Process B-Time T-Time W-Time
----------------------------
P1      10     10      0
P2       4     14     10
P3      11     25     14
P4       6     31     25
----------------------------

GANTT Chart
----------------------------------------
|     P1    |  P2 |     P3     |   P4  |
----------------------------------------
0          10    14           25      31

Average waiting time     : 12.25ms
Average turnaround time  : 20.00ms
`,
        Practical6: `
AIM: Implementation of FCFS (First Come First Serve) CPU Scheduling

Algorithm

1. Define an array of structure process with members pid, btime, wtime & ttime.
2. Get length of the ready queue, i.e., number of process (say n)
3. Obtain btime for each process.
4. The wtime for first process is 0.
5. Compute wtime and ttime for each process as:
    a. wtime[i+1] = wtime[i] + btime[i]
    b. ttime[i] = wtime[i] + btime[i]
6. Compute average waiting time (awat) and average turnaround time (atur)
7. Display the btime, ttime and wtime for each process.
8. Display GANTT chart for the above scheduling
9. Display awat time and atur
10. Stop

Result

Thus waiting time & turnaround time for processes based on FCFS scheduling was computed and the average waiting time was determined.

Program

/* FCFS Scheduling - fcfs.c */

#include <stdio.h>

struct process {
    int pid; 
    int btime; 
    int wtime; 
    int ttime;
} p[10];

int main() {
    int i, j, k, n, ttur, twat;
    float awat, atur;

    printf("Enter no. of process: ");
    scanf("%d", &n);
    for(i=0; i<n; i++) {
        printf("Burst time for process P%d (in ms): ", (i+1));
        scanf("%d", &p[i].btime);
        p[i].pid = i + 1;
    }

    p[0].wtime = 0;
    for(i=0; i<n; i++) {
        p[i+1].wtime = p[i].wtime + p[i].btime;
        p[i].ttime = p[i].wtime + p[i].btime;
    }
    ttur = twat = 0;
    for(i=0; i<n; i++) {
        ttur += p[i].ttime;
        twat += p[i].wtime;
    }
    awat = (float)twat / n;
    atur = (float)ttur / n;

    printf("\n       FCFS Scheduling\n\n");
    for(i=0; i<28; i++)
        printf("-");
    printf("\nProcess B-Time T-Time W-Time\n");
    for(i=0; i<28; i++)
        printf("-");
    for(i=0; i<n; i++)
        printf("\n  P%d\t%4d\t%3d\t%2d", p[i].pid, p[i].btime, p[i].ttime, p[i].wtime);
    printf("\n");
    for(i=0; i<28; i++)
        printf("-");

    printf("\n\nGANTT Chart\n");
    printf("-");
    for(i=0; i<(p[n-1].ttime + 2*n); i++)
        printf("-");
    printf("\n");
    printf("|");
    for(i=0; i<n; i++) {
        k = p[i].btime / 2;
        for(j=0; j<k; j++)
            printf(" ");
        printf("P%d", p[i].pid);
        for(j=k+1; j<p[i].btime; j++)
            printf(" ");
        printf("|");
    }
    printf("\n");
    printf("-");
    for(i=0; i<(p[n-1].ttime + 2*n); i++)
        printf("-");
    printf("\n");
    printf("0");
    for(i=0; i<n; i++) {
        for(j=0; j<p[i].btime; j++)
            printf(" ");
        printf("%2d", p[i].ttime);
    }

    printf("\n\nAverage waiting time     : %5.2fms", awat);
    printf("\nAverage turn around time : %5.2fms\n", atur);

    return 0;
}

Output

$ gcc fcfs.c

$ ./a.out
Enter no. of process : 4
Burst time for process P1 (in ms) : 10
Burst time for process P2 (in ms) : 4
Burst time for process P3 (in ms) : 11
Burst time for process P4 (in ms) : 6

FCFS Scheduling

----------------------------
Process B-Time T-Time W-Time
----------------------------
P1      10     10      0
P2       4     14     10
P3      11     25     14
P4       6     31     25
----------------------------

GANTT Chart
----------------------------------------
|     P1    |  P2 |     P3     |   P4  |
----------------------------------------
0          10    14           25      31

Average waiting time     : 12.25ms
Average turnaround time  : 20.00ms
`,
        Practical7: `
AIM: Implementation of Round Robin (RR) CPU Scheduling

Algorithm

1. Get length of the ready queue, i.e., number of process (say n)
2. Obtain Burst time Bi for each processes Pi.
3. Get the time slice per round, say TS
4. Determine the number of rounds for each process.
5. The wait time for first process is 0.
6. If Bi > TS then process takes more than one round. Therefore turnaround and waiting time should include the time spent for other remaining processes in the same round.
7. Calculate average waiting time and turnaround time
8. Display the GANTT chart that includes:
    a. Order in which the processes were processed in progression of rounds 
    b. Turnaround time Ti for each process in progression of rounds.
9. Display the burst time, turnaround time and wait time for each process (in order of rounds they were processed).
10. Display average wait time and turnaround time
11. Stop

Result

Thus waiting time and turnaround time for processes based on Round robin scheduling was computed and the average waiting time was determined.

Program

/* Round robin scheduling - rr.c */

#include <stdio.h>

int main() {
    int i, x = -1, k[10], m = 0, n, t, s = 0;
    int a[50], temp, b[50], p[10], bur[10], bur1[10];
    int wat[10], tur[10], ttur = 0, twat = 0, j = 0;
    float awat, atur;

    printf("Enter no. of process: ");
    scanf("%d", &n);
    for (i = 0; i < n; i++) {
        printf("Burst time for process P%d: ", (i + 1));
        scanf("%d", &bur[i]);
        bur1[i] = bur[i];
    }
    printf("Enter the time slice (in ms): ");
    scanf("%d", &t);

    for (i = 0; i < n; i++) {
        b[i] = bur[i] / t;
        if ((bur[i] % t) != 0)
            b[i] += 1;
        m += b[i];
    }

    printf("\n\t\tRound Robin Scheduling\n");

    printf("\nGANTT Chart\n");
    for (i = 0; i < m; i++)
        printf("--------");
    printf("\n");

    a[0] = 0;
    while (j < m) {
        if (x == n - 1)
            x = 0;
        else 
            x++;
        if (bur[x] >= t) {
            bur[x] -= t;
            a[j + 1] = a[j] + t;
            if (b[x] == 1) {
                p[s] = x;
                k[s] = a[j + 1];    
                s++;
            }
            j++;
            b[x] -= 1;
            printf("  P%d    |", x + 1);
        } else if (bur[x] != 0) {
            a[j + 1] = a[j] + bur[x];
            bur[x] = 0;
            if (b[x] == 1) {
                p[s] = x;
                k[s] = a[j + 1];
                s++;
            }
            j++;
            b[x] -= 1;
            printf("  P%d  |", x + 1);
        }
    }

    printf("\n");
    for (i = 0; i < m; i++)
        printf("--------");
    printf("\n");

    for (j = 0; j <= m; j++)
        printf("%d\t", a[j]);

    for (i = 0; i < n; i++) {
        for (j = i + 1; j < n; j++) {
            if (p[i] > p[j]) {
                temp = p[i]; 
                p[i] = p[j]; 
                p[j] = temp;

                temp = k[i];
                k[i] = k[j]; 
                k[j] = temp;
            }
        }
    }

    for (i = 0; i < n; i++) {
        wat[i] = k[i] - bur1[i];
        tur[i] = k[i];
    }
    for (i = 0; i < n; i++) {
        ttur += tur[i];
        twat += wat[i];
    }

    printf("\n\n");
    for (i = 0; i < 30; i++)
        printf("-");
    printf("\nProcess\tBurst\tTrnd\tWait\n");
    for (i = 0; i < 30; i++)
        printf("-");
    for (i = 0; i < n; i++)
        printf("\nP%-4d\t%4d\t%4d\t%4d", p[i] + 1, bur1[i], tur[i], wat[i]);
    printf("\n");
    for (i = 0; i < 30; i++)
        printf("-");

    awat = (float)twat / n;
    atur = (float)ttur / n;
    printf("\n\nAverage waiting time     : %.2f ms", awat);
    printf("\nAverage turn around time : %.2f ms\n", atur);

    return 0;
}

Output

$ gcc rr.c
$ ./a.out
Enter no. of process : 5
Burst time for process P1 : 10
Burst time for process P2 : 29
Burst time for process P3 : 3
Burst time for process P4 : 7
Burst time for process P5 : 12
Enter the time slice (in ms) : 10

Round Robin Scheduling

GANTT Chart
-------------------------------------------------------------- 
    P1    |  P2   |  P3  |  P4  |  P5  |  P2   |  P5   |   P2  |
--------------------------------------------------------------
0    10      20     23      30      40      50      52      61

------------------------------ 
Process Burst   Trnd    Wait
------------------------------
P1   10   10   0
P2   29   61   32
P3   3    23   20
P4   7    30   23
P5   12   52   40
------------------------------

Average waiting time     : 23.00 ms
Average turn around time : 35.20 ms
`,
        Practical8: `
AIM: Implementation of Priority CPU Scheduling Algorithm

Algorithm

1.     Define an array of structure process with members pid, btime, pri, wtime & ttime.
2.     Get length of the ready queue, i.e., number of process (say n)
3.     Obtain btime and pri for each process.
4.     Sort the processes according to their pri in ascending order.
a.  If two process have same pri, then FCFS is used to resolve the tie.
5.     The wtime for first process is 0.
6.     Compute wtime and ttime for each process as:
a.  wtimei+1 =  wtimei   +  btimei
b. ttimei       =  wtimei   +  btimei
7.     Compute average waiting time awat and average turn around time atur
8.     Display the btime, pri, ttime and wtime for each process.
9.     Display GANTT chart for the above scheduling
10.    Display awat and atur
11.   Stop



Result

Thus waiting time & turnaround  time for processes based on Priority scheduling was computed and the average waiting time was determined.


Program

/* Priority Scheduling  - pri.c */

#include <stdio.h>

struct process
{
int pid; int btime; int pri; int wtime; int ttime;
} p[10], temp;

main()
{
int i,j,k,n,ttur,twat;
float awat,atur;

printf("Enter no. of process : ");
scanf("%d", &n);
for(i=0; i<n; i++)
{
printf("Burst time for process P%d (in ms) : ", (i+1));
scanf("%d", &p[i].btime);
printf("Priority for process P%d : ", (i+1));
scanf("%d", &p[i].pri);
p[i].pid = i+1;
}

for(i=0; i<n-1; i++)
{
for(j=i+1; j<n; j++)
{
if((p[i].pri > p[j].pri) ||
(p[i].pri == p[j].pri && p[i].pid > p[j].pid) )
{
temp = p[i]; p[i] = p[j]; p[j] = temp;
}

}
}
p[0].wtime = 0;
for(i=0; i<n; i++)
{
p[i+1].wtime = p[i].wtime + p[i].btime;
p[i].ttime = p[i].wtime + p[i].btime;
}

ttur = twat = 0;
for(i=0; i<n; i++)
{
ttur += p[i].ttime;
twat += p[i].wtime;
}
awat = (float)twat / n;
atur = (float)ttur / n;

printf("\n\t Priority Scheduling\n\n");
for(i=0; i<38; i++)
printf("-");
printf("\nProcess B-Time Priority T-Time  W-Time\n");
for(i=0; i<38; i++)
printf("-");
for (i=0; i<n; i++)
printf("\n  P%-4d\t%4d\t%3d\t%4d\t%4d", p[i].pid,p[i].btime,p[i].pri,p[i].ttime,p[i].wtime);
printf("\n");
for(i=0; i<38; i++)
printf("-");

printf("\n\nGANTT Chart\n");
printf("-");
for(i=0; i<(p[n-1].ttime + 2*n); i++)
printf("-"); printf("\n|"); for(i=0; i<n; i++)
{
k = p[i].btime/2;
for(j=0; j<k; j++)
printf(" "); printf("P%d",p[i].pid); for(j=k+1; j<p[i].btime; j++)
printf(" ");
printf("|");
}
printf("\n-");
for(i=0; i<(p[n-1].ttime + 2*n); i++)
printf("-"); printf("\n0"); for(i=0; i<n; i++)
{
for(j=0; j<p[i].btime; j++)
printf(" ");
printf("%2d",p[i].ttime);
}

printf("\n\nAverage waiting time     : %5.2fms", awat);
printf("\nAverage turn around time : %5.2fms\n", atur);
}

Output

$ gcc pri.c

$ ./a.out
Enter no. of process : 5
Burst time for process P1 (in ms) : 10
Priority for process P1 : 3
Burst time for process P2 (in ms) : 7
Priority for process P2 : 1
Burst time for process P3 (in ms) : 6
Priority for process P3 : 3
Burst time for process P4 (in ms) : 13
Priority for process P4 : 4
Burst time for process P5 (in ms) : 5
Priority for process P5 : 2
Priority Scheduling

-------------------------------------- Process B-Time Priority T-Time  W-Time
--------------------------------------
P2	7	1	7	0
P5	5	2	12	7
P1	10	3	22	12
P3	6	3	28	22
P4	13	4	41	28
--------------------------------------

GANTT Chart
----------------------------------------------------
|   P2   |  P5  |     P1    |   P3  |      P4      |
----------------------------------------------------
0        7     12          22      28             41

Average waiting time     : 13.80ms
Average turn around time : 22.00ms
`,
        Practical9: `
AIM: Implementation of First-Fit Memory Allocation Algorithm

Algorithm

1. 	Declare  structures  hole  and  process  to  hold  information  about  set of holes  and processes respectively.
2.     Get number of holes, say nh.
3.     Get the size of each hole
4.     Get number of processes, say np.
5.     Get the memory requirements for each process.
6.     Allocate processes to holes, by examining each hole as follows:
a.   If hole size > process size then
i.   Mark process as allocated to that hole. ii.   Decrement hole size by process size.
b.  Otherwise check the next from the set of hole
7.     Print the list of process and their allocated holes or unallocated status.
8.     Print the list of holes, their actual and current availability.
9.     Stop

Result

Thus processes were allocated memory using first fit method.


Program

/* First fit allocation - ffit.c */

#include <stdio.h>

struct process
{
int size; 
int flag; 
int holeid;
} p[10];

struct hole
{
int size;
int actual;
} h[10];

main()
{
int i, np, nh, j;

printf("Enter the number of Holes : ");
scanf("%d", &nh);
for(i=0; i<nh; i++)
{
printf("Enter size for hole H%d : ",i);
scanf("%d", &h[i].size);
h[i].actual =  h[i].size;
}

printf("\nEnter number of process : " );
scanf("%d",&np);
for(i=0;i<np;i++)
{
printf("enter the size of process P%d : ",i);
scanf("%d", &p[i].size);
p[i].flag = 0;
}

for (i=0; i<np; i++)
{
for(j=0; j<nh; j++)
{
if(p[i].flag != 1)
{
if(p[i].size <= h[j].size)
{
p[i].flag = 1; 
p[i].holeid = j;
h[j].size -= p[i].size;
}
}
}
}

printf("\n\tFirst fit\n"); printf("\nProcess\tPSize\tHole"); for(i=0; i<np; i++)
{
if(p[i].flag != 1)
printf("\nP%d\t%d\tNot allocated", i, p[i].size);
else
printf("\nP%d\t%d\tH%d", i, p[i].size, p[i].holeid);
}

printf("\n\nHole\tActual\tAvailable");
for(i=0; i<nh ;i++)
printf("\nH%d\t%d\t%d", i, h[i].actual, h[i].size);
printf("\n");
}

Output


$ gcc ffit.c

$ ./a.out
Enter the number of Holes : 5
Enter size for hole H0 : 100
Enter size for hole H1 : 500
Enter size for hole H2 : 200
Enter size for hole H3 : 300
Enter size for hole H4 : 600

Enter number of process : 4
enter the size of process P0 : 212 enter the size of process P1 : 417 enter the size of process P2 : 112 enter the size of process P3 : 426

First fit
Process PSize   Hole
P0      212     H1
P1      417     H4
P2      112     H1
P3      426     Not allocated

Hole    Actual  Available
H0      100     100
H1      500     176
H2      200     200
H3      300     300
H4      600     183
`,
        Practical10: `
AIM: Implementation of  Best-Fit Memory Allocation Algorithm

Algorithm

1. 	Declare  structures  hole  and  process  to  hold  information  about  set of holes  and processes respectively.
2.     Get number of holes, say nh.
3.     Get the size of each hole
4.     Get number of processes, say np.
5.     Get the memory requirements for each process.
6.     Allocate processes to holes, by examining each hole as follows:
a.   Sort the holes according to their sizes in ascending order b.  If hole size > process size then
i.   Mark process as allocated to that hole. ii.   Decrement hole size by process size.
c.   Otherwise check the next from the set of sorted hole
7.     Print the list of process and their allocated holes or unallocated status.
8.     Print the list of holes, their actual and current availability.
9.     Stop

Result

Thus processes were allocated memory using best fit method.


Program

/* Best fit allocation - bfit.c */

#include <stdio.h>

struct process
{
int size; int flag; int holeid;
} p[10];
struct hole
{
int hid; int size; int actual;
} h[10];

main()
{
int i, np, nh, j;
void bsort(struct hole[], int);

printf("Enter the number of Holes : ");
scanf("%d", &nh);
for(i=0; i<nh; i++)
{
printf("Enter size for hole H%d : ",i);
scanf("%d", &h[i].size); h[i].actual =  h[i].size; h[i].hid = i;
}

printf("\nEnter number of process : " );
scanf("%d",&np);
for(i=0;i<np;i++)
{
printf("enter the size of process P%d : ",i);
scanf("%d", &p[i].size);
p[i].flag = 0;
}

for(i=0; i<np; i++)
{
bsort(h, nh);

for(j=0; j<nh; j++)
{
if(p[i].flag != 1)
{
if(p[i].size <= h[j].size)
{
p[i].flag = 1; p[i].holeid = h[j].hid; h[j].size -= p[i].size;
}
}
}
}

printf("\n\tBest fit\n"); printf("\nProcess\tPSize\tHole"); for(i=0; i<np; i++)
{
if(p[i].flag != 1)
printf("\nP%d\t%d\tNot allocated", i, p[i].size);
else
printf("\nP%d\t%d\tH%d", i, p[i].size, p[i].holeid);
}

printf("\n\nHole\tActual\tAvailable");
for(i=0; i<nh ;i++)
printf("\nH%d\t%d\t%d", h[i].hid, h[i].actual, h[i].size);
printf("\n");
}

void bsort(struct hole bh[], int n)
{
struct hole temp;
int i,j;
for(i=0; i<n-1; i++)
{
for(j=i+1; j<n; j++)
{
if(bh[i].size > bh[j].size)
{
temp = bh[i]; bh[i] = bh[j]; bh[j] = temp;
}
}
}
}


Output


$ gcc bfit.c

$ ./a.out
Enter the number of Holes : 5
Enter size for hole H0 : 100
Enter size for hole H1 : 500
Enter size for hole H2 : 200
Enter size for hole H3 : 300
Enter size for hole H4 : 600

Enter number of process : 4
enter the size of process P0 : 212 enter the size of process P1 : 417 enter the size of process P2 : 112 enter the size of process P3 : 426

Best fit

Process
P0	PSize
212	Hole
H3
P1	417	H1
P2	112	H2
P3	426	H4

Hole	
Actual	
Available
H1	500	83
H3	300	88
H2	200	88
H0	100	100
H4	600	174
`,
        Practical11: `
AIM: Implementation of FIFO Replacement Algorithm

Algorithm

1.     Get length of the reference string, say l.
2.     Get reference string and store it in an array, say rs.
3.     Get number of frames, say nf.
4.     Initalize frame array upto length nf to -1.
5.     Initialize position of the oldest page, say j to 0.
6.     Initialize no. of page faults, say count to 0.
7.     For each page in reference string in the given order, examine:
a.   Check whether page exist in the frame array b.  If it does not exist then











Result

Thus page replacement was implemented using FIFO algorithm.

Program

/* FIFO page replacement - fifopr.c */

#include <stdio.h>

main()
{
int i,j,l,rs[50],frame[10],nf,k,avail,count=0;

printf("Enter length of ref. string : ");
scanf("%d", &l);
printf("Enter reference string :\n");
for(i=1; i<=l; i++)
scanf("%d", &rs[i]);
printf("Enter number of frames : ");
scanf("%d", &nf);

for(i=0; i<nf; i++)
frame[i] = -1;
j = 0;

printf("\nRef. str  Page frames");
for(i=1; i<=l; i++)
{
printf("\n%4d\t", rs[i]);
avail = 0;
for(k=0; k<nf; k++)
if(frame[k] == rs[i])
avail = 1;
if(avail == 0)
{
frame[j] = rs[i]; j = (j+1) % nf; count++;
for(k=0; k<nf; k++)
printf("%4d", frame[k]);
}
}
printf("\n\nTotal no. of page faults : %d\n",count);
}


Output



$ gcc fifopr.c

$ ./a.out
Enter	length of	ref. string :	20	
Enter	reference	string :		
1 2 3	4 2 1 5 6	2 1 2 3 7 6 3	2	1	2	3	6
Enter	number of	frames : 5					

Ref. str  Page frames
1	    1	-1	-1	-1	-1
2	    1	2	-1	-1	-1
3	    1	2	3	-1	-1
4	    1	2	3	4	-1
2					
1					
5	    1	2	3	4	5
6	    6	2	3	4	5
2					
1	    6	1	3	4	5
2	    6	1	2	4	5
3	    6	1	2	3	5
7	        6	1	2	3	7
6	
3	
2	
1	
2	
3	
6	

Total no. of page faults : 10
`,
    },
    PSNM : {

        practicals: {
            
        },

        assignments: {
            "CHAPTER 1": `${process.env.REACT_APP_PSNM_CHAPTER1_URL}`,
            "CHAPTER 2": `${process.env.REACT_APP_PSNM_CHAPTER2_URL}`,
            "CHAPTER 4": `${process.env.REACT_APP_PSNM_CHAPTER4_URL}`,
            "CHAPTER 5": `${process.env.REACT_APP_PSNM_CHAPTER5_URL}`,
            "CHAPTER 7": `${process.env.REACT_APP_PSNM_CHAPTER7_URL}`,
        },

    },
    POM : {

        assignments: {
        "ASSIGNMENT 1": `${process.env.REACT_APP_POM_ASSIGNMENT_URL}`,
        }

    },
    CN : {

        assignments: {
        "ASSIGNMENT 1": `${process.env.REACT_APP_CN_ASSIGNMENT1_URL}`,        
        "ASSIGNMENT 2": `${process.env.REACT_APP_CN_ASSIGNMENT2_URL}`,        
        "ASSIGNMENT 3": `${process.env.REACT_APP_CN_ASSIGNMENT3_URL}`,
        }

    },
    AJP : {
        Practical1: `
1 Create a simple calculator application using Swing in Java

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class Calculator extends JFrame implements ActionListener {
    private JTextField display;
    private JButton[] numberButtons;
    private JButton[] functionButtons;
    private JButton addButton, subButton, mulButton, divButton, decButton, equButton, delButton, clrButton;
    private JPanel panel;

    private Font font = new Font("Arial", Font.PLAIN, 20);

    private double num1 = 0, num2 = 0, result = 0;
    private char operator;

    public Calculator() {
        setTitle("Calculator");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(420, 550);
        setLayout(null);

        display = new JTextField();
        display.setBounds(50, 25, 300, 50);
        display.setFont(font);
        display.setEditable(false);
        add(display);

        addButton = new JButton("+");
        subButton = new JButton("-");
        mulButton = new JButton("*");
        divButton = new JButton("/");
        decButton = new JButton(".");
        equButton = new JButton("=");
        delButton = new JButton("Del");
        clrButton = new JButton("Clr");

        functionButtons = new JButton[8];
        functionButtons[0] = addButton;
        functionButtons[1] = subButton;
        functionButtons[2] = mulButton;
        functionButtons[3] = divButton;
        functionButtons[4] = decButton;
        functionButtons[5] = equButton;
        functionButtons[6] = delButton;
        functionButtons[7] = clrButton;

        for (int i = 0; i < 8; i++) {
            functionButtons[i].addActionListener(this);
            functionButtons[i].setFont(font);
            functionButtons[i].setFocusable(false);
        }

        numberButtons = new JButton[10];
        for (int i = 0; i < 10; i++) {
            numberButtons[i] = new JButton(String.valueOf(i));
            numberButtons[i].addActionListener(this);
            numberButtons[i].setFont(font);
            numberButtons[i].setFocusable(false);
        }

        delButton.setBounds(50, 430, 145, 50);
        clrButton.setBounds(205, 430, 145, 50);

        panel = new JPanel();
        panel.setBounds(50, 100, 300, 300);
        panel.setLayout(new GridLayout(4, 4, 10, 10));

        panel.add(numberButtons[1]);
        panel.add(numberButtons[2]);
        panel.add(numberButtons[3]);
        panel.add(addButton);
        panel.add(numberButtons[4]);
        panel.add(numberButtons[5]);
        panel.add(numberButtons[6]);
        panel.add(subButton);
        panel.add(numberButtons[7]);
        panel.add(numberButtons[8]);
        panel.add(numberButtons[9]);
        panel.add(mulButton);
        panel.add(decButton);
        panel.add(numberButtons[0]);
        panel.add(equButton);
        panel.add(divButton);

        add(panel);
        add(delButton);
        add(clrButton);

        setVisible(true);
    }

    public static void main(String[] args) {
        new Calculator();
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        for (int i = 0; i < 10; i++) {
            if (e.getSource() == numberButtons[i]) {
                display.setText(display.getText().concat(String.valueOf(i)));
            }
        }
        if (e.getSource() == decButton) {
            display.setText(display.getText().concat("."));
        }
        if (e.getSource() == addButton) {
            num1 = Double.parseDouble(display.getText());
            operator = '+';
            display.setText("");
        }
        if (e.getSource() == subButton) {
            num1 = Double.parseDouble(display.getText());
            operator = '-';
            display.setText("");
        }
        if (e.getSource() == mulButton) {
            num1 = Double.parseDouble(display.getText());
            operator = '*';
            display.setText("");
        }
        if (e.getSource() == divButton) {
            num1 = Double.parseDouble(display.getText());
            operator = '/';
            display.setText("");
        }
        if (e.getSource() == equButton) {
            num2 = Double.parseDouble(display.getText());

            switch (operator) {
                case '+' -> result = num1 + num2;
                case '-' -> result = num1 - num2;
                case '*' -> result = num1 * num2;
                case '/' -> result = num1 / num2;
            }
            display.setText(String.valueOf(result));
            num1 = result;
        }
        if (e.getSource() == clrButton) {
            display.setText("");
        }
        if (e.getSource() == delButton) {
            String string = display.getText();
            display.setText("");
            for (int i = 0; i < string.length() - 1; i++) {
                display.setText(display.getText() + string.charAt(i));
            }
        }
    }
}
            `,
            Practical2:`
2 Implement Student information system using JDBC

CREATE DATABASE StudentDB;

USE StudentDB;

CREATE TABLE Students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    age INT,
    grade VARCHAR(10)
);


import java.sql.*;
import java.util.Scanner;

public class StudentInformationSystem {

    // Database URL, username, and password
    static final String DB_URL = "jdbc:mysql://localhost:3306/StudentDB";
    static final String USER = "root";
    static final String PASS = "password"; // replace with your MySQL password

    public static void main(String[] args) {
        try (Connection conn = DriverManager.getConnection(DB_URL, USER, PASS)) {
            System.out.println("Connected to the database successfully!");

            // Creating a Scanner object for user input
            Scanner scanner = new Scanner(System.in);

            while (true) {
                System.out.println("\n--- Student Information System ---");
                System.out.println("1. Add Student");
                System.out.println("2. View All Students");
                System.out.println("3. Update Student");
                System.out.println("4. Delete Student");
                System.out.println("5. Exit");
                System.out.print("Enter your choice: ");
                
                int choice = scanner.nextInt();
                scanner.nextLine(); // Consume newline

                switch (choice) {
                    case 1:
                        addStudent(conn, scanner);
                        break;
                    case 2:
                        viewAllStudents(conn);
                        break;
                    case 3:
                        updateStudent(conn, scanner);
                        break;
                    case 4:
                        deleteStudent(conn, scanner);
                        break;
                    case 5:
                        System.out.println("Exiting the system.");
                        return;
                    default:
                        System.out.println("Invalid choice. Please try again.");
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    private static void addStudent(Connection conn, Scanner scanner) throws SQLException {
        System.out.print("Enter student name: ");
        String name = scanner.nextLine();
        System.out.print("Enter student age: ");
        int age = scanner.nextInt();
        System.out.print("Enter student grade: ");
        String grade = scanner.next();

        String sql = "INSERT INTO Students (name, age, grade) VALUES (?, ?, ?)";
        try (PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setString(1, name);
            pstmt.setInt(2, age);
            pstmt.setString(3, grade);
            pstmt.executeUpdate();
            System.out.println("Student added successfully!");
        }
    }

    private static void viewAllStudents(Connection conn) throws SQLException {
        String sql = "SELECT * FROM Students";
        try (Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {

            System.out.println("\n--- Student List ---");
            while (rs.next()) {
                System.out.println("ID: " + rs.getInt("id"));
                System.out.println("Name: " + rs.getString("name"));
                System.out.println("Age: " + rs.getInt("age"));
                System.out.println("Grade: " + rs.getString("grade"));
                System.out.println();
            }
        }
    }

    private static void updateStudent(Connection conn, Scanner scanner) throws SQLException {
        System.out.print("Enter the student ID to update: ");
        int id = scanner.nextInt();
        scanner.nextLine(); // Consume newline
        System.out.print("Enter new student name: ");
        String name = scanner.nextLine();
        System.out.print("Enter new student age: ");
        int age = scanner.nextInt();
        System.out.print("Enter new student grade: ");
        String grade = scanner.next();

        String sql = "UPDATE Students SET name = ?, age = ?, grade = ? WHERE id = ?";
        try (PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setString(1, name);
            pstmt.setInt(2, age);
            pstmt.setString(3, grade);
            pstmt.setInt(4, id);
            int rowsAffected = pstmt.executeUpdate();
            if (rowsAffected > 0) {
                System.out.println("Student updated successfully!");
            } else {
                System.out.println("Student with ID " + id + " not found.");
            }
        }
    }

    private static void deleteStudent(Connection conn, Scanner scanner) throws SQLException {
        System.out.print("Enter the student ID to delete: ");
        int id = scanner.nextInt();

        String sql = "DELETE FROM Students WHERE id = ?";
        try (PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setInt(1, id);
            int rowsAffected = pstmt.executeUpdate();
            if (rowsAffected > 0) {
                System.out.println("Student deleted successfully!");
            } else {
                System.out.println("Student with ID " + id + " not found.");
            }
        }
    }
}
            `,
            Practical3:`
3   a. Create chat application using TCP protocol.
    b. Create chat application using UDP protocol.

Part A: Chat Application using TCP

TCP Server Code (TCPChatServer.java)

import java.io.*;
import java.net.*;

public class TCPChatServer {
    public static void main(String[] args) {
        try (ServerSocket serverSocket = new ServerSocket(12345)) {
            System.out.println("Server started. Waiting for a client...");

            try (Socket clientSocket = serverSocket.accept();
                 BufferedReader in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
                 PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true);
                 BufferedReader stdIn = new BufferedReader(new InputStreamReader(System.in))) {

                System.out.println("Client connected!");

                Thread sendThread = new Thread(() -> {
                    String serverMessage;
                    try {
                        while ((serverMessage = stdIn.readLine()) != null) {
                            out.println("Server: " + serverMessage);
                        }
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                });

                Thread receiveThread = new Thread(() -> {
                    String clientMessage;
                    try {
                        while ((clientMessage = in.readLine()) != null) {
                            System.out.println(clientMessage);
                        }
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                });

                sendThread.start();
                receiveThread.start();

                sendThread.join();
                receiveThread.join();

            } catch (IOException | InterruptedException e) {
                e.printStackTrace();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

TCP Client Code (TCPChatClient.java)

import java.io.*;
import java.net.*;

public class TCPChatClient {
    public static void main(String[] args) {
        String serverAddress = "localhost"; // or the server's IP address
        int serverPort = 12345;

        try (Socket socket = new Socket(serverAddress, serverPort);
             BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
             PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
             BufferedReader stdIn = new BufferedReader(new InputStreamReader(System.in))) {

            System.out.println("Connected to the server!");

            Thread sendThread = new Thread(() -> {
                String clientMessage;
                try {
                    while ((clientMessage = stdIn.readLine()) != null) {
                        out.println("Client: " + clientMessage);
                    }
                } catch (IOException e) {
                    e.printStackTrace();
                }
            });

            Thread receiveThread = new Thread(() -> {
                String serverMessage;
                try {
                    while ((serverMessage = in.readLine()) != null) {
                        System.out.println(serverMessage);
                    }
                } catch (IOException e) {
                    e.printStackTrace();
                }
            });

            sendThread.start();
            receiveThread.start();

            sendThread.join();
            receiveThread.join();

        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }
}

Part B: Chat Application using UDP

UDP Server Code (UDPChatServer.java)

import java.net.*;

public class UDPChatServer {
    public static void main(String[] args) {
        try (DatagramSocket serverSocket = new DatagramSocket(9876)) {
            byte[] receiveBuffer = new byte[1024];
            byte[] sendBuffer;

            System.out.println("Server is running and waiting for client messages...");

            while (true) {
                DatagramPacket receivePacket = new DatagramPacket(receiveBuffer, receiveBuffer.length);
                serverSocket.receive(receivePacket);

                String clientMessage = new String(receivePacket.getData(), 0, receivePacket.getLength());
                System.out.println("Client: " + clientMessage);

                InetAddress clientAddress = receivePacket.getAddress();
                int clientPort = receivePacket.getPort();

                String serverResponse = "Server: " + clientMessage;
                sendBuffer = serverResponse.getBytes();

                DatagramPacket sendPacket = new DatagramPacket(sendBuffer, sendBuffer.length, clientAddress, clientPort);
                serverSocket.send(sendPacket);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

UDP Client Code (UDPChatClient.java)

import java.net.*;
import java.io.*;

public class UDPChatClient {
    public static void main(String[] args) {
        String serverAddress = "localhost"; // or the server's IP address
        int serverPort = 9876;

        try (DatagramSocket clientSocket = new DatagramSocket();
             BufferedReader stdIn = new BufferedReader(new InputStreamReader(System.in))) {

            byte[] sendBuffer;
            byte[] receiveBuffer = new byte[1024];

            InetAddress serverIPAddress = InetAddress.getByName(serverAddress);

            while (true) {
                System.out.print("You: ");
                String clientMessage = stdIn.readLine();

                sendBuffer = clientMessage.getBytes();
                DatagramPacket sendPacket = new DatagramPacket(sendBuffer, sendBuffer.length, serverIPAddress, serverPort);
                clientSocket.send(sendPacket);

                DatagramPacket receivePacket = new DatagramPacket(receiveBuffer, receiveBuffer.length);
                clientSocket.receive(receivePacket);

                String serverMessage = new String(receivePacket.getData(), 0, receivePacket.getLength());
                System.out.println(serverMessage);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
            `,
            Practical4:`
4 Develop an EJB application to store and retrieve the student record.

CREATE DATABASE StudentDB;

USE StudentDB;

CREATE TABLE Students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    age INT,
    grade VARCHAR(10)
);

// Create the EJB Components

package com.example.ejb.entity;

import java.io.Serializable;
import javax.persistence.*;

@Entity
@Table(name = "Students")
public class Student implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private int age;
    private String grade;

    // Getters and setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }
}

// Create the Session Bean

package com.example.ejb.session;

import com.example.ejb.entity.Student;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Stateless
public class StudentBean {

    @PersistenceContext(unitName = "StudentPU")
    private EntityManager em;

    public void addStudent(Student student) {
        em.persist(student);
    }

    public List<Student> getAllStudents() {
        return em.createQuery("SELECT s FROM Student s", Student.class).getResultList();
    }

    public Student getStudent(int id) {
        return em.find(Student.class, id);
    }

    public void updateStudent(Student student) {
        em.merge(student);
    }

    public void deleteStudent(int id) {
        Student student = getStudent(id);
        if (student != null) {
            em.remove(student);
        }
    }
}

// Develop the Client Application

package com.example.ejb.client;

import com.example.ejb.entity.Student;
import com.example.ejb.session.StudentBean;
import javax.ejb.EJB;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

@WebServlet("/StudentServlet")
public class StudentServlet extends HttpServlet {

    @EJB
    private StudentBean studentBean;

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        out.println("<html><body>");
        out.println("<h1>Student Records</h1>");

        List<Student> students = studentBean.getAllStudents();
        for (Student student : students) {
            out.println("<p>ID: " + student.getId() + ", Name: " + student.getName() + ", Age: " + student.getAge() + ", Grade: " + student.getGrade() + "</p>");
        }

        out.println("</body></html>");
    }
}

// Configuration and Deployment

// 1 Configure Persistence:

<?xml version="1.0" encoding="UTF-8"?>
<persistence xmlns="https://jakarta.ee/xml/ns/persistence" version="3.0">
    <persistence-unit name="StudentPU" transaction-type="JTA">
        <jta-data-source>jdbc/StudentDB</jta-data-source>
        <class>com.example.ejb.entity.Student</class>
        <properties>
            <property name="jakarta.persistence.schema-generation.database.action" value="create"/>
        </properties>
    </persistence-unit>
</persistence>

// 2 Database Configuration:

<Resource id="jdbc/StudentDB" type="DataSource">
    JdbcDriver = com.mysql.cj.jdbc.Driver
    JdbcUrl = jdbc:mysql://localhost:3306/StudentDB
    UserName = root
    Password = yourpassword
</Resource>


// Running the Application
// Start the application server.
// Access the servlet (e.g., http://localhost:8080/StudentEJBApp/StudentServlet) in a browser to view the student records.
            `,
            Practical5:`
5   a) Write a Servlet to display “Welcome to LDRP” on browser.
    b) Write a Servlet that will fetch the header information and parameter values from the header and print it on the webpage
    c) Create a Servlet that implements ServletContextAttributeListener interface such that a message dialog is displayed whenever an attribute is added or removed or replaced.

Part A: Servlet to Display "Welcome to LDRP"

WelcomeServlet.java

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/welcome")
public class WelcomeServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html");
        response.getWriter().println("<h1>Welcome to LDRP</h1>");
    }
}

Part B: Servlet to Fetch and Display Header Information

HeaderInfoServlet.java

import java.io.IOException;
import java.util.Enumeration;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/header-info")
public class HeaderInfoServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html");

        // Get the PrintWriter object to write the response
        PrintWriter out = response.getWriter();
        out.println("<html><body>");

        out.println("<h2>Header Information</h2>");
        // Enumerate and print all header names and values
        Enumeration<String> headerNames = request.getHeaderNames();
        while (headerNames.hasMoreElements()) {
            String headerName = headerNames.nextElement();
            String headerValue = request.getHeader(headerName);
            out.println("<p>" + headerName + ": " + headerValue + "</p>");
        }

        out.println("<h2>Parameter Values</h2>");
        // Enumerate and print all parameter names and values
        Enumeration<String> parameterNames = request.getParameterNames();
        while (parameterNames.hasMoreElements()) {
            String paramName = parameterNames.nextElement();
            String paramValue = request.getParameter(paramName);
            out.println("<p>" + paramName + ": " + paramValue + "</p>");
        }

        out.println("</body></html>");
    }
}

Part C: Servlet to Implement ServletContextAttributeListener

ContextAttributeListener.java

import javax.servlet.ServletContextAttributeEvent;
import javax.servlet.ServletContextAttributeListener;
import javax.servlet.annotation.WebListener;

@WebListener
public class ContextAttributeListener implements ServletContextAttributeListener {

    @Override
    public void attributeAdded(ServletContextAttributeEvent event) {
        System.out.println("Attribute added: " + event.getName() + " = " + event.getValue());
    }

    @Override
    public void attributeRemoved(ServletContextAttributeEvent event) {
        System.out.println("Attribute removed: " + event.getName());
    }

    @Override
    public void attributeReplaced(ServletContextAttributeEvent event) {
        System.out.println("Attribute replaced: " + event.getName() + " = " + event.getValue());
    }
}

AttributeServlet.java

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/attribute")
public class AttributeServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html");

        // Modify context attributes to trigger listener methods
        getServletContext().setAttribute("attr1", "value1");
        getServletContext().setAttribute("attr1", "value2");
        getServletContext().removeAttribute("attr1");

        response.getWriter().println("<h1>ServletContext Attributes Modified</h1>");
    }
}
            `,
            Practical6:`
6 Write a servlet that counts the number of times that web page is visited and displays the same information on that page.

VisitCounterServlet.java

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/visit-counter")
public class VisitCounterServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Override
    public void init() throws ServletException {
        // Initialize the visit counter to zero if not already set
        if (getServletContext().getAttribute("visitCounter") == null) {
            getServletContext().setAttribute("visitCounter", 0);
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // Get the visit counter from the ServletContext
        Integer visitCounter = (Integer) getServletContext().getAttribute("visitCounter");

        // Increment the counter
        visitCounter++;

        // Update the counter in the ServletContext
        getServletContext().setAttribute("visitCounter", visitCounter);

        // Set the response content type
        response.setContentType("text/html");

        // Display the visit count
        response.getWriter().println("<html>");
        response.getWriter().println("<head><title>Visit Counter</title></head>");
        response.getWriter().println("<body>");
        response.getWriter().println("<h1>Welcome to the Visit Counter Servlet!</h1>");
        response.getWriter().println("<p>This page has been visited " + visitCounter + " times.</p>");
        response.getWriter().println("</body>");
        response.getWriter().println("</html>");
    }
}
            `,
            Practical7:`
7 Assume that the information regarding the salary and age for all employees of an organization are available in a database. Develop a Servlet application which takes the employee id of an employee as a request parameter and displays the marksheet for the student.

CREATE DATABASE CompanyDB;

USE CompanyDB;

CREATE TABLE Employees (
    emp_id INT PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    salary DECIMAL(10, 2)
);

-- Insert sample data
INSERT INTO Employees (emp_id, name, age, salary) VALUES (1, 'Alice', 30, 75000.00);
INSERT INTO Employees (emp_id, name, age, salary) VALUES (2, 'Bob', 45, 85000.00);
INSERT INTO Employees (emp_id, name, age, salary) VALUES (3, 'Charlie', 25, 55000.00);

EmployeeInfoServlet.java

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/employee-info")
public class EmployeeInfoServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    // JDBC URL, username, password - modify as per your database configuration
    private static final String JDBC_URL = "jdbc:mysql://localhost:3306/CompanyDB";
    private static final String JDBC_USER = "root";
    private static final String JDBC_PASS = "yourpassword";

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // Set the response content type
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        // Retrieve the employee ID from the request parameters
        String empIdParam = request.getParameter("emp_id");
        if (empIdParam == null || empIdParam.isEmpty()) {
            out.println("<h2>Error: Employee ID is missing!</h2>");
            return;
        }

        int empId = Integer.parseInt(empIdParam);

        // JDBC connection and query
        try {
            // Load the JDBC driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Establish the connection
            Connection conn = DriverManager.getConnection(JDBC_URL, JDBC_USER, JDBC_PASS);

            // Prepare the SQL query
            String sql = "SELECT name, age, salary FROM Employees WHERE emp_id = ?";
            PreparedStatement stmt = conn.prepareStatement(sql);
            stmt.setInt(1, empId);

            // Execute the query
            ResultSet rs = stmt.executeQuery();

            // Process the result set
            if (rs.next()) {
                String name = rs.getString("name");
                int age = rs.getInt("age");
                double salary = rs.getDouble("salary");

                // Display the employee information
                out.println("<html>");
                out.println("<head><title>Employee Information</title></head>");
                out.println("<body>");
                out.println("<h1>Employee Information</h1>");
                out.println("<p>Employee ID: " + empId + "</p>");
                out.println("<p>Name: " + name + "</p>");
                out.println("<p>Age: " + age + "</p>");
                out.println("<p>Salary: $" + salary + "</p>");
                out.println("</body>");
                out.println("</html>");
            } else {
                out.println("<h2>No employee found with ID: " + empId + "</h2>");
            }

            // Close the resources
            rs.close();
            stmt.close();
            conn.close();

        } catch (Exception e) {
            e.printStackTrace();
            out.println("<h2>Error: Unable to retrieve employee information</h2>");
        }
    }
}

web.xml

<web-app>
    <servlet>
        <servlet-name>EmployeeInfoServlet</servlet-name>
        <servlet-class>EmployeeInfoServlet</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>EmployeeInfoServlet</servlet-name>
        <url-pattern>/employee-info</url-pattern>
    </servlet-mapping>
</web-app>
            `,
            Practical8:`
8 Write a Servlet for an online shopping website, where the customer registers himself with his name and email- id. The continue button will be available on that page and each subsequent page, which displays the list of items. The customer will choose the items and the required quantity. In last webpage the customer’s name, email id, the list of his purchased items and the bill amount is shown. The students are advised to make the use of cookies.

RegistrationServlet.java

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/register")
public class RegistrationServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // Get name and email from request parameters
        String name = request.getParameter("name");
        String email = request.getParameter("email");

        // Create cookies for name and email
        Cookie nameCookie = new Cookie("name", name);
        Cookie emailCookie = new Cookie("email", email);

        // Set cookie duration (in seconds, here it's 1 day)
        nameCookie.setMaxAge(24 * 60 * 60);
        emailCookie.setMaxAge(24 * 60 * 60);

        // Add cookies to the response
        response.addCookie(nameCookie);
        response.addCookie(emailCookie);

        // Redirect to the items list page
        response.sendRedirect("items");
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html");
        response.getWriter().println("<html>");
        response.getWriter().println("<head><title>Register</title></head>");
        response.getWriter().println("<body>");
        response.getWriter().println("<h1>Register</h1>");
        response.getWriter().println("<form action='register' method='POST'>");
        response.getWriter().println("Name: <input type='text' name='name' required><br>");
        response.getWriter().println("Email: <input type='email' name='email' required><br>");
        response.getWriter().println("<input type='submit' value='Continue'>");
        response.getWriter().println("</form>");
        response.getWriter().println("</body>");
        response.getWriter().println("</html>");
    }
}

ItemsServlet.java

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/items")
public class ItemsServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html");
        response.getWriter().println("<html>");
        response.getWriter().println("<head><title>Select Items</title></head>");
        response.getWriter().println("<body>");
        response.getWriter().println("<h1>Select Items</h1>");
        response.getWriter().println("<form action='summary' method='POST'>");

        // Display a list of items
        String[] items = {"Item1", "Item2", "Item3", "Item4"};
        for (String item : items) {
            response.getWriter().println(item + ": <input type='number' name='" + item + "' value='0' min='0'><br>");
        }

        response.getWriter().println("<input type='submit' value='Continue'>");
        response.getWriter().println("</form>");
        response.getWriter().println("</body>");
        response.getWriter().println("</html>");
    }
}

SummaryServlet.java

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/summary")
public class SummaryServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // Retrieve name and email from cookies
        String name = null;
        String email = null;
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if (cookie.getName().equals("name")) {
                    name = cookie.getValue();
                }
                if (cookie.getName().equals("email")) {
                    email = cookie.getValue();
                }
            }
        }

        // Calculate the total bill
        double total = 0;
        StringBuilder itemsList = new StringBuilder();
        String[] items = {"Item1", "Item2", "Item3", "Item4"};
        double[] prices = {10.0, 20.0, 30.0, 40.0};  // Prices for each item
        for (int i = 0; i < items.length; i++) {
            String quantityStr = request.getParameter(items[i]);
            int quantity = Integer.parseInt(quantityStr != null ? quantityStr : "0");
            if (quantity > 0) {
                double itemTotal = quantity * prices[i];
                total += itemTotal;
                itemsList.append(items[i]).append(": ").append(quantity).append(" (Total: $").append(itemTotal).append(")<br>");
            }
        }

        // Display the summary
        response.setContentType("text/html");
        response.getWriter().println("<html>");
        response.getWriter().println("<head><title>Order Summary</title></head>");
        response.getWriter().println("<body>");
        response.getWriter().println("<h1>Order Summary</h1>");
        response.getWriter().println("<p>Name: " + name + "</p>");
        response.getWriter().println("<p>Email: " + email + "</p>");
        response.getWriter().println("<h2>Purchased Items:</h2>");
        response.getWriter().println("<p>" + itemsList.toString() + "</p>");
        response.getWriter().println("<h3>Total Bill: $" + total + "</h3>");
        response.getWriter().println("</body>");
        response.getWriter().println("</html>");
    }
}
            `,
            Practical9:`
9 Create a servlet filter that adds the request processing time in the response page.

RequestTimingFilter.java

import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;

@WebFilter("/*") // This filter applies to all URLs
public class RequestTimingFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        // Initialization code, if needed
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        // Get the start time
        long startTime = System.currentTimeMillis();

        // Pass the request along the filter chain
        chain.doFilter(request, response);

        // Get the end time
        long endTime = System.currentTimeMillis();

        // Calculate the processing time
        long duration = endTime - startTime;

        // Add the processing time to the response
        response.getWriter().println("<br><hr><p>Request processed in " + duration + " ms</p>");
    }

    @Override
    public void destroy() {
        // Cleanup code, if needed
    }
}

web.xml

<web-app>
    <!-- Filter Definition -->
    <filter>
        <filter-name>RequestTimingFilter</filter-name>
        <filter-class>RequestTimingFilter</filter-class>
    </filter>

    <!-- Filter Mapping -->
    <filter-mapping>
        <filter-name>RequestTimingFilter</filter-name>
        <url-pattern>/*</url-pattern>
    </filter-mapping>
</web-app>
            `,
            Practical10:`
10 Create a Login application using servlet and JSP, where the user will provide his login details in a servlet page and if the login is successful then, a JSP page with “Welcome” message and “Log Out” button should be shown. If the login is failed, then message of failure and link to further login should be shown on a JSP page. If the failure count reaches to 3 then the webpage should be closed. The students are advised to make use of session tracing mechanisms.

LoginServlet.java

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/login")
public class LoginServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    // Dummy credentials for demonstration
    private static final String USERNAME = "user";
    private static final String PASSWORD = "password";

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // Get username and password from the request
        String username = request.getParameter("username");
        String password = request.getParameter("password");

        // Get the session and initialize the login attempt count if not already set
        HttpSession session = request.getSession(true);
        Integer attemptCount = (Integer) session.getAttribute("attemptCount");
        if (attemptCount == null) {
            attemptCount = 0;
        }

        // Check the credentials
        if (USERNAME.equals(username) && PASSWORD.equals(password)) {
            // Successful login
            session.setAttribute("username", username);
            session.setAttribute("attemptCount", 0); // Reset attempt count
            response.sendRedirect("welcome.jsp");
        } else {
            // Failed login
            attemptCount++;
            session.setAttribute("attemptCount", attemptCount);

            if (attemptCount >= 3) {
                // Invalidate the session after 3 failed attempts
                session.invalidate();
                response.sendRedirect("locked.jsp");
            } else {
                response.sendRedirect("failure.jsp");
            }
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // Display login form
        response.setContentType("text/html");
        response.getWriter().println("<html>");
        response.getWriter().println("<head><title>Login</title></head>");
        response.getWriter().println("<body>");
        response.getWriter().println("<h1>Login</h1>");
        response.getWriter().println("<form action='login' method='POST'>");
        response.getWriter().println("Username: <input type='text' name='username' required><br>");
        response.getWriter().println("Password: <input type='password' name='password' required><br>");
        response.getWriter().println("<input type='submit' value='Login'>");
        response.getWriter().println("</form>");
        response.getWriter().println("</body>");
        response.getWriter().println("</html>");
    }
}

welcome.jsp

<%@ page session="true" %>
<%
    String username = (String) session.getAttribute("username");
    if (username == null) {
        response.sendRedirect("login");
    }
%>
<html>
<head>
    <title>Welcome</title>
</head>
<body>
    <h1>Welcome, <%= username %>!</h1>
    <form action="logout" method="post">
        <input type="submit" value="Log Out">
    </form>
</body>
</html>

failure.jsp

<%@ page session="true" %>
<%
    Integer attemptCount = (Integer) session.getAttribute("attemptCount");
    if (attemptCount == null) {
        response.sendRedirect("login");
    }
%>
<html>
<head>
    <title>Login Failed</title>
</head>
<body>
    <h1>Login Failed</h1>
    <p>Attempt count: <%= attemptCount %></p>
    <p><a href="login">Try again</a></p>
</body>
</html>

locked.jsp

<html>
<head>
    <title>Account Locked</title>
</head>
<body>
    <h1>Too Many Failed Login Attempts</h1>
    <p>Your account has been locked due to too many failed login attempts.</p>
</body>
</html>

LogoutServlet.java

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/logout")
public class LogoutServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // Invalidate the session to log out the user
        HttpSession session = request.getSession(false);
        if (session != null) {
            session.invalidate();
        }
        response.sendRedirect("login");
    }
}

web.xml

<web-app>
    <!-- Login Servlet -->
    <servlet>
        <servlet-name>LoginServlet</servlet-name>
        <servlet-class>LoginServlet</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>LoginServlet</servlet-name>
        <url-pattern>/login</url-pattern>
    </servlet-mapping>

    <!-- Logout Servlet -->
    <servlet>
        <servlet-name>LogoutServlet</servlet-name>
        <servlet-class>LogoutServlet</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>LogoutServlet</servlet-name>
        <url-pattern>/logout</url-pattern>
    </servlet-mapping>
</web-app>
            `,
            Practical11:`
11  a) Create a web page that prints 1 to 10 using JSTL 8.2
    b) Create a custom JSP tag that prints current date and time. Use this tag into JSP page.

printNumbers.jsp

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
    <title>Print Numbers 1 to 10</title>
</head>
<body>
    <h1>Numbers from 1 to 10 using JSTL</h1>
    <ul>
        <c:forEach var="num" begin="1" end="10">
            <li>\${num}</li>
        </c:forEach>
    </ul>
</body>
</html>


DateTimeTagHandler.java

package tags;

import java.io.IOException;
import java.time.LocalDateTime;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.SimpleTagSupport;

public class DateTimeTagHandler extends SimpleTagSupport {

    @Override
    public void doTag() throws JspException, IOException {
        // Get the current date and time
        LocalDateTime currentDateTime = LocalDateTime.now();

        // Format the date and time
        String formattedDateTime = currentDateTime.toString(); // You can customize the formatting as needed

        // Get JSP writer to output the result
        JspWriter out = getJspContext().getOut();
        out.print(formattedDateTime);
    }
}

datetime.tld

<taglib xmlns="http://java.sun.com/xml/ns/javaee"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://java.sun.com/xml/ns/javaee
        http://java.sun.com/xml/ns/javaee/web-jsptaglibrary_2_1.xsd"
        version="2.1">
    <description>Custom Tags</description>
    <tlib-version>1.0</tlib-version>
    <short-name>datetime</short-name>
    <tag>
        <name>datetime</name>
        <tag-class>tags.DateTimeTagHandler</tag-class>
        <body-content>empty</body-content>
        <description>Prints current date and time</description>
    </tag>
</taglib>

currentDateTime.jsp

<%@ taglib uri="/WEB-INF/datetime.tld" prefix="dt" %>
<!DOCTYPE html>
<html>
<head>
    <title>Current Date and Time</title>
</head>
<body>
    <h1>Current Date and Time</h1>
    <p>Current date and time: <dt:datetime /></p>
</body>
</html>
            `,
            Practical12:`
12 Create a hibernate application for employee payroll system.

Employee.java

import javax.persistence.*;

@Entity
@Table(name = "employees")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "salary")
    private double salary;

    // Constructors, getters, and setters
    public Employee() {
    }

    public Employee(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", salary=" + salary +
                '}';
    }
}

hibernate.cfg.xml

<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE hibernate-configuration PUBLIC
        "-//Hibernate/Hibernate Configuration DTD 3.0//EN"
        "http://hibernate.sourceforge.net/hibernate-configuration-3.0.dtd">
<hibernate-configuration>
    <session-factory>
        <!-- Database connection settings -->
        <property name="hibernate.connection.driver_class">com.mysql.jdbc.Driver</property>
        <property name="hibernate.connection.url">jdbc:mysql://localhost:3306/your_database</property>
        <property name="hibernate.connection.username">your_username</property>
        <property name="hibernate.connection.password">your_password</property>

        <!-- JDBC connection pool settings -->
        <property name="hibernate.c3p0.min_size">5</property>
        <property name="hibernate.c3p0.max_size">20</property>
        <property name="hibernate.c3p0.timeout">300</property>
        <property name="hibernate.c3p0.max_statements">50</property>

        <!-- Hibernate dialect -->
        <property name="hibernate.dialect">org.hibernate.dialect.MySQLDialect</property>

        <!-- Enable Hibernate's automatic session context management -->
        <property name="hibernate.current_session_context_class">thread</property>

        <!-- Echo all executed SQL to stdout -->
        <property name="hibernate.show_sql">true</property>

        <!-- Drop and re-create the database schema on startup -->
        <property name="hibernate.hbm2ddl.auto">update</property>

        <!-- Entities -->
        <mapping class="com.yourpackage.Employee"/>
    </session-factory>
</hibernate-configuration>

HibernateUtil.java

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class HibernateUtil {

    private static final SessionFactory sessionFactory;

    static {
        try {
            // Create the SessionFactory from hibernate.cfg.xml
            sessionFactory = new Configuration().configure().buildSessionFactory();
        } catch (Throwable ex) {
            // Make sure you log the exception, as it might be swallowed
            System.err.println("Initial SessionFactory creation failed." + ex);
            throw new ExceptionInInitializerError(ex);
        }
    }

    public static SessionFactory getSessionFactory() {
        return sessionFactory;
    }

    public static void shutdown() {
        // Close caches and connection pools
        getSessionFactory().close();
    }
}

EmployeeDAO.java

import org.hibernate.Session;
import org.hibernate.Transaction;
import java.util.List;

public class EmployeeDAO {

    public void saveEmployee(Employee employee) {
        Transaction transaction = null;
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            // Start a transaction
            transaction = session.beginTransaction();

            // Save the employee object
            session.save(employee);

            // Commit transaction
            transaction.commit();
        } catch (Exception e) {
            if (transaction != null) {
                transaction.rollback();
            }
            e.printStackTrace();
        }
    }

    public List<Employee> getAllEmployees() {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.createQuery("FROM Employee", Employee.class).list();
        }
    }

    public Employee getEmployeeById(Long id) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.get(Employee.class, id);
        }
    }

    public void updateEmployee(Employee employee) {
        Transaction transaction = null;
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            // Start a transaction
            transaction = session.beginTransaction();

            // Update the employee object
            session.update(employee);

            // Commit transaction
            transaction.commit();
        } catch (Exception e) {
            if (transaction != null) {
                transaction.rollback();
            }
            e.printStackTrace();
        }
    }

    public void deleteEmployee(Long id) {
        Transaction transaction = null;
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            // Start a transaction
            transaction = session.beginTransaction();

            // Delete the employee object
            Employee employee = session.get(Employee.class, id);
            if (employee != null) {
                session.delete(employee);
            }

            // Commit transaction
            transaction.commit();
        } catch (Exception e) {
            if (transaction != null) {
                transaction.rollback();
            }
            e.printStackTrace();
        }
    }
}

MainApp.java

import java.util.List;

public class MainApp {

    public static void main(String[] args) {
        EmployeeDAO employeeDAO = new EmployeeDAO();

        // Create and save new employees
        Employee employee1 = new Employee("John Doe", 50000);
        Employee employee2 = new Employee("Jane Smith", 60000);

        employeeDAO.saveEmployee(employee1);
        employeeDAO.saveEmployee(employee2);

        // Display all employees
        System.out.println("Employees:");
        List<Employee> employees = employeeDAO.getAllEmployees();
        for (Employee employee : employees) {
            System.out.println(employee);
        }

        // Update an employee
        Employee employeeToUpdate = employeeDAO.getEmployeeById(1L);
        if (employeeToUpdate != null) {
            employeeToUpdate.setSalary(55000);
            employeeDAO.updateEmployee(employeeToUpdate);
            System.out.println("Employee updated: " + employeeToUpdate);
        }

        // Delete an employee
        Long employeeIdToDelete = 2L;
        employeeDAO.deleteEmployee(employeeIdToDelete);
        System.out.println("Employee deleted with id " + employeeIdToDelete);

        // Display all employees after operations
        System.out.println("Employees after operations:");
        employees = employeeDAO.getAllEmployees();
        for (Employee employee : employees) {
            System.out.println(employee);
        }

        // Shutdown Hibernate
        HibernateUtil.shutdown();
    }
}
            `,
            Practical13:`
13 Create a “Hello World” application using Spring MVC framework.

pom.xml

<project xmlns="http://maven.apache.org/POM/4.0.0" 
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
                             http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    
    <groupId>com.example</groupId>
    <artifactId>spring-mvc-hello-world</artifactId>
    <version>1.0-SNAPSHOT</version>
    
    <properties>
        <spring.version>5.3.13</spring.version>
    </properties>
    
    <dependencies>
        <!-- Spring MVC -->
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-webmvc</artifactId>
            <version>\${spring.version}</version>
        </dependency>
        
        <!-- Servlet API for Tomcat (or your preferred servlet container) -->
        <dependency>
            <groupId>javax.servlet</groupId>
            <artifactId>javax.servlet-api</artifactId>
            <version>4.0.1</version>
            <scope>provided</scope>
        </dependency>
    </dependencies>
    
    <build>
        <plugins>
            <!-- Maven Compiler Plugin -->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.8.1</version>
                <configuration>
                    <source>1.8</source>
                    <target>1.8</target>
                </configuration>
            </plugin>
            
            <!-- Maven War Plugin -->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-war-plugin</artifactId>
                <version>3.3.2</version>
            </plugin>
        </plugins>
    </build>
</project>

WebAppConfig.java

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.ViewResolverRegistry;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

@Configuration
@EnableWebMvc
@ComponentScan(basePackages = "com.example.controller")
public class WebAppConfig implements WebMvcConfigurer {

    @Override
    public void configureViewResolvers(ViewResolverRegistry registry) {
        InternalResourceViewResolver resolver = new InternalResourceViewResolver();
        resolver.setPrefix("/WEB-INF/views/");
        resolver.setSuffix(".jsp");
        registry.viewResolver(resolver);
    }
}

HelloController.java

package com.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloController {

    @RequestMapping("/")
    @ResponseBody
    public String helloWorld() {
        return "Hello, World!";
    }
}

WEB-INF/views/hello.jsp

<!DOCTYPE html>
<html>
<head>
    <title>Hello World</title>
</head>
<body>
    <h1>\${message}</h1>
</body>
</html>

web.xml

<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee
                             http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         id="WebApp_ID" version="4.0">

    <display-name>Spring MVC Hello World</display-name>

    <!-- DispatcherServlet -->
    <servlet>
        <servlet-name>dispatcher</servlet-name>
        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
        <init-param>
            <param-name>contextConfigLocation</param-name>
            <param-value>/WEB-INF/web.xml</param-value>
        </init-param>
        <load-on-startup>1</load-on-startup>
    </servlet>

    <servlet-mapping>
        <servlet-name>dispatcher</servlet-name>
        <url-pattern>/</url-pattern>
    </servlet-mapping>

</web-app>
            `,
            Practical14:`
14 Create an online appointment booking application using Spring Web MVC framework

pom.xml

<dependencies>
    <!-- Spring MVC -->
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-webmvc</artifactId>
        <version>5.3.13</version>
    </dependency>

    <!-- Spring ORM support -->
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-orm</artifactId>
        <version>5.3.13</version>
    </dependency>

    <!-- Hibernate ORM -->
    <dependency>
        <groupId>org.hibernate</groupId>
        <artifactId>hibernate-core</artifactId>
        <version>5.5.7.Final</version>
    </dependency>

    <!-- MySQL Connector/J -->
    <dependency>
        <groupId>mysql</groupId>
        <artifactId>mysql-connector-java</artifactId>
        <version>8.0.28</version>
    </dependency>

    <!-- Servlet API for Tomcat (or your preferred servlet container) -->
    <dependency>
        <groupId>javax.servlet</groupId>
        <artifactId>javax.servlet-api</artifactId>
        <version>4.0.1</version>
        <scope>provided</scope>
    </dependency>

    <!-- JSP API -->
    <dependency>
        <groupId>javax.servlet.jsp</groupId>
        <artifactId>javax.servlet.jsp-api</artifactId>
        <version>2.3.3</version>
        <scope>provided</scope>
    </dependency>
</dependencies>

WebAppConfig.java

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.ViewResolverRegistry;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

import javax.sql.DataSource;
import java.util.Properties;

@Configuration
@EnableWebMvc
@EnableTransactionManagement
@ComponentScan(basePackages = "com.example")
public class WebAppConfig implements WebMvcConfigurer {

    @Bean
    public DataSource dataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
        dataSource.setUrl("jdbc:mysql://localhost:3306/appointments_db");
        dataSource.setUsername("your_username");
        dataSource.setPassword("your_password");
        return dataSource;
    }

    @Bean
    public LocalSessionFactoryBean sessionFactory() {
        LocalSessionFactoryBean sessionFactory = new LocalSessionFactoryBean();
        sessionFactory.setDataSource(dataSource());
        sessionFactory.setPackagesToScan("com.example.model");
        sessionFactory.setHibernateProperties(hibernateProperties());
        return sessionFactory;
    }

    private Properties hibernateProperties() {
        Properties properties = new Properties();
        properties.setProperty("hibernate.dialect", "org.hibernate.dialect.MySQLDialect");
        properties.setProperty("hibernate.show_sql", "true");
        properties.setProperty("hibernate.hbm2ddl.auto", "update");
        return properties;
    }

    @Bean
    public InternalResourceViewResolver viewResolver() {
        InternalResourceViewResolver resolver = new InternalResourceViewResolver();
        resolver.setPrefix("/WEB-INF/views/");
        resolver.setSuffix(".jsp");
        return resolver;
    }
}

Appointment.java

package com.example.model;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "appointments")
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "patient_name", nullable = false)
    private String patientName;

    @Column(name = "doctor_name", nullable = false)
    private String doctorName;

    @Column(name = "appointment_time", nullable = false)
    private LocalDateTime appointmentTime;

    // constructors, getters, setters
}

AppointmentService.java

package com.example.service;

import com.example.model.Appointment;

import java.util.List;

public interface AppointmentService {
    void addAppointment(Appointment appointment);
    List<Appointment> getAllAppointments();
    Appointment getAppointmentById(Long id);
    void updateAppointment(Appointment appointment);
    void deleteAppointment(Long id);
}

AppointmentServiceImpl.java

package com.example.service;

import com.example.dao.AppointmentDAO;
import com.example.model.Appointment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class AppointmentServiceImpl implements AppointmentService {

    @Autowired
    private AppointmentDAO appointmentDAO;

    @Override
    public void addAppointment(Appointment appointment) {
        appointmentDAO.addAppointment(appointment);
    }

    @Override
    public List<Appointment> getAllAppointments() {
        return appointmentDAO.getAllAppointments();
    }

    @Override
    public Appointment getAppointmentById(Long id) {
        return appointmentDAO.getAppointmentById(id);
    }

    @Override
    public void updateAppointment(Appointment appointment) {
        appointmentDAO.updateAppointment(appointment);
    }

    @Override
    public void deleteAppointment(Long id) {
        appointmentDAO.deleteAppointment(id);
    }
}

AppointmentDAO.java

package com.example.dao;

import com.example.model.Appointment;

import java.util.List;

public interface AppointmentDAO {
    void addAppointment(Appointment appointment);
    List<Appointment> getAllAppointments();
    Appointment getAppointmentById(Long id);
    void updateAppointment(Appointment appointment);
    void deleteAppointment(Long id);
}

AppointmentDAOImpl.java

package com.example.dao;

import com.example.model.Appointment;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class AppointmentDAOImpl implements AppointmentDAO {

    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public void addAppointment(Appointment appointment) {
        Session session = sessionFactory.getCurrentSession();
        session.save(appointment);
    }

    @Override
    public List<Appointment> getAllAppointments() {
        Session session = sessionFactory.getCurrentSession();
        return session.createQuery("FROM Appointment", Appointment.class).list();
    }

    @Override
    public Appointment getAppointmentById(Long id) {
        Session session = sessionFactory.getCurrentSession();
        return session.get(Appointment.class, id);
    }

    @Override
    public void updateAppointment(Appointment appointment) {
        Session session = sessionFactory.getCurrentSession();
        session.update(appointment);
    }

    @Override
    public void deleteAppointment(Long id) {
        Session session = sessionFactory.getCurrentSession();
        Appointment appointment = session.get(Appointment.class, id);
        if (appointment != null) {
            session.delete(appointment);
        }
    }
}

AppointmentController.java

package com.example.controller;

import com.example.model.Appointment;
import com.example.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/appointments")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    @GetMapping("/list")
    public String listAppointments(Model model) {
        List<Appointment> appointments = appointmentService.getAllAppointments();
        model.addAttribute("appointments", appointments);
        return "appointment-list";
    }

    @GetMapping("/add")
    public String showAddForm(Model model) {
        model.addAttribute("appointment", new Appointment());
        return "appointment-form";
    }

    @PostMapping("/save")
    public String saveAppointment(@ModelAttribute("appointment") Appointment appointment) {
        appointmentService.addAppointment(appointment);
        return "redirect:/appointments/list";
    }

    // Add more mappings for update, delete, and view single appointment
}

WEB-INF/views/appointment-list.jsp

<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Appointment List</title>
</head>
<body>
    <h2>Appointment List</h2>
    <table border="1">
        <thead>
            <tr>
                <th>ID</th>
                <th>Patient Name</th>
                <th>Doctor Name</th>
                <th>Appointment Time</th>
            </tr>
        </thead>
        <tbody>
            <c:forEach items="\${appointments}" var="appointment">
                <tr>
                    <td>\${appointment.id}</td>
                    <td>\${appointment.patientName}</td>
                    <td>\${appointment.doctorName}</td>
                    <td>\${appointment.appointmentTime}</td>
                </tr>
            </c:forEach>
        </tbody>
    </table>
    <br>
    <a href="\${pageContext.request.contextPath}/appointments/add">Add New Appointment</a>
</body>
</html>

WEB-INF/views/appointment-form.jsp

<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Add Appointment</title>
</head>
<body>
    <h2>Add Appointment</h2>
    <form action="\${pageContext.request.contextPath}/appointments/save" method="post">
        <label>Patient Name:</label>
        <input type="text" name="patientName" required>
        <br><br>
        <label>Doctor Name:</label>
        <input type="text" name="doctorName" required>
        <br><br>
        <label>Appointment Time:</label>
        <input type="datetime-local" name="appointmentTime" required>
        <br><br>
        <input type="submit" value="Save">
    </form>
    <br>
    <a href="\${pageContext.request.contextPath}/appointments/list">Back to Appointment List</a>
</body>
</html>
            `,
    },
    DAA : {
        Practical1:`
1 Basics: Find out Big - Oh and Big–Omega of the function. Take necessary data like degree of the function, coefficients, etc.

C++ Implementation:

#include <iostream>
using namespace std;

// Function to demonstrate time complexity analysis
void exampleFunction(int n) {
    // Outer loop runs from 1 to n
    for (int i = 1; i <= n; i++) {
        // Inner loop runs from 1 to n
        for (int j = 1; j <= n; j++) {
            cout << i << " " << j << endl;
        }
    }
}

int main() {
    int n = 5; // Example input size
    exampleFunction(n); // Call the function with input size n
    return 0;
}

Java Implementation:

public class Example {

    // Function to demonstrate time complexity analysis
    public static void exampleFunction(int n) {
        // Outer loop runs from 1 to n
        for (int i = 1; i <= n; i++) {
            // Inner loop runs from 1 to n
            for (int j = 1; j <= n; j++) {
                System.out.println(i + " " + j);
            }
        }
    }

    public static void main(String[] args) {
        int n = 5; // Example input size
        exampleFunction(n); // Call the function with input size n
    }
}

        `,
        Practical2:`
2 Revision of Data Structures:
    Write a program to implement:
    a. A Queue
    b. A Stack
    c. A Queue using two Stacks
    d. A Stack using two Queues

C++ Implementations

a. Queue Implementation in C++

#include <iostream>
#include <queue>

using namespace std;

class Queue {
private:
    queue<int> q;

public:
    void enqueue(int item) {
        q.push(item);
    }

    int dequeue() {
        if (!q.empty()) {
            int front = q.front();
            q.pop();
            return front;
        }
        return -1; // or handle empty queue case
    }

    bool isEmpty() {
        return q.empty();
    }

    int size() {
        return q.size();
    }

    int peek() {
        if (!q.empty()) {
            return q.front();
        }
        return -1; // or handle empty queue case
    }
};

b. Stack Implementation in C++

#include <iostream>
#include <stack>

using namespace std;

class Stack {
private:
    stack<int> s;

public:
    void push(int item) {
        s.push(item);
    }

    int pop() {
        if (!s.empty()) {
            int top = s.top();
            s.pop();
            return top;
        }
        return -1; // or handle empty stack case
    }

    bool isEmpty() {
        return s.empty();
    }

    int size() {
        return s.size();
    }

    int peek() {
        if (!s.empty()) {
            return s.top();
        }
        return -1; // or handle empty stack case
    }
};

c. Queue using Two Stacks Implementation in C++

#include <iostream>
#include <stack>

using namespace std;

class QueueUsingStacks {
private:
    stack<int> s1; // For enqueue
    stack<int> s2; // For dequeue

public:
    void enqueue(int item) {
        s1.push(item);
    }

    int dequeue() {
        if (s2.empty()) {
            while (!s1.empty()) {
                s2.push(s1.top());
                s1.pop();
            }
        }

        if (!s2.empty()) {
            int front = s2.top();
            s2.pop();
            return front;
        }

        return -1; // or handle empty queue case
    }

    bool isEmpty() {
        return s1.empty() && s2.empty();
    }

    int size() {
        return s1.size() + s2.size();
    }

    int peek() {
        if (s2.empty()) {
            while (!s1.empty()) {
                s2.push(s1.top());
                s1.pop();
            }
        }

        if (!s2.empty()) {
            return s2.top();
        }

        return -1; // or handle empty queue case
    }
};

d. Stack using Two Queues Implementation in C++

#include <iostream>
#include <queue>

using namespace std;

class StackUsingQueues {
private:
    queue<int> q1; // For push
    queue<int> q2; // For pop

public:
    void push(int item) {
        q1.push(item);
    }

    int pop() {
        if (q1.empty()) {
            return -1; // or handle empty stack case
        }

        while (q1.size() > 1) {
            q2.push(q1.front());
            q1.pop();
        }

        int top = q1.front();
        q1.pop();

        // Swap q1 and q2
        swap(q1, q2);

        return top;
    }

    bool isEmpty() {
        return q1.empty();
    }

    int size() {
        return q1.size();
    }

    int peek() {
        if (q1.empty()) {
            return -1; // or handle empty stack case
        }

        while (q1.size() > 1) {
            q2.push(q1.front());
            q1.pop();
        }

        int top = q1.front();

        // Move top element to q2
        q2.push(q1.front());
        q1.pop();

        // Swap q1 and q2
        swap(q1, q2);

        return top;
    }
};

Java Implementations

a. Queue Implementation in Java

import java.util.LinkedList;
import java.util.Queue;

class Queue {
    private Queue<Integer> q;

    public Queue() {
        q = new LinkedList<>();
    }

    public void enqueue(int item) {
        q.add(item);
    }

    public int dequeue() {
        if (!q.isEmpty()) {
            return q.remove();
        }
        return -1; // or handle empty queue case
    }

    public boolean isEmpty() {
        return q.isEmpty();
    }

    public int size() {
        return q.size();
    }

    public int peek() {
        if (!q.isEmpty()) {
            return q.peek();
        }
        return -1; // or handle empty queue case
    }
}

b. Stack Implementation in Java

import java.util.Stack;

class Stack {
    private Stack<Integer> s;

    public Stack() {
        s = new Stack<>();
    }

    public void push(int item) {
        s.push(item);
    }

    public int pop() {
        if (!s.isEmpty()) {
            return s.pop();
        }
        return -1; // or handle empty stack case
    }

    public boolean isEmpty() {
        return s.isEmpty();
    }

    public int size() {
        return s.size();
    }

    public int peek() {
        if (!s.isEmpty()) {
            return s.peek();
        }
        return -1; // or handle empty stack case
    }
}

c. Queue using Two Stacks Implementation in Java

import java.util.Stack;

class QueueUsingStacks {
    private Stack<Integer> s1; // For enqueue
    private Stack<Integer> s2; // For dequeue

    public QueueUsingStacks() {
        s1 = new Stack<>();
        s2 = new Stack<>();
    }

    public void enqueue(int item) {
        s1.push(item);
    }

    public int dequeue() {
        if (s2.isEmpty()) {
            while (!s1.isEmpty()) {
                s2.push(s1.pop());
            }
        }

        if (!s2.isEmpty()) {
            return s2.pop();
        }

        return -1; // or handle empty queue case
    }

    public boolean isEmpty() {
        return s1.isEmpty() && s2.isEmpty();
    }

    public int size() {
        return s1.size() + s2.size();
    }

    public int peek() {
        if (s2.isEmpty()) {
            while (!s1.isEmpty()) {
                s2.push(s1.pop());
            }
        }

        if (!s2.isEmpty()) {
            return s2.peek();
        }

        return -1; // or handle empty queue case
    }
}

d. Stack using Two Queues Implementation in Java

import java.util.LinkedList;
import java.util.Queue;

class StackUsingQueues {
    private Queue<Integer> q1; // For push
    private Queue<Integer> q2; // For pop

    public StackUsingQueues() {
        q1 = new LinkedList<>();
        q2 = new LinkedList<>();
    }

    public void push(int item) {
        q1.add(item);
    }

    public int pop() {
        if (q1.isEmpty()) {
            return -1; // or handle empty stack case
        }

        while (q1.size() > 1) {
            q2.add(q1.remove());
        }

        int top = q1.remove();

        // Swap q1 and q2
        Queue<Integer> temp = q1;
        q1 = q2;
        q2 = temp;

        return top;
    }

    public boolean isEmpty() {
        return q1.isEmpty();
    }

    public int size() {
        return q1.size();
    }

    public int peek() {
        if (q1.isEmpty()) {
            return -1; // or handle empty stack case
        }

        while (q1.size() > 1) {
            q2.add(q1.remove());
        }

        int top = q1.remove();
        q2.add(top);

        // Swap q1 and q2
        Queue<Integer> temp = q1;
        q1 = q2;
        q2 = temp;

        return top;
    }
}
        `,
        Practical3:`
3 Some Basic Algorithms:
    Write an algorithm and find the efficiency of the same for following problems:
    a. Finding Factorial – Iterative Approach
    b. Finding Factorial – Recursive Approach
    c. Printing Fibonacci Series – Iterative Approach
    d. Printing Fibonacci Series – Recursive Approach

a. Finding Factorial – Iterative Approach

C++ Implementation:

#include <iostream>

using namespace std;

long long factorialIterative(int n) {
    long long fact = 1;
    for (int i = 1; i <= n; ++i) {
        fact *= i;
    }
    return fact;
}

int main() {
    int n = 5; // Example value for factorial calculation
    long long result = factorialIterative(n);
    cout << "Factorial of " << n << " is: " << result << endl;
    return 0;
}

Java Implementation:

public class Factorial {
    public static long factorialIterative(int n) {
        long fact = 1;
        for (int i = 1; i <= n; ++i) {
            fact *= i;
        }
        return fact;
    }

    public static void main(String[] args) {
        int n = 5; // Example value for factorial calculation
        long result = factorialIterative(n);
        System.out.println("Factorial of " + n + " is: " + result);
    }
}

b. Finding Factorial – Recursive Approach

C++ Implementation:

#include <iostream>

using namespace std;

long long factorialRecursive(int n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorialRecursive(n - 1);
}

int main() {
    int n = 5; // Example value for factorial calculation
    long long result = factorialRecursive(n);
    cout << "Factorial of " << n << " is: " << result << endl;
    return 0;
}

Java Implementation:

public class Factorial {
    public static long factorialRecursive(int n) {
        if (n <= 1) {
            return 1;
        }
        return n * factorialRecursive(n - 1);
    }

    public static void main(String[] args) {
        int n = 5; // Example value for factorial calculation
        long result = factorialRecursive(n);
        System.out.println("Factorial of " + n + " is: " + result);
    }
}

c. Printing Fibonacci Series – Iterative Approach

C++ Implementation:

#include <iostream>

using namespace std;

void fibonacciIterative(int n) {
    int a = 0, b = 1;
    cout << "Fibonacci Series up to " << n << " terms:" << endl;
    for (int i = 0; i < n; ++i) {
        cout << a << " ";
        int next = a + b;
        a = b;
        b = next;
    }
    cout << endl;
}

int main() {
    int n = 10; // Example number of Fibonacci terms to print
    fibonacciIterative(n);
    return 0;
}

Java Implementation:

public class Fibonacci {
    public static void fibonacciIterative(int n) {
        int a = 0, b = 1;
        System.out.println("Fibonacci Series up to " + n + " terms:");
        for (int i = 0; i < n; ++i) {
            System.out.print(a + " ");
            int next = a + b;
            a = b;
            b = next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        int n = 10; // Example number of Fibonacci terms to print
        fibonacciIterative(n);
    }
}

d. Printing Fibonacci Series – Recursive Approach

C++ Implementation:

#include <iostream>

using namespace std;

int fibonacciRecursive(int n) {
    if (n <= 1) {
        return n;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

void printFibonacci(int n) {
    cout << "Fibonacci Series up to " << n << " terms:" << endl;
    for (int i = 0; i < n; ++i) {
        cout << fibonacciRecursive(i) << " ";
    }
    cout << endl;
}

int main() {
    int n = 10; // Example number of Fibonacci terms to print
    printFibonacci(n);
    return 0;
}

Java Implementation:

public class Fibonacci {
    public static int fibonacciRecursive(int n) {
        if (n <= 1) {
            return n;
        }
        return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
    }

    public static void printFibonacci(int n) {
        System.out.println("Fibonacci Series up to " + n + " terms:");
        for (int i = 0; i < n; ++i) {
            System.out.print(fibonacciRecursive(i) + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        int n = 10; // Example number of Fibonacci terms to print
        printFibonacci(n);
    }
}
        `,
        Practical4:`
4 Basic Sorting and Searching Techniques:
    Design an algorithm and implement a program for:
    a. Insertion Sort
    b. Selection Sort
    c. Linear Search
    d. Radix Sort

a. Insertion Sort

C++ Implementation:

#include <iostream>
#include <vector>

using namespace std;

void insertionSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 1; i < n; ++i) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

int main() {
    vector<int> arr = {12, 11, 13, 5, 6};
    insertionSort(arr);
    cout << "Sorted array using Insertion Sort: ";
    for (int num : arr) {
        cout << num << " ";
    }
    cout << endl;
    return 0;
}

Java Implementation:

import java.util.Arrays;

public class InsertionSort {
    public static void insertionSort(int[] arr) {
        int n = arr.length;
        for (int i = 1; i < n; ++i) {
            int key = arr[i];
            int j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
    }

    public static void main(String[] args) {
        int[] arr = {12, 11, 13, 5, 6};
        insertionSort(arr);
        System.out.print("Sorted array using Insertion Sort: ");
        System.out.println(Arrays.toString(arr));
    }
}

b. Selection Sort

C++ Implementation:

#include <iostream>
#include <vector>

using namespace std;

void selectionSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n - 1; ++i) {
        int minIndex = i;
        for (int j = i + 1; j < n; ++j) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        swap(arr[i], arr[minIndex]);
    }
}

int main() {
    vector<int> arr = {64, 25, 12, 22, 11};
    selectionSort(arr);
    cout << "Sorted array using Selection Sort: ";
    for (int num : arr) {
        cout << num << " ";
    }
    cout << endl;
    return 0;
}

Java Implementation:

import java.util.Arrays;

public class SelectionSort {
    public static void selectionSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; ++i) {
            int minIndex = i;
            for (int j = i + 1; j < n; ++j) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            int temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }

    public static void main(String[] args) {
        int[] arr = {64, 25, 12, 22, 11};
        selectionSort(arr);
        System.out.print("Sorted array using Selection Sort: ");
        System.out.println(Arrays.toString(arr));
    }
}

c. Linear Search

C++ Implementation:

#include <iostream>
#include <vector>

using namespace std;

int linearSearch(vector<int>& arr, int key) {
    int n = arr.size();
    for (int i = 0; i < n; ++i) {
        if (arr[i] == key) {
            return i; // Return index if found
        }
    }
    return -1; // Return -1 if key not found
}

int main() {
    vector<int> arr = {10, 20, 30, 40, 50};
    int key = 30;
    int index = linearSearch(arr, key);
    if (index != -1) {
        cout << "Element found at index: " << index << endl;
    } else {
        cout << "Element not found" << endl;
    }
    return 0;
}

Java Implementation:

public class LinearSearch {
    public static int linearSearch(int[] arr, int key) {
        int n = arr.length;
        for (int i = 0; i < n; ++i) {
            if (arr[i] == key) {
                return i; // Return index if found
            }
        }
        return -1; // Return -1 if key not found
    }

    public static void main(String[] args) {
        int[] arr = {10, 20, 30, 40, 50};
        int key = 30;
        int index = linearSearch(arr, key);
        if (index != -1) {
            System.out.println("Element found at index: " + index);
        } else {
            System.out.println("Element not found");
        }
    }
}

d. Radix Sort

C++ Implementation:

#include <iostream>
#include <vector>

using namespace std;

// Function to find the maximum element in arr[]
int getMax(vector<int>& arr) {
    int max = arr[0];
    int n = arr.size();
    for (int i = 1; i < n; ++i) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Function to perform counting sort based on digit represented by exp
void countingSort(vector<int>& arr, int exp) {
    int n = arr.size();
    vector<int> output(n);
    vector<int> count(10, 0);

    // Store count of occurrences in count[]
    for (int i = 0; i < n; ++i) {
        count[(arr[i] / exp) % 10]++;
    }

    // Change count[i] so that count[i] now contains actual position of this digit in output[]
    for (int i = 1; i < 10; ++i) {
        count[i] += count[i - 1];
    }

    // Build the output array
    for (int i = n - 1; i >= 0; --i) {
        output[count[(arr[i] / exp) % 10] - 1] = arr[i];
        count[(arr[i] / exp) % 10]--;
    }

    // Copy the output array to arr[], so that arr[] now contains sorted numbers according to current digit
    for (int i = 0; i < n; ++i) {
        arr[i] = output[i];
    }
}

// Function to perform Radix Sort
void radixSort(vector<int>& arr) {
    int max = getMax(arr);
    for (int exp = 1; max / exp > 0; exp *= 10) {
        countingSort(arr, exp);
    }
}

int main() {
    vector<int> arr = {170, 45, 75, 90, 802, 24, 2, 66};
    radixSort(arr);
    cout << "Sorted array using Radix Sort: ";
    for (int num : arr) {
        cout << num << " ";
    }
    cout << endl;
    return 0;
}

Java Implementation:

import java.util.Arrays;

public class RadixSort {
    // Function to find the maximum element in arr[]
    static int getMax(int[] arr) {
        int max = arr[0];
        int n = arr.length;
        for (int i = 1; i < n; ++i) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }

    // Function to perform counting sort based on digit represented by exp
    static void countingSort(int[] arr, int exp) {
        int n = arr.length;
        int[] output = new int[n];
        int[] count = new int[10];

        // Store count of occurrences in count[]
        for (int i = 0; i < n; ++i) {
            count[(arr[i] / exp) % 10]++;
        }

        // Change count[i] so that count[i] now contains actual position of this digit in output[]
        for (int i = 1; i < 10; ++i) {
            count[i] += count[i - 1];
        }

        // Build the output array
        for (int i = n - 1; i >= 0; --i) {
            output[count[(arr[i] / exp) % 10] - 1] = arr[i];
            count[(arr[i] / exp) % 10]--;
        }

        // Copy the output array to arr[], so that arr[] now contains sorted numbers according to current digit
        System.arraycopy(output, 0, arr, 0, n);
    }

    // Function to perform Radix Sort
    static void radixSort(int[] arr) {
        int max = getMax(arr);
        for (int exp = 1; max / exp > 0; exp *= 10) {
            countingSort(arr, exp);
        }
    }

    public static void main(String[] args) {
        int[] arr = {170, 45, 75, 90, 802, 24, 2, 66};
        radixSort(arr);
        System.out.print("Sorted array using Radix Sort: ");
        System.out.println(Arrays.toString(arr));
    }
}
        `,
        Practical5:`
5 Divide and Conquer Approach:
    Design an algorithm and implement a program for:
    a. Quick Sort
    b. Binary Search

a. Quick Sort

C++ Implementation:

#include <iostream>
#include <vector>

using namespace std;

// Function to partition the array using the last element as pivot
int partition(vector<int>& arr, int low, int high) {
    int pivot = arr[high]; // pivot
    int i = low - 1; // Index of smaller element

    for (int j = low; j < high; ++j) {
        // If current element is smaller than or equal to pivot
        if (arr[j] <= pivot) {
            ++i; // increment index of smaller element
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return i + 1;
}

// Function to implement QuickSort
void quickSort(vector<int>& arr, int low, int high) {
    if (low < high) {
        // pi is partitioning index, arr[pi] is now at right place
        int pi = partition(arr, low, high);

        // Separately sort elements before partition and after partition
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

int main() {
    vector<int> arr = {10, 7, 8, 9, 1, 5};
    int n = arr.size();

    quickSort(arr, 0, n - 1);

    cout << "Sorted array using Quick Sort: ";
    for (int num : arr) {
        cout << num << " ";
    }
    cout << endl;

    return 0;
}

Java Implementation:

import java.util.Arrays;

public class QuickSort {
    // Function to partition the array using the last element as pivot
    static int partition(int[] arr, int low, int high) {
        int pivot = arr[high]; // pivot
        int i = low - 1; // Index of smaller element

        for (int j = low; j < high; ++j) {
            // If current element is smaller than or equal to pivot
            if (arr[j] <= pivot) {
                ++i; // increment index of smaller element
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        // swap arr[i+1] and arr[high] (or pivot)
        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
        return i + 1;
    }

    // Function to implement QuickSort
    static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            // pi is partitioning index, arr[pi] is now at right place
            int pi = partition(arr, low, high);

            // Separately sort elements before partition and after partition
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }

    public static void main(String[] args) {
        int[] arr = {10, 7, 8, 9, 1, 5};
        int n = arr.length;

        quickSort(arr, 0, n - 1);

        System.out.print("Sorted array using Quick Sort: ");
        System.out.println(Arrays.toString(arr));
    }
}

b. Binary Search

C++ Implementation:

#include <iostream>
#include <vector>

using namespace std;

// Function to perform binary search on sorted array
int binarySearch(vector<int>& arr, int key) {
    int low = 0;
    int high = arr.size() - 1;
    
    while (low <= high) {
        int mid = low + (high - low) / 2;
        
        // Check if key is present at mid
        if (arr[mid] == key) {
            return mid;
        }
        
        // If key greater, ignore left half
        if (arr[mid] < key) {
            low = mid + 1;
        }
        // If key is smaller, ignore right half
        else {
            high = mid - 1;
        }
    }
    
    // Key not found in array
    return -1;
}

int main() {
    vector<int> arr = {2, 3, 4, 10, 40};
    int key = 10;
    int index = binarySearch(arr, key);
    if (index != -1) {
        cout << "Element found at index: " << index << endl;
    } else {
        cout << "Element not found" << endl;
    }
    return 0;
}

Java Implementation:

public class BinarySearch {
    // Function to perform binary search on sorted array
    static int binarySearch(int[] arr, int key) {
        int low = 0;
        int high = arr.length - 1;

        while (low <= high) {
            int mid = low + (high - low) / 2;

            // Check if key is present at mid
            if (arr[mid] == key) {
                return mid;
            }

            // If key greater, ignore left half
            if (arr[mid] < key) {
                low = mid + 1;
            }
            // If key is smaller, ignore right half
            else {
                high = mid - 1;
            }
        }

        // Key not found in array
        return -1;
    }

    public static void main(String[] args) {
        int[] arr = {2, 3, 4, 10, 40};
        int key = 10;
        int index = binarySearch(arr, key);
        if (index != -1) {
            System.out.println("Element found at index: " + index);
        } else {
            System.out.println("Element not found");
        }
    }
}
        `,
        Practical6:`
6 Greedy Approach:
    Design an algorithm and implement a program to solve:
    a. Making Change Problem
    b. Knapsack Problem

a. Making Change Problem

C++ Implementation:

#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

vector<int> makeChange(int amount, vector<int>& denominations) {
    sort(denominations.rbegin(), denominations.rend()); // Sort in descending order
    vector<int> result;

    for (int i = 0; i < denominations.size(); ++i) {
        while (amount >= denominations[i]) {
            result.push_back(denominations[i]);
            amount -= denominations[i];
        }
    }

    return result;
}

int main() {
    vector<int> denominations = {1, 2, 5, 10, 20, 50, 100, 500, 1000};
    int amount = 93;

    vector<int> coins = makeChange(amount, denominations);

    cout << "Minimum coins needed: " << coins.size() << endl;
    cout << "Coins used: ";
    for (int coin : coins) {
        cout << coin << " ";
    }
    cout << endl;

    return 0;
}

Java Implementation:

import java.util.ArrayList;
import java.util.Collections;

public class MakingChange {
    public static ArrayList<Integer> makeChange(int amount, ArrayList<Integer> denominations) {
        Collections.sort(denominations, Collections.reverseOrder()); // Sort in descending order
        ArrayList<Integer> result = new ArrayList<>();

        for (int i = 0; i < denominations.size(); ++i) {
            while (amount >= denominations.get(i)) {
                result.add(denominations.get(i));
                amount -= denominations.get(i);
            }
        }

        return result;
    }

    public static void main(String[] args) {
        ArrayList<Integer> denominations = new ArrayList<>();
        Collections.addAll(denominations, 1, 2, 5, 10, 20, 50, 100, 500, 1000);
        int amount = 93;

        ArrayList<Integer> coins = makeChange(amount, denominations);

        System.out.println("Minimum coins needed: " + coins.size());
        System.out.print("Coins used: ");
        for (int coin : coins) {
            System.out.print(coin + " ");
        }
        System.out.println();
    }
}

b. Knapsack Problem

C++ Implementation:

#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

struct Item {
    int value;
    int weight;
    double ratio; // value-to-weight ratio
};

bool compare(Item a, Item b) {
    return a.ratio > b.ratio; // Sort in descending order of ratio
}

double knapsack(int capacity, vector<Item>& items) {
    sort(items.begin(), items.end(), compare); // Sort items by ratio

    double totalValue = 0.0;
    int currentWeight = 0;

    for (int i = 0; i < items.size(); ++i) {
        if (currentWeight + items[i].weight <= capacity) {
            totalValue += items[i].value;
            currentWeight += items[i].weight;
        } else {
            int remainingCapacity = capacity - currentWeight;
            totalValue += items[i].value * ((double) remainingCapacity / items[i].weight);
            break;
        }
    }

    return totalValue;
}

int main() {
    vector<Item> items = {{60, 10}, {100, 20}, {120, 30}};
    int capacity = 50;

    double maxValue = knapsack(capacity, items);

    cout << "Maximum value in knapsack: " << maxValue << endl;

    return 0;
}

Java Implementation:

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

public class KnapsackProblem {
    static class Item {
        int value;
        int weight;
        double ratio; // value-to-weight ratio

        Item(int value, int weight) {
            this.value = value;
            this.weight = weight;
            this.ratio = (double) value / weight;
        }
    }

    static double knapsack(int capacity, ArrayList<Item> items) {
        items.sort(Comparator.comparingDouble((Item i) -> i.ratio).reversed()); // Sort items by ratio

        double totalValue = 0.0;
        int currentWeight = 0;

        for (Item item : items) {
            if (currentWeight + item.weight <= capacity) {
                totalValue += item.value;
                currentWeight += item.weight;
            } else {
                int remainingCapacity = capacity - currentWeight;
                totalValue += item.value * ((double) remainingCapacity / item.weight);
                break;
            }
        }

        return totalValue;
    }

    public static void main(String[] args) {
        ArrayList<Item> items = new ArrayList<>();
        items.add(new Item(60, 10));
        items.add(new Item(100, 20));
        items.add(new Item(120, 30));
        int capacity = 50;

        double maxValue = knapsack(capacity, items);

        System.out.println("Maximum value in knapsack: " + maxValue);
    }
}
        `,
        Practical7:`
7 Dynamic Programming:
    Design an algorithm and implement a program to solve:
    a. Knapsack Problem
    b. Longest Common Subsequence Problem
    c. Finding Optimal Matrix Chain Order Problem

a. Knapsack Problem

C++ Implementation:

#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int knapsack(int W, vector<int>& weights, vector<int>& values, int n) {
    vector<vector<int>> dp(n + 1, vector<int>(W + 1, 0));

    for (int i = 1; i <= n; ++i) {
        for (int j = 1; j <= W; ++j) {
            if (weights[i - 1] <= j) {
                dp[i][j] = max(dp[i - 1][j], values[i - 1] + dp[i - 1][j - weights[i - 1]]);
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    return dp[n][W];
}

int main() {
    vector<int> values = {60, 100, 120};
    vector<int> weights = {10, 20, 30};
    int W = 50;
    int n = values.size();

    int maxValue = knapsack(W, weights, values, n);

    cout << "Maximum value in knapsack: " << maxValue << endl;

    return 0;
}

Java Implementation:

public class KnapsackProblem {
    static int knapsack(int W, int[] weights, int[] values, int n) {
        int[][] dp = new int[n + 1][W + 1];

        for (int i = 1; i <= n; ++i) {
            for (int j = 1; j <= W; ++j) {
                if (weights[i - 1] <= j) {
                    dp[i][j] = Math.max(dp[i - 1][j], values[i - 1] + dp[i - 1][j - weights[i - 1]]);
                } else {
                    dp[i][j] = dp[i - 1][j];
                }
            }
        }

        return dp[n][W];
    }

    public static void main(String[] args) {
        int[] values = {60, 100, 120};
        int[] weights = {10, 20, 30};
        int W = 50;
        int n = values.length;

        int maxValue = knapsack(W, weights, values, n);

        System.out.println("Maximum value in knapsack: " + maxValue);
    }
}

b. Longest Common Subsequence Problem

C++ Implementation:

#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int longestCommonSubsequence(string X, string Y) {
    int m = X.length();
    int n = Y.length();
    vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));

    for (int i = 1; i <= m; ++i) {
        for (int j = 1; j <= n; ++j) {
            if (X[i - 1] == Y[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[m][n];
}

int main() {
    string X = "ABCBDAB";
    string Y = "BDCAB";

    int lengthOfLCS = longestCommonSubsequence(X, Y);

    cout << "Length of Longest Common Subsequence: " << lengthOfLCS << endl;

    return 0;
}

Java Implementation:

public class LongestCommonSubsequence {
    static int longestCommonSubsequence(String X, String Y) {
        int m = X.length();
        int n = Y.length();
        int[][] dp = new int[m + 1][n + 1];

        for (int i = 1; i <= m; ++i) {
            for (int j = 1; j <= n; ++j) {
                if (X.charAt(i - 1) == Y.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }

        return dp[m][n];
    }

    public static void main(String[] args) {
        String X = "ABCBDAB";
        String Y = "BDCAB";

        int lengthOfLCS = longestCommonSubsequence(X, Y);

        System.out.println("Length of Longest Common Subsequence: " + lengthOfLCS);
    }
}

c. Finding Optimal Matrix Chain Order Problem

C++ Implementation:

#include <iostream>
#include <vector>
#include <climits>

using namespace std;

int matrixChainOrder(vector<int>& dims) {
    int n = dims.size() - 1; // Number of matrices
    vector<vector<int>> dp(n + 1, vector<int>(n + 1, 0));

    for (int len = 2; len <= n; ++len) {
        for (int i = 1; i <= n - len + 1; ++i) {
            int j = i + len - 1;
            dp[i][j] = INT_MAX;
            for (int k = i; k < j; ++k) {
                int cost = dp[i][k] + dp[k + 1][j] + dims[i - 1] * dims[k] * dims[j];
                if (cost < dp[i][j]) {
                    dp[i][j] = cost;
                }
            }
        }
    }

    return dp[1][n];
}

int main() {
    vector<int> dims = {10, 30, 5, 60};
    int minOperations = matrixChainOrder(dims);

    cout << "Minimum number of scalar multiplications: " << minOperations << endl;

    return 0;
}

Java Implementation:

public class MatrixChainOrder {
    static int matrixChainOrder(int[] dims) {
        int n = dims.length - 1; // Number of matrices
        int[][] dp = new int[n + 1][n + 1];

        for (int len = 2; len <= n; ++len) {
            for (int i = 1; i <= n - len + 1; ++i) {
                int j = i + len - 1;
                dp[i][j] = Integer.MAX_VALUE;
                for (int k = i; k < j; ++k) {
                    int cost = dp[i][k] + dp[k + 1][j] + dims[i - 1] * dims[k] * dims[j];
                    if (cost < dp[i][j]) {
                        dp[i][j] = cost;
                    }
                }
            }
        }

        return dp[1][n];
    }

    public static void main(String[] args) {
        int[] dims = {10, 30, 5, 60};
        int minOperations = matrixChainOrder(dims);

        System.out.println("Minimum number of scalar multiplications: " + minOperations);
    }
}
        `,
        Practical8:`
8 Graph Algorithms:
    Design an algorithm and write a program to implement:
    a. Depth First Search of a graph
    b. Breadth First Search of a graph

a. Depth First Search (DFS) of a Graph

C++ Implementation:

#include <iostream>
#include <list>
#include <vector>

using namespace std;

class Graph {
    int V; // Number of vertices
    vector<list<int>> adj; // Adjacency list

    void DFSUtil(int v, vector<bool>& visited) {
        visited[v] = true;
        cout << v << " ";

        for (int neighbor : adj[v]) {
            if (!visited[neighbor]) {
                DFSUtil(neighbor, visited);
            }
        }
    }

public:
    Graph(int V) {
        this->V = V;
        adj.resize(V);
    }

    void addEdge(int v, int w) {
        adj[v].push_back(w); // Add w to v's list
    }

    void DFS(int start) {
        vector<bool> visited(V, false);
        DFSUtil(start, visited);
    }
};

int main() {
    Graph g(4); // Graph with 4 vertices

    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 2);
    g.addEdge(2, 0);
    g.addEdge(2, 3);
    g.addEdge(3, 3);

    cout << "Depth First Traversal (starting from vertex 2): ";
    g.DFS(2);
    cout << endl;

    return 0;
}

Java Implementation:

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public class Graph {
    private int V; // Number of vertices
    private List<List<Integer>> adj; // Adjacency list

    public Graph(int V) {
        this.V = V;
        adj = new ArrayList<>(V);
        for (int i = 0; i < V; ++i) {
            adj.add(new LinkedList<>());
        }
    }

    public void addEdge(int v, int w) {
        adj.get(v).add(w); // Add w to v's list
    }

    private void DFSUtil(int v, boolean[] visited) {
        visited[v] = true;
        System.out.print(v + " ");

        for (int neighbor : adj.get(v)) {
            if (!visited[neighbor]) {
                DFSUtil(neighbor, visited);
            }
        }
    }

    public void DFS(int start) {
        boolean[] visited = new boolean[V];
        DFSUtil(start, visited);
    }

    public static void main(String[] args) {
        Graph g = new Graph(4); // Graph with 4 vertices

        g.addEdge(0, 1);
        g.addEdge(0, 2);
        g.addEdge(1, 2);
        g.addEdge(2, 0);
        g.addEdge(2, 3);
        g.addEdge(3, 3);

        System.out.print("Depth First Traversal (starting from vertex 2): ");
        g.DFS(2);
        System.out.println();
    }
}

b. Breadth First Search (BFS) of a Graph

C++ Implementation:

#include <iostream>
#include <list>
#include <queue>
#include <vector>

using namespace std;

class Graph {
    int V; // Number of vertices
    vector<list<int>> adj; // Adjacency list

public:
    Graph(int V) {
        this->V = V;
        adj.resize(V);
    }

    void addEdge(int v, int w) {
        adj[v].push_back(w); // Add w to v's list
    }

    void BFS(int start) {
        vector<bool> visited(V, false);
        queue<int> queue;

        visited[start] = true;
        queue.push(start);

        while (!queue.empty()) {
            int v = queue.front();
            cout << v << " ";
            queue.pop();

            for (int neighbor : adj[v]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }
    }
};

int main() {
    Graph g(4); // Graph with 4 vertices

    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 2);
    g.addEdge(2, 0);
    g.addEdge(2, 3);
    g.addEdge(3, 3);

    cout << "Breadth First Traversal (starting from vertex 2): ";
    g.BFS(2);
    cout << endl;

    return 0;
}

Java Implementation:

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

public class Graph {
    private int V; // Number of vertices
    private List<List<Integer>> adj; // Adjacency list

    public Graph(int V) {
        this.V = V;
        adj = new ArrayList<>(V);
        for (int i = 0; i < V; ++i) {
            adj.add(new LinkedList<>());
        }
    }

    public void addEdge(int v, int w) {
        adj.get(v).add(w); // Add w to v's list
    }

    public void BFS(int start) {
        boolean[] visited = new boolean[V];
        Queue<Integer> queue = new LinkedList<>();

        visited[start] = true;
        queue.add(start);

        while (!queue.isEmpty()) {
            int v = queue.poll();
            System.out.print(v + " ");

            for (int neighbor : adj.get(v)) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.add(neighbor);
                }
            }
        }
    }

    public static void main(String[] args) {
        Graph g = new Graph(4); // Graph with 4 vertices

        g.addEdge(0, 1);
        g.addEdge(0, 2);
        g.addEdge(1, 2);
        g.addEdge(2, 0);
        g.addEdge(2, 3);
        g.addEdge(3, 3);

        System.out.print("Breadth First Traversal (starting from vertex 2): ");
        g.BFS(2);
        System.out.println();
    }
}
        `,
        Practical9:`
9 Graph Algorithms:
    Design an algorithm and implement a program for:
    a. Kruskal’s method of finding Minimum Spanning Tree
    b. Prim’s method of finding Minimum Spanning Tree

a. Kruskal's Algorithm for Minimum Spanning Tree (MST)

C++ Implementation:

#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

struct Edge {
    int u, v, weight;
};

class Graph {
    int V; // Number of vertices
    vector<Edge> edges;

public:
    Graph(int V) {
        this->V = V;
    }

    void addEdge(int u, int v, int weight) {
        edges.push_back({u, v, weight});
    }

    // Find function of Union-Find
    int find(vector<int>& parent, int i) {
        if (parent[i] == -1)
            return i;
        return find(parent, parent[i]);
    }

    // Union function of Union-Find
    void unionSet(vector<int>& parent, int x, int y) {
        int rootX = find(parent, x);
        int rootY = find(parent, y);
        parent[rootX] = rootY;
    }

    void kruskalMST() {
        vector<Edge> result;
        // Sort edges by weight
        sort(edges.begin(), edges.end(), [](Edge& a, Edge& b) {
            return a.weight < b.weight;
        });

        vector<int> parent(V, -1);

        for (Edge edge : edges) {
            int rootU = find(parent, edge.u);
            int rootV = find(parent, edge.v);

            // If including this edge does not cause a cycle, include it in the result and Union the sets
            if (rootU != rootV) {
                result.push_back(edge);
                unionSet(parent, rootU, rootV);
            }
        }

        // Print the result MST
        cout << "Edges in Minimum Spanning Tree (Kruskal's):" << endl;
        for (Edge edge : result) {
            cout << edge.u << " - " << edge.v << " : " << edge.weight << endl;
        }
    }
};

int main() {
    Graph g(4); // Graph with 4 vertices

    g.addEdge(0, 1, 10);
    g.addEdge(0, 2, 6);
    g.addEdge(0, 3, 5);
    g.addEdge(1, 3, 15);
    g.addEdge(2, 3, 4);

    g.kruskalMST();

    return 0;
}

Java Implementation:

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

class Edge {
    int u, v, weight;

    public Edge(int u, int v, int weight) {
        this.u = u;
        this.v = v;
        this.weight = weight;
    }
}

class Graph {
    int V; // Number of vertices
    List<Edge> edges;

    public Graph(int V) {
        this.V = V;
        edges = new ArrayList<>();
    }

    public void addEdge(int u, int v, int weight) {
        edges.add(new Edge(u, v, weight));
    }

    // Find function of Union-Find
    private int find(int[] parent, int i) {
        if (parent[i] == -1)
            return i;
        return find(parent, parent[i]);
    }

    // Union function of Union-Find
    private void unionSet(int[] parent, int x, int y) {
        int rootX = find(parent, x);
        int rootY = find(parent, y);
        parent[rootX] = rootY;
    }

    public void kruskalMST() {
        List<Edge> result = new ArrayList<>();
        // Sort edges by weight
        Collections.sort(edges, Comparator.comparingInt(e -> e.weight));

        int[] parent = new int[V];
        for (int i = 0; i < V; ++i)
            parent[i] = -1;

        for (Edge edge : edges) {
            int rootU = find(parent, edge.u);
            int rootV = find(parent, edge.v);

            // If including this edge does not cause a cycle, include it in the result and Union the sets
            if (rootU != rootV) {
                result.add(edge);
                unionSet(parent, rootU, rootV);
            }
        }

        // Print the result MST
        System.out.println("Edges in Minimum Spanning Tree (Kruskal's):");
        for (Edge edge : result) {
            System.out.println(edge.u + " - " + edge.v + " : " + edge.weight);
        }
    }

    public static void main(String[] args) {
        Graph g = new Graph(4); // Graph with 4 vertices

        g.addEdge(0, 1, 10);
        g.addEdge(0, 2, 6);
        g.addEdge(0, 3, 5);
        g.addEdge(1, 3, 15);
        g.addEdge(2, 3, 4);

        g.kruskalMST();
    }
}

b. Prim's Algorithm for Minimum Spanning Tree (MST)

C++ Implementation:

#include <iostream>
#include <vector>
#include <queue>
#include <limits>

using namespace std;

class Graph {
    int V; // Number of vertices
    vector<vector<pair<int, int>>> adj; // Adjacency list (vertex, weight)

public:
    Graph(int V) {
        this->V = V;
        adj.resize(V);
    }

    void addEdge(int u, int v, int weight) {
        adj[u].push_back({v, weight});
        adj[v].push_back({u, weight}); // Undirected graph
    }

    void primMST(int start) {
        vector<int> key(V, numeric_limits<int>::max()); // To store weights of MST
        vector<int> parent(V, -1); // To store parent array
        vector<bool> inMST(V, false); // To track vertices in MST

        // Priority queue to store vertices not yet in MST
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> minHeap;

        // Start with vertex 0
        key[start] = 0;
        minHeap.push({0, start});

        while (!minHeap.empty()) {
            int u = minHeap.top().second;
            minHeap.pop();

            inMST[u] = true;

            for (auto& neighbor : adj[u]) {
                int v = neighbor.first;
                int weight = neighbor.second;

                if (!inMST[v] && weight < key[v]) {
                    key[v] = weight;
                    parent[v] = u;
                    minHeap.push({key[v], v});
                }
            }
        }

        // Print the result MST
        cout << "Edges in Minimum Spanning Tree (Prim's):" << endl;
        for (int i = 1; i < V; ++i) {
            cout << parent[i] << " - " << i << " : " << key[i] << endl;
        }
    }
};

int main() {
    Graph g(4); // Graph with 4 vertices

    g.addEdge(0, 1, 10);
    g.addEdge(0, 2, 6);
    g.addEdge(0, 3, 5);
    g.addEdge(1, 3, 15);
    g.addEdge(2, 3, 4);

    g.primMST(0); // Start from vertex 0

    return 0;
}

Java Implementation:

import java.util.ArrayList;
import java.util.List;
import java.util.PriorityQueue;

class Graph {
    private int V; // Number of vertices
    private List<List<Edge>> adj; // Adjacency list (vertex, weight)

    public Graph(int V) {
        this.V = V;
        adj = new ArrayList<>(V);
        for (int i = 0; i < V; ++i) {
            adj.add(new ArrayList<>());
        }
    }

    public void addEdge(int u, int v, int weight) {
        adj.get(u).add(new Edge(u, v, weight));
        adj.get(v).add(new Edge(v, u, weight)); // Undirected graph
    }

    public void primMST(int start) {
        int[] key = new int[V]; // To store weights of MST
        int[] parent = new int[V]; // To store parent array
        boolean[] inMST = new boolean[V]; // To track vertices in MST

        // Priority queue to store vertices not yet in MST
        PriorityQueue<Edge> minHeap = new PriorityQueue<>(V, (a, b) -> a.weight - b.weight);

        // Start with vertex 0
        for (int i = 0; i < V; ++i) {
            key[i] = Integer.MAX_VALUE;
            parent[i] = -1;
            inMST[i] = false;
        }

        key[start] = 0;
        minHeap.offer(new Edge(start, start, 0));

        while (!minHeap.isEmpty()) {
            Edge edge = minHeap.poll();
            int u = edge.v;

            if (inMST[u])
                continue;

            inMST[u] = true;

            for (Edge neighbor : adj.get(u)) {
                int v = neighbor.v;
                int weight = neighbor.weight;

                if (!inMST[v] && weight < key[v]) {
                    key[v] = weight;
                    parent[v] = u;
                    minHeap.offer(new Edge(u, v, key[v]));
                }
            }
        }

        // Print the result MST
        System.out.println("Edges in Minimum Spanning Tree (Prim's):");
        for (int i = 1; i < V; ++i) {
            System.out.println(parent[i] + " - " + i + " : " + key[i]);
        }
    }

    public static void main(String[] args) {
        Graph g = new Graph(4); // Graph with 4 vertices

        g.addEdge(0, 1, 10);
        g.addEdge(0, 2, 6);
        g.addEdge(0, 3, 5);
        g.addEdge(1, 3, 15);
        g.addEdge(2, 3, 4);

        g.primMST(0); // Start from vertex 0
    }

    static class Edge {
        int u, v, weight;

        public Edge(int u, int v, int weight) {
            this.u = u;
            this.v = v;
            this.weight = weight;
        }
    }
}
        `,
        Practical10:`
10 Design an algorithm and implement a program for The Assignment Problem in Branch and Bound

C++ Implementation:

#include <iostream>
#include <vector>
#include <queue>
#include <limits>

using namespace std;

const int INF = numeric_limits<int>::max();

class AssignmentProblem {
private:
    int N;
    vector<vector<int>> cost;
    vector<int> assignment;
    vector<bool> visited;
    int currentCost;
    int bestCost;

public:
    AssignmentProblem(vector<vector<int>>& costMatrix) {
        N = costMatrix.size();
        cost = costMatrix;
        assignment.resize(N);
        visited.assign(N, false);
        currentCost = 0;
        bestCost = INF;
    }

    int computeCost() {
        int totalCost = 0;
        for (int i = 0; i < N; ++i) {
            totalCost += cost[i][assignment[i]];
        }
        return totalCost;
    }

    int bound(int agent) {
        int minCost = 0;
        for (int i = 0; i < N; ++i) {
            if (!visited[i]) {
                minCost += cost[i][agent];
            }
        }
        return minCost;
    }

    void branchAndBound() {
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
        pq.push({0, 0}); // {bound, level}
        
        while (!pq.empty()) {
            int level = pq.top().second;
            int currentBound = pq.top().first;
            pq.pop();
            
            if (currentBound >= bestCost) {
                continue; // Prune this node
            }
            
            if (level == N) {
                bestCost = min(bestCost, currentBound);
                continue;
            }
            
            for (int j = 0; j < N; ++j) {
                if (!visited[j]) {
                    visited[j] = true;
                    assignment[level] = j;
                    
                    int currentCost = computeCost();
                    int nodeBound = currentBound + cost[level][j];
                    
                    pq.push({nodeBound, level + 1});
                    
                    visited[j] = false;
                    assignment[level] = -1;
                }
            }
        }
        
        cout << "Minimum Cost of Assignment: " << bestCost << endl;
    }
};

int main() {
    vector<vector<int>> costMatrix = {
        {10, 2, 6, 5},
        {1, 15, 8, 9},
        {8, 7, 4, 3},
        {5, 6, 8, 2}
    };

    AssignmentProblem problem(costMatrix);
    problem.branchAndBound();

    return 0;
}

Java Implementation:

import java.util.PriorityQueue;

public class AssignmentProblem {
    private int N;
    private int[][] cost;
    private int[] assignment;
    private boolean[] visited;
    private int currentCost;
    private int bestCost;

    public AssignmentProblem(int[][] costMatrix) {
        N = costMatrix.length;
        cost = costMatrix;
        assignment = new int[N];
        visited = new boolean[N];
        currentCost = 0;
        bestCost = Integer.MAX_VALUE;
    }

    public int computeCost() {
        int totalCost = 0;
        for (int i = 0; i < N; ++i) {
            totalCost += cost[i][assignment[i]];
        }
        return totalCost;
    }

    public int bound(int agent) {
        int minCost = 0;
        for (int i = 0; i < N; ++i) {
            if (!visited[i]) {
                minCost += cost[i][agent];
            }
        }
        return minCost;
    }

    public void branchAndBound() {
        PriorityQueue<Node> pq = new PriorityQueue<>();
        pq.offer(new Node(0, 0)); // {bound, level}

        while (!pq.isEmpty()) {
            Node node = pq.poll();
            int level = node.level;
            int currentBound = node.bound;

            if (currentBound >= bestCost) {
                continue; // Prune this node
            }

            if (level == N) {
                bestCost = Math.min(bestCost, currentBound);
                continue;
            }

            for (int j = 0; j < N; ++j) {
                if (!visited[j]) {
                    visited[j] = true;
                    assignment[level] = j;

                    int nodeCost = cost[level][j];
                    int nodeBound = currentBound + nodeCost;

                    pq.offer(new Node(nodeBound, level + 1));

                    visited[j] = false;
                    assignment[level] = -1;
                }
            }
        }

        System.out.println("Minimum Cost of Assignment: " + bestCost);
    }

    public static void main(String[] args) {
        int[][] costMatrix = {
            {10, 2, 6, 5},
            {1, 15, 8, 9},
            {8, 7, 4, 3},
            {5, 6, 8, 2}
        };

        AssignmentProblem problem = new AssignmentProblem(costMatrix);
        problem.branchAndBound();
    }

    static class Node implements Comparable<Node> {
        int bound;
        int level;

        public Node(int bound, int level) {
            this.bound = bound;
            this.level = level;
        }

        public int compareTo(Node other) {
            return Integer.compare(this.bound, other.bound);
        }
    }
}
        `,
    },
};
   
export default fileData;