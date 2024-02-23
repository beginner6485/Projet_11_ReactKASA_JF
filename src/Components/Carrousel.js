import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { useParams } from "react-router-dom";
import Logements from '../logements.json';
import "../Styles/index_FicheLoc.css"


function Carrousel() {

  const [currentSlide, setCurrentSlide] = useState(0); 
  const { id } = useParams();
  const logement = Logements.find(item => item.id === id);  
  const imagesData = logement && logement.pictures ? logement.pictures : [];
  console.log(imagesData)


  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % imagesData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? imagesData.length - 1 : prevSlide - 1
    );
  };
  return (
    <div className="BannerSpace">
        <FontAwesomeIcon icon={faChevronLeft} className="fa left" onClick={prevSlide} />
        <img src={imagesData[currentSlide]}className="Img_Background" alt={imagesData[currentSlide]} /> 
        <FontAwesomeIcon icon={faChevronRight} className="fa right" onClick={nextSlide} />
    </div>
  )

}

export default Carrousel