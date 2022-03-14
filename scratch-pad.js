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
