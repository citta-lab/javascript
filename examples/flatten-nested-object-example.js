/**
 * Flatten nested Object into one root array
 *
 * i.e create array of objects from array of nested objects and arrays.
 * Example:
 * we have family history with all of thier names and thier respective childrens, grand childrens.
 * However we would like to see all of their names and age flattened so we can view easily.
 *
 * Reference:
 */

/** Sample Data: Nested array of objects */
const familyTree = [
  {
    id: "23b9dbff",
    name: "Jessie",
    age: 50,
    children: [
      {
        id: "5c0f3094",
        name: "Peter",
        age: 20,
      },
      {
        id: "c1484221",
        name: "Paul",
        age: 32,
        children: [
          {
            id: "2e6d866e",
            name: "Carol",
            age: 12,
          },
          {
            id: "e48a27ad",
            name: "Hester",
            age: 15,
          },
        ],
      },
      {
        id: "8a265c23",
        name: "Hilda",
        age: 25,
      },
    ],
  },

  {
    id: "53164b2b",
    name: "Mathew",
    age: 70,
    children: [
      {
        id: "b14a960c",
        name: "Spencer",
        age: 45,
        children: [
          {
            id: "ff3c260c",
            name: "Joseph",
            age: 22,
          },
          {
            id: "ff3c260c",
            name: "Joseph",
            age: 22,
          },
          {
            id: "ff3c260c",
            name: "Joseph",
            age: 22,
          },
          {
            id: "7c60920a",
            name: "Robert",
            age: 27,
            children: [
              {
                id: "0e11874f",
                name: "Ian",
                age: 2,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "5a4bdc98",
    name: "Claire",
    age: 63,
    children: [
      {
        id: "014b62a3",
        name: "Adrian",
        age: 41,
      },
      {
        id: "a1899541",
        name: "Julie",
        age: 32,
        children: [
          {
            id: "013362a3",
            name: "Patricia",
            age: 4,
          },
        ],
      },
    ],
  },
];

/**
 * ******************************************************************
 * Example 1:
 * Flatten nested Object
 * ******************************************************************
 */

function flatten(nestedObjArr, result = []) {
  nestedObjArr.forEach((obj) => {
    let copy = { ...obj };
    delete copy.children;
    result.push(copy);
    if (obj.children) {
      return flatten(obj.children, result);
    }
  });

  return result;
}

/** result like [ { id: '23b9dbff', name: 'Jessie', age: 50 },  { id: '5c0f3094', name: 'Peter', age: 20 }] */
console.log(flatten(familyTree));

/**
 * ******************************************************************
 * Example 2:
 * Flatten nested Object and Remove Duplicates
 * ******************************************************************
 */

let visited = new Set();
function flattenRemoveDup(nestedObjArr, result = []) {
  nestedObjArr.forEach((obj) => {
    let copy = { ...obj };
    delete copy.children;
    if (!visited.has(copy.name)) {
      visited.add(copy.name);
      result.push(copy);
    }
    if (obj.children) {
      return flattenRemoveDup(obj.children, result);
    }
  });

  return result;
}

/** removes duplicate Joseph entry :  { id: 'ff3c260c', name: 'Joseph', age: 22 } */
console.log(flattenRemoveDup(familyTree));
