document.addEventListener("DOMContentLoaded", () => {
    const colorPicker = document.querySelector("#colorPicker");
    const addButton = document.querySelector(".add-note-button");
    const rightContainer = document.querySelector(".right-container-notes");
    const textarea = document.querySelector("#textarea");
    const notesNotAdded = document.querySelector(".notes-not-added");

    colorPicker.value = "#00ffa1";

    addButton.addEventListener("click", () => {
        const noteText = textarea.value.trim();
        if (!noteText) {
            textarea.classList.add("animate__shakeX");
            alert("Enter Some Text");
            return;
        }
        textarea.classList.remove("animate__shakeX");
        addNote(noteText, colorPicker.value);
        textarea.value = "";
        notesNotAdded.style.display = "none";
    });

    function addNote(note, color) {
        const noteElement = document.createElement("div");
        noteElement.classList.add("note");
        noteElement.style.backgroundColor = color;
        noteElement.innerHTML = `
            <p>${note}</p>
            <button class="delete-note-button">X</button>
        `;
        rightContainer.appendChild(noteElement);
        noteElement.querySelector(".delete-note-button").addEventListener("click", () => {
            noteElement.remove();
            if (rightContainer.children.length === 0) {
                notesNotAdded.style.display = "flex";
            }
        });
    }
});
