const express2 = require("express");
var router = express2.Router();
import { BooksController } from "../controllers/booksController";
import {response} from "../Utils/response";
// import { JWT } from "../services/Jwt";

// const jwt = new JWT();
var bController = new BooksController();

/* Get books */
router.get("/preffered", async function (req: any, res: any) {
  try {
    let prefferedBooks = await bController.getPrefferedBooks();
    
    // console.log("prefferedBooks", prefferedBooks);
    if (prefferedBooks.length > 0) {
      //  Generate an access token
      //   res = jwt.signJWT(req, res);
      var returnResponse = response( prefferedBooks , 200);
      res.send(returnResponse);
    } else
      res.send(
        response(
          {
            success: false,
            message: `No Books found`,
          },
          204
        )
      );
  } catch (err) {
    console.log("error", err);
    res.send(
      response(
        {
          success: false,
          message: `Error finding books`,
          error: err.message,
        },
        404
      )
    );
  }
});

module.exports = router;
