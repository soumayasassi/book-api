import { useQuery } from "@apollo/client";
import Book from "./Book";
import { GET_BOOKS } from "../queries";
import { Link } from "react-router-dom";


function Books() {
  const { loading, error, data } = useQuery(GET_BOOKS);
  if (loading) return <p>Loading Books...</p>;
  if (error) return <p>Error  : {error.message}</p>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Books List</h2>
      {data.allBooks.length === 0 ? (
        <p>No Books Found </p>
      ) : (
        data.allBooks.map((book) => <Book key={book.id} book={book} />)
      )}
      <Link className="btn btn-primary" to="/addbook">Add Book</Link>
    </div>
  );
}
export default Books;
