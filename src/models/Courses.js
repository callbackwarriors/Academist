const mongoose = require("mongoose");
const CoursesSchema = new mongoose.Schema(
  {
    inputList: [
      {
        title: { type: String, required: true },
        link: { type: String, required: true },
      },
    ],
    title: { type: String, required: true }, // unique: true
    slug: { type: String, required: true, unique: true },
    shortDesc: { type: String, required: true },
    categories: { type: String, required: true },
    level: { type: String, required: true },
    price: { type: Number, required: true },
    certificate: { type: Boolean, required: true },
    videoUrl: { type: String, required: true },
    img: { type: String, required: true },
    desc: { type: String, required: true },
  },
  { timestamps: true }
);

const Courses =
  mongoose.models.Course || mongoose.model("Course", CoursesSchema);

export default Courses;
