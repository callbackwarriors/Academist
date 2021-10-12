
import mongoose from "mongoose";
const testCourseSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);
const Course = mongoose.models.course || mongoose.model("course", testCourseSchema);
export default Course;


