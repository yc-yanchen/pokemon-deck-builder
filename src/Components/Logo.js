import piplup from "../assets/piplup.png";

const Logo = () => {
    return (
        <a href="#">
            <div className="logo">
                <div className="img-container "><img src={piplup} alt="Piplup icon" className="piplup-icon" /></div>
                <h1>Piplup Deck Builder</h1>
            </div>
        </a>
    );
};

export default Logo;