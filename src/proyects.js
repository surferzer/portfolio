import React from 'react';
import './proyects.css'

class Proyects extends React.Component {
    render(){
        return(
        <div className='vista'>
            <div className='cypher'>
            <a href="https://surferzer.github.io/GDL003-cipher/src/" title="Cipher">
            <img src= "https://i.ibb.co/qj6dy9W/cipher.png" width="50%" alt="Cipher"/></a>
                </div>

                <div className='dataLovers'>
               <a href="https://surferzer.github.io/GDL003-data-lovers/src/" tittle="dataLovers">
               <img src="https://i.ibb.co/88t7p7t/data-Lovers-2.png" width="50%" alt="dataLovers"/> </a>
           </div>

           <div className='labNotes'>
               <a href="" tittle="labNotes">
               <img src="" alt="labNotes"/> </a>
           </div>

           <div className='ciboulette'>
               <a href="https://lauramayar.github.io/GDL003-Burger-Queen-Front-End/" tittle="ciboulette">
               <img src="https://i.ibb.co/G360XKF/ciboulette-2.png" width="50%" alt="ciboulette"/> </a>
           </div>

           
       </div>
       );
   }
};
export default Proyects;