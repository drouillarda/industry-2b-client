import './HomePage.scss';
import axios from "axios";
import { useEffect, useState } from 'react';
import { CardGrid } from '../../components/CardGrid/CardGrid';
import { Search } from '../../components/Search/Search';

export function HomePage() {
    const [popularTitles, setPopularTitles] = useState([]);

    useEffect(() => {
        const fetchTitles = async () => {
            const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/titles/popular/8`);
            setPopularTitles(data);
        };

        fetchTitles();
    }, []);

    return <main className="home">
        <Search />
        <h1 className="home__heading">Header Placeholder</h1>
        <p className="home__copy">Personal recommendation for content streamers based on what you like to watch or
            something lik this......</p>
        <CardGrid
            heading="Popular Titles"
            records={popularTitles}
            titleField="title"
            imageField="img"
        />
    </main>
}
