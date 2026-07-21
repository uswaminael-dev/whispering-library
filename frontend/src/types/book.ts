export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  year: number;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
  readingTime: string;
  cover: string;
}