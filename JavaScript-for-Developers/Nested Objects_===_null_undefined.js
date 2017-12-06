
/*Nested Objects*/

var myObj ={
  "prop" : "Swapnil",
  "prop1": 123,
  "prop2": true,
  "objProp" : {
   "innerProp": "innerProperty" 
  }
};


//console.log(myObj.objProp.innerProp);

//myObj.objProp.innerProp = "new inner value"; // we can change the value of the innerprop

myObj.objProp.newInner = "new inner value";// we can mismatch the property name also

console.log(myObj.objProp["newInner"]);

/* Resiviting operator === operator in js */ 

var myObjj ={
  "myProp": "Hello"
};

var myObj2;

myObj2 = myObjj;

console.log(myObj2.myProp);

if(myObjj === myObj2){
  console.log("objects are equals");
}  


/*Revisting Undefined vs Null*/

var person ={
  'firstName' : 'Shrikant',
  'middleName' : null ,// we are defining the value but its a null but it's a value
  'lastName' : 'Gaikwad'
}  
  
console.log(person);
  
