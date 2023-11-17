import './SearchResults.scss'
import { Card } from '../Card/Card';
import { CardGrid } from '../CardGrid/CardGrid';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const SearchResults = ({ query }) => {
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
            {/* <h1>Search Results</h1>
            {results.map(result => <Card
                key={result.id}
                title={result.title}
                bigText={true}
                backgroundUrl={result.img}
            />)} */}
            <CardGrid
                heading="Search Results"
                records={results}
                titleField="title"
                imageField="img"
            />
        </section>
    );
};