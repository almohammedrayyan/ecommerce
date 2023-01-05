const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  forgotPassword,
  resetPassword,
  getUserDetails,
  getUpdatedPassword,
  updateProfile,
} = require("../controllers/userController");

const {
  isAuthenticatedUser,
  authorizedRoles,
} = require("../middleware/authentication");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/me").get(isAuthenticatedUser, getUserDetails);
router.route("/password/update").put(isAuthenticatedUser, getUpdatedPassword);
router.route("/me/update").put(isAuthenticatedUser, updateProfile);

module.exports = router;
