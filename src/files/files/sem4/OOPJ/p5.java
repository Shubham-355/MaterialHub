// 5	Program to implement this keyword.		

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

// output:

// Details of student 1:
// Roll No: 1
// Name: Alice

// Details of student 2:
// Roll No: 2
// Name: Bob