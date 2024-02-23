import LogementsIcons from '../Components/Location'
import Banner from '../Components/Banner'
import FicheLocations from './FicheLoc'
import '../Styles/index.css'

function Home (){
    
    return (
        <div className='margin'>
        <Banner/>
        <LogementsIcons/>
        <FicheLocations/>
        </div>
    )
}

export default Home