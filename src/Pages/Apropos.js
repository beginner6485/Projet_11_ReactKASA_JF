import '../Styles/index_Apropos.css'
import '../Styles/index_Banner_space.css'
import Mountains from '../Assets/mountains.png'
import Module from '../Components/modules'

function Apropos(){
    return (
            <div className='indexApropos'>
                <div className="Banner">
                <img src={Mountains} alt="Landscape" className="Img_landscape"></img>
                </div>
            <Module></Module>
            </div>
    )

}

export default Apropos