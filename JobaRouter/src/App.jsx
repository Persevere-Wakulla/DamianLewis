import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import './index.css'

//Pages
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Faq from './pages/help/Faq'
import CareersError from './pages/careers/CareersError'
import Contact, { contactAction } from './pages/help/Contact'
import Careers, { careersLoader } from './pages/careers/Careers'
import CareerDetails, { careerDetailsLoader } from './pages/careers/CareerDetails'

//layouts
import RootLayout from './components/LayOut/RootLayout'
import HelpLayout from './components/LayOut/HelpLayout'
import CareersLayout from './components/LayOut/CareersLayout'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction} /> 
      </Route>
      
      <Route path="careers" element={<CareersLayout /> } >
        <Route
          index
          element={<Careers />}
          loader={careersLoader}
          errorElement={<CareersError />}
        />

        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
          errorElement={<CareersError />}
        />
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