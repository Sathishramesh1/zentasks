//a.print odd no in array
//1.using anonymous function

var arr=[1,2,3,4,5,6,7,8,9,10,11,12];

var oddno=function(values){
    
 for(let i=0;i<values.length;i++){
      if(arr[i]%2==1){
        console.log(arr[i]);
      }
 }

}
oddno(arr);


//a.print odd no in array
//2.using IIFE function
(function(){
    
 for(let i=0;i<arr.length;i++){
      if(arr[i]%2==1){
        console.log(arr[i]);
      }
 }

})();


//b.convert all string to titlecaps using string array
//using anonymous function
var names=['sathish','ramesh','kannan','sundhar']
var titlecaps=function(values){
for(let i=0;i<values.length;i++){
    console.log(names[i][0].toUpperCase()+names[i].slice(1));
   
}}
titlecaps(names);
//b.convert all string to titlecaps using string array
//using IIFE function


(function(){
    for(let i=0;i<names.length;i++){
        console.log(names[i][0].toUpperCase()+names[i].slice(1));
    }
})();

//C.sum of all no in array
//using anonymous function
var no=[1,2,3,4,5,6,7,8,9]
var sumno=function(no){
    let sum=0;
    for(let i=0;i<no.length;i++){
        sum=sum+no[i];
    }
     return console.log(sum);
}
sumno(no);

//C.sum of all no in array
//using IIFE function
(function(){
    let sum=0;
    for(let i=0;i<no.length;i++){
        sum=sum+no[i];
    }
     return console.log(sum);
})();

//D.return all prime no in array
//using anonymous function
let number=[1,2,3,4,5,6,7,8,9,10,11,12,13];

var primeno=function(number){
    let ans=[];
    number.forEach(element => {
    
            let fact=0;
            
            for (let i=0;i<element;i++){
            if(element%i==0){
                fact++;    
            }}
             if(fact==1){
                ans.push(element);
            }

        }
    );
    return ans;
}
console.log(primeno(number));

//D.return all prime no in array
//using IFFE function
(function(){
    let ans=[];
    number.forEach(element => {
            
            let fact=0;
            
            for (let i=0;i<element;i++){
            if(element%i==0){
                fact++;    
            }}
             if(fact==1){
                ans.push(element);
            }

        }
    );
    return console.log(ans);
})();
//E.return all palindrome in array
//using anonymous function
var list=['mom',"wow",'noon','god','121'];
var palindrome=function(values){
    let ans=[];
      for(let i=0;i<values.length;i++){
       if( values[i].split('').reverse().join("")==values[i]){
        ans.push(values[i])
       }

      }
      return ans;
}

console.log(palindrome(list));
//E.return all palindrome in array
//using IIFE function
var list=['mom',"wow",'noon','god','121'];
(function(){
    let ans=[];
      for(let i=0;i<list.length;i++){
       if( list[i].split('').reverse().join("")==list[i]){
        ans.push(list[i])
       }

      }
      return console.log(ans);

})();

