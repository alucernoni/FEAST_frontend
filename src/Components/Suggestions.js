import React from "react";
import { Card, Header, Segment} from "semantic-ui-react";
import SuggestionCard from "./SuggestionCard";
import SuggestionForm from "./SuggestionForm";

function Suggestions({suggestionsList, ingredientsList, addSuggestion, removeSuggestion, upVote}) {
    
    const allSuggestionsDisplay = suggestionsList.map((suggestion) => <SuggestionCard suggestion={suggestion} key={suggestion.id} removeSuggestion={removeSuggestion} upVote={upVote}/>)
    

    return(
        <Segment padded size="large" className="backColor">
            <Header as="h1" textAlign="center" className="headerColor">Enjoy your FEAST!</Header>
            <Card.Group itemsPerRow={5} centered stackable>
                {allSuggestionsDisplay}
            </Card.Group>
            <Header as="h2" textAlign="center" className="headerColor">Got an idea? Add it to the FEAST!</Header>
            <SuggestionForm ingredientsList={ingredientsList} addSuggestion={addSuggestion}/>
        </Segment>
    )
}

export default Suggestions