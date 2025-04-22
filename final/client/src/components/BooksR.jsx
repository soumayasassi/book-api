
import React, { useEffect, useState } from "react";
import BookC from "./BookR";
import { getAllBooks } from "../api";
import { Link } from "react-router-dom";

const BooksC = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await getAllBooks();
        console.log(response.data);
        setBooks(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error while loading Books ");
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) return <p> Loading Books ...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Books List</h2>
      {books.length === 0 ? (
        <p>No Books Found</p>
      ) : (
        books.map((book) => <BookC key={book._id || book.id} book={book} />)
      )}
      <Link className="btn btn-primary" to="/addbookrest">Add Book</Link>
    </div>
  );
};

export default BooksC;
