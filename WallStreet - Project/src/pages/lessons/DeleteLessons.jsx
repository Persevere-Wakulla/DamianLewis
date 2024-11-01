import React, { useState} from 'react'
import BackButton from '../../components/BackButton';
import Spinner from '../../components/Spinner';
import { useNavigate, useParams } from 'react-router-dom';
import LessonsCard from '../../components/lessons/LessonsCard';
import LessonSingleCard from '../../components/lessons/LessonSingleCard';



const DeleteLesson = ({lesson}) => {
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
            navigate('/lessons');
        })
        .catch((error) => {
            setLoading(false);
            alert('An error happned. Please Check console');
            console.log(error);
        });
    };
    return (
        <div
         className='p-4 lesson'>
            <BackButton />
            <h1 className="lesson-text">Delete Lesson</h1>
            {loading ? <Spinner /> : ""}
            <div className=''>
                <h3 className='delete-text'>Are you Sure Want To Delete This Lesson?</h3>
                <button
                className='delete'
                onClick={handleDeleteLesson}
                >
                    Yes, Delete it!
                </button>

            </div>
          </div>
    )
}

export default DeleteLesson