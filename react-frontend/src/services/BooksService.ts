import axios from "axios";

const baseUrl = process.env.URL || "http://localhost:5000";
const headers =  {
    "Authorization": "",
    "content-type": "application/json",
    "accept": "application/json",
  }

class BookService {
  async getBooks() {
    try {
      return axios.get(
        `${baseUrl}/books/preffered`,
        { headers: headers }
      );
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  }
}

export default BookService;
