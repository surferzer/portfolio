import React from 'react';

class Proyectos extends React.Component {
    render(){
        return(
        <div className='vista'>
            <div className='cypher'>
            <a href="https://surferzer.github.io/GDL003-cipher/src/" title="Cipher">
            <img src="" alt="Cipher"/></a>
                </div>

                <div className='dataLovers'>
               <a href="https://surferzer.github.io/GDL003-data-lovers/src/" tittle="dataLovers">
               <img src="" alt="dataLovers"/> </a>
           </div>

           <div className='movieChallenge'>
               <a href="" tittle="movieChallenge">
               <img src="" alt="movieChallenge"/> </a>
           </div>

           <div className='labNotes'>
               <a href="" tittle="labNotes">
               <img src="" alt="labNotes"/> </a>
           </div>

           <div className='ciboulette'>
               <a href="https://lauramayavayahayaraya.github.io/GDL003-Burger-Queen-Front-End/" tittle="ciboulette">
               <img src="" alt="ciboulette"/> </a>
           </div>

           <div className= 'contacto'>
               <h2>Email: <a href='mafernandazr@gmail.com'>mafernandazr@gmail.com</a></h2>
               <h2>Github: <a href='https://github.com/surferzer'>https://github.com/surferzer</a></h2>
           </div>
       </div>
       );
   }
};
export default Proyectos;