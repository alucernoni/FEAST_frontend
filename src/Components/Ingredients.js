import React, {useState} from "react";
import { Card, Segment, Header} from "semantic-ui-react";
import IngredientCard from "./IngredientCard";

function Ingredients({ingredientsList, ingredientsSuggestions, filterSuggestions}) {


    const nestedSuggestionsDisplay = ingredientsSuggestions.map((ingredient) => <IngredientCard ingredient={ingredient} key={ingredient.id} suggestions={ingredient.suggestions} filterSuggestions={filterSuggestions}/>)

    // const ingredientsDisplay = ingredientsList.map((ingredient) => <IngredientCard ingredient={ingredient} key={ingredient.id} ingredientsSuggestions={ingredientsSuggestions}/>)

    return (
        <Segment padded size="large">
            <Header as="h1" textAlign="center">Click on an ingredient for ideas!</Header>
            <Card.Group itemsPerRow={5} centered stackable>
                {/* {ingredientsDisplay} */}
                {nestedSuggestionsDisplay}
            </Card.Group>
        </Segment>
    )
}

export default Ingredients