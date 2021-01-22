import React, { Fragment, useEffect } from "react";

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

     //    e40-41
     useEffect(() => {
          console.log("Main.jsx useEffect()");
          setTimeout(() => {
              alert('welcome bro!')
          }, 2000);
     }, [props.products]);

     return (
          <Fragment>
               <h2>Book App</h2>
               <p>Hello World!</p>

               <button
                    style={btn}
                    // onClick={this.changePriceHandler.bind(this,"new Title")}
                    onClick={props.click}
               >
                    click on me!
               </button>
          </Fragment>
     );
};

export default Main;
