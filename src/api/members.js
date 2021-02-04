const members = [
  {
    id: 1,
    firstName: "Aziz",
    lastName: "AlSaffar",
    slug: "aziz-alsaffar",
    currentlyBorrowedBooks: [3, 9],
    membership: "gold", // can borrow 3 books
    imageURL: `https://i.pravatar.cc/600?img=${68}`,
  },
  {
    id: 2,
    firstName: "Hashim",
    lastName: "Behbehani",
    slug: "hashim-behbehani",
    currentlyBorrowedBooks: [5],
    membership: "gold", // can borrow 3 books
    imageURL: `https://i.pravatar.cc/600?img=${60}`,
  },
  {
    id: 3,
    firstName: "Alhamza",
    lastName: "Abdulmonem",
    slug: "alhmaza-abdulmonem",
    currentlyBorrowedBooks: [1, 2],
    membership: "silver", // can borrow 2 books
    imageURL: `https://i.pravatar.cc/600?img=${56}`,
  },
  {
    id: 4,
    firstName: "Reem",
    lastName: "AlHasawi",
    slug: "reem-alhasawi",
    currentlyBorrowedBooks: [],
    membership: "platinum", // can borrow 5 books
    imageURL: `https://i.pravatar.cc/600?img=${47}`,
  },
  {
    id: 5,
    firstName: "Laila",
    lastName: "AlKandery",
    slug: "laila-alkandery",
    currentlyBorrowedBooks: [10, 7, 8],
    membership: "platinum", // can borrow 5 books
    imageURL: `https://i.pravatar.cc/600?img=${41}`,
  },

];

export default members;
