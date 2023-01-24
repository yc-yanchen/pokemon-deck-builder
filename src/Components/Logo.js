import piplup from "../assets/piplup.png";
import { Link, Routes, Route } from "react-router-dom";
import Introduction from "./Introduction";

const Logo = () => {
    return (
        <>
            <Link to="/" >
                <div className="logo">
                    <div className="img-container "><img src={piplup} alt="Piplup icon" className="piplup-icon" /></div>
                    <h1>Piplup Deck Builder</h1>
                </div>
            </Link>
        </>
    );
};

export default Logo;;