import React from 'react';

import Banner from './Banner';
import Products from './Products';
import Customers from './Customers';
import Gallery from './Gallery';

export default function Home() {
  return(
    <div>
      <Banner />
      <Products />
      <Customers />
      <Gallery />
    </div>
  )
};
