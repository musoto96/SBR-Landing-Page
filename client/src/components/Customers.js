import React from 'react';
import Carousel from 'react-elastic-carousel';

import cfe from '../assets/img/cfe.jpg';
import bader from '../assets/img/bader.png';
import florsheim from '../assets/img/fs.png';
import ieeg from '../assets/img/ieeg.png';
import perugia from '../assets/img/perugia.png';
import udelasalle from '../assets/img/ulasalle.png';


export default function Customers() {
   const customers = [cfe, bader, florsheim, ieeg, udelasalle, perugia];
   const breakPoints = [
      { width: 1, itemsToShow: 1 }, 
      { width: 320, itemsToShow: 2 }, 
      { width: 768, itemsToShow: 3 }, 
      { width: 1025, itemsToShow: 4 }, 
      { width: 1201, itemsToShow: 5 }
   ]

   return (
      <div className='container'>
         <div className='customers-card'>
            <Carousel breakPoints={breakPoints} showArrows={false}>
               {customers.map((logo, idx) => {
                  return(<img className='customers-item' src={logo} alt={idx}/>)
               })}
            </Carousel>
         </div>
      </div>
   )
}
