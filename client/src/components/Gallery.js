import React from 'react';
import Carousel from 'react-elastic-carousel';

export default function Gallery() {
   return (
      <div className='demos-container'>
         <h1 className='light-title'>
            Galería
         </h1>
         <Carousel className='demos-card' pagination={false}>
            <div>
               <h2>Política</h2>
               <p className='demo-title'>
                  Plataforma de análisis político.
               </p>
               <p className='demo-description'>
                  Plataforma de análisis político histórico con poderosos filtros, herramientas comparativas y análisis geográfico.
               </p>
               <a href={'http://politica.sbr-mx.com'} 
                  rule='noopener noreferer' target='_blank' className='demos-item'>
                  <p>Ir a demo</p>
               </a>
            </div>
            <div>
               <h2>Elecciones León, Gto</h2>
               <p className='demo-title'>
                  Análisis estadístico avanzado de elecciones.
               </p>
               <p className='demo-description'>
                  Plataforma de análisis de elecciones, partidos y votantes de León de los Aldama.
               </p>
               <a href={'http://leon.sbr-mx.com'} 
                  rule='noopener noreferer' target='_blank' className='demos-item'>
                  <p>Ir a demo</p>
               </a>
            </div>
            <div>
               <h2>Agua potable</h2>
               <p className='demo-title'>
                  Negocio de agua potable.
               </p>
               <p className='demo-description'>
                  En este negocio se depura y distribuye agua, producto de primera necesidad, a través de un vehículo.
               </p>
               <a href={'http://demoagua.sbr-mx.com'} 
                  rule='noopener noreferer' target='_blank' className='demos-item'>
                  <p>Ir a demo</p>
               </a>
            </div>
            <div>
               <h2>Lavandería / Tintorería</h2>
               <p className='demo-title'>
                  Negocio de lavado de ropa y planchado.
               </p>
               <p className='demo-description'>
                  En este negocio el cuidado y el control lo son todo para lograr tener la preferencia de los clientes.
               </p>
               <a href={'http://demo2m.sbr-mx.com'} 
                  rule='noopener noreferer' target='_blank' className='demos-item'>
                  <p>Ir a demo</p>
               </a>
            </div>
            <div>
               <h2>Gasolinera</h2>
               <p className='demo-title'>
                  Negocio de distribucion de combustible.
               </p>
               <p className='demo-description'>
                  En un negocio de alta competitividad como este, es indispensable tener información sintetizada lista para ser analizada.
               </p>
               <a href={'http://demoshell.sbr-mx.com'} 
                  rule='noopener noreferer' target='_blank' className='demos-item'>
                  <p>Ir a demo</p>
               </a>
            </div>
            <div>
               <h2>Zapatería</h2>
               <p className='demo-title'>
                  Negocio de venta de Zapato.
               </p>
               <p className='demo-description'>
                  Donde la temporada, moda y tendencias son lo primordial para maximizar ventas, la información de series de tiempo es invaluable para este negocio.
               </p>
               <a href={'http://' + window.location.host.replace(/:[0-9][0-9][0-9][0-9]/, '') + ':8563'} 
                  rule='noopener noreferer' target='_blank' className='demos-item'>
                  <p>Ir a demo</p>
               </a>
            </div>
         </Carousel>
      </div>
   )
}
