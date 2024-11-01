import React from 'react';

export default function LessonModel({ lesson, onClose }) {
    return (
        <div className="fixed model bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
            onClick={onClose}
        >
            <div style={{ backgroundColor: 'white', paddingBottom: 20, zIndex: 3 }}
                onClick={(event) => event.stopPropagation()}
                className="w-[600px] max-w-full h-[900px] bg-white rounded-xl p-4 flex flex-col relative"
            >
                <div className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer ex"
                    onClick={onClose}
                >
                    ❌
                </div>

                <h2 className='w-fit px-4 py-1 bg-black-300 rounded-lg text-yellow-900 category-model'>
                    {lesson.category}
                </h2>
                <h4 className='my-2 text-gray-500 test'>{lesson._id}</h4>
                <div className='flex justify-start items-center gap-x-2 test'>
                    <div className='text-red-300 text-2xl test'>
                        📕
                    </div>
                    <h2 className='my-1 text-blue-900 test'>{lesson.title}</h2>
                </div>
                <div className='flex justify-start items-center gap-x-2 test'>
                    <div className='text-red-300 text-2xl test'>
                        📖
                    </div>
                    <h2 className='my-1 text-blue-900 test'>{lesson.lesson}</h2>
                </div>
                <div className='flex justify-start items-center gap-x-2 test'>
                    <div className='text-red-300 text-2xl test'>
                        ❓
                    </div>
                    <h2 className='my-1 text-blue-900 test'>{lesson.question}</h2>
                </div>
                <div className='flex justify-start items-center gap-x-2 test'>
                    <div className='text-red-300 text-2xl test'>
                        ✅
                    </div>
                    <h2 className='my-1 text-blue-900 test'>{lesson.answer}</h2>
                </div>
            </div>
        </div>
    )
}