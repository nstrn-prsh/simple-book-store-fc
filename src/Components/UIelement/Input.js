import React from "react";
import "./../componentCss/input.css";

const Input = (props) => {
     let formElement = null;
     //  e123
     const checkValid = ["inputElement"];
     if (props.notValid && props.used) checkValid.push("notValid");

     switch (props.fieldType) {
          case "input":
               formElement = (
                    <input
                         className={checkValid.join(" ")}
                         {...props.elementConfig}
                         value={props.value}
                         onChange={props.change}
                    />
               );
               break;
          default:
               formElement = (
                    <input
                         className={checkValid.join(" ")}
                         {...props.elementConfig}
                         value={props.value}
                         onChange={props.change}
                    />
               );
     }

     return <div className='input'>{formElement}</div>;
};

export default Input;
