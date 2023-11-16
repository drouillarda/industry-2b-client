import "./Header.scss"
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <header className="navbar">
            <nav className="navbar__container">
                <Link to="/">
                    <div className="navbar__logo"></div>
                </Link>
                <div className="navbar__pages">
                    <Link to="/">
                        <div><button className="navbar__page-1">Warehouses</button></div>
                    </Link>
                    <Link to="/inventory">
                        <div><button className="navbar__page-2">Inventory</button></div>
                    </Link>
                </div>
            </nav>
        </header>
    );
};
export default Nav;