# By Demo (JS-HTML) Examples 

## Append to Body
```js
let body = document.body;
let li = document.createElement('li')
li.innerText = 'New Child'
body.append(li); /** <--- NEED to do this always */
```

## Diff between appendChild vs append
```js
body.append('hi');
body.appendChild('li'); /** <--- DOESNT WORK, only takes elements */
```

## Diff innerText vs textContent 
```HTML
<ul id="myList">
      <li>Bob</li>
      <li>Rob</li>
      <li style ="display:none">Donald</li>
      <li>Ron</li>
 </ul>
```

```js
console.log(body.textContent); /** reads hidden element */
console.log(body.innerText); /** does not read hidden element and maintains the way it loosk on screen */
```
## Update Attribute Value
```HTML
<!-- update id 'change' to 'new-change' -->
<span id='change'> Change/Add atrtribute <span>
```
```js
let span = document.querySelector('span');
let idValue = span.getAttribute('id');

if(idValue === 'change'){
  span.setAttribute('id', 'new-change');
}

let newIdValue = span.getAttribute('id');
console.log(newIdValue);
```

## Remove Attribute
```HTML
<!-- remove id 'change' from span -->
<span id='change'> Change/Add atrtribute <span>
```
```js
let span = document.querySelector('span');
span.removeAttribute('id');
```

## Add/Remove/Toggle Class
```HTML
<span class='first second'> My Classes <span>
```
```js
/** ADDING CLASS third */
let span = document.querySelector('span');
span.classList.add('third'); // class = "first second third"

/** REMOVE class first */
let span = document.querySelector('span');
span.classList.remove('first'); // class="second"

/** ADD/REMOVE dynamically based on whether we have four already */
let span = document.querySelector('span');
span.classList.toggle('four'); // class="first second four"
```

## Query DOM
```HTML
<span class='first'> First <span>
<span class='second'> Second <span>
```
```js
let span = document.querySelector('span');              /** gets all spans */
let spanSecond = document.querySelector('span.second'); /** gets span with second class */
```

| No. | Questions | Related |
|---- | --------- | --------- |
|1  | [Higlight & Disable on click](https://github.com/citta-lab/javascript/blob/master/examples/bind-complete-example.js) | preventDefault , innerText, style.backgroundColor |
