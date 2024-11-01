import React, { useEffect, useState, useRef } from 'react';
import BackButton from '../../components/BackButton';
import Spinner from '../../components/Spinner';
import { Link } from 'react-router-dom';
import LessonsTable from '../../components/lessons/LessonsTable';
import LessonsCard from '../../components/lessons/LessonsCard';


const LessonHome = () => {
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
    console.log(lessons);

    return (
        <div className='cards'>
            <div style={{display: 'flex', flexDirection: 'row', gap: 20}} className='table-card-btn'>
                <button style={{width: 100, height: 50}}
                    className=''
                    onClick={() => setShowType('table')}
                >
                    Table
                </button>
                <button style={{width: 100, height: 50}}
                    className=''
                    onClick={() => setShowType('card')}
                >
                    Card
                </button>
            </div>
            <div className='create-btn'>
                <h1 className='lesson-text'>Lessons List</h1>
                <Link to='/lessons/create'>
                    <div className='box1' style={{borderRadius: 5}}>
                    Add Lesson
                    </div>
                </Link>
            </div>
            {loading ? <Spinner /> : showType === 'table' ? (<LessonsTable lessons={lessons} />) : (<LessonsCard lessons={lessons} />)}
            <div style={{width: 100, height: 100}} className="">
                <button className="bottom-btn" onClick={handleScrollToTop}><i className='bi bi-file-earmark-arrow-up'></i></button>
            </div>
        </div>
    )
}

export default LessonHome