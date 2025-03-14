const ul = document.querySelector("ul");
const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const data = input.value.trim();
  if(!data)
    return;

  input.value = "";

  const li = document.createElement("li");
  li.classList.add("todo-item");
  li.innerHTML += `<p id="todo">${data}</p>`;

  const button = document.createElement("button");
  button.classList.add("delBtn");
  button.innerText = "Xóa";
  button.addEventListener("click", () => button.previousElementSibling.classList.toggle("removed"));
  
  li.appendChild(button);
  ul.appendChild(li);
});
