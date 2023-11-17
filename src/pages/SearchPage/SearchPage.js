import './SearchPage.scss';
import { useLocation } from 'react-router-dom';
import { SearchResults } from '../../components/SearchResults/SearchResults';
import { Favorites } from '../../components/Favorites/Favorites';

export function SearchPage({ titleList, handleAdd }) {
    const { search } = useLocation();

    const matchResult = search.match(/(?<==)(\w.*)\b/g)[0];

    return <main className="searchpage">
        <SearchResults query={matchResult.replace(/[+]/g, " ")} titleList={titleList} handleAdd={handleAdd} />
        <Favorites />
    </main>
}