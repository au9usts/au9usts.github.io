const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const formElement = document.getElementById('form-box');

function addTask() {
    if (inputBox.value === '') {
        alert ("Enter something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }

    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();


 
formElement.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    const inputElement = document.getElementById('input-box');
    console.log("Input value on submit:", inputElement.value);
});


const buttons = document.querySelectorAll(".collapse");
const contents = document.querySelectorAll(".bookmarks");

buttons.forEach((btn, index) => {
    btn.addEventListener("click", function() {
        const targetContent = this.nextElementSibling;

        // 2. Check if the clicked section is already open
        const isOpen = targetContent.style.display === "flex";
        
        contents.forEach((nav) => {
        nav.style.display = "none";

        });

        if (!isOpen) {
            targetContent.style.display = "flex";
        }
    });
  });
