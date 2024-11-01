import { Link } from 'react-router-dom';
import { useState } from 'react';
import BookModal from './BookModel';

const BookSingleCard = ({ book }) => {
    const [showModel, setShowModel] = useState(false);
    return (
        <div
            key={book._id}
            className='move border-2 border-gray-500 rounded-lg px-4 py-6 m-4 relative hover:shad'
        >
            <div>
            <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-600 rounded-lg'>
                {book.publisherYear}
            </h2>
            <h4 className='my-2 text-gray-500'>{book._id}</h4>
            <div className='flex justify-start items-center gap-x-2'>
                <div className='text-red-300 text-2xl'>
                    📖
                </div>
                <h2 className='my-1'>{book.title}</h2>
            </div>
            <div className='flex justify-start items-center gap-x-2'>
                <div className='text-red-300 text-2xl'>
                    🧑🏿‍💻
                </div>
                <h2 className='my-1'>{book.author}</h2>
            </div>
            <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
          <div className='box text-3xl text-blue-800 cursor-pointer hover:text-black'
          onClick={() => setShowModel(true)}
          >
          👁️
          </div>
                <Link to={`books/details/${book._id}`}>
                    <div className='box text-2xl text-green-600 hover:text-black'>
                        ℹ️
                    </div>
                </Link>
                <Link to={`books/edit/${book._id}`}>
                    <div className='box text-2xl text-yellow-600 hover:text-black'>
                        ✏️
                    </div>
                </Link>
                <Link to={`books/${book._id}`}>
                    <div className='box text-2xl text-red-600 hover:text-black'>
                        🗑️
                    </div>
                </Link>
            </div>
            </div>
            {
                showModel && (
                    <BookModal book={book} onClose={() => setShowModel(false)} />
                )}
        </div>
    )
}
export default BookSingleCard








