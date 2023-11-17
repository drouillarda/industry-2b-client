import './SearchPage.scss';
import { useLocation } from 'react-router-dom';
import { SearchResults } from '../../components/SearchResults/SearchResults';
import { Favorites } from '../../components/Favorites/Favorites';

export function SearchPage({ titleList, handleAdd }) {
    const { search } = useLocation();

    return <main className="searchpage">
        <SearchResults query={search.match(/(?<=\=)\w*/)[0]} titleList={titleList} handleAdd={handleAdd} />
        <Favorites />
    </main>
}