import { useEffect, useState } from "react";

const PageNav = ({ cardResult, pageOnClick, currentPage }) => {
    const [pages, setPages] = useState([]);
    const [finalPage, setFinalPage] = useState(0);
    const countPage = () => {
        const tempArray = [];
        const pageTotal = Math.ceil(cardResult.totalCount / 12);
        console.log(pageTotal);
        // pages.push('apple');
        for (let i = 1; i <= pageTotal; i++) {
            tempArray.push(i);
        }
        setPages(tempArray);
        setFinalPage(pageTotal);
    };

    useEffect(() => {
        countPage();
        console.log(pages);
    }, [cardResult]);

    return (
        <>
            <div className="page-nav">

                {currentPage - 1 === 0 ? null : <button onClick={() => { pageOnClick(currentPage - 1); }} ><span className="material-symbols-outlined">
                    navigate_before
                </span></button>}
                <ul className="page-list">
                    {pages.map((value) => {
                        return (
                            <li key={value} onClick={() => { pageOnClick(value); }} ><a href="#">{value}</a></li>
                        );
                    })}
                </ul>
                {currentPage === finalPage ? null : <button onClick={() => { pageOnClick(currentPage + 1); }}><span className="material-symbols-outlined">
                    navigate_next
                </span></button>}

            </div>
        </>
    );
};

export default PageNav;