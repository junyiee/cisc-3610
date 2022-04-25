var title = document.getElementById("title");
var notes = document.getElementById("notesText");
var clear = document.getElementById("clearButton");

// save data to local storage
title.oninput = function() {
    localStorage.setItem("title", title.value);
}
notes.oninput = function() {
    localStorage.setItem("notes", notes.value);
}

// restore text on page if user comes back
window.onload = function() {
    title.value = localStorage.getItem("title");
    notes.value = localStorage.getItem("notes");
}

clear.onclick = function() {
    title.value = "";
    notes.value = "";
    // clear local storage
    localStorage.clear();
}