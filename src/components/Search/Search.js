import './Search.scss';
import searchIcon from './../../assets/images/search-icon.svg';
import { useEffect, useState } from 'react';

export const Search = ({ defaultValue }) => {
    const [query, setQuery] = useState("");

    useEffect(() => {
        defaultValue && setQuery(defaultValue);
    }, []);
    return (
        <div className="search__container">
            <img className="search__icon" src={searchIcon} alt="search icon" />
            <input
                className="search"
                type="text"
                name="search"
                id="search"
                placeholder="Search for a title"
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
        </div>
    )
}
