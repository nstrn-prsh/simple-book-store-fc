// shamele ghesmate aslie user interface (ui)
import React, { Fragment } from "react";

const Layout = (props) => {
     return (
          <Fragment>
               <main style={{ margin: "1rem" }}>{props.children}</main>
          </Fragment>
     );
};

export default Layout;
