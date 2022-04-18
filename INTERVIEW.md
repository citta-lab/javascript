# 1. Implement SUM(x)(y)(z)

Create a function which takes n arguments and returns the sum when called at the end. Example i should be able to call sum with one are many arguments. This problem uses core principle of currying.

Example:
sum(2)(3)() => 5
sum(2) => 2
sum(2)(3)(3)() => 8

## 1.1 Using `arguments.length`

```js
function sum(x) {
  let result = x;
  return function resultSum(y) {
    if (arguments.length) {
      result = result + y;
      return resultSum;
    }
    return result;
  };
}

console.log(sum(2)(3)(4)(9)());
```

## 1.2 Using ternary and array function

```js
let sum = (a) => (b) => b ? sum(a + b) : a;
console.log(sum(2)(3)(4)());
```

# 2. Implement SUM(x)(y)(z) and SUM(x,y,z) in same function





# 3. Private Variable 

## 3.1 Create private variable 
```js
function getPrivateVariable(){
    let private = 'private variable value';
    return function (){
        return private;
    }
}

let value = getPrivateVariable();
console.log(value());
```

# 4. Create 'Native' methods

## 4.1 Implement "repeatify" on String

In this example, we have asked to implement "repeatify" on custom String type so anyone can 
leverage that. Example: we have inbuilt repeat works on string like "hello".repeat(3) gives
"hellohellohello". 
```js
/** inbuilt repeat example */
let test = "hello".repeat(3);
console.log(test); // hellohellohello

/** our custom repeatify example */
String.prototype.repeatify = String.prototype.repeatify || function (arg) {
    if(arg <= 1) return this;

     let result = '';
     while(arg > 0){
         result += this;
         arg --
     }

     return result
}

let testRepeat = "hello".repeatify(3);
console.log(testRepeat);
```
By doing `String.prototype.repeatify || function (arg)` or condition we are "SHIM" a
javacript function which will prevent overriding the default.


# 5. Closure
## 5.1 Fix setTimeout to print i
count should be incremented and matched with i in for loop until i < 4
```js
var count = 0; 
for ( var i = 0; i < 4; i++ ) { 
  setTimeout(function(){ 
    console.log(i === count++); // returns false
  }, i * 200); 
}
```
Answer: Making use of anonymous function and closure
```js
var count = 0; 
for ( var i = 0; i < 4; i++ ) (function(i){ 
  setTimeout(function(){ 
    console.log(i === count++); // returns true
  }, i * 200); 
})(i)

```

# Reference:

- [currying on SUM](https://theanubhav.com/2019/02/03/js-currying-in-interview/#add234-for-endless-number-of-parameters)
