import mongoose from "mongoose";

const lessonSchema = mongoose.Schema(
    {
        category: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        lesson: {
            type: String,
            required: true,
         }, 
       question: {
        type: String,
        required: true,
       },
        answer: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

export const Lesson = mongoose.model(  "lessons", lessonSchema );