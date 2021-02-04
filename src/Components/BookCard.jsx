export default function BookCard({ book }) {
  const available = book.available
    ? " bg-gradient-success"
    : "bg-gradient-danger";
  return (
    <div className={`text-center p-2 `}>
      <img
        className={`img-fluid  ${available} p-2`}
        src={book.imageURL}
        alt=""
        srcset=""
        style={{ width: "250px", height: "250px" }}
      />
    </div>
  );
}
