import React, { lazy, Suspense } from 'react';
import Homepage from './pages/shop/Homepage'
import Landing from './pages/Landing/Landing'
import ErrorPage from './pages/error-boundary/ErrorPage'
import ShoppingCart from './pages/shop/ShoppingCart'
import Checkout from './pages/shop/Checkout'
import ProductPage from './pages/shop/ProductPage'

import ShoppingCartSkeleton from './pages/skeleton/ShoppingCartSkeleton'
import CheckoutSkeleton from './pages/skeleton/CheckoutSkeleton'
import ProductPageSkeleton from './pages/skeleton/ProductPageSkeleton'
import LandingSkeleton from './pages/skeleton/LandingSkeleton';
import HomepageSkeleton from './pages/skeleton/HomepageSkeleton';

function App() {
  return (
    <div className="App">
      {/* <ProductPage/> */}
      {/* <Checkout/> */}
      {/* <ShoppingCart/> */}
      {/* <Landing/> */}
      {/* <Homepage/> */}

      {/* <ProductPageSkeleton/> */}
      {/* <CheckoutSkeleton/> */}
      {/* <ShoppingCartSkeleton/> */} 
      {/* <LandingSkeleton/> */}
      <HomepageSkeleton/>


    </div>
  );
}

export default App;