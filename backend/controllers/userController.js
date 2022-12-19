const ErrorHandling = require("../utils/errorHandlig");
const catchError = require("../middleware/catchAsyncError");
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");

//Register User

exports.registerUser = catchError(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "this is sample id",
      url: "profilepicurl",
    },
  });
  sendToken(user, 201, res);
});

//login user

exports.loginUser = catchError(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandling("Please enter email and password", 400));
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandling("Invalid Email and Password", 401));
  }

  // console.log(user);
  const isPasswordMatched = user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandling("Password does not matched", 401));
  }

  sendToken(user, 200, res);
});

//Logout User

exports.logout = catchError(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    message: "Logout successfully",
  });
});
