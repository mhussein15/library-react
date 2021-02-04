import _books from "../api/books";
import _members from "../api/members";
import _ from "lodash";
import slugify from "slugify";

const initialState = {
  books: _.reverse(_.sortBy(_books, (o) => o.available)),
  members: _.sortBy(_members, (o) => o.firstName),
  userLastID: 5,
  bookLastID: 10,
  latest: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MEMBER":
      const {
        id,
        firstName,
        lastName,
        imageURL,
        membership,
      } = action.payload.newMember;
      const member = {
        id: id,
        firstName: firstName.charAt(0).toUpperCase() + firstName.slice(1),
        lastName: lastName.charAt(0).toUpperCase() + lastName.slice(1),
        currentlyBorrowedBooks: [],
        membership: membership,
        slug: slugify(`${firstName}-${lastName}`),
        imageURL: imageURL,
      };
      return {
        ...state,
        members: [...state.members, member],
        userLastID: state.userLastID + 1,
      };
    case "UPDATE_MEMBER":
      const newState = [...state.members];
      const { updateMember } = action.payload;
      const index = state.members.findIndex(
        (member) => member.id === updateMember.id
      );
      const updatedMember = {
        id: newState[index].id,
        firstName:
          updateMember.firstName.charAt(0).toUpperCase() +
          updateMember.firstName.slice(1),
        lastName:
          updateMember.lastName.charAt(0).toUpperCase() +
          updateMember.lastName.slice(1),
        currentlyBorrowedBooks: newState[index].currentlyBorrowedBooks,
        membership: updateMember.membership,
        slug: newState[index].slug,
        imageURL: updateMember.imageURL,
      };
      newState[index] = updatedMember;
      return {
        ...state,
        members: [...newState],
      };
    case "ADD_BOOK":
      const { newBook } = action.payload;
      const genre = newBook.genre.split(";");
      return {
        ...state,
        books: [
          ...state.books,
          { ...newBook, slug: slugify(newBook.title), genre: genre },
        ],
        bookLastID: state.bookLastID + 1,
      };
    case "UPDATE_BOOK":
      const newBookState = [...state.books];
      const { updateBook } = action.payload;
      const bookIndex = state.books.findIndex(
        (book) => book.id === updateBook.id
      );
      const updatedGenre = updateBook.genre.split(";");
      const updatedBook = {
        id: newBookState[bookIndex].id,
        author: updateBook.author,
        title: updateBook.title,
        genre: updatedGenre,
        available: updateBook.available,
        slug: newBookState[bookIndex].slug,
        imageURL: updateBook.imageURL,
      };
      newBookState[bookIndex] = updatedBook;
      return {
        ...state,
        books: [...newBookState],
      };
    case "TAKE_BOOK":
      console.log(action.payload);
      const newBookTakeBook = [...state.books];
      const newMemberTakeBook = [...state.members];

      let memberLastName = action.payload.memberName.split(" ");
      let bookTakenID = action.payload.bookTakenID;
      const memberData = state.members.find(
        (m) => m.lastName.toLowerCase() === memberLastName[1].toLowerCase()
      );
      const memberDataIndex = state.members.findIndex(
        (member) => member.id === memberData.id
      );
      const takenBookIndex = state.books.findIndex(
        (book) => book.id === bookTakenID
      );
      const bookData = state.books.find((b) => b.id === bookTakenID);

      if (
        memberData.membership.toLowerCase() === "silver" &&
        memberData.currentlyBorrowedBooks.length < 2
      ) {
        memberData.currentlyBorrowedBooks.push(bookTakenID);
        newBookTakeBook[takenBookIndex] = { ...bookData, available: false };
        state.latest.push(
          `${memberData.firstName} ${memberData.lasttName} has taken ${bookData.title}`
        );
      } else if (
        memberData.membership.toLowerCase() === "gold" &&
        memberData.currentlyBorrowedBooks.length < 3
      ) {
        memberData.currentlyBorrowedBooks.push(bookTakenID);
        newBookTakeBook[takenBookIndex] = { ...bookData, available: false };
        state.latest.push(
          `${memberData.firstName} ${memberData.lasttName} has taken ${bookData.title}`
        );
      } else if (
        memberData.membership.toLowerCase() === "platinum" &&
        memberData.currentlyBorrowedBooks.length < 5
      ) {
        memberData.currentlyBorrowedBooks.push(bookTakenID);
        newBookTakeBook[takenBookIndex] = { ...bookData, available: false };
        state.latest.push(
          `${memberData.firstName} ${memberData.lasttName} has taken ${bookData.title}`
        );
      }

      newMemberTakeBook[memberDataIndex] = memberData;

      return {
        ...state,
        books: [...newBookTakeBook],
        members: [...newMemberTakeBook],
      };
    default:
      return state;
  }
};

export default reducer;
