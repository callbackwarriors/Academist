import mongoose from "mongoose";
const PostCourseSchema = new mongoose.Schema(
  {
    userInfo: {
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
    },
    inputList: [
      {
        title: { type: String, required: true },
        link: { type: String, required: true },
      },
    ],
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    videoUrl: { type: String, required: true },
    shortDesc: { type: String, required: true },
    categories: { type: String, required: true },
    level: { type: String, required: true },
    price: { type: Number, required: true },
    desc: { type: String, required: true },
    certificate: { type: Boolean, required: true },
    img: { type: String, required: true },
    prichard: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);
const Course =
  mongoose.models.Course || mongoose.model("Course", PostCourseSchema);
export default Course;
