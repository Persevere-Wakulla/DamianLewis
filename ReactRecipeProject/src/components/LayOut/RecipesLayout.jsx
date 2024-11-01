import {Outlet} from "react-router-dom"

export default function RecipesLayout(){
    return(
        <div className="recipes-layout">
            <h2 className="cuisines">Welcome to the gallery of the worlds greatest cuisines!</h2>
                <Outlet />
        </div>
    )
}