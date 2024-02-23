import '../Styles/index_Banner_space.css';
import '../Styles/index_FicheLoc.css';
import Logements from '../logements.json';
import { useParams } from 'react-router-dom';
import ChevronUpDown from '../Components/ChevronUpDown';
import Caroussel from '../Components/Carrousel.js';
import Error from '../Components/Error.jsx';


function FicheLocations() {

  const { id } = useParams();

  const isIdValidate = Logements.some(item => item.id === id);
  console.log(isIdValidate);

  const logement = Logements.find(item => item.id === id);   
   
  if (!isIdValidate){
    return <Error id={id} />
  }
  return (
    <div className="BodyBanner">
      <div className="BannerLog">
        <div className="BannerSpace">

          <Caroussel/>
        
        </div>

        <div className="infos_logement_space">
          <div key={logement.id}>          
            <div className="localization_space">
              <div className='location_info'>
                <span className="title_space">
                  <h2 className="">{logement.title}</h2>                                                                                                                                                                                                                                                                                            
                </span>
                <span className="title_log">{logement.location}</span>
                <div className="critere_space">
                {logement.tags.map((tag, index) => (
                  <p key={index} className="critere">
                    {tag.trim()}
                  </p>
                ))}
                </div>
            </div>

            <div className="modules-spaces">
              
                  <div className="avatar_space">
                    <span className="avatar_name">{logement.host.name}</span>
                    <img
                    className="avatar-bubble avatar"
                    src={logement.host.picture}
                    alt="Host Avatar"
                    />
                    </div>

                    <div className='star_space'>
                  {[...Array(5)].map((_, index) => {
                    let starClass = 'star';
                    if (index < parseInt(logement.rating, 10)) {
                      starClass += ' filled';
                    } else {
                      starClass += ' empty';
                    }
                    return (
                      <span key={index} className={starClass}>
                        &#9733;
                      </span>
                    );
                  })}
                  </div>
            </div>
          </div>

            <div className="description_banner">
              <div className="bubble">
                  <ChevronUpDown title="Description" text={logement.description}
                  />  
              </div>

              <div className="bubble">
                  <ChevronUpDown title="Equipements" text={logement.equipments.map((equipment, index) => (
                      <div key={index}>{equipment}</div>
                      ))}
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FicheLocations;