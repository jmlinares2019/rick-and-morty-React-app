import imgRickMorty from "./img/rick-morty.png";
import './App.css';
import { useState } from "react";
import Characters from "./components/Characters";

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();

    setCharacters(characterApi.results);

    console.log(characters);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {characters ? // does characters contain data? 
          <Characters characters={characters}/> // load Characters component passing characters as prop
        : // else  
          < /* load image and button into fragment (empty HTML brackets) */ >
            <img src={imgRickMorty} alt="Rick & Morty" className='img-home' />
            <button onClick={reqApi} className='btn-search'>Search characters</button>
          </>
        } 
      </header>
    </div>
  );
}

export default App;
