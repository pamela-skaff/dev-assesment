import { databaseUtilities } from "../Utils/dbUtils";

const dbUtils = new databaseUtilities();

class BookQuery {
  // Get all rows in a given table
  async getPrefferedBooks() {
    try {
      const response = await dbUtils.getAll("assessment2");
      console.log("response from query", response);
      return response;
    } catch (err) {
      console.log("error in get books query", err);
      throw err;
    }
  }
}

export { BookQuery };
