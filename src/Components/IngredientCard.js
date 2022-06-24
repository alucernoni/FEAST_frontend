import React from "react";
import { Card, CardContent, CardHeader, Header } from "semantic-ui-react";

function IngredientCard({ingredient, suggestions, filterSuggestions}) {

    function handleIngClick(ingredient) {
        console.log("ing click", ingredient)
        const clickedSuggestions = ingredient.suggestions.map((suggestion) => suggestion)
        console.log("suggestionIDs?", clickedSuggestions)
        filterSuggestions(clickedSuggestions)
    }

    return (
        <Card onClick={() => handleIngClick(ingredient)} className="ingButton" >
            <CardContent textAlign="center">
                <Card.Header textAlign="center">{ingredient.name}</Card.Header>
            </CardContent>
        </Card>
    )
}

export default IngredientCard