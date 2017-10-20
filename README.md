javascript [ juggling pebbles ]
--------------------------

playground: https://jscomplete.com/repl/  

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
