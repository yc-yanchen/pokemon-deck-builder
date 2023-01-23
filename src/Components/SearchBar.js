import { useState } from "react";

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState("");

    const [displaySearch, setDisplaySearch] = useState(false);

    const key = 'e4dccf80-0d32-444e-9609-d08da5da041a';

    // flips the displaySearch state to display search bar when the function is called
    const displayOnClick = () => {
        setDisplaySearch(!displaySearch);
        console.log('work');
    };

    // changes the classname when the displaySearch state is change
    const activeClass = displaySearch ? " search-button-active" : " ";

    const searchOnChange = (e) => {
        setSearchValue(e.target.value);
        console.log(searchValue);
    };

    const searchOnClick = () => {

    };

    return (
        <div className="search-container">
            {displaySearch ? <input type="text" className="search-input" placeholder="Search for a card..." onChange={searchOnChange} /> : null}
            <button onClick={displayOnClick} className={"search-button" + activeClass} ><span className="material-symbols-outlined">
                search
            </span></button>
        </div>
    );
};

export default SearchBar;