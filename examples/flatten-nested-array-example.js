/**
 * Flatten Nested Array
 *
 * Input:
 * let arr = [1,2,[3,4,[5,6],7],8,[9,[10,11]]]
 * Output: [1,2,3,4,5,6,7,8,9,10,11]
 *
 */

function flatten(arr, resultArray = []) {
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      return flatten(item, resultArray);
    }
    resultArray.push(item);
  });

  return resultArray;
}

let arr = [1, 2, [3, 4, [5, 6], 7], 8, [9, [10, 11]]];
console.log(flatten(arr));
