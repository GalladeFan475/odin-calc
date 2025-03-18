class Keling{
    double height = 0.0;
    double weight = 0.0;
    
    Keling(){
        
    }
    
    Keling(double height, double weight){
        this.height = height;
        this.weight = weight;
    }
}

public class Main{
    public static void main(String[]args){
        Keling Rishi = new Keling(181.0, 65.0);
        Keling Sanjay = new Keling(177.0, 75.0);
        Keling Bob = new Keling(172.0, 100.0);
        
        System.out.printf("Rishi: %.2fcm %.2fkg\n", Rishi.height, Rishi.weight);
    }
}