1. Write a function `SUM` to calculate two number by calling `SUM(2)(3)` and/or `SUM(2,3)`.

```javascript
function sum(a, b){

  if( b !== undefined ){
    return a+b;
  }

  return function (b){
    return a+b;
  }
}

console.log(" SUM "+sum(2)(3));
console.log(" SUM "+sum(2,3));
```

2. Write a function to take default value of `10` if not provided.

ES5
```javascript
function foo(x){
  x = x !== undefined ? x : 10;
  console.log(" Value of x is : "+x);
}

foo(); // 10
foo(1); // 1
foo(null); //null
foo(undefined); // 10
```

ES6
```javascript
// is more of declarative
function (x=10){
  console.log(" Value of x is : "+x);
}
```

3. How many times the function `bar` is called ?

```javascript
function bar(){
  console.log(" Bar called !");
}

function food(x=bar()){
  console.log(" Foo is called");
}
// yes without calling foo(); but just with the definition
```
Answer: `0`. In JavaScript function executions will only happen if needed so bar() is not called until we
execute `foo()`. Pay attention `bar()` will not be executed if we pass any value to foo as we are telling
foo that take value as x. i.e `foo(1)` will not call `bar()`

4. What is the output ?

```javascript
var x = 1;
function foo( x=10, f = function () { return x; } ) {
  x = 5;
  console.log( f())
}
```
Answer: `5`. function `f()` is not called until x is reassigned with value `x=5` and hence the output is 5. however
if `x=5` is not present then output would be `10` not `1`.

5. What is the difference in `...args` ?
```javascript
function foo (...args){
  bar(...args)
}
```
In function `foo()` the parameters are passed with `assignment` context which `rest` or `gathers`. When the function is called with `value` / `list` context then it `spreads`. So same style is used in different function context. We can verify with below example,
```javascript
function foo (...args){
 console.log(args.length); //4
 bar(...args)
}

function bar(...array){
 console.log(" length of arguments is : "+array.length); //4
}

foo(11,22,5,12);
```

6. Change function `foo` to return true.
```javascript
function foo(){ }

function bar(){
  var a1 = [ 2, 4 ];
  var a2 = [ 6, 8, 10, 12 ];

  return foo(...a1, ...a2);
}

console.log( bar().join("") === "281012")
```
Answer :
```javascript
/**
  x takes 2 and y takes 4 and z takes 6, ...args take rest of the arguments
  */
function foo(x,y,z, ...args){
     return [x,...args]
}
```

7. What is the value of `d` and `x` in below scenario ?
```javascript
function foo(){
  return [3,4,1,[6,5],8];
}

//scenario 1
var [ a,b,c,d] = foo();

//scenario 2
var e,f;
var x = [e,f] = foo();
```
In Scenario 1, the value of `d` would be inner array `[6,5]` and not the destructured  6,5.
In Scenario 2, the value of `x` would be whole array `[3,4,1,[6,5],8]` not `[3,4]` because `[a,b]` is not
an array but it's a pattern to destructure an array. So the destructured pattern `[a,b]` returns the
whole array.

8. How do you handle function with 6 parameters but user is calling function with 3 arguments ?
We can make use of object destructure and named parameter. i.e instead of passing arguments to functions
we should pass an object with named arguments.
```javascript
function foo({ a, b=11, c}){
  console.log(a);
  console.log(b);
  console.log(c);
}

foo({c:1}) // will print a as undefined, b as 11 (default value), c as 1
foo({a:2, b:12}) // will print a as 2, b as 12 and c as undefined.
```
