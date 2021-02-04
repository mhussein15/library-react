import { useSelector } from "react-redux";
import BookRow from "./BookRow";
export default function MemberBooks({ books }) {
  const bookList = [];

  const mainBooks = useSelector((state) => state.books);

  mainBooks.forEach((book) => {
    books.forEach((el) => {
      if (el === book.id) {
        bookList.push(book);
      }
    });
  });
  const bookslist = bookList.map((book) => <BookRow bookInfo={book} />);

  console.log(bookList);
  return (
    <div>
      <div class="row">
        <p className="display-6 lead">Currently Borrowed Books</p>
        <div class="col-sm-12">
          <table
            class="table table-bordered dataTable"
            style={{ width: "100%" }}
          >
            <thead>
              <tr role="row">
                <th style={{ width: "150px" }}>Book ID</th>
                <th>Book Name</th>
                <th>Author</th>
              </tr>
            </thead>
            <tbody>{bookslist}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
