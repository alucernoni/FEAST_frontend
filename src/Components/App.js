import { useState, useEffect } from 'react';
import Home from './Home';
import '../App.css'


function App() {
  
  const [ingredientListData, setIngredientListData] = useState([])
  const [suggestionListData, setSuggestionListData] = useState([])
  const [ingredientsSuggestions, setIngredientsSuggestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/ingredients")
    .then(resp => resp.json())
    .then(setIngredientListData)
  }, [])


  useEffect(() => {
    fetch("http://localhost:9292/suggestions")
    .then(resp => resp.json())
    .then(resp => {
      return resp.map((mappedResp) => {
        if (mappedResp.votes === null) {
          mappedResp.votes = 0
        }
        return mappedResp
      })
    })
    .then(setSuggestionListData)
  }, [])

  useEffect(() => {
    fetch("http://localhost:9292/")
    .then(r => r.json())
    .then(setIngredientsSuggestions)
  }, [])

  function addSuggestion(NewSuggestion) {
    setSuggestionListData([...suggestionListData, NewSuggestion])
  }

  function removeSuggestion(id) {
    const updatedSuggestionsList = suggestionListData.filter(suggestion => suggestion.id !== id)
    setSuggestionListData(updatedSuggestionsList)
  }

  function upVote(id) {
    const updatedSuggestionVote = suggestionListData.map(suggestion => {
      if (suggestion.id === id) {
        suggestion.votes = suggestion.votes +1
      }
      return suggestion
    })
    setSuggestionListData(updatedSuggestionVote) 
  }

  function filterSuggestions(suggestions) {
    setSuggestionListData(suggestions)
  }

  return (
    <Home ingredientsList={ingredientListData} suggestionsList={suggestionListData} ingredientsSuggestions={ingredientsSuggestions} addSuggestion={addSuggestion} removeSuggestion={removeSuggestion} upVote={upVote} filterSuggestions={filterSuggestions}/>
  );
}

export default App;