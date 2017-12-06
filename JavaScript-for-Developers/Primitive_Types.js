//var value =24;
//no int,float,double used in javascript
//var value;
//value = 24,
//value = 32;

/*Primitive Types*/
//-Numbers("Are double-precision 64 bit format IEEE 754 values")
var a = 10;
var b = 20;
var c = a+b;
console.log(a);// color print in console is green
console.log(b);
console.log(c);
//-String(Sequence of unicode charater()16 bit, There is no Charater datatype in javascript everything is string)

var d ="Hello";//string has black color in windows
console.log(d);

//-Boolean(true or false)
var e = true;//boolean is color red or green 
console.log(e);

//loose typing (a is already declare above in numbers)
a = "javaScript";
console.log(a);

//Decleration and Definition

//Decleration - var value;(declaring a variable assigning a name to a variable)

//Definition- value = 24; (Assigning a value)

//Undefined 
//If we declare a var and haven't assign a value to it it's of type undefined but it contains 
//one value which is "undefined" which is of the type undefined.

var g;
console.log(g);


//Null
//It contains only on value null.

var h;
h = null;
console.log(h);

/*
-when var is undefined it means value has not been enter into the variable.
-example no middle name so i will declare it as null means i do not have middle name it
means the var contains some value and i.e null.
*/
//ECMA script 6 contains new primitive type (symbol)
//Symbol-Every symbol value returned from Symbol() is unique.  A symbol value may be used as an identifier for object properties
var sym1 = Symbol();
var sym2 = Symbol('foo');
var sym3 = Symbol('foo');

console.log(sym1);
console.log(sym2);
console.log(sym3);

//with object
var sym = Symbol('hello');
typeof sym;     // "symbol" 
var symObj = Object(sym);
typeof symObj;  // "object"
console.log(sym);


/*
Types Summary
1.No need to declare a variable type
2.The same variable can be assigned values of different types
3.No scoping info. in variable declerations.
4.Variables and values can be "interrogated"
*/