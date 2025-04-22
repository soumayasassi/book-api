
import React, { useState } from "react";
import { addBook } from "../api";
import { useNavigate } from "react-router-dom";
const AddBookR = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    year: "",
  });
const navigate = useNavigate();
  const [message, setMessage] = useState("");

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
      const response = await addBook({
        ...book,
        year: parseInt(book.year),
      });
      setMessage("Book added succefully !");
      navigate("/booksrest");
      setBook({ title: "", author: "", year: "" });
      console.log(response.data);
    } catch (error) {
      console.error(error);
      setMessage("Error  while adding the book");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 shadow-lg rounded bg-white">
      <h2 className="text-xl font-bold mb-4">Add a Book</h2>
      {message && <p className="mb-2 text-sm text-green-600">{message}</p>}
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
          onSubmit={handleSubmit}
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBookR;
