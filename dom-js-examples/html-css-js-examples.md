# HTML CSS and JS 

In this list we will be focusing on listing some of the basic interview questions people
might ask to build during the interview setting. 

1. [Build Analogue Clock](#build-analogue-clock)
2. [Dynamically Generate a Table](#dynamically-generate-a-table)
3. [Create Accordion without javascript](#create-accordion-without-javascript)
4. [Spinning wheel demo](#spinning-wheel-demo)
4. [Dialog box and a Modal](#dialog-box-and-a-modal)
5. [Todo App](https://freshman.tech/todo-list/)
6. [Nested Comment and Reply](https://github.com/savinuvijay/nested-comments)
7. [Drag and Drop Example](https://codesandbox.io/s/zj0bk?file=/src/index.js)
8. [Todo App with completed/uncompleted](https://codesandbox.io/s/sjm6l)
9. [Tic Tac Toe](https://codepen.io/AndyMilneDotIO/pen/bGrwRyZ)

## React Examples 
9. [Todo List](https://codepen.io/termyanen/pen/vMWoox)
11. [Tic Tac Toe](https://codepen.io/meeramenon07/pen/qBNBLRy)


1. ### Build Analogue Clock
```js
initialiseClock();
setInterval(function() {
    initialiseClock();
}, 1000);

function initialiseClock() {
    /** these property div class needs to be in HTML markup */
    const timeTypes = ["second", "minute", "hour"];
    timeTypes.map(function(timeType) {
        document.querySelector(
            `.${timeType}`
        ).style.transform = `rotate(${getTime(
          timeType,
          timeType === "hour" ? 12 : 60
        )}deg)`;
    });
}
```
complete example is in the medium [blog](https://medium.com/@iamclaudiajayne/analogue-clock-using-html-css-and-javascript-3a205b18039f) 

2. ### Dynamically Generate a Table 
In this example we will need to create a matrix or table upon user input and fill in the numbers.


complete example is in the medium [blog](https://medium.com/@iamclaudiajayne/a-javascript-challenge-from-google-95b7dcf0c0a4) 

3. ### Create Accordion without javascript
In this example there are THREE panles stacked together as an accordion with the help of CSS and HTML. To have the first item open by default we will need to have "open" applied to the tag. Click on the demo code to see more in details 
```html 
<details open>
    <summary>The title of the first accordion</summary>
    <p>Anything else</p>
    <div>Anything really <span>not kidding</span></div>
</details>
<details >
    <summary>The title of the second accordion</summary>
    <p>Anything else</p>
    <div>Anything really <span>not kidding</span></div>
</details>
```
complete example is in the medium [blog](https://medium.com/@iamclaudiajayne/creating-an-accordion-without-javascript-84abfb0705c4) 

4. ### Spinning Wheel Demo
The detailed question on spinning wheel is [here](https://github.com/HIVERY/spin_the_wheel).
- Wheel should contain numbers 1 to 10
- User should be able to click on it to spin 

complete example is this github [blog](https://github.com/blakkat/spin-the-wheel) and the demo along with code is [here](https://codepen.io/stamfette/pen/WNjGJjR)

5. ### Dialog Box and a Modal
```js
var updateButton = document.getElementById('updateDetails');
var favDialog = document.getElementById('favDialog');
var outputBox = document.querySelector('output');
var selectEl = document.querySelector('select');
var confirmBtn = document.getElementById('confirmBtn');

// "Update details" button opens the <dialog> modally
updateButton.addEventListener('click', function onOpen() {
  if (typeof favDialog.showModal === "function") {
    favDialog.showModal();
  } else {
    alert("The <dialog> API is not supported by this browser");
  }
});
// "Favorite animal" input sets the value of the submit button
selectEl.addEventListener('change', function onSelect(e) {
  confirmBtn.value = selectEl.value;
});
// "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
favDialog.addEventListener('close', function onClose() {
  outputBox.value = favDialog.returnValue + " button clicked - " + (new Date()).toString();
});
```

complete example is in the medium [blog](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) 
