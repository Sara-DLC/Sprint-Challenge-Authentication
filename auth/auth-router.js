const router = require('express').Router();

router.get("/", (req, res) => {
  res.status(200).json({ api: "working", dbenv: process.env.DB_ENV });
});

router.post('/register', (req, res) => {
  // implement registration
});

router.post('/login', (req, res) => {
  // implement login
});

module.exports = router;
