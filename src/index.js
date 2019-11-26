import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



//Browser Router
import {HashRouter} from 'react-router-dom';


/*
<Router>
<Route exact path="/" component={App}/>
<Route exact path="/contact" component={Contact}/>
<Route exact path="/proyects" component={Proyects}/>
<Route exact path="/aboutMe" component={AboutMe}/>
</Router>
*/

ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
