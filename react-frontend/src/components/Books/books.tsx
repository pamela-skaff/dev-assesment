import React, { useState, useEffect } from "react";
import CardColumns from "react-bootstrap/CardColumns";
// import { Row, Col, Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Pagination from "../Pagination/pagination";
import Book from "../Book/book";

import BookProps from "../../models/book";
import BookService from "../../services/BooksService";
import "../Books/books.scss";

const bookService = new BookService();

const BooksList = () => {
  const [books, setBooks] = useState<BookProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [inputFilter, setInputFilter] = useState("");
  const itemFilter = (event: any) =>
    setInputFilter(event.target.value.toLocaleLowerCase());
  const [currentPage, setcurrentPage] = useState(1);
  const booksPerPage = 12;

  //Change Page
  const paginate = (pageNumber: number) => setcurrentPage(pageNumber);
  useEffect(() => {
    const getBooks = async () => {
      setLoading(true);
      const res = await bookService.getBooks();
      if (res.status !== 200) setError(true);
      setBooks(res.data.body);
      console.log(":::::::books:::::", books);
      setLoading(false);
    };
    getBooks();
  }, []);


  const booksList = books
    .filter((book) =>
      book.Title_DistinctivetitlebookCovertitle_TitleText.toLowerCase().includes(inputFilter)
    )
    .map((book) => {
      return (
        <div className="booksList">
          <Book key={book.id} {...book} />
        </div>
      );
    });

  // Get current books in the selected page
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = booksList.slice(indexOfFirstBook, indexOfLastBook);
  console.log("currentBooks", currentBooks);

  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  } else if (error) {
    return <p>Error Fetching books</p>;
  }

  return (
    <React.Fragment>
      <div>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Filter</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Filter by book title"
            aria-label="filterText"
            aria-describedby="basic-addon1"
            onChange={itemFilter}
          />
        </InputGroup>
        <p className="pageTitle">Books You Might Like</p>
        <CardColumns>{currentBooks}</CardColumns>
        <Pagination
          booksPerPage={booksPerPage}
          totalBooks={booksList.length}
          paginate={paginate}
          activePage={currentPage}
        />
      </div>
    </React.Fragment>
  );
};
export default BooksList;
