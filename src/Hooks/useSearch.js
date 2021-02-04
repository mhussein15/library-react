
const useSearch = (search, data, state) => {
  let list = "";
  if (data === "members") {
    list = state.filter((member) =>
      member.firstName
        .concat(" ", member.lastName)
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  } else if (data === "books") {
    list = state.filter(
      (book) =>
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.genre.join("").toLowerCase().includes(search.toLowerCase())
    );
  }
  return list;
};

export default useSearch;
