import { Link } from 'react-router-dom';

const BackButton = ({ destination = '/lessons' }) => {
    return (
        <div>
            <Link 
            to={destination}
            className='back-button'
            >
                <div>
                    <i className='arrow-btn bi-arrow-left'></i>
                        <h5 className='back'>BACK</h5>
                </div>
            </Link>
            </div>
    )
}
export default BackButton