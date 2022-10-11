const express = require("express");
const router = express.Router();

//product controllers
const getProducts = require("../controllers/productController");

router.get("/", getProducts);

module.exports = router;
