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
        <h3>{character.name}</h3>
        <h6>
          {character.status === "Alive" ?
            < /* fragment */ >  
              <span className="alive" />
              Alive
            </>
          : 
            < /* fragment */ >  
              <span className="dead" />
              Dead
            </>
          }
        </h6>
        <p><span className="text-grey">Episodes: </span>{character.episode.length}</p>
        <p><span className="text-grey">Species: </span>{character.species}</p>
      </div>
      
    </div>
  )
}

export default Character;
