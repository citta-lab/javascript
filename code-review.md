# CODE REVIEW 

Great repo with details https://github.com/ryanmcdermott/code-review-tips 

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



