// App.jsx
import React from "react";
import {Route, Routes } from "react-router-dom";
import Books from "./components/Books";
import AddBook from "./components/AddBook";
import BooksR from "./components/BooksR";
import AddBookR from "./components/AddBookR";
import './App.css';
import NotFound from "./components/NotFound";
function App() {
  return (
    <>
      <Routes>
       <Route path="/books" element={<Books />} />
        <Route path="/addbook" element={<AddBook/>} />
       <Route path="/booksrest" element={<BooksR />} />
        <Route path="/addbookrest" element={<AddBookR/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
