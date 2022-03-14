# HTML FORM 

## HTML
```html
<h1>Form</h1>
    <div>
      <form id="form-id" onsubmit="onSubmit()">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" value="My name" name="name" />
        </div>
        <div>
          <div>Gender:</div>
          <div>
            <input type="radio" id="female" name="gender" value="female" />
            <label for="female">Female</label>
          </div>
          <div>
            <input type="radio" id="male" name="gender" value="male" />
            <label for="male">Male</label>
          </div>
        </div>
        <div>
          <label for="selectOne">Select one:</label>
          <select id="selectOne" name="selectOne">
            <option value="optionOne">Option one</option>
            <option value="optionOne">Option Two</option>
          </select>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
```

## JS
```js
const form = document.getElementById("form-id");
form.onsubmit = e => {
  e.preventDefault();
  console.log(e);
  var formData = new FormData(form);
  console.log(formData);
};

```

Reference: https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData