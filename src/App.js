import firebase from './firebase';
import './App.css';
import TopNav from './Components/TopNav';
import SearchBar from './Components/SearchBar';
import { useState } from 'react';
import SearchResult from './Components/SearchResult';
import pokemon from 'pokemontcgsdk';
import PageNav from './Components/PageNav';
import { Routes, Route, Link, useNavigate, redirect } from 'react-router-dom';
import Introduction from './Components/Introduction';

pokemon.configure({ apiKey: 'e4dccf80-0d32-444e-9609-d08da5da041a' });

function App() {
  const [cardResult, setCardResult] = useState({});

  // tracks user input live
  const [searchValue, setSearchValue] = useState("");

  // save the previous search value so that the user can change pages
  const [saveSearchValue, setSaveSearchValue] = useState("");

  // track the current page user is on
  const [currentPage, setCurrentPage] = useState(0);

  const searchOnSubmit = (e) => {
    e.preventDefault();
    setSaveSearchValue(searchValue);
    pokemon.card.where({
      q: `name:${searchValue}`,
      pageSize: 12,
      page: 1
    })
      .then(result => {
        setCardResult(result);
        setCurrentPage(result.page);
        console.log(result);
      });
    return redirect("/search");
  };

  const pageOnClick = (pageNum) => {
    pokemon.card.where({
      q: `name:${saveSearchValue}`,
      pageSize: 12,
      page: pageNum
    })
      .then(result => {
        setCardResult(result);
        setCurrentPage(result.page);
        console.log(result);
      });

  };


  return (
    <div className="App">
      <TopNav SearchBar={<SearchBar searchOnSubmit={searchOnSubmit} setSearchValue={setSearchValue} />} />
      <div className="wrapper">
        <Routes>
          <Route path='/' element={<Introduction />} />
          <Route path='/search' element={<SearchResult cardResult={cardResult} PageNav={<PageNav pageOnClick={pageOnClick} cardResult={cardResult} currentPage={currentPage} />} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
