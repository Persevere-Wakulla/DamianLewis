import React, { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:5555/books')
            .then(req => req.json())
            .then((response) => {
                setBooks(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);
    console.log(books);
    return (
        <div className='p-4'>
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
                <h1 className='text-3xl my-8'>Books List</h1>
                <Link to='/books/create'>
                    <div className='box1 text-2xl text-green-800'>
                        ➕
                    </div>
                </Link>
            </div>
            {loading ? <Spinner /> : showType === 'table' ? (<BooksTable books={books} />) : (<BooksCard books={books} />)}
        </div>
    )
}

export default Home