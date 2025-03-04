import mongoose, { Document, Schema } from "mongoose";

export interface Url extends Document{
    url: string;
    shorturl: string
}


export const UrlSchema: Schema<Url> = new Schema({
    url: {
        type: String,
        required: true
    },
    shorturl: {
        type: String,
        required: true
    }
})

const Urlmodel = (mongoose.models.Url as mongoose.Model<Url>) || mongoose.model<Url>("Url", UrlSchema);

export default Urlmodel;

