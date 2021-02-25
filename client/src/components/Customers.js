import React from 'react';
import cfe from '../assets/img/cfe.jpg';
import bader from '../assets/img/bader.png';
import florsheim from '../assets/img/fs.png';
import ieeg from '../assets/img/ieeg.png';
import perugia from '../assets/img/perugia.png';
import udelasalle from '../assets/img/ulasalle.png';

export default function Customers() {
   return (
      <div className='container'>
         <h1 className='light-title'>
         </h1>
         <div className='customers-card'>
            <img src={cfe} className='customers-item' alt='CFE'/>
            <img src={ieeg} className='customers-item' alt='IEEG'/>
            <img src={florsheim} className='customers-item' alt='Florsheim'/>
            <img src={bader} className='customers-item' alt='Bader'/>
            <img src={udelasalle} className='customers-item' alt='Universidad De La Salle'/>
            <img src={perugia} className='customers-item' alt='perugia'/>
         </div>
      </div>
   )
}
