import React, { useState } from 'react';
import logo from '../assets/img/sbr-logo.png';
import { FaBars } from 'react-icons/fa';
import { GrFacebookOption, GrTwitter, GrLinkedinOption, GrGithub } from 'react-icons/gr';


function Navbar() {
   const [navActive, setNavActive] = useState(false)

   return(
      <nav>
         <div className='logo-container'>
            <a href='#' rel='noreferrer'>
               <img className='logo' alt='logo-RR' src={logo}/>
            </a>
            <p className='brand-name'>
               Statistical Bureau for Research
            </p>
         </div>

         <ul className={(navActive ? 'nav-links-active' : '') + ' nav-links'}>
            <li>
               <a href='#'>
                  <GrFacebookOption className='nav-icon'/>
                  Compartir
               </a>
            </li>
            <li>
               <a href='#'>
                  <GrTwitter className='nav-icon'/>
                  Tweet
               </a>
            </li>
            <li>
               <a href='#'>
                  <GrLinkedinOption className='nav-icon'/>
                  LinkedIn
               </a>
            </li>
            <li>
               <a href='#'>
                  <GrGithub className='nav-icon'/>
                  GitHub
               </a>
            </li>
         </ul>
         <FaBars className='nav-menu' onClick={() => setNavActive(!navActive)}/>
      </nav>
   )
};

export default Navbar;
