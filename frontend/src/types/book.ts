export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  summary: string;

  author_bio?: string;
  historical_context?: string;
  themes?: string;

  difficulty?: string;
  reading_time?: string;

  cover_url?: string;
}