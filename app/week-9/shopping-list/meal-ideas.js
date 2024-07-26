'use client';
import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
    const [ meals, setMeals ] = useState([]);

    async function loadMealIdeas(ingredient) {
        if (!ingredient) return;
        try {
            const response = await fetchMealIdeas(ingredient);
            setMeals(response);
        } catch (error) {
            console.log("Error Fetching Data: ", error)
        }
    }

    useEffect(() => {
        loadMealIdeas(ingredient);
    },[ingredient]);

    return(
        <div className="flex-1">
            <h1 className="font-bold text-center  text-lg rounded-lg">Recipes</h1>
            <div>
                <ul className="divide-y-15 divide-slate-900">
                    {meals && meals.length > 0 ? (
                        meals.map((meal, index) => (
                            <div key={index}>
                                {index === 0 && <h1 className="font-bold text-center  text-lg mt-10 rounded-lg">Here are some meal ideas available for {ingredient}</h1>}
                                <h2 className="font-bold text-center bg-slate-600 text-lg mt-5">{meal.strMeal}</h2>
                            </div>
                        ))
                    ) : (
                        <h1 className="font-bold text-center text-lg mt-10 rounded-lg">No meal ideas available for this ingredient</h1>
                    )}
                </ul>
            </div>
        </div>
    );
}

async function fetchMealIdeas(ingredient) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals;
    } catch(error) {
        console.log("Error Fetching Data: ", error);
        return[];
    }
}