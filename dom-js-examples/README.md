# By Examples (JS-HTML)

## 1. Append to Body
```js
let body = document.body;
let li = document.createElement('li')
li.innerText = 'New Child'
body.append(li); /** <--- NEED to do this always */
```

## 2. Diff between appendChild vs append
```js
body.append('hi');
body.appendChild('li'); /** <--- DOESNT WORK, only takes elements */
```

## 3. Diff innerText vs textContent 
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
## 4. Update Attribute Value
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

## 5. Remove Attribute
```HTML
<!-- remove id 'change' from span -->
<span id='change'> Change/Add atrtribute <span>
```
```js
let span = document.querySelector('span');
span.removeAttribute('id');
```

## 6. Add/Remove/Toggle and get by Class
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

/** get specific class named element */
let className = document.getElementsByClassName('first second');
console.log(className); //  My Classes
```

## 7. Query A DOM element 
```HTML
<span class='first'> First <span>
<span class='second'> Second <span>
<div> Can you find me </div>
```
```js
let span = document.querySelector('span');              /** gets all spans */
let spanSecond = document.querySelector('span.second'); /** gets span with second class */

let firstDiv = document.querySelector('body > div');    /** gets first div */
```

## 8. Query All DOM element 
```HTML
<span class='second'> Second <span>
<div> Can you find me </div>
<div> Can you find me </div>
```
```js
let allDivs = document.querySelectorAll('div');
console.log(allDivs)
allDivs.forEach((div) => {
  div.setAttribute('style', 'background-color:red')
})
```

## 9. Highlight Text 
```HTML
<p id='search'> 
   Here i'm looking for First occurance of first 
   so we can highlight and ignore second over First 
</p>
```
```js
let searchText = 'First';

let allText = document.getElementById('search').innerHTML
if(allText){
  let matchText = new RegExp(searchText,"g");
  let newText = allText.replace(matchText, `<mark>${searchText}</mark>`);
  document.getElementById("search").innerHTML = newText;
}
```
Reference [here](https://dev.to/comscience/highlight-searched-text-on-a-page-with-just-javascript-17b3) or Another [here](https://stackoverflow.com/questions/8644428/how-to-highlight-text-using-javascript)



# By Demo (JS-HTML) Examples 

| No. | Questions | Related |
|---- | --------- | --------- |
|1  | [Higlight & Disable on click](https://github.com/citta-lab/javascript/blob/master/dom-js-examples/li-element-higlighter.md) | preventDefault , innerText, style.backgroundColor |
