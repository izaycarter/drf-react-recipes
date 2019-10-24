import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CreateRecipes from "./components/CreateRecipes";
import Login from './components/Login';
import StartPage from "./components/StartPage";
import BaseLayout from "./components/BaseLayout";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

ReactDOM.render(
    <Router>
        <BaseLayout>
            <Switch>
                <Route path='/login/' component={Login}/>
                <Route path="/recipes/new/" component={CreateRecipes}/>
                <Route exact path="/" component={StartPage}/>
            </Switch>
        </BaseLayout>
        <link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossOrigin="anonymous"
/>
    </Router>
, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
