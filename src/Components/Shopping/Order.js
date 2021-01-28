import React, { Fragment } from "react";
import ButtonModal from "./../UIelement/ButtonModal";

const Order = (props) => {
     return (
          <Fragment>
               <h3>order!</h3>
               <ul>
                    {Object.keys(props.products).map((item) => (
                         <li key={item}>
                              {item} : {props.products[item]}
                         </li>
                    ))}
                    <p>continue?</p>
                    <ButtonModal btnType='success' click={props.confirm}>
                         yes
                    </ButtonModal>
                    <ButtonModal btnType='danger' click={props.cancel}>
                         No
                    </ButtonModal>
               </ul>
          </Fragment>
     );
};

export default Order;
