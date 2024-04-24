
let noteList = [];

let view = "grid"; //default view is grid-view

const todoURL = "http://localhost:3000/todos";

//task-1 : add note
function saveNote() {
    const inputTag1=document.getElementById("note-id").value
    const inputTag2=document.getElementById("note-title").value
    const textTag=document.getElementById("note-content").value

    //populate note object with data from HTML
    const note ={
        id:isNaN(inputTag1) ? inputTag1 : Number(inputTag1),
        title:inputTag2,
        content:textTag

    };
    // call saveNoteToServer() with note data to persist note to the server
    saveNoteToServer(note);
}


function saveNoteToServer(note) {
    axios.post("http://localhost:3000/todos", note)
        .then((response) => {
            noteList.push(response.data);
            renderNotes(); 
        })
        .catch((error) => {
            alert("Error saving note to server: " + error.message);
        });
}

//task-2 : display notes
function displayNotes() {
    // call fetchNotesFromServer() to fetch notes from server and display the notes
    fetchNotesFromServer();    
} 

function fetchNotesFromServer() {
    axios.get("http://localhost:3000/todos")
        .then((response) => {
            noteList = response.data;
            renderNotes();
        })
        .catch((error) => {
            alert("Error fetching notes from server: " + error.message);
        });
}
    function renderNotes() {
        const noteContainer = document.getElementById("note-container");
        noteContainer.innerHTML = "";
    
       if (noteList.length === 0) {
            noteContainer.innerHTML = "No notes available";
            return;
        }
    
        
        noteList.forEach(note => {
            
            const noteDiv = document.createElement("div");
            noteDiv.className = "card mb-3"; 
    
           
            const cardBody = document.createElement("div");
            cardBody.className = "card-body";
    
           
            const cardTitle = document.createElement("h5");
            cardTitle.className = "card-title";
            cardTitle.textContent = note.title;
    
            
            const cardText = document.createElement("p");
            cardText.className = "card-text";
            cardText.textContent = note.content;
    
           
            const deleteButton = document.createElement("button");
            deleteButton.className = "btn btn-danger";
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", () => deleteNote(note.id));
    
            
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            cardBody.appendChild(deleteButton);
    
            
            noteDiv.appendChild(cardBody);
    
            
            noteContainer.appendChild(noteDiv);
        });
    }
    


//task-3 : delete note
function deleteNote(noteId) {
    axios.delete(`${todoURL}/${noteId}`)
    .then((response) => {
        if (response.status === 200) {
            noteList = noteList.filter(note => note.id !== noteId);
            renderNotes();
        } else {
            alert("Error deleting note from server.");
        }
    })
    .catch((error) => {
        alert("Error deleting note from server: " + error.message);
    });
}
//task-4 : toggle note view
function toggleView() {
    const noteContainer = document.getElementById("note-container");

    if (view === "grid") {
        view = "list";
        noteContainer.className = "container";
    } else {
        view = "grid";
        noteContainer.className = "container-fluid";
    }

    renderNotes();
}


//do not delete the code given below, it is written to make export the functions to be tested
module.exports = {
    saveNote,
    displayNotes,
    deleteNote,
    toggleView,
    saveNoteToServer,
    fetchNotesFromServer
}
