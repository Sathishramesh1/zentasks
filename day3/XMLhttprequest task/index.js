 //Create a new XMLHttpRequest object
 var xhr = new XMLHttpRequest();

 //Define HTTP method and URL
 var method = "GET";
 var url = "https://restcountries.com/v3.1/all";

 //Open the request
 xhr.open(method, url);

 xhr.onload = function () {
   if (xhr.status === 200) {
     // if Request was successful
    //  console.log(xhr.responseText);
     var countriesDetails = JSON.parse(xhr.responseText);
    //  console.log(countriesDetails)s
     for (var i = 0; i < countriesDetails.length; i++) {
      console.log("Country name:",countriesDetails[i].name.common); 
      console.log("Flag:",countriesDetails[i].flag);
       console.log("region:",countriesDetails[i].region);
       console.log("subregion:",countriesDetails[i].subregion);
       console.log("Population:",countriesDetails[i].population)
     }
   } else {
     // if Request failed
     console.log("Request failed", xhr.status);
   }
 };

 //send the request
 xhr.send();