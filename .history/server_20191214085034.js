//modules to use for the app
const express = require('express');
const PATH = require('PATH');

const layout = require('express-layout');
// const routes = require('./routes');
const fs = require('fs')





//we are now telling node that we are creating an "express" server
const APP = express();


// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;


// Sets up the Express app to handle data parsing
APP.use(express.urlencoded({ extended: true }));
APP.use(express.json());


// path to serve static files.
APP.use(express.static(PATH.join(__dirname, 'public')));

APP.get("/api/notes", function(req, res) {

    fs.readFile(PATH.join(__dirname, "db", "db.json"), (err, data) => {
        res.json(JSON.parse(data));
    });


});


APP.get("/", function(req, res) {
    res.sendFile(PATH.join(__dirname, "./index.html"));
});
//When this route is 'hit' we respond with the contacts.html file
APP.get("/notes", function(req, res) {


    console.log(res.body);

    res.sendFile(PATH.join(__dirname, "./notes.html"));
});
//When this route is 'hit' we console log the posted data then
// redirect to user back to the main route. (above, which sends the home.html file)
APP.post("/api/notes", function(req, res) {


    fs.readFile(PATH.join(__dirname, "db", "db.json"), (err, data) => {
        res.json(JSON.parse(data));
    });


    console.log(req.body);

    // return res.body;


    // res.redirect("/");

});


// Catch all if no route is match
APP.get("*", function(req, res) {
    res.redirect("/");


})

// LISTENER
APP.listen(PORT, function() {
    console.log("Listening on port:", PORT);
});





//setting the ID as a parameter
// APP.get("/paramtest/:id", function(req, res) {

//     console.log(req.params.id)
//     res.json(req.params.id)
// })









// fs.writeFileSync(path.join(__dirname, "db/db.json", JSON.strngify(res.body), "utf8", function(err) {
//     if (err) {
//         console.log(err)

//     }

//     console.log("It worked");



// }))








// APP.delete()