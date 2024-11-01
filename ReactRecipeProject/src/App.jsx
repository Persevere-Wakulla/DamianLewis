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
import Contact, { contactAction } from './pages/help/Contact'
import Measurements  from './pages/help/Measurements'
import CareersError from './pages/recipes/CareersError'
import Resipes, {recipesLoader} from './pages/recipes/Recipes'
import RecipeDetails, { recipeDetailsLoader } from './pages/recipes/RecipeDetails'

//layouts
import RootLayout from './components/LayOut/RootLayout'
import HelpLayout from './components/LayOut/HelpLayout'
import CareersLayout from './components/LayOut/RecipesLayout'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path="measurements" element={<Measurements />}/>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction} /> 
      </Route>
      
      <Route path="recipes" element={<CareersLayout /> } >
        <Route
          index
          element={<Resipes />}
          loader={recipesLoader}
          errorElement={<CareersError />}
        />

        <Route
          path=":id"
          element={<RecipeDetails />}
          loader={recipeDetailsLoader}
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