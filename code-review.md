# CODE REVIEW 

Great repo with details https://github.com/ryanmcdermott/code-review-tips 

Code reviews should look at:

1. **Design:** Is the code well-designed and appropriate for your system?
2. ***Functionality:** Does the code behave as the author likely intended? Is the way the code behaves good for its users?
3. **Complexity:** Could the code be made simpler? Would another developer be able to easily understand and use this code when they come across it in the future?
4. **Tests:** Does the code have correct and well-designed automated tests?
5. **Naming:** Did the developer choose clear names for variables, classes, methods, etc.?
6. **Comments:** Are the comments clear and useful?
7. **Style:** Does the code follow our style guides?
8. **Documentation:** Did the developer also update relevant documentation?

ref: https://google.github.io/eng-practices/review/ 

## 1. Use Promise 
```js
fetch('https://example.com/profile/avatar', {
  method: 'PUT',
  body: formData
})
.then(response => response.json())
.then(result => {
  console.log('Success:', result);
})
.catch(error => {
  console.error('Error:', error);
});
```

## 2. Use Async 

```js
async function f() {
  try {
    let response = await fetch('/no-user-here');
    let user = await response.json();
    return user;
  } catch(err) {
    console.error(err);
  }
}
```

## 3. Sanitize to prevernt XSS attack
```js
var sanitizeHTML = function (str) {
	var temp = document.createElement('div');
	temp.textContent = str;
	return temp.innerHTML;
};
```

```html
// Renders <h1>&lt;img src=x onerror="alert('XSS Attack')"&gt;</h1>
div.innerHTML = '<h1>' + sanitizeHTML('<img src=x onerror="alert(\'XSS Attack\')">') + '</h1>';
```
ref:https://gomakethings.com/preventing-cross-site-scripting-attacks-when-using-innerhtml-in-vanilla-javascript/



