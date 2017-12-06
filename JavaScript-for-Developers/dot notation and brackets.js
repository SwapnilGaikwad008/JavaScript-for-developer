/*dot notation and Brackets */

var myObj = {
  
  "prop" : "Swapnil",
  "prop1" : 123,
  "prop3" : true,
  "1" : "one"
};

console.log(myObj);

console.log("The number property is "+myObj.prop1);

console.log("Accessing property using square brackets notation "+ 
            myObj["prop"] + myObj["prop3"]);

/*Difference between them*/

//with dot (Its fast and used )

//console.log(myObj.1);
//it will throw exception Invalid Identifier a property cannot be access with number.

//with Brackets [] notation
/*
1.Property name is a reserved word/invalid identifier
2.Property name starts with a number
3.Property name is dynamic
*/

console.log(myObj["1"]);


//if case is 

var propertyName = "prop";

console.log(myObj[propertyName]);//its dynamic So, it a better approach 


/*IMP for both */
/*
1.Runtime engine may not be able to optimize [] notation
2.Dot and [] notation can be interchanged
*/

