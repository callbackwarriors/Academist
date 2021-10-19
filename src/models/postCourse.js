import mongoose from "mongoose";
const PostCourseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    videoUrl: { type: String, required: true },
    shortDesc: { type: String, required: true },
    categories: { type: String, required: true },
    level: { type: String, required: true },       
    price: { type: String, required: true },
    desc: { type: String, required: true },
  },
  { timestamps: true }
);
const Course = mongoose.models.postCourse || mongoose.model("postCourse", PostCourseSchema);
export default Course;