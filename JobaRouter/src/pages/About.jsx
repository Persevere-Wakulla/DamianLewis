import { Navigate } from "react-router-dom"
import {useState} from 'react'

export default function About(){
const [user, setUser] = useState('mario');

if (!user){
    return <Navigate to="/" replace={true} />
}

    return(
        <div>
            <h2>About Us</h2>
            <p>Make login our problem. Not yours. Your time is valuable. Use it to focus on your app,
                and let us handle the login (and much more). Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Aliquid laudantium repudiandae quam porro modi vel alias, eos dolor hic eius! Perspiciatis, iste quae? 
                Repudiandae ducimus in aspernatur veritatis nostrum natus?
            </p>
            <p>The Web Developer Guide provides useful how-to content to help you actually use Web technologies
                to do what you want or need to do. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
                quaerat consequuntur, eius nostrum exercitationem mollitia dolor ratione asperiores odit, inventore ad magni. Quos 
                quam tenetur enim, optio distinctio cum nihil.</p>
            <p>We're always striving to connect developers more seamlessly with the tools and information they need to easily 
                build projects on the open Web. Since our beginnings in 2005, Jobarouter and the community have amassed around 
                5,000 pages of free, open-source content..</p>

                <button onClick={() => setUser(null)}>Logout</button>
        </div>
    )
}