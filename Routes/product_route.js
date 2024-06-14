const express = require('express');
const router = express.Router();
const Product = require("../Models/Product_model.js");
const { getProducts, getProduct, createProduct, updateProduct,deleteProduct } = require("../Controllers/product_controller.js");

router.get('/', getProducts);

// Route to get a specific product by its ID
router.get('/:id', getProduct);

// Route to create a new product
router.post('/', createProduct);

// Route to update a product by its ID
router.put('/:id', updateProduct);


router.delete("/:id",deleteProduct)
module.exports = router;
