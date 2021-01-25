import React, { Component, Fragment } from "react";
import Layout from "./Components/Layouts/Layout";
import Shopping from "./Components/Shopping/Shopping";

class App extends Component {
     render() {
          return (
               <Fragment>
                    <Layout>
                         <p> shopping cart! </p>
                         <Shopping />
                    </Layout>
               </Fragment>
          );
     }
}

export default App;
