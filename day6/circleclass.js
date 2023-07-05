class Circle{
     constructor(radius,color){
        this.radius=radius;
        this.color=color;
     }
    
     get radius1(){
        return this.radius;
     }
     set radius1(no){
          return this.radius=no;
     }
     get color1(){
        return this.color;
     }
     set color1(newcolor){
         return this.color=newcolor;
     }
     toString(){
         return `"Circle[radius=${this.radius},color=${this.color}]"`
     }
     getArea(){
        return Math.PI*this.radius*this.radius;

     }
     getCircumference(){
       return 2*Math.PI*this.radius;

     }

}

let circle1=new Circle(1.0,"red");

console.log("radius before",circle1.radius);
circle1.radius=10;
console.log("radius after",circle1.radius)
console.log(circle1.toString());
console.log("area is",circle1.getArea())
console.log("circumference is",circle1.getCircumference());
