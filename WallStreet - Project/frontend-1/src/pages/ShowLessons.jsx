import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { Lesson } from '../../../BackEnd/models/lessonModels';



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
    }, []);
console.log(lesson)

    return (
        <div className='p-4 lesson' >
            <BackButton />
            <h1 className='text-3xl text-yellow-500 my-4 show-lesson'>Show Lesson</h1>
            {loading ? (
                <Spinner />
            ) : (
                <div className='flex flex-col border-2 border-blue-400 rounded-x1 w-fit p-4'>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-yellow-500'>Id:</span>
                        <span>{lesson._id}</span>
                    </div>

                    <div className='my-4'>
                        <span className='text-xl mr-4 text-yellow-500'>Category:</span>
                        <span>{lesson.category}</span>
                    </div>

                    <div className='my-4'>
                        <span className='text-xl mr-4 text-yellow-500'>Title:</span>
                        <span>{lesson.title}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-yellow-500'>Lesson:</span>
                        <span>{lesson.lesson}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-yellow-500'>Question:</span>
                        <span>{lesson.question}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-yellow-500'>Answer:</span>
                        <span>{lesson.answer}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-yellow-500'>Create Time:</span>
                        <span>{new Date(lesson.createAt).toString()}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-yellow-500'>Last Update Time:</span>
                        <span>{new Date(lesson.updateAt).toString()}</span>
                    </div>

                </div>

            )}
        </div>
    )
}

export default ShowLesson