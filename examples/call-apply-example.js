/**
 * Call and Apply are used to bind "this" object context with executing function. Both will result
 * in immediate function execution. But the main difference between them is CALL will take argument
 * where APPLY will take array of arguments.
 *
 * Call and Apply can be used interchangeably.
 *
 * Syntax: call(thisArg, arg1, ... , argN)
 * Syntax: apply(thisArg, [arg1, ... , argN])
 */

/**
 * ******************************************************************
 * Example 1:
 * Making use of add function to find the total using
 * call and apply.
 * ******************************************************************
 */
function add(a, b, c, d) {
  return a + b + c + d;
}

/** Call: By passing list of arguments */
let array = [2, 1, 3, 4];
/* this or null can be used as we are referring the window context */
let total = add.call(this, ...array); //spreading array to pass as arguments
console.log(total); // 10

total = add.call(this, 2, 1, 3, 6); // or pass them as argumentsß
console.log(total); // 12

/** Apply: By passing array of arguments */
array = [2, 1, 3, 10];
/* this or null can be used as we are referring the window context */
total = add.apply(this, array); // passing arguments as array
console.log(total); // 16

/**
 * ******************************************************************
 * Example 2:
 * Using call and apply interchangeably on extracted method to find the
 * age by passing Object and an argument.
 * ******************************************************************
 */
const Person = {
  name: "bob",
  dob: 1998,
};

function getAge(currentYear) {
  let age = currentYear - this.dob;
  console.log(age);
}

getAge.call(Person, 2022); // 24
getAge.apply(Person, [2021]); // 23
