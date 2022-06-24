import React from "react";
import { Button, Card, CardContent, CardDescription, CardHeader, Icon, Label } from "semantic-ui-react";

function SuggestionCard({suggestion, removeSuggestion}) {


    function handleDeleteClick() {
        fetch(`http://localhost:9292/suggestions/${suggestion.id}`, {
            method: "DELETE",
        })
        removeSuggestion(suggestion.id)
    }

    return (
        <div>
            <Card>
                <CardContent>
                    <CardHeader textAlign="center">{suggestion.title}</CardHeader>
                    <CardDescription>{suggestion.suggestion_content}</CardDescription>
                    <Button.Group>
                        <Button as="div" labelPosition="left" style={{marginTop:20}}>
                            <Label as="a" basic pointing="right">
                                COUNT
                            </Label>
                            <Button icon>
                                <Icon name="heart"></Icon>
                            </Button>
                        </Button>
                        <Button value={suggestion.id} onClick={handleDeleteClick} negative floated="right" compact style={{marginTop:20}}>Delete Suggestion</Button>
                    </Button.Group>
                    {/* <Button as="div" labelPosition="left">

                    </Button>
                    <Button value={suggestion.id} onClick={handleDeleteClick} negative floated="right" compact style={{marginTop:20}}>Delete Suggestion</Button> */}
                </CardContent>
            </Card>
        </div>
    )
}

export default SuggestionCard