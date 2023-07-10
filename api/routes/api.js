const express = require("express");
const router = express.Router();
const searchItems = require("../controllers/searchItems");
const getDetail = require("../controllers/getDetail");

router.get("/items", async (req, res) => {
  try {
    const { search } = req.query;
    const data = await searchItems(search);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/items/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getDetail(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
