// import React from 'react'

function Characters(props) {
  const character = props.character;
  console.log(character);
  return (
    <div className="character-container" key={character.id}>
      <div>
        <img src={character.image} alt={character.name}></img>
      </div>
      <div>
        <p>{character.name}</p>
      </div>
      
    </div>
  )
}

export default Characters;
