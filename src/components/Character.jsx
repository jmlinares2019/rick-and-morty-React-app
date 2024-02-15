// import React from 'react'

function Character(props) {
  // object destructuring, same as
  // const character = props.character 
  const { character } = props;
  console.log(character);
  return (
    <div className="character-container">
      <div>
        <img src={character.image} alt={character.name}></img>
      </div>
      <div>
        <p>{character.name}</p>
      </div>
      
    </div>
  )
}

export default Character;
