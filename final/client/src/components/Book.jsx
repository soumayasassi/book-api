import { useMutation, useQuery } from "@apollo/client";
import { DELETE_BOOK } from "../mutations";
import { GET_BOOKS } from "../queries";
import { useNavigate } from "react-router-dom";
const Book = ({ book }) => {
  const [deleteBook] = useMutation(DELETE_BOOK);
  const { refetch } = useQuery(GET_BOOKS);
  const navigate = useNavigate();
  const handleDelete = async () => {
    try {
      console.log("Deleting book with id :", book.id);
      await deleteBook({
        variables: { id: book.id },
      });
      alert("Book deleted successfully.");
      navigate("/books");
      await refetch();
      
    
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <>
      <div className="card-group">
        <div className="card" style={{ Width: "18rem" }}>
          <img
            className="card-img-top"
            src="BooksPicture.png"
            style={{ Width: "100px", height: "100px" }}
            alt="Book Cover"
          />
          <div className="card-body">
            <h5 className="card-title">{book.title}</h5>
            <p className="card-text">
              <b>Author : </b> {book.author}
            </p>
            <p className="card-text">
              <b>Year : </b> {book.year}
            </p>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Book;
