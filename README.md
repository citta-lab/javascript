javascript [ juggling pebbles ]
--------------------------

playground: https://jscomplete.com/repl/  

### Pointers:
1. Inline if-else is to use conditional operator `condition ? true : false`.
2. In JavaScript, `true && expression` always evaluates to `expression`, and `false && expression` always evaluates to `false`. Example: ` check == 20 && check-1`, if check is equal to 20 then we will deduct one from it.
3. `var` is variable and can be changed where as `const` is like final in java. since `ES6` we use `let` instead of `var` which has smaller scope than the variable. For example: `var` attaches the variable to the declared function and `let` will attached to the block ( for(let i=0; i<10; i++)). `i` is only available for `for` loop.
4. We explicitly need to define `export` and `import` in javascript. We can also do explicit import by named import example `import {calAge} from './fileName.js'` which ignores all the export definition from fileName and only imports `calAge`.
5. Use `toFixed(2)` to convert floating number into two digit value. Example: `3.232444` will be printed as `3.23`.
6. Avoid writing anonymous functions instead convert it to named. Such example would be in `setTimeout( function(){ .. }, 1000)` can be written as `setTimeout( function timeOut(){ .. }, 1000)`.
7. `undeclared` is thrown when there is no variable DECLARED of name you are looking for.
8. `undefined` is thrown when there is a variable DECLARED of name you are looking for with NO VALUE. Undefined it self is a value assigned to variable when NO VALUE is found for the declared variable.
9. `eval` and `with` keywords in javascript changes the lexical scope and will hinder the performance and hard to debug. So it's advisable to avoid using them.
10. `Lexical Scope` is authored time decision ( while writing the code ) and `Dynamic Scope` is runtime decision.
11. LHS (left hand side) happens at compile time and RHS (right hand side) happens at run time. This is very important feature to understand HOISTING.
12. `[[Prototype]]` is a linkage between two objects ( child and parent ). This is created whenever we create object using `new` keyword. i.e `var boo = new Foo()` and also when we use `Object.create` like `Object.create(Foo.prototype)`.
13. `__proto__` is called dunder proto. `__proto__` is getter method (property) present in the out of the box object and which provides the public link.
14. `Behavior Delegation`, whenever we create new object using `new` keyword or create using `Object.create` then we are delegating from bottom-up (newly created) to parent object. In case of inheritance (OOP pattern) we copy the behavior from top (parent) to child (down).
15. `Interface`: javascript doesn't have interface because it's inheritance is based of Object instead of
Class type. Also javascript is extremely dynamic so we can define the property of an object and can use as interface.
16. `Polymorphism`: Ability to call the same method on different objects and each behave different is Polymorphism. We can make use of `ES6` extends property to Polymorphism. Example `class Manager extends Person`. Now we can overwrite method defined in `Person` class which will behave different when `let myManager = new Manager();` and `myManager.sameMethod()` is called.
17. Interpolation: we can make use of tick symbol and curly braces along with dollar symbol to build a interpolated string with values. Example: ` `You got a ${grade} (${cal}%)`;  `
18. What is `[object Object]` ? whenever we are trying to `alert` an object (`let object ={}')then it can't print the readable formatted data. Instead we need to use `object.toString()` or `JSON.stringify(object)`.


### Parts Unknown:

#### 1. ReferenceError:      
`ReferenceError` occurs whenever javascript engine RHS lookup (right hand side / retrieve her/his source of truth) fails to find the defined variable in nested `Scope`.
```javascript
var a =1; /* LHS lookup done to assign value to a */
function add(){
  return a+b; /* RHS lookup to retrieve values but can't find b neither
  in local scope (with in function) nor in global */
}
```

#### 2. Lexical Scope:   
`Lexical Scope` the way engine finds the variable declaration during quick compilation (which happens right before runtime). During this process the engine looks for local 'Scope' and move on to global 'Scope'.
```javascript
var c =1; /* Step 3: i'm available for anyone */
function parent(){
  var b = c + 1; /* Step 2: RHS lookup for c and didn't find within scope, looks from global scope (i.e 1) */
  function child(){
    var c = 20;
    return b+c;  /* Step 1: RHS lookup done to get b from outer scope (i.e c+1) but c reference was found with in scope (i.e 20)  */
  }
}
```
Anti Lexical / EVAL:     
If we use an word `eval(value);` in our code block, it gets compiled during the execution and prevents from doing the `Lexical` lookup. This also hinders the performance optimization done by the engine. Short answer, DON'T USE IT.
```javascript
var boo = "friend";

function foo(value){
  eval(value);  // cheating, which compiles var boo = 'ex', now boo as ex.
  console.log(boo); // prints 'ex' instead of 'friend'.
}

foo("var boo = 'ex';");
```

#### 3. Strict Mode:   
`Strict Mode` is created in ES5 and disallows the engine to create `global scope` variable when `LHS` lookup doesn't finds the variables declared already.
```javascript
function foo(boo){
  boo ="friend"; // boo is created during compilation by LHS lookup in function
  bae ="girl friend"; // foo local scope doesn't find bae, so global scope just creates it at run time.
}
```
In Above scenario, memory leakage can be avoided if we use `strict mode` while writing javascript.

#### 4. Reference Error:    
`ReferenceError` is Scope resolution-failure related, whereas `TypeError` implies that Scope resolution was successful, but that there was an illegal/impossible action attempted against the result. Example of ReferenceError,
```javascript
function foo(){
  boo ='friend'; /* boo is not declared but engine will create `boo` in global scope anyway */

  function go(){
    console.log(" Alright, will hit the ground");
  }
  go();
}

/* executing the functions */
foo(); /* engine finds the foo declared in global scope by looking RHS */
go(); /* engine looks for go declaration in global scope and doesn't find and throws ReferenceError */
```
In short, In case of LHS lookup ( boo = 'friend') engine creates a variable if it's not declared in global scope however when doing RHS lookup ( go(); ) it instead throws an error.

#### 5. Shadowing:    
`Shadowing`, during lexical scope evaluation if the engine finds the local variable ( example: `a`) declared inside the function then it wouldn't look for global variable. This is `Shadowing`, this helps to have variables with same name in different scope. However we can skip the lexical shadowing and access global variable by it's window property ( in browsers ) by doing `window.a`.
```javascript
/* Refer same example from lexical scope */
```

#### 6. Module Management:    
`Module Management`, Whenever we use libraries javascript engine creates unique object in global namespace and assign library related variables and functions to it. This helps preventing polluting global namespace, Similarly using `Module Management` we explicitly need to export and import which helps preventing polluting the namespace. Two characteristic of module patterns are,
* Should have outer enclosing function
* Atleast one/more references to inner function should be return ( should have closure )
```javascript
var foo = (function(){
  var name = "Bob";
  return function(){
    console.log(name);
  }
})();

foo.bar();
```
but as of ES6 we could just use export instead of wrapping with function and returning function reference.
```javascript
//file: foo.js
var obj = {bar: "BAR"}
export function boo(){
  return obj.bar;
}
```
Using the module code,
```javascript
import bar from 'foo'; // can use bar function
bar();
module foo from 'foo'; // now can use whole module
foo.bar();
```

#### 7. Function Expression vs Declaration:     
If a `function` keyword is a first word in a statement then it is function `declaration`, where as if the `function` is assigned to an variable then it is called `expression`.

7.1 Declaration:    
```javascript
/* example of declaration */
function foo(){
  console.log(" I'm function declaration");
}
```

7.2 Expression:
```javascript
/*example of expression */
  /* 1. Named expression i.e because we have defined as foo.*/
  var bar = function foo(){
    console.log(" I'm function expression");
  }

  /* 2. Anonymous function expression */
  var bar = function (){
    console.log(" I'm function expression as well");
  }

  bar(); // executes named expression
  foo(); // can't call foo but need to use bar() instead.
```  
Using named functions are more beneficial than doing anonymous function expression with debugging, to use named functions with in it's own scope ( i.e named function expression can't be called in global scope buy using it's function name i.e foo).

Now the point is what is the use of function expression over declaration ?
- If we are wanting to do functional composition and/or currying and/or create higher order function then we do need use functional expression.
- In function expression the left side variable will get hosted first and `undefined` is assigned along with other functions. Unlike in declaration whole function get hoisted.

7.3 Immediately Invoked Function Expression (IIFE Pattern):   

This is widely used with both named or anonymous function expression ( note `function` keyword starts after `(` and hence not `declaration` ) to prevent polluting the global name space. Best way of writing private functions.
```javascript
/* example of expression */
/* 1. Named expression */
(function foo(){
  console.log(" I'm also function expression");
})(); // <- '()' used to execute the function Immediately.

/* 2. Named expression with parameter */
(function foo(global){
  console.log(" Lets print window object : "+JSON.stringify(global));
})(window);
```
This declares block of scope with in the function and hence any variable declarations within them are scoped to that named/anonymous function.

#### 8. Hoisting:
The idea of hoisting is processing the declaration code (by doing LHS lookup) first and run the assignment (by doing RHS lookup) at runtime. For example:
8.1 Actual code:
```javascript
a;
b;
var a ="Hello";
var b ="Hi";
a;
```
As we know javascript goes through this code from top to bottom, however the important key take way is the way it process the code by LHS and RHS lookup. So by doing LHS lookup during compile time it only process `var a ="Hello";` and `var b ="Hi";` and during runtime RHS lookup will find already declared `a` and `b` variable. Simply the above code would be processed as mentioned below (mental processing),
```javascript
var a ="Hello";
var b ="Hi";
a;
b;
a;
```
Always remember during hoisting, function declarations are moved on top followed by variable declaration, and last function expressions are added. i.e
```javascript
1. function declarations /*this will already be defined at this point, so calling this will not warn/fail*/
2. variable declarations /*this will be defined with undefined, right way to do it */
3. function expressions
```

#### 9. `this` Keyword :
>> The 'Object' executing the current function.

Rule of thumb:
1. If the function part of an object, it is called `method`. then `this` references itself.
2. If the function is global function then `this` reference the global object.

```javascript
/* `this` references the object itself */
let name = "rob";
let obj = {
  name: "bob";
  display: function(){
    console.log(this.name);
    console.log(this); // this will be obj object context.
  }

  function secondDisplay(){
    console.log(this); /*this will be global window object, because it simply follows the rule. Any function
    definition (not method) refers to global window object */
  }

  secondDisplay();
}

obj.display(); // prints bob.
```
Similarly, if the function is written outside of an object then it's is called function which references the global object.
```javascript
function newName(){
  let name = "Mo";
  console.log(this.name);
}
newName(); // returns undefined as this references to global object
```

Always think about `this` execution from the place the function execution is called.Four rules to determine the working nature of `this` keyword in precedence.
* Did the function get called with `new` keyword ? If so use that object. ( i.e var test = new foo()).
* Did the function get called with `call` or `apply`, then use that object. (used in explicit `this` binding or hard binding)
* Did the function get called with object context ( owning the object or implicit binding )
* Default to global object, expect in strict mode.

Example of implicit binding:
```javascript
function foo(){
  console.log(this.bar);
}

var bar = "GLOBAL BAR";
var object1 = { bar: "BAR", foo:foo};
object1.foo(); // prints BAR defined in the object1
```
Example of explicit binding:
```javascript
function foo(){
  console.log(this.bar);
}

var bar = "GLOBAL BAR";
var object1 = { bar: "BAR", foo:foo};
var object2 = { bar: "BUR"};

foo.call(object1); // prints BAR defined in the object1
foo.call(object2); // prints BUR defined in the object2
```
In both the scenarios we can always execute `foo()` directly which will reference to global bar variable i.e (var bar = "GLOBAL BAR").

The important thing to remember is the idea of lexical scoping doesn't work with `this` keyword and the below example justifies this statement.
```javascript
function foo(){
  var bar = "BAR";
  bro();
}

function bro(){
  console.log(this.bar);
}

var bar = "BRO";
foo();
/* prints BRO, as the function foo is called from the global
context */
```
Reference video on [this](https://www.youtube.com/watch?v=gvicrj31JOM)

#### 10. `new` Keyword :
`new` keyword in javascript is nothing to do with instantiating the class how we would do it in other languages such as `java`. Instead it creates the `constructor` call.
```javascript
function foo() {
  console.log("I'm function foo ");
}
var check = new foo();
```
When we use `new` keyword in front of function, there are 4 things happens as follows,
* Creates a brand new object
* Newly created object get's Linked.
* Brand new object gets bound as `this` keyword for the purpose of function call.
* Implicitly returns the newly created `this` keyword for this object if we don't have `return` in the function.

#### 11. Closure :
Closure is mathematic concept comes from lamda calculus. In simple term, Closure is a `function` remembers it's lexical scope even when it is (i.e function ) executed outside of that lexical scope.
```javascript
function foo(){
  var bar = "BAR";

  function boo(){
    console.log(bar);
  }

  bee(boo); //passing function reference
}

// here callback is boo
function bee(callback){
  callback(); // executing boo(); but gets bar from it's declaration lexical scope
}

foo(); // prints BAR
```
So the reference to the existing lexical scope is remembered while processing.

#### 12. Generators:
Special function which has `*` after the `function` keyword. Whenever we invoke generator function we get generator `object` in return instead of running the complete code ( how normal function code executes ). Then we make use of `next` method on generator object to execute the code until `yield` and/or `return` is defined. So executes like `iterator`.
  `yield` is a special keyword can only be executed with generator function.
```javascript
/* normal function */
function addNumber(a,b){
  const value = a + b;
  return value;
}

//can be called
let data = addNumber(3,1);

/* as generators */
function* addNumber(a,b){
  const value = a + b;
  return value;
}

// can be called
let gen = addNumber(3,1);
let data = gen.next();
```
example of using generators with promise
```javascript
function* delay(){
  yield new Promise(r=> setTimeout(r, 1000));
  return "hello";
}

//using Generators
let gen = delay();
gen.next().value.then(value=>{
  console.log(gen.next())
})
```

#### 13. Call, Apply, Bind

In javascript, object property can be passed to more generic function using `call` and/or `apply`. Both work similar way with very small difference. In both cases, the function doesn't need to know about the arguments. i.e call and apply execute a function in the context or scope of arguments.

call
```javascript
let obj = {num: 2};

let callExample = function (a){
  return this.num + a;
}
/**
 * callExample.call(object, function argument)
 *
 */
let callResult = callExample.call(obj, 10);
console.log(callResult); // 12 i.e 2 + 10;
```
If we have to pass more arguments to function then we can do like `callExample.call(obj, arg1, arg2, arg3)` but `apply` solves this problem by providing to use an array.

apply
```javascript
let obj = {num: 2};

let callExample = function (a,b){
  return this.num + a + b;
}
/**
 * callExample.call(object, function argument)
 *
 */
let arr = [5,5];
let callResult = callExample.apply(obj, arr);
console.log(callResult); // 12 i.e 2 + 5 + 5;
```

>> Use .bind() when you want that function to later be called with a certain context, useful in events. Use .call() or .apply() when you want to invoke the function immediately, and modify the context.

### 14. Function constructor vs prototype vs Object.create
The idea is to make use of inheritance using these three different ways, as we know everything in javascript is object except primitives (i.e String, boolean, Number, null, undefined ).

#### 14.1 Using function constructor
```javascript
/**
 1. Function constructor to define property
 2. Function name should start with capital letter
 **/
let Person = function(name, birthYear, job){
  this.name = name;
  this.birthYear = birthYear;
  this.job = job;
}

// both object uses Person object to build the property
let bob = new Person('Bob', '1995', 'Mechanic');
let rob = new Person('Rob', '1985', 'Doctor');
console.log(bob.job); // will print Mechanic
console.log(rob.job); // will print Doctor

/**
 we can add calculateAge method to Person object which can be reused,
 so the update `Person` function constructor would look like
 */
 let Person = function(name, birthYear, job){
   this.name = name;
   this.birthYear = birthYear;
   this.job = job;
   this.calculateAge = function(){
     return 2019 - this.birthYear;
   }
 }

 console.log(bob.calculateAge()); // will print 24
 console.log(rob.calculateAge()); // will print 34
```

#### 14.2 Using prototype
Instead of adding / updating the parent Person function constructor's property we can make
use of `prototype` property available by default in all objects. so defined Person constructor doesn't need to be get updated.

```javascript
// 1. Defining Person function constructor as usual
let Person = function(name, birthYear, job){
  this.name = name;
  this.birthYear = birthYear;
  this.job = job;
}

// 2. Creating new objects which references Person ( inherited )
let bob = new Person('Bob', '1995', 'Mechanic');
let rob = new Person('Rob', '1985', 'Doctor');

// 3. using prototype to define new method
Person.prototype.findAge = function(){
  return 2019 - this.birthYear;
}

// 4. check age
console.log(bob.findAge()); // will print 24
```

#### 14.3 Using Object.create
Instead of creating a function we would be creating an object, hence now upper case letter to begin with. Then we can make use of Object.create to build new object which will make use of existing object while creating new one.
```javascript
// 1. Defining new blueprint object
let personPrototype = {
  calculateAge: function(){
    return 2019 - this.birthYear;
  }
  // notice birthYear is not defined yet
}

// 2. creating new object by inheriting personPrototype
let john = Object.create(personPrototype);
john.name = 'John'
john.birthYear = 1977

// 3. another way is
let mark = Object.create(personPrototype, {
  name: { value: 'Mark'},
  birthYear: {value: 1967}
});
```



### Deep Dive:

#### 1. Pure Functions:

The reason i fumbled into pure functions are because of reducers method in Redux, it's fascinating how functional programming has evolved in javascript and wanted to make sure i learn the right way, so here i'm learning about pure functions.
  So what are pure functions after all ? If we remember our school mathematics we often used `f(x)=x*x`
where the function takes an argument `x` and returns by squaring the value. If we pass value x as 4, probably even 10 times the function return same out put all the time i.e `16`. Also the value of `x` doesn't change, once we pass the value to the function and external factor doesn't affect the output. For example: gravity `g=3.18` in a function changes if we need to calculate something on earth vs moon vs mars.

* pure functions doesn't mutate the state.
* pure functions returns same result for the same passed arguments.
* pure functions depend solely on passed arguments.

(i). Pure Function
```javascript
const value = (x) => x * x;
```

(ii). Impure Function
```javascript
const g = 3.18;
const value = (x) => x * g ;
```

(iii). Pure Function
```javascript
const value = ( x, g=3.18) => x * g;
```

#### 13. Inheritance

In typical object oriented programming (ex: java) when we do inheritance we are copying the the blueprint of the super class and creating new entity (child class). In javascript, we are linking the child class or entity to the parent using `prototype`.
Example: If `Vehicle` is a parent class then `car` and `bus` can be child class inherited from it. In javascript we can make this happen by `Vehile.prototype`.

>> In JavaScript when we create the object it does not copy the properties or behavior, it creates a link. Usage of Object.create() to achieve classical inheritance.





#### 2. Array Functions

2.1 Reduce

Reduce is javascript Higher-Order function, which takes `2` arguments and the syntax looks like `array.reduce(<callbackfunction>,<starting-value>)` But the callback function has two arguments as well, the total and the current iterating value. So

```javascript
 array.reduce(<callbackfunction>,<starting-value>); //step 1

 array.reudce((total, currentvalue) => { }, <starting-value>); // step II
// for the first call the accumulator value will be set to <stating-value>.

array.reudce((total, currentvalue) => { return total + currentvalue.value }, <starting-value>); // step iii
// the return value will become total value
```

Example:
```javascript
//aaray data
array = [
	{
  	name: "Bob",
    age: 12
  }, {
  	name:"Tom",
    age: 45
  }, {
  	name:"Rob",
    age: 21
  }, {
  name: "Jack",
  age: 11
  }
];

//reduce pure function on array
var check = array.reduce((accumulatedAge, eachValue) => {
	return accumulatedAge + eachValue.age;
},0)

//testing
console.log(JSON.stringify(array))
console.log(check);
console.log(JSON.stringify(array))
```
without alerting the array we were able to reduce the array for desired result.

Example:
Finding the maxium or minimum values from an object. if `let obj = {2:6, 3:1, 4:2, 5:9}` then we need to get `9` from the object value.
```javascript
let maxCount = Object.keys(obj).reduce((m,k) => { return obj[k] > m ? obj[k] : m})
console.log(maxCount)
```

2.2 Filter

Similarly we can use filter on an array to get the desired value. The syntax of the filter is `array.filter( (eachElementofanArray) => { return eachElementofanArray.value <condition> checkValue })`. Where `<condition>` can be `===`,`<=`,`>` any of the operator and checkValue will be value condition. See the below example for details,
```javascript
//aaray data
array = [
	{
  	name: "Bob",
    age: 12
  }, {
  	name:"Tom",
    age: 45
  }, {
  	name:"Rob",
    age: 21
  }, {
  name: "Jack",
  age: 11
  }
];

var check = array.filter((ele) => { return ele.age < 20 })
console.log(JSON.stringify(check))
```

2.3 Filter + reduce

If we want to get total age of people under 20 years old, we first apply filter on an array and apply reduce to get the total on filter returned array.

```javascript
//step 1:
var check = array.filter((ele) => { return ele.age < 20 })
console.log(JSON.stringify(check))

//step 2:
var final = check.reduce((accumulatedValue, eachValue) => {
	return accumulatedValue + eachValue.age;
},0)
console.log(final)
```
#### 3. Arrow Function:
Arrow functions are replacement of normal functions which also solves the problem of `this` in javascript. If we use `this` inside the arrow function then it will always be in the context. Simple example of normal vs arrow function is.
```javascript
// normal function
function calAge(number){
  return number * 2;
}
// arrow function
const calAge = (number) => {
  return number *2;
}
```
In both scenario we can call the function by `calAge(12);`. However this is further can be rewritten in single line using arrow function as const `const calAge = (number) => number * 2;` or `const calAge = number => number *2;`.

### DOM manipulation from javascript

#### Event Delegation:
One of the most powerful event handling pattern in javascript achieved by bubbling events. The idea is that if we lot of DOM elements handled in similar way then we can bubble all the event to it's common ancestor (i.e parent) and handle it at once. Example: If we have list of element's then we can have event listener attached to it's parent and handle it effectively.

```html
<ul id='myList'>
  <li>Bob</li>
  <li>Rob</li>
  <li>Ron</li>
</ul>
```
Now our javascript snippet to handle the event delegation will look like below, So whenever user clicks on any
```javascript
let parent = document.getElementById('myList');
// adding event listener to change color to yellow on click.
parent.addEventListner('click', function(event){
  const target = event.target;
  if(target.matches('li')){
    target.style.backgroundColor = 'yellow';
  }
});

/**
 *  Dynamically event listener is added.
 *  <li>Jon</li> will be added by this.
 */
const addNewLi = document.createElement('li');
addNewLi.textContent = 'Jon';
parent.appendChild(addNewLi);
```

#### Useful DOM Manipulation queries

javascript can be used to extract or manipulate document object property. Lets take an example html page here,
```html
<div class='first' id='first_id'>
  <div class='display_class_one active'> .... </div>
  <div class='display_class_two active' /> .... </div>
  <div class="player-score" id="score">90</div>
  <img src="dice-5.png" alt="Dice" class="dice" />
  <button class="btn-roll"><i class="ion-ios-loop" onclick="rollDice()"></i>PRESS</button>
</div>
```
1. get value 90 by id
```javascript
let value = document.getElementById('score').innerHTML;
//OR
let value = document.querySelector('#score').textContent;
```

2. update text value by id
```javascript
document.getElementById('score').innerHTML = '<em>'+20+'</em>';
//OR
document.querySelector('#score').textContent = 20;
```

3. Hiding image by CSS property (select by class)
```javascript
// none is used to hide the image by using css property
document.querySelector('.dice').style.display = 'none';
```

4. Displaying image by CSS property
```javascript
// block is used to display the image by css property
document.querySelector('.dice').style.display = 'block';
```

5. listening for click
```javascript
//without making use of onclick property defined in the button tag
// <button class="btn-roll"><i class="ion-ios-loop" onclick="rollDice()"></i>PRESS</button>
document.querySelector('.btn-roll').addEventListner('click', function(){ /*function body */})
```

6. Adding and removing class property
```javascript
/**
 syntax:
 document.querySelector('main_class_name').classList.remove('next_class_name')
 */

// this removes from this line <div class='display_class_one active'> .... </div>
document.querySelector('.display_class_one').classList.remove('active');

// this adds to this line <div class='display_class_two active' /> .... </div>
document.querySelector('.display_class_two').classList.add('active');
```

### Debouncing

 a debounce function is essential to ensuring a given task doesn't fire so often that it bricks browser performance. Example would be avoid calling restAPI for every user keystroke instead call when the user pauses at once or better way to handle onScroll events. To understand better, we have `simulateEvents` function which will call `logger` function every `100` milliseconds until the `clearTimeout` is called at `2000`th milliseconds. So we would expect some (2000/100 = 20) events generated when we call simulateEvents().
 ```javascript
 // prefix not that import until we also want to handle any passed arguments
 let logger = (prefix = 'message') => {
     console.log(prefix + ' : '+new Date().toString())
 }

let simulateEvents = () => {

      // calling logger every 100th mili seconds
      let interval = setInterval(logger, 100);

      //making sure we end the timeout
      setTimeout(function(){
          clearTimeout(interval)
      }, 2000)
}

simulateEvents();
```
So this would result / console output like below,
```javascript
message : Wed Feb 27 2019 22:29:29 GMT-0600 (Central Standard Time)
message : Wed Feb 27 2019 22:29:29 GMT-0600 (Central Standard Time)
message : Wed Feb 27 2019 22:29:29 GMT-0600 (Central Standard Time)
//...continues
```
Now using debouncing we could limit the number of times we can call the method based on the time interval we determine in the debouncing function.So it would be like
```javascript
let debounce = (inputFunction, interval) => {

    // need this to handle clearTimeout once the execution is complete
    let timeout;
    /**
     * hence debounce is a wrapper function which holds the given function execution
     * by requested interval. we need to return the function.
     */
    let wrapper = function () {
        // this will only be called once setTimeout time interval is met
        let debouncedFunction = function () {
            inputFunction.call(this);
        }

        clearTimeout(timeout);
        timeout = setTimeout(debouncedFunction, interval);
    }

    return wrapper;
}
```
Now all we need to do is wrap the logger function with debounce like `let newLogger = debounce(logger, 1000);` and pass it down to simulateEvents function
```javascript
let simulateEvents = () => {

      // calling logger every 100th mili seconds
      let interval = setInterval(newLogger, 100);

      //making sure we end the timeout
      setTimeout(function(){
          clearTimeout(interval)
      }, 2000)
}

simulateEvents();
```
Now we will only get ONE log messages instead of many. However we didn't worry about handling any arguments passed to the logger function instead of using default='message'. For this we would enhance the debounce function to handle `arguments` which captures passed arguments to the function and `apply` instead of `call` to handle array of objects / arguments.

```javascript
let logger = (prefix = 'message') => {
    console.log(prefix + ' : '+new Date().toString())
}

// logger to use debounce
let newLogger = debounce(logger, 1000);

// defining debounce
let debounce = (inputFunction, interval) => {

    let timeout;
    let wrapper = function () {
        let args = arguments; //should capture all passed arguments by default
        let debouncedFunction = function () {
            inputFunction.apply(this, args);
        }

        clearTimeout(timeout);
        timeout = setTimeout(debouncedFunction, interval);
    }

    return wrapper;
}

setTimeout(() => {
    loggerWithDebounced('baz');
}, 2000);
```
More detailed example on handling args is in this [example](https://github.com/citta-lab/javascript/blob/master/examples/debouncing-example.js). Also great medium blog [here](https://medium.com/walkme-engineering/debounce-and-throttle-in-real-life-scenarios-1cc7e2e38c68) and youtube video on debouncing [here](https://www.youtube.com/watch?v=QvJx9nXWmKc). 


### Storage

Typically almost all browsers are provided with storage options to cache your data in the browser. There are mainly two types of storage apart from `Cookies`, i.e `localStorage` and `sessionStorage`. The main difference between them are `localStorage` is persisted so the data will be saved if we close and re-open the browser and where as `sessionStorage` will be thrown away once the browser is closed. As you might have guessed they are independent of each other and we can use either one or both depending on the requirement.
  In `Chrome 18.0` we used to have `unlimited` local and session storage but soon after they started to limit the amount due to browser memory issue. [This](http://dev-test.nemikor.com/web-storage/support-test/) is the best link to check what is the available storage.
Oh why use sessionStorage instead of cookies ? because "To handle multiple transactions in different windows where cookies does it for single transactions".

Great article on [Medium](https://medium.com/@ramsunvtech/onfocus-html5-storage-apis-b45d92aa424b) by Venkat on browser storage.


Tricks:
-------------
1. Adding value to an Object

```javascript
var initialStage = {}; // empty object
check = () => {
  initialStage["name"] =  "Bob";
}

check();
console.log(JSON.stringify(initialStage));
```

2. Assigning object value to const

```javascript
const action = {
	day:"sat",
  meal:"chicken",
  name:"bob"
}
const { day, meal, name } = action;
const checkDay = action.day;

//checking
console.log(day);
console.log(meal);
console.log(name);
console.log(checkDay);
```

3. Slicing in Array

```javascript
array = [ "Bob", "Tom", "Rob", "Jack", "Jill"];

var value = array.slice(0,2)
console.log(" first time : "+value) // Bob,Tom
var value = array.slice(0,2)
console.log(" second time : "+value) //Bob,Tom
var value = array.slice(0,2)
console.log(" third time : "+value) //Bob,Tom
```
The value of the result doesn't change for the same passed arguments. This is one example for pure function.

4. Splice in Array
```javascript
array = [ "Bob", "Tom", "Rob", "Jack", "Jill"];

var value = array.splice(0,2)
console.log(" first time : "+value) // Bob,Tom
var value = array.splice(0,2)
console.log(" second time : "+value) //Rob,Jack
var value = array.splice(0,2)
console.log(" third time : "+value) //Jill
```
The value of the result does change for the same passed arguments. This is one example for impure function.


### Reference
1. Inheritance : https://codeburst.io/javascript-inheritance-25fe61ab9f85
2.
