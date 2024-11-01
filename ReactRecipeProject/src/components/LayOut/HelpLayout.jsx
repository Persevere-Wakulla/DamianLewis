 import {NavLink, Outlet} from "react-router-dom"
 
 export default function HelpLayout(){
    return(
     <div className="help-layout">
        <h2>Website Help</h2>
        <p></p>
            <nav>
                <NavLink to="contact">Contact Us</NavLink>
                <NavLink to="measurements">Measurements</NavLink>
                <NavLink to="faq">View Abbreviations</NavLink>
            </nav>
            <Outlet />
     </div>
    )
 }
