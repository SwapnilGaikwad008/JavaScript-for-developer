/*OBJECTS */

//js is object oriented programming language
//It's not a 'class based' programming language


//Create a  Object 

//1. Inline object
var myObj = {}; //var "myobj" contains a value it's an empty object

console.log(myObj);

myObj.prop = "Hello";
/*Adding a property with ".prop" and assign a value to a property.
So, we can dynamically add property 'prop' will be key and 'hello' will be value.
It will behave like a map.*/

myObj.prop2 = 10; //Included number

//to read a property
console.log("The number property is " + myObj.prop2);


/*Objects Literal*/
//we can call multiple property to object
var myObjj = {
    "prop": "Swapnil",
    "prop1": 123,
    prop2 : true
};

console.log(myObjj);
console.log("literals are " + myObjj.prop + " " + myObjj.prop2 + " " + myObjj.prop1);
console.log("Property that dosen't exist " + myObjj.prop3); //it will show the output as undefined

/*Object Summary*/

/*
1.Free-form -Not bound to class.
2.Object Literal notation to create objects.
3.Object properties can be accessed directly.
4.New properties can be added directly to objects.
5.Methods can be added to objects.

*/