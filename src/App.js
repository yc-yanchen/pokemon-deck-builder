import firebase from './firebase';
import './App.css';
import TopNav from './Components/TopNav';
import SearchBar from './Components/SearchBar';
import { useState } from 'react';
import SearchResult from './Components/SearchResult';

function App() {
  const [cardResult, setCardResult] = useState({});

  return (
    <div className="App">
      <TopNav SearchBar={<SearchBar setCardResult={setCardResult} cardResult={cardResult} />} />
      <div className="wrapper">
        <SearchResult cardResult={cardResult} />
      </div>
    </div>
  );
}

export default App;
