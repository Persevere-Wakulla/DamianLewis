import { Link } from 'react-router-dom';

const BackButton = ({ destination = '/' }) => {
    return (
        <div className='flex'>
            <Link 
            to={destination}
            className='bg-sky-800 text-white px-4 reounder-lg w-fit'
            >
                <div className='text-2xl'>
                🔙
                </div>
            </Link>
            </div>
    )
}
export default BackButton