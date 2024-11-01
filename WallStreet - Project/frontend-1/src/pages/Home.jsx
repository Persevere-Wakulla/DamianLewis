import React, { useEffect, useState, useRef } from 'react';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import LessonsTable from '../components/home/LessonsTable';
import LessonsCard from '../components/home/LessonsCard';
// import ShowLesson from './ShowLessons';
// import LessonModel from '../components/home/LessonModel';

const Home = () => {
    const bottomRef = useRef(null);
    const [lessons, setLessons] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState([]);

    function handleScrollToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:5500/lessons')
            .then(req => req.json())
            .then((response) => {
                setLessons(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);
    // console.log(lessons);
    return (
        <div className='p-4 cards'>
            <div className='flex justify-btween items-center gap-x-4'>
                <button
                    className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
                    onClick={() => setShowType('table')}
                >
                    Table
                </button>
                <button
                    className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
                    onClick={() => setShowType('card')}
                >
                    Card
                </button>
            </div>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl my-8 text-yellow-900'>Lessons List</h1>
                <Link to='/lessons/create'>
                    <div className='box1 text-2xl text-green-800'>
                        ➕
                    </div>
                </Link>
            </div>
            {loading ? <Spinner /> : showType === 'table' ? (<LessonsTable lessons={lessons} />) : (<LessonsCard lessons={lessons} />)}
            <div className="center-btn flex-btn">
                <button className="bottom-btn" onClick={handleScrollToTop}><i className='bi bi-file-earmark-arrow-up'></i></button>
            </div>
        </div>
    )
}

export default Home