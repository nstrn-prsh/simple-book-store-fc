import React, { Fragment } from "react";
import "./../componentCss/modal.css";
import Backdrop from "./Backdrop";

//  etelaate sefaresh karbar ro inja neshon midim
const Modal = (props) => {
     return (
          <Fragment>
               <Backdrop show={props.show} clickBackdrop={props.modalClose} />
               <div
                    className='modal'
                    //  e67
                    style={{
                         transform: props.show
                              ? "translateY(0)"
                              : "translateY(-100vh)",
                         opacity: props.show ? "1" : "0",
                    }}
               >
                    {props.children}
               </div>
          </Fragment>
     );
};

export default Modal;
