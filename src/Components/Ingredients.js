import React from "react";
import { Card, Header } from "semantic-ui-react";
import IngredientCard from "./IngredientCard";

function Ingredients({ingredientsList}) {

    const ingredientsDisplay = ingredientsList.map((ingredient) => <IngredientCard ingredient={ingredient} key={ingredient.id}/>)

    return (
        <div>
            <Header as="h1" textAlign="center">Click on an ingredient for ideas!</Header>
            <Card.Group itemsPerRow={5} centered>
                {ingredientsDisplay}
            </Card.Group>
            <div> 
                Scroll to see ideas!
            </div>
        </div>
    )
}

export default Ingredients