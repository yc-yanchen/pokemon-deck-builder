import { useEffect, useState } from "react";

const PageNav = ({ cardResult }) => {
    const [pages, setPages] = useState([]);

    const countPage = () => {
        const tempArray = [];
        const pageTotal = Math.ceil(cardResult.totalCount / cardResult.count);
        // pages.push('apple');
        for (let i = 1; i < pageTotal; i++) {
            tempArray.push(i);
        }
        setPages(tempArray);
    };

    useEffect(() => {
        countPage();
        console.log(pages);
    }, [cardResult]);

    return (
        <>
            <div className="page-nav">
                <button><span className="material-symbols-outlined">
                    navigate_before
                </span></button>
                <ul className="page-list">
                    {pages.map((value) => {
                        return (
                            <li key={value} ><a href="#">{value}</a></li>
                        );
                    })}
                </ul>
                <button><span className="material-symbols-outlined">
                    navigate_next
                </span></button>
            </div>
        </>
    );
};

export default PageNav;