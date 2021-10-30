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
const LessonData =
  mongoose.models.LessonData || mongoose.model("LessonData", PostLessonSchema);
export default LessonData;
