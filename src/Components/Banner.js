import '../Styles/index_Banner_space.css'
import Landscape from "../Assets/landscape.png"
import '../Styles/index.css'

function Banner (){
    return (
    <div className="BodyBanner">
        <div className="Banner">
            <img src={Landscape} alt="Landscape" className="Img_landscape"></img>
            <div className="Text_Img">Chez vous, partout et ailleurs </div>
        </div>
    </div>
    )

}

export default Banner