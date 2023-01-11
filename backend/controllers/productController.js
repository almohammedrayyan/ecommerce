const Product = require("../models/productModel");
const ErrorHandling = require("../utils/errorHandlig");
const catchError = require("../middleware/catchAsyncError");
const ApiFeatures = require("../utils/apifeature");

//create product

exports.createProduct = catchError(async (req, res, next) => {
  req.body.user = req.user.id;
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
});

//getAllProduct

exports.getAllProducts = catchError(async (req, res) => {
  const resultPerPage = 5;
  const productCount = await Product.countDocuments();
  const apiFeatures = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  const products = await apiFeatures.query;
  res.status(200).json({ success: true, products, productCount });
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

//create  new review or update the review

exports.createProductReview = catchError(async (req, res, next) => {
  const { rating, comment, productId } = req.body;
  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };
  const product = await Product.findById(productId);
  const isReviewed = product.reviews.find(
    (rev) => rev.user?.toString() === req.user._id?.toString()
  );
  if (isReviewed) {
    product.reviews.forEach((rev) => {
      if (rev.user?.toString() === req.user._id?.toString())
        (rev.rating = rating), (rev.comment = comment);
    });
  } else {
    product.reviews.push(review);
    product.numOfReviews = product?.reviews?.length;
  }
  let avg = 0;

  product.reviews.forEach((rev) => {
    avg += rev.rating;
  });

  product.ratings = avg / product.reviews.length;
  await product.save({ validateforSave: false });

  res.status(200).json({
    success: true,
  });
});

///get All Product review

exports.getProductReviews = catchError(async (req, res, next) => {
  const product = await Product.findById(req.query.id);
  if (!product) {
    return next(new ErrorHandling("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    reviews: product.reviews,
  });
});

//Delte a review

exports.deleteReviews = catchError(async (req, res, next) => {
  const product = await Product.findById(req.query.productId);
  if (!product) {
    return next(new ErrorHandling("Product not found", 404));
  }
  const reviews = product.reviews.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  let avg = 0;

  reviews.forEach((rev) => {
    avg += rev.rating;
  });

  const ratings = avg / product.reviews.length;
  const numOfReviews = reviews.length;
  await Product.findByIdAndUpdate(
    req.query.productId,
    {
      reviews,
      ratings,
      numOfReviews,
    },
    { new: true, runValidators: true, useFindAndModify: false }
  );

  res.status(200).json({
    success: true,
    message: `Review Deleted Successfully`,
  });
});
