import java.util.Scanner;
public class Exercise1{
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);

        System.out.print("Enter length of rectangle: ");
        double length = input.nextDouble();
        System.out.print("Enter width of rectangle: ");
        double width = input.nextDouble();

        Rectangle rectangle1 = new Rectangle(length, width);
        System.out.printf("\nLength of rectangle: %.2f\nWidth of rectangle: %.2f", length, width);
        System.out.printf("\nArea of rectangle: %.2f", rectangle1.area());
        System.out.printf("\nPerimeter of rectangle: %.2f", rectangle1.perimeter());
    }
}

// Sanjay Kumar A/L Sasikumar (230103)
// CCS3101(11) Exercise 1
class Rectangle{
    double length = 1.0;
    double width = 1.0;

    //Set Constructor
    Rectangle(){

    }

    //Set parameters
    Rectangle(double length, double width){
        this.length = length;
        this.width = width;
    }

    //Get area
    double area(){
        return (this.length * this.width);
    }

    //Get perimeter
    double perimeter(){
        return 2 * (this.length + this.width);
    }
}