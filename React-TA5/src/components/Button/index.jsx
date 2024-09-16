import React, {useState} from "react";

function Visibility() {
    const [isVisible, setIsVisible] = useState(false);

    const changeVisibility = () => {
        setIsVisible(!isVisible); 
    };

    let buttonText;
    if (isVisible) {
      buttonText = "Ocultar texto";
    } else {
      buttonText = "Mostrar texto";
    }
    
    return (
        <div>
          <button onClick={changeVisibility}>
            {buttonText}
          </button>
          {isVisible && <p>Hola</p>}
        </div>
    );
}

export default Visibility;