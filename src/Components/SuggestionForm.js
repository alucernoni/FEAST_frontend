import React, {useState} from 'react'
import { Form, Grid, Segment } from 'semantic-ui-react'

function SuggestionForm({ingredientsList, addSuggestion}) {

    const options = ingredientsList.map((ingredient) => {return {key: `${ingredient.id}`, text: `${ingredient.name}`, value: `${ingredient.name}`}})
    console.log("options:", options)

    const initialFormData = {
        title: " ",
        suggestion_content: " ",
        ingredient_name: " "
    }

    const [newFormData, setNewFormData] = useState(initialFormData)

    const handleChange = (event) => {
        console.log("onchange event", event)
        setNewFormData({
            ...newFormData,
            [event.target.name]: event.target.value
        })
        console.log("new form data", newFormData)
    }

    const handleClick = (e) => {
        console.log("click e:", e)
        setNewFormData({
            ...newFormData,
            "ingredient_name": e.target.outerText
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const NewSuggestion = {
            title: newFormData.title,
            suggestion_content: newFormData.suggestion_content,
            ingredient_name: newFormData.ingredient_name
        }
        const config = {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(NewSuggestion)
        }
        fetch("http://localhost:9292/suggestions", config)
        .then(r => r.json())
        .then(addSuggestion)
        .then(setNewFormData(initialFormData))
    }


    return (
        <Grid centered>
            <Grid.Column style={{maxWidth: 1000}}>
                <Segment className='sugColor'>
                    <Form onSubmit={handleSubmit}>
                        <Form.Input label="What's the name of your idea?" name="title" value={newFormData.title} onChange={handleChange} placeholder="Suggestion Name" ></Form.Input>
                        <Form.Select label="Which ingredient is your idea for?" name="ingredient_name" value={newFormData.ingredient_name} onChange={handleClick} placeholder="Ingredient" options={options} ></Form.Select>
                        <Form.TextArea label="Tell us why it's a great idea!" name="suggestion_content" value={newFormData.suggestion_content} onChange={handleChange} placeholder="Short description here"></Form.TextArea>
                        <Form.Button type='submit' color='pink' fluid >Submit Your Idea!</Form.Button>
                    </Form>  
                </Segment>
            </Grid.Column>
        </Grid>
    )
}

export default SuggestionForm