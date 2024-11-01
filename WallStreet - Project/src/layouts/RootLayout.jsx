import { createContext, useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

// ! Log In link should change to LogOut
export const UserContext = createContext()

export default function RootLayout() {

    const [myUser, setMyUser] = useState(null)
    console.log(myUser);

    useEffect(() => {
        const current = JSON.parse(sessionStorage.getItem('user'))
        if (!myUser) {
            if (current) {
                setMyUser(current)
            }
        }
    }, [myUser])

    return (
        <div className='root-layout'> 
            <header>
                <nav>
                    <div className='hamburger'>
                        <img src="/icon-hamburger.svg" alt="hamburger-icon" />
                    </div>
                    <h1>Trader's University</h1>
                    <div className="nav-links">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="about">About</NavLink>
                        <NavLink to="log-in">Log In</NavLink>
                        <NavLink to="lessons">Lessons</NavLink>
                    </div>
                </nav>
            </header>
            <div className='title'>
                <h1 className='university'>Trader's University</h1>
            </div>
         
            <main>
                <UserContext.Provider value={{ myUser, setMyUser }}>
                    <Outlet />
                </UserContext.Provider>
            </main>

            <footer>
                <div className="footer-container">
                    <div className="copyright text-center ">
                        <p>© <span>Copyright {new Date().getFullYear()}</span> <strong className="px-1 sitename">Trader's University</strong> <span>All
                            Rights Reserved</span></p>
                    </div>
                    <div className="social-links">
                        <a href="#"><i className="bi bi-twitter-x"></i></a>
                        <a href="#"><i className="bi bi-facebook"></i></a>
                        <a href="#"><i className="bi bi-instagram"></i></a>
                        <a href="#"><i className="bi bi-linkedin"></i></a>
                        <div></div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
