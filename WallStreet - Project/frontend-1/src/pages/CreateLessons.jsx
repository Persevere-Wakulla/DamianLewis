import React, { useEffect, useState } from 'react'
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useNavigate } from 'react-router-dom';

const CreateLessons = () => {
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [lesson, setLesson] = useState('');
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const handleSaveLesson = () => {
        const data = {
            category,
            title,
            lesson,
            question,
            answer,
        };

        setLoading(true);
        fetch('http://localhost:5500/lessons', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(() => {
                setLoading(false);
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                alert('An error happned. Please Check console');
                console.log(error);
            });
    };

    return (
        <div className='p-4 lesson create-lesson-header'>
            <BackButton />
            <h1 className='text-3xl my-4 create-lesson-header'>Create Lesson</h1>
            {loading ? <Spinner /> : ' '}
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>

                <div className='my-4'>
                    <label className="text-xl mr-4 text-black-500">Category:</label>
                    <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className='border-2 border-black-500 px-4 py-2 w-full'
                    />
                </div>

                <div className='my-4'>
                    <label className="text-xl mr-4 text-black-500">Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='border-2 border-black-500 px-4 py-2 w-full'
                    />
                </div>

                <div className='my-4'>
                    <label className="text-xl mr-4 text-black-500">Lesson:</label>
                    <textarea type="text"
                        value={lesson}
                        onChange={(e) => setLesson(e.target.value)}
                        className='border-2 border-black-500 px-4 py-2 w-full'
                    />
                </div>

                <div className='my-4'>
                    <label className="text-xl mr-4 text-black-500">Question:</label>
                    <input type="text"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>

                <div className='my-4'>
                    <label className="text-xl mr-4 text-black-500">Answer:</label>
                    <input type="text"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>

                <button className='p-2 bg-green-600 m-8' onClick={handleSaveLesson}>
                    Save
                </button>
            </div>
        </div>
    )
}

export default CreateLessons


