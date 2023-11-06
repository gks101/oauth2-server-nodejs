const express = require("express");
const router = express.Router();

router.get("/authorize", (req, res) => {
   res.end("Authorization Endpoint");
});

module.exports = router;