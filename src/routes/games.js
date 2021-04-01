const express = require("express");
const Games = require("../models/Games");
const router = express.Router();

router.get("/", async (req, res) => {
  const { limit, page, fields, orderBy, sortBy, q } = req.query;
  const DEFAULT_LIMITE = 10;
  const DEFAULT_PAGE = 10;

  const criteria = {
    limit: Number(limit) || DEFAULT_LIMITE,
    page: Number(page) || DEFAULT_PAGE,
    fields: fields || null,
    orderBy: orderBy || "title",
    sortBy: sortBy !== undefined ? Number(sortBy) : 1,
    q: q || "",
  };
  const result = await Games.find(criteria);
  return res.json(result);
});

module.exports = router;
