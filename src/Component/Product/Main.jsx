import React, { Fragment, useEffect, useRef, useContext } from "react";
import { AuthContext } from "./../Context/AuthContext";

const Main = (props) => {
     const btn = {
          backgroundColor: "#7b1fa2",
          color: "#ffffff",
          font: "inherit",
          border: "none",
          outline: "none",
          borderRadius: "3px",
          padding: "0.6rem",
          margin: "0.6rem auto",
     };
     //  e53
const {login}= useContext(AuthContext)

     //  e49
     const refBtn = useRef(null);

     // e40-41
     useEffect(() => {
          console.log("Main.jsx useEffect()");
          refBtn.current.click();
          return () => {
               console.log("Main.js Clean up - useEffect");
          };
     }, []);

     return (
          <Fragment>
               <h2>Book App</h2>
               <p>Hello World!</p>

               <button
                    ref={refBtn}
                    style={btn}
                    // onClick={this.changePriceHandler.bind(this,"new Title")}
                    onClick={props.click}
               >
                    click on me!
               </button>

                         <button onClick={login}>Login!</button>
          </Fragment>
     );
};

export default Main;
