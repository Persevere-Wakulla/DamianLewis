import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose"
import cors from 'cors';

// import { Lesson } from "./models/lessonModels.js";
import { Login } from "./models/loginModels.js";

import lessonsRoute from './routes/lessonsRoute.js';


const app = express();
//  Middleware for parsing request body
app.use(express.json());

//Middleware for handling CROS POLICY
//Option 1: Allow All Origins with Default of cors(*)
app.use(cors())
//Option 2: Allow Custum Origins
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],

//     })
// );

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome To Wall Street MERNStack Lessons')
});

app.post('/sign-up', async (req, res) => {
    const {firstName, lastName, email, username, password} = req.body
    try {
        if (!firstName || !lastName || !email || !username || !password) {
           return res.status(400).send({message: 'Please complete all fields'})
        }
        else {
            const newUser = {
                firstName, lastName, email, username, password
            }
            console.log(newUser);
           const user = await Login.create(newUser)
           if (user){
          return  res.status(201).send(user)
           }
        }
    } catch (err) {
        console.log(err.message);
        res.status(402).send({ message: "An Error Occured" })
    }
})

app.post('/log-in', async (req, res) => {
    console.log(req.body);
    const {email, username, password} = req.body
    try {
        if (!email || !username || !password) {
           return res.status(400).send({message: 'Please complete all fields'})
        }
        else {
            const data = {
                email, username, password
            }
            console.log(data);
           const user = await Login.findOne({email, username, password})

        //  in Schema make a new property to know user's permissions
             

           if (!user){
               return res.status(400).send({message: "User Not Found"})
            } else {
            console.log(user);
            return  res.status(201).send(user)
           }
        }
    } catch (err) {
        console.log(err.message);
        res.status(402).send({ message: "An Error Occured" })
    }
})

app.put('/:id', async (req,res) => {
    console.log(req.body);
    // refer to lessonsRoute red dots
    // const update = await Login.findByIdAndUpdate(........)
})
app.get('/:id', async (req,res) => {
    const {id} = req.params
    console.log(id)
    // console.log(req.body);
    // refer to lessonsRoute red dots
    // const update = await Login.findByIdAndUpdate(........)
})

app.use('/lessons', lessonsRoute);

mongoose.connect(mongoDBURL)
    .then(() => {
        console.log(`App connected to database ${mongoDBURL}`);
        app.listen(PORT, () => {
            console.log(`App is listening to ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);

    });