import React, { Component, Fragment } from "react";
import Layout from "./Components/Layouts/Layout";
import Shopping from "./Components/Shopping/Shopping";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Checkout from './Components/Shopping/Checkout';

class App extends Component {
     render() {
          return (
               <Fragment>
               <Router>
                    <Layout>
                    <Switch>
                         <Route path='/checkout' component={Checkout} />
                         <Route path='/' exact component={Shopping} />
                    </Switch>
                    </Layout>
               </Router>
               </Fragment>
          );
     }
}

export default App;
