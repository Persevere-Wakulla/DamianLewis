import {Link} from "react-router-dom"
export default function NotFound(){
    return(
        <div>
            <h2>Page Not Found</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Sint tempora similique nihil, alias facilis obcaecati provident iste 
                ullam dolorum? Expedita odio fugiat quaerat, cupiditate cumque 
                ipsum modi voluptas illum voluptates.</p>

                <p>Go to the <Link to="/">Homepage</Link>.</p>
        </div>
    )
}