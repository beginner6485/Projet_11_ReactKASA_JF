import { Link } from 'react-router-dom';
import '../Styles/index_Logements_icons.css';
import Logements from '../logements.json';

function LocationsIcons() {
    return (
        <div className='Background_icons'>
            {Logements.map((item) => (
                <div key={item.id}>
                    <Link to={`/logement/${item.id}`}>
                        <div style={{ backgroundImage: `url(${item.cover})` }} className='Icons'>
                            <span className='Title'>{item.title}</span>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default LocationsIcons;