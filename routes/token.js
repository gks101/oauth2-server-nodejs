const express = require("express");
const router = express.Router();

router.post("/token", (req, res) => {
    res.end("Token Endpoint");
});

router.post("/revoke", (req, res) => {
    res.end("Revoke Endpoint");
});

router.post("/introspect", (req, res) => {
    res.end("Introspection URL");
});

module.exports = router;