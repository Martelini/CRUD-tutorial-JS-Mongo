const express = require("express");
const Product = require("../models/product.model");
const router = express.Router();
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require("../controllers/product.controller");

// Create

router.post('/', createProduct);

// Read

router.get('/', getProducts);
router.get('/:id', getProduct);

// Update

router.put('/:id', updateProduct);

// Delete

router.delete('/:id', deleteProduct);

module.exports = router;