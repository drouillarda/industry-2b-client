import "./Nav.scss"
import popcorn from './../../assets/images/emojione-monotone-popcorn.svg';
import { Link } from "react-router-dom";

export const Nav = () => {
    return (
        <header className="nav">
            <div className="nav__start">
                <Link to="/" className="nav__logo"><h3>Website Name</h3></Link>
            </div>
            <div className="nav__end">
                <p className="nav__end--hash">#</p>
                <Link to="/"><img src={popcorn} className="nav__hidden" alt="popcorn"/></Link>
                <p>My List</p>
            </div>
        </header>
    );
};
