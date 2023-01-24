import { useState } from "react";

const SearchBar = ({ searchOnSubmit, setSearchValue }) => {

    const [displaySearch, setDisplaySearch] = useState(false);

    // flips the displaySearch state to display search bar when the function is called
    const displayOnClick = () => {
        setDisplaySearch(!displaySearch);
    };

    // changes the className when the displaySearch state is change
    const activeClass = displaySearch ? " search-button-active" : " ";

    const searchOnChange = (e) => {
        setSearchValue(e.target.value);
        // console.log(searchValue);
    };

    return (
        <form className="search-container" onSubmit={searchOnSubmit} >
            {displaySearch ? <input type="text" className="search-input" placeholder="Try searching 'Piplup'" onChange={searchOnChange} /> : null}
            <button type="button" onClick={displayOnClick} className={"search-button" + activeClass} ><span className="material-symbols-outlined">
                search
            </span></button>
        </form>
    );
};

export default SearchBar;