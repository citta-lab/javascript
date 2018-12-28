
Go Health Questions

1.	Dependency injection

a.	Ability to change the object dependencies at runtime instead of providing at compile time. Dependency injection extracts the tight coupling and provides the abstraction. i.e Class shouldn’t be configured it’s dependencies statically but should be configured dynamically from the outside.
b.	Cons:
  i.	compile time errors are pushed to runtime
  ii.	Maintenance and refactoring would be harder
c.	Used Frameworks:
  i.	Spring
  ii.	Google Guice
  iii.	Dagger
d.	In Javascript:
  i.	We can do the decoupling using Higher Order Functions, Currying, Function Compositions, Creating javascript modules to specific task.
e.	Reference:
  i.	http://www.vogella.com/tutorials/DependencyInjection/article.html
  ii.	https://medium.freecodecamp.org/a-quick-intro-to-dependency-injection-what-it-is-and-when-to-use-it-7578c84fa88f
  iii.	https://medium.com/@fleeboy/dependency-injection-in-javascript-9db9ea6e4288

2.	Currying

Idea of accepting an argument and returning consecutive function. This make uses of java scripts closure.
```javascript
function sum3(x) {
  return (y) => {
    return (z) => {
      return x + y + z;
    };
  };
}
console.log(sum3(1)(2)(3)) // 6
```
Pros:
i. Currying can be used to pass multiple arguments chain but we can also do this by accepting multiple arguments in ES6. i.e  `function noCurry(...args){}`.
ii. Used while setting up the infrastructure of the project in the beginning
iii. Function composition. Building new function from old function by passing arguments.
iv. Catching multiple errors and handle it as error validator.


3.	Abstraction
The idea of dictating the concepts to implement but hiding the actual implementation by itself. This helps in code maintenance and code duplication.

4.	Partial functions
Providing function with fewer arguments than it expects is partial functions. Functions takes any number of arguments and returns function with less number of arguments. In javascript, `.bind` was used to pass multiple arguments.
```javascript
function addition(x, y) {
   return x + y;
}
const plus5 = addition.bind(null, 5)
plus5(10) // output -> 15
```

5.	Interface
6.	Object immutability
When an object is copied by an another object we are referencing the same object. Updating / Deleting the one object would change the behavior in another. This is object mutability, so immutability is avoiding this problem.
    ```javascript
    // Example for mutating
    let person = {
      name: 'Bob', age: '30'
    }

    let newPerson = person;
    newPerson.age = 31;
    console.log(person.age); // 31
    ```
    immutability Example:
    ```javascript
    let newPerson = Object.assign({}, person, {age: 30});
    // OR
    let newPerson = {...person, age: 30 }
    ```
    Reference:
    i. https://wecodetheweb.com/2016/02/12/immutable-javascript-using-es6-and-beyond/

7.	String references of objects
    In javascript, string primitive will be converted to string object and hence we can call the methods on the string primitive. like `'bob'.charAt(0)`.

8.	Difference in mogo and sql

9.	Design restful api endpoints
10.	Reflection API
    API used to inspect any object class and/or variables and/or static methods at runtime. This helps in avoid writing boiler plate code to inspect the object class. Example: In javascript, `Object.keys(obj)` or `Object.getPrototypeOf()` acts as reflection but since ES6 it has it's own reflection methods available to inspect any object.
11.	Implement this key world in javascript
12.	Design a game software from scratch
