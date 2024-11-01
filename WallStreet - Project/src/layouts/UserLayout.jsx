import { useContext, useState, useEffect } from "react"
import { Outlet, NavLink } from 'react-router-dom'
import { UserContext } from "./RootLayout";



export default function Layout() {
    const { myUser } = useContext(UserContext)
    const [lessons, setLessons] = useState([])

    let loading = false
    useEffect(() => {
        loading = true
        const getLessons = async () => {
            const req = await fetch(`http://localhost:5500/${myUser._id}`)
            const res = await req.json()
            // console.log(res);
            if (!res) {
                loading = false;
                console.log(res.message)
                alert('Error occurresd, please check the Console')
            } else {
                setLessons(res.data);
                loading = false;
            }
        }
        if (loading) {
            getLessons()
        }
    }, []);
    console.log(lessons);
    return (
        <section>
            {
                myUser ?
                    <>
                        <h2 className="welcome-message">Welcome to Trader's University, {myUser.firstName} {myUser.lastName}</h2>
                        <nav className="user-nav">
                            <NavLink to="/:id">Home</NavLink>
                            <NavLink to="/lessons/lessons">Lessons</NavLink>
                            <NavLink to="/:id/lessons">Contact</NavLink>
                            {/* Links for User Routes  details/edit, lessons, home, contact?, etc */}
                        </nav>
                        <Outlet context={lessons} />
                    </>
                    :
                    <h2 className="login-prompt">Please Log In To Continue</h2>
            }
        </section>
    )
}