/* Functions as Arguments*/

var f = function (name){
  console.log("hello" +name);
}


var executor = function (fn,name){
 //console.log(fn);
fn(name);
}

executor(f," Swapnil");

