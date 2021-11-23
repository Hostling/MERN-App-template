const express = require('express');
const router = express.Router();

router.all('/', (req, res) => {
    res.send("Hello");
})

module.exports = router;