const express = require("express");
const router = express.Router();

router.get("/error", (req, res) => {
   res.end("Error Endpoint");
});

module.exports = router;