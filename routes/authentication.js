const express = require("express");
const router = express.Router();

router.post("/signup", (req, res) => {
    res.end("Signup endpoint");
});

router.post("/login", (req, res) => {
    res.end("Login endpoint");
});

router.delete("/delete", (req, res) => {
    res.end("Delete endpoint");
});

module.exports = router;