/**
 * Currying
 *
 * Currying transfroms the function.
 *
 * It converts function taking multiple arguments
 * into a series of function which takes one argument at a time. This is also an
 * example of closure as it holds the context of previously sent argument value
 * until all arguments are passed.
 */

/**
 * ******************************************************************
 * Example 1:
 * BASIC SUM function which takes three arguemnts and returns the sum
 * sum(2)(3)(4) and will always takes 3 arguments
 * ******************************************************************
 */

/** Normal function to calculate the SUM */
function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(1, 2, 3)); // 6

/** example of currying */
function curriedSum(a) {
  return function (b) {
    return function (c) {
      /** example of closure as it holds a and b values until c is passed */
      return a + b + c;
    };
  };
}

console.log(curriedSum(1)(2)(3)); // 6

/**
 * ******************************************************************
 * Example 2:
 * ADVANCE SUM function which takes "N" arguemnts and returns the sum
 * i.e sum(2)(3)(4)() or sum(2)(3)() or sum(1)() should work
 * ******************************************************************
 */

function curriedNSum(a) {
  let sum = a;
  return function resultSum(b) {
    /** arguments is inbuilt property which can be used to check if we have () call */
    if (arguments.length) {
      sum = sum + b;
      return resultSum;
    }

    return sum;
  };
}

console.log(curriedNSum(2)(3)(4)); // returns [Function: resultSum]
console.log(curriedNSum(2)(3)(4)()); // 9

/**
 * ******************************************************************
 * Example 3:
 * ADVANCE SUM function which takes "N TWO PAIR" arguemnts and returns the sum
 * i.e sum(2,3)(3,2)(1,2)() or sum(2,3)() should work
 * ******************************************************************
 */
function curriedPairsSum(a, b) {
  let sum = a + b;
  return function resultSum(c, d) {
    if (arguments.length) {
      sum = sum + c + d;
      return resultSum;
    }

    return sum;
  };
}

console.log(curriedPairsSum(2, 3)(3, 2)()); // 10
console.log(curriedPairsSum(2, 3)()); // 5
