const fs = require("fs");
const app = require("express");
const dbJSON = require("../db/db.json");

module.exports = function (app) {

    // write to DB fucntion
    function updateDB(notes) {
        notes = JSON.stringify(notes);
        console.log(notes);

        // write data back to DB
        fs.writeFileSync("../db/db.json", notes, function (err) {
            if (err) {
                return console.log(err)
            }
        });
    }
    //app.get
    app.get("/api/notes", function (req, res) {

        fs.readFile("../db/db.json", "utf8", (err, data) => {
            console.log(data);
            res.json(data);
        });
    });



    //app.post
    app.post("/api/notes", function (req, res) {
        if (notesData.length == 0){
            req.body.id = "0";
        } else{
            req.body.id = JSON.stringify(JSON.parse(notesData[notesData.length - 1].id) + 1);
        }
        
        console.log("req.body.id: " + req.body.id);

        // Pushes Body to JSON Array
        notesData.push(req.body);

        // Write notes data to database
        writeToDB(notesData);
        console.log(notesData);

        // returns new note in JSON format.
        res.json(req.body);
    });

    //app.delete

    app.delete("/api/notes", function (req, res) {

    })
};
