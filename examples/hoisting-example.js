
/** example of hoisting */

function exampleHoist(){
  console.log(a); // undefiend 
  console.log(b); // Function 
  console.log(c); // undefiend 

  console.log(b()); // 21
  console.log(c()); // c is not a function

  /** variable declaration and assignment */
  var a = 20;
  
  /** function expression */
  function b(){
      return 21
  }

  /** function declaration and assignment */
  var c = function(){
      return 23
  }
}



