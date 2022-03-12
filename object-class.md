# Objects and Class 

### Table of Contents

| No. | Questions |
|---- | ---------
|1  | [Using 'new' keyword in function vs class](#using-new-keyword-in-function-vs-class) |
|2  | [Create Object with Public and Private Variable in JavaScript](#create-object-with-public-and-private-variable-in-javascript) |
|3  | [Create Class with Public and Private Variable in JavaScript](#create-class-with-public-and-private-variable-in-javascript) |
|3  | [What is prototype chain](#what-is-a-prototype-chain)|
|4  | [What is the difference between Call, Apply and Bind](#what-is-the-difference-between-call-apply-and-bind)|

1. ### Using 'new' keyword in function vs class 
Unlike other languages 'new' keyword doesnt' instantiate the class in javascript rather used purely to create a 'constructor' call. Hence we can do use the `new` key word both in functions and/or class.
```js
/** functional way of instantiating  */
function foo() {
  console.log("I'm function foo ");
}
var check = new foo();
console.log(check); // I'm function foo

/** class way of instantiating  */
class boo {
  constructor() {
    console.log("I'm class boo");
  }
}

const booCheck = new boo();
console.log(booCheck); // I'm class boo


```

2. ### Create Object with Public and Private Variable in JavaScript

When we create an object and define property we will see prototype chain and **pronto** linking in the created Object.

```js
let person = {
  name: "bob",
  address: "100 swift ave, Kansas City, MO",
  getAddress: function () {
    console.log(this.address);
  },
  getPhoneNumber: function () {
    /** Cannot be accessed or changed via person.personalNumber */
    let personalNumber = "816-224-3669";
    return function () {
      console.log(personalNumber);
    };
  },
};

/** can be done */
console.log(person.name); // bob
person.name = "Jack";
console.log(person.name); // Jack

/** dont have access to privateNumber directly */
console.log(person.privateNumber); // undefined
console.log(getPhoneNumber()()); // 816-224-3669
```

3. ### Create Class with Public and Private Variable in JavaScript

This is the re-implementation of above example in ES6 syntax. We are making use of `#variableName` to define private variable which cannot be accessed from class instance.

```js
class Person {
  #personalNumber = "816-224-3669";
  constructor() {
    this.name = "bob";
    this.address = "100 swift road, NY";
  }

  getAddress() {
    console.log(this.address);
  }

  getPhoneNumber() {
    console.log(this.#personalNumber);
  }
}

/** can be done */
let newPerson = new Person();
console.log(newPerson.name); // bob
newPerson.name = "Jack";
console.log(newPerson.name); // jack

/** dont have access to privateNumber directly */
console.log(newPerson.personalNumber); // undefined
console.log(newPerson.getPhoneNumber()); // 816-224-3669
```

read more on [Private class features](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields) which will cover statick methods, private methods etc

# Reference:

https://developer.mozilla.org/en-US/docs/Web/JavaScript
