// shamele ghesmate aslie user interface (ui)
import React, { Fragment } from "react";
import Navbar from "./../Navigation/Navbar";

const Layout = (props) => {
     return (
          <Fragment>
               <Navbar />
               <main style={{ margin: "10rem" }}>{props.children}</main>
          </Fragment>
     );
};

export default Layout;
