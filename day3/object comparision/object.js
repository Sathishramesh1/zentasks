var obj1={name:"person1",age:5};
var obj2={age:5,name:"person1"}

function compare(){
if(Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
}
for(var key in obj1) {
    if(!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}
console.log(compare());