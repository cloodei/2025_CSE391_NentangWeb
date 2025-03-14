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

  const btn = document.createElement("btn");
  btn.classList.add("delBtn");
  btn.innerText = "Xóa";
  btn.addEventListener("click", () => btn.previousElementSibling.classList.toggle("removed"));
  
  li.appendChild(btn);
  ul.appendChild(li);
});
