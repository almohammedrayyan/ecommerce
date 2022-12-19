const catchError = require("../middleware/catchAsyncError");
const ErrorHandling = require("../utils/errorHandlig");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
exports.isAuthenticatedUser = catchError(async (req, res, next) => {
  const { token } = req.cookies;
  //   console.log(token);
  if (!token) {
    return next(new ErrorHandling("Please Login access this resource", 401));
  }
  const decodedDate = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decodedDate.id);
  next();
});

exports.authorizedRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.roles)) {
      return next(
        new ErrorHandling(
          `Roles:${req.user.roles} is not allowed to access this resource`,
          403
        )
      );
    }
    next();
  };
};
