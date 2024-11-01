import { useState, createContext } from "react"
import { NavLink, Outlet } from 'react-router-dom'
import './nate.css'

export const UserContext = createContext()

export default function NatesLogin() {

    const [showModal, setShowModal] = useState('')
    const [myUser, setMyUser] = useState(null)

    const modal = (str) => {
        setShowModal(str)
    }
    return (
        <div className='root-layout'>
            <header>
                <nav>
                    <div className='hamburger'>
                        <img src="public/icon-hamburger.svg" alt="hamburger-icon" />
                    </div>
                    <h1>Trader's University</h1>
                    <div id="modal-container">

                    <button className="btn modal" onClick={()=>modal(login)}>Log In</button>
                    <NavLink to='/log-in/sign-up' className="btn SignUp">SignUp</NavLink>
                    {showModal === 'login' ? 
                        // login form
                    <div id='login-modal'>
                        <div className="flex">
                            <label htmlFor="username">User Name: </label>
                            <input type="text" id='username' />
                        </div>
                        <div className="flex">
                            <label htmlFor="password">Password: </label>
                            <input type="password" id='password' />
                        </div>
                        <div className="flex">
                            <button className="btn sign">Sign In</button>
                            <button className="btn guest">Continue As Guest</button>
                        </div>
                    </div> :
                    showModal === 'signup' ?
                    // sign up form
                    <div>
                    </div>
                    :
                    <></>
                    }
                    </div>
                    <div className="nav-links">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="about">About</NavLink>
                        <NavLink to="lessons">Lessons</NavLink>
                    </div>

                </nav>
            </header>
            <div className='title'>
                <h1 className='university'>Trader's University</h1>
            </div>
            <main>
                <UserContext.Provider value={{ myUser, setMyUser }}>\
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