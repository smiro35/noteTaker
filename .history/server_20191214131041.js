//------MY MODULES-----

//modules I will use for the app
const express = require('express');
const PATH = require('PATH');

const layout = require('express-layout');

const fs = require('fs')


fs.readFile('db/db.json', function(err, data) {
    if (err) throw err;
    // console.log(data);
});



//-----MY ROUTES------

//we are now telling node that we are creating an "express" server
const APP = express();


// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;


// Sets up the Express app to handle data parsing
APP.use(express.urlencoded({ extended: true }));
APP.use(express.json());


// path to serve static files.
APP.use(express.static(PATH.join(__dirname, 'public')));



// When this route is hit, send user to home page
APP.get("/", function(req, res) {
    res.sendFile(PATH.join(__dirname, "./index.html"));
});


//When this route is hit, send user to the notes page 
APP.get("/notes", function(req, res) {

    res.sendFile(PATH.join(__dirname, "public/notes.html"));
});

//lets set a variable for the db.json as an array
var db = [];

//then lets set an api route to get the .body info from notes and write it to the db.json

APP.get("/api/notes", function(req, res) {
    res.json(db)
})


//When this route is hit, we write the .body info into the db.json folder.
APP.post("/api/notes", function(req, res) {
    db.push({
        title: req.body.title,
        text: req.body.text,
        id: db.length > 0 ? db[db.length - 1].id + 1 : 1

    })



    fs.writeFileSync(PATH.join(__dirname, "db/db.json"), JSON.stringify(db), "utf8", function(err) {
        if (err) {
            throw err;
            res.send(200);

        }

        console.log("array works");


        // myArray.push(myNotes);

    })


    // return res.body;


    res.redirect("/");

});






// Catch all if no route is match
APP.get("*", function(req, res) {
    res.redirect("/");


})

// LISTENER
APP.listen(PORT, function() {
    console.log("Listening on port:", PORT);
});





// All below need to be completed. 

//setting the ID as a parameter
// APP.get("/paramtest/:id", function(req, res) {

//     console.log(req.params.id)
//     res.json(req.params.id)
// })


// // route to delete note.
// APP.delete("/api/notes/:id", function(req, res) {
//     db = db.filter(function(note) {
//         if (note.id === parseInt(req.params.id)) {
//             return false
//         }
//         return true
//     })

// });