import React from "react";
import { Card, Header } from "semantic-ui-react";
import SuggestionCard from "./SuggestionCard";
import SuggestionForm from "./SuggestionForm";

function Suggestions({suggestionsList, ingredientsList}) {
    
    const allSuggestionsDisplay = suggestionsList.map((suggestion) => <SuggestionCard suggestion={suggestion} key={suggestion.id}/>)
    
    return(
        <div>
            <Header as="h1" textAlign="center">Enjoy your FEAST!</Header>
            <Card.Group itemsPerRow={3} centered>
                {allSuggestionsDisplay}
            </Card.Group>
            <Header as="h2" textAlign="center">Got an idea? Add it to the FEAST!</Header>
            <SuggestionForm ingredientsList={ingredientsList}/>
        </div>
    )
}

export default Suggestions