import './MyList.scss';
import { CardGrid } from '../CardGrid/CardGrid';
import { Link } from 'react-router-dom';

export const MyList = ({ titleList, handleAdd }) => {

    return (
        <section className="myList">
            <CardGrid
                heading="Your List"
                records={titleList}
                titleField="title"
                imageField="img"
                titleList={titleList}
                handleAddButton={handleAdd}
            />

            <h3 className="myList__subheading">Are you ready to see where to watch?</h3>
            <Link to="/recommendations"><button className='favorites__button'>Tell me where to watch</button></Link>
        </section>
    );
};
