
### 1. Print a given word in reverse order ?

Printing the given word in reverse order, we might have to understand how many letters the word/string has and print the word from right to left. The concept is similar to stacking (first in, last out). We can achieve this by making use of an `array`, as an array supports stacking.

#### Data structure: stacks
#### Given word: 'racecar'

```javascript
function reverser(word){

  /*step1: retrieve string into an array so we can easily
  reverse using pop each letter once we have an array*/
  let array =[];
  for(var i=0; i<word.length; i++){
    array.push(word[i])
  }

  /*step2: As mentioned in step1, we can pop the letters from
  the stack*/
  let rWord = "";
  for(var i=0; i<word.length; i++){
    rWord += array.pop();  // i.e rWord = rWord + word.pop();
  }

  return rWord;
}
```
checking the pure function to see if the given word is reversed.
```javascript
let word = "racecar";
let rWord = reverser(word);

if(word === rWord){
  console.log(" Yay, and the reverse word is : "+rWord.toString());
}else{
  console.log(" Nay, something went wrong");
}
```

#### Pointers
1. length of the word is 7, but the array index starts from 0. so use `i<word.length` instead of `i<=word.length`;
2. `pop()` works on array not string.
