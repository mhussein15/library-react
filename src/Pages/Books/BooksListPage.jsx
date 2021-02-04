import useSearch from "../../Hooks/useSearch";
import BookCard from "../../Components/BookCard";
import OptionBar from "../../Components/OptionBar";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function BookListPage() {
  const [search, setSearch] = useState("");
  const state = useSelector((state) => state.books);
  const msg = useSelector(state => state.msg)

  const bookList = useSearch(search, "books", state).map((book) => (
    <Link to={`/book/${book.slug}`}>
      <BookCard book={book} />
    </Link>
  ));
  return (
    <div className="p-2">
      <OptionBar setSearch={setSearch} />
      <div className="row row-cols-5 ">{bookList}</div>
    </div>
  );
}
