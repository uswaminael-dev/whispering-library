import api from "./api";
import type { Book } from "../types/book";

export async function getBooks(): Promise<Book[]> {
  const { data } = await api.get("/books");
  return data;
}

export async function getBook(id: number): Promise<Book> {
  const { data } = await api.get(`/books/${id}`);
  return data;
}