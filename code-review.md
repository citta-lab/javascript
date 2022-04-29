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

### Code Review Summary:

In doing a code review, you should make sure that:

- The code is well-designed.
- The functionality is good for the users of the code.
- Any UI changes are sensible and look good.
- Any parallel programming is done safely.
- The code isn’t more complex than it needs to be.
- The developer isn’t implementing things they might need in the future but don’t know they need now.
- Code has appropriate unit tests.
- Tests are well-designed.
- The developer used clear names for everything.
- Comments are clear and useful, and mostly explain why instead of what.
- Code is appropriately documented (generally in g3doc).
- The code conforms to our style guides

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



