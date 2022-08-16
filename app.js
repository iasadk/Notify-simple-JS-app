console.log('working!!');
showNotes();
// if user addes a note add it to local storage.
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', (e) => {
    let tempList = [];
    let addText = document.getElementById('addText');
    let noteTitle = document.getElementById('noteTitle');
    tempList = [{
        "title": `${noteTitle.value}`,
        "noteText": `${addText.value}`
    }]

    // console.log(tempList);
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesList = [];

    }
    else {
        notesList = JSON.parse(notes);
    }
    notesList.push(tempList[0]);
    console.log(notes);
    localStorage.setItem("notes", JSON.stringify(notesList));
    addText.value = "";
    noteTitle.value = "";
    console.log(notesList);

    showNotes();

})

// function to show cards on website
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesList = [];
    }
    else {
        notesList = JSON.parse(notes);
    }
    let html = "";
    notesList.forEach((element, index) => {
        html += `<div class="card my-3 mx-3 noteCard" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.noteText}</p>
          <button id=${index} onclick="deleteCard(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
      </div>`;

    });
    let noteDiv = document.getElementById('notes');
    // let btn = document.getElementById('parent');
    // let btnHtml = '<button href="#" onclick="hideNotes()" id="toggleNotes">Hide notes</button>';

    if (notesList.length == 0) {
        noteDiv.innerHTML = `Please add a note!!!`;
        // let getBtn = document.getElementById('toggleNotes');
        // getBtn.remove();
        
    }
    else {
        noteDiv.innerHTML = html;

    }
}

// funtion for deleting Notes cards: -

function deleteCard(index) {
    // console.log(index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesList = [];
    }
    else {
        notesList = JSON.parse(notes);

    }

    notesList.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesList));
    showNotes();
}

let search = document.getElementById('searchTxt');
search.addEventListener('input', (ele) => {
    let searchInner = search.value.toLowerCase();
    // console.log(search.value);
    let cards = document.getElementsByClassName('noteCard');

    Array.from(cards).forEach(element => {
        console.log(element);
        let tagNameText = element.getElementsByTagName('p')[0].innerText.toLowerCase();
        let tagTitle = element.getElementsByTagName('h5')[0].innerText.toLowerCase();
        // console.log(tagNameText);
        console.log(document.getElementsByTagName('h5'));
        // console.log(tagTitle);
        if (tagNameText.includes(searchInner) || tagTitle.includes(searchInner)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })

})


function hideNotes() {
    let link = document.getElementById('toggleNotes');
    let notesList = localStorage.getItem('notes');
    // console.log(notesList);
    // console.log(notesList.length);
    // console.log(link)
    let notesDiv = document.getElementById('notes');
    console.log(notesDiv);
    if (notesList.length) {

        if(notesDiv.style.display == "" ){
            notesDiv.style.display = "none"
        }
        else{
            notesDiv.style.display = ""
        }
        // if (notesDiv.style.display == "block") {
        //     notesDiv.style.display = "none";
        // }
        // else {
        //     notesDiv.style.display = "block";

        // }
    }
    else {
        console.log("error!!")
    }

}