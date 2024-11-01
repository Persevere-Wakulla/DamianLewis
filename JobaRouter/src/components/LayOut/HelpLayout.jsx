 import {NavLink, Outlet} from "react-router-dom"
 
 export default function HelpLayout(){
    return(
     <div className="help-layout">
        <h2>Website Help</h2>
        <p>Interactive Learning: We've integrated this with our Playground feature, 
            allowing you to directly experiment with the code provided, verify 
            solutions, and enhance your understanding through practical application
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae 
            eligendi maxime labore, impedit nulla at porro et tenetur, recusandae 
            voluptatem, facilis inventore velit quod. Veniam sunt earum amet 
            exercitationem maiores.</p>
            <nav>
                <NavLink to="faq">View the  FAQ</NavLink>
                <NavLink to="contact">Contact Us</NavLink>
            </nav>
            <Outlet />
     </div>
    )
 }
