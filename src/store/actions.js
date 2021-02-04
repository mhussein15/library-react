const ADD_MEMBER = "ADD_MEMBER";
const UPDATE_MEMBER = "UPDATE_MEMBER";
const ADD_BOOK = "ADD_BOOK";
const UPDATE_BOOK = "UPDATE_BOOK";
const TAKE_BOOK = "TAKE_BOOK";
export const addMember = (newMember) => {
  return {
    type: ADD_MEMBER,
    payload: { newMember }, // {newPerson: newPerson}
  };
};
export const updateMember = (updateMember) => {
  return {
    type: UPDATE_MEMBER,
    payload: { updateMember }, // {newPerson: newPerson}
  };
};
export const addBook = (newBook) => {
  return {
    type: ADD_BOOK,
    payload: { newBook }, // {newPerson: newPerson}
  };
};
export const updateBook = (updateBook) => {
  return {
    type: UPDATE_BOOK,
    payload: { updateBook }, // {newPerson: newPerson}
  };
};

export const takeBook = (bookTakenID, memberName) => {
  return {
    type: TAKE_BOOK,
    payload: { bookTakenID, memberName }, // {newPerson: newPerson}
  };
};
