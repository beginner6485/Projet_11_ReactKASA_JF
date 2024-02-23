import Error_404 from "../Assets/404.png"
import "../Styles/index_Error.css"
import { Link } from 'react-router-dom';

function Error(){
    
    return (
            <div className="styleError">
                <img src={Error_404} alt="Error" className="imgError"/>
                <div className="textError" >Oups! La page que vous demandez n'existe pas.</div>
                <Link to="/" className="linkError">Retourner sur la page d’accueil</Link> 
            </div>
    )
}

export default Error