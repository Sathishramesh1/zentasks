/*a) Write a constructor for the class Movie, which takes a String 
representing the title of the movie, a String representing the 
studio, and a String representing the rating as its arguments, 
and sets the respective class properties to these values.
b) The constructor for the class Movie will set the class property 
rating to "PG" as default when no rating is provided.
*/


class Movie{
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    getPG(arr){
        let p=arr.filter((el)=>el.rating==="PG");
        return p;
        }
        
    
        
    }









/*d) Write a piece of code that creates an instance of the 
class Movie with the title “Casino 
Royale”, the studio “Eon Productions”, and the rating “PG­13” */

let film1=new Movie("Casin Royale","Eon Productions","PG13");

/*c) Write a method getPG, which takes an array of base type Movie
 as its argument, and returns a new array of only those movies in 
 the input array with a rating of "PG". You may assume the input 
 array 
is full of Movie instances. The returned array need not be full.
*/
let film2=new Movie("Titanic","Eon Productions","PG13­");
let film3=new Movie("SpiderMan","Eon Productions","PG");
let film4=new Movie("ironman","Eon Productions","PG");



let movie=[film1,film2,film3,film4];



console.log("getPG",film1.getPG(movie));