import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
    facebook: { type: String, default: "" },
    linkedIn: { type: String, default: "" },
    twitter: { type: String, default: "" },
    img: { type: String, default: "https://cdn.pixabay.com/photo/2017/11/10/05/46/user-2935524_960_720.png" },
    user: { type: Boolean, required: true },
    instructor: { type: Boolean, required: true },
  },
  { timestamps: true }
);

const User = mongoose.models.user || mongoose.model("user", userSchema);
export default User;
