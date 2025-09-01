import mongoose, { model, models, Schema } from "mongoose";

export const VIDEO_DIMENSIONS = {
  width: 1080,
  height: 1920,
};

export interface IVideo {
  _id?: mongoose.Types.ObjectId;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  controls?: boolean;
  transformation?: {
    height: number;
    width: number;
    quality?: number;
  };
}

const VideoSchema = new Schema<IVideo>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    videoUrl: { type: String, required: true },
    thumbnailUrl: { type: String, required: true },
    controls: { type: Boolean, default: true },
    transformation: {
      height: {
        type: Number,
        required: true,
        default: VIDEO_DIMENSIONS.height,
      },
      width: { type: Number, required: true, default: VIDEO_DIMENSIONS.width },
      quality: { type: Number, default: 100 },
    },
  },
  { timestamps: true }
);

const Video = models?.Video || model<IVideo>("Video", VideoSchema);

export default Video;
