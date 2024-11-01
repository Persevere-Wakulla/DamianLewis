import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import './index.css'

// NateTest
// import NatesLogin from './components/NatesLogin'

//Layouts
import RootLayout from './layouts/RootLayout'
import SignUpLayout from './layouts/SignUpLayout'
import LessonsLayout from './layouts/LessonsLayout'

//PAGES
// General/Home
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Lessons from './pages/lessons/Lessons';
// LogIn
import LogIn from './pages/log-in/LogIn';
import SignUp from './pages/log-in/SignUp';
import Guest from './pages/log-in/Guest'
// Lessons
import LessonsError from './pages/lessons/LessonsError';
// import LessonDetails, { lessonDetailsLoader } from './pages/lessons/LessonDetails';
import LessonHome from './pages/lessons/LessonHome'
import CreateLessons from './pages/lessons/CreateLessons'
import ShowLesson from './pages/lessons/ShowLessons'
import EditLesson from './pages/lessons/EditLesson'
import DeleteLesson from './pages/lessons/DeleteLessons'
// Users
import UserLayout from './layouts/UserLayout'
import UserLessons from './pages/user/UserLessons'
import UserHome from './pages/user/UserHome'
import UserEdit from './pages/user/UserEdit'
import UserContact from './pages/user/UserContact';



const router = createBrowserRouter(
  createRoutesFromElements(

                              // ROOT LAYOUT
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />


                          {/* LOGIN LAYOUT */}
      <Route path="log-in" element={<SignUpLayout />}>
        <Route path="guest" element={<Guest />} />
        <Route path="log-in" element={<LogIn />} />
        <Route path="sign-up" element={<SignUp />} />
      </Route>


                           {/* USER LAYOUT */}
      <Route path="/:id" element={<UserLayout />} >
        <Route index element={<UserHome />} />
        <Route path="/:id/lessons" element={<UserLessons/>}/>
        <Route path="/:id/edit" element={<UserEdit/>}/>
        <Route path="lessons/lessons" element={<Lessons/>} />
        <Route path="/:id/contact" element={<UserContact/>}/>
      </Route>


                          {/* LESSONS LAYOUT */}
      <Route path="lessons" element={<LessonsLayout />} >
        <Route index element={<LessonHome />} />
        <Route path='/lessons/create' element={<CreateLessons />} />
        <Route path='/lessons/details/:id' element={<ShowLesson />} />
        <Route path='/lessons/edit/:id' element={<EditLesson />} />
        <Route path='/lessons/:id' element={<DeleteLesson />} />
      </Route>




      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  );
}
export default App;



