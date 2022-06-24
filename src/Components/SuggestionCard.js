import React from "react";
import { Button, Card, CardContent, CardDescription, CardHeader, Icon, Label } from "semantic-ui-react";

function SuggestionCard({suggestion, removeSuggestion, upVote}) {


    function handleDeleteClick() {
        fetch(`http://localhost:9292/suggestions/${suggestion.id}`, {
            method: "DELETE",
        })
        removeSuggestion(suggestion.id)
    }

    function handleLike() {
        console.log("handle like", suggestion)
        const updatedVotes = {votes: suggestion.votes + 1}

        const config = {
            method: "PATCH",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updatedVotes)
        }

        fetch(`http://localhost:9292/suggestions/${suggestion.id}`, config)
        .then(r=>r.json())
        upVote(suggestion.id)
    }

    return (
            <Card>
                <CardContent className="sugColor">
                    <CardHeader textAlign="center">{suggestion.title}</CardHeader>
                    <CardDescription>{suggestion.suggestion_content}</CardDescription>
                    <Card.Content extra>
                        <div>
                        <Button.Group attached="bottom" >
                            <Button as="div" labelPosition="left" style={{marginTop:20}}>
                                <Label as="a" basic pointing="right">
                                    {suggestion.votes}
                                </Label>
                                <Button icon >
                                    <Icon name="heart" value={suggestion.id} onClick={handleLike} color="pink" ></Icon>
                                </Button>
                            </Button>
                            <Button value={suggestion.id} onClick={handleDeleteClick} negative floated="right" compact style={{marginTop:20}}>Delete Suggestion</Button>
                        </Button.Group>
                        </div>
                    </Card.Content>
                    {/* <Button as="div" labelPosition="left">

                    </Button>
                    <Button value={suggestion.id} onClick={handleDeleteClick} negative floated="right" compact style={{marginTop:20}}>Delete Suggestion</Button> */}
                </CardContent>
            </Card>
    )
}

export default SuggestionCard