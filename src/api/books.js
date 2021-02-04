const books = [
  {
    id: 1,
    author: "Jordan Peterson",
    title: "12 Rules for Life: An Antidote to Chaos",
    slug: "12-rules-for-life:-an-antidote-to-chaos",
    genre: ["Self-Help"],
    available: false,
    borrowedBy: [3],
    imageURL: "https://i.ebayimg.com/images/g/sQQAAOSwrpReQY6p/s-l600.jpg",
  },
  {
    id: 2,
    author: "Blake Crouch",
    title: "Dark Matter",
    slug: "dark-matter",
    genre: ["Sci-Fi", "Thriller"],
    available: false,
    borrowedBy: [3],
    imageURL:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1472119680i/27833670._UY2850_SS2850_.jpg",
  },
  {
    id: 3,
    author: "Robin Sloan",
    title: "Mr. Penumbra's 24-Hour Bookstore",
    slug: "mr.-penumbra's-24-hour-bookstore",
    genre: ["Suspense", "Fantasy"],
    available: false,
    borrowedBy: [1, 3, 5, 1],
    imageURL:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1345089845l/13538873.jpg",
  },
  {
    id: 4,
    author: "Paul Kalanithi",
    title: "When Breath Becomes Air",
    slug: "when-breath-becomes-air",
    genre: ["Biography"],
    available: true,
    borrowedBy: [2, 5],
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/91oF75m7gAL.jpg",
  },
  {
    id: 5,
    author: "Eric Ries",
    title: "The Lean Startup",
    slug: "the-lean-startup",
    genre: ["Business", "Entrepreneurship"],
    available: false,
    borrowedBy: [4, 1, 2],
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg",
  },
  {
    id: 6,
    author: "George R.R. Martin",
    title: "A Storm of Swords",
    slug: "a-storm-of-swords",
    genre: ["Fantasy"],
    available: true,
    borrowedBy: [],
   imageURL:"https://images-na.ssl-images-amazon.com/images/I/91PUHDK0JAL.jpg"
  },
  {
    id: 7,
    author: "Leigh Bardugo",
    title: "Six of Crows",
    slug: "six-of-crows",
    genre: ["Fantasy"],
    available: false,
    borrowedBy: [4, 3, 2, 1, 5],
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/71U8HZ0dThL.jpg",
  },
  {
    id: 8,
    author: "Agatha Christie",
    title: "Curtain: Poirot's Last Case",
    slug: "curtain:-poirot's-last-case",
    genre: ["Crime", "Mystery"],
    available: false,
    borrowedBy: [3, 5],
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/813H-43Z8-L.jpg",
  },
  {
    id: 9,
    author: "Elif Shafak",
    title: "The Forty Rules of Love",
    slug: "the-forty-rules-of-love",
    genre: ["Fiction"],
    available: false,
    borrowedBy: [5, 1],
    imageURL:"https://upload.wikimedia.org/wikipedia/en/b/b2/The_Forty_Rules_of_Love_cover.jpg"
  },
  {
    id: 10,
    author: "Leigh Bardugo",
    title: "The Language of Thorns: Midnight Tales and Dangerous Magic",
    slug: "the-language-of-thorns:-midnight-tales-and-dangerous-magic",
    genre: ["Fantasy"],
    available: false,
    borrowedBy: [5],
    imageURL:"https://images-na.ssl-images-amazon.com/images/I/51Jy6-ypOrL._SX334_BO1,204,203,200_.jpg"
  },
];

export default books;
