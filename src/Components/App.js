import { useState, useEffect } from 'react';
import Home from './Home';


function App() {
  
  const [ingredientListData, setIngredientListData] = useState([])
  const [suggestionListData, setSuggestionListData] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/ingredients")
    .then(resp => resp.json())
    .then(setIngredientListData)
  }, [])

  useEffect(() => {
    fetch("http://localhost:9292/suggestions")
    .then(resp => resp.json())
    .then(setSuggestionListData)
  }, [])

  function addSuggestion(NewSuggestion) {
    setSuggestionListData([...suggestionListData, NewSuggestion])
  }

  function removeSuggestion(id) {
    const updatedSuggestionsList = suggestionListData.filter(suggestion => suggestion.id !== id)
    setSuggestionListData(updatedSuggestionsList)
  }

  return (
    <Home ingredientsList={ingredientListData} suggestionsList={suggestionListData} addSuggestion={addSuggestion} removeSuggestion={removeSuggestion}/>
  );
}

export default App;