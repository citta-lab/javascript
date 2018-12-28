
### 1. Print a given word in reverse order ?

Printing the given word in reverse order, we might have to understand how many letters the word/string has and print the word from right to left. The concept is similar to stacking (first in, last out). We can achieve this by making use of an `array`, as an array supports stacking.

Data structure: stacks   
Given word: 'racecar'

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


### 2. Remove any duplicates in the list ?
We take an array and return the cleaner array.
```javascript
function removeDuplicates(array){
	if(array.length < 0){
		return;
	}

	var cleanArray = [];
	for(let i=0; i<array.length; i++){
		if(cleanArray.indexOf(array[i]) < 0){
			cleanArray.push(array[i]);
		}else{
			// we don't need this but keeping it for visualization
			console.log(" duplicate : "+array[i]);
		}
	}

	return cleanArray;
}
```
checking example
```javascript
values = removeDuplicates([1,2,3,4,5,3,2]) // returns [1, 2, 3, 4, 5]
```

### 3. Implement an algorithm to determine if a string has all unique characters. What if you can not use additional data structures?
In this situation we can make use of array to hold the values if it's not already present and if it does then we
return true.
```javascript
function hasDuplicate(array){
	if(array.length < 0){
		return;
	}

	var cleanArray = [];
	for(let i=0; i<array.length; i++){
		if(cleanArray.indexOf(array[i]) < 0){
			cleanArray.push(array[i]);
		}else{
			return true;
		}
	}

	return false;
}
```
checking example
```javascript
hasDuplicate([1,3,4,6,7]); // returns false
hasDuplicate([1,3,4,6,7,3]); // returns true
```

### 4. Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees.

```javascript
function rotate(matrix){
	const size = matrix.length - 1; // size of an original array
	var result = matrix.map((row,i) => row.map((data, j) => matrix[size-j][i]));
	return result;
  //if we need to return the same array
  /**
    * matrix.length = 0;
    * matrix.push(...result);
    * return matrix;
  */
}
```
check example
```javascript
var data = [["a", "a", "a", "a"],
["b", "b", "b", "b"],
["c", "c", "c", "c"],
["d", "d", "d", "d"]];

rotate(data);

// will return 90 degree rotate array
["d", "c", "b", "a"]
["d", "c", "b", "a"]
["d", "c", "b", "a"]
["d", "c", "b", "a"]
```

### 5. Shift and Rotate an array.
The idea is is to not completely rotate an array but move or shift array by given `n` element and put it back in the beginning of an array. i.e

```javascript
function rotateOneDimenArray(array, shiftSize){
	if(array.length < 0 && shiftSize < 0 && array.length < shiftSize ){
		return;
	}

	var leftArrayPart = [];
	var rightArrayPart = [];

	for(let i=0; i<array.length; i++){
		if(i<=shiftSize){
			rightArrayPart.push(array[i]);
		}else{
			leftArrayPart.push(array[i]);
		}
	}

	leftArrayPart.push(...rightArrayPart);

	return leftArrayPart;
}
```
validate function
```javascript
var data = ['a','b','c','d','e'];
rotateOneDimenArray(data, 2);

//should result in
['c','d','e','a','b']
```
