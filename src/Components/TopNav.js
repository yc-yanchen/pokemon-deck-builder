import Logo from "./Logo";
import SearchBar from "./SearchBar";


const TopNav = ({ SearchBar }) => {
    return (
        <>
            <nav className="top-nav">
                <div className="wrapper">
                    <Logo />
                    <ul>
                        <li>Home</li>
                        <li>Deck Builder</li>
                        <li>Deck Viewer</li>
                        <li>{SearchBar}</li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default TopNav;