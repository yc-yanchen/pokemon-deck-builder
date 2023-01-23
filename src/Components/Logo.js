import piplup from "../assets/piplup.png";

const Logo = () => {
    return (
        <>
            <div className="logo">
                <div className="img-container "><img src={piplup} alt="Piplup icon" className="piplup-icon" /></div>
                <h1>Poke Deck Builder</h1>
            </div>
        </>
    );
};

export default Logo;