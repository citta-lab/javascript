/**
 * PROTOTYPE - INHERITANCE
 *
 * In this section we will cover prototype inheitance using functions,
 * then when function is used with Object.create and class.
 *
 */

/** Function with constructor property */
let Person = function (name, birthYear, job) {
  this.version = 1.0;
  this.name = name;
  this.birthYear = birthYear;
  this.job = job;
  this.calculateAge = function () {
    return 2022 - this.birthYear;
  };
  this.details = details;

  /** cant access without binding it to this using new keyword */
  function details() {
    console.log(this.name + " is a " + this.job);
  }
};

/** calling function like class to access methods and properties */
let bob = new Person("Bob", "1995", "Mechanic");
let rob = new Person("Rob", "1985", "Doctor");
console.log(bob.calculateAge()); // will print 24
console.log(rob.calculateAge()); // will print 34
console.log(bob.details()); // Bob is a Mechanic

/** adding method on to already defined function using prototype chain */
Person.prototype.calculateAgeAt = function (year) {
  return year - this.birthYear;
};

console.log(bob.calculateAgeAt(2000)); // 5

/**
 * PROTOTYPE - INHERITANCE with Object.create on functions
 *
 * Object Create with Prototype Chaining
 *
 * Hint
 * - Objects created with the use of Object.create will not have constructor. So we
 * need to create with ".prototype" if we are interested in creating constructor
 * property
 * - All other objects built "without" using Object.create will have constructor
 * - Object / function needs to call super class with all the constructor arguments
 * so it will link with the super class along with "this".
 * - Object can also have it's own property
 *
 * */

/** defining new function and calling super class/function to bind this and arguments */
function Child(name, birthYear, job, gender) {
  /** if dont have constructor argument in Person then it could be just Person.call(this) */
  Person.call(this, name, birthYear, job); // calling super constructor
  this.gender = gender; // adding unique property to Child
}

/** hence objects created with Object.create will NOT have constructors we are chaining it*/
Child.prototype = Object.create(Person.prototype);

/** calling child function with new keyword  */
let baby = new Child("Ronny", "2021", "Toddler", "male");
console.log(baby.name); // Ronny
console.log(baby.gender); // male
