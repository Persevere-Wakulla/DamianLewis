import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import CreateLessons from './pages/CreateLessons'
import ShowLesson from './pages/ShowLessons'
import EditLesson from './pages/EditLesson'
import DeleteLesson from './pages/DeleteLessons'
// import LessonModel from './components/home/LessonModel'

const App = () =>{
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/lessons/create' element={<CreateLessons />} />         
            <Route path='/lessons/details/:id' element={<ShowLesson />} />         
            <Route path='/lessons/edit/:id' element={<EditLesson />} />
            <Route path='/lessons/:id' element={<DeleteLesson />} />

       </Routes>
    )
}

export default App


