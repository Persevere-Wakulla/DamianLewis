import { useRef, useState, useEffect } from "react"
import { useLoaderData, Link } from "react-router-dom"
export default function Recipes() {

    const recipes = useLoaderData()
    
    const [display, setDisplay] = useState(recipes.recipes)
    const [filterItems, setFilterItems] = useState("All")


    const bottomRef = useRef(null);
    function handleScrollToTop() {
        window.scrollTo({
            top: 0,
            right: 0,
            behavior: "smooth",
        });
    }

    function makeFilter(e){
if (e.target.classList.contains('filter-btn')){
    setFilterItems(e.target.innerText)
}
    }
    useEffect(()=>{
        const filtering =()=>{
            const newArr = recipes.recipes.filter((item) => item.mealType.includes(filterItems))
            return newArr
        }
if (filterItems !== 'All'){
setDisplay(filtering())
} else {
    setDisplay(recipes.recipes)
}
    },[filterItems])

    console.log(display);
    return (
        <div>
            <div onClick={makeFilter} className="btn-container">
            <button className="filter-btn">Breakfast</button>
            <button className="filter-btn">Lunch</button>
            <button className="filter-btn">Dinner</button>
            <button className="filter-btn">Dessert</button>
            <button className="filter-btn">Snack</button>
            <button className="filter-btn">Beverage</button>
            <button className="filter-btn">Appetizer</button>
            <button className="filter-btn">All</button>
            </div>

            <div className="recipes" key={recipes.id}>
                {display.map(recipe => (
                    <Link to={recipe.id.toString()} key={recipes.id}>
                        <img className="recipes-img" src={recipe.image} alt="icon" />
                        <div className="background title-board">
                            <h2 className="title-board">{recipe.name}</h2>
                            <p className="title-cuisine">Cuisine: {recipe.cuisine}</p>
                            <p className="title-calorie">Caleries per servings: {recipe.caloriesPerServing}</p>
                            <p className="title-board">Time to prepare: {recipe.prepTimeMinutes} min</p>
                            <p className="title-board">Cook Time: {recipe.cookTimeMinutes} min</p>
                        </div>
                    </Link>
                ))}

            </div>
            <button className="bottom-bnt" onClick={handleScrollToTop}>Click To Scroll</button>
            <div ref={bottomRef}></div>
        </div>
    )
}

// loader function
export const recipesLoader = async () => {
    const res = await fetch('https://dummyjson.com/recipes?limit=0')
    const recipesArr = await res.json()
    return recipesArr
}