import React from "react";
import SuggestionCard from "./SuggestionCard";
import SuggestionForm from "./SuggestionForm";

function Suggestions({suggestionsList}) {
    return(
        <div>
            <div>
                Enjoy feasting on your INGREDIENT by making one of these!
            </div>
            <SuggestionCard/>
            <div>
                Got an idea? Add it to the FEAST!
            </div>
            <SuggestionForm/>
        </div>
    )
}

export default Suggestions