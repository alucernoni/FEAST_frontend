import { useState, useEffect } from 'react';
import Home from './Home';
// import 'semantic-ui-css/semantic.min.css'


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

  console.log("ingredients list data:", ingredientListData)
  console.log("suggestions data fetch:", suggestionListData)

  return (
    <Home ingredientsList={ingredientListData} suggestionsList={suggestionListData}/>
  );
}

export default App;
