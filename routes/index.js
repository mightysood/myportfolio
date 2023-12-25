// ================================================
//            SERVER CONFIGURATION 
// ================================================
var express = require('express');
var router = express.Router();


// ================================================
//            Domain Landing Page 
// ================================================
router.get("/", (req, res) => {
    
    console.log("Home Requested");    
    res.render("index");
});

router.get("/tictactoe", (req, res) => {
    
    console.log("TIC TAC TOE");    
    res.render("tictactoe");
});

// ================================================
//            Unwanted Routes 
// ================================================
router.get("/*", (req, res) => {
    res.redirect("/");
});


module.exports = router;