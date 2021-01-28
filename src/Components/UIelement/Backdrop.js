import React from "react";
import "./../componentCss/backdrop.css";

const Backdrop = (props) => {
     return props.show ? (
          <div className='backdrop' onClick={props.clickBackdrop}></div>
     ) : null;
};

export default Backdrop;
