/**
 * ******************************************************************
 * seTimeout:
 * - using var inside the forloop
 * - using let inside the forloop
 * ******************************************************************
 */

function testTimeoutVar() {
  /** var is global scope and i value gets overridden */
  for (var i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 1000);
  }
}

testTimeoutVar(); //5

function testTimeoutLet() {
  /** let prevents with block scope and hence the i value doesnt get overridden  */
  for (let i = 0; i < 5; i++) {
    /** this will print 0, 1, 2, 3, 4 */
    setTimeout(() => console.log(i), 1000);
  }
}

//testTimeoutLet(); // 0,1,2,3,4
