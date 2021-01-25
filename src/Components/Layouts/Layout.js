// shamele ghesmate aslie user interface (ui)
import React, { Fragment } from "react";

const Layout = (props) => {
     return (
          <Fragment>
               <p> سلام به همه! </p>
               <main style={{ margin: "1rem" }}>{props.children}</main>
          </Fragment>
     );
};

export default Layout;
