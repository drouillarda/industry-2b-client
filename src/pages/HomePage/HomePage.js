import './HomePage.scss';
import axios from "axios";
import { useEffect, useState } from 'react';
import { CardGrid } from '../../components/CardGrid/CardGrid';
import { Search } from '../../components/Search/Search';

export function HomePage() {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const fetchTitles = async () => {
            const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/titles`);
            setGenres(data);
        };

        fetchTitles();
    }, []);

    return <main className="home">
        <Search />

        <CardGrid
            heading="Browse Genres"
            records={genres}
            titleField="title"
            imageField="image"
        />
    </main>
}
