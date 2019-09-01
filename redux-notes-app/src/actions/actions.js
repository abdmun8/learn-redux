/* Add note */
export const ADD_NOTE = 'ADD_NOTE';

export function addNote(title, content) {
  return { type: ADD_NOTE, title: title, content: content };
}
/* Remove note */
export const REMOVE_NOTE = 'REMOVE_NOTE';

export function removeNote(id) {
  return { type: REMOVE_NOTE, id: id };
}

/* Show all note */
export const SHOW_ALL = 'SHOW_ALL';

export function showAll() {
  return { type: SHOW_ALL };
}