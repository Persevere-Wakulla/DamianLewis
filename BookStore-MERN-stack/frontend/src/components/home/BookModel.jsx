import React from 'react';

export default function BookModal({ book, onClose}) {
    return (
        <div className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
        onClick={onClose}
    >
        <div
            onClick={(event) => event.stopPropagation()}
            className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative" 
        >
            <div className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
                onClick={onClose}
            >
                ❌
            </div>

            <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>
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
                <p className="mt-4">A Little Detail About Our Book</p>
                <p className="my-2">This Book Was dolor sit amet consectetur adipisicing elit. Aut ab nobis quos accusamus, laboriosam facilis enim, repellendus, porro sit excepturi tempora consectetur totam optio alias maxime? Quisquam molestiae quam nemo.
                </p>
        </div>
    </div>
    )
}

// const BookModal = ({ book, onClose }) => {
//     return (
//         <div className="flex bg-black bg-opacity-60 top-0 left-0 bottom-0 z-50 flex justify-center items-center"
//             onClick={onClose}
//         >
//             <div
//                 onClick={(event) => event.stopPropagation()}
//                 className="w-[600] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
//             >
           
//                 <div className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
//                     onClick={onClose}
//                 >
//                     ❌
//                 </div>

//                 <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>
//                         {book.publisherYear}
//                     </h2>
//                     <h4 className='my-2 text-gray-500'>{book._id}</h4>
//                     <div className='flex justify-start items-center gap-x-2'>
//                         <div className='text-red-300 text-2xl'>


//                         </div>
//                         <h2 className='my-1'>{book.title}</h2>
//                     </div>
//                     <div className='flex justify-start items-center gap-x-2'>
//                         <div className='text-red-300 text-2xl'>


//                         </div>
//                         <h2 className='my-1'>{book.author}</h2>
//                     </div>
//                     <p className="mt-4">Anything You want to show</p>
//                     <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ab nobis quos accusamus, laboriosam facilis enim, repellendus, porro sit excepturi tempora consectetur totam optio alias maxime? Quisquam molestiae quam nemo.</p>
//             </div>
//         </div>
//     )
// }
// export default BookModal