import './HomePage.scss';
import axios from "axios";
import { useEffect, useState } from 'react';
import { CardGrid } from '../../components/CardGrid/CardGrid';

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
        <CardGrid
            heading="Browse Genres"
            records={genres}
            titleField="title"
            imageField="image"
        />
    </main>
}
