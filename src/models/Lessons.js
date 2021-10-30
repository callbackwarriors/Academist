import mongoose from "mongoose";
const PostLessonSchema = new mongoose.Schema(
  {
    inputList: [
      {
        title: { type: String, required: true },
        link: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);
const Lesson =
  mongoose.models.Lesson || mongoose.model("Lesson", PostLessonSchema);
export default Lesson;
