function BackButton(props) {

    function resetCharacters(){
        const setCharacters = props.setCharacters;
        // "removing" characters, so that characters ? is false 
        setCharacters(null);
    }

    return (
    <span className="back-home" onClick={resetCharacters}>Back to home</span>
  )
}

export default BackButton;
