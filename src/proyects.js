import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import './proyects.css'


class Proyects extends React.Component {
    render(){
        return(


        <div className='vista'>

        <CSSTransitionGroup
           transitionName="titleProject_animation"
           transitionAppear={true}
            transitionAppearTimeout={1000}
            transitionEnter={false}
            transitionLeave={false}>
            <p className="titleProject">
                 Web Developer Proyects 
            </p>
        </CSSTransitionGroup>
            
            {/* <div className='cypher'>
            <a href="https://surferzer.github.io/GDL003-cipher/src/" title="Cipher">
            <img src= "https://i.ibb.co/qj6dy9W/cipher.png" width="30%" alt="Cipher"/></a>
                </div> */}

                <div className='dataLovers'>
               <a href="https://surferzer.github.io/GDL003-data-lovers/src/" tittle="dataLovers">
               <img src="https://i.ibb.co/88t7p7t/data-Lovers-2.png" width="30%" alt="dataLovers"/> </a>
           </div>

           {/* <div className='socialNetwork'>
               <a href="https://cstgarcia1204.githum.io/GDL003-social-network/src/" tittle="socialNetwork">
               <img src="https://i.imgur.com/EHbKcaC.jpg" width="30%" alt="socialNetwork"/> </a>
           </div> */}

           <div className='labNotes'>
               <a href="https://surferzer.github.io/GDL003-lab-notes/" tittle="labNotes">
               <img src="https://i.ibb.co/Jj1K1JX/labnotes-2.png" width="30%" alt="labNotes"/> </a>
           </div>

           <div className='ciboulette'>
               <a href="https://lauramayar.github.io/GDL003-Burger-Queen-Front-End/" tittle="ciboulette">
               <img src="https://i.ibb.co/G360XKF/ciboulette-2.png" width="30%" alt="ciboulette"/> </a>
           </div>

           <div className='competitionSystem'>
               <a href="https://surferzer.github.io/GDL003-personal-project/" tittle="competitionSystem">
               <img src="https://i.ibb.co/0XThBbb/competition-Sistem-2.png" width="30%" alt="competitionSystem"/> </a>
           </div>
           









           
       </div>
       );
   }
};
export default Proyects;
