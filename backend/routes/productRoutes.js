const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getOneProduct,
} = require("../controllers/productController");
const {
  isAuthenticatedUser,
  authorizedRoles,
} = require("../middleware/authentication");

const router = express.Router();

router.route("/products").get(getAllProducts);
router
  .route("/products/new")
  .post(isAuthenticatedUser, authorizedRoles("admin"), createProduct);
router.route("/product/:id").put(updateProduct);
router
  .route("/product/:id")
  .put(isAuthenticatedUser, authorizedRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, authorizedRoles("admin"), deleteProduct)
  .get(getOneProduct);

module.exports = router;
