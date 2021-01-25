// shamele ghesmate aslie user interface (ui)
import React, { Fragment } from "react";

const Layout = (props) => {
     return (
          <Fragment>
               <p> سلام به همه! </p>
               <main>{props.children}</main>
          </Fragment>
     );
};

export default Layout;
