import store from './store/store';
import { addNote, removeNote } from './actions/actions';

// We use store.getState() to get our app state from the store

// ------ HTML references ------
let notesUList = document.getElementById('notes');
let addNoteForm = document.getElementById('add-note');
let addNoteTitle = addNoteForm['title'];
let addNoteContent = addNoteForm['content'];

// ------ Redux ------
function deleteNote(index) {
  store.dispatch(removeNote(index));
}

function renderNotes() {
  let notes = store.getState().notes;
  // console.log(notes)

  notesUList.innerHTML = '';
  notes.map((note, index) => {
    let noteItem = `
      <li>
        <b>${ note.title}</b>
        <button data-id="${index}">x</button>
        <br />
        <span>${ note.content}</span>
      </li>
    `;
    notesUList.innerHTML += noteItem;
  });

  setDeleteNoteButtonsEventListeners();
}

// ------ Event Listeners ------
addNoteForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let title = addNoteTitle.value;
  let content = addNoteContent.value;
  store.dispatch(addNote(title, content));

  // console.log('Title:', addNoteTitle.value, 'Content:', addNoteContent.value);
});

function setDeleteNoteButtonsEventListeners() {
  let buttons = document.querySelectorAll('ul#notes li button');

  for (let button of buttons) {
    button.addEventListener('click', () => {
      deleteNote(button.dataset.id);
    });
  }
}

// ------ Render the initial Notes ------

renderNotes();

store.subscribe(() => {
  renderNotes();
});