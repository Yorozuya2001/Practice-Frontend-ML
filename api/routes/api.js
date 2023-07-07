const express = require("express");
const router = express.Router();
const searchItems = require("../controllers/searchItems");

router.get("/items", async (req, res) => {
  try {
    const { search } = req.query;

    const data = await searchItems(search);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
