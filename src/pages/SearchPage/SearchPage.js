import './SearchPage.scss';
import { Card } from './../../components/Card/Card';
import { SearchResults } from '../../components/SearchResults/SearchResults';
import { Favorites } from '../../components/Favorites/Favorites';

export function SearchPage() {
    return <main className="searchpage">
        <SearchResults />
        <Card
            title="Test Card"
            bigText={true}
            // description="This is kind of an awkward, long test description for this card component."
            backgroundUrl="https://www.thesoapopera.com/cdn/shop/products/The-Soap-Opera-Rubber-Ducks-Colors-Yellow_02cd30bb-0dbd-4fdc-8d7c-6ee1be5a04e8_590x.jpg?v=1613344659"
        />
        <Favorites />
    </main>
}