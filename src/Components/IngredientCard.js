import React from "react";
import { Card, CardContent, CardHeader, Header } from "semantic-ui-react";

function IngredientCard({ingredient}) {
    return (
        <Card>
            <CardContent textAlign="center">
                <CardHeader textAlign="center">{ingredient.name}</CardHeader>
            </CardContent>
        </Card>
    )
}

export default IngredientCard