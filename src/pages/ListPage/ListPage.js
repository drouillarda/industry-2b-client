import './ListPage.scss';
import { MyList } from './../../components/MyList/MyList';

export const ListPage = ({ titleList, handleAddTitle }) => {
    return (
        <main className="listpage">
            <MyList
                titleList={titleList}
                handleAddTitle={handleAddTitle}
            />
        </main>
    )
}
