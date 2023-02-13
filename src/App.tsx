import Home from './pages/Home'
// import Cart from './pages/Cart';

import './scss/app.scss';
import { Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import React from 'react';

const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */'./pages/Cart'))
const FullSneakers = React.lazy(() => import(/* webpackChunkName: "FullSneakers" */ './pages/FullSneakers'))
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */ './pages/NotFound'))

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={
          <React.Suspense fallback={<div>Идет загрузка...</div>}>
            <Cart />
          </React.Suspense>} />
        <Route path="/sneakers/:id" element={
          <React.Suspense fallback={<div>Идет загрузка...</div>}>
            <FullSneakers />
          </React.Suspense>
        } />
        <Route path="*" element={
          <React.Suspense fallback={<div>Идет загрузка...</div>}>
            <NotFound />
          </React.Suspense>
        } />
      </Route>
    </Routes>
  );
}

export default App;
