const express = require("express");
const router = express.Router();

router.post("/userinfo", (req, res) => {
   res.end("Userinfo endpoint");
});

module.exports = router;