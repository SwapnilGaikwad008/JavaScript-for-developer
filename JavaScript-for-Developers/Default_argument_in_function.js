/*Default argument in function*/

var add = function(a,b){
  console.log(arguments);
 return a+b;
};

//console.log(add(10,20,10,5,3,22,11));



var add = function(){
  var i,sum= 0;
  for (i = 0; i< arguments.length; i++){
    sum += arguments[i];
  }
  return sum;
};
console.log(add(10,20,10,5,3,22,11));

//Note : The arguments value is not an array.