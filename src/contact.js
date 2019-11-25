import React from "react";
import './contact.css'

 


class Contact extends React.Component {
  render() {
    return (

      
      <div class="contacting">
        <p className="titleContact">Contact me!</p>
        <div className= 'contacto'>
          <div className="email">
               <h2> <a href='mafernandazr@gmail.com'><img src="https://images.vexels.com/media/users/3/157444/isolated/preview/cac65f0418e3896e226f803751364216-icono-de-sobre-de-marketing-by-vexels.png" width="20%" hover="mafernandazr@gmail.com"/><br></br>
               mafernandazr@gmail.com</a></h2>
               </div>
               <br></br>

               <div className="gitHub">
               <h2>Github: <a href='https://github.com/surferzer'><img src="https://www.iconsdb.com/icons/preview/orange/github-6-xxl.png" width="20%" /></a></h2>
               </div>

               <div className="linkedIn">
               <h2>Linked In: <a href='https://linkedin.com/fernandazermeno'><img src="https://iconsplace.com/wp-content/uploads/_icons/ffa500/256/png/linkedin-2-icon-11-256.png" width="20%" /></a></h2>
               </div>

               <div className="cv">
               <h2>Cv: <a href=''><img src="https://www.u.com.my/sites/all/themes/zurb-foundation/images/umobile/selfcare_login_pic.png" width="30%" /></a></h2>
               </div>

           </div>
      </div>
    );
  }
}
 


export default Contact;
  
  
       