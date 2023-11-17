import './SearchResults.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { CardGrid } from '../CardGrid/CardGrid';
import { Search } from '../../components/Search/Search';

export const SearchResults = ({ query, titleList, handleAdd }) => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        const searchTitles = async () => {
            const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/titles?searchTitle=${query}`);
            setResults(data);
        }
        searchTitles();
    }, []);

    return (
        <section className='searchResults'>
            <form className="searchResults__search" action="/search"><Search defaultValue={query} /></form>
            <CardGrid
                heading="Search Results"
                records={results}
                titleField="title"
                imageField="img"
                titleList={titleList}
                handleAddButton={handleAdd}
            />
        </section>
    );
};