import { Link } from 'react-router-dom';
import { useState } from 'react';
import LessonModel from '../lessons/LessonModel'


const UserLessonCard = ({ lesson }) => {
    const [showModel, setShowModel] = useState(false);
    return (
        <div
            key={lesson._id}
            className='move border-2 border-gray-500 rounded-lg px-4 py-6 m-4 relative hover:shad'
        >
            <div>
                <h2 className='category absolute top-1 center-0 px-4 py-1 bg-red-600 rounded-lg'>
                    {lesson.category}
                </h2>
                <div className='flex justify-start items-center gap-x-2'>
                    <div className='text-red-300 text-2xl'>
                        <h2 className='my-1  px-4 py-1 big-red-600 rounded-lg'>{lesson.title}</h2>
                    </div>
                </div>
                <div className='flex justify-start gap-x-2'>
                    <div className='text-red-300 text-2xl'>
                        📕
                    </div>
                    <h2 className='my-1'>{lesson.lesson}</h2>
                </div>
                <div className='flex justify-start gap-x-2'>
                    <div className='text-red-300 text-2xl my-2'>
                        ❓
                    </div>
                    <h2 className='my-1  my-2'>{lesson.question}</h2>
                </div>
                <div className='flex justify-start gap-x-2'>
                    <div className='text-red-300 text-2xl my-2'>
                        ✅
                    </div>
                    <h2 className='my-1  my-2'>{lesson.answer}</h2>
                </div>
                <div className='table-btns'>

                    <div className='pop-up box tooltip'
                        onClick={() => setShowModel(true)}
                    >
                        <span class="tooltiptext">Show Lesson</span>
                        👁️
                    </div>
                        <Link to={`/lessons/details/${lesson._id}`}>
                        <div className='info box tooltip'>
                        <span class="tooltiptext">Info</span>
                      ℹ️
                        </div>
                    </Link>
                </div>
            </div>
            {
                showModel && (
                    <LessonModel lesson={lesson} onClose={() => setShowModel(false)} />
                )}
        </div>
    )
}
export default UserLessonCard








