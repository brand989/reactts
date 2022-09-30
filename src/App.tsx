import React from 'react'
import {Product} from './components/Product'
import {products} from './data/products'


function App() {
  return (
  <div className='py-2 px-4'>
    <Product product={products[0]}/>
  </div>
  );
}

export default App;
