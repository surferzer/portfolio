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
                 Web Developer Projects 
            </p>
        </CSSTransitionGroup>
            


<div className="cardStyle">
    


    <div className='card text-center shadow'>
      <div className='overflow'>
        <a href="https://surferzer.github.io/GDL003-data-lovers/src/"><img src="https://i.ibb.co/88t7p7t/data-Lovers-2.png" width="60%" alt='DataLovers' className='card-img-top'/></a>
      </div>
      <div className='card-body text-dark'>
        <h4 className='card-title'>DataLovers</h4>
        <p className='card-text text-secondary'>
         Data Lovers is a project that let you know more about "Rick and Morty" series and it's possible to filter the characters by categories.
         JAVASCRIPT/HTML5/CCS.
 
        </p>
        <a href="https://surferzer.github.io/GDL003-data-lovers/src/" className='btn btn-outline-success'>
          Go inside
        </a>
      </div>
      </div>
   

      <div className='card text-center shadow'>
      <div className='overflow'>
     <a href="https://surferzer.github.io/GDL003-lab-notes/"><img src="https://i.ibb.co/Jj1K1JX/labnotes-2.png" width="44%" className='card-img-top'/></a>
      </div>
      <div className='card-body text-dark'>
        <h4 className='card-title'>Lab Notes</h4>
        <p className='card-text text-secondary'>
         Lab Notes is an aplication to write notes about your daily workout at the gym.
         It's possible to login by facebook, google and e-mail.
         JAVASCRIPT/FIREBASE/HTML5/CSS3.
        </p>
        <a href="https://surferzer.github.io/GDL003-lab-notes/" className='btn btn-outline-success'>
          Go inside
        </a>
      </div>
    
    </div>



    <div className='card text-center shadow'>
      <div className='overflow'>
      
        <a href="https://lauramayar.github.io/GDL003-Burger-Queen-Front-End/">
            <img src="https://i.ibb.co/G360XKF/ciboulette-2.png" width="60%" alt='DataLovers' className='card-img-top'/></a>
      </div>
      <div className='card-body text-dark'>
        <h4 className='card-title'>Ciboulette</h4>
        <p className='card-text text-secondary'>
        Ciboulette is an aplication to create commands for a french restaurant.
        It's a full stuck project, but my participation was as front-end, using REACT/CSS3
        </p>
        <a href="https://lauramayar.github.io/GDL003-Burger-Queen-Front-End/" className='btn btn-outline-success'>
          Go inside
        </a>
      </div>
    
    </div>

      


    <div className='card text-center shadow'>
      <div className='overflow'>
       
        <a href="https://surferzer.github.io/GDL003-personal-project/">
            <img src="https://i.ibb.co/0XThBbb/competition-Sistem-2.png" width="60%" alt='DataLovers' className='card-img-top'/></a>
      </div>
      <div className='card-body text-dark'>
        <h4 className='card-title'>Competition System GYM58</h4>
        <p className='card-text text-secondary'>
         Competition System GYM58 was made to create an event aplication with random brackets and competitors information in sport events.
         ANGULAR/CSS3 
        </p>
        <a href="https://surferzer.github.io/GDL003-personal-project/" className='btn btn-outline-success'>
          Go inside
        </a>
      </div>
    
    </div>


   
    </div>
  

 




            {/* <div className='cypher'>
            <a href="https://surferzer.github.io/GDL003-cipher/src/" title="Cipher">
            <img src= "https://i.ibb.co/qj6dy9W/cipher.png" width="30%" alt="Cipher"/></a>
                </div> */}

              {/*   <div className='dataLovers'>
               <a href="https://surferzer.github.io/GDL003-data-lovers/src/" tittle="dataLovers">
               <img src="https://i.ibb.co/88t7p7t/data-Lovers-2.png" width="30%" alt="dataLovers"/> </a>
           </div> */}

           {/* <div className='socialNetwork'>
               <a href="https://cstgarcia1204.githum.io/GDL003-social-network/src/" tittle="socialNetwork">
               <img src="https://i.imgur.com/EHbKcaC.jpg" width="30%" alt="socialNetwork"/> </a>
           </div> */}

          {/*  <div className='labNotes'>
               <a href="https://surferzer.github.io/GDL003-lab-notes/" tittle="labNotes">
               <img src="https://i.ibb.co/Jj1K1JX/labnotes-2.png" width="30%" alt="labNotes"/> </a>
           </div> */}

          {/*  <div className='ciboulette'>
               <a href="https://lauramayar.github.io/GDL003-Burger-Queen-Front-End/" tittle="ciboulette">
               <img src="https://i.ibb.co/G360XKF/ciboulette-2.png" width="30%" alt="ciboulette"/> </a>
           </div> */}

         {/*   <div className='competitionSystem'>
               <a href="https://surferzer.github.io/GDL003-personal-project/" tittle="competitionSystem">
               <img src="https://i.ibb.co/0XThBbb/competition-Sistem-2.png" width="30%" alt="competitionSystem"/> </a>
           </div>
            */}









           
       </div>
       );
   }
};
export default Proyects;
