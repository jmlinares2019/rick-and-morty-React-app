import imgRickMorty from "./img/rick-morty.png";
import './App.css';
import { useState } from "react";
import Character from "./components/Character";

function App() {
  const [characters, setCharacters] = useState(null);

  function createCharacther(character, index){
    return <Character character={character} key={index}/>
  }

  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();

    setCharacters(characterApi.results);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {characters ?
        <div className="characters">
          <h2>Characters</h2>
          <div className="container-characters">
            {characters.map(createCharacther)}
          </div>
        </div>
        :
          <>
            <img src={imgRickMorty} alt="Rick & Morty" className='img-home' />
            <button onClick={reqApi} className='btn-search'>Search characters</button>
          </>
        } 
      </header>
    </div>
  );
}

export default App;
