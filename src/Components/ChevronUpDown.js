import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import '../Styles/index_module.css'

function ChevronUpDown(props) {
  const [isVisible, setIsVisible] = useState(false); 
  const Text = props.text 
  const Title = props.title;

  const handleClick = () => {
    setIsVisible(!isVisible);

  };

  return (
    <div className={`title ${isVisible ? 'expanded' : ''}`}>
      <div className='chevronHeader'>
        {Title}
        <FontAwesomeIcon icon={isVisible ? faChevronUp : faChevronDown} onClick={handleClick} className='Chevron'/>
      </div>
      {isVisible && <p className="TextStyle"> {Text}</p>} 
    </div>
   );
}

export default ChevronUpDown;

// réutiliser le même composant