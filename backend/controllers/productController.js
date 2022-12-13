const Product = require("../models/productModel");
const ErrorHandling = require("../utils/errorHandlig");
const catchError = require("../middleware/catchAsyncError");
//create product

exports.createProduct = catchError(async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
});
//getAllProduct
exports.getAllProducts = catchError(async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ success: true, products });
});
//update product
exports.updateProduct = catchError(async (req, res, next) => {
  let updateProduct = Product.findById(req.params.id);
  if (!updateProduct) {
    return next(new ErrorHandling("Product not found", 404));
  }
  updateProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    success: true,
    updateProduct,
  });
});
//delete product

exports.deleteProduct = catchError(async (req, res, next) => {
  const deleteProduct = await Product.findById(req.params.id);
  if (!deleteProduct) {
    return next(new ErrorHandling("Product not found", 404));
  }
  await deleteProduct.remove();

  res.status(200).json({
    success: true,
    message: "Product Deleted Sucessfully",
  });
});

///get product details

exports.getOneProduct = catchError(async (req, res, next) => {
  const getOneProduct = await Product.findById(req.params.id);
  if (!getOneProduct) {
    return next(new ErrorHandling("Product not found", 404));
  }
  res.status(200).json({
    success: true,
    getOneProduct,
  });
});
