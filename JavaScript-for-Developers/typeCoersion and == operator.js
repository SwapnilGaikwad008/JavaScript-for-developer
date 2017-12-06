/*
TYPE Coersion 
- Concatenation with String values
eg. 123 + "4";

 */


/*
 == operator
 if two values are of different type it will compare the two values
*/

var a = 10;

var b = "10";

if(a == b){
  console.log("values are equal");
}

/*
Type Coersion summary
*/
//var c = 0;//only if it is 0 it will return false or no output
//var c = 3;
//var c = -10;
// var c = undefined;
var c = null;

if(c){
  console.log("c is true");
}else{
  console.log("c is false");
}

/*
1. js is flexible with typing
2. values of all types have an associated Boolean value.
3. Always use === for precise checks (both value and type)
*/
