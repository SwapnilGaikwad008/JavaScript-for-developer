/* Functions Return values*/


function sayHello(name,timeOfDay){
 return "Hello " + name + " Time Of Day "+timeOfDay;
//return ; //will rteurn undefined
}

var returnValue = sayHello("Swapnil" ,"Afternoon");
console.log(returnValue);


/*Function Expression */ 

var a = "Hello";

var f = function foo(){   //Assiging a function to variable
  console.log("Function Expression");
};

f(); //executing a variable as function.  

/*Anonymous Function Expression*/
var g = function (){   
  console.log("Anonymous function Expression");
};
g();
// we are not assiging a name to a function we are using variable as the function value.





