
/** example of hoisting */

function exampleHoist(){
  console.log(a); // undefiend 
  console.log(b); // Function 
  console.log(c); // undefiend 

  console.log(b()); // 21
  console.log(c()); // c is not a function

  /** variable declaration and assignment */
  var a = 20;
  
  /** function declaration */
  function b(){
      return 21
  }

  /** function expression */
  var c = function(){
      return 23
  }
}

/** 
  Reason:
  - Variable names ( with var ) get hoisted to top of the file before runtime.
  i.e only the left part of it and hence we get 'undefined' rather than reference error
  - Function declarations ( without assignment ) will get hoisted tot the top.
  - Function expressions acts similar to variable and only the left part of it will get
  hoisted
  */


