import React from "react";
import { Button, Card, CardContent, CardDescription, CardHeader } from "semantic-ui-react";

function SuggestionCard({suggestion, removeSuggestion}) {

    // const handleDeleteClick = (e) => {

    //     removeSuggestion(e.target.value)
    // }

    function handleDeleteClick() {
        fetch(`http://localhost:9292/suggestions/${suggestion.id}`, {
            method: "DELETE",
        })
        removeSuggestion(suggestion.id)
        // .then(r => r.json())
        // .then(removeSuggestion)
        // .then((suggestionToDelete) => removeSuggestion(suggestionToDelete))
    }

    // function helpDelete() {
    //     fetch(`http://localhost:9292/suggestions/${suggestion.id}`)
    //     .then(r => r.json())
    //     .then(data => console.log("helpDelete:", data))
    //     .then(removeSuggestion)
    // }

    return (
        <div>
            <Card>
                <CardContent>
                    <CardHeader textAlign="center">{suggestion.title}</CardHeader>
                    <CardDescription>{suggestion.suggestion_content}</CardDescription>
                    <Button value={suggestion.id} onClick={handleDeleteClick} negative floated="right" compact style={{marginTop:20}}>Delete Suggestion</Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default SuggestionCard