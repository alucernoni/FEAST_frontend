import React from "react";
import IngredientCard from "./IngredientCard";

function Ingredients({ingredientsList}) {
    return (
        <div>
            <div>
                Click on an ingredient you want to repurpose to get started!
            </div>
            <IngredientCard/>
            <div> 
                Scroll to see ideas!
            </div>
        </div>
    )
}

export default Ingredients