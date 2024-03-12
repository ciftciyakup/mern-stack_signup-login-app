import mongoose from "mongoose";
import validator from "validator";

const userSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    minlength: [5, "Full name must be at least 5 characters"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Email is not valid"],
  },
  password: {
    type: String,
    required: true,
    minlength: [8, "Full name must be at least 8 characters"],
  },
  userType: {
    type: String,
    enum: ["USER", "ADMIN"],
    default: "USER",
  },
  phoneNumber: {
    type: String,
    reqired: true,
  },
});

export default mongoose.model("User", userSchema);
