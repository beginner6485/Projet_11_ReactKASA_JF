import FooterPicture from '../Assets/LogoB.png'
import '../Styles/index_Footer.css'

function Footer (){
    return (
        <div className="footerBanner">
            <div className='footerElement'>
                <img src={FooterPicture} alt="Logo fin" className='picture'></img>
                <span className='textFooter'>© 2020 Kasa. All rights reserved</span>
            </div>
        </div>

    )
}

export default Footer