const CardLarge = ({ imgSize, description }) => {
    return (
        <>
            <div className="search-result-card">
                <img src={imgSize} alt={description} />
            </div>
        </>
    );
};

export default CardLarge;