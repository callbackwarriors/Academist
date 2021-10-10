const mongoose = require("mongoose");
const CoursesSchema = new mongoose.Schema(
  {
    title: { type: String, required: true }, // unique: true
    slug: { type: String, required: true, unique: true },
    shortDesc: { type: String, required: true },
    categories: { type: String, required: true },
    level: { type: String, required: true },
    price: { type: Number, required: true },
    courseProvider: { type: String, required: true },
    videoUrl: { type: String, required: true },
    img: { type: String, required: true },
    desc: { type: String, required: true },
  },
  { timestamps: true }
);

const Courses = mongoose.models.Courses || mongoose.model("Courses", CoursesSchema);

export default Courses;