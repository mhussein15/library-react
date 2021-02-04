import AddEditBookForm from "../../Components/AddEditBookForm";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
export default function BookAddEditPage() {
  const { bookSlug } = useParams();
  const books = useSelector((state) => state.books);
  console.log(bookSlug);

  const bookEdit = books.find((book) => book.slug === bookSlug);

  const title = bookSlug
    ? `Edit ${bookEdit.title} Information`
    : "Add New Book";
  return (
    <div
      className="d-flex justify-content-center"
      style={{ height: "90vh", alignItems: "center", flexDirection: "column" }}
    >
      <h1 className="display-5 mb-3">{title}</h1>
      <AddEditBookForm bookEdit={bookEdit} />
    </div>
  );
}
