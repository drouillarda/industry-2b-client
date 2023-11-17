import './ListPage.scss';
import { MyList } from './../../components/MyList/MyList';

export const ListPage = ({ titleList, handleAdd }) => {
    return (
        <main className="listpage">
            <MyList
                titleList={titleList}
                handleAdd={handleAdd}
            />
        </main>
    )
}
