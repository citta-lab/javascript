
/** Example object */
const person = {
  name: 'Bob',
  age: 23,
  education: 'phd'
}

console.log(JSON.stringify(person)); // '{"name":"Bob","age":23,"education":"phd"}'


/** Defined toJSON function */
person.toJSON = function(){
  delete this.age // this is person object and we are deleting the age property
  return this
}

console.log(JSON.stringify(person)); //'{"name":"Bob","education":"phd"}'
console.log(person); //{ name: 'Bob', age: 23, education: 'phd', toJSON: ƒ () }
