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
# Reference:

- [currying on SUM](https://theanubhav.com/2019/02/03/js-currying-in-interview/#add234-for-endless-number-of-parameters)
