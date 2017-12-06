/*Understanding  this  keyword*/

// var person = {
//   firstName : "Swapnil",
//   lastName : "Gaikwad",
//   getfullName : function(){
//     return this.firstName+" "+this.lastName;
//   }
// };

// var fullName =person.getfullName();

// console.log(fullName);

//make sure this keyword will point to that object where it is assigned

var student ={
  "firstName" : "Shrikant",
  "lastName" : "Gaikwad",
  "getfullName" : function(){
    return this.firstName+" "+this.lastName;
  },
  "address" :{
    "street" : "122 street",
    "city" : "Mumbai",
    "state" : "maharashtra"
  }, 
  "isfromstate" : function(state){
    return(this.address.state === state);
  }
};

console.log(student.isfromstate("maharashtra"));




/*
Exception: SyntaxError: missing ; before statement
@Scratchpad/1:29
*/