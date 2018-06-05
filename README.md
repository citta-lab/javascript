javascript [ juggling pebbles ]
--------------------------

playground: https://jscomplete.com/repl/  

### Pointers:
1. Inline if-else is to use conditional operator `condition ? true : false`.
2. In JavaScript, `true && expression` always evaluates to `expression`, and `false && expression` always evaluates to `false`. Example: ` check == 20 && check-1`, if check is equal to 20 then we will deduct one from it.
3. `var` is variable and can be changed where as `const` is like final in java. since `ES6` we use `let` instead of `var` which has smaller scope than the variable.
4. We explicitly need to define `export` and `import` in javascript. We can also do explicit import by named import example `import {calAge} from './fileName.js'` which ignores all the export definition from fileName and only imports `calAge`.
5. Use `toFixed(2)` to convert floating number into two digit value. Example: `3.232444` will be printed as `3.23`.


### Parts Unknown:

1. `ReferenceError` occurs whenever javascript engine RHS lookup (right hand side / retrieve her/his source of truth) fails to find the defined variable in nested `Scope`.
```javascript
var a =1; /* LHS lookup done to assign value to a */
function add(){
  return a+b; /* RHS lookup to retrieve values but can't find b neither
  in local scope (with in function) nor in global */
}
```

2. `Lexical Scope` the way engine finds the variable declaration during quick compilation (which happens right before runtime). ( i.e looks for local 'Scope' and move on to global 'Scope').
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

3. `Strict Mode` is created in ES5 and disallows the engine to create `global scope` variable when `LHS` lookup doesn't finds the variables declared already.

4. `ReferenceError` is Scope resolution-failure related, whereas `TypeError` implies that Scope resolution was successful, but that there was an illegal/impossible action attempted against the result.

5. `Shadowing`, during lexical scope evaluation if the engine finds the local variable ( example: `a`) declared inside the function then it wouldn't look for global variable. This is `Shadowing`, this helps to have variables with same name in different scope. However we can skip the lexical shadowing and access global variable by it's window property ( in browsers ) by doing `window.a`.
```javascript
/* Refer same example from lexical scope */
```
6. `Module Management`, Whenever we use libraries javascript engine creates unique object in global namespace and assign library related variables and functions to it. This helps preventing polluting global namespace, Similarly using `Module Management` we explicitly need to export and import which helps preventing polluting the namespace.



### Deep Dive:

1. Pure Functions:

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

2. Array Functions

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
3. Arrow Function:
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

### Storage

Typically almost all browsers are provided with storage options to cache your data in the browser. There are mainly two types of storage apart from `Cookies`, i.e `localStorage` and `sessionStorage`. The main difference between them are `localStorage` is persisted so the data will be saved if we close and re-open the browser and where as `sessionStorage` will be thrown away once the browser is closed. As you might have guessed they are independent of each other and we can use either one or both depending on the requirement.
  In `Chrome 18.0` we used to have `unlimited` local and session storage but soon after they started to limit the amount due to browser memory issue. [This](http://dev-test.nemikor.com/web-storage/support-test/) is the best link to check what is the available storage.
Oh why use sessionStorage instead of cookies ? because "To handle multiple transactions in different windows where cookies does it for single transactions".

Great article on [Medium](https://medium.com/@ramsunvtech/onfocus-html5-storage-apis-b45d92aa424b) by Venkat on browser storage.
