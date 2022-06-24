import React from 'react'
import { Header } from 'semantic-ui-react'
import Ingredients from './Ingredients'
import Suggestions from './Suggestions'

function Home({ingredientsList, suggestionsList, ingredientsSuggestions, addSuggestion, removeSuggestion, upVote, filterSuggestions}) {
    return (
        <div>
            <div>
                <img src="https://images.unsplash.com/photo-1577003833154-a92bbd63ae13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="landing-page-image" />
            </div>
            <div>
                <Header as="h1" size='huge' textAlign='center'>
                FEAST
                </Header>
                <Header as="h3" textAlign='center'>Fresh ideas to reinvent your excess food into new meals so you can waste not, want not, and FEAST</Header>
            </div>
            <div>
                {/* Give it a go! Click on an ingredient below to see some ideas! */}
            </div>
            <Ingredients ingredientsList={ingredientsList} ingredientsSuggestions={ingredientsSuggestions} filterSuggestions={filterSuggestions}/>
            <Suggestions suggestionsList={suggestionsList} ingredientsList={ingredientsList} addSuggestion={addSuggestion} removeSuggestion={removeSuggestion} upVote={upVote}/>
        </div>
    )
}

export default Home