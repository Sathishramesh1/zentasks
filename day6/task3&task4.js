//Write a “person” class to hold all the details.
 
class person{
     constructor(name,age,qualification,gender,state,country,language){
        this.name=name;
        this.age=age;
        this.qualification=qualification;
        this.gender=gender;
        this.state=state;
        this.country=country;
        this.language=language;
     }


}

var employ1=new person("sathish",26,"B.E","male","tamilnadu","india","tamil");
console.log(employ1);


////class to calculate uber price
class Uberprice{
   constructor(km){
       this.km=km,
       this.price=km*30

   }
   getPrice(){
      return `Price is Rs.${this.price}` 
   }

}
var trip1=new Uberprice(5);
console.log(trip1.getPrice());