//Rules 1 Declare all req variables 
var y = 2,
  z = 3;
console.log(y + " " + z);
function foo(x,y,z) {
    y = y * x;
    z = y * x;
    return x + y;
  }
console.log("Result of function " + foo(5,y,z));
console.log("Side effect is " + y + " " + z);
console.log("Result of function " + foo(5,y,z));
console.log("Side effect is " + y + " " + z);