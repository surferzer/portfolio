import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Proyects from './proyects.js'
import ButtonBases from './barra.js'
import './home.css';
import AboutMe from './aboutMe';
import './App.css';
import Contact from './contact';




class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = { item: [] }

  }


  render() {
    return (

      <div>

        <div className="title">
          <h1>Fernanda<br />Zermeño</h1>
          <h2>Front-end Developer</h2>
        </div>

        <div>
          <AboutMe/>
        <Proyects/>
       <Contact />
          <ButtonBases />
        </div>

      <div>
    
      </div>


      </div>
    )
  }
}

export default Home;