import React from "react";
import "./../componentCss/input.css";

const Input = (props) => {
     let formElement = null;
     switch (props.fieldType) {
          case "input":
               formElement = <input className='inputElement' {...props} />;
               break;
          default:
               formElement = <input className='inputElement' {...props} />;
     }

     return <div className='input'>{formElement}</div>;
};

export default Input;
