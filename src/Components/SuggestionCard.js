import React from "react";
import { Card, CardContent, CardDescription, CardHeader, Header } from "semantic-ui-react";

function SuggestionCard({suggestion}) {
    return (
        <div>
            <Card>
                <CardContent>
                    <CardHeader textAlign="center">{suggestion.title}</CardHeader>
                    <CardDescription>{suggestion.suggestion_content}</CardDescription>
                </CardContent>
            </Card>
        </div>
    )
}

export default SuggestionCard