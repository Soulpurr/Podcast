import mongoose from "mongoose";
const { Schema } = mongoose;

const podcastSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, required: true },
    category: { type: String, required: true },
    speaker: { type: String, required: true },
    link: { type: String, required: true },
    like: { type: Number, default: 0 },
    user: { type: Schema.Types.ObjectId, ref: "users" },
  },
  { timestamps: true }
);
mongoose.models = {};
export default mongoose.model("podcast", podcastSchema);
