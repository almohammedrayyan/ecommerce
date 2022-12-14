const User = require("../models/userModel");
const ErrorHandling = require("../utils/errorHandlig");
const catchError = require("../middleware/catchAsyncError");

//Register  a user
exports.registerUser = catchError(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "This is the sample id",
      url: "profileUrl",
    },
  });
  res.status(201).json({
    success: true,
    user,
  });
});
