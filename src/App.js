import imgRickMorty from "./img/rick-morty.png";
import './App.css';

function App() {
  const reqApi = () => {
    console.log("Clicked!");
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        <img src={imgRickMorty} alt="Rick & Morty" className='img-home' />
        <button onClick={reqApi} className='btn-search'>Search characters</button>
      </header>
    </div>
  );
}

export default App;
