# Objects

## 1. Create Object with Methods & Private Variable

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

## 2. Create Class (ES6 Class) with methods and Private Variable

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
