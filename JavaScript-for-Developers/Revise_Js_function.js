/*Recape js function*/

/*
1. Functions can be written in literal form.
2. A function is a "value " that can be assigned to a variable.
3. can be called by passing in arguments.
4. Functions are objects!(The way js deals with the function is actually creating an object
So, when we assign a variable to a function we are creating a objects which happens to be a
function and we are assigning to a variable).

5.Flexible argument count
6.Function overlaoding not possible.
7.Default arguments.
8.The arguments arguments

*/
//Function Decleration

function addNumbers(a,b){
  return a+b;
}

//Function Expression

var additionFn = function addNumbers(a,b){
  return a+b;
};
result = additionFn(number,number);

//Anonymous Function Expression

var additionFn = function(a,b){
  return a+b;
};
result = additionFn(number,number);

//Functions as object property

var mathObj ={}; 

mathObj.add = function(a,b){
  return a+b;
};

result = mathObj.add(number,number);








