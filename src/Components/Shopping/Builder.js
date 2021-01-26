import React from "react";
import "./ShoppingCss/builder.css";

const Builder = (props) => {
     return (
          <div className='builder'>
               <p>{props.title}</p>
               <button onClick={props.add}>add</button>
               <button>remove</button>
          </div>
     );
};

export default Builder;
