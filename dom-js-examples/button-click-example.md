# Button Click

## HTML
```html
<div>
	<button id='clickme'>Click</button>
</div>

```

## JS
```js
let button = document.getElementById('clickme');

button.addEventListener('click', () => {
  console.log('clicked')
});
```