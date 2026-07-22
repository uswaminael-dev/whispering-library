import api from "./api";

export async function getBooks() {
  const response = await api.get("/books");
  return response.data;
}