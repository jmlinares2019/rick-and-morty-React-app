function Character(props) {
  // object destructuring, same as
  // const character = props.character 
  const { character } = props;
  return (
    <div className="character-container">
      <div className="col-lg-6">
        <img src={character.image} alt={character.name} className={character.status === "Dead" || character.status === "unknown" ? "is-dead" : "is-alive" }></img>
      </div>
      <div className="col-lg-6">
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
