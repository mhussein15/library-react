import { useParams, Link } from "react-router-dom";
import useData from "../../Hooks/useData";
import BookHistory from "../../Components/BookHistory";
import { useSelector, useDispatch } from "react-redux";
import TextInput from "react-autocomplete-input";
import "react-autocomplete-input/dist/bundle.css";
import { takeBook } from "../../store/actions";
import { useHistory } from "react-router-dom";
export default function BookDetailPage() {
  const history = useHistory();
  const books = useSelector((state) => state.books);
  const members = useSelector((state) => state.members);
  const { bookSlug } = useParams();
  const dispatch = useDispatch();
  const book = useData(bookSlug, "book", books);

 

  const memberList = members.map((member) =>
    member.firstName.concat(" ", member.lastName)
  );

  const handleSubmit = (value) => {
    dispatch(takeBook(book.id, value));
    history.push("/books/");
  };
  return (
    <div>
      <div class={`card mb-3`} style={{ maxWidth: "50%" }}>
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={book.imageURL}
              alt={book.title}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title lead">{`${book.title}`}</h5>
              <p class="card-text lead">{book.author}</p>
              {book.genre.map((g) => (
                <p className="card-text lead p-0">{g}</p>
              ))}
              <p className="card-text">
                <Link
                  className="lead text-decoration-none"
                  to={`/book/${book.slug}/edit`}
                >
                  Edit
                </Link>
              </p>
              {book.available ? (
                <TextInput
                  options={memberList}
                  onSelect={(value) => handleSubmit(value)}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
      <BookHistory borrowed={book.borrowedBy} />
    </div>
  );
}
