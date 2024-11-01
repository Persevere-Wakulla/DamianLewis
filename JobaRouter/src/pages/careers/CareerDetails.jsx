import {useLoaderData, useParams} from "react-router-dom"

export default function CareerDetails(){
    const { id } = useParams()
    const career = useLoaderData()
console.log({career});
    return(
<div className="career-details">
    <h2>Career Details for {career.role}</h2>
    <p>Starting salary: ${career.salary}</p>
    <p>Location: {career.location}</p>
    <div className="details">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, 
            dolorum aliquam velit possimus provident id quae, eligendi reiciendis, 
            sed modi similique assumenda. Libero autem ea corrupti unde ipsum 
            repellat. Itaque.</p>
    </div>
</div>
    )
}

// loader funtion
export const careerDetailsLoader = async ({params}) => {
    const {id} = params;

    const res = await fetch('http://localhost:3000/careers/' + id);
    if(!res.ok){
        throw Error("Could not find that career")
    }
    const data = await res.json();
    return data;
}
