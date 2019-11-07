import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './Home';
import Contact from './contact';
import Proyects from './proyects';
import AboutMe from './aboutMe';



const Routes = () =>{
    return(
       <Switch>
<Route exact path= "/" component={Home}/>
<Route exact path="/contact" component={Contact}/>
<Route exact path="/proyects" component={Proyects}/>
<Route exact path="/aboutMe" component={AboutMe}/>
           </Switch>
    );
}



export default Routes;