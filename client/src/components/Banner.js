import React from 'react';
import {ReactComponent as Data} from '../assets/svg/data.svg';

export default function Banner() {
   return (
      <div className='banner-container'>
         <div className='card'>
            <p className='card-title'>
               Consultoría de Big Data y Análisis de Datos
            </p>
            <p>
            SBR es un servicio de consultoría empresarial que proporciona información detallada para permitir la toma de decisiones rápidas e informadas.
            Transformamos grandes volúmenes de datos para crear inteligencia en su negocio.
            </p>
            <p>
            SBR colabora con las empresas a descubrir en sus datos la información útil. Diseñamos dashboards que generan un impacto positivo en su empresa. 
            </p>
         </div>
         <div className='illustration-box'>
            <Data className='illustration' />
         </div>
      </div>
   )
}
