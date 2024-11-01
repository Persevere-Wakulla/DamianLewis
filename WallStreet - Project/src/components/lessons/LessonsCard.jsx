import { Link } from 'react-router-dom';
import LessonSingleCard from './LessonSingleCard';


const LessonsCard = ({ lessons }) => {
    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2'>
            {lessons.map((item) => (
                <LessonSingleCard key={item._id} lesson={item} />
            ))}
        </div>
    )
}
export default LessonsCard