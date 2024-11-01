import { Link } from 'react-router-dom';

const LessonsTable = ({ lessons }) => {
    return (
        <table className='w-full border-separate border-spacing-2'>
        <thead>
            <tr>
                <th className='lessons-border border-slate-600 rounded-md'>No.</th>
                <th className='lessons-border border-slate-600 rounded-md'>Category</th>
                <th className='lessons-border border-slate-600 rounded-md'>Title</th>
                <th className='lessons-border border-slate-600 rounded-md max-md:hidden'>Lesson</th>
                <th className='lessons-border border-slate-600 rounded-md max-md:hidden'>Question</th>
                <th className='lessons-border border-slate-600 rounded-md max-md:hidden'>Answer</th>
                <th className='lessons-border border-slate-600 rounded-md'>Operations</th>
            </tr>

        </thead>
        <tbody>
            {lessons.map((lesson, index) => (
                <tr key={lesson._id} className='h-8'>
                    <td className='lesson-border rounded-md text-left'>
                        {index + 1}
                    </td>
                    <td className='lesson-border category-width text-left'>
                        {lesson.category}
                    </td>
                    <td className='lesson-border title-width rounder-md text-left'>
                        {lesson.title}
                    </td>
                    <td className='lesson-border lesson-width text-left'>
                        {lesson.lesson}
                    </td>
                    <td className='lesson-border border question-width text-left'>
                        {lesson.question}
                    </td>
                    <td className='lesson-border answer-width border text-left'>
                        {lesson.answer}
                    </td>
                    <td className='lesson-border border text-left'>
                        <div className='link-btns'>
                            <Link to={`/lessons/details/${lesson._id}`} className='center-icon'>
                                <div className='info tooltip center-icon'>
                                <span class="tooltiptext">Info</span>
                                    ℹ️ 
                                </div>
                            </Link>
                            <Link to={`/lessons/edit/${lesson._id}`}>
                                <div className='edit tooltip center-icon'>
                                <span class="tooltiptext">Edit</span>
                                    ✏️
                                </div>
                            </Link>
                            <Link to={`/lessons/${lesson._id}`} className='center-icon'>
                                <div className='trash tooltip center-icon'>
                                <span class="tooltiptext">Delete</span>
                                    🗑️
                                </div>
                            </Link>
                        </div>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
    )
}
export default LessonsTable