import Logo from "./Logo";


const TopNav = () => {
    return (
        <>
            <nav className="top-nav">
                <div className="wrapper">
                    <Logo />
                    <ul>
                        <li>Home</li>
                        <li>Deck Builder</li>
                        <li>Deck Viewer</li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default TopNav;