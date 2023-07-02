 var xhr = new XMLHttpRequest();
 var method = "GET";
 var url = "https://restcountries.com/v3.1/all";
 xhr.open(method, url);
 xhr.onload = function () {
   if (xhr.status === 200) {
     var arr = JSON.parse(xhr.responseText);
    
     //using for loop

for( i=0;i<arr.length;i++){
    console.log(arr[i].region);
    }

    //using for of loop

 for(const object of arr){
    console.log(object.area);
    }
    
    //using for in loop

 for(var index in arr){
    console.log(arr[index].capital);
   }


//using for each loop

arr.forEach((ele,index) => {
    console.log(ele.name.official,index)
})


   } else {

     console.log("Request failed", xhr.status);
   }
 };
 xhr.send();