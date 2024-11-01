import { NavLink, Outlet } from 'react-router-dom'
import BreadCrumbs from '../BreadCrumbs'

export default function RootLayout() {
    return (
        <div className='root-layout'>
            <header>
                    <h1>World's Greatest Cuisines</h1>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="help">Help</NavLink>
                    <NavLink to="Recipes">Recipes</NavLink>
                </nav>
                <BreadCrumbs />
            </header>

            <main>
                <Outlet />
            </main>
            {/* <footer>
            <p style={{textAlign: 'center', fontWeight: 500, paddingBottom: 10, position: "sticky"}}>All Rights Reserved. &copy; 2024</p>
            <div class="social-links d-flex justify-content-center">
        <a href=""><i class="bi bi-twitter-x"></i></a>
        <a href=""><i class="bi bi-facebook"></i></a>
        <a href=""><i class="bi bi-instagram"></i></a>
        <a href=""><i class="bi bi-skype"></i></a>
        <a href=""><i class="bi bi-linkedin"></i></a>
      </div>
            </footer> */}
        </div>
    )
}