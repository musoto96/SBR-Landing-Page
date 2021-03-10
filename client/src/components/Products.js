import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';

import forecast from '../assets/img/products/forecast.png';
import satisfaction from '../assets/img/products/satisfaction.png';
import pricing from '../assets/img/products/pricing.png';
import dashboard from '../assets/img/products/dashboard.png';
import mktsegment from '../assets/img/products/mktsegment.png';
import customermigration from '../assets/img/products/customermigration.png';
import snanalisis from '../assets/img/products/snanalisis.png';
import surveying from '../assets/img/products/surveying.png';

//SBR colabora con las empresas a descubrir en sus datos la información útil. Diseñamos dashboards que generan un impacto positivo en su empresa. 

export default function Products() {
   return (
      <div className='products-container'>
         <div className='pinned-intro'>
            <Controller>
               <Scene duration={'800%'} triggerHook={0} pin>
                  <div className='products-fixed'>
                     <div className='products-fixed-content'>
                        <h1>NUESTRAS SOLUCIONES</h1>
                        <p>
                        </p>
                     </div>
                  </div>
               </Scene>
            </Controller>
         </div>
         <div className='unpinned-intro'>
            <div className='products-fixed'>
               <div className='products-fixed-content'>
                  <h1>NUESTRAS SOLUCIONES</h1>
               </div>
            </div>
         </div>
         <div className='products-scroll'>
            <div>
               <img className='products-item' src={forecast} alt='forecast.png'/>
               <h1>
                  Modelos de Predicción
               </h1>
               <p>
                  Extracción de información existente en los datos y su utilización para predecir tendencias y patrones de comportamiento.
                  <br/>
                  <br/>
                  <span className='eng-translation'>
                     Forecasting methods and behavioral pattern  identification based on past and future data.
                  </span>
               </p>
            </div>

            <div>
               <img className='products-item' src={satisfaction} alt='satisfaction.png'/>
               <h1>
                  Modelo de Satisfacción del Cliente
               </h1>
               <p>
                  Herramienta para identificar los atributos valorados por los clientes así como el Net Promoter Score y tomar decisiones.
                  <br/>
                  <br/>
                  <span className='eng-translation'>
                     Quality management and marketing techniques that help manufacturers and sellers to identify customer’s expectations, perceived quality and the Net Promoter Score.
                  </span>
               </p>
            </div>

            <div>
               <img className='products-item' src={pricing} alt='pricing.png'/>
               <h1>
                  Determinación de Precios
               </h1>
               <p>
                  Cálculo del precio óptimo de acuerdo a la elasticidad del producto tomando en cuenta las necesidades de la empresa, el cliente y el mercado.
                  <br/>
                  <br/>
                  <span className='eng-translation'>
                     Applied statistical models and competitor analysis for pricing strategies involving the nature of the company, customers and market.
                  </span>
               </p>
            </div>

            <div>
               <img className='products-item' src={dashboard} alt='dashboard.png'/>
               <h1>
                  Dashboard
               </h1>
               <p>
                  Representación gráfica de los principales indicadores que intervienen en los objetivos de la empresa (KPIs). Orientado a la toma de decisiones para optimizar la estrategia de la empresa.
                  <br/>
                  <br/>
                  <span className='eng-translation'>
                     Graphical user interface for Key Performance Indicators (KPIs) relevant to a particular objective or business process, in order to make strategical decisions.
                  </span>
               </p>
            </div>

            <div>
               <img className='products-item' src={mktsegment} alt='mktsegment.png'/>
               <h1>
                  Segmentación de Mercado
               </h1>
               <p>
                  División de clientes en distintos grupos para así permitir a las empresas enviar mensajes personalizados a las audiencias correctas.
                  <br/>
                  <br/>
                  <span className='eng-translation'>
                     Dividing a target market into smaller groups that share similar characteristics for more effective marketing campaigns.
                  </span>
               </p>
            </div>

            <div>
               <img className='products-item' src={customermigration} alt='customermigration.png'/>
               <h1>
                  Migración de Clientes
               </h1>
               <p>
                  Entender el comportamiento del cambio de los clientes de un segmento a otro, identificar las causas y llegar a potenciales clientes.
                  <br/>
                  <br/>
                  <span className='eng-translation'>
                     Identifying and understanding the shift patterns of customers from one segment to another in order to reach current or potential cutomers.
                  </span>
               </p>
            </div>

            <div>
               <img className='products-item' src={snanalisis} alt='snanalisis.png'/>
               <h1>
                  Análisis de Redes Sociales
               </h1>
               <p>
                  Informes y análisis de los datos recabados en Facebook, Instagram, Twitter, etc. para determinar la interacción con el público y actuar de acuerdo con la información recabada.
                  <br/>
                  <br/>
                  <span className='eng-translation'>
                     Data analysis and interpretation of popular social networks such as Facebok, Instagram and Twitter in order to make assessments and take decisions.
                  </span>
               </p>
            </div>

            <div>
               <img className='products-item' src={surveying} alt='surveying.png'/>
               <h1>
                  Levantamiento de Encuestas
               </h1>
               <p>
                  Recolección, análisis e interpretación de datos recopilados de encuestas por distintos métodos de diversas fuentes.
                  <br/>
                  <br/>
                  <span className='eng-translation'>
                     Gathering of critical information for market analysis by contacting a sample that represents the target audience.
                  </span>
               </p>
            </div>
         </div>
      </div>
   )
}
