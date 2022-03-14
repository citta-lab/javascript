# Highlight <li> element 

## HTML
```html
<ul id="myList">
    <li>Bob</li>
    <li>Rob</li>
    <li>Donald</li>
    <li>Ron</li>
</ul>
```

## JS
- Highlight upon clicking <li>
- Disable actions on particular element 
```js
import "./styles.css";

let parent = document.getElementById("myList");

parent.addEventListener("click", function (event) {
  if (event.target.matches("li")) {
    /** DISABLE if the name is DONALD */
    if (event.target.innerText === "Donald") {
      event.preventDefault();
    }

    if (event.target.innerText !== "Donald") {
      event.target.style.backgroundColor = "yellow";
    }
  }
});
```

[CodeSandbox](https://codesandbox.io/s/hardcore-chihiro-isf02c?file=/index.html:199-304)