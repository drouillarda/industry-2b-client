import './Search.scss';
import searchIcon from './../../assets/images/search-icon.svg';

export const Search = () => {
    return (
        <div className="search__container">
            <img className="search__icon" src={searchIcon} alt="search icon" />
            <input className="search" type="text" name="search" id="search" placeholder="Search for a title" />
        </div>
    )
}
