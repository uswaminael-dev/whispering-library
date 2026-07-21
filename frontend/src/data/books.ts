import type { Book } from "../types/book";

export const books: Book[] = [
  {
    id: 1,
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    year: 1988,
    description:
      "A shepherd's journey to discover his personal legend and purpose.",
    difficulty: "Easy",
    readingTime: "4-6 hours",
    cover: "",
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self Development",
    year: 2018,
    description:
      "Practical strategies for building good habits and breaking bad ones.",
    difficulty: "Easy",
    readingTime: "5-7 hours",
    cover: "",
  },
  {
    id: 3,
    title: "Beyond Good and Evil",
    author: "Friedrich Nietzsche",
    genre: "Philosophy",
    year: 1886,
    description:
      "A philosophical exploration challenging traditional morality.",
    difficulty: "Hard",
    readingTime: "9-12 hours",
    cover: "",
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Classic",
    year: 1813,
    description:
      "A timeless novel about love, family, and social expectations.",
    difficulty: "Medium",
    readingTime: "8-10 hours",
    cover: "",
  },
  {
    id: 5,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    year: 1937,
    description:
      "Bilbo Baggins embarks on an unexpected adventure with dwarves.",
    difficulty: "Medium",
    readingTime: "8-9 hours",
    cover: "",
  }
];