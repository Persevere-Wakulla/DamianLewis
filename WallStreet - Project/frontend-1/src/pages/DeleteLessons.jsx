import React, { useState} from 'react'
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteLesson = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();

    const handleDeleteLesson = () => {
        setLoading(true);
     fetch(`http://localhost:5500/lessons/${id}`,{
            method: "DELETE", 
            headers: {"Content-Type" : "application/json"},
            body: null,
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
        <div className='p-4 lesson'>
            <BackButton />
            <h1 className='text-3xl my-4 text-yellow-500 show-lesson'>Delete Lesson</h1>
            {loading ? <Spinner /> : ""}
            <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
                <h3 className='text-2xl text-yellow-500'>Are you Sure Want To Delete This Lesson?</h3>
                <button
                className='p-4 bg-red-600 text-white m-8 w-full text-yellow-500'
                onClick={handleDeleteLesson}
                >
                    Yes, Delete it!
                </button>

            </div>
          </div>
    )
}

export default DeleteLesson