import express from 'express';
import { Lesson } from '../models/lessonModels.js';

const router = express.Router();
// Route for save a new lesson
router.post('/', async (request, response) => {
    console.dir(request)
    try {
        if (
            !request.body.category || !request.body.title || !request.body.lesson || !request.body.question || !request.body.answer
        ) {
            return response.status(400).send({
                message: 'Send all reqired fields: category, title, lesson, question, answer',
            });
        }
        const newLesson = {
            category: request.body.category,
            title: request.body.title,
            lesson: request.body.lesson,
            question: request.body.question,
            answer: request.body.answer,
        };
        const lesson = await Lesson.create(newLesson);
        return response.status(201).send(lesson);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }

});

//Route for Get All Lessons From database
router.get('/', async (request, response) => {
    try {
        const lessons = await Lesson.find({});
        return response.status(200).json({
            count: lessons.length,
            data: lessons
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for Get One Lesson from database by id
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const lesson = await Lesson.findById(id);

        return response.status(200).json(lesson);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Route for Update a Lesson
router.put('/:id', async (request, response) => {
    try {

        if (
            !request.body.category || !request.body.title || !request.body.lesson || !request.body.question || !request.body.answer
        ) {
            return response.status(400).send({
                message: 'Send all required fields: category, title, lesson, question, answer'
            });
        }

        const { id } = request.params;

        const result = await Lesson.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'Lesson not found' });
        }
        return response.status(200).send({ message: 'Lesson updated successfully' });
    } catch {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//  Route for Delete a Lesson
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await Lesson.findByIdAndDelete(id);
        if (!result) {
            return response.status(404).json({ message: 'Lesson not found' })
        }
        return response.status(200).send({ message: 'Lesson deleted successfully' });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;