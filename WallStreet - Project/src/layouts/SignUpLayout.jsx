import { NavLink, Outlet } from "react-router-dom"

export default function SignUpLayout() {

    return (
        <div className="signup-layout">
            <nav>
                <NavLink to="sign-up">Sign Up</NavLink>
                <NavLink to="guest">Guest</NavLink>
                <NavLink to="log-in">Log In</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}
