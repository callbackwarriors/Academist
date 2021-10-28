import mongoose from "mongoose";
const PostCourseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    videoUrl: { type: String, required: true },
    shortDesc: { type: String, required: true },
    categories: { type: String, required: true },
    level: { type: String, required: true },
    price: { type: Number, required: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    inputList:[
      {
        link:{ type: String, required: true},
      },
    ],
  },
  { timestamps: true }
);
const Course = mongoose.models.VideoCourse || mongoose.model("VideoCourse", PostCourseSchema);
export default Course;
