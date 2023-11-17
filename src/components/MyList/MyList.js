import './MyList.scss';
import { CardGrid } from '../CardGrid/CardGrid';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const MyList = ({ titleList, handleAdd }) => {
    const [myList, setMyList] = useState([]);

    console.log(myList);

    useEffect(() => {
        setMyList(JSON.parse(localStorage.getItem("titleList")));
    }, []);

    return (
        <section className="myList">
            <CardGrid
                heading="Your List"
                records={myList}
                titleField="title"
                imageField="img"
                titleList={titleList}
                handleAddButton={handleAdd}
            />

            <h3 className="myList__subheading">Are you ready to see where to watch?</h3>
            <Link to="/services"><button className='favorites__button'>Tell me where to watch</button></Link>
        </section>
    );
};
