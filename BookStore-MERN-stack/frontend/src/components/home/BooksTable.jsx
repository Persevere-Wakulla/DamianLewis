import { Link } from 'react-router-dom';

const BooksTable = ({ books }) => {
    return (
        <table className='w-full border-separate border-spacing-2'>
        <thead>
            <tr>
                <th className='border border-slate-600 rounded-md'>No</th>
                <th className='border border-slate-600 rounded-md'>Title</th>
                <th className='border border-slate-600 rounded-md max-md:hidden'>Author</th>
                <th className='border border-slate-600 rounded-md max-md:hidden'>Publish Year</th>
                <th className='border border-slate-600 rounded-md'>Operations</th>
            </tr>

        </thead>
        <tbody>
            {books.map((book, index) => (
                <tr key={book._id} className='h-8'>
                    <td className='border border-slate-700 rounded-md text-center'>
                        {index + 1}
                    </td>
                    <td className='border border-slate-700 rounder-md text-center'>
                        {book.title}
                    </td>
                    <td className='border border-slate-700 rounded-md text-center max-hd:hidden'>
                        {book.author}
                    </td>
                    <td className='border border-slate-700 rounded-md text-center max-hd:hidden'>
                        {book.publisherYear}
                    </td>
                    <td className='border border-slate-700 rounded-md text-center'>
                        <div className='flex justify-center gap-x-4'>
                            <Link to={`/books/details/${book._id}`}>
                                <div className='text-2xl text-green-800'>
                                    ℹ️
                                </div>
                            </Link>
                            <Link to={`/books/edit/${book._id}`}>
                                <div className='text-2xl text-yellow-600'>
                                    ✏️
                                </div>
                            </Link>
                            <Link to={`/books/${book._id}`}>
                                <div className='text-2xl text-red-600'>
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
export default BooksTable