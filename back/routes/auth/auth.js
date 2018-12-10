let express = require("express");
let router = express.Router();
const connection = require("../../helpers/db.js");

router.post("/signup", function(req, res, next) {
  const formData = req.body;
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
      if (err) res.status(500).json({ flash: err.message });
      else res.status(200).json({ flash: "User has been signed up !" });
    }
  );
});

module.exports = router;
