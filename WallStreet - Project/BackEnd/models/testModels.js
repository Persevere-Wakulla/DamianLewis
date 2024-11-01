import mongoose from 'mongoose';

export const testSchema = mongoose.Schema(
    {
        id:{
            type: Number,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        questions:{
            type: String,
            required: true,
        },
        answer: {
            type: String,
            required: true,
        },
        attempts: {
            type: Number,
            required: true,
        },
        date: {
            type: Number,
            required: true,
        },
        score: {
            type: Number,
            required: true,
        }
    
    }
);