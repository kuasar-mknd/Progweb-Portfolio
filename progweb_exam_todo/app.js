"use strict";

function toDoListTemplate(data, category) {
    return `
        <li data-category="${category}" data-done="false">
            ${data}
            <div class="button-done">❌</div>
        </li>`;
}

function insertToDo() {
    let toDoList = document.getElementById("list");
    let toDoInput = document.getElementById("input-todo");
    let category = document.querySelector("[data-selected=true]").getAttribute("data-category");
    let toDo = toDoInput.value;
    toDoList.innerHTML = toDoListTemplate(toDo, category) + toDoList.innerHTML;
    toDoInput.value = "";
    toDoInput.blur();
}

function changeCategory(event) {
    let categories = document.querySelectorAll("[data-category]");
    for (let category of categories) {
        category.setAttribute("data-selected", false);
    }
    event.setAttribute("data-selected", true);
}

function toggleToDo(event) {
    let dataDone = event.getAttribute("data-done");
    if (dataDone === "false") {
        event.setAttribute("data-done", true);
    }
    else {
        event.setAttribute("data-done", false);
    }
}

function deleteToDo(event) {
    event.parentNode.remove();
}

/**
 * Event Listeners
 */

//Detect when enter key is pressed
document.getElementById("input-todo").addEventListener("keyup", function (event) {
    if (event.isComposing || event.key === "Enter") {
        insertToDo();
    }
});

//Detect event click on id category-container
document.getElementById("category-container").addEventListener("click", function (event) {
    if (event.target.getAttribute("data-category")) {
        changeCategory(event.target);
    }
});

//Detect event click on list
document.getElementById("list").addEventListener("click", function (event) {
    //if click on list item
    if (event.target.nodeName === "LI") {
        toggleToDo(event.target);
    }
    //if click on button-done
    else if (event.target.className === "button-done") {
        deleteToDo(event.target);
    }
});



