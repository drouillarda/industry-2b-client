import './HomePage.scss';
import axios from "axios";
import { useEffect, useState } from 'react';
import { CardGrid } from '../../components/CardGrid/CardGrid';
import { Search } from '../../components/Search/Search';
import { Link } from 'react-router-dom';

export function HomePage({ titleList, handleAdd }) {
    const [popularTitles, setPopularTitles] = useState([]);

    useEffect(() => {
        const fetchTitles = async () => {
            const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/titles/popular/8`);
            setPopularTitles(data);
        };

        fetchTitles();
    }, []);

    return <main className="home">
        <h1 className="home__heading">Discover Platforms</h1>
        <p className="home__copy">Personal recommendation for content streamers based on what you like to watch or
            something like this......</p>
        <form className="home__search" action="/search"><Search /></form>
        <CardGrid
            heading="Popular Titles"
            records={popularTitles}
            titleField="title"
            imageField="img"
            handleAddButton={handleAdd}
            titleList={titleList}
        />
        <Link className="home__link" to="/recommendations"><button className="home__button">See recommendations</button></Link>
    </main>
}
