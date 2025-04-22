// src/components/AddBook.jsx
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_BOOK } from "../mutations";
import { GET_BOOKS } from "../queries";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
const AddBook = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    year: "",
  });
  const { refetch } = useQuery(GET_BOOKS);
  const [message, setMessage] = useState("");
  const [createBook, { loading, error }] = useMutation(ADD_BOOK);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createBook({
        variables: {
          input: {
            title: book.title,
            author: book.author,
            year: parseInt(book.year),
          },
        },
      });

      setMessage("Book added succefully !");
      setBook({ title: "", author: "", year: "" });
      navigate("/books");
      await refetch();
    } catch (err) {
      console.error(err);
      setMessage("Error  while adding the book");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 shadow-lg rounded bg-white">
      <h2 className="text-xl font-bold mb-4">Add a Book</h2>
      {message && <p className="mb-2 text-sm text-green-600">{message}</p>}
      {error && (
        <p className="mb-2 text-sm text-red-600">An error has occured</p>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={book.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={book.author}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="year"
          placeholder="Year"
          value={book.year}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="btn btn-primary"
          disabled={loading}
          onSubmit={handleSubmit}
        >
          {loading ? "Adding book..." : "Add Book"}
        </button>
      </form>
    </div>
  );
};

export default AddBook;
