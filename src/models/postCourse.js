import mongoose from "mongoose";
const PostCourseSchema = new mongoose.Schema(
  {
    inputList: [
      {
         name: { type: String, required: true },
         link: { type: String, required: true },
         isOpen: {type: Boolean, required: true}
        }
      ],
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    videoUrl: { type: String, required: true },
    shortDesc: { type: String, required: true },
    categories: { type: String, required: true },
    level: { type: String, required: true },
    price: { type: Number, required: true },
    desc: { type: String, required: true },
    certificate: { type: Boolean, required: true},
    img: { type: String, required: true },
  },
  { timestamps: true }
);
const Course =
  mongoose.models.coursetest || mongoose.model("coursetest", PostCourseSchema);
export default Course;
