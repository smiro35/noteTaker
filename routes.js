// // / ROUTES
// // Below is a series of express routes.
// // These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// // ================================================================================
// // When this route is 'hit' we respond with the home.html file
// APP.get("/", function(req, res) {
//     res.sendFile(PATH.join(__dirname, "./index.html"));
// });
// //When this route is 'hit' we respond with the contacts.html file
// APP.get("/notes", function(req, res) {
//     res.sendFile(PATH.join(__dirname, "./notes.html"));
// });
// //When this route is 'hit' we console log the posted data then
// // redirect to user back to the main route. (above, which sends the home.html file)
// APP.post("/notes", function(req, res) {
//     console.log(req.body);
//     res.redirect("/");
// });

// // APP.delete()
// // Catch all if no route is match
// APP.get("*", function(req, res) {
//     res.redirect("/");
// })