import React from "react";
import "./../componentCss/modal.css";

//  etelaate sefaresh karbar ro inja neshon midim
const Modal = (props) => {
     return <div className='modal'>{props.children}</div>;
};

export default Modal;
