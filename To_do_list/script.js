document.addEventListener("DOMContentLoaded", function () {
  const enterButton = document.getElementById("enter");
  const input = document.getElementById("userInput");
  const itemList = document.getElementById("itemList");

  function inputLength() {
    return input.value.length;
  }

  function createListElement() {
    if (inputLength() > 0) {
      const li = document.createElement("li");
      li.className = "list-group-item";
      li.appendChild(document.createTextNode(input.value));
      itemList.appendChild(li);
      input.value = "";

      function crossOut() {
        li.classList.toggle("done");
      }

      li.addEventListener("click", crossOut);

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "btn btn-danger btn-sm float-end";
      deleteBtn.appendChild(document.createTextNode("X"));
      li.appendChild(deleteBtn);

      deleteBtn.addEventListener("click", function () {
        li.classList.add("delete");
      });
    }
  }

  function addListAfterClick() {
    createListElement();
  }

  function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.key === "Enter") {
      createListElement();
    }
  }

  enterButton.addEventListener("click", addListAfterClick);
  input.addEventListener("keypress", addListAfterKeypress);
});
