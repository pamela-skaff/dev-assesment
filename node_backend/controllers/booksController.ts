const Book = require("../models/books.ts");
import { BookQuery } from "../queries/books";
const bQuery = new BookQuery();

class BooksController {
  async getPrefferedBooks() {
    try {
      const books=  await bQuery.getPrefferedBooks();
      console.log("books:", books);
      return books;
    } catch (err) {
      console.log("Database access failed", err);
      throw err;
    }
  }
}

export { BooksController };
