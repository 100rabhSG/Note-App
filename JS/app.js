console.log("This is app.js");
shownotes();
// If user adds a Note, add it to LocalStorage

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
//   console.log(notesObj);
  shownotes();
});

// Function to show notes from local storage
function shownotes() {
  let notes = localStorage.getItem("notes");

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
        <div class="noteCard card mx-2 my-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note title ${index + 1}</h5>
          <p class="card-text">${element} </p>
          <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
      </div>

                `;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `<h3> It's empty in here!!</h3>`;
  }
}

// Function to delete a Note
function deleteNote(index) {
//   console.log("I am deleting a note",index);

  let notes = localStorage.getItem("notes");

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  shownotes();
}

let search = document.getElementById("searchTxt");
search.addEventListener("input", function(){


    let inputVal = search.value.toLowerCase();
    // console.log("Input event fired", inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})

/*
create new repo
terminal - git in it
git add .
git commin -m "message"
git 
*/