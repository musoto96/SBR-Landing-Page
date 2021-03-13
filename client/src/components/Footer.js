import React from 'react';
import { GrFacebookOption, GrTwitter, GrGithub } from 'react-icons/gr';

export default function Footer() {
   return (
      <div className='footer'>
         &copy; 2021 Statistical Bureau for Research
         <ul className='social-media'>
            <h1>
               Redes
            </h1>
            <li>
               <a rel='noopener noreferer' target='_blank' href='https://www.facebook.com/SBRmex'>
                  <GrFacebookOption className='nav-icon'/>
                  Compartir
               </a>
            </li>
            <li>
               <a rel='noopener noreferer' target='_blank' href='https://twitter.com/sbr_mx'>
                  <GrTwitter className='nav-icon'/>
                  Tweet
               </a>
            </li>
            <li>
               <a rel='noopener noreferer' target='_blank' href='#'>
                  <GrGithub className='nav-icon'/>
                  GitHub
               </a>
            </li>
         </ul>
      </div>
   )
}

// , GrLinkedinOption
//<li>
   //<a href='#'>
      //<GrLinkedinOption className='nav-icon'/>
      //LinkedIn
   //</a>
//</li>
