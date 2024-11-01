
import {useLoaderData, Link} from "react-router-dom"
export default function Careers(){
    const careers = useLoaderData()
     
    return(
            <div className="careers">
            {careers.map(career => (
                <Link to={career.id.toString()} key={career.id}>
                    <h2>{career.company}</h2>
                        <img src={career.logo} alt="icon"/>
                        <p>{career.position}</p>
                        <p>Base in {career.location}</p>
                </Link>
            ))}
            </div>
    )
}

// loader function
export const careersLoader = async () => { 
    const res = await fetch('http://localhost:3000/careers/')
    if(!res.ok){
        throw Error("Could not fetch the careers")
    }
    return res.json()
    
}