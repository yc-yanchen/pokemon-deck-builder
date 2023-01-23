import { useState } from "react";

const SearchResult = ({ cardResult }) => {


    return (
        <main>
            {/* check if the cardResult state is empty */}
            {Object.keys(cardResult).length === 0 ? <h2>placeholder</h2> : <ul className="search-result">
                {/* map through the cardResult.data array because cardResult is an object... */}
                {cardResult.data.map((value) => {
                    return (
                        // console.log(value)
                        <li className="search-result-card" key={value.id} > <img src={value.images.small} alt={`${value.name} from ${value.set.name}, Artist: ${value.artist}`}></img></li>
                    );
                })}
            </ul>}

        </main>
    );
};

export default SearchResult;