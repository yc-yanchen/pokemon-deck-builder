import { useState, useEffect } from "react";

import pokemon from 'pokemontcgsdk';

pokemon.configure({ apiKey: 'e4dccf80-0d32-444e-9609-d08da5da041a' });

const SearchBar = ({ cardResult, setCardResult }) => {

    const [searchValue, setSearchValue] = useState("");

    const [displaySearch, setDisplaySearch] = useState(false);


    // flips the displaySearch state to display search bar when the function is called
    const displayOnClick = () => {
        setDisplaySearch(!displaySearch);
    };

    // changes the classname when the displaySearch state is change
    const activeClass = displaySearch ? " search-button-active" : " ";

    const searchOnChange = (e) => {
        setSearchValue(e.target.value);
        // console.log(searchValue);
    };

    const searchOnSubmit = (e) => {
        e.preventDefault();
        pokemon.card.where({ q: `name:${searchValue}`, pageSize: 10, page: 1 })
            .then(result => {
                setCardResult(result);
                console.log(result);
                // console.log(cardResult.data[0].images.small);
                // console.log(cardResult.data);
            });
    };

    return (
        <form className="search-container" onSubmit={searchOnSubmit} >
            {displaySearch ? <input type="text" className="search-input" placeholder="Search for a card..." onChange={searchOnChange} /> : null}
            <button type="button" onClick={displayOnClick} className={"search-button" + activeClass} ><span className="material-symbols-outlined">
                search
            </span></button>
        </form>
    );
};

export default SearchBar;