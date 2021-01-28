import React from "react";
import "./../componentCss/buttonModal.css";

//  e69
const ButtonModal = (props) => {
     return (
          <button className={`btn ${props.btnType}`} onClick={props.click}>
               {props.children}
          </button>
     );
};

export default ButtonModal;
