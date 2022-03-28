
# Class 

## HTML
```html
<div>
	<h1 class="multi-class header first title">
        I am super classy!
    </h1>
</div>

```

## Get Value
```js
console.log(document.querySelector('h1').classList.length); // 4
console.log(document.querySelector('h1').classList.value); // multi-class header first title
```

## Add Value 
```js
document.querySelector('h1').classList.add('addNewClass');
console.log(document.querySelector('h1').classList.value); // multi-class header first title addNewClass
```

## Remove Value
```js
document.querySelector('h1').classList.remove('addNewClass');
console.log(document.querySelector('h1').classList.value); // multi-class header first title
```

## Replace Value
```js
document.querySelector('h1').classList.replace('title', 'newTitle');
console.log(document.querySelector('h1').classList.value); // multi-class header first newTitle
```