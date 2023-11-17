import './Favorites.scss'
import { Link } from 'react-router-dom';

export const Favorites = () => {
    return (
        <section className='favorites'>
            <h3>Are you done picking your favorites?</h3>
            <Link to=""><button className='favorites__button'>View your list</button></Link>
        </section>
    );
};