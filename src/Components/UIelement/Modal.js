import React from "react";
import "./../componentCss/modal.css";

//  etelaate sefaresh karbar ro inja neshon midim
const Modal = (props) => {
     return (
          <div
               className='modal'
               //  e67
               style={{
                    transform: props.show
                         ? "translateY(0)"
                         : "translateY(-100vh)",
                    opacity: props.shoe ? "1" : "0",
               }}
          >
               {props.children}
          </div>
     );
};

export default Modal;
