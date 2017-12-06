/* Functions*/
//piece of code isolated out in seperate thing.SO,that we can call that function anywhere.
//bundle logic we can reuse

function sayHello(){
  console.log("hello");
}

sayHello();

// create and delcare argument(name)
function Hello(name,timeOfDay){
  console.log("Hello " +name + " Time of Day is "+ timeOfDay);
}

//Hello("Swapnil","Afternoon");//send the actual value to argument

//Hello("Swapnil");//if we don't send the value then it's going to send value as undefined

Hello("Swapnil","Afternoon",42);//it will ignore the extra arguments if not declare


/*IMP*/
// No multiple function function all is executed on basis of function name not on argument 
// pass to the function



