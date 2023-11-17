import "./Nav.scss"
import popcorn from './../../assets/images/emojione-monotone-popcorn.svg';
import { Link } from "react-router-dom";

export const Nav = ({ titleList }) => {
    return (
        <header className="nav">
            <div className="nav__start">
                <Link to="/" className="nav__logo"><h3>YouWatch</h3></Link>
            </div>
            <div className="nav__end">
                <p className={`nav__end--hash ${!titleList.length ? "nav__end--hash--hidden" : ""}`}>{titleList?.length}</p>
                <Link to="/list"><img src={popcorn} className="nav__hidden" alt="popcorn"/></Link>
                <p>My List</p>
            </div>
        </header>
    );
};
