import React, { Component, Fragment } from "react";
import Layout from "./Components/Layouts/Layout";
import Shopping from "./Components/Shopping/Shopping";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Checkout from './Components/Shopping/Checkout';
import Account from './Components/Shopping/Account';

class App extends Component {
     render() {
          return (
               <Fragment>
               <Router>
                    <Layout>
                    <Switch>
                         <Route path='/checkout' component={Checkout} />
                         <Route path='/account' component={Account} />
                         <Route path='/' exact component={Shopping} />
                    </Switch>
                    </Layout>
               </Router>
               </Fragment>
          );
     }
}

export default App;
