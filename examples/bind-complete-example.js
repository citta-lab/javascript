/**
 * BIND EXAMPLE AND IMPLEMENTATION
 *
 * Hint:
 * - Bind used to apply and hold the context of an object until it is executed
 * - Bind returns a function which can be executed at later times
 * - Bind returns a function and allow us to apply n number of arguments
 * - Bind can be called by `object.methodName.bind(object)`
 * - Underneath bind uses 'apply' to attach the context to the method
 * - Often useful to apply bind in setTimeout to avoid object method to refer window
 * this at runtime.
 * - setTimeout can avoid using bind, if the object method is called with in a
 * function. like `setTimeout(() => object.methodName(), 0)`
 */

/**
 * ******************************************************************
 * Using Bind Example:
 *
 * ******************************************************************
 */
let user = {
  name: "Bob",
  age: 37,
  greeting: function () {
    console.log(this.name + " welcomes you");
  },
};

console.log(user.greeting()); //Bob welcomes you

let greet = user.greeting;
console.log(greet()); //undefined welcomes you

setTimeout(user.greeting, 0); // undefined welcomes you
setTimeout(() => user.greeting(), 0); // Bob welcomes you

/** fixing user not to have its own context  */
let newGreet = user.greeting.bind(user);
console.log(newGreet()); // Bob welcomes you
setTimeout(user.greeting.bind(user), 0); // Bob welcomes you

/**
 * ******************************************************************
 * Imeplemeting Bind
 * - returns object method attached to it's object context
 * - returned function can be executed at later time
 * ******************************************************************
 */
let bindHelper = function (inputFun, context) {
  let args = arguments;
  return function () {
    return inputFun.apply(context, args);
  };
};

let customGreet = bindHelper(user.greeting, user);
console.log(customGreet()); // Bob welcomes you
setTimeout(customGreet, 0); // Bob welcomes you
setTimeout(() => {
  customGreet();
}, 0); // Bob welcomes you


/**
 * ******************************************************************
 * Bind in Prototype.js
 * ******************************************************************
 */
Function.prototype.bind = function(){ 
  var fn = this, args = Array.prototype.slice.call(arguments), object = args.shift(); 
  return function(){ 
    return fn.apply(object, 
      args.concat(Array.prototype.slice.call(arguments))); 
  }; 
}; 

// calling above bind in an example
var Button = { 
  click: function(value){ 
    this.clicked = value; 
  } 
}; 
 
var elem = document.createElement("li"); 
elem.innerHTML = "Click me!"; 
elem.onclick = Button.click.bind(Button, false); 
document.getElementById("results").appendChild(elem); 
 
elem.onclick(); 
