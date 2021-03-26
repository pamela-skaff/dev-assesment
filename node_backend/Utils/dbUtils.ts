var mysql = require("mysql2");

var con = mysql.createConnection({
  host: process.env.HOST || "localhost",
  database: process.env.DATABASE || "perlego_test_db",
  user:  "root",
  password: process.env.PASSWORD || "Password@123",
});

class databaseUtilities {
  // Get all rows in a given table
  async getAll(tableName: string) {
    try {
      const requestText = `SELECT * from   ${tableName}`;
      const response = await con.promise().query(requestText);
      console.log("response", response[0]);
      if (response) return response[0];
      else throw new Error("Error rows is undefined");
    } catch (err) {
      console.log(`Error in getting data from table ${tableName}: ${err}`);
      throw err;
    }
  }

  // Get row from a given table using ID
  async getById(tableName: string, id: number) {
    try {
      const requestText = `SELECT * from  ${tableName} + " WHERE id=${id}`;
      console.log("requestText", requestText);
      const response = await con.query(requestText, [id]);
      return response.rows[0];
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  // // Get row from a given table using a given attribute
  async getByAttribute(tableName: string, attribute: string, value: string) {
    try {
      const requestText = `SELECT * from ${tableName} WHERE ${attribute}=${value}`;
      const response = await con.query(requestText);
      return response.rows[0];
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  // Insert row into given table
  async insertData(tableName: string, data: any) {
    try {
      var rowValuesArray = Object.values(data)
        .map((element) =>
          typeof element === "object"
            ? "'" + JSON.stringify(element) + "'"
            : "'" + element + "'"
        )
        .join(", ");
      var requestText =
        "INSERT INTO " +
        tableName +
        "(" +
        Object.keys(data).join(", ") +
        ")VALUES(" +
        rowValuesArray +
        ") RETURNING id";
      const response = await con.query(requestText);
      // console.log(response);
      return response.rows[0];
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  // // Delete row in a given table using ID
  async deleteById(tableName: string, id: number) {
    try {
      const insertText = `DELETE FROM  ${tableName} " WHERE id = ${id} RETURNING *`;
      const response = await con.query(insertText, [id]);
      return response;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

export { databaseUtilities };
