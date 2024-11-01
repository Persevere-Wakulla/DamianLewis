import {Outlet} from "react-router-dom"

export default function CareersLayout(){
    return(
        <div className="careers-layout">
            <h2>Careers</h2>
            <p>When writing code for the Web, there are a large number of 
                languages available. Below is a list of  positions that you may 
                be interested in.</p>
                <Outlet />
        </div>
    )
}