import React, { useState } from 'react';
import logo from '../assets/img/sbr-logo.png';
import { FaBars } from 'react-icons/fa';
import { Link} from 'react-router-dom';


function Navbar() {
   const [navActive, setNavActive] = useState(false)

   return(
      <nav>
        <div className='logo-container'>
          <Link to='/' onClick={() => setNavActive(false)}>
            <img className='logo' alt='logo-RR' src={logo}/>
          </Link>
          <Link to='/' onClick={() => setNavActive(false)}>
            <p className='brand-name'>
               Statistical Bureau for Research
            </p>
          </Link>
        </div>

        <ul className={(navActive ? 'nav-links-active' : '') + ' nav-links'}>

          <li>
            <div class="nav-dropdown">
              <p>
                Acerca de Nosotros
              </p>
              <div class="nav-dropdown-content">
                <Link to='/about' onClick={() => setNavActive(false)}>
                  <p>
                    Quienes somos
                  </p>
                </Link>
                <Link to='/principles' onClick={() => setNavActive(false)}>
                  <p>
                    Principios éticos
                  </p>
                </Link>
                <Link to='/values' onClick={() => setNavActive(false)}>
                  <p>
                    Valores compartidos
                  </p>
                </Link>
              </div>
            </div>
          </li>

          <li>
            <a href='#'>
            </a>
          </li>

          <li>
             <a href='#'>
             </a>
          </li>

          <li>
             <a href='#'>
             </a>
          </li>

        </ul>

        <FaBars className='nav-menu' onClick={() => setNavActive(!navActive)}/>

      </nav>
   )
};

export default Navbar;



//<a href='#' rel='noreferrer'>
   //<img className='logo' alt='logo-RR' src={logo}/>
//</a>
