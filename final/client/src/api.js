import axios from "axios";

const url = "https://book-api-j51z.onrender.com/books";

export const getAllBooks = async () => {
  return await axios.get(url);
};

export const addBook = async (book) => {
  return await axios.post(url, book);
};

export const editBook = async (id, book) => {
  return await axios.put(`${url}/${id}`, book);
};

export const deleteBook = async (id) => {
  return await axios.delete(`${url}/${id}`);
};

export const getBook = async (id) => {
  return await axios.get(`${url}/${id}`);
};

export default {
  getAllBooks,
  addBook,
  editBook,
  deleteBook,
  getBook,
};