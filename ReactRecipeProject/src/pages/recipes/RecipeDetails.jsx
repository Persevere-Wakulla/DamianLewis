import { useLoaderData, useParams } from "react-router-dom"

export default function RecipeDetails() {
    const { id } = useParams()
    const recipe = useLoaderData()
    console.log({ recipe });
    return (
        <div className="recipe-details">
            <div className="details">
                <h2>Title: {recipe.name}</h2>
            <img className="detail-img" src={recipe.image} alt="image" />
                <h3>Ingredients</h3>
                 <ul className="ingredients">
                    {recipe.ingredients.map((item, index) => (
                        <li key={index}>
                            {item}
                        </li>
                    ))}
                </ul>
                <h3>Instructions</h3>
                <ol className="instruct">
                    {recipe.instructions.map((item, index) => (
                        <li key={index}>
                            {item}
                        </li>
                    ))}
                </ol>
                <h3>Meal Type</h3>
                <ul className="meal-type">
                    {recipe.mealType.map((item, index) => (
                        <li key={index}>
                            {item}
                        </li>
                    ))}
                </ul>
                <h3>Tags</h3>
                <ul className="tags">
                    {recipe.tags.map((item, index) => (
                        <li key={index}>
                            {item}
                        </li>
                    ))}
                </ul>
                <p>Serving Size: {recipe.servings}</p>
                <p>Preperation Time: {recipe.prepTimeMinutes}min</p>
                <p className="cook-time">Cook Time: {recipe.cookTimeMinutes}min</p>
            </div>
        </div>
    )
}

// loader funtion
export const recipeDetailsLoader = async ({ params }) => {
    const { id } = params;

    const res = await fetch('https://dummyjson.com/recipes/' + id);
    const RecipeDetailsArr = await res.json();
    return RecipeDetailsArr;
}
// if(!res.ok){
//     throw Error("Could not find that career")
// }
