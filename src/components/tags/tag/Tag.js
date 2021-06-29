import './Tag.scss';
import moment from 'moment';
import trash from '../../../assets/image/icon/trash.png'

function Tag(props) {
    const { data, index, removeTags } = props;

    const tag = data.map((e, i) => (
        <li key={i}>
            {e.name} - <small>{moment(e.created_at, 'YYYY-MM-DD HH:mm:SS').format('DD/MM/YYYY HH:mm A')}</small>
        </li>
    ));

    return (
        <ul className="tag">
            <i 
                className="icon"
                onClick={ () => { removeTags(index) } }>
                    <img srcSet={trash} className="trash-icon" alt="remove"/>
            </i>
            {tag}
        </ul>
    );
}

export default Tag;