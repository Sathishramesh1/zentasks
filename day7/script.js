
var xhr= new XMLHttpRequest();

var method="GET";
var url="https://restcountries.com/v3.1/all";

xhr.open(method,url);

xhr.onload= function () {
   if(xhr.status===200){
    var details=JSON.parse(xhr.responseText);


   //a.Get all the countries from Asia continent /region using 
   //Filter function

    var p=details.filter((el)=>el.region==="Asia")
    for(let i=0;i<p.length;i++){
    console.log("asia region countries:",i,p[i].name.common)}

   /*
   sample output
   asia region countries: 0 Jordan
 asia region countries: 1 Armenia
 asia region countries: 2 Maldives
 asia region countries: 3 Iraq
 asia region countries: 4 Saudi Arabia   
   
   
   */

 //b.Get all the countries with a population of less 
 //than 2 lakhs using Filter function

    var population=details.filter((el)=>el.population<200000);
    for(let i=0;i<population.length;i++){
      
      console.log("countryname:",population[i].name.common,population[i].population);
   }
   /*
   countryname: Northern Mariana Islands 57557
 countryname: Andorra 77265
 countryname: Turks and Caicos Islands 38718
 countryname: Bermuda 63903
 countryname: Antarctica 1000
   
   */




// c.print name, capital, flag using forEach function
details.forEach(element => {
   console.log(
   `name    :${element.name.common},
captial :${element.capital},
flag   :${element.flag}
   `);
   
   /*
name    :Jordan,
captial :Amman,
flag   :🇯🇴
name    :Northern Mariana Islands,
captial :Saipan,
flag   :🇲🇵
name    :Serbia,
captial :Belgrade,
flag   :🇷🇸

    */
});
   



 //d. total population using reduce function
var total=details.reduce((acc,curr)=>acc+curr.population,0)
console.log("totalpopulation:",total);
/*
sample outputs
totalpopulation: 7777721563
*/


 // e.countries using US dollar as currency
 for(let i=0;i<details.length;i++){
     if(details[i].currencies!=undefined){
      Object.keys(details[i].currencies).forEach((key)=>{
            if(key==="USD"){
               console.log("currency:",key,"countryname:",details[i].name.common)
            //sample outputs
            /*
 currency: USD countryname: Northern Mariana Islands
 currency: USD countryname: Turks and Caicos Islands
 currency: USD countryname: American Samoa
 currency: USD countryname: Guam
 currency: USD countryname: Ecuador
            */
            }
         }
         )}}
   

   }else{
    console.log("request failed:",xhr.status);
   }

};
   xhr.send();

