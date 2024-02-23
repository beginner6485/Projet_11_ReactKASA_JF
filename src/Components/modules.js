import '../Styles/index_module.css'
import ChevronUpDown from './ChevronUpDown';


function Module() {
const Text = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.";
const Text2 = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
const Text3 ="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
const Text4= "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

return (
    <div className="module">
      <div className="moduleSpace">
        <div className="moduleTitle" >
          <ChevronUpDown text={Text} title="Fiabilité" className="Chevron"/>
        </div>
      </div>
      <div className="moduleSpace">
        <div className="moduleTitle" >
          <ChevronUpDown text={Text2} title="Respect" className="Chevron"/>
        </div>
      </div>
      <div className="moduleSpace">
        <div className="moduleTitle" >
          <ChevronUpDown text={Text3} title="Service" className="Chevron"/>
        </div>
      </div>
      <div className="moduleSpace">
        <div className="moduleTitle" >
          <ChevronUpDown text={Text4} title="Securité"/>
        </div>
      </div>
    </div>

  );
}

export default Module;

