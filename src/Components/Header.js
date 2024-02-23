import Logo from '../Assets/LOGO.png'
import '../Styles/index_Header.css'
import { Link } from 'react-router-dom'


function Header (){

    return (
        <div className='HeaderBand'>
            <img src={Logo} className ="Logo" alt="Logo"/>
                <nav>
                    <div className='Header_Link'>
                        <Link to="/" className="Lien">Accueil</Link >
                        <Link to="/Apropos" className="Lien">A Propos</Link>
                    </div>
                </nav>
        </div>

)

}

export default Header;