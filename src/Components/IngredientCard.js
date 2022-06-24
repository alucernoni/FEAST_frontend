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
        <Card onClick={() => handleIngClick(ingredient)} >
            <CardContent textAlign="center">
                <CardHeader textAlign="center" >{ingredient.name}</CardHeader>
            </CardContent>
        </Card>
    )
}

export default IngredientCard