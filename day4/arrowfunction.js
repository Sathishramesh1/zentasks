//a.Print odd numbers in an array using arrow function

var arr=[1,2,3,4,5,6,7,8,9,10,11,12];

var oddno=(values)=>{
    
 for(let i=0;i<values.length;i++){
      if(arr[i]%2==1){
        console.log(arr[i]);
      }
 }

}
oddno(arr);

//b.Convert all the strings to title caps in a string array using arrow function

var names=['sathish','ramesh','kannan','sundhar']
var titlecaps=(values)=>{
for(let i=0;i<values.length;i++){
    console.log(names[i][0].toUpperCase()+names[i].slice(1));
   
}}
titlecaps(names);

//c.Sum of all numbers in an array using arrow functions

var no=[1,2,3,4,5,6,7,8,9]
var sumno=(no)=>{
    let sum=0;
    for(let i=0;i<no.length;i++){
        sum=sum+no[i];
    }
     return console.log(sum);
}
sumno(no);

//d.Return all the prime numbers in an array using arrow functions

let number=[1,2,3,4,5,6,7,8,9,10,11,12,13];

var primeno=(number)=>{
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

//e.Return all the palindromes in an array using arrow functions

var list=['mom',"wow",'noon','god','121'];
var palindrome=(values)=>{
    let ans=[];
      for(let i=0;i<values.length;i++){
       if( values[i].split('').reverse().join("")==values[i]){
        ans.push(values[i])
       }

      }
      return ans;
}

console.log(palindrome(list));
