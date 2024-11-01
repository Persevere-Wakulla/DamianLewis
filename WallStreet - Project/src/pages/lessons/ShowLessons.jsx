import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../../components/BackButton';
import Spinner from '../../components/Spinner';
import { Lesson } from '../../../BackEnd/models/lessonModels.js';



const ShowLesson = () => {
    const [lesson, setLesson] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5500/lessons/${id}`)
            .then((res) => res.json())
            .then((res) => setLesson(res))
            .then(() => setLoading(false))
            .catch((error) => console.log(error));
    }, [0]);
    console.log(lesson)

    return (
        <div className='p-4 lesson' >
            <BackButton />
            <h1 className='text-3xl text-yellow-500 my-4 show-lesson'>Show Lesson</h1>
            {loading ? (
                <Spinner />
            ) : (
                <div className='show-lesson-border'>

                    <div className='display-lesson'>
                        <span className='show-title'>Category: </span>
                        <span>{lesson.category}</span>
                    </div>

                    <div className='display-lesson'>
                        <span className='show-title'>Title: </span>
                        {lesson.title}
                    </div>
                    <div className='display-lesson'>
                        <span className='show-title'>Lesson: </span>
                        <span>{lesson.lesson}</span>
                    </div>
                    <div className='display-lesson'>
                        <span className='show-title'>Question: </span>
                        <span>{lesson.question}</span>
                    </div>
                    <div className='display-lesson'>
                        <span className='show-title'>Answer: </span>
                        <span>{lesson.answer}</span>
                    </div>
                    <div className='display-lesson'>
                        <span className='show-title'>Create Time: </span>
                        <span>{new Date(lesson.createAt).toString()}</span>

                    </div>
                    <div className='display-lesson'>
                        <span className='show-title'>Last Update Time: </span>
                        <span>{new Date(lesson.updateAt).toString()}</span>
                    </div>

                </div>

            )}
        </div>
    )
}

export default ShowLesson