import {Link, useRouteError} from "react-router-dom";


export default function LessonsError(){
const error = useRouteError();

    return(
        <div className="lesson-error">
            <h2>Error</h2>
            <p>{error.message}</p>
            <div className="home-btn">
            <Link to="/">Back to the homepage</Link>
            </div>
        </div>
    )
}