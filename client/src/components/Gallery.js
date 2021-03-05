import React from 'react';

export default function Gallery() {
   return (
      <div className='container'>
         <h1 className='light-title'>
            Galería
         </h1>
         <div className='gallery-card'>
            <a href={'http://' + window.location.host.replace(/:[0-9][0-9][0-9][0-9]/, '') + ':8566'} 
               rule='noopener noreferer' target='_blank' className='gallery-item'>
               <p>Agua potable</p>
            </a>
            <a href={'http://' + window.location.host.replace(/:[0-9][0-9][0-9][0-9]/, '') + ':8564'} 
               rule='noopener noreferer' target='_blank' className='gallery-item'>
               <p>Lavandería</p>
            </a>
            <a href={'http://' + window.location.host.replace(/:[0-9][0-9][0-9][0-9]/, '') + ':8565'} 
               rule='noopener noreferer' target='_blank' className='gallery-item'>
               <p>Gasolinería</p>
            </a>
            <a href={'http://' + window.location.host.replace(/:[0-9][0-9][0-9][0-9]/, '') + ':8563'} 
               rule='noopener noreferer' target='_blank' className='gallery-item'>
               <p>Zapatería</p>
            </a>
         </div>
      </div>
   )
}
