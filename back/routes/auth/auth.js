const express = require("express");
const router = express.Router();
const connection = require("../../helpers/db");

router.post("/signup", function(req, res, next) {
  const post = [
    req.body.email,
    req.body.password,
    req.body.name,
    req.body.lastname
  ];
  connection.query(
    "INSERT INTO users(email,password,name,lastname) VALUES(?,?,?,?)",
    post,
    (err, results) => {
      if (err) {
        console.log(err);
        res
          .status(500)
          .send("La requête ne peut pas être traitée à létait actuel.");
      } else {
        res.sendStatus(200);
      }
    }
  );
});

module.exports = router;
