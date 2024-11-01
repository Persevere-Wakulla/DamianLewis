import mongoose from "mongoose";
import { testSchema } from './testModels.js'

const loginSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true,
        },
        // address: {
        //     type: String,
        //     required: true,
        // },
        // city: {
        //     type: String,
        //     required: true,
        // },
        // state: {
        //     type: String,
        //     required: true,
        // },
        // zip: {
        //     type: Number,
        //     required: true,
        // },
        // nameOnCard: {
        //     type: String,
        //     required: true,
        // },
        // cardNumber: {
        //     type: Number,
        //     required: true
        // },
        // ExpYear: {
        //     type: Number,
        //     required: true,
        // },
        // cvv: {
        //     type: Number,
        //     required: true,
        // }
        lessons: {
            type: [testSchema]
        },
        permissions: {
            type: String,
            default:()=> 'user'
        }
    },
    {
        timestamps: true,
    }
);

export const Login = mongoose.model("logins", loginSchema,);

