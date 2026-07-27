import api from "./api";

export interface ChatRequest {
  book_id: number;
  message: string;
}

export interface ChatResponse {
  response: string;
}

export async function chatWithBook(
  data: ChatRequest
): Promise<ChatResponse> {
  const response = await api.post("/chat", data);
  return response.data;
}