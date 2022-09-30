import React from 'react'
import {Product} from './components/Product'
import {products} from './data/products'


function App() {
  const listProducts =  products.map((product) =>
    <Product key={product.id} product={product} />  );

  return (
  <div className='py-2 px-4'>
    {listProducts}
  </div>
  );
}

export default App;
