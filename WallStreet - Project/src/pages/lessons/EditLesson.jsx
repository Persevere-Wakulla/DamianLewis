import React, { useState, useEffect } from 'react'
import BackButton from '../../components/BackButton';
import Spinner from '../../components/Spinner';
import { useNavigate, useParams } from 'react-router-dom';

const EditLesson = () => {
    const [lessonCard, setLessonCard] = useState({
  
    });
    // const [answer, setAnswer] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    // your inputs are setting a state, not changing properties and that state is not being utilized in saving your data
//  to fix =>
//  make the inputs change the state's properties, not the entire state
//  call that state in your function to updaqte your database

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5500/lessons/${id}`)
            .then((res) => res.json())
            .then((json) => {
                setLessonCard(json)
                setLoading(false)
            })
            .catch((error) => console.log(error))
    }, []);

    const handleEditLesson = () => {
        const data = {
            
        };
        
        setLoading(true);
        fetch(`http://localhost:5500/lessons/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(lessonCard),
            mode: 'cors'
        })

            .then(() => {
                setLoading(false);
                navigate('/lessons');
            })
            .catch((error) => {
                setLoading(false);
                alert('An error happned. Please Check console');
                console.log(error);
            });
    };

    return (
        <div className='p-4 lesson'>
            <BackButton />
            <h1 className='lesson-text'>Edit Lesson</h1>
            {loading ? <Spinner /> : ' '}
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>

            <div className='my-4'>
                    <label className="text-xl mr-4 text-gray-500">Category</label>
                    <input
                        type="text"
                        value={lessonCard.category}
                        onChange={(e) => setLessonCard({...lessonCard, category:  e.target.value})}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>

               <div className='my-4'>
                    <label className="text-xl mr-4 text-gray-500">Title</label>
                    <input
                        type="text"
                        value={lessonCard.title}
                        onChange={(e) => setLessonCard({...lessonCard, title: e.target.value})}
                         className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className="text-xl mr-4 text-gray-500">Lesson</label>
                    <textarea type="text"
                        value={lessonCard.lesson}
                        onChange={(e) => setLessonCard({...lessonCard, lesson: e.target.value})}
                         className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className="text-xl mr-4 text-gray-500">Question</label>
                    <input type="text"
                        value={lessonCard.question}
                        onChange={(e) => setLessonCard({...lessonCard, question: e.target.value})}
                       className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className="text-xl mr-4 text-gray-500">Answer</label>
                    <input type="text"
                        value={lessonCard.answer}
                        onChange={(e) => setLessonCard({...lessonCard, answer: e.target.value})}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <button className='edit-btn' onClick={handleEditLesson}>
                    Save
                </button>
            </div>
        </div>
    )
}

export default EditLesson