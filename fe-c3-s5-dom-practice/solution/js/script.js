let noteList = [];
let view = "grid"; // default view is grid-view

// task-1: define function saveNote() to add note
function saveNote() {
    const noteId = document.getElementById("note-id").value;
    const noteTitle = document.getElementById("note-title").value;
    const noteContent = document.getElementById("note-content").value;

    // Validation
    if (!noteId || !noteTitle || !noteContent) {
        console.log("Please provide all note details.");
        return;
    }

    // Check for unique note id
    if (noteList.some((note) => note.id === noteId)) {
        console.log("Note with the same ID already exists. Please choose a different ID.");
        return;
    }

    const newNote = {
        id: noteId,
        title: noteTitle,
        content: noteContent,
    };

    noteList.push(newNote);

    // Display confirmation message in the console
    console.log("Note added successfully!");

    // Clear the form fields
    document.getElementById("note-id").value = "";
    document.getElementById("note-title").value = "";
    document.getElementById("note-content").value = "";

    view = view === "grid" ? "list" : "grid";
    // Call displayNotes to refresh the display
    displayNotes();
}

// task-2: define function displayNotes() to display all notes

function displayNotes() {
    const noteContainer = document.getElementById("note-container");

    if (!noteContainer) {
        console.error("Note container not found.");
        return;
    }

    noteContainer.innerHTML = ""; // Clear existing content

    noteList.forEach((note) => {
        const noteCard = document.createElement("div");
        noteCard.classList.add("note-card");

        const heading = document.createElement("h3");
        heading.textContent = note.title;

        const para = document.createElement("p");
        para.textContent = note.content;

        noteCard.appendChild(heading);
        noteCard.appendChild(para);

        // Add a delete button with blue background
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");
        
        deleteButton.addEventListener("click", () => deleteNote(note.id));

        noteCard.appendChild(deleteButton);

        noteContainer.appendChild(noteCard);
    });
}

// task-3: delete note - This task is Optional
function deleteNote(noteId) {
    const index = noteList.findIndex((note) => note.id === noteId);

    if (index !== -1) {
        noteList.splice(index, 1);
        console.log("Note deleted successfully!");
        displayNotes(); // Refresh the display after deletion
    }
}


// task-4: toggle note view - This task is Optional
function toggleView() {
    const noteContainer = document.getElementById("note-container");

    if (!noteContainer) {
        console.error("Note container not found.");
        return;
    }

    if (view === "grid") {
        noteContainer.classList.remove("grid-view");
        noteContainer.classList.add("list-view");
        view = "list";
    } else {
        noteContainer.classList.remove("list-view");
        noteContainer.classList.add("grid-view");
        view = "grid";
    }

    displayNotes(); // Call displayNotes after toggling view
}

// do not delete the code given below, it is written to export the functions to be tested
module.exports ={
    saveNote,
    displayNotes,
    deleteNote,
    toggleView,
};