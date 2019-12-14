// var db = require('./db/db.json')
// var fs = require('fs')
// app.get("/api/notes", function(req, res){
//   res.json(db)
// })
// app.post('/api/notes', function(req, res){
//   db.push({
//     title: req.body.title,
//     text: req.body.text,
//     id: db.length > 0 ? db[db.length - 1].id + 1 : 1
//   })
//   fs.writeFile('./db/db.json', JSON.stringify(db), function(err){
//     if(err) throw err;
//     res.send(200)
//   })
// })
// app.delete("/api/notes/:id", function(req, res){
//   // db = db.filter(function(note){
//   //   if(note.id === parseInt(req.params.id)){
//   //     return false
//   //   }
//   //   return true
//   // })


//modules to use for the app
const express = require('express');
const PATH = require('PATH');

const layout = require('express-layout');
// const routes = require('./routes');
const fs = require('fs')

// let myArray = require("./db/db.json");

// myArray.push(myNotes);



let myArray = [];

fs.readFile(PATH.join(__dirname, "db", "db.json"), (err, data) => {
    myArray = JSON.parse(data);

});

;





//we are now telling node that we are creating an "express" server
const APP = express();


// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;


// Sets up the Express app to handle data parsing
APP.use(express.urlencoded({ extended: true }));
APP.use(express.json());


// path to serve static files.
APP.use(express.static(PATH.join(__dirname, 'public')));

// APP.get("/api/notes", function(req, res) {

//     fs.readFile(PATH.join(__dirname, "db", "db.json"), (err, data) => {
//         res.json(JSON.parse(data));
//         // res.json(JSON.parse(data));
//     });


// });


APP.get("/", function(req, res) {
    res.sendFile(PATH.join(__dirname, "./index.html"));
});
//When this route is 'hit' we respond with the contacts.html file
APP.get("/notes", function(req, res) {

    res.sendFile(PATH.join(__dirname, "public/notes.html"));
});

var db = require('./db/db.json')

APP.get("/api/notes", function(req, res) {
        res.json(db)



    })
    //When this route is 'hit' we console log the posted data then
    // redirect to user back to the main route. (above, which sends the home.html file)
APP.post("/api/notes", function(req, res) {





    db.push({
        title: req.body.title,
        text: req.body.text,
        id: db.length > 0 ? db[db.length - 1].id + 1 : 1

    });



    fs.writeFileSync(PATH.join(__dirname, "db/db.json"), JSON.stringify(myNotes), "utf8", function(err) {
        if (err) {
            console.log(err)

        }

        console.log("array works");


        myArray.push(myNotes);

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





//setting the ID as a parameter
// APP.get("/paramtest/:id", function(req, res) {

//     console.log(req.params.id)
//     res.json(req.params.id)
// })


















// APP.delete()