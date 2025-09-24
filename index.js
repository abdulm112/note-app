const createBtn = document.getElementById("createBtn");
const container = document.getElementById("container");
let notes = document.querySelector(".inputBox");

function showNotes() {
  container.innerHTML = localStorage.getItem("notes")
}
showNotes();

function noteStorage() {
  localStorage.setItem("notes", container.innerHTML)
};

createBtn.addEventListener("click", () => {
  let input = document.createElement('p');
  let img = document.createElement('img');

  input.className = "inputBox";
  input.setAttribute("contenteditable", "true");
  img.src = 'img/remove.png';

  container.appendChild(input).appendChild(img);
});

container.addEventListener("click", function (e) {
  
  if (e.target.tagName === 'IMG') {
    e.target.parentElement.remove()
    noteStorage()
  } else if (e.target.tagName === 'P') {
    notes = document.querySelectorAll(".inputBox");
    notes.forEach(nothing => {
      nothing.onkeyup = function () {
        noteStorage()
      }
    });
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    document.execCommand("insertLineBreak")
    e.preventDefault();
  }
})