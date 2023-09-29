const addInput = document.getElementById("add-field");
const colorInput = document.getElementById("color-field");
const itemList = document.getElementById("item-list");
const listDiv = document.getElementById("list-div");
const toggle = document.getElementById("toggle-button");

// hide/show list
function toggleButton() {
  if (listDiv.style.display === "none") {
    listDiv.style.display = "block";
    toggle.innerText = "Hide list";
  } else {
    listDiv.style.display = "none";
    toggle.innerText = "Show list";
  }
}

// add item
function addItem() {
  const lastPickedColor = colorInput.value;
  const li = document.createElement("li");
  li.innerHTML = addInput.value;
  li.style.color = lastPickedColor;
  changeColor();
  itemList.appendChild(li);

  addInput.value = "";
}

// remove item
function removeItem() {
  let li = document.querySelector("li:last-child");
  itemList.removeChild(li);
}

// change color
function changeColor() {
  const list = document.querySelectorAll("li");
  const lastPickedColor = colorInput.value;
  colorInput.value = '';
  for (let i = 0; i < list.length; i++) {
    list[i].style.color = lastPickedColor;
  }
}

// Uppercase
itemList.addEventListener("mouseover", (event) => {
  if (event.target.tagName === "LI") {
    event.target.style.textTransform = "uppercase";
  }
});

// Lowercase
itemList.addEventListener("mouseout", (event) => {
  if (event.target.tagName === "LI") {
    event.target.style.textTransform = "lowercase";
  }
});

// Enter key add items
addInput.addEventListener("keypress", function onEvent(event) {
  if (event.key === "Enter") {
    addItem();
  }
});

// Enter key items color change
colorInput.addEventListener("keypress", function onEvent(event) {
  if (event.key === "Enter") {
    changeColor();
  }
});