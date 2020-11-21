const path = require("path");
const router = require("express").Router();
// // "/notes" responds with the notes.html file
// router.get("/notes", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/notes.html"));
// });
// // All other routes respond with the index.html file
// router.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/index.html"));
// });
// module.exports = router;

module.exports = function (app) {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))

    app.get("/notes", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

  })
};