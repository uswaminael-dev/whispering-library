import api from "./api";
import type { Book } from "../types/book";

export async function getBooks(): Promise<Book[]> {
  const response = await api.get("/books");
  return response.data;
}

export async function getBook(id: number): Promise<Book> {
  const response = await api.get(`/books/${id}`);
  return response.data;
}