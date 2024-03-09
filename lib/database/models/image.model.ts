import { Schema, model, models,Document } from "mongoose";
export interface IImage extends Document {
    title: string;
    transformationType: string;
    publicId: string;
    secureUrl: string;
    width?: number;
    height?: number;
    config?: object;
    transformationUrl?: string;
    aspectRatio?: string;
    color?: string;
    prompt?: string;
    author?: {
        _id:string;
        firstName:string;
        lastName:string;
    }; // Assuming Schema is imported or defined elsewhere
    createdAt?: Date; // Assuming timestamps are managed by Mongoose
    updatedAt?: Date;
}

const ImageSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    transformationType: {
        type: String,
        required: true
    },
    publicId: {
        type: String,
        required: true
    },
    secureUrl: {
        type: URL,
        required: true
    },
    width: {
        type: Number,
    },
    height: {
        type: Number,
    },
    config: {
        type: Object,
    },
    transformationUrl: {
        type: URL,
    },
    aspectRatio: {
        type: String,
    },
    color: {
        type: String,
    },
    prompt: {
        type: String,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },

},{timestamps:true});

const Image = models?.Image || model('Image',ImageSchema);

export default Image;