import PromptSuggestionButton from "./PromptSuggestionButton";

const PromptSuggestionsRow = ({ onPromptClick }) => {
    const prompts = [
        "Who is the best player in the NBA?",
        "Who leads the current NBA season in points?",
        "What is the most points scored in a single game?",
    ];

    return(
        <div className="prompt-suggestion-row">
            {prompts.map((prompt, index) => (
                <PromptSuggestionButton
                    key={`suggestion-${index}`}
                    text={prompt}
                    onClick={() => onPromptClick(prompt)}/>
            ))}
        </div>
    )
}

export default PromptSuggestionsRow;