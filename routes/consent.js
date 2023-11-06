const express = require("express");
const router = express.Router();

router.post("/consent", (req, res) => {
    res.end("Consent Endpoint");
});

module.exports = router;