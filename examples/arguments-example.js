/****************************************************************
 *
 *  Example: Arguments
 *  Merging many objects to parent object.
 *
 *
 ****************************************************************/
function merge(root) {
  for (let i = 1; i < arguments.length; i++) {
    for (let key in arguments[i]) {
      root[key] = arguments[i][key];
    }
  }

  return root;
}

let merged = new merge(
  { name: "bob" },
  { age: "23" },
  { occupation: "engineer" }
);
console.log(merged);

/****************************************************************
 *
 *  Example: Arguments callee for referencing Function
 *
 *
 ****************************************************************/
// without the use of arguments.callee
var ninja = {
  yell: function (n) {
    return n > 0 ? ninja.yell(n - 1) + "a" : "hiy";
  },
};

console.log(ninja.yell(4)); // 'hiyaaaa'

// fixing by making it generic
ninja = {
  yell: function (n) {
    return n > 0 ? arguments.callee(n - 1) + "a" : "hiy";
  },
};

console.log(ninja.yell(4)); // hiyaaaa


/**
 * ******************************************************************
 * Example 3:
 * Converting arguments to Array 
 * Note: arguments is not an array but has length property
 * ******************************************************************
 */

 function highest(){ 
  return Array.from(arguments).sort(function(a,b){ 
    return b - a; 
  }); 
} 

function highest(){ 
  return Array().slice.call(arguments).sort(function(a,b){ 
    return b - a; 
  }); 
} 

function highest(){ 
  return [...arguments].sort(function(a,b){ 
    return b - a; 
  }); 
} 