import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Proyectos from './Proyectos.js'


class App extends React.Component {
constructor(props) {
super(props)

this.state = { item: [] }

}


render(){
  return (
   // <div className="contededor">
    <div className="App">
     / <img src="https://i.pinimg.com/originals/c8/96/97/c896970cd258023e93135f91c14524c3.jpg" className="imagen" alt="imagen de fondo"/>
     
<div className="titulos">
<h1>Fernanda Zermeño</h1>
<h2>Front-end Developer</h2>

</div>

<div className="proyectos">
  <Proyectos />

  </div>

</div>
     


//</div>
  )}}  

export default App;
